import fs from 'node:fs/promises'
import path from 'node:path'

async function loadEnv() {
  try {
    const txt = await fs.readFile(path.resolve(process.cwd(), '.env.local'), 'utf8')
    for (const line of txt.split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
      if (!m) continue
      let v = m[2]
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
        v = v.slice(1, -1)
      }
      if (!process.env[m[1]]) process.env[m[1]] = v
    }
  } catch (e) {
    console.error('Could not read .env.local:', e.message)
  }
}
await loadEnv()

const TOKEN = process.env.REPLICATE_API_TOKEN
if (!TOKEN) {
  console.error('Missing REPLICATE_API_TOKEN in .env.local')
  process.exit(1)
}

const SLUG = 'cerrar-sin-aplausos'
const PROMPT = `Minimalist dark editorial illustration. A single heavy wooden door, closed, in a dim empty hall — no audience, no figures, no movement. A narrow shaft of warm golden light cuts diagonally across the door from the upper right, picking out the grain of the wood. The rest of the scene fades into deep navy and dark sapphire shadow. Quiet, still, resolved. Cinematic, moody, premium feel. Deep navy blue and dark sapphire tones with warm gold accent color (#E0C58F). No text. Abstract, editorial. Concept: the moment after a hard decision is closed — silence instead of applause, stillness instead of approval.`

async function main() {
  console.log(`[${SLUG}] Creating prediction...`)
  const create = await fetch(
    'https://api.replicate.com/v1/models/black-forest-labs/flux-1.1-pro/predictions',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
        Prefer: 'wait',
      },
      body: JSON.stringify({
        input: {
          prompt: PROMPT,
          aspect_ratio: '16:9',
          output_format: 'webp',
          output_quality: 90,
          safety_tolerance: 2,
        },
      }),
    }
  )
  if (!create.ok) {
    console.error('Create failed:', create.status, await create.text())
    process.exit(1)
  }
  let prediction = await create.json()
  console.log(`[${SLUG}] Initial status: ${prediction.status}`)

  while (prediction.status !== 'succeeded' && prediction.status !== 'failed' && prediction.status !== 'canceled') {
    await new Promise((r) => setTimeout(r, 2000))
    const poll = await fetch(prediction.urls.get, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    })
    prediction = await poll.json()
    console.log(`[${SLUG}] Status: ${prediction.status}`)
  }

  if (prediction.status !== 'succeeded') {
    console.error('Prediction failed:', prediction.error)
    process.exit(1)
  }

  const imageUrl = Array.isArray(prediction.output) ? prediction.output[0] : prediction.output
  console.log(`[${SLUG}] Image URL: ${imageUrl}`)

  const imgRes = await fetch(imageUrl)
  if (!imgRes.ok) {
    console.error('Failed to download image:', imgRes.status)
    process.exit(1)
  }
  const buf = Buffer.from(await imgRes.arrayBuffer())
  const outPath = path.resolve(process.cwd(), 'public', `blog-${SLUG}.webp`)
  await fs.writeFile(outPath, buf)
  console.log(`[${SLUG}] Saved to ${outPath} (${(buf.length / 1024).toFixed(1)} KB)`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
