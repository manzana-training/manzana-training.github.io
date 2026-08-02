import type { Metadata } from 'next'
import Link from 'next/link'
import {
  STRIPE_DRILL_LINK,
  DRILL_PRICE_LABEL,
  DRILL_NAME,
  DRILL_TAGLINE,
  DRILL_DURATION,
  isPaymentLive,
} from '../../lib/links'

export const metadata: Metadata = {
  title: 'Agendar sesión — MANZANA',
  description:
    'Drill MANZANA: sesión 1:1 de 45 min vía Google Meet sobre una posición específica de presión, con drill en vivo y Case Brief PDF post-sesión. $1,500 MXN.',
  alternates: { canonical: 'https://manzanatraining.com.mx/agendar' },
  openGraph: {
    title: 'Agendar sesión — MANZANA',
    description: 'Sesión + Case Brief. $1,500 MXN. Drill en vivo sobre tu posición específica.',
    type: 'website',
    url: 'https://manzanatraining.com.mx/agendar',
    siteName: 'MANZANA',
  },
}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: DRILL_NAME,
  description:
    'Sesión 1:1 de 45 min vía Google Meet sobre una posición específica de presión, con drill en vivo. Incluye Case Brief PDF en formato HBS/Wharton.',
  brand: { '@type': 'Brand', name: 'MANZANA' },
  offers: {
    '@type': 'Offer',
    price: '1500',
    priceCurrency: 'MXN',
    availability: 'https://schema.org/InStock',
    url: 'https://manzanatraining.com.mx/agendar',
  },
}

export default function Agendar() {
  const live = isPaymentLive()
  return (
    <div className="mz-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <section className="page-head" data-num="08">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">08 — Agendar</div>
          <div className="col-body">
            <h1 className="page-head-title reveal">
              Una sesión sobre la posición que estás jugando hoy.
            </h1>
            <p className="page-head-lead reveal">
              45 minutos. Una situación real. Drill en vivo con corrección, no
              consejos genéricos. Te llevas un Case Brief en PDF con frames,
              plan 7 días y la regla operable para tu equipo.
            </p>
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">El producto</div>
          <div className="col-body">
            <div className="mz-tiers" style={{ gridTemplateColumns: '1fr', maxWidth: 640 }}>
              <div className="mz-tier reveal">
                <div className="mz-tier-tag">{DRILL_TAGLINE}</div>
                <div className="mz-tier-name">{DRILL_NAME}</div>
                <div
                  style={{
                    marginTop: 20,
                    padding: '20px 0',
                    borderTop: '1px solid var(--rule)',
                    borderBottom: '1px solid var(--rule)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    flexWrap: 'wrap',
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'var(--gray)',
                    }}
                  >
                    Precio
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: 26,
                      color: 'var(--ink)',
                    }}
                  >
                    {DRILL_PRICE_LABEL}
                  </span>
                </div>
                <div style={{ marginTop: 20, marginBottom: 24 }}>
                  {live ? (
                    <a
                      href={STRIPE_DRILL_LINK}
                      className="mz-end-cta reveal"
                      data-track="inicio_pago"
                      data-track-label="agendar"
                    >
                      Pagar y reservar →
                    </a>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="mz-end-cta"
                        disabled
                        style={{ opacity: 0.5, cursor: 'not-allowed' }}
                      >
                        Activamos esta semana →
                      </button>
                      <p
                        style={{
                          marginTop: 16,
                          fontFamily: 'var(--mono)',
                          fontSize: 11,
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: 'var(--gray)',
                        }}
                      >
                        Mientras tanto, escribe directamente para agendar.
                      </p>
                      <div style={{ marginTop: 12 }}>
                        <Link
                          href="/contacto"
                          className="mz-end-cta-quiet"
                          data-track="clic_contacto"
                          data-track-label="agendar-fallback"
                        >
                          Escribir directo →
                        </Link>
                      </div>
                    </>
                  )}
                </div>
                <p className="mz-tier-desc">
                  Una sesión 1:1 sobre tu posición específica de presión, con
                  drill en vivo. Estructura fija: señales → errores instintivos
                  → frames → drill con corrección → salida.
                </p>
                <ul className="mz-tier-bullets">
                  <li>{DRILL_DURATION}</li>
                  <li>1 posición real — la tuya, no un caso de manual</li>
                  <li>Drill con corrección en vivo + segundo round</li>
                  <li>Case Brief PDF (HBS/Wharton) en 48h</li>
                  <li>Frames + plan 7 días + regla instalable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Cómo funciona</div>
          <div className="col-body">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '32px 40px',
              }}
            >
              {[
                {
                  n: '01',
                  t: 'Pagas y reservas',
                  d: 'Stripe procesa el pago en el momento. Se te redirige a la página de reserva.',
                },
                {
                  n: '02',
                  t: 'Agendas tu slot',
                  d: 'Eliges fecha y hora en el calendario. Te llega confirmación por email con el link de Google Meet.',
                },
                {
                  n: '03',
                  t: 'Recibes preparación',
                  d: 'Al pagar te llega el diagnóstico completo (10-15 min) para llegar con tu situación mapeada, no con teoría.',
                },
                {
                  n: '04',
                  t: `Sesión ${DRILL_DURATION.split(' ')[0]} min`,
                  d: 'Estructura fija. Sin presentaciones. Sin teoría. Drill en vivo, corrección, segundo round, salida concreta.',
                },
                {
                  n: '05',
                  t: 'Case Brief en 48h',
                  d: 'PDF de 3-4 páginas en formato Harvard/Wharton: contexto, decisión, frames, plan 7 días, regla instalable.',
                },
              ].map((step) => (
                <div key={step.n} className="reveal">
                  <div
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'var(--gray)',
                      marginBottom: 8,
                    }}
                  >
                    {step.n}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: 20,
                      color: 'var(--ink)',
                      margin: '0 0 8px',
                      lineHeight: 1.3,
                    }}
                  >
                    {step.t}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: 15,
                      lineHeight: 1.55,
                      color: 'var(--ink)',
                      margin: 0,
                    }}
                  >
                    {step.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Qué no es</div>
          <div className="col-body mz-prose">
            <ul className="reveal">
              <li>No es coaching. No vas a salir motivado, vas a salir entrenado.</li>
              <li>No es consultoría. No te entrego un reporte de 40 páginas. Te entrego una regla.</li>
              <li>No es terapia. No exploramos tu infancia. Trabajamos la posición que estás jugando esta semana.</li>
              <li>No es genérico. Si no tienes una situación real concreta, no hay sesión.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mz-end">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">¿No sabes qué posición jugar?</div>
          <div className="col-body">
            <h2 className="mz-end-title reveal">
              Haz el diagnóstico antes. Te decimos qué entrenar.
            </h2>
            <p className="mz-end-sub reveal">
              Seis preguntas. Un minuto. Sale recomendación concreta.
            </p>
            <div className="mz-end-actions">
              <Link
                href="/diagnostico"
                className="mz-end-cta reveal"
                data-track="clic_diagnostico"
                data-track-label="agendar"
              >
                Hacer diagnóstico →
              </Link>
            </div>
            <Link href="/" className="mz-back">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
