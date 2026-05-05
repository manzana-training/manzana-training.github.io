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

const prompt = `Minimalist dark editorial illustration. A sleek paper airplane caught mid-flight, entangled and slowed by a dense intricate web of dark threads, ropes and bureaucratic ribbons stretching across the frame. Deep navy blue and dark sapphire tones with warm gold accent color (#E0C58F) catching the leading edge of the airplane and a few thin highlight threads. No text. Abstract, moody, cinematic. Premium editorial feel. Concept: the velocity of an early-stage startup being strangled by premature corporate process, meeting culture and self-imposed red tape.`

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
  headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
})
if (!create.ok) { console.error('create failed', create.status, await create.text()); process.exit(1) }
const pred = await create.json()
console.log('Prediction id:', pred.id)

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
const out = path.join(__dirname, '..', 'public', 'blog-romper-la-burocracia-precoz.webp')
fs.writeFileSync(out, buf)
console.log('Saved:', out, '(' + buf.length + ' bytes)')
