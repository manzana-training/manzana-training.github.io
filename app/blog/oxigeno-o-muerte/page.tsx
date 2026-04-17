import type { Metadata } from 'next'
import Link from 'next/link'
import { EmailCapture } from '../../../components/EmailCapture'

const BASE_URL = 'https://manzanatraining.com.mx'
const SLUG = 'oxigeno-o-muerte'
const TITLE = 'Oxígeno o muerte: cuando el negocio se está acabando y nadie quiere verlo'
const DESCRIPTION =
  'KPIs rojos, caja que no alcanza, runway corto. Tres movimientos para dejar de planear y empezar a sobrevivir. Entrenamiento ejecutivo bajo presión real.'
const IMAGE = `${BASE_URL}/blog-oxigeno-o-muerte.webp`
const DATE = '2026-04-01'

export const metadata: Metadata = {
  title: `${TITLE} — MANZANA`,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      'KPIs rojos, caja que no alcanza, runway corto. Tres movimientos para sobrevivir.',
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
            <span>Supervivencia</span>
            <span>6 min</span>
            <span>Abr 2026</span>
          </div>
          <h1 className="article-title reveal">{TITLE}</h1>
          <p className="article-lead reveal">
            La caja no alcanza. Los KPIs están en rojo. El equipo sigue
            operando como si nada. Y tú ya sabes que si no cambias algo en las
            próximas semanas, no va a haber empresa que dirigir.
          </p>
          <figure className="article-figure reveal">
            <img
              src="/blog-oxigeno-o-muerte.webp"
              alt="Llama dorada solitaria en la oscuridad — supervivencia empresarial bajo presión"
              width={1792}
              height={1024}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </figure>

          <div className="mz-prose">
            <h2 className="reveal">La posición</h2>
            <p className="reveal">
              En jiu-jitsu hay un momento donde el combate deja de ser
              deportivo. Ya no estás buscando puntos ni posición dominante.
              Estás peleando por respirar. Por no quedarte sin aire. Por
              sobrevivir los próximos segundos.
            </p>
            <p className="reveal">
              En un negocio, esa posición se llama runway corto. Meses de vida.
              Números que no cierran. Costos que no se sostienen. Y un equipo
              que sigue en piloto automático porque nadie ha dicho la verdad
              en voz alta.
            </p>
            <p className="reveal">
              Aquí no aplican las reglas de tiempos normales. Aquí se aplica
              una sola regla: primero sobrevivir, luego mejorar.
            </p>

            <h2 className="reveal">Cómo se presenta</h2>
            <ul className="reveal">
              <li>Caja que se acaba en semanas, no en trimestres.</li>
              <li>KPIs que llevan meses en rojo y nadie está cambiando nada estructural.</li>
              <li>Costos fijos que consumen más de lo que el negocio genera.</li>
              <li>Juntas donde se habla de &quot;estrategia a mediano plazo&quot; cuando no hay mediano plazo.</li>
              <li>Un founder que sigue invirtiendo tiempo en proyectos que no generan ingreso.</li>
            </ul>
            <span className="quiet reveal">
              Si estás hablando de cultura mientras la caja se vacía, ya perdiste el foco.
            </span>

            <h2 className="reveal">El daño real</h2>
            <p className="reveal">
              El problema no es que el negocio esté en riesgo. El problema es
              que la operación no refleja la urgencia. El equipo sigue en modo
              normal: reuniones largas, proyectos paralelos, decisiones lentas.
              Nadie recortó. Nadie priorizó. Nadie dijo: esto es lo único que
              importa ahora.
            </p>
            <p className="reveal">
              Cada semana que operas en modo normal con números de emergencia,
              quemas oxígeno que no tienes. Y cuando finalmente reaccionas, ya
              no tienes margen para maniobrar.
            </p>
            <p className="lead reveal">
              Las empresas no mueren por falta de ideas. Mueren por falta de
              velocidad cuando la velocidad era lo único que las salvaba.
            </p>

            <h2 className="reveal">Por qué no se actúa</h2>
            <p className="reveal">
              Porque aceptar la emergencia significa aceptar que lo que estabas
              haciendo no funcionó. Y eso duele. Es más fácil seguir con la
              inercia, ajustar un número en el Excel, convencerte de que
              &quot;el próximo mes mejora&quot;.
            </p>
            <p className="reveal">
              También porque recortar es impopular. Cancelar proyectos tiene
              costo político. Decirle al equipo que la situación es grave
              genera miedo. Pero el miedo de decir la verdad es menor que el
              costo de no haberla dicho a tiempo.
            </p>

            <div className="mz-mid-cta reveal">
              <p>Actuar cuando el negocio está en riesgo es una posición entrenable. En una sesión.</p>
              <Link href="/contacto" data-track="clic_contacto" data-track-label="blog-oxigeno-mid">
                Agendar 15 min →
              </Link>
            </div>

            <div className="mz-call reveal">
              <span className="meta mz-call-label">Los 3 movimientos</span>
              <div className="mz-call-item">
                <h3>1. Cortar el ruido</h3>
                <p>
                  Lo primero no es resolver. Es dejar de hacer todo lo que no
                  te acerca a sobrevivir. Cada proyecto, reunión, iniciativa o
                  gasto que no genera ingreso directo o reduce costo real se
                  congela o se mata.
                </p>
                <ul>
                  <li>Lista todo lo que consume tiempo y dinero. Pregunta: ¿esto genera caja en las próximas 4 semanas?</li>
                  <li>Si la respuesta es no, se congela. Sin discusión. Sin &quot;lo revisamos después&quot;.</li>
                  <li>Cancela las juntas que no tienen decisión como output. Si no se decide nada, no se reúne nadie.</li>
                  <li>Comunica con claridad: &quot;Estamos en modo supervivencia. Esto es temporal, pero es real.&quot;</li>
                </ul>
                <span className="quiet">No estás siendo negativo. Estás protegiendo lo que queda.</span>
              </div>
              <div className="mz-call-item">
                <h3>2. Foco brutal</h3>
                <p>
                  Después de cortar, queda lo esencial. Ahora eso esencial
                  necesita toda la energía, todo el tiempo y toda la atención
                  del equipo. No 70%. El 100%.
                </p>
                <ul>
                  <li>Define una sola métrica de supervivencia. La que determina si sigues vivo el próximo mes.</li>
                  <li>Asigna a cada persona una tarea que mueva esa métrica. Sin excepción.</li>
                  <li>Revisión diaria de 15 minutos. No semanal. Diaria. ¿Se movió el número? ¿Qué bloquea?</li>
                  <li>El founder opera, no delega la emergencia. Si el barco se hunde, el capitán no está en la oficina haciendo estrategia.</li>
                </ul>
                <span className="quiet">Foco no es priorizar. Es eliminar todo lo demás.</span>
              </div>
              <div className="mz-call-item">
                <h3>3. Ejecutar para sobrevivir</h3>
                <p>
                  El plan de supervivencia no se piensa durante semanas. Se
                  ejecuta mañana. Cada día sin ejecución es un día menos de
                  oxígeno. La perfección es un lujo que no puedes pagar ahora.
                </p>
                <ul>
                  <li>Toma las decisiones difíciles que llevas semanas posponiendo: recortes, cancelaciones, renegociaciones.</li>
                  <li>Comunica a clientes, proveedores y equipo. La ambigüedad en crisis destruye más que la mala noticia.</li>
                  <li>Mide en días, no en meses. Si algo no funciona en 7 días, cambia. No esperes al cierre del trimestre.</li>
                  <li>Protege a la gente clave. Si pierdes al equipo que puede sacarte de esto, no importa cuánto recortes.</li>
                </ul>
                <span className="quiet">No buscas la decisión perfecta. Buscas la decisión que te da un día más.</span>
              </div>
            </div>

            <h2 className="reveal">Lo que separa a los que sobreviven</h2>
            <p className="reveal">
              Las empresas que sobreviven a una crisis de caja no son las que
              tenían mejor producto o más talento. Son las que reaccionaron más
              rápido. Las que dejaron de negociar con la realidad y empezaron
              a operar dentro de ella.
            </p>
            <p className="reveal">
              Sobrevivir no es glamoroso. Es recortar lo que duele, enfocarte
              en lo mínimo y ejecutar sin descanso hasta que los números
              respiren. Después — solo después — puedes volver a pensar en
              crecer.
            </p>

            <h2 className="reveal">Enseñanza Manzana</h2>
            <p className="lead reveal">La empresa no muere cuando los números están mal.</p>
            <p className="lead reveal">Muere cuando nadie actúa como si estuvieran mal.</p>
            <p className="reveal" style={{ color: 'var(--gray)', marginTop: 24 }}>
              Primero cortas el ruido.
              <br />
              Luego enfocas todo en una sola métrica.
              <br />
              Solo entonces ejecutas para sobrevivir.
            </p>
          </div>
        </div>

        <nav className="article-related reveal">
          <span className="meta">También en el blog</span>
          <ul>
            <li><Link href="/blog/decidir-sin-informacion-completa">Decidir sin información completa</Link></li>
            <li><Link href="/blog/cortar-la-infeccion">Cortar la infección: cuando el talento no compensa el daño</Link></li>
          </ul>
        </nav>

        <EmailCapture />

        <section className="mz-end">
          <div className="wrap section-grid">
            <div className="meta col-label reveal">Siguiente paso</div>
            <div className="col-body">
              <h2 className="mz-end-title reveal">
                ¿Tu negocio está quemando más oxígeno del que genera?
              </h2>
              <p className="mz-end-sub reveal">
                Podemos entrenar esta posición en una sesión.
              </p>
              <div className="mz-end-actions">
                <Link
                  href="/contacto"
                  className="mz-end-cta reveal"
                  data-track="clic_contacto"
                  data-track-label="blog-oxigeno-o-muerte"
                >
                  Agendar sesión →
                </Link>
                <Link
                  href="/diagnostico"
                  className="mz-end-cta-quiet reveal"
                  data-track="clic_diagnostico"
                  data-track-label="blog-oxigeno-o-muerte"
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
