import type { Metadata } from 'next'

const BASE_URL = 'https://manzanatraining.com.mx'
const SLUG = 'resistencia-pasiva-el-enemigo-invisible'
const TITLE = 'Resistencia pasiva: el enemigo invisible'
const DESCRIPTION =
  'Nadie te dice que no, pero nada se mueve. Cómo exponer la fricción invisible que te desgasta cada semana y recuperar tracción.'
const IMAGE = `${BASE_URL}/blog-resistencia-pasiva.png`
const DATE = '2026-03-24'

export const metadata: Metadata = {
  title: `${TITLE} — MANZANA`,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: 'Nadie te dice que no, pero nada se mueve.',
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
            <span>Fricción</span>
            <span>6 min</span>
            <span>Mar 2026</span>
          </div>
          <h1 className="article-title reveal">{TITLE}</h1>
          <p className="article-lead reveal">
            Nadie te dice que no, pero nada se mueve. No hay confrontación, no
            hay conflicto abierto, no hay responsables claros. Solo silencio,
            retrasos y &quot;ahorita lo vemos&quot;.
          </p>
          <figure className="article-figure reveal">
            <img
              src="/blog-resistencia-pasiva.png"
              alt="Figura empujando contra una pared invisible en oficina oscura — resistencia pasiva"
            />
          </figure>

          <div className="mz-prose">
            <h2 className="reveal">La posición</h2>
            <p className="reveal">
              En jiu-jitsu, el rival no ataca — te inmoviliza. Te cansa sin
              gastar energía. En una empresa pasa igual: te dicen &quot;sí,
              suena bien&quot;, pero las tareas no avanzan, las juntas acaban
              sin acuerdos y todo depende de que tú empujes.
            </p>
            <p className="reveal">
              No es incompetencia. Es resistencia sin costo visible. Y eso es
              lo que la hace tan peligrosa.
            </p>

            <h2 className="reveal">Cómo se presenta</h2>
            <ul className="reveal">
              <li>Te dicen &quot;sí&quot;, pero no ejecutan.</li>
              <li>Las tareas no avanzan si no persigues.</li>
              <li>Las juntas acaban sin acuerdos claros.</li>
              <li>Todo depende de ti empujar.</li>
            </ul>

            <h2 className="reveal">El daño real</h2>
            <p className="reveal">
              Lentitud crónica. Desgaste personal por empujar solo. La
              mediocridad operativa se normaliza. Y lo peor: el sistema aprende
              que puede no moverse porque tú siempre compensas.
            </p>
            <p className="lead reveal">Aquí no pierdes por KO. Pierdes por agotamiento.</p>

            <h2 className="reveal">Por qué seguir empujando no funciona</h2>
            <p className="reveal">
              Porque la resistencia pasiva no se rompe sola. Y porque seguir
              empujando refuerza el patrón: el sistema aprende que tú
              compensas lo que él debería resolver.
            </p>
            <p className="reveal">
              En jiu-jitsu, si empujas sin ángulo, te quedas pegado.
            </p>

            <div className="mz-call reveal">
              <span className="meta mz-call-label">Los 3 movimientos</span>
              <div className="mz-call-item">
                <h3>1. Exponer la fricción invisible</h3>
                <p>
                  Nombra el patrón, no a la persona: &quot;Esto se ha intentado
                  tres veces y no avanzó.&quot; Nombra el efecto: &quot;Nos
                  está atrasando X semanas.&quot; Devuelve el peso: &quot;¿Quién
                  es dueño de que esto avance?&quot;
                </p>
                <span className="quiet">No acusas. Iluminas.</span>
              </div>
              <div className="mz-call-item">
                <h3>2. Forzar decisión</h3>
                <p>
                  Cierra opciones: &quot;O hacemos A o dejamos explícito que no
                  se hace.&quot; Pon deadline: &quot;Si el viernes no hay
                  respuesta, asumo B.&quot; Separa consenso de avance: &quot;No
                  necesitamos estar de acuerdo para movernos.&quot;
                </p>
                <span className="quiet">El sistema empieza a cansarse de no decidir.</span>
              </div>
              <div className="mz-call-item">
                <h3>3. Cerrar mínimo viable</h3>
                <p>
                  Asigna dueño explícito. Define versión mínima: &quot;Esto es
                  lo mínimo que sí vamos a hacer.&quot; Una sola fuente de
                  verdad donde vive lo acordado. Cierra con recap: qué sí, qué
                  no, cuándo se revisa.
                </p>
                <span className="quiet">
                  Si el mínimo avanza, rompiste la resistencia. Si ni eso se sostiene, ya no es pasiva: es bloqueo.
                </span>
              </div>
            </div>

            <h2 className="reveal">Enseñanza Manzana</h2>
            <p className="lead reveal">La resistencia pasiva no se vence empujando más fuerte.</p>
            <p className="lead reveal">Se vence quitándole invisibilidad y costo.</p>
            <p className="reveal" style={{ color: 'var(--gray)', marginTop: 24 }}>
              Primero expones.
              <br />
              Luego fuerzas decisión.
              <br />
              Solo entonces recuperas movimiento.
            </p>
          </div>
        </div>

        <section className="mz-end">
          <div className="wrap section-grid">
            <div className="meta col-label reveal">Siguiente paso</div>
            <div className="col-body">
              <h2 className="mz-end-title reveal">
                ¿Tu equipo está atorado sin decirte que no?
              </h2>
              <p className="mz-end-sub reveal">
                Podemos entrenar esta posición en una sesión.
              </p>
              <div className="mz-end-actions">
                <a
                  href="/contacto"
                  className="mz-end-cta reveal"
                  data-track="clic_contacto"
                  data-track-label="blog-resistencia-pasiva"
                >
                  Agendar sesión →
                </a>
                <a
                  href="/diagnostico"
                  className="mz-end-cta-quiet reveal"
                  data-track="clic_diagnostico"
                  data-track-label="blog-resistencia-pasiva"
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
