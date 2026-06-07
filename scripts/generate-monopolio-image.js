const fs = require('fs')
const path = require('path')

const TOKEN = process.env.REPLICATE_API_TOKEN
if (!TOKEN) { console.error('REPLICATE_API_TOKEN missing'); process.exit(1) }

const PROMPT = `Minimalist dark editorial illustration. A fragmented map or schematic under tense low light, with only three small areas illuminated by warm gold beams of light, while the vast majority of the surface remains in shadow. Deep navy blue and dark sapphire tones with a warm gold accent color (#E0C58F). No text. Abstract, moody, cinematic. Premium editorial feel. Concept: information concentrated in a few hands, opacity in an organization, the cost of secrecy.`

const OUT = path.join(__dirname, '..', 'public', 'blog-romper-el-monopolio.webp')

async function main() {
  const create = await fetch('https://api.replicate.com/v1/models/black-forest-labs/flux-1.1-pro/predictions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
      'Prefer': 'wait',
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
  })
  if (!create.ok) {
    console.error('Create failed:', create.status, await create.text())
    process.exit(1)
  }
  let pred = await create.json()
  console.log('Created:', pred.id, 'status:', pred.status)

  while (pred.status !== 'succeeded' && pred.status !== 'failed' && pred.status !== 'canceled') {
    await new Promise(r => setTimeout(r, 2000))
    const r = await fetch(pred.urls.get, { headers: { 'Authorization': `Bearer ${TOKEN}` } })
    pred = await r.json()
    console.log('  status:', pred.status)
  }

  if (pred.status !== 'succeeded') {
    console.error('Generation failed:', pred.status, pred.error)
    process.exit(1)
  }

  const imgUrl = Array.isArray(pred.output) ? pred.output[0] : pred.output
  console.log('Image URL:', imgUrl)

  const img = await fetch(imgUrl)
  if (!img.ok) {
    console.error('Download failed:', img.status)
    process.exit(1)
  }
  const buf = Buffer.from(await img.arrayBuffer())
  fs.writeFileSync(OUT, buf)
  console.log('Saved:', OUT, '(', buf.length, 'bytes )')
}

main().catch(e => { console.error(e); process.exit(1) })
