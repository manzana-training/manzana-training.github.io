import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contacto — MANZANA',
  description:
    'Agenda una sesión de coaching ejecutivo y entrenamiento de liderazgo bajo presión. Simulaciones para founders y directores en CDMX. Un problema real, sin discurso.',
  alternates: { canonical: 'https://manzanatraining.com.mx/contacto' },
  openGraph: {
    title: 'Contacto — MANZANA',
    description: 'Agenda una sesión de entrenamiento ejecutivo bajo presión. Simulaciones para founders y directores en CDMX.',
    type: 'website',
    url: 'https://manzanatraining.com.mx/contacto',
    images: [{ url: 'https://manzanatraining.com.mx/blog-decidir-sin-info.webp', width: 1792, height: 1024, alt: 'Contacto MANZANA' }],
  },
}

export default function Contacto() {
  return (
    <div className="mz-page is-dark">
      <section className="page-head" data-num="08">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">08 — Contacto</div>
          <div className="col-body">
            <h1 className="page-head-title reveal">
              No vengo a decirte qué hacer.
            </h1>
            <p className="page-head-lead reveal">
              Vengo a entrenarte para decidir y moverte mejor cuando las cosas
              se ponen difíciles.
            </p>
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Escríbeme directo</div>
          <div className="col-body">
            <form
              action="https://formspree.io/f/xlgoaeev"
              method="POST"
              className="mz-form reveal"
            >
              <div className="mz-form-row">
                <div className="mz-field">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="mz-field">
                  <label htmlFor="company">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>
              <div className="mz-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="tu@empresa.com"
                />
              </div>
              <div className="mz-field">
                <label htmlFor="situation">¿Qué situación necesitas resolver?</label>
                <textarea
                  id="situation"
                  name="situation"
                  rows={3}
                  required
                  placeholder="Una línea basta. Sé directo."
                />
              </div>
              <button type="submit">Enviar →</button>
            </form>
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Sin formulario</div>
          <div className="col-body">
            <div className="mz-block-row reveal">
              <div className="mz-block-num">01</div>
              <div className="mz-block-content">
                <h3>LinkedIn</h3>
                <p>Sin formularios. Sin bots.</p>
                <a
                  href="https://www.linkedin.com/company/111346401"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="clic_linkedin"
                  className="mz-end-cta-quiet"
                  style={{ marginTop: 12, display: 'inline-block' }}
                >
                  Ir a LinkedIn →
                </a>
              </div>
            </div>
            <div className="mz-block-row reveal">
              <div className="mz-block-num">02</div>
              <div className="mz-block-content">
                <h3>Email</h3>
                <p>Propuestas formales.</p>
                <a
                  href="mailto:supipagg@gmail.com"
                  data-track="clic_email"
                  className="mz-end-cta-quiet"
                  style={{ marginTop: 12, display: 'inline-block' }}
                >
                  supipagg@gmail.com →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Qué esperar</div>
          <div className="col-body mz-prose reveal">
            <ul>
              <li>Te respondo en menos de 24 horas.</li>
              <li>Platicamos 15 minutos para entender tu situación.</li>
              <li>Si MANZANA puede ayudarte, te propongo formato y precio.</li>
              <li>Si no es para ti, te lo digo directo. Sin venta forzada.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Filtro</div>
          <div className="col-body">
            <div className="mz-filter reveal" style={{ marginTop: 0, paddingTop: 0, borderTop: 'none' }}>
              <h3 className="mz-filter-title">MANZANA es para ti si:</h3>
              <ul>
                <li>Tienes un problema concreto que resolver en las próximas semanas.</li>
                <li>Lideras un equipo de menos de 100 personas.</li>
                <li>Prefieres acción sobre reflexión.</li>
                <li>No buscas que te digan que estás bien.</li>
              </ul>
              <p className="mz-filter-not">
                MANZANA no es para ti si buscas coaching emocional,
                transformación cultural de 12 meses o teoría de liderazgo.
              </p>
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
