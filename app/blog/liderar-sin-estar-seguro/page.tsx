import type { Metadata } from 'next'
import Link from 'next/link'
import { EmailCapture } from '../../../components/EmailCapture'

const BASE_URL = 'https://manzanatraining.com.mx'
const SLUG = 'liderar-sin-estar-seguro'
const TITLE = 'Liderar sin estar seguro'
const DESCRIPTION =
  'Liderazgo no es certeza. Es dar dirección suficiente mientras el sistema aprende. Tres movimientos para cuando dudas pero el equipo necesita rumbo.'
const IMAGE = `${BASE_URL}/blog-liderar-sin-estar-seguro.webp`
const DATE = '2026-03-24'

export const metadata: Metadata = {
  title: `${TITLE} — MANZANA`,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: 'Liderazgo no es certeza. Es dirección suficiente.',
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
            <span>Liderazgo</span>
            <span>5 min</span>
            <span>Mar 2026</span>
          </div>
          <h1 className="article-title reveal">{TITLE}</h1>
          <p className="article-lead reveal">
            Tienes que dar dirección, pero no estás seguro. La información es
            incompleta, el contexto cambia y aún así el equipo te mira
            esperando rumbo.
          </p>
          <figure className="article-figure reveal">
            <img
              src="/blog-liderar-sin-estar-seguro.webp"
              alt="Figura solitaria en un puente sobre la oscuridad con linterna tenue — liderar sin certeza"
              width={1792}
              height={1024}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </figure>

          <div className="mz-prose">
            <h2 className="reveal">La posición</h2>
            <p className="reveal">
              En jiu-jitsu, no ves todo el tablero, pero si no mueves, te pasan
              guardia. En una empresa pasa igual: si no das rumbo, alguien más
              lo dará — y probablemente peor.
            </p>
            <p className="reveal">
              El problema no es que dudes. El problema es que la duda te
              paralice.
            </p>

            <h2 className="reveal">Cómo se presenta</h2>
            <ul className="reveal">
              <li>Decisiones con datos parciales.</li>
              <li>Ambigüedad técnica o de mercado.</li>
              <li>Presión por &quot;definir ya&quot;.</li>
              <li>Miedo a equivocarte frente al equipo.</li>
            </ul>
            <span className="quiet reveal">Misma posición: la duda es tuya, la responsabilidad también.</span>

            <h2 className="reveal">El daño real</h2>
            <p className="reveal">
              Parálisis. Mensajes contradictorios. Pérdida de confianza del
              equipo. Decisiones tomadas por inercia o política en lugar de
              por criterio.
            </p>
            <p className="lead reveal">Aquí se pierde por inmovilidad.</p>

            <h2 className="reveal">La trampa de la certeza</h2>
            <p className="reveal">
              Esperamos estar seguros para actuar. Pero la certeza no llega. Y
              mientras esperas, el equipo interpreta tu silencio como falta de
              rumbo, o peor — como falta de capacidad.
            </p>
            <p className="reveal">
              Liderazgo no es saber. Es dar dirección suficiente mientras el
              sistema aprende.
            </p>

            <div className="mz-call reveal">
              <span className="meta mz-call-label">Los 3 movimientos</span>
              <div className="mz-call-item">
                <h3>1. Anclar</h3>
                <p>
                  Nombra lo que sí sabes. Nombra lo que no sabes, sin
                  dramatizar. Define un horizonte corto: &quot;Esto es lo
                  válido por 2 semanas.&quot; Separa la decisión de la verdad
                  absoluta.
                </p>
                <span className="quiet">No prometes certeza. Prometes estabilidad.</span>
              </div>
              <div className="mz-call-item">
                <h3>2. Dar dirección suficiente</h3>
                <p>
                  Cierra opciones a A o B. Asigna dueño explícito. Define
                  versión mínima que avanza. Pon deadline explícito. El equipo
                  deja de debatir y empieza a ejecutar.
                </p>
                <span className="quiet">Suficiente no es perfecto. Es lo mínimo para que el sistema se mueva.</span>
              </div>
              <div className="mz-call-item">
                <h3>3. Reabrir controlado</h3>
                <p>
                  Reabrir por criterio, no por miedo. Nombrar el aprendizaje
                  explícito: &quot;Esto nos enseñó X.&quot; Ajustar sin pedir
                  perdón de más. Cerrar con recap.
                </p>
                <span className="quiet">Corriges sin verte errático. La corrección planeada es señal de liderazgo, no de debilidad.</span>
              </div>
            </div>

            <h2 className="reveal">Enseñanza Manzana</h2>
            <p className="lead reveal">Liderar no es saber.</p>
            <p className="lead reveal">Es dar dirección suficiente mientras el sistema aprende.</p>
            <p className="reveal" style={{ color: 'var(--gray)', marginTop: 24 }}>
              Primero anclas.
              <br />
              Luego mueves.
              <br />
              Después corriges.
            </p>
          </div>
        </div>

        <nav className="article-related reveal">
          <span className="meta">También en el blog</span>
          <ul>
            <li><Link href="/blog/decidir-sin-informacion-completa">Decidir sin información completa</Link></li>
            <li><Link href="/blog/aguantar-el-plan">Aguantar el plan: cuando la presión te pide cambiar de rumbo</Link></li>
          </ul>
        </nav>

        <EmailCapture />

        <section className="mz-end">
          <div className="wrap section-grid">
            <div className="meta col-label reveal">Siguiente paso</div>
            <div className="col-body">
              <h2 className="mz-end-title reveal">¿Estás liderando sin brújula?</h2>
              <p className="mz-end-sub reveal">
                Podemos entrenar esta posición en una sesión.
              </p>
              <div className="mz-end-actions">
                <Link
                  href="/contacto"
                  className="mz-end-cta reveal"
                  data-track="clic_contacto"
                  data-track-label="blog-liderar-sin-estar-seguro"
                >
                  Agendar sesión →
                </Link>
                <Link
                  href="/diagnostico"
                  className="mz-end-cta-quiet reveal"
                  data-track="clic_diagnostico"
                  data-track-label="blog-liderar-sin-estar-seguro"
                >
                  Haz el diagnóstico →
                </Link>
              </div>
              <Link href="/blog" className="mz-back">
                ← Volver al blog
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}
