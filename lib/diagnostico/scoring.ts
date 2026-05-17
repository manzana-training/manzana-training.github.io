import { detectArchetype, Scores, Archetype } from './archetypes'

export type Answers = Record<string, number | string>

const avg = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length
const pctL = (avgL: number) => Math.round((avgL / 5) * 100)
const range = (prefix: string, n: number) =>
  Array.from({ length: n }, (_, i) => `${prefix}${i + 1}`)

const VIGNETTE_MAP: Record<string, number> = { A: 25, B: 100, C: 40, D: 60 }
const vignetteScore = (v: unknown) =>
  VIGNETTE_MAP[String(v).toUpperCase()] ?? 0

export type TopT = { key: string; score: number }

export type DiagnosticResult = {
  scores: Scores
  topT: TopT[]
  archetype: Archetype
  recommendedTs: string[]
}

function num(a: Answers, k: string): number {
  return Number(a[k]) || 0
}

export function computeResult(answers: Answers): DiagnosticResult {
  const ms = pctL(avg(range('S', 5).map((k) => num(answers, k))))
  const pr = pctL(avg(range('P', 10).map((k) => num(answers, k))))

  const space = pctL(avg(['M1', 'M2'].map((k) => num(answers, k))))
  const time = pctL(num(answers, 'M3'))
  const energy = pctL(num(answers, 'M4'))
  const decision = pctL(avg(['M5', 'M6'].map((k) => num(answers, k))))
  const power = pctL(avg(['M7', 'M8'].map((k) => num(answers, k))))
  const narrative = pctL(num(answers, 'M9'))
  const exit = pctL(num(answers, 'M10'))

  const rb = Math.round(
    avg([
      vignetteScore(answers['V1']),
      vignetteScore(answers['V2']),
      vignetteScore(answers['V3']),
    ])
  )

  const topT = range('T', 12)
    .map((k) => ({ key: k, score: num(answers, k) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)

  const scores: Scores = {
    ms,
    pr,
    space,
    time,
    energy,
    decision,
    power,
    narrative,
    exit,
    rb,
  }
  const archetype = detectArchetype(scores)

  const recommendedTs =
    archetype.recommendedTs.length > 0
      ? archetype.recommendedTs
      : topT.map((t) => t.key)

  return { scores, topT, archetype, recommendedTs }
}
