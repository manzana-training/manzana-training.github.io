import type { Metadata } from 'next'
import { EmailCapture } from '../../../components/EmailCapture'

const BASE_URL = 'https://manzanatraining.com.mx'
const SLUG = 'aguantar-el-plan'
const TITLE = 'Aguantar el plan: cuando la presión te pide cambiar de rumbo'
const DESCRIPTION =
  'La decisión fue correcta. Los resultados no llegan. Todos quieren cambiar de rumbo. Tres movimientos para sostener sin ceder cuando la ansiedad empuja.'
const IMAGE = `${BASE_URL}/blog-aguantar-el-plan.png`
const DATE = '2026-04-13'

export const metadata: Metadata = {
  title: `${TITLE} — MANZANA`,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      'La decisión fue correcta pero la organización no tiene paciencia. Tres movimientos para sostener.',
    type: 'article',
    url: `${BASE_URL}/blog/${SLUG}`,
    images: [{ url: IMAGE, width: 1536, height: 1024, alt: TITLE }],
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
            <span>Cierre</span>
            <span>6 min</span>
            <span>Abr 2026</span>
          </div>
          <h1 className="article-title reveal">{TITLE}</h1>
          <p className="article-lead reveal">
            Tomaste la decisión correcta. Lo sabes. Los datos te respaldan. Pero
            ya pasaron semanas y los resultados no se ven. Tu jefe pregunta. Tu
            equipo duda. Alguien propone &quot;mejor regresamos a como
            estaba&quot;. Y la presión para cambiar de rumbo empieza a ganarle a
            la lógica.
          </p>
          <figure className="article-figure reveal">
            <img
              src="/blog-aguantar-el-plan.png"
              alt="Estructura sólida resistiendo presión lateral — sostener decisiones bajo presión organizacional"
            />
          </figure>

          <div className="mz-prose">
            <h2 className="reveal">La posición</h2>
            <p className="reveal">
              En jiu-jitsu hay una posición que parece contradictoria: estás
              arriba, tienes el control, el otro está abajo. Pero el reloj
              corre. El réferi observa. Y si no terminas pronto, te penalizan
              por inactividad. Entonces la presión no viene del oponente — viene
              del sistema. Del tiempo. De la expectativa de que algo debería
              pasar ya.
            </p>
            <p className="reveal">
              En una empresa, esta posición se activa cuando tomas una decisión
              estratégica correcta pero que tarda en dar resultados. Cambiaste
              el modelo de pricing. Reestructuraste el equipo comercial.
              Cancelaste un producto que no escalaba. La lógica es sólida. Pero
              los primeros 60 días son feos. Los números bajan antes de subir.
              La gente se incomoda. Y la organización, que no entiende de curvas
              de adopción ni de tiempos de maduración, empieza a murmurar.
            </p>
            <p className="reveal">
              La presión para revertir no es racional. Es emocional. Es
              ansiedad disfrazada de prudencia.
            </p>

            <h2 className="reveal">Cómo se presenta</h2>
            <ul className="reveal">
              <li>Llevas 6 semanas con un cambio estructural y alguien dice &quot;¿no será mejor volver a lo anterior?&quot;</li>
              <li>Tu jefe te pide resultados de algo que todavía está en fase de implementación.</li>
              <li>El equipo empieza a hacer workarounds que sabotean el nuevo sistema sin decirlo.</li>
              <li>Un socio o consejero cuestiona tu decisión porque &quot;el mercado no respondió&quot; en 30 días.</li>
              <li>Tú mismo empiezas a dudar — no porque haya evidencia nueva, sino porque la presión se acumula.</li>
            </ul>
            <span className="quiet reveal">
              Si la única razón para cambiar de rumbo es que &quot;ya pasó mucho tiempo&quot;, no es una razón. Es ansiedad.
            </span>

            <h2 className="reveal">El daño real</h2>
            <p className="reveal">
              Cambiar de rumbo antes de tiempo es la forma más cara de no
              llegar a ningún lado. Gastaste la energía, la credibilidad y el
              capital político de implementar el cambio. Si lo reviertes sin
              evidencia clara de que falló, pierdes tres cosas a la vez:
            </p>
            <p className="reveal">
              Primero, el resultado que estaba por llegar. La mayoría de los
              cambios estratégicos tardan 90 a 120 días en mostrar señales. Si
              cortas a los 45, nunca sabrás si funcionaba.
            </p>
            <p className="reveal">
              Segundo, tu autoridad. El equipo aprende que si presiona lo
              suficiente, el líder cede. Eso no se olvida. La próxima vez que
              tomes una decisión difícil, la resistencia será más rápida y más
              intensa.
            </p>
            <p className="reveal">
              Tercero, la cultura de ejecución. Si los cambios se revierten a
              la primera señal de incomodidad, nadie va a tomarse en serio el
              siguiente. La organización aprende a esperar. A no moverse.
              Porque sabe que si aguanta, todo vuelve a como estaba.
            </p>
            <p className="lead reveal">
              Revertir por ansiedad es más caro que sostener con criterio.
            </p>

            <h2 className="reveal">Por qué no se aguanta</h2>
            <p className="reveal">
              Porque aguantar no se siente como liderazgo. No hay acción
              visible. No hay anuncio. No hay &quot;plan nuevo&quot; que
              presentar. Aguantar es quedarte quieto mientras todo el mundo te
              pide que te muevas. Y eso, para alguien acostumbrado a resolver
              con acción, es insoportable.
            </p>
            <p className="reveal">
              También porque la presión viene de arriba y de abajo al mismo
              tiempo. Tu jefe quiere resultados. Tu equipo quiere certeza. Y
              tú estás en medio sosteniendo una decisión que todavía no se ha
              probado, con la única herramienta que tienes: criterio.
            </p>
            <p className="reveal">
              El criterio no se ve. No se presenta en junta. No tiene
              dashboard. Pero es lo único que separa al líder que ejecuta del
              que improvisa.
            </p>

            <div className="mz-call reveal">
              <span className="meta mz-call-label">Los 3 movimientos</span>
              <div className="mz-call-item">
                <h3>1. Fijar hitos visibles que demuestren avance</h3>
                <p>
                  La ansiedad se alimenta de vacío. Si nadie ve movimiento,
                  todos asumen que nada pasa. Tu trabajo no es defender la
                  decisión con argumentos — es hacer visible el progreso
                  intermedio que justifica seguir.
                </p>
                <ul>
                  <li>
                    Define 3-4 indicadores tempranos que muestran que el cambio
                    va en la dirección correcta, aunque el resultado final no
                    haya llegado.
                  </li>
                  <li>
                    Pon fechas concretas para cada hito. &quot;En la semana 4
                    deberíamos ver X. En la semana 8, Y.&quot; Deadlines
                    explícitos.
                  </li>
                  <li>
                    Comunica esos hitos antes de que te pregunten. Si esperas a
                    que te pidan cuentas, ya perdiste la narrativa.
                  </li>
                  <li>
                    Si un hito no se cumple, analiza por qué. Pero no cambies
                    el rumbo por un dato — cambia cuando haya un patrón.
                  </li>
                </ul>
                <span className="quiet">El progreso que no se muestra no existe para la organización.</span>
              </div>
              <div className="mz-call-item">
                <h3>2. Nombrar la ansiedad sin ceder ante ella</h3>
                <p>
                  La peor respuesta a &quot;esto no está funcionando&quot; es
                  ignorarla. La segunda peor es ceder. La correcta es nombrar
                  lo que está pasando: esto es ansiedad, no evidencia. Y
                  separar las dos cosas en público.
                </p>
                <ul>
                  <li>
                    Di en voz alta: &quot;Entiendo la incomodidad. Es normal
                    que a las 6 semanas no se vean resultados completos. Esto
                    es lo que sí se ve.&quot;
                  </li>
                  <li>
                    Nombra el patrón: &quot;Cada vez que implementamos algo
                    nuevo, a las 4 semanas queremos regresar. Es el ciclo de
                    cualquier cambio.&quot;
                  </li>
                  <li>
                    Haz visible el costo de revertir: &quot;Si cortamos ahora,
                    perdemos lo invertido y el equipo aprende que los cambios
                    no van en serio.&quot;
                  </li>
                  <li>
                    No te pongas a la defensiva. No es un debate. Es un
                    reencuadre.
                  </li>
                </ul>
                <span className="quiet">La ansiedad que se nombra pierde fuerza. La que se ignora manda.</span>
              </div>
              <div className="mz-call-item">
                <h3>3. Dar oxígeno sin cambiar el rumbo</h3>
                <p>
                  Aguantar el plan no es ser terco. Es sostener la dirección
                  mientras ajustas la velocidad. Hay una diferencia enorme
                  entre cambiar de destino y cambiar el camino para llegar.
                  El equipo necesita sentir que hay margen, sin que eso
                  signifique abandonar.
                </p>
                <ul>
                  <li>
                    Identifica qué parte del plan genera más fricción y
                    busca un ajuste táctico que no cambie la estrategia.
                  </li>
                  <li>
                    Da espacio para que el equipo proponga mejoras de
                    ejecución, no cambios de dirección. Canaliza la energía.
                  </li>
                  <li>
                    Define qué sí es negociable (velocidad, secuencia,
                    recursos) y qué no (el destino, el criterio de éxito).
                  </li>
                  <li>
                    Repite la decisión y el porqué cada vez que haya duda.
                    La repetición no es debilidad — es estructura.
                  </li>
                </ul>
                <span className="quiet">Flexibilidad en la ejecución, rigidez en la dirección.</span>
              </div>
            </div>

            <h2 className="reveal">Lo que nadie dice en voz alta</h2>
            <p className="reveal">
              Aguantar el plan es un acto de disciplina, no de obstinación. La
              diferencia es sutil pero real: el terco ignora la evidencia, el
              disciplinado la busca pero no la confunde con ruido. El terco se
              aferra por ego. El disciplinado sostiene porque hizo el análisis
              y sabe que la curva tarda.
            </p>
            <p className="reveal">
              La mayoría de las decisiones estratégicas que fracasan no
              fracasan por mal diseño. Fracasan porque alguien no aguantó la
              presión de los primeros 60 días. Y en esos 60 días, lo único que
              te sostiene no es un dashboard ni un modelo financiero. Es
              criterio. Criterio entrenado.
            </p>

            <h2 className="reveal">Enseñanza Manzana</h2>
            <p className="lead reveal">La decisión correcta no se siente correcta durante las primeras semanas.</p>
            <p className="lead reveal">Si necesitara aplausos para sostenerse, no sería una decisión difícil.</p>
            <p className="reveal" style={{ color: 'var(--gray)', marginTop: 24 }}>
              Primero fijas los hitos que demuestran avance.
              <br />
              Luego nombras la ansiedad sin dejar que mande.
              <br />
              Solo entonces das oxígeno al equipo sin soltar el rumbo.
            </p>
          </div>
        </div>

        <EmailCapture />

        <section className="mz-end">
          <div className="wrap section-grid">
            <div className="meta col-label reveal">Siguiente paso</div>
            <div className="col-body">
              <h2 className="mz-end-title reveal">
                ¿La presión te está empujando a revertir una decisión que sabes que es correcta?
              </h2>
              <p className="mz-end-sub reveal">
                Podemos entrenar esta posición en una sesión.
              </p>
              <div className="mz-end-actions">
                <a
                  href="/contacto"
                  className="mz-end-cta reveal"
                  data-track="clic_contacto"
                  data-track-label="blog-aguantar-el-plan"
                >
                  Agendar sesión →
                </a>
                <a
                  href="/diagnostico"
                  className="mz-end-cta-quiet reveal"
                  data-track="clic_diagnostico"
                  data-track-label="blog-aguantar-el-plan"
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
