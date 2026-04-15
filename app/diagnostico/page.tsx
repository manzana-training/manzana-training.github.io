import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Diagnóstico — MANZANA',
  description:
    'Diagnóstico gratuito de liderazgo: identifica tu situación de presión y qué entrenamiento ejecutivo necesitas. Coaching personalizado para founders, directores y gerentes.',
  alternates: {
    canonical: 'https://manzanatraining.com.mx/diagnostico',
  },
  openGraph: {
    title: 'Diagnóstico — MANZANA',
    description: 'Identifica qué posición estás jugando y qué drill necesitas.',
    type: 'website',
    locale: 'es_MX',
    url: 'https://manzanatraining.com.mx/diagnostico',
    siteName: 'MANZANA',
  },
}

export default function Diagnostico() {
  return (
    <div className="mz-page is-dark">
      <section className="page-head" data-num="07">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">07 — Diagnóstico</div>
          <div className="col-body">
            <h1 className="page-head-title reveal">
              ¿Qué situación estás enfrentando?
            </h1>
            <p className="page-head-lead reveal">
              Responde el diagnóstico. Te decimos qué posición estás jugando y
              qué tipo de entrenamiento necesitas. Sin compromiso. Sin venta
              automática. Solo claridad.
            </p>
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Iniciar</div>
          <div className="col-body">
            <div className="mz-diag-box reveal">
              <h3>Haz el diagnóstico ahora</h3>
              <p>
                Te toma unos minutos. Al terminar sabrás qué posición de
                presión estás jugando y qué reflejo necesitas entrenar.
              </p>
              <a
                href="https://script.google.com/macros/s/AKfycbwXdtAKpeolb8O_IrbjYYbWyQ3na731aTUx1QhS5o8UH1zm9m4rOiSrGMAykOQkiRiNcg/exec"
                target="_blank"
                rel="noopener noreferrer"
                className="mz-end-cta"
                data-track="iniciar_diagnostico"
                data-track-label="diagnostico"
              >
                Iniciar diagnóstico →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Qué esperar</div>
          <div className="col-body mz-prose reveal">
            <ul>
              <li>Identificamos tu posición de presión actual.</li>
              <li>Te decimos qué tipo de entrenamiento necesitas.</li>
              <li>Si quieres revisarlo juntos, agendamos 15 minutos.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mz-end">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Alternativa</div>
          <div className="col-body">
            <h2 className="mz-end-title reveal">¿Prefieres ver un ejemplo primero?</h2>
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
