import type { Metadata } from 'next'
import Link from 'next/link'
import { EmailCapture } from '../../../components/EmailCapture'

const BASE_URL = 'https://manzanatraining.com.mx'
const SLUG = 'romper-la-burocracia-precoz'
const TITLE = 'Romper la burocracia precoz: cuando tu startup se mueve como corporativo'
const DESCRIPTION =
  'Tu startup tiene 40 personas y ya parece corporativo. Juntas que no deciden, comités que diluyen, procesos que estorban. Tres movimientos para cortar el ritual antes de que se trague la velocidad.'
const IMAGE = `${BASE_URL}/blog-romper-la-burocracia-precoz.webp`
const DATE = '2026-05-04'

export const metadata: Metadata = {
  title: `${TITLE} — MANZANA`,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      'Empezó con una junta. Después fueron tres. Ahora no se decide nada sin un comité. Tres movimientos para recuperar la velocidad de startup antes de que sea tarde.',
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
            <span>May 2026</span>
          </div>
          <h1 className="article-title reveal">{TITLE}</h1>
          <p className="article-lead reveal">
            Empezó con una junta semanal para "alinear". Después fueron tres,
            con sub-comités. Ahora hay un proceso de aprobación de tres pasos
            para mover una landing page. El equipo dejó de aburrirse en las
            juntas y empezó a sentirlas productivas. El problema es que el
            negocio sigue moviéndose a la velocidad de antes — o más lento.
          </p>
          <figure className="article-figure reveal">
            <img
              src="/blog-romper-la-burocracia-precoz.webp"
              alt="Avión de papel atrapado en una red densa de hilos — la velocidad de una startup ahogada por proceso prematuro"
              width={1792}
              height={1024}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </figure>

          <div className="mz-prose">
            <h2 className="reveal">La posición</h2>
            <p className="reveal">
              En jiu-jitsu hay agarres que no deberías hacer. Te dan sensación
              de control — sostienes la manga, sostienes el cuello, sostienes
              la pierna — pero te ocupan las dos manos y te roban la
              movilidad. El otro no necesita escapar: solo tiene que esperar a
              que te canses de sostener. Es la posición del que se ata solo.
            </p>
            <p className="reveal">
              En una empresa, esta posición se activa cuando una startup
              joven empieza a importar rituales de empresa grande antes de
              tener el tamaño que los justifica. Nace la junta de
              alineación. Nace el comité de prioridades. Nace el documento
              de propuesta. Cada uno parece sensato por separado. Juntos
              construyen una estructura que pesa más que la operación que
              quiere ordenar.
            </p>
            <p className="reveal">
              No es que el equipo se haya vuelto incompetente. Es que ahora
              cada decisión pasa por seis manos antes de tomarse. Y cada
              mano agrega medio día. Lo que antes tomaba una conversación de
              quince minutos ahora se cocina dos semanas — y al final, la
              decisión es la misma que se hubiera tomado el primer día.
            </p>

            <h2 className="reveal">Cómo se presenta</h2>
            <ul className="reveal">
              <li>Las juntas de "alineación" se multiplican y nadie tiene autoridad para cancelar las que dejaron de servir.</li>
              <li>Cada decisión chica necesita un Slack, un doc y un visto bueno de tres personas que ni siquiera son las que ejecutan.</li>
              <li>Aparecen palabras nuevas: comité, framework, governance, escalation path. Antes se decía "le pregunto a Ana".</li>
              <li>Hay procesos para procesos. Una nueva contratación requiere llenar un formato; el formato lo aprueba un comité; el comité se reúne los jueves.</li>
              <li>Los managers nuevos llegan y proponen "estandarizar". Nadie pregunta si la estandarización compensa el costo de aplicarla.</li>
              <li>El equipo joven ya no propone. Espera. Aprendió que proponer abre seis hilos de validación.</li>
            </ul>
            <span className="quiet reveal">
              Si tu startup necesita una junta de 30 minutos para decidir el color de un botón, ya no eres startup. Eres corporativo chiquito.
            </span>

            <h2 className="reveal">El daño real</h2>
            <p className="reveal">
              La burocracia precoz no se siente como problema al inicio.
              Se siente como madurez. "Ya somos más serios", "ya tenemos
              orden", "ya no improvisamos". Es agradable porque las juntas
              llenan la agenda y la agenda llena se confunde con
              productividad.
            </p>
            <p className="reveal">
              El primer costo es el ciclo de decisión. Lo que antes tomaba
              una hora ahora toma una semana. No porque la decisión sea más
              compleja — porque hay más eslabones. Cada eslabón agrega
              espera, contexto perdido y ruido. La velocidad que era tu
              ventaja se evapora sin que nadie firme un memo.
            </p>
            <p className="reveal">
              El segundo costo es la propiedad. Cuando todo se decide en
              comité, nadie es dueño. Si sale mal, fue colectivo. Si sale
              bien, también. El equipo aprende que mover algo solo es
              riesgoso, y que es más seguro distribuir el riesgo en una
              junta de seis. La iniciativa se diluye hasta desaparecer.
            </p>
            <p className="reveal">
              El tercero es el más caro y nadie lo nombra: la gente buena se
              aburre. La perfilada A que te ayudó a llegar a 30 personas no
              vino a llenar formatos. Vino a construir. Cuando descubre que
              ahora gasta la mitad de su semana en alineaciones, no se
              queja — actualiza su LinkedIn. Y el día que se va, el resto
              del comité sigue reunido.
            </p>
            <p className="lead reveal">
              La burocracia precoz no ordena el caos. Lo congela.
            </p>

            <h2 className="reveal">Por qué no se corta</h2>
            <p className="reveal">
              Porque cada pieza tiene defensor. La junta semanal la propuso
              alguien. El proceso de aprobación lo diseñó alguien. El
              comité lo formalizó alguien. Cancelarlo implica decirle a esa
              persona que su contribución estorba. Y nadie quiere tener esa
              conversación, así que el ritual sobrevive.
            </p>
            <p className="reveal">
              También porque la burocracia se confunde con estructura. Y
              decir "vamos a quitar este proceso" se oye como "vamos a
              volver al caos". Son dos cosas distintas. Estructura es lo
              que necesitas para que el negocio no dependa de la memoria de
              una persona. Burocracia es estructura sin función — el
              cascarón sin el contenido.
            </p>
            <p className="reveal">
              Y hay un tercer motivo, más incómodo: la burocracia protege
              al inseguro. Si la decisión la tomó el comité, no hay a quién
              despedir cuando salga mal. Si el proceso la validó, fue el
              proceso. La gente que en el fondo no quiere asumir riesgo
              prefiere mil veces un ritual que la cubra. Y ese instinto, en
              equipo, construye estructura sin que nadie lo decida
              explícitamente.
            </p>
            <p className="reveal">
              Por eso es tan difícil revertir: no se construyó por
              decisión, se construyó por defecto. Y lo que se construyó por
              defecto se sostiene por defecto.
            </p>

            <div className="mz-mid-cta reveal">
              <p>Cortar burocracia sin volver al caos es entrenable. En una sesión.</p>
              <Link href="/contacto" data-track="clic_contacto" data-track-label="blog-romper-la-burocracia-precoz-mid">
                Agendar 15 min →
              </Link>
            </div>

            <div className="mz-call reveal">
              <span className="meta mz-call-label">Los 3 movimientos</span>
              <div className="mz-call-item">
                <h3>1. Matar la junta que ya no decide</h3>
                <p>
                  El primer movimiento no es rediseñar procesos. Es cancelar
                  reuniones. La burocracia precoz vive principalmente en
                  juntas recurrentes que se inventaron para resolver algo
                  específico y se quedaron en calendario meses después de
                  que ese algo se resolvió. Antes de tocar nada más, audita
                  el calendario.
                </p>
                <ul>
                  <li>
                    Lista todas las juntas recurrentes de los últimos tres
                    meses. Para cada una, pregunta: ¿qué decisión salió de
                    aquí esta semana? Si no hay respuesta clara en cinco
                    segundos, va a la mesa de cancelación.
                  </li>
                  <li>
                    Cancela primero, evalúa después. Si la junta era
                    necesaria, alguien va a quejarse en una semana y la
                    reactivas con propósito. Si nadie se queja, descubriste
                    que llevaba meses siendo decoración.
                  </li>
                  <li>
                    Para las que sí se quedan, define qué decisión sale
                    cada vez. Sin decisión esperada, no hay junta —
                    hay status async en un documento. La junta es el
                    formato más caro de comunicación. Úsala solo cuando
                    hay que cerrar algo.
                  </li>
                  <li>
                    Quita a la mitad de los asistentes. La regla simple:
                    si alguien no decide ni ejecuta, no necesita estar.
                    Recibirá el resumen. La gente se ofende menos de lo
                    que crees y se libera más tiempo del que esperas.
                  </li>
                </ul>
                <span className="quiet">Una junta sin decisión esperada es una junta para verse trabajando.</span>
              </div>
              <div className="mz-call-item">
                <h3>2. Poner dueño explícito en cada decisión</h3>
                <p>
                  El segundo movimiento es eliminar la decisión por comité
                  en todo lo que no requiera comité. La mayoría de las
                  decisiones operativas necesitan una persona responsable,
                  no seis personas alineadas. La diferencia entre una
                  startup rápida y una corporativa chiquita es esta
                  exactamente: en una hay un dueño por decisión; en la
                  otra, un grupo.
                </p>
                <ul>
                  <li>
                    Para cada tipo de decisión recurrente — contrataciones
                    junior, cambios de producto, propuestas a clientes,
                    presupuesto chico — define una sola persona que
                    decide. No "decide después de consultar". Decide.
                  </li>
                  <li>
                    Distingue consulta de aprobación. Consultar es
                    obligatorio cuando otra área se ve afectada. Aprobar
                    es lo que mata velocidad. La regla útil: pocas
                    decisiones grandes requieren aprobación; ninguna
                    decisión chica debería.
                  </li>
                  <li>
                    Cuando alguien quiera "alinear con el equipo" antes
                    de mover algo reversible, devuélvele el peso:
                    "decide y avisa después". Si la decisión es mala, se
                    revierte. Si es buena, ya pasó. Lo único caro es
                    quedarse alineando.
                  </li>
                  <li>
                    Define en voz alta qué significa "decidido". Cuando
                    el dueño de una decisión cierra, se cerró. Quien
                    quiera reabrir tiene que traer información nueva, no
                    solo opinión nueva. Sin eso, todo se re-litiga
                    eternamente.
                  </li>
                </ul>
                <span className="quiet">El comité es lo que pasa cuando nadie quiere ser dueño.</span>
              </div>
              <div className="mz-call-item">
                <h3>3. Subir el costo de pedir permiso</h3>
                <p>
                  El tercer movimiento es el más cultural y por eso el más
                  difícil. Hay que invertir el default. En una empresa
                  burocratizada, la regla implícita es "pide permiso antes
                  de actuar". En una empresa que aún funciona como
                  startup, la regla es "actúa y avisa, salvo en lo
                  irreversible". No basta con declararlo: hay que
                  reforzarlo cada vez que pasa algo.
                </p>
                <ul>
                  <li>
                    Distingue una vez, en voz alta, qué decisiones son
                    reversibles y cuáles no. Lo reversible — un experimento,
                    un copy, un proceso interno — no necesita permiso. Lo
                    irreversible — un despido, un contrato grande, un
                    cambio de marca — sí. Los demás defaults se confunden
                    cuando esa lista no es explícita.
                  </li>
                  <li>
                    Cuando alguien venga a pedir permiso para algo
                    reversible, no lo apruebes. Devuélveselo: "tú decides,
                    yo te apoyo". Las primeras veces costará. Después de
                    cinco repeticiones, el equipo entiende que pedirte
                    permiso es más caro que decidir.
                  </li>
                  <li>
                    Cuando alguien actúe sin permiso y le salga mal,
                    protege la conducta, no el resultado. "Hiciste bien
                    en moverte. Vamos a ver qué pasó." Si castigas la
                    iniciativa, en seis semanas todos están otra vez
                    alineando antes de moverse.
                  </li>
                  <li>
                    Cierra los procesos de aprobación que no aportan.
                    Si tu firma no cambia el resultado en 90% de los
                    casos, no eres aprobador — eres trámite. Tramita
                    menos. Confía en el dueño que ya pusiste.
                  </li>
                </ul>
                <span className="quiet">La velocidad de una startup no es energía. Es permiso por defecto.</span>
              </div>
            </div>

            <h2 className="reveal">Lo que nadie dice en voz alta</h2>
            <p className="reveal">
              La burocracia precoz suele venir de dos fuentes. La primera:
              directores que llegan de corporativos grandes e importan
              rituales que allá tenían sentido — porque había cinco mil
              personas y una falla costaba millones. En tu empresa de
              cuarenta cuesta velocidad. Esos rituales no se trasplantan
              limpiamente: se adaptan o se desechan.
            </p>
            <p className="reveal">
              La segunda fuente es más íntima: founders que quieren
              "profesionalizar" la empresa y confunden estructura con
              proceso. Estructura es saber quién hace qué y a quién le
              reporta. Proceso es el formato y los pasos para hacer lo
              mismo cien veces. Una startup de cuarenta personas necesita
              estructura. Casi no necesita proceso. Y cuando un founder
              que se siente inseguro empieza a llenar el vacío con
              proceso, la velocidad muere en silencio.
            </p>
            <p className="reveal">
              Hay una señal limpia para detectarlo: el día que las juntas
              dejaron de aburrir y empezaron a sentirse productivas, sin
              que el negocio se mueva más rápido. Esa sensación de
              productividad es el síntoma. Producir juntas no es producir.
              Sostener rituales no es operar. La burocracia precoz se
              siente bien por dentro. Por fuera, los números no se mueven.
            </p>
            <p className="reveal">
              No estás creciendo en madurez. Estás creciendo en peso.
            </p>

            <h2 className="reveal">Enseñanza Manzana</h2>
            <p className="lead reveal">La burocracia no es estructura.</p>
            <p className="lead reveal">Es estructura sin función — el cascarón sin el contenido.</p>
            <p className="reveal" style={{ color: 'var(--gray)', marginTop: 24 }}>
              Primero matas la junta que ya no decide.
              <br />
              Luego pones dueño explícito en cada decisión.
              <br />
              Solo entonces dejas de pedir permiso para lo reversible.
            </p>
          </div>
        </div>

        <nav className="article-related reveal">
          <span className="meta">También en el blog</span>
          <ul>
            <li><Link href="/blog/resistencia-pasiva-el-enemigo-invisible">Resistencia pasiva: el enemigo invisible</Link></li>
            <li><Link href="/blog/romper-el-monopolio">Romper el monopolio: cuando la información es poder</Link></li>
          </ul>
        </nav>

        <EmailCapture />

        <section className="mz-end">
          <div className="wrap section-grid">
            <div className="meta col-label reveal">Siguiente paso</div>
            <div className="col-body">
              <h2 className="mz-end-title reveal">
                ¿Cuántas juntas de tu calendario sobrevivirían si tuvieras que justificar la decisión que salió de cada una esta semana?
              </h2>
              <p className="mz-end-sub reveal">
                Podemos entrenar esta posición en una sesión.
              </p>
              <div className="mz-end-actions">
                <Link
                  href="/contacto"
                  className="mz-end-cta reveal"
                  data-track="clic_contacto"
                  data-track-label="blog-romper-la-burocracia-precoz"
                >
                  Agendar sesión →
                </Link>
                <Link
                  href="/diagnostico"
                  className="mz-end-cta-quiet reveal"
                  data-track="clic_diagnostico"
                  data-track-label="blog-romper-la-burocracia-precoz"
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
