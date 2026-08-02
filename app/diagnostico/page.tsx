import type { Metadata } from 'next'
import Link from 'next/link'
import { EncuestaApp } from './EncuestaApp'

export const metadata: Metadata = {
  title: 'Diagnóstico — MANZANA',
  description:
    '¿Qué posición de presión estás jugando hoy? Seis preguntas, menos de un minuto. Te decimos qué reflejo entrenar, sin registro y sin venta automática.',
  alternates: {
    canonical: 'https://manzanatraining.com.mx/diagnostico',
  },
  openGraph: {
    title: 'Diagnóstico — MANZANA',
    description:
      '¿Qué posición de presión estás jugando hoy? Seis preguntas, menos de un minuto.',
    type: 'website',
    locale: 'es_MX',
    url: 'https://manzanatraining.com.mx/diagnostico',
    siteName: 'MANZANA',
    images: [
      {
        url: 'https://manzanatraining.com.mx/blog-decidir-sin-info.webp',
        width: 1792,
        height: 1024,
        alt: 'MANZANA — Diagnóstico de posición bajo presión',
      },
    ],
  },
}

export default function Diagnostico() {
  return (
    <div className="mz-page">
      <section className="page-head" data-num="07">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">07 — Diagnóstico</div>
          <div className="col-body">
            <h1 className="page-head-title reveal">
              ¿Qué posición estás jugando hoy?
            </h1>
            <p className="page-head-lead reveal">
              Seis preguntas. Menos de un minuto. No mide personalidad: mide
              dónde te está llegando el golpe y qué reflejo entrenar. Sin
              registro, sin venta automática.
            </p>
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Evaluación</div>
          <div className="col-body">
            <EncuestaApp />
          </div>
        </div>
      </section>

      <section className="mz-end">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Alternativa</div>
          <div className="col-body">
            <h2 className="mz-end-title reveal">
              ¿Prefieres ver un ejemplo primero?
            </h2>
            <p className="mz-end-sub reveal">
              Lee un caso real de entrenamiento antes de hacer el diagnóstico.
            </p>
            <div className="mz-end-actions">
              <Link href="/caso" className="mz-end-cta reveal">
                Ver caso de entrenamiento →
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
