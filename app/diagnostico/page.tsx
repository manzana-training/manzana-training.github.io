import type { Metadata } from 'next'
import Link from 'next/link'
import { DiagnosticoApp } from './DiagnosticoApp'

export const metadata: Metadata = {
  title: 'Diagnóstico — MANZANA',
  description:
    'Diagnóstico gratuito de liderazgo bajo presión: identifica qué posición estás jugando, qué reflejo necesitas entrenar y qué tipo de intervención te corresponde. Sin venta automática.',
  alternates: {
    canonical: 'https://manzanatraining.com.mx/diagnostico',
  },
  openGraph: {
    title: 'Diagnóstico — MANZANA',
    description:
      'Identifica qué posición de presión estás jugando hoy y qué reflejo necesitas entrenar.',
    type: 'website',
    locale: 'es_MX',
    url: 'https://manzanatraining.com.mx/diagnostico',
    siteName: 'MANZANA',
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
              No mide personalidad. Mide movimiento. Te decimos qué reflejo
              entrenar y qué tipo de intervención te corresponde — sin venta
              automática, sin discurso.
            </p>
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Evaluación</div>
          <div className="col-body">
            <DiagnosticoApp />
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
