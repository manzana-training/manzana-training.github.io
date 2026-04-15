import type { Metadata } from 'next'
import Link from 'next/link'
import { EmailCapture } from '../../../components/EmailCapture'

const BASE_URL = 'https://manzanatraining.com.mx'
const SLUG = 'cortar-la-infeccion'
const TITLE = 'Cortar la infección: cuando el talento no compensa el daño'
const DESCRIPTION =
  'Una persona tóxica contamina más que diez desmotivadas. Tres movimientos para intervenir sin espectáculo y proteger al equipo.'
const IMAGE = `${BASE_URL}/blog-cortar-la-infeccion.webp`
const DATE = '2026-03-27'

export const metadata: Metadata = {
  title: `${TITLE} — MANZANA`,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: 'Una persona tóxica contamina más que diez desmotivadas.',
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
            <span>Contaminación</span>
            <span>6 min</span>
            <span>Mar 2026</span>
          </div>
          <h1 className="article-title reveal">{TITLE}</h1>
          <p className="article-lead reveal">
            Hay alguien en tu equipo que produce resultados, pero envenena todo
            lo que toca. Chisme, cinismo, sabotaje sutil. Todos lo saben. Nadie
            actúa. Y cada semana que pasa, el daño se multiplica.
          </p>
          <figure className="article-figure reveal">
            <img
              src="/blog-cortar-la-infeccion.webp"
              alt="Esfera de cristal fracturada sobre superficie oscura — contaminación que se propaga"
              width={1792}
              height={1024}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </figure>

          <div className="mz-prose">
            <h2 className="reveal">La posición</h2>
            <p className="reveal">
              En jiu-jitsu, una infección localizada que no se trata termina
              afectando todo el cuerpo. No importa qué tan fuerte seas en otros
              puntos: si dejas que avance, te debilita por dentro.
            </p>
            <p className="reveal">
              En una empresa pasa igual. Una persona con actitud tóxica
              —aunque tenga talento— contamina la dinámica, la narrativa y la
              energía del equipo. Y lo hace en silencio, sin dejar huellas
              claras.
            </p>

            <h2 className="reveal">Cómo se presenta</h2>
            <ul className="reveal">
              <li>Comentarios sarcásticos que disfrazan desprecio de humor.</li>
              <li>Conversaciones de pasillo que minan decisiones ya tomadas.</li>
              <li>Resistencia disfrazada de &quot;preguntas legítimas&quot; que siempre buscan lo mismo: bloquear.</li>
              <li>Alianzas informales que generan bandos dentro del equipo.</li>
              <li>Gente buena que empieza a callarse o a buscar salida.</li>
            </ul>
            <span className="quiet reveal">
              Si tu mejor gente se está callando, probablemente ya hay infección.
            </span>

            <h2 className="reveal">El daño real</h2>
            <p className="reveal">
              La toxicidad no se queda en una persona. Se propaga por
              imitación, por miedo y por omisión. El equipo aprende que ese
              comportamiento se tolera, y eso redefine la cultura real —no la
              del manifiesto, sino la que opera todos los días.
            </p>
            <p className="reveal">
              Pierdes talento sano antes que talento tóxico. Siempre. Porque la
              gente buena tiene opciones y no está dispuesta a absorber el
              costo de quedarse.
            </p>
            <p className="lead reveal">
              Aquí no se pierde por el daño directo. Se pierde por todo lo que
              se pudre alrededor.
            </p>

            <h2 className="reveal">Por qué no se actúa</h2>
            <p className="reveal">
              Porque la persona produce. Porque &quot;sabe mucho&quot;. Porque
              confrontarla tiene costo político. Porque es más fácil decir
              &quot;así es su estilo&quot; que asumir el desgaste de
              intervenir.
            </p>
            <p className="reveal">
              Pero tolerar por talento es una deuda que se paga con la salida
              de quienes sí construyen.
            </p>

            <div className="mz-call reveal">
              <span className="meta mz-call-label">Los 3 movimientos</span>
              <div className="mz-call-item">
                <h3>1. Nombrar el patrón, no el carácter</h3>
                <p>
                  No se trata de decir &quot;eres tóxico&quot;. Se trata de
                  señalar el comportamiento específico y su impacto en el
                  sistema.
                </p>
                <ul>
                  <li>&quot;En las últimas tres juntas, tus comentarios bloquearon la discusión antes de que se cerrara.&quot;</li>
                  <li>&quot;Dos personas del equipo me han dicho que prefieren no opinar cuando tú estás presente.&quot;</li>
                  <li>&quot;El impacto de esto ya no es un tema de estilo. Es un problema de operación.&quot;</li>
                </ul>
                <span className="quiet">Despersonalizas el conflicto. Pones el foco en el sistema, no en el ego.</span>
              </div>
              <div className="mz-call-item">
                <h3>2. Poner límite con consecuencia explícita</h3>
                <p>
                  Un límite sin consecuencia es una sugerencia. Y las
                  sugerencias no detienen comportamiento tóxico.
                </p>
                <ul>
                  <li>Definir qué comportamiento específico debe cambiar.</li>
                  <li>Definir en qué plazo.</li>
                  <li>Definir qué pasa si no cambia.</li>
                  <li>Documentar la conversación.</li>
                </ul>
                <span className="quiet">No amenazas. Clarificas las reglas del juego.</span>
              </div>
              <div className="mz-call-item">
                <h3>3. Decidir sin postergar</h3>
                <p>
                  Si el comportamiento no cambia después del límite, la
                  decisión ya está tomada. Lo único que falta es ejecutarla.
                </p>
                <ul>
                  <li>Cortar limpio: sin humillar, sin dramatizar, sin dejar cabos sueltos.</li>
                  <li>Comunicar al equipo con claridad: qué pasó, por qué, qué sigue.</li>
                  <li>Cerrar el vacío operativo que deja la salida.</li>
                </ul>
                <span className="quiet">Cada semana que postergas, el mensaje al equipo es: esto se tolera aquí.</span>
              </div>
            </div>

            <h2 className="reveal">Lo que nadie dice en voz alta</h2>
            <p className="reveal">
              Cuando finalmente cortas a la persona tóxica, casi nunca hay
              luto. Lo que hay es alivio. El equipo respira. La energía cambia.
              Las conversaciones se abren. Y ahí te das cuenta de cuánto daño
              silencioso estabas absorbiendo.
            </p>
            <p className="reveal">
              La pregunta no es si puedes permitirte perder a esa persona. La
              pregunta es cuánto más puedes permitirte mantenerla.
            </p>

            <h2 className="reveal">Enseñanza Manzana</h2>
            <p className="lead reveal">El talento no compensa el daño.</p>
            <p className="lead reveal">Y la tolerancia sin límite es complicidad silenciosa.</p>
            <p className="reveal" style={{ color: 'var(--gray)', marginTop: 24 }}>
              Primero nombras el patrón.
              <br />
              Luego pones límite con consecuencia.
              <br />
              Solo entonces decides sin postergar.
            </p>
          </div>
        </div>

        <nav className="article-related reveal">
          <span className="meta">También en el blog</span>
          <ul>
            <li><Link href="/blog/resistencia-pasiva-el-enemigo-invisible">Resistencia pasiva: el enemigo invisible</Link></li>
            <li><Link href="/blog/oxigeno-o-muerte">Oxígeno o muerte: cuando el negocio se está acabando y nadie quiere verlo</Link></li>
          </ul>
        </nav>

        <EmailCapture />

        <section className="mz-end">
          <div className="wrap section-grid">
            <div className="meta col-label reveal">Siguiente paso</div>
            <div className="col-body">
              <h2 className="mz-end-title reveal">¿Tienes a alguien que produce pero contamina?</h2>
              <p className="mz-end-sub reveal">
                Podemos entrenar esta posición en una sesión.
              </p>
              <div className="mz-end-actions">
                <Link
                  href="/contacto"
                  className="mz-end-cta reveal"
                  data-track="clic_contacto"
                  data-track-label="blog-cortar-la-infeccion"
                >
                  Agendar sesión →
                </Link>
                <Link
                  href="/diagnostico"
                  className="mz-end-cta-quiet reveal"
                  data-track="clic_diagnostico"
                  data-track-label="blog-cortar-la-infeccion"
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
