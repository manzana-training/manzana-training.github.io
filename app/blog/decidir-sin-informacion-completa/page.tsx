import type { Metadata } from 'next'
import { EmailCapture } from '../../../components/EmailCapture'

const BASE_URL = 'https://manzanatraining.com.mx'
const SLUG = 'decidir-sin-informacion-completa'
const TITLE = 'Decidir sin información completa'
const DESCRIPTION =
  'No decides cuando sabes. Decides cuando el costo de no decidir ya es mayor. Tres movimientos para cerrar cuando los datos no alcanzan.'
const IMAGE = `${BASE_URL}/blog-decidir-sin-info.png`
const DATE = '2026-03-24'

export const metadata: Metadata = {
  title: `${TITLE} — MANZANA`,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: 'Tres movimientos para cerrar cuando los datos no alcanzan.',
    type: 'article',
    url: `${BASE_URL}/blog/${SLUG}`,
    images: [{ url: IMAGE, width: 1792, height: 1024, alt: TITLE }],
    publishedTime: DATE,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
  datePublished: DATE,
  author: { '@type': 'Organization', name: 'MANZANA', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'MANZANA', url: BASE_URL },
  mainEntityOfPage: `${BASE_URL}/blog/${SLUG}`,
}

export default function Post() {
  return (
    <div className="mz-page">
      <article className="article">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="article-wrap">
          <div className="article-meta reveal">
            <span>Decisión</span>
            <span>5 min</span>
            <span>Mar 2026</span>
          </div>
          <h1 className="article-title reveal">{TITLE}</h1>
          <p className="article-lead reveal">
            Tienes que decidir y los datos están incompletos, llegan tarde o se
            contradicen. Esperar más información no garantiza nada, pero
            decidir ahora expone. Bienvenido a la posición más común del
            liderazgo real.
          </p>
          <figure className="article-figure reveal">
            <img
              src="/blog-decidir-sin-info.png"
              alt="Persona frente a dos caminos en un corredor oscuro — decidir bajo presión"
            />
          </figure>

          <div className="mz-prose">
            <h2 className="reveal">La trampa</h2>
            <p className="reveal">
              En jiu-jitsu, no ves todo el cuerpo del rival, pero si no mueves,
              te barren. En una empresa pasa lo mismo: no decidir también es
              decidir. Y casi siempre es la peor decisión.
            </p>
            <p className="reveal">
              El problema no es la falta de datos. El problema es que esperamos
              que los datos nos quiten el miedo. Y eso no va a pasar.
            </p>

            <h2 className="reveal">Cómo se presenta</h2>
            <ul className="reveal">
              <li>Métricas parciales o poco confiables.</li>
              <li>Opiniones fuertes con datos débiles.</li>
              <li>Presión por &quot;esperar tantito más&quot;.</li>
              <li>Decisiones heredadas sin contexto.</li>
            </ul>
            <span className="quiet reveal">Misma posición: incertidumbre estructural.</span>

            <h2 className="reveal">El daño real</h2>
            <p className="reveal">
              Parálisis por análisis. Decisiones tomadas por otros (política).
              Ventanas de oportunidad perdidas. Falsa sensación de prudencia.
            </p>
            <p className="lead reveal">Aquí se pierde por inacción elegante.</p>

            <div className="mz-call reveal">
              <span className="meta mz-call-label">Los 3 movimientos</span>
              <div className="mz-call-item">
                <h3>1. Fijar umbral</h3>
                <p>
                  Define qué información es suficiente, no perfecta. Separa lo
                  crítico de lo deseable. Cierra la recolección de datos en un
                  punto explícito. Nombra lo que estás ignorando
                  conscientemente.
                </p>
                <span className="quiet">No buscas certeza. Buscas base mínima.</span>
              </div>
              <div className="mz-call-item">
                <h3>2. Asumir riesgo explícito</h3>
                <p>
                  Nombra el riesgo principal (uno, no cinco). Nombra el costo
                  de equivocarte. Di en voz alta qué harás si sale mal.
                  Despersonaliza el error futuro.
                </p>
                <span className="quiet">El miedo deja de ser abstracto.</span>
              </div>
              <div className="mz-call-item">
                <h3>3. Cerrar decisión reversible</h3>
                <p>
                  Define horizonte de revisión. Cierra versión mínima
                  ejecutable. Asigna dueño explícito. Cierra con recap:
                  decisión, riesgo asumido, cuándo se revisa.
                </p>
                <span className="quiet">La decisión queda tomada y contenida.</span>
              </div>
            </div>

            <h2 className="reveal">Enseñanza Manzana</h2>
            <p className="lead reveal">No decides cuando sabes.</p>
            <p className="lead reveal">
              Decides cuando el costo de no decidir ya es mayor.
            </p>
            <p className="reveal" style={{ color: 'var(--gray)', marginTop: 24 }}>
              Primero fijas umbral.
              <br />
              Luego asumes riesgo.
              <br />
              Solo entonces cierras.
            </p>
          </div>
        </div>

        <EmailCapture />

        <section className="mz-end">
          <div className="wrap section-grid">
            <div className="meta col-label reveal">Siguiente paso</div>
            <div className="col-body">
              <h2 className="mz-end-title reveal">¿Esta situación te suena?</h2>
              <p className="mz-end-sub reveal">
                Podemos entrenarla en una sesión.
              </p>
              <div className="mz-end-actions">
                <a
                  href="/contacto"
                  className="mz-end-cta reveal"
                  data-track="clic_contacto"
                  data-track-label="blog-decidir-sin-info"
                >
                  Agendar sesión →
                </a>
                <a
                  href="/diagnostico"
                  className="mz-end-cta-quiet reveal"
                  data-track="clic_diagnostico"
                  data-track-label="blog-decidir-sin-info"
                >
                  Haz el diagnóstico →
                </a>
              </div>
              <a href="/blog" className="mz-back">
                ← Volver al blog
              </a>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}
