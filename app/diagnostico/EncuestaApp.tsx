'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

// ============================================================
// Encuesta corta de funnel — "¿Qué posición estás jugando?"
// 6 preguntas, una por pantalla, <60s. Resultado inmediato,
// email opcional DESPUÉS del resultado (soft ask).
// El diagnóstico completo de 40 preguntas vive en
// /diagnostico-completo y se envía post-pago.
// Diseño y evidencia: brain/03_negocio/funnel_v1.md §3.1
// ============================================================

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const APPSCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwXdtAKpeolb8O_IrbjYYbWyQ3na731aTUx1QhS5o8UH1zm9m4rOiSrGMAykOQkiRiNcg/exec'
const FORMSPREE_URL = 'https://formspree.io/f/xlgoaeev'
const VERSION = 'encuesta-v1'

function track(event: string, label?: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', event, label ? { event_label: label } : undefined)
  }
}

function uuid() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID()
  return 'e_' + Date.now() + '_' + Math.random().toString(36).slice(2, 10)
}

function emailOk(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s || '').trim())
}

// ---------- Posiciones (mismo canon que lib/diagnostico/positions-map.ts) ----------

type BlockKey =
  | 'decision'
  | 'cierre'
  | 'friccion'
  | 'opacidad'
  | 'supervivencia'
  | 'contaminacion'
  | 'liderazgo'
  | 'aprendizaje'

type PositionResult = {
  name: string
  slug: string
  frame: string
  p1: string
  p2: string
}

const POSITIONS: Record<string, PositionResult> = {
  'decidir-sin-informacion-completa': {
    name: 'Decidir sin información completa',
    slug: 'decidir-sin-informacion-completa',
    frame: 'No decides cuando sabes. Decides cuando el costo de no decidir ya es mayor.',
    p1: 'El error típico en esta posición es esperar el dato que falta como si esperar fuera gratis. No lo es: cada semana sin decidir es una decisión, solo que sin dueño.',
    p2: 'El primer movimiento es ponerle precio a la espera. Cuando el costo de no decidir supera al de equivocarte, ya decidiste. Falta ejecutarlo.',
  },
  'cerrar-sin-aplausos': {
    name: 'Cerrar sin aplausos',
    slug: 'cerrar-sin-aplausos',
    frame: 'Alguien tiene que cerrar. Buscar aprobación no es liderar.',
    p1: 'Lo que suele fallar aquí no es la decisión: es la necesidad de que todos la aplaudan antes de ejecutarla. El consenso llega tarde o no llega.',
    p2: 'El primer movimiento es separar acuerdo de ejecución: comunica qué se decidió, quién lo decidió y cuándo se revisa. Los aplausos, si llegan, llegan después.',
  },
  'resistencia-pasiva-el-enemigo-invisible': {
    name: 'Resistencia pasiva',
    slug: 'resistencia-pasiva-el-enemigo-invisible',
    frame: 'Nadie te dice no, pero nada se mueve. Exponer la fricción que no hace ruido.',
    p1: 'Nadie te dice que no. Todos asienten, y el avance real es cero. La fricción que no hace ruido es la más cara, porque no deja evidencia.',
    p2: 'El primer movimiento es volverla visible: pide la fecha, el responsable y el entregable en la misma junta. Lo que no se dice de frente aparece en cuanto hay un número enfrente.',
  },
  'romper-el-monopolio': {
    name: 'Romper el monopolio',
    slug: 'romper-el-monopolio',
    frame: 'Influir sin autoridad formal exige redistribuir información y foros.',
    p1: 'Alguien administra la información a cuentagotas y eso lo vuelve indispensable. Mientras el dato viva en una sola cabeza, tu decisión depende de su agenda.',
    p2: 'El primer movimiento es redistribuir el foro: lo que importa se reporta donde todos lo ven, con fecha fija. No pelees a la persona; desarma el monopolio.',
  },
  'oxigeno-o-muerte': {
    name: 'Oxígeno o muerte',
    slug: 'oxigeno-o-muerte',
    frame: 'Sostener energía en crisis no es discurso, es eliminación brutal de lo no esencial.',
    p1: 'En esta posición el enemigo es la lista de prioridades larga. Cuando la caja aprieta, todo lo importante compite contra lo único que importa: respirar el mes que sigue.',
    p2: 'El primer movimiento es una eliminación brutal de lo no esencial. No es un plan de ahorro: es decidir qué muere hoy para que el resto viva.',
  },
  'cortar-la-infeccion': {
    name: 'Cortar la infección',
    slug: 'cortar-la-infeccion',
    frame: 'El conflicto entre partes que no se corta contamina más que diez desmotivados.',
    p1: 'Un conflicto entre dos personas clave no se queda entre dos: contamina más que diez desmotivados. El costo no se ve en ellos, se ve en los que se callan alrededor.',
    p2: 'El primer movimiento es cortar en corto: los dos en el mismo cuarto, el problema sobre la mesa y una regla de salida escrita. Esperar a que se acomode solo es regar la infección.',
  },
  'encender-el-minimo-viable': {
    name: 'Encender el mínimo viable',
    slug: 'encender-el-minimo-viable',
    frame: 'Si absorbes los errores ajenos, el sistema escala solo si tú escalas.',
    p1: 'Todo se mueve, pero los errores de todos te caen a ti. Ese sistema funciona exactamente hasta donde llega tu semana, y tu semana ya está llena.',
    p2: 'El primer movimiento es devolver cada error a su dueño con una regla simple: quien lo genera lo repara, y tú revisas la reparación, no el problema.',
  },
  'liderar-sin-estar-seguro': {
    name: 'Liderar sin estar seguro',
    slug: 'liderar-sin-estar-seguro',
    frame: 'Liderazgo no es certeza. Es dar dirección suficiente mientras el sistema aprende.',
    p1: 'Aquí lo que falla no es tu análisis: es creer que liderar exige certeza. Tu equipo no necesita que estés seguro; necesita dirección suficiente para moverse mientras el sistema aprende.',
    p2: 'El primer movimiento es dar la dirección con fecha de revisión: vamos por aquí, lo revisamos el viernes. La seguridad no se declara. Se construye iterando en público.',
  },
  'cubrir-al-nuevo': {
    name: 'Cubrir al nuevo',
    slug: 'cubrir-al-nuevo',
    frame: 'Cubrir no es mirar de cerca. Es ponerte donde le va a llegar el golpe.',
    p1: 'El que acaba de subir está expuesto, y el error típico es evaluarlo demasiado pronto. En la semana cinco, la decisión que se juzga es la tuya, no la suya.',
    p2: 'El primer movimiento es un mandato con borde: límite numérico, fecha de vencimiento, y cubrir en público lo que corriges en privado el mismo día.',
  },
}

// Posición representativa por bloque. La refinación (contaminación,
// fricción) se resuelve en computePosition() con las respuestas.
const BLOCK_POSITION: Record<BlockKey, string> = {
  decision: 'decidir-sin-informacion-completa',
  cierre: 'cerrar-sin-aplausos',
  friccion: 'resistencia-pasiva-el-enemigo-invisible',
  opacidad: 'romper-el-monopolio',
  supervivencia: 'oxigeno-o-muerte',
  contaminacion: 'cortar-la-infeccion',
  liderazgo: 'liderar-sin-estar-seguro',
  aprendizaje: 'cubrir-al-nuevo',
}

// ---------- Preguntas ----------
// P1-P3 puntúan bloque (P1 pesa doble y desempata).
// P4-P6 son datos (urgencia, rol, qué ha intentado).

type Option = { text: string; block?: BlockKey; data?: string }
type Question = { k: string; text: string; opts: Option[] }

const QUESTIONS: Question[] = [
  {
    k: 'golpe',
    text: '¿Dónde está el golpe hoy?',
    opts: [
      { text: 'Una decisión grande que ya no puedo patear', block: 'decision' },
      { text: 'La caja: aguanta poco y hay que cortar', block: 'supervivencia' },
      { text: 'Mi equipo: nadie dice que no, pero nada avanza', block: 'friccion' },
      { text: 'Un conflicto entre dos personas clave que ya contagia al resto', block: 'contaminacion' },
      { text: 'Ascendí a alguien (o me ascendieron) y está expuesto', block: 'aprendizaje' },
      { text: 'Tomé una decisión impopular y la estoy sosteniendo solo', block: 'cierre' },
    ],
  },
  {
    k: 'informacion',
    text: 'La decisión que traes enfrente, ¿con cuánta información llega?',
    opts: [
      { text: 'Tengo casi todo; lo que falta es cerrar', block: 'cierre' },
      { text: 'Tengo la mitad y el reloj corre', block: 'decision' },
      { text: 'Los datos existen, pero alguien los administra a cuentagotas', block: 'opacidad' },
      { text: 'Nadie los tiene; se decide a ciegas y el equipo me mira', block: 'liderazgo' },
    ],
  },
  {
    k: 'equipo',
    text: 'Cuando pides que algo se mueva, ¿qué pasa?',
    opts: [
      { text: 'Se mueve, pero todos los errores me caen a mí', block: 'contaminacion' },
      { text: 'Todos dicen que sí y nada cambia', block: 'friccion' },
      { text: 'Solo se mueve si yo empujo cada paso', block: 'friccion' },
      { text: 'El equipo está bien; el que duda soy yo', block: 'liderazgo' },
    ],
  },
  {
    k: 'urgencia',
    text: '¿Cuánto aguanta esto sin que decidas?',
    opts: [
      { text: 'Semanas. Hay margen, pero se gasta.', data: 'semanas' },
      { text: 'Días. Ya estoy pagando el costo de esperar.', data: 'dias' },
      { text: 'Ya pasó. Estoy administrando el golpe.', data: 'ya_paso', block: 'supervivencia' },
    ],
  },
  {
    k: 'rol',
    text: '¿Desde dónde juegas?',
    opts: [
      { text: 'Fundador o dueño', data: 'fundador' },
      { text: 'Director en corporativo', data: 'director' },
      { text: 'Gerente con equipo', data: 'gerente' },
      { text: 'Otro', data: 'otro' },
    ],
  },
  {
    k: 'intento',
    text: '¿Qué has intentado ya?',
    opts: [
      { text: 'Hablarlo con el equipo', data: 'equipo' },
      { text: 'Un coach o consultor', data: 'coach' },
      { text: 'Aguantar y esperar', data: 'aguantar' },
      { text: 'Nada: lo traigo solo', data: 'solo' },
    ],
  },
]

// ---------- Puntuación ----------

const BLOCK_ORDER: BlockKey[] = [
  'supervivencia',
  'contaminacion',
  'friccion',
  'decision',
  'cierre',
  'opacidad',
  'liderazgo',
  'aprendizaje',
]

function computePosition(picked: number[]): { block: BlockKey; position: PositionResult } {
  const scores = {} as Record<BlockKey, number>
  BLOCK_ORDER.forEach((b) => (scores[b] = 0))

  picked.forEach((optIdx, qIdx) => {
    const opt = QUESTIONS[qIdx].opts[optIdx]
    if (opt?.block) scores[opt.block] += qIdx === 0 ? 2 : 1
  })

  const p1Block = QUESTIONS[0].opts[picked[0]]?.block
  const max = Math.max(...BLOCK_ORDER.map((b) => scores[b]))
  const leaders = BLOCK_ORDER.filter((b) => scores[b] === max)
  const block = p1Block && leaders.includes(p1Block) ? p1Block : leaders[0]

  // Refinación dentro del bloque con la respuesta que lo disparó
  let slug = BLOCK_POSITION[block]
  if (block === 'contaminacion') {
    const p1Conflicto = picked[0] === 3
    slug = p1Conflicto ? 'cortar-la-infeccion' : 'encender-el-minimo-viable'
  }
  return { block, position: POSITIONS[slug] }
}

// ---------- Componente ----------

type Phase = 'preguntas' | 'leyendo' | 'resultado'

export function EncuestaApp() {
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState<number[]>([])
  const [phase, setPhase] = useState<Phase>('preguntas')
  const [result, setResult] = useState<{ block: BlockKey; position: PositionResult } | null>(null)
  const [email, setEmail] = useState('')
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [sessionId] = useState(uuid)
  const startedRef = useRef(false)
  const utmRef = useRef<Record<string, string>>({})

  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const utm: Record<string, string> = {}
    ;['utm_source', 'utm_medium', 'utm_campaign'].forEach((k) => {
      const v = params.get(k)
      if (v) utm[k] = v
    })
    utmRef.current = utm
  }, [])

  function payloadBase(res: { block: BlockKey; position: PositionResult }, answers: number[]) {
    const get = (k: string) => {
      const qi = QUESTIONS.findIndex((q) => q.k === k)
      return QUESTIONS[qi]?.opts[answers[qi]]?.data || ''
    }
    const data = {
      tipo: 'encuesta',
      session_id: sessionId,
      version: VERSION,
      source: 'webapp-site',
      respuestas: Object.fromEntries(
        QUESTIONS.map((q, i) => [q.k, q.opts[answers[i]]?.text || '']),
      ),
      bloque: res.block,
      posicion: res.position.name,
      urgencia: get('urgencia'),
      rol: get('rol'),
      intento: get('intento'),
      utm: utmRef.current,
    }
    // `context` duplica los datos: si el AppScript aún corre la versión
    // vieja (sin rama `encuesta`), la fila cae en "respuestas" como
    // inválida pero con TODO el contenido en context_json. Cero pérdida.
    return { ...data, context: data }
  }

  function sendToSheet(payload: Record<string, unknown>) {
    // no-cors: fire-and-forget; la fila cae en la pestaña "encuestas"
    fetch(APPSCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    }).catch(() => null)
  }

  function pick(optIdx: number) {
    if (!startedRef.current) {
      startedRef.current = true
      track('encuesta_iniciada', 'diagnostico-site')
    }
    const next = [...picked]
    next[idx] = optIdx
    setPicked(next)

    if (idx < QUESTIONS.length - 1) {
      setIdx(idx + 1)
      return
    }
    const res = computePosition(next)
    setResult(res)
    track('encuesta_completada', res.position.slug)
    sendToSheet({ ...payloadBase(res, next), email: '' })
    // Pausa breve antes del veredicto: le da peso al resultado.
    // Con prefers-reduced-motion se muestra directo.
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setPhase('resultado')
    } else {
      setPhase('leyendo')
      window.setTimeout(() => setPhase('resultado'), 1100)
    }
  }

  function goBack() {
    if (idx > 0) setIdx(idx - 1)
  }

  async function submitEmail(e: React.FormEvent) {
    e.preventDefault()
    if (!result || !emailOk(email)) {
      setEmailStatus('error')
      return
    }
    setEmailStatus('sending')
    const base = payloadBase(result, picked)
    sendToSheet({ ...base, email })
    // Notificación a Gerardo (al lead NO se le envía nada)
    const res = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        email,
        _subject: `Lead encuesta — ${result.position.name}`,
        _replyto: email,
        posicion: result.position.name,
        urgencia: base.urgencia,
        rol: base.rol,
        intento: base.intento,
        session_id: sessionId,
      }),
    }).catch(() => null)
    if (res && 'ok' in res && !res.ok) {
      setEmailStatus('error')
      return
    }
    track('lead_capturado', 'encuesta-resultado')
    setEmailStatus('sent')
  }

  // ---------- Render ----------

  if (phase === 'leyendo') {
    return (
      <div className="diag encuesta">
        <div className="diag-progress" aria-hidden="true">
          <div className="diag-progress-bar" style={{ width: '100%' }} />
        </div>
        <p className="encuesta-leyendo meta" role="status">
          Leyendo tu posición…
        </p>
      </div>
    )
  }

  if (phase === 'resultado' && result) {
    const p = result.position
    return (
      <div className="diag encuesta">
        <div className="diag-result encuesta-result">
          <span className="diag-result-label meta">Estás jugando</span>
          <h2 className="diag-result-name display">{p.name}</h2>
          <p className="diag-result-diagnosis">{p.frame}</p>
          <div className="mz-prose" style={{ marginTop: 28, maxWidth: 560 }}>
            <p>{p.p1}</p>
            <p>{p.p2}</p>
          </div>

          <div className="diag-result-block" style={{ marginTop: 40 }}>
            <span className="meta">La posición, completa</span>
            <p style={{ marginTop: 12 }}>
              <Link
                href={`/blog/${p.slug}`}
                data-track="clic_articulo_resultado"
                data-track-label={p.slug}
                style={{ color: 'var(--ink)', textDecoration: 'underline' }}
              >
                {p.name}: el artículo →
              </Link>
            </p>
          </div>

          <div className="diag-result-block" style={{ marginTop: 40 }}>
            <span className="meta">Entrénala</span>
            <p style={{ marginTop: 12, marginBottom: 20, maxWidth: 480 }}>
              ¿La quieres trabajar? 45 minutos sobre tu situación real, con drill
              en vivo y Case Brief en 48h.
            </p>
            <Link
              href="/agendar"
              className="mz-end-cta"
              data-track="clic_agendar"
              data-track-label="encuesta-resultado"
            >
              Agendar el drill · $1,500 →
            </Link>
          </div>

          <div className="email-capture" style={{ marginTop: 48 }}>
            {emailStatus === 'sent' ? (
              <p className="email-capture-done">Listo. Te escribo yo.</p>
            ) : (
              <>
                <p className="email-capture-text">
                  Deja tu correo y te escribo yo. Sin secuencias, sin spam.
                </p>
                <form onSubmit={submitEmail} className="email-capture-form">
                  <label htmlFor="encuesta-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="encuesta-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@empresa.com"
                    required
                    className="email-capture-input"
                    disabled={emailStatus === 'sending'}
                  />
                  <button
                    type="submit"
                    className="email-capture-btn"
                    disabled={emailStatus === 'sending'}
                  >
                    {emailStatus === 'sending' ? 'Enviando...' : 'Enviar →'}
                  </button>
                </form>
                {emailStatus === 'error' && (
                  <p className="email-capture-error">Revisa el correo e intenta de nuevo.</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  const q = QUESTIONS[idx]
  const progress = Math.round((idx / QUESTIONS.length) * 100)

  return (
    <div className="diag encuesta">
      <div className="diag-progress" aria-label={`Pregunta ${idx + 1} de ${QUESTIONS.length}`}>
        <div className="diag-progress-bar" style={{ width: `${Math.max(progress, 6)}%` }} />
      </div>

      <div className="diag-q" style={{ borderTop: 'none', paddingTop: 8 }}>
        <div className="diag-q-head">
          <span className="diag-q-num">
            {idx + 1}/{QUESTIONS.length}
          </span>
        </div>
        <p className="diag-q-text display">{q.text}</p>
        <div className="diag-choice" role="radiogroup" aria-label={q.text}>
          {q.opts.map((opt, i) => (
            <button
              key={i}
              type="button"
              className={`diag-choice-btn${picked[idx] === i ? ' is-selected' : ''}`}
              onClick={() => pick(i)}
            >
              <span className="diag-choice-text">{opt.text}</span>
            </button>
          ))}
        </div>
        {idx > 0 && (
          <button
            type="button"
            onClick={goBack}
            className="mz-back"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginTop: 24 }}
          >
            ← Anterior
          </button>
        )}
      </div>
    </div>
  )
}
