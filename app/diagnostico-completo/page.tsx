import type { Metadata } from 'next'
import { DiagnosticoApp } from './DiagnosticoApp'

// Instrumento de ENTREGA, no de funnel: se envía a quien ya pagó,
// como preparación de la sesión. No está enlazado desde la navegación
// ni en el sitemap, y no se indexa. Ver brain/03_negocio/funnel_v1.md §3.2
export const metadata: Metadata = {
  title: 'Diagnóstico completo — MANZANA',
  description:
    'Diagnóstico completo de preparación para tu sesión MANZANA. Responde antes de tu drill para llegar con la situación mapeada.',
  robots: { index: false, follow: false },
}

export default function DiagnosticoCompleto() {
  return (
    <div className="mz-page">
      <section className="page-head" data-num="08">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Preparación</div>
          <div className="col-body">
            <h1 className="page-head-title reveal">
              Tu sesión empieza aquí.
            </h1>
            <p className="page-head-lead reveal">
              Este es el diagnóstico completo: 10 a 15 minutos. Tus respuestas
              me llegan directo y con eso llegamos a la sesión con tu situación
              mapeada, no con teoría. Si algo no aplica, respóndelo desde la
              posición más cercana a la tuya.
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
    </div>
  )
}
