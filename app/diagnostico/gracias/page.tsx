import type { Metadata } from 'next'
import Link from 'next/link'
import { DiagnosticoCompletadoTracker } from '../../../components/DiagnosticoCompletadoTracker'

export const metadata: Metadata = {
  title: 'Diagnóstico enviado — MANZANA',
  description:
    'Gracias por completar el diagnóstico. Te escribiremos con la lectura de tu posición en las próximas 24 horas.',
  alternates: {
    canonical: 'https://manzanatraining.com.mx/diagnostico/gracias',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function DiagnosticoGracias() {
  return (
    <div className="mz-page is-dark">
      <DiagnosticoCompletadoTracker />
      <section className="page-head" data-num="07">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">07 — Diagnóstico enviado</div>
          <div className="col-body">
            <h1 className="page-head-title reveal">
              Recibido. Ahora lo leemos.
            </h1>
            <p className="page-head-lead reveal">
              Te escribimos en las próximas 24 horas con tu posición de presión y
              el tipo de entrenamiento que hace sentido. Sin venta automática.
            </p>
          </div>
        </div>
      </section>

      <section className="mz-end">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Si no quieres esperar</div>
          <div className="col-body">
            <h2 className="mz-end-title reveal">Podemos revisarlo juntos en 15 minutos.</h2>
            <p className="mz-end-sub reveal">
              Si prefieres leer tu posición en vivo en vez de por correo.
            </p>
            <div className="mz-end-actions">
              <Link
                href="/contacto"
                className="mz-end-cta reveal"
                data-track="clic_contacto"
                data-track-label="diagnostico-gracias"
              >
                Agendar 15 min →
              </Link>
              <Link
                href="/caso"
                className="mz-end-cta-quiet reveal"
                data-track="clic_caso"
                data-track-label="diagnostico-gracias"
              >
                Leer un caso de entrenamiento →
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
