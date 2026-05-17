import type { Metadata } from 'next'
import Link from 'next/link'
import { CALENDLY_DRILL_LINK, isBookingLive } from '../../lib/links'
import { PagadoTracker } from './PagadoTracker'

export const metadata: Metadata = {
  title: 'Pagado — MANZANA',
  description: 'Confirmación de pago Drill MANZANA. Agenda tu sesión.',
  alternates: { canonical: 'https://manzanatraining.com.mx/pagado' },
  robots: { index: false, follow: false },
}

export default function Pagado() {
  const bookingLive = isBookingLive()
  return (
    <div className="mz-page">
      <PagadoTracker />
      <section className="page-head">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Pagado</div>
          <div className="col-body">
            <h1 className="page-head-title reveal">
              Pago recibido. Falta un paso.
            </h1>
            <p className="page-head-lead reveal">
              Te llegó (o te llega en minutos) el recibo de Stripe a tu
              correo. Ahora agenda tu sesión en el slot que te haga sentido.
            </p>
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Paso 1 de 1</div>
          <div className="col-body">
            <div className="mz-diag-box reveal">
              <h3>Agenda tu sesión</h3>
              <p>
                Elige fecha y hora. Te llega confirmación por email con el
                link de Google Meet. La sesión es de 45 minutos, 1:1.
              </p>
              {bookingLive ? (
                <a
                  href={CALENDLY_DRILL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mz-end-cta"
                  data-track="agendar_calendly"
                  data-track-label="pagado"
                >
                  Abrir calendario →
                </a>
              ) : (
                <>
                  <button
                    type="button"
                    className="mz-end-cta"
                    disabled
                    style={{ opacity: 0.5, cursor: 'not-allowed' }}
                  >
                    Calendario en activación →
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
                    Si llegaste aquí y no ves el calendario, escríbenos a
                    contacto@manzanatraining.com.mx y agendamos manualmente.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Qué esperar</div>
          <div className="col-body mz-prose">
            <ul className="reveal">
              <li>
                <strong>24h antes de la sesión:</strong> recibes 4 preguntas
                cortas para que llegues con la situación concreta lista. Si
                no respondes, igual hacemos la sesión — toma 5 min de la
                misma sesión.
              </li>
              <li>
                <strong>Día de la sesión:</strong> conectas al link de Google
                Meet. Empezamos puntual. Sin presentaciones largas. La
                primera frase es "¿qué posición estás jugando hoy?".
              </li>
              <li>
                <strong>Después de la sesión:</strong> recibes tu Case Brief
                en PDF en 48h. Contiene: tu caso documentado en formato
                HBS/Wharton, frames, plan 7 días, y una regla instalable que
                puedes pasarle a tu equipo el lunes.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mz-end">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Mientras tanto</div>
          <div className="col-body">
            <h2 className="mz-end-title reveal">
              Si tienes una situación específica que quieres preparar, escríbenos.
            </h2>
            <p className="mz-end-sub reveal">
              Cualquier duda antes de la sesión, contesto personal.
            </p>
            <div className="mz-end-actions">
              <Link
                href="/contacto"
                className="mz-end-cta-quiet reveal"
                data-track="clic_contacto"
                data-track-label="pagado"
              >
                Escribir →
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
