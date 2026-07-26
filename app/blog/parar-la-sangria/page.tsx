import type { Metadata } from 'next'
import Link from 'next/link'
import { EmailCapture } from '../../../components/EmailCapture'

const BASE_URL = 'https://manzanatraining.com.mx'
const SLUG = 'parar-la-sangria'
const TITLE = 'Parar la sangría: cuando nada sale bien sin ti'
const DESCRIPTION =
  'Los mismos errores cada semana. Ya lo explicaste tres veces y sigue pasando. Tres movimientos para cambiar discurso por sistema y dejar de ser el control de calidad.'
const IMAGE = `${BASE_URL}/blog-parar-la-sangria.webp`
const DATE = '2026-07-26'

export const metadata: Metadata = {
  title: `${TITLE} — MANZANA`,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      'Si el error se repite, el problema no es que no lo hayan entendido. Es que no hay nada que lo detenga cuando tú no estás mirando.',
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
            <span>7 min</span>
            <span>Jul 2026</span>
          </div>
          <h1 className="article-title reveal">{TITLE}</h1>
          <p className="article-lead reveal">
            La cotización volvió a salir con el precio viejo. Es la tercera
            vez este trimestre. Ya lo explicaste en junta, lo explicaste por
            escrito y lo explicaste otra vez el mes pasado con más detalle
            que las dos anteriores. La gente asiente. Entiende. Y vuelve a
            pasar. Entonces haces lo único que sí funciona: lo revisas tú.
            Y funciona. Ese es exactamente el problema.
          </p>
          <figure className="article-figure reveal">
            <img
              src="/blog-parar-la-sangria.webp"
              alt="Una losa de piedra sostenida por varias columnas, con una veta de luz cálida marcando la única sobre la que se concentra todo el peso"
              width={1792}
              height={1024}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </figure>

          <div className="mz-prose">
            <h2 className="reveal">La posición</h2>
            <p className="reveal">
              Hay posiciones donde estás perdiendo y hay posiciones donde
              solo estás cargando. Se sienten distinto. Perder duele de
              golpe; cargar no duele, cansa. Nadie te está sometiendo. Nadie
              te va a rematar. Simplemente todo el peso pasa por ti, y
              mientras aguantes, el sistema no tiene ninguna razón para
              cambiar. La derrota no llega por un golpe. Llega el día que se
              te acaba el aire.
            </p>
            <p className="reveal">
              En una empresa esta posición se ve así: los errores se
              repiten, hablar ya no los detiene, y lo único que sostiene la
              calidad es tu supervisión personal. No es un problema de
              gente mala. Casi siempre es gente buena. Es que tú te
              convertiste en el único punto donde las cosas se corrigen, y
              un punto único de corrección tiene un límite duro: tus horas.
            </p>
            <p className="reveal">
              La trampa aquí no es la flojera. Es la elocuencia. Cuando el
              error se repite, el reflejo del líder es explicar mejor: más
              contexto, mejores ejemplos, un documento más claro. Se siente
              productivo porque se siente como enseñar. Pero si el error ya
              se explicó tres veces y sigue ocurriendo, la explicación no es
              lo que falta. La cuarta versión del mismo discurso no es
              pedagogía. Es evidencia.
            </p>

            <h2 className="reveal">Cómo se presenta</h2>
            <ul className="reveal">
              <li>Explicaste el mismo error tres veces con tres niveles de detalle distintos. Sigue pasando.</li>
              <li>Todo lo que sale bien pasó por tus manos. Lo dices con orgullo y es un síntoma.</li>
              <li>Tu semana está llena de revisiones, no de decisiones. Tu calendario ya no es de dueño, es de inspector.</li>
              <li>Dices &quot;es más rápido si lo hago yo&quot; y tienes razón. Tener razón en eso es lo que te tiene ahí.</li>
              <li>Te vas cuatro días y regresas a apagar tres cosas que se prendieron el primer día.</li>
              <li>La gente te manda todo en copia. No es transparencia: es que aprendieron que tú eres el filtro final.</li>
              <li>Contrataste a alguien con experiencia para que esto dejara de pasar. Sigue pasando.</li>
            </ul>
            <span className="quiet reveal">
              El equipo no falla por falta de instrucciones. Ya tiene demasiadas.
            </span>

            <h2 className="reveal">El daño real</h2>
            <p className="reveal">
              El primer daño es aritmético y es el más fácil de ignorar. Si
              revisas diez entregables por semana y cada revisión te toma
              cuarenta minutos entre leerlo, corregirlo y explicar la
              corrección, ahí se te fueron casi siete horas. Casi un día
              completo de la semana del dueño, gastado en tareas que ya le
              pagas a alguien más por hacer bien. Eso no es un costo
              extraordinario que aparece en una crisis. Es una renta que
              pagas todas las semanas, y crece con el tamaño del equipo.
            </p>
            <p className="reveal">
              El segundo daño es que instalaste dependencia sin querer.
              Cuando existe un revisor final infalible, nadie construye su
              propio control de calidad — sería trabajo duplicado y la
              gente no es tonta. El equipo optimiza racionalmente: entrega
              rápido y sin pulir, porque el pulido lo hace el jefe. Después
              vas a llamar a eso falta de compromiso. No lo es. Es el
              comportamiento que tu sistema premia.
            </p>
            <p className="reveal">
              El tercer daño es el que no ves y es el que te va a cobrar
              caro. Tú solo cachas los errores que llegan a tu escritorio.
              Los que se resuelven antes de llegar, los que nadie te
              cuenta, los que el cliente ya vio y no reportó: esos no
              existen en tu conteo. Cuando el líder es el único control, la
              organización deja de medir errores y empieza a medir cuántos
              errores le llegan al líder. Son dos números distintos, y solo
              uno de ellos tiene que ver con la calidad.
            </p>
            <p className="lead reveal">
              No tienes un problema de gente. Tienes un problema de sistema, y lo estás pagando con tu semana.
            </p>

            <h2 className="reveal">Por qué no se actúa</h2>
            <p className="reveal">
              Porque revisar se siente responsable. Sostener la calidad con
              el cuerpo parece lo que hace un buen dueño. Y funciona: cada
              vez que revisas, el resultado mejora. Recibes refuerzo
              inmediato por hacer exactamente lo que te tiene atrapado.
              Ningún hábito es más difícil de cortar que el que sí da
              resultado.
            </p>
            <p className="reveal">
              Porque poner sistema suena a burocracia, y burocracia es una
              palabra sucia en una empresa chica. Con razón: ya escribimos
              aquí sobre la{' '}
              <Link href="/blog/romper-la-burocracia-precoz">
                burocracia precoz
              </Link>{' '}
              y sobre cómo se traga la velocidad. Pero hay una diferencia
              que se pierde en el pánico. El ritual agrega pasos y no
              detiene nada. El control quita pasos y detiene una cosa
              específica. Si tu proceso nuevo no puede nombrar el error
              exacto que impide, no es control. Es ritual, y sí, mátalo.
            </p>
            <p className="reveal">
              Y porque soltar da miedo con fundamento. La primera semana
              sin tu revisión van a salir errores que tú habrías cachado.
              Eso no es una posibilidad, es una certeza. Casi todos los
              líderes llegan hasta aquí, ven el primer error, y regresan a
              revisar. Volver es lo que convierte el intento en un ciclo:
              cada regreso le enseña al equipo que el control era teatro y
              que tú siempre estás abajo por si acaso.
            </p>

            <div className="mz-mid-cta reveal">
              <p>Cambiar discurso por sistema es entrenable. En una sesión.</p>
              <Link href="/contacto" data-track="clic_contacto" data-track-label="blog-parar-la-sangria-mid">
                Agendar 15 min →
              </Link>
            </div>

            <div className="mz-call reveal">
              <span className="meta mz-call-label">Los 3 movimientos</span>
              <div className="mz-call-item">
                <h3>1. Medir la sangría antes de taparla</h3>
                <p>
                  Dos semanas de registro antes de tocar nada. Sin datos vas
                  a arreglar el error más ruidoso, que casi nunca es el más
                  caro. Cuatro columnas y nada más: qué error fue, dónde se
                  originó, cuánto costó en dinero o en horas, y quién lo
                  detectó. Esa última columna es la que duele.
                </p>
                <ul>
                  <li>
                    Registra dónde se detectó, no solo qué pasó. Si tu
                    nombre aparece en la mayoría de las filas, ya tienes el
                    diagnóstico completo: el control de calidad de la
                    empresa eres tú, y no escalas.
                  </li>
                  <li>
                    Separa error de ejecución de error de criterio. El de
                    ejecución se resuelve con un control mecánico. El de
                    criterio significa que la persona no tiene la
                    información o el permiso para decidir bien, y ese se
                    arregla en otro lado. Tratarlos igual es por qué el
                    último intento no sirvió.
                  </li>
                  <li>
                    Espera concentración y búscala. En la mayoría de los
                    casos dos o tres tipos de error explican casi toda la
                    sangría. No necesitas un sistema de calidad. Necesitas
                    tapar dos agujeros.
                  </li>
                  <li>
                    Dos semanas, no un trimestre. Esto es un conteo, no un
                    proyecto. Si esperas tres meses de datos, la medición
                    ya se volvió otra forma de posponer.
                  </li>
                </ul>
                <span className="quiet">Si tú eres quien detecta, tú eres el sistema. Y el sistema se cansa.</span>
              </div>
              <div className="mz-call-item">
                <h3>2. Poner el control donde nace el error, no donde lo descubres</h3>
                <p>
                  Un control es una regla que actúa sin ti. No es un
                  recordatorio, no es una junta, no es un documento. Es algo
                  que hace que el error sea difícil de cometer o imposible
                  de pasar. Un límite duro, un campo obligatorio, una lista
                  de verificación de cinco puntos, un valor por defecto que
                  ya viene bien puesto. Y va donde el error se origina, no
                  donde a ti te llega.
                </p>
                <ul>
                  <li>
                    Un control por error, no un manual. El manual es la
                    versión escrita del discurso que ya no funcionó. Si el
                    control no cabe en una frase, es un ritual.
                  </li>
                  <li>
                    El control tiene dueño, y el dueño no eres tú. Alguien
                    con nombre responde por que se aplique. Sin dueño
                    explícito el control dura tres semanas y muere sin que
                    nadie lo declare muerto.
                  </li>
                  <li>
                    Si el control requiere tu firma, no es un control. Es un
                    cuello de botella con nombre nuevo. Pasaste de revisar
                    todo a autorizar todo y tu semana no cambió.
                  </li>
                  <li>
                    Si aplicar el control cuesta más que el error que
                    previene, mátalo. Un control que le quita quince
                    minutos diarios a cinco personas para evitar un error
                    de mil pesos al mes es un error más caro que el
                    original.
                  </li>
                  <li>
                    Prefiere el control que hace visible el error sobre el
                    que lo prohíbe. Prohibir invita a rodear. Hacerlo
                    visible pone la corrección en manos de quien está más
                    cerca, que casi nunca eres tú.
                  </li>
                </ul>
                <span className="quiet">Menos discurso, más sistema. El discurso lo tienes que repetir. El sistema no.</span>
              </div>
              <div className="mz-call-item">
                <h3>3. Soltar en público y aguantar la primera semana</h3>
                <p>
                  El control no existe hasta que dejas de revisar. Y eso se
                  anuncia, no se hace en silencio esperando que nadie note.
                  Di qué dejas de revisar, desde cuándo, y quién responde
                  ahora. Si lo sueltas sin anunciarlo, el equipo asume que
                  sigues abajo y no cambia nada. Si lo anuncias y luego
                  regresas al primer tropiezo, les enseñaste que tu palabra
                  dura una semana.
                </p>
                <ul>
                  <li>
                    Deja pasar un error barato a propósito. Es el precio de
                    la lección y es más barato que otro trimestre de
                    revisiones. Elige un terreno donde equivocarse cueste
                    poco y suéltalo ahí primero.
                  </li>
                  <li>
                    Define qué significa que algo está bajo control:
                    quién revisa, con qué criterio, y cuándo se te escala.
                    Sin ese límite escrito, todo se te escala otra vez por
                    default y en dos semanas estás donde empezaste.
                  </li>
                  <li>
                    La primera semana empeora. Eso no es la señal de que
                    falló. Es la señal de que por fin estás midiendo el
                    nivel real del equipo en lugar de tu capacidad de
                    tapar. Aguanta hasta la cuarta semana antes de juzgar.
                  </li>
                  <li>
                    Vuelve a medir a las cuatro semanas con las mismas
                    cuatro columnas. Si tu nombre bajó en la columna de
                    quién detectó, funcionó, aunque el total de errores no
                    haya bajado todavía. Ese es el orden real: primero se
                    mueve quién corrige, después baja cuánto se rompe.
                  </li>
                </ul>
                <span className="quiet">Si vuelves a revisar al primer error, el control fue teatro y todos lo vieron.</span>
              </div>
            </div>

            <h2 className="reveal">Lo que nadie dice en voz alta</h2>
            <p className="reveal">
              El líder que revisa todo casi nunca está protegiendo la
              calidad. Está protegiendo su lugar. Ser el que arregla las
              cosas es la forma más socialmente aceptable de ser
              imprescindible, y se siente bien todos los días: te buscan,
              te necesitan, sin ti se cae. Esa sensación es tan buena que
              muy pocos la examinan de frente. Cuesta una semana de trabajo
              al mes y se paga con gusto porque no llega como factura.
              Llega como identidad.
            </p>
            <p className="reveal">
              La parte incómoda es esta: si te fueras un mes sin señal, el
              negocio no colapsaría. Se ajustaría. Sacaría un par de
              errores, alguien tomaría decisiones que tú habrías tomado
              distinto, y seguiría. Lo que sí colapsaría es la versión de
              ti que necesita que colapse. Por eso esta posición se aguanta
              años: no se sostiene sola, la sostienes tú, y tienes un motivo
              para hacerlo que no aparece en ningún organigrama.
            </p>

            <h2 className="reveal">Enseñanza Manzana</h2>
            <p className="lead reveal">Explicar es gratis. Por eso no funciona.</p>
            <p className="lead reveal">Menos discurso, más sistema.</p>
            <p className="reveal" style={{ color: 'var(--gray)', marginTop: 24 }}>
              Primero mides la sangría — dos semanas, cuatro columnas.
              <br />
              Luego pones el control donde nace el error, con dueño que no eres tú.
              <br />
              Solo entonces sueltas — y aguantas la primera semana.
            </p>
          </div>
        </div>

        <nav className="article-related reveal">
          <span className="meta">También en el blog</span>
          <ul>
            <li><Link href="/blog/romper-la-burocracia-precoz">Romper la burocracia precoz: cuando tu startup se mueve como corporativo</Link></li>
            <li><Link href="/blog/resistencia-pasiva-el-enemigo-invisible">Resistencia pasiva: el enemigo invisible</Link></li>
          </ul>
        </nav>

        <EmailCapture />

        <section className="mz-end">
          <div className="wrap section-grid">
            <div className="meta col-label reveal">Siguiente paso</div>
            <div className="col-body">
              <h2 className="mz-end-title reveal">
                Si te vas dos semanas sin señal, ¿qué se rompe primero? Eso que acabas de pensar es tu primer control.
              </h2>
              <p className="mz-end-sub reveal">
                Podemos entrenar esta posición en una sesión.
              </p>
              <div className="mz-end-actions">
                <Link
                  href="/contacto"
                  className="mz-end-cta reveal"
                  data-track="clic_contacto"
                  data-track-label="blog-parar-la-sangria"
                >
                  Agendar sesión →
                </Link>
                <Link
                  href="/diagnostico"
                  className="mz-end-cta-quiet reveal"
                  data-track="clic_diagnostico"
                  data-track-label="blog-parar-la-sangria"
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
