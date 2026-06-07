// Genera la imagen del artículo "Decir no al dinero" usando Replicate Flux 1.1 Pro.
import fs from 'node:fs/promises'
import path from 'node:path'

const ROOT = path.resolve(process.cwd())
const ENV_PATH = path.join(ROOT, '.env.local')
const OUTPUT_PATH = path.join(ROOT, 'public', 'blog-decir-no-al-dinero.webp')

async function loadEnv() {
  const text = await fs.readFile(ENV_PATH, 'utf8')
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i)
    if (!m) continue
    const [, key, raw] = m
    const value = raw.replace(/^['"]|['"]$/g, '')
    if (!process.env[key]) process.env[key] = value
  }
}

async function main() {
  await loadEnv()
  const token = process.env.REPLICATE_API_TOKEN
  if (!token) throw new Error('REPLICATE_API_TOKEN missing in .env.local')

  const prompt =
    'Minimalist dark editorial illustration. An unbalanced antique brass scale suspended in a dim wood-paneled room: one side weighted with a single small gold coin, the other side empty and tilted high. Soft directional light from upper left, deep shadows. No text, no figures, no faces. Deep navy blue and dark sapphire tones with warm gold accent color #E0C58F on the coin and rim of the scale. Abstract, moody, cinematic, premium editorial feel. Concept: the difficult conversation about money when there is none.'

  console.log('Creating prediction...')
  const createRes = await fetch(
    'https://api.replicate.com/v1/models/black-forest-labs/flux-1.1-pro/predictions',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: {
          prompt,
          aspect_ratio: '16:9',
          output_format: 'webp',
          output_quality: 90,
          safety_tolerance: 2,
        },
      }),
    }
  )
  if (!createRes.ok) {
    const t = await createRes.text()
    throw new Error(`create failed: ${createRes.status} ${t}`)
  }
  const prediction = await createRes.json()
  console.log('Prediction id:', prediction.id)

  let result = prediction
  while (result.status !== 'succeeded' && result.status !== 'failed' && result.status !== 'canceled') {
    await new Promise((r) => setTimeout(r, 2500))
    const pollRes = await fetch(result.urls.get, {
      headers: { Authorization: `Bearer ${token}` },
    })
    result = await pollRes.json()
    process.stdout.write('.')
  }
  process.stdout.write('\n')

  if (result.status !== 'succeeded') {
    throw new Error(`prediction ${result.status}: ${JSON.stringify(result.error)}`)
  }

  const imageUrl = Array.isArray(result.output) ? result.output[0] : result.output
  if (!imageUrl) throw new Error('no output URL')
  console.log('Image URL:', imageUrl)

  const imgRes = await fetch(imageUrl)
  if (!imgRes.ok) throw new Error(`download failed: ${imgRes.status}`)
  const buf = Buffer.from(await imgRes.arrayBuffer())
  await fs.writeFile(OUTPUT_PATH, buf)
  console.log('Saved:', OUTPUT_PATH, `(${(buf.length / 1024).toFixed(1)} KB)`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
