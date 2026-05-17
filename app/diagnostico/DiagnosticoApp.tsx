'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import {
  QUESTIONS,
  CONTEXT_OPTIONS,
  ContextData,
  LikertQ,
  VignetteQ,
} from '../../lib/diagnostico/questions'
import { computeResult, Answers, DiagnosticResult } from '../../lib/diagnostico/scoring'
import { POSITION_BY_T } from '../../lib/diagnostico/positions-map'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const APPSCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwXdtAKpeolb8O_IrbjYYbWyQ3na731aTUx1QhS5o8UH1zm9m4rOiSrGMAykOQkiRiNcg/exec'
const FORMSPREE_URL = 'https://formspree.io/f/xlgoaeev'
const VERSION = 'v2-site'

type Step = 'intro' | 'context' | 'struct' | 'pressure' | 'situation' | 'moves' | 'sending' | 'result' | 'error'

const STEPS_ORDER: Step[] = ['intro', 'context', 'struct', 'pressure', 'situation', 'moves', 'result']

const LIKERT_LABELS = ['1', '2', '3', '4', '5']
const LIKERT_HINT = '1 = nunca / totalmente en desacuerdo · 5 = casi siempre / totalmente de acuerdo'

function track(event: string, label?: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', event, label ? { event_label: label } : undefined)
  }
}

function uuid() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID()
  return 'd_' + Date.now() + '_' + Math.random().toString(36).slice(2, 10)
}

function emailOk(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s || '').trim())
}

export function DiagnosticoApp() {
  const [step, setStep] = useState<Step>('intro')
  const [sessionId] = useState(uuid)
  const [context, setContext] = useState<ContextData>({
    nombre: '',
    email: '',
    posicion: '',
    entorno: '',
  })
  const [answers, setAnswers] = useState<Answers>({})
  const [stepError, setStepError] = useState('')
  const [result, setResult] = useState<DiagnosticResult | null>(null)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (new URLSearchParams(window.location.search).get('debug') === '1') {
      setContext({
        nombre: 'Test',
        email: 'test@example.com',
        posicion: 'director',
        entorno: 'crecimiento',
      })
      const fill: Answers = {}
      ;['S', 'P', 'T', 'M'].forEach((prefix) => {
        const n = prefix === 'S' ? 5 : prefix === 'M' ? 10 : prefix === 'P' ? 10 : 12
        for (let i = 1; i <= n; i++) fill[`${prefix}${i}`] = 3 + ((i % 3) - 1)
      })
      fill['V1'] = 'B'
      fill['V2'] = 'B'
      fill['V3'] = 'B'
      setAnswers(fill)
    }
  }, [])

  useEffect(() => {
    if (step === 'intro') return
    if (typeof window === 'undefined') return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [step])

  const progress = useMemo(() => {
    const idx = STEPS_ORDER.indexOf(step)
    if (idx <= 0) return 0
    if (step === 'result') return 100
    return Math.round((idx / (STEPS_ORDER.length - 1)) * 100)
  }, [step])

  function setLikert(k: string, v: number) {
    setAnswers((prev) => ({ ...prev, [k]: v }))
  }
  function setChoice(k: string, v: string) {
    setAnswers((prev) => ({ ...prev, [k]: v }))
  }

  function validateLikertGroup(keys: string[]): string[] {
    return keys.filter((k) => answers[k] === undefined || answers[k] === '')
  }
  function validateChoiceGroup(keys: string[]): string[] {
    return keys.filter((k) => !answers[k])
  }

  function goNext() {
    setStepError('')
    if (step === 'intro') {
      track('diagnostico_iniciar', 'diagnostico-site')
      setStep('context')
      return
    }
    if (step === 'context') {
      const { nombre, email, posicion, entorno } = context
      if (!nombre.trim()) return setStepError('Falta tu nombre.')
      if (!emailOk(email)) return setStepError('Email inválido.')
      if (!posicion) return setStepError('Indica desde qué posición respondes.')
      if (!entorno) return setStepError('Indica el entorno.')
      track('diagnostico_contexto_completo')
      setStep('struct')
      return
    }
    if (step === 'struct') {
      const missing = validateLikertGroup(QUESTIONS.STRUCT.map((q) => q.k))
      if (missing.length) return setStepError(`Faltan respuestas: ${missing.join(', ')}`)
      setStep('pressure')
      return
    }
    if (step === 'pressure') {
      const missing = validateLikertGroup(QUESTIONS.PRESSURE.map((q) => q.k))
      if (missing.length) return setStepError(`Faltan respuestas: ${missing.join(', ')}`)
      setStep('situation')
      return
    }
    if (step === 'situation') {
      const missing = validateLikertGroup(QUESTIONS.SITUATION.map((q) => q.k))
      if (missing.length) return setStepError(`Faltan respuestas: ${missing.join(', ')}`)
      setStep('moves')
      return
    }
    if (step === 'moves') {
      const missingL = validateLikertGroup(QUESTIONS.MOVES.map((q) => q.k))
      const missingV = validateChoiceGroup(QUESTIONS.VIGNETTES.map((q) => q.k))
      const missing = [...missingL, ...missingV]
      if (missing.length) return setStepError(`Faltan respuestas: ${missing.join(', ')}`)
      submit()
      return
    }
  }

  function goBack() {
    setStepError('')
    const order: Step[] = ['intro', 'context', 'struct', 'pressure', 'situation', 'moves']
    const idx = order.indexOf(step)
    if (idx > 0) setStep(order[idx - 1])
  }

  async function submit() {
    setStep('sending')
    const localResult = computeResult(answers)
    setResult(localResult)

    const payload = {
      test_field: 'site v2 ' + new Date().toISOString(),
      session_id: sessionId,
      version: VERSION,
      source: 'webapp-site',
      context,
      answers,
    }

    const summary = buildEmailSummary(context, localResult)

    const appscriptCall = fetch(APPSCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    }).catch(() => null)

    const formspreeCall = fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        email: context.email,
        nombre: context.nombre,
        _subject: `Diagnóstico MANZANA — ${localResult.archetype.name} (${context.nombre})`,
        _replyto: context.email,
        archetype: localResult.archetype.name,
        diagnosis: localResult.archetype.diagnosis,
        offer: `${localResult.archetype.offer} — ${localResult.archetype.offerPrice}`,
        posicion: context.posicion,
        entorno: context.entorno,
        ms_pct: localResult.scores.ms,
        pr_pct: localResult.scores.pr,
        rb_pct: localResult.scores.rb,
        top_situaciones: localResult.topT.map((t) => `${t.key}: ${POSITION_BY_T[t.key]?.name}`).join(' | '),
        resumen: summary,
        session_id: sessionId,
      }),
    }).catch((e) => ({ ok: false, error: String(e) } as { ok: boolean; error?: string }))

    const [, formspreeRes] = await Promise.all([appscriptCall, formspreeCall])

    if (formspreeRes && 'ok' in formspreeRes && !formspreeRes.ok) {
      setErrorMsg('No se pudo enviar el email. Tu diagnóstico se calculó localmente abajo.')
    }

    track('diagnostico_completado', localResult.archetype.id)
    setStep('result')
  }

  return (
    <div className="diag">
      {step !== 'intro' && step !== 'sending' && step !== 'result' && step !== 'error' && (
        <div className="diag-progress" aria-label={`Avance ${progress}%`}>
          <div className="diag-progress-bar" style={{ width: `${progress}%` }} />
        </div>
      )}

      {step === 'intro' && (
        <div className="diag-step reveal">
          <p className="diag-lead">
            Cuarenta preguntas. Ocho a doce minutos. Al terminar sabrás qué
            posición de presión estás jugando hoy, qué reflejo necesitas
            entrenar, y qué tipo de intervención le corresponde.
          </p>
          <ul className="diag-bullets">
            <li>No mide personalidad. Mide movimiento.</li>
            <li>Tu resultado llega a tu correo y queda visible aquí.</li>
            <li>Sin venta automática. Solo claridad.</li>
          </ul>
          <div className="diag-actions">
            <button type="button" className="mz-end-cta" onClick={goNext}>
              Iniciar diagnóstico →
            </button>
          </div>
        </div>
      )}

      {step === 'context' && (
        <div className="diag-step reveal">
          <h2 className="diag-h2">Contexto</h2>
          <p className="diag-sub">Cuatro datos para interpretar tus respuestas sin adivinar.</p>

          <div className="diag-field">
            <label htmlFor="d-nombre">Nombre</label>
            <input
              id="d-nombre"
              type="text"
              autoComplete="name"
              value={context.nombre}
              onChange={(e) => setContext({ ...context, nombre: e.target.value })}
            />
          </div>

          <div className="diag-field">
            <label htmlFor="d-email">Email</label>
            <input
              id="d-email"
              type="email"
              autoComplete="email"
              value={context.email}
              onChange={(e) => setContext({ ...context, email: e.target.value })}
            />
          </div>

          <div className="diag-field">
            <label htmlFor="d-posicion">Desde qué posición respondes</label>
            <select
              id="d-posicion"
              value={context.posicion}
              onChange={(e) => setContext({ ...context, posicion: e.target.value })}
            >
              <option value="">Selecciona</option>
              {CONTEXT_OPTIONS.posicion.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div className="diag-field">
            <label htmlFor="d-entorno">Entorno donde operas</label>
            <select
              id="d-entorno"
              value={context.entorno}
              onChange={(e) => setContext({ ...context, entorno: e.target.value })}
            >
              <option value="">Selecciona</option>
              {CONTEXT_OPTIONS.entorno.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <NavRow onBack={goBack} onNext={goNext} stepError={stepError} nextLabel="Continuar →" />
        </div>
      )}

      {step === 'struct' && (
        <LikertSection
          title="Madurez estructural"
          subtitle="¿Qué tan firme es la estructura del sistema donde operas?"
          hint={LIKERT_HINT}
          questions={QUESTIONS.STRUCT}
          answers={answers}
          onChange={setLikert}
          onBack={goBack}
          onNext={goNext}
          stepError={stepError}
        />
      )}

      {step === 'pressure' && (
        <LikertSection
          title="Presión y degradación"
          subtitle="En las últimas semanas…"
          hint={LIKERT_HINT}
          questions={QUESTIONS.PRESSURE}
          answers={answers}
          onChange={setLikert}
          onBack={goBack}
          onNext={goNext}
          stepError={stepError}
        />
      )}

      {step === 'situation' && (
        <LikertSection
          title="Situaciones críticas"
          subtitle="Cuando estoy bajo presión…"
          hint={LIKERT_HINT}
          questions={QUESTIONS.SITUATION}
          answers={answers}
          onChange={setLikert}
          onBack={goBack}
          onNext={goNext}
          stepError={stepError}
        />
      )}

      {step === 'moves' && (
        <div className="diag-step reveal">
          <h2 className="diag-h2">Movimientos ejecutivos</h2>
          <p className="diag-sub">Cuando estas situaciones aparecen…</p>
          <p className="diag-hint">{LIKERT_HINT}</p>

          <div className="diag-qs">
            {QUESTIONS.MOVES.map((q, i) => (
              <LikertRow
                key={q.k}
                index={i + 1}
                total={QUESTIONS.MOVES.length}
                q={q}
                value={answers[q.k] as number | undefined}
                onChange={(v) => setLikert(q.k, v)}
              />
            ))}
          </div>

          <div className="diag-divider" />

          <h2 className="diag-h2">Escenarios de decisión</h2>
          <p className="diag-sub">Elige la respuesta más parecida a lo que harías.</p>

          <div className="diag-qs">
            {QUESTIONS.VIGNETTES.map((q) => (
              <VignetteRow
                key={q.k}
                q={q}
                value={answers[q.k] as string | undefined}
                onChange={(v) => setChoice(q.k, v)}
              />
            ))}
          </div>

          <NavRow onBack={goBack} onNext={goNext} stepError={stepError} nextLabel="Ver diagnóstico →" />
        </div>
      )}

      {step === 'sending' && (
        <div className="diag-step reveal">
          <h2 className="diag-h2">Procesando…</h2>
          <p className="diag-sub">Calculando arquetipo, posiciones y recomendación.</p>
        </div>
      )}

      {step === 'result' && result && (
        <ResultView context={context} result={result} errorMsg={errorMsg} />
      )}

      {step === 'error' && (
        <div className="diag-step reveal">
          <h2 className="diag-h2">Algo falló</h2>
          <p className="diag-sub">{errorMsg || 'Intenta de nuevo en unos minutos.'}</p>
          <div className="diag-actions">
            <button type="button" className="mz-end-cta-quiet" onClick={() => setStep('intro')}>
              Reintentar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function NavRow({
  onBack,
  onNext,
  stepError,
  nextLabel = 'Siguiente →',
}: {
  onBack: () => void
  onNext: () => void
  stepError: string
  nextLabel?: string
}) {
  return (
    <>
      {stepError && <p className="diag-error">{stepError}</p>}
      <div className="diag-actions">
        <button type="button" className="mz-end-cta-quiet" onClick={onBack}>
          ← Volver
        </button>
        <button type="button" className="mz-end-cta" onClick={onNext}>
          {nextLabel}
        </button>
      </div>
    </>
  )
}

function LikertSection({
  title,
  subtitle,
  hint,
  questions,
  answers,
  onChange,
  onBack,
  onNext,
  stepError,
}: {
  title: string
  subtitle: string
  hint: string
  questions: LikertQ[]
  answers: Answers
  onChange: (k: string, v: number) => void
  onBack: () => void
  onNext: () => void
  stepError: string
}) {
  return (
    <div className="diag-step reveal">
      <h2 className="diag-h2">{title}</h2>
      <p className="diag-sub">{subtitle}</p>
      <p className="diag-hint">{hint}</p>

      <div className="diag-qs">
        {questions.map((q, i) => (
          <LikertRow
            key={q.k}
            index={i + 1}
            total={questions.length}
            q={q}
            value={answers[q.k] as number | undefined}
            onChange={(v) => onChange(q.k, v)}
          />
        ))}
      </div>

      <NavRow onBack={onBack} onNext={onNext} stepError={stepError} />
    </div>
  )
}

function LikertRow({
  index,
  total,
  q,
  value,
  onChange,
}: {
  index: number
  total: number
  q: LikertQ
  value: number | undefined
  onChange: (v: number) => void
}) {
  return (
    <div className="diag-q">
      <div className="diag-q-head">
        <span className="diag-q-num">{index}/{total}</span>
        <span className="diag-q-key">{q.k}</span>
      </div>
      <p className="diag-q-text">{q.t}</p>
      <div className="diag-likert" role="radiogroup" aria-label={q.t}>
        {LIKERT_LABELS.map((label, i) => {
          const v = i + 1
          const selected = value === v
          return (
            <button
              key={v}
              type="button"
              role="radio"
              aria-checked={selected}
              className={`diag-likert-btn${selected ? ' is-selected' : ''}`}
              onClick={() => onChange(v)}
            >
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function VignetteRow({
  q,
  value,
  onChange,
}: {
  q: VignetteQ
  value: string | undefined
  onChange: (v: string) => void
}) {
  const opts = ['A', 'B', 'C', 'D'] as const
  return (
    <div className="diag-q diag-q-vignette">
      <div className="diag-q-head">
        <span className="diag-q-key">{q.k}</span>
      </div>
      <p className="diag-q-text">{q.t}</p>
      <div className="diag-choice" role="radiogroup" aria-label={q.t}>
        {opts.map((letter) => {
          const selected = value === letter
          return (
            <button
              key={letter}
              type="button"
              role="radio"
              aria-checked={selected}
              className={`diag-choice-btn${selected ? ' is-selected' : ''}`}
              onClick={() => onChange(letter)}
            >
              <span className="diag-choice-letter">{letter}</span>
              <span className="diag-choice-text">{q.opts[letter]}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function ResultView({
  context,
  result,
  errorMsg,
}: {
  context: ContextData
  result: DiagnosticResult
  errorMsg: string
}) {
  const archetype = result.archetype
  const recommended = result.recommendedTs
    .map((k) => ({ k, pos: POSITION_BY_T[k] }))
    .filter((x) => !!x.pos)
    .slice(0, 3)

  return (
    <div className="diag-step diag-result reveal">
      <span className="diag-result-label">Tu diagnóstico</span>
      <h2 className="diag-result-name">{archetype.name}</h2>
      <p className="diag-result-diagnosis">{archetype.longDiagnosis}</p>

      <div className="diag-bars">
        <Bar label="Madurez estructural" value={result.scores.ms} />
        <Bar label="Presión / degradación" value={result.scores.pr} inverted />
        <Bar label="Reflejo bajo presión" value={result.scores.rb} />
      </div>

      <div className="diag-result-block">
        <span className="meta">Posiciones que tienes que entrenar</span>
        <ul className="diag-positions">
          {recommended.map(({ k, pos }) => (
            <li key={k} className="diag-position">
              <div className="diag-position-head">
                <span className="diag-position-block">{pos.blockName}</span>
                <h3 className="diag-position-name">{pos.name}</h3>
              </div>
              <p className="diag-position-frame">{pos.shortFrame}</p>
              {pos.postSlug && (
                <Link
                  href={`/blog/${pos.postSlug}`}
                  className="diag-position-link"
                  data-track="clic_blog"
                  data-track-label={`diagnostico-${pos.postSlug}`}
                >
                  Leer cómo se entrena →
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="diag-result-block diag-result-offer">
        <span className="meta">Lo que te corresponde</span>
        <div className="diag-offer">
          <div className="diag-offer-head">
            <h3 className="diag-offer-name">{archetype.offer} MANZANA</h3>
            <span className="diag-offer-price">{archetype.offerPrice}</span>
          </div>
          <p className="diag-offer-copy">{archetype.offerCopy}</p>
          <div className="diag-actions">
            <Link
              href="/agendar"
              className="mz-end-cta"
              data-track="inicio_pago"
              data-track-label={`diagnostico-${archetype.id}`}
            >
              Pagar y reservar →
            </Link>
            <Link
              href="/contacto"
              className="mz-end-cta-quiet"
              data-track="clic_contacto"
              data-track-label={`diagnostico-${archetype.id}-talk-first`}
            >
              Prefiero hablar primero →
            </Link>
          </div>
        </div>
      </div>

      <p className="diag-result-foot">
        Te enviamos este resultado a <strong>{context.email}</strong>. Si no lo
        ves en bandeja de entrada, revisa promociones o spam.
      </p>
      {errorMsg && <p className="diag-error">{errorMsg}</p>}
    </div>
  )
}

function Bar({
  label,
  value,
  inverted = false,
}: {
  label: string
  value: number
  inverted?: boolean
}) {
  const tone = inverted
    ? value >= 70
      ? 'high'
      : value >= 50
        ? 'mid'
        : 'low'
    : value >= 70
      ? 'low'
      : value >= 50
        ? 'mid'
        : 'high'
  return (
    <div className="diag-bar">
      <div className="diag-bar-head">
        <span className="diag-bar-label">{label}</span>
        <span className="diag-bar-value">{value}</span>
      </div>
      <div className="diag-bar-track">
        <div className={`diag-bar-fill is-${tone}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

function buildEmailSummary(ctx: ContextData, r: DiagnosticResult): string {
  const lines: string[] = []
  lines.push(`Diagnóstico MANZANA — ${r.archetype.name}`)
  lines.push('')
  lines.push(`Respondió: ${ctx.nombre} (${ctx.email})`)
  lines.push(`Posición: ${ctx.posicion} · Entorno: ${ctx.entorno}`)
  lines.push('')
  lines.push('Diagnóstico:')
  lines.push(r.archetype.longDiagnosis)
  lines.push('')
  lines.push(`Madurez estructural: ${r.scores.ms} / Presión: ${r.scores.pr} / Reflejo: ${r.scores.rb}`)
  lines.push('')
  lines.push('Posiciones a entrenar:')
  r.recommendedTs.forEach((k) => {
    const pos = POSITION_BY_T[k]
    if (pos) lines.push(`- ${pos.name} (${pos.blockName})`)
  })
  lines.push('')
  lines.push(`Recomendación: ${r.archetype.offer} — ${r.archetype.offerPrice}`)
  lines.push(r.archetype.offerCopy)
  return lines.join('\n')
}
