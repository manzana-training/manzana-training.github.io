import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Manifiesto — MANZANA',
  description:
    'No salimos motivados. Salimos entrenados. La cultura no aparece cuando todo va bien — aparece cuando todo arde. El manifiesto MANZANA: entrenar reflejos, no teoría.',
  alternates: { canonical: 'https://manzanatraining.com.mx/manifiesto' },
  openGraph: {
    title: 'Manifiesto — MANZANA',
    description:
      'No salimos motivados. Salimos entrenados. El manifiesto MANZANA en una página.',
    type: 'website',
    locale: 'es_MX',
    url: 'https://manzanatraining.com.mx/manifiesto',
    siteName: 'MANZANA',
    images: [
      {
        url: 'https://manzanatraining.com.mx/blog-decidir-sin-info.webp',
        width: 1792,
        height: 1024,
        alt: 'Manifiesto MANZANA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manifiesto — MANZANA',
    description: 'No salimos motivados. Salimos entrenados.',
    images: ['https://manzanatraining.com.mx/blog-decidir-sin-info.webp'],
  },
}

export default function Manifiesto() {
  return (
    <div className="mz-page">
      <section className="page-head" data-num="M">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Manifiesto</div>
          <div className="col-body">
            <h1 className="page-head-title reveal">
              No salimos motivados. Salimos entrenados.
            </h1>
            <p className="page-head-lead reveal">
              Lo que creemos, en una página. Si esto resuena, MANZANA es para ti.
              Si no, mejor lo sabes ahora.
            </p>
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">01 — La tesis</div>
          <div className="col-body mz-prose reveal">
            <p className="lead">
              Decidir es inevitable. Hacerlo bien no.
            </p>
            <p>
              La mayoría del liderazgo se entrena cuando todo está calmado:
              cursos, libros, retiros, frameworks. Después llega la presión real
              y nada de eso aparece. Aparece el instinto. Aparece lo que ya
              estaba ahí — bueno o malo. La presión no construye carácter; lo
              revela.
            </p>
            <p>
              Por eso entrenamos reflejos, no teoría.
            </p>
          </div>
        </div>
      </section>

      <section className="mz-section is-dark">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">02 — Lo que rechazamos</div>
          <div className="col-body">
            <h2 className="mz-section-title reveal">
              MANZANA no es coaching. No es consultoría. No es un programa de liderazgo.
            </h2>
            <p className="mz-section-lead reveal">
              Tres rechazos explícitos. Si esperabas alguna de las tres, ahórrate la sesión.
            </p>
            {[
              {
                num: '01',
                title: 'No es coaching',
                body:
                  'Los coaches te acompañan, te escuchan, te validan. Y a las seis sesiones el problema sigue ahí. MANZANA no te acompaña. Te entrena.',
              },
              {
                num: '02',
                title: 'No es consultoría',
                body:
                  'Los consultores te entregan reportes para presentar. Diagnóstico de 80 páginas, plan de tres fases, gobernanza. MANZANA no te entrega papel. Te entrega reflejos.',
              },
              {
                num: '03',
                title: 'No es un programa de liderazgo',
                body:
                  'Los programas te dan teoría: marcos, modelos, casos de Harvard. MANZANA no te da marcos para reflexionar. Te entrena para el lunes a las 9 a.m.',
              },
            ].map((item) => (
              <div className="mz-block-row reveal" key={item.num}>
                <div className="mz-block-num">{item.num}</div>
                <div className="mz-block-content">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">03 — Lo que sí somos</div>
          <div className="col-body">
            <h2 className="mz-section-title reveal">
              Defensa personal para liderazgo.
            </h2>
            <p className="mz-section-lead reveal">
              En jiu-jitsu, el objetivo no es ser virtuoso: es sobrevivir,
              salir, controlar, cerrar. MANZANA usa exactamente esa lógica
              en el mundo laboral.
            </p>
            <div className="mz-prose reveal">
              <p>
                Hay 12 posiciones de presión que se repiten en empresas
                reales. No dependen de industria. No dependen de cargo.
                Dependen de la presión. Para cada posición hay un reflejo
                que se puede entrenar — y nadie lo entrena hasta que ya
                estás dentro y es demasiado tarde.
              </p>
              <p>
                Entrenamos con posiciones reales, principios simples,
                drills de repetición y evaluación por resultado.
                No por discurso. No por carisma. No por teoría.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mz-section is-dark">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">04 — Las frases que repetimos</div>
          <div className="col-body">
            <ul className="mz-prose reveal" style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li style={{ marginBottom: 24 }}>
                <span className="lead">No sales motivado. Sales entrenado.</span>
              </li>
              <li style={{ marginBottom: 24 }}>
                <span className="lead">La cultura no aparece cuando todo va bien. Aparece cuando todo arde.</span>
              </li>
              <li style={{ marginBottom: 24 }}>
                <span className="lead">No decides cuando sabes. Decides cuando el costo de no decidir ya es mayor.</span>
              </li>
              <li style={{ marginBottom: 24 }}>
                <span className="lead">La empresa no muere cuando los números están mal. Muere cuando nadie actúa como si estuvieran mal.</span>
              </li>
              <li style={{ marginBottom: 24 }}>
                <span className="lead">Humanidad es cortar a tiempo, no sostener de más.</span>
              </li>
              <li>
                <span className="lead">La duda no es el problema. La parálisis sí.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="manifesto-band">
        <span className="meta reveal">Cierra con</span>
        <div className="triada reveal">
          <span className="word">Sobrevive</span>
          <span className="bar" aria-hidden="true" />
          <span className="word">Posiciónate</span>
          <span className="bar" aria-hidden="true" />
          <span className="word">Cierra</span>
        </div>
      </section>

      <section className="mz-end">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Siguiente paso</div>
          <div className="col-body">
            <h2 className="mz-end-title reveal">Actúa.</h2>
            <p className="mz-end-sub reveal">Elimina lo que te impide actuar.</p>
            <div className="mz-end-actions">
              <Link
                href="/diagnostico"
                className="mz-end-cta reveal"
                data-track="clic_diagnostico"
                data-track-label="manifiesto"
              >
                Haz el diagnóstico — 6 min →
              </Link>
              <Link
                href="/contacto"
                className="mz-end-cta-quiet reveal"
                data-track="clic_contacto"
                data-track-label="manifiesto"
              >
                Agendar sesión →
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
