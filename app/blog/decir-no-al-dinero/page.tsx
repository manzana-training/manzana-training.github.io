import type { Metadata } from 'next'
import Link from 'next/link'
import { EmailCapture } from '../../../components/EmailCapture'

const BASE_URL = 'https://manzanatraining.com.mx'
const SLUG = 'decir-no-al-dinero'
const TITLE = 'Decir no al dinero: cuando piden aumento y no hay'
const DESCRIPTION =
  'El equipo pide aumentos. La caja no alcanza. Tres movimientos para decir la verdad sin perder a la gente clave ni prometer un futuro que no llega.'
const IMAGE = `${BASE_URL}/blog-decir-no-al-dinero.webp`
const DATE = '2026-05-10'

export const metadata: Metadata = {
  title: `${TITLE} — MANZANA`,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      'Tu mejor ingeniera pide un aumento. No hay con qué. Tres movimientos para decir la verdad cruda, cambiar la moneda y cerrar sin promesas que no vas a cumplir.',
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
            <span>7 min</span>
            <span>May 2026</span>
          </div>
          <h1 className="article-title reveal">{TITLE}</h1>
          <p className="article-lead reveal">
            Tu mejor ingeniera te pide una junta. Sabes para qué es. Ella sabe
            que tú sabes. Lleva dos años cargando proyectos que nadie más
            sostiene. Tiene razón en pedir lo que va a pedir. Y tú no tienes
            con qué. La conversación que sigue puede salvar al equipo o
            iniciar la fuga.
          </p>
          <figure className="article-figure reveal">
            <img
              src="/blog-decir-no-al-dinero.webp"
              alt="Balanza editorial desnivelada con una sola moneda dorada suspendida — la conversación de aumento cuando no hay con qué"
              width={1792}
              height={1024}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </figure>

          <div className="mz-prose">
            <h2 className="reveal">La posición</h2>
            <p className="reveal">
              En jiu-jitsu hay un instante en el que ya tienes el cuello
              expuesto. No estás vencido, pero cualquier movimiento mal
              calculado cierra el estrangulamiento. No puedes pelear de
              frente, no puedes escapar de lado, no puedes hablar más de la
              cuenta. Tienes que moverte con precisión absoluta o aceptas
              la rendición.
            </p>
            <p className="reveal">
              En una empresa, esta posición se activa cuando una persona
              clave pide más dinero y tú sabes que no hay. El negocio
              creció, los costos crecieron más, los márgenes se apretaron, y
              los aumentos automáticos que se daban hace tres años hoy no
              caben en el flujo. La persona que tienes enfrente no es
              irracional: pidió en el momento correcto, con el argumento
              correcto. Y tú no puedes decir que sí.
            </p>
            <p className="reveal">
              Lo que pase en los próximos quince minutos no se decide con
              cifras. Se decide con cómo dices la verdad. Si la disfrazas,
              la persona se va — no hoy, en seis meses. Si la dices mal, se
              va resentida y se lleva a otros con ella. Si la dices bien,
              se queda. No por el dinero. Por la sensación de que la
              respetaste lo suficiente para no mentirle.
            </p>

            <h2 className="reveal">Cómo se presenta</h2>
            <ul className="reveal">
              <li>Llega la conversación de revisión salarial y sabes que el ajuste promedio que vas a ofrecer está por debajo de lo que el mercado está pagando este año.</li>
              <li>Una persona perfilada A pide aumento con una propuesta de fuera en la mano. No es bluff. Es una oferta real.</li>
              <li>Tu mejor mando medio carga responsabilidades de director y cobra como manager. Lleva un año esperando que "se acomode" y ya se cansó.</li>
              <li>El equipo entero está en la junta de fin de año esperando un anuncio. Tienes que decir lo que nadie quiere oír.</li>
              <li>Alguien clave acaba de descubrir cuánto gana alguien nuevo con menos experiencia, contratado al precio del mercado actual.</li>
              <li>Te toca decirle a tu cofundador que su propio aumento queda congelado para que el equipo pueda recibir algo.</li>
            </ul>
            <span className="quiet reveal">
              No es una conversación de presupuesto. Es una conversación de respeto. La gente no se va por la cifra. Se va por cómo se la dijiste.
            </span>

            <h2 className="reveal">El daño real</h2>
            <p className="reveal">
              El daño no es perder a la persona. El daño es la versión que
              esa persona cuenta de tu empresa en los próximos doce meses.
              Si la conversación termina mal, lo que se va con ella no es
              solo su talento — es la narrativa de cómo trataste a alguien
              que estaba dándolo todo. Esa narrativa viaja en cafés, en
              entrevistas, en grupos de WhatsApp del gremio. Y la
              próxima vez que intentes contratar a alguien de su nivel,
              alguien ya le contó.
            </p>
            <p className="reveal">
              El segundo daño es el equipo que se queda. Si tu mejor
              persona se va por dinero y los demás lo perciben como
              maltrato, el siguiente trimestre lo pasan revisando ofertas
              de fuera. Nadie te lo dice. Lo verás en el ritmo: las cosas
              tardan más, las propuestas son más conservadoras, la gente
              dejó de pelearse por ideas en juntas. Están ahorrando
              energía para cuando suene el teléfono.
            </p>
            <p className="reveal">
              El tercer daño es interno y es el más caro para ti como
              líder: te acostumbras a posponer la conversación. Cada vez
              que se acerca, la mueves de día, le pides a RH que la
              maneje, la diluyes en un email genérico. Cuando finalmente
              ocurre, ya no es una conversación. Es un comunicado. Y los
              comunicados no retienen a nadie.
            </p>
            <p className="lead reveal">
              Decir no al dinero mal dicho cuesta más que el aumento que no diste.
            </p>

            <h2 className="reveal">Por qué no se actúa</h2>
            <p className="reveal">
              Porque la conversación se siente personal aunque no lo sea.
              Cuando alguien te pide un aumento, lo que está pidiendo no
              es solo dinero — está pidiendo que reconozcas su valor. Y
              decir "no hay" se escucha como "no vales lo que crees que
              vales". Aunque sepas que no es eso, la persona puede
              escucharlo así. Y ese miedo a herir hace que disfraces la
              respuesta.
            </p>
            <p className="reveal">
              También porque es más cómodo prometer futuro que negociar
              presente. "El próximo trimestre lo revisamos", "cuando
              cerremos la ronda", "vamos a ver cómo se acomoda el Q3" — son
              frases que compran tres meses de paz a cambio de doce meses
              de erosión. La persona se queda, pero apuntó la fecha
              mentalmente. Si no cumples, ya no es solo un no — es un no
              con historial.
            </p>
            <p className="reveal">
              Y hay un motivo más íntimo: tú mismo no quieres ver el
              número. Decir la verdad financiera al equipo implica
              decírtela primero a ti. Que el negocio no tiene el margen
              que pensabas. Que las decisiones de gasto del año pasado
              fueron generosas. Que el crecimiento que estás contando
              afuera no se traduce todavía en flujo real. Posponer la
              conversación es posponer el reflejo.
            </p>

            <div className="mz-mid-cta reveal">
              <p>Decir no al dinero sin perder a la gente clave es entrenable. En una sesión.</p>
              <Link href="/contacto" data-track="clic_contacto" data-track-label="blog-decir-no-al-dinero-mid">
                Agendar 15 min →
              </Link>
            </div>

            <div className="mz-call reveal">
              <span className="meta mz-call-label">Los 3 movimientos</span>
              <div className="mz-call-item">
                <h3>1. Decir la verdad financiera sin disfraz</h3>
                <p>
                  El primer movimiento no es justificar. Es nombrar el
                  número. Si la realidad es que el aumento no cabe este
                  año, la persona necesita oírlo dicho, no rodeado. La
                  mayoría de líderes pierde esta conversación en los
                  primeros tres minutos porque empieza con contexto,
                  contexto, contexto, y nunca llega a la frase que
                  importa. La gente buena lee la evasión antes de que
                  termines la primera oración.
                </p>
                <ul>
                  <li>
                    Abre con la conclusión, no con el rodeo. "No puedo
                    darte el aumento que pides este año. Te explico por
                    qué y qué sí puedo hacer." Cuatro segundos. Dicho.
                    Todo lo que sigue se construye sobre esa frase.
                  </li>
                  <li>
                    Da el dato financiero crudo en una línea, sin
                    convertirlo en presentación. "El margen del negocio
                    bajó tres puntos este año y no hay capacidad de
                    aumentos sobre inflación." No PowerPoint. No
                    eufemismos. Lo que está pasando, dicho como se lo
                    contarías a un socio.
                  </li>
                  <li>
                    No cargues con culpa que no te toca. No es tu trabajo
                    pedir perdón por la realidad financiera de un negocio
                    que apenas está sobreviviendo. Es tu trabajo decirla
                    sin dramatizarla. La persona del otro lado no
                    necesita verte angustiado. Necesita verte claro.
                  </li>
                  <li>
                    Reconoce su contribución en una sola frase específica,
                    no en un párrafo de elogios. "Sé exactamente qué
                    sostienes y cuánto vales en el mercado." Específico
                    pesa. Genérico se ignora.
                  </li>
                </ul>
                <span className="quiet">La gente buena perdona el no. No perdona el rodeo.</span>
              </div>
              <div className="mz-call-item">
                <h3>2. Cambiar la moneda de la negociación</h3>
                <p>
                  El segundo movimiento es abrir el escritorio. Si el
                  dinero no está, otras palancas sí — pero solo si las
                  ofreces como negociación real, no como consolación.
                  Ofrecer un viernes libre cuando alguien pidió veinte
                  por ciento de aumento es insultar dos veces. Lo que sí
                  funciona es pasar de la moneda monetaria a otras
                  monedas que tienen valor real para esa persona
                  específica.
                </p>
                <ul>
                  <li>
                    Pregunta directo qué pesa hoy en su vida que no es
                    salario. Tiempo, ubicación, autonomía, scope, equity,
                    título, exposición a inversionistas, una semana de
                    descanso, un proyecto que le interesa, formación
                    pagada de verdad. La respuesta te dice qué moneda
                    importa. No asumas.
                  </li>
                  <li>
                    Ofrece intercambio explícito, no regalo. "Si tomamos
                    fuera del dinero, ¿qué te haría sentido este año?"
                    La pregunta es seria. Si lo que pide es razonable y
                    está en tu mano, lo das. Si no, lo dices. Lo que no
                    haces es ofrecer cosas vagas para llenar el silencio.
                  </li>
                  <li>
                    Distingue lo que sí puedes mover ahora de lo que no.
                    Equity y autonomía suelen estar a tu alcance. Cambio
                    de título sin cambio de responsabilidad es trampa
                    visible. Vacaciones extra son tangibles. Promesas de
                    "más participación en decisiones" sin estructura
                    detrás son ruido.
                  </li>
                  <li>
                    Si lo único que pesa para esa persona es el dinero, y
                    el dinero no está, dilo y pasa al tercer movimiento.
                    No insistas en convencerla con palancas que no le
                    importan. Eso se siente a manipulación y se nota.
                  </li>
                </ul>
                <span className="quiet">El intercambio respeta. La consolación humilla.</span>
              </div>
              <div className="mz-call-item">
                <h3>3. Cerrar con compromiso verificable, no con &ldquo;veremos&rdquo;</h3>
                <p>
                  El tercer movimiento es el que la mayoría salta. Después
                  de decir el no y proponer alternativas, la conversación
                  necesita cerrar con algo concreto. Si la cerraste con
                  "vamos a ver cómo evoluciona el negocio", no cerraste —
                  abriste un crédito emocional que va a vencer en cuatro
                  meses. Cerrar con compromiso significa nombrar fecha,
                  condición, dueño y qué pasa si no se cumple.
                </p>
                <ul>
                  <li>
                    Define una fecha real para revisar el tema. No
                    "pronto". No "después de la ronda". Una fecha en
                    calendario. "El 15 de octubre revisamos esto otra
                    vez con número en mano." Si esa fecha tiene que
                    moverse, lo dices antes, no después.
                  </li>
                  <li>
                    Nombra la condición específica que tiene que
                    cumplirse para que la respuesta cambie. "Si cerramos
                    el cliente X y mantenemos margen en Y, hay espacio
                    para revisar." La persona necesita saber qué está
                    fuera de tu control y qué está dentro. La
                    transparencia sobre la condición es lo que separa
                    una promesa real de un placebo.
                  </li>
                  <li>
                    Asume dueño explícito de la siguiente reunión: tú.
                    No le pidas a la persona que te recuerde, no la
                    obligues a perseguirte. Si tú abriste el compromiso,
                    tú lo cierras. Que la persona tenga que tocarte la
                    puerta cuatro veces para cobrar lo que prometiste
                    desgasta más que el no original.
                  </li>
                  <li>
                    Define qué pasa si la condición no se cumple.
                    Decirlo de antemano evita la conversación amarga
                    después. "Si en octubre seguimos como estamos, vamos
                    a tener que hablar de cómo construimos algo que sí
                    funcione para ti aquí o cómo te ayudo a aterrizar
                    bien afuera." Esa frase parece arriesgada. Es lo
                    contrario. Es la frase que la persona buena estaba
                    esperando oír.
                  </li>
                </ul>
                <span className="quiet">El &ldquo;veremos&rdquo; no calma. Pospone la fuga.</span>
              </div>
            </div>

            <h2 className="reveal">Lo que nadie dice en voz alta</h2>
            <p className="reveal">
              La gente clave no se va por el monto. Se va por la
              sensación de que su tiempo se descontó sin discusión. Hay
              equipos que retienen perfilados A pagando por debajo del
              mercado durante años. No es magia. Es que en cada
              conversación de revisión, la persona sintió que la
              respetaron lo suficiente para no mentirle. Le dijeron lo
              que sí había. Le explicaron por qué. Cumplieron lo que
              prometieron. Y cuando no podían, lo dijeron también.
            </p>
            <p className="reveal">
              También hay empresas con presupuesto que pierden a sus
              mejores cada año. No es competencia de mercado. Es que
              cada vez que tocaron el tema, alguien arriba habló como
              consultora: con frases redondas, evasivas, llenas de
              "exploraremos opciones" y "vamos a ver cómo se acomoda".
              La persona aprende rápido. La frase corporativa significa
              que la decisión ya está tomada y no es a su favor — solo
              están suavizando la entrega.
            </p>
            <p className="reveal">
              Hay una señal que separa una empresa que retiene de una
              que pierde: cuando alguien sale de una conversación de
              aumento sin que le hayan dado lo que pedía, ¿sale con
              más claridad o con menos? Si sale con más claridad — sobre
              el negocio, sobre su lugar, sobre qué tendría que pasar —
              probablemente se queda. Si sale con menos claridad — con
              frases que repetir pero sin saber qué hacer con ellas —
              acaba de empezar a buscar afuera.
            </p>
            <p className="reveal">
              Decir no al dinero no es el problema. El problema es
              decirlo como consultora cuando lo que la persona necesita
              es un líder hablándole de frente.
            </p>

            <h2 className="reveal">Enseñanza Manzana</h2>
            <p className="lead reveal">Decir no al dinero no es decir no a la persona.</p>
            <p className="lead reveal">Es decir sí a lo que sí hay — y nombrarlo con la misma claridad.</p>
            <p className="reveal" style={{ color: 'var(--gray)', marginTop: 24 }}>
              Primero dices la verdad financiera sin disfraz.
              <br />
              Luego cambias la moneda y ofreces intercambio real.
              <br />
              Solo entonces cierras con fecha, condición y dueño.
            </p>
          </div>
        </div>

        <nav className="article-related reveal">
          <span className="meta">También en el blog</span>
          <ul>
            <li><Link href="/blog/oxigeno-o-muerte">Oxígeno o muerte: cuando el negocio se está acabando y nadie quiere verlo</Link></li>
            <li><Link href="/blog/soltar-el-lastre">Soltar el lastre: cuando sostener cuesta más que cortar</Link></li>
          </ul>
        </nav>

        <EmailCapture />

        <section className="mz-end">
          <div className="wrap section-grid">
            <div className="meta col-label reveal">Siguiente paso</div>
            <div className="col-body">
              <h2 className="mz-end-title reveal">
                Si tu mejor persona te pidiera aumento mañana y no tuvieras con qué, ¿saldría con más claridad de la junta o con la decisión de buscar afuera?
              </h2>
              <p className="mz-end-sub reveal">
                Podemos entrenar esta posición en una sesión.
              </p>
              <div className="mz-end-actions">
                <Link
                  href="/contacto"
                  className="mz-end-cta reveal"
                  data-track="clic_contacto"
                  data-track-label="blog-decir-no-al-dinero"
                >
                  Agendar sesión →
                </Link>
                <Link
                  href="/diagnostico"
                  className="mz-end-cta-quiet reveal"
                  data-track="clic_diagnostico"
                  data-track-label="blog-decir-no-al-dinero"
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
