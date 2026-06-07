import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const envPath = path.join(__dirname, '..', '.env.local')
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
  }
}

const token = process.env.REPLICATE_API_TOKEN
if (!token) { console.error('Missing REPLICATE_API_TOKEN'); process.exit(1) }

const prompt = `Minimalist dark editorial illustration. A field of extinguished candles in deep shadow, only their thin smoke trails rising silently in the dark. In the center, a single ember still glowing faintly red-orange under a precise warm gold spotlight beam (#E0C58F), as if barely held alive. Deep navy blue and dark sapphire tones dominate the scene; the ember and the spotlight provide the only warm accent. No text. Abstract, moody, cinematic. Premium editorial feel. Concept: a team in passive guard, doing the minimum, while one explicit contract of ownership keeps the fire from going out entirely.`

const body = {
  input: {
    prompt,
    aspect_ratio: '16:9',
    output_format: 'webp',
    output_quality: 90,
    safety_tolerance: 2,
  },
}

console.log('Creating prediction...')
const create = await fetch('https://api.replicate.com/v1/models/black-forest-labs/flux-1.1-pro/predictions', {
  method: 'POST',
  headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', Prefer: 'wait' },
  body: JSON.stringify(body),
})
if (!create.ok) { console.error('create failed', create.status, await create.text()); process.exit(1) }
const pred = await create.json()
console.log('Prediction id:', pred.id, 'status:', pred.status)

let status = pred.status
let output = pred.output
let getUrl = pred.urls?.get
let attempts = 0
while (status !== 'succeeded' && status !== 'failed' && status !== 'canceled' && attempts < 60) {
  await new Promise(r => setTimeout(r, 2500))
  const p = await fetch(getUrl, { headers: { Authorization: `Bearer ${token}` } })
  const j = await p.json()
  status = j.status
  output = j.output
  attempts++
  process.stdout.write(`.${status === 'processing' ? '' : '['+status+']'}`)
}
console.log()

if (status !== 'succeeded') { console.error('Failed:', status); process.exit(1) }

const url = Array.isArray(output) ? output[0] : output
console.log('Image URL:', url)

const img = await fetch(url)
if (!img.ok) { console.error('download failed'); process.exit(1) }
const buf = Buffer.from(await img.arrayBuffer())
const out = path.join(__dirname, '..', 'public', 'blog-encender-el-minimo-viable.webp')
fs.writeFileSync(out, buf)
console.log('Saved:', out, '(' + buf.length + ' bytes)')
