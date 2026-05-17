import type { Metadata } from 'next'
import Link from 'next/link'
import { EmailCapture } from '../../../components/EmailCapture'

const BASE_URL = 'https://manzanatraining.com.mx'
const SLUG = 'encender-el-minimo-viable'
const TITLE = 'Encender el mínimo viable: cuando el equipo solo viene por el cheque'
const DESCRIPTION =
  'Equipo apático que solo cumple por el cheque. Tres movimientos para crear ownership real sin discursos motivacionales ni amenazas.'
const IMAGE = `${BASE_URL}/blog-encender-el-minimo-viable.webp`
const DATE = '2026-05-17'

export const metadata: Metadata = {
  title: `${TITLE} — MANZANA`,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      'Tu equipo cumple. Nadie propone. Nadie empuja. Tres movimientos para encender ownership real cuando los discursos motivacionales ya no alcanzan.',
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
            <span>7 min</span>
            <span>May 2026</span>
          </div>
          <h1 className="article-title reveal">{TITLE}</h1>
          <p className="article-lead reveal">
            Lunes. Junta de equipo. Lanzas la pregunta. Nadie levanta la
            mano. Nadie propone. Nadie discute. Asienten. Cumplen lo
            asignado. Salen a las seis. Y tú vuelves a cerrar la noche
            moviendo cosas que deberían haberse movido solas. No están
            enojados. No están desmotivados. Están pasivos. Y la
            pasividad no se cura con discursos.
          </p>
          <figure className="article-figure reveal">
            <img
              src="/blog-encender-el-minimo-viable.webp"
              alt="Brasa apagada bajo un haz de luz dorada — equipo en guardia pasiva, ownership sin encender"
              width={1792}
              height={1024}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </figure>

          <div className="mz-prose">
            <h2 className="reveal">La posición</h2>
            <p className="reveal">
              En jiu-jitsu hay una guardia pasiva. El otro no ataca. No
              defiende con fuerza. Solo está. Ocupa el espacio. No te da
              por dónde entrar porque no se compromete a nada. No puedes
              someter a alguien que no presenta resistencia ni iniciativa
              — solo te desgasta el reloj hasta que alguien te marca por
              inactividad.
            </p>
            <p className="reveal">
              En una empresa, esta posición se activa cuando el equipo
              hace exactamente lo que pides. Ni un milímetro más.
              Cumplen. Llegan. Entregan. Y nada empuja. Las decisiones
              quedan parqueadas si tú no las cierras. Los problemas
              suben hasta ti porque nadie los baja al sistema. "Eso no
              es de mi área" se vuelve frase normal. El equipo no está
              roto: está en guardia pasiva.
            </p>
            <p className="reveal">
              La trampa es que no parece grave. Nadie sabotea. Nadie
              pelea. Todos están cumpliendo. El daño se acumula en
              silencio: tu costo de coordinación se multiplica, te
              vuelves cuello de botella permanente, y la gente que sí
              quiere ownership empieza a buscar afuera porque no
              aguanta cargar lo que el resto no carga.
            </p>

            <h2 className="reveal">Cómo se presenta</h2>
            <ul className="reveal">
              <li>Nadie propone nada en juntas. Responden cuando preguntas directamente y nada más.</li>
              <li>Las decisiones quedan en espera hasta que tú las cierras, aunque no tengan que pasar por ti.</li>
              <li>"Eso no es de mi área" o "estoy esperando luz verde" se vuelven frases que escuchas cada semana.</li>
              <li>A las 6:01 se cierran laptops sin importar qué quedó pendiente. No hay malicia: hay contrato.</li>
              <li>Cuando algo falla, nadie levanta la mano antes de que tú preguntes. Te enteras tarde.</li>
              <li>Los proyectos avanzan al ritmo de tu push, no al de la operación.</li>
              <li>La gente buena del equipo (uno o dos) empieza a hablar en pasillo de "fricciones" sin nombrar a nadie. Es la señal previa a que renuncien.</li>
            </ul>
            <span className="quiet reveal">
              La pasividad no es desmotivación. Es contrato cumplido. Hicieron exactamente lo que firmaron. El error fue lo que les pediste firmar.
            </span>

            <h2 className="reveal">El daño real</h2>
            <p className="reveal">
              El primer daño es operacional. Te vuelves el único motor
              del sistema. Cada proyecto avanza al ritmo que tú puedas
              empujar. Cada decisión espera tu visto bueno aunque no
              necesite tu visto bueno. Coordinar un equipo de ocho te
              cuesta lo que debería costar coordinar uno de
              veinticinco. El negocio escala solo si tú escalas — y tú
              no escalas.
            </p>
            <p className="reveal">
              El segundo daño es de talento. La gente que quiere
              ownership se va. No con drama. Se va a un lugar donde su
              iniciativa tenga espacio. El que se queda es el que toleró
              el cheque. Cada vez que pierdes a alguien con iniciativa
              y lo reemplazas con alguien que cumple, la cultura del
              equipo se hunde un escalón. En dieciocho meses tienes un
              equipo entero de gente que sabe hacer su parte y no la
              pisa.
            </p>
            <p className="reveal">
              El tercer daño es el más caro: empiezas a confundir
              cumplimiento con desempeño. La gente entrega lo asignado,
              los KPIs en verde, las juntas a tiempo — y crees que el
              equipo funciona. Lo que no ves es lo que no se movió
              porque nadie levantó la mano. Las oportunidades que
              pasaron porque nadie las propuso. Las fallas que se
              detectaron tarde porque nadie corrió a avisar. El equipo
              funcionaba al cuarenta por ciento y tú creías que era el
              cien.
            </p>
            <p className="lead reveal">
              La apatía bien disimulada se confunde con orden. Por eso es la posición más cara de todas.
            </p>

            <h2 className="reveal">Por qué no se actúa</h2>
            <p className="reveal">
              Porque la apatía no se ve como crisis. Nadie está
              peleando, nadie sabotea, nadie falta. Todos están
              cumpliendo. Eso es lo que hace tan difícil intervenir: no
              hay incidente del cual agarrarse para tener la
              conversación. Esperas un detonante. El detonante nunca
              llega. Solo llega la erosión.
            </p>
            <p className="reveal">
              Porque tu instinto te lleva a motivar. Discurso de
              propósito en el offsite. Charla sobre la misión. Pizza el
              viernes. Activación de cultura. Una semana después, el
              equipo cumple su semana exactamente como la cumplió
              antes. Lo que motivas dura lo que dura el discurso. Lo
              que entrenas dura lo que dura la empresa. Estás usando la
              herramienta equivocada.
            </p>
            <p className="reveal">
              Y porque hay una verdad incómoda: estás pidiendo
              ownership a gente que nunca lo cobró. Cuando contrataste,
              contrataste cumplimiento — un rol, unas tareas, un
              horario. No firmaste ownership. Ocho meses después se lo
              pides y te sorprende que no lo dé. La gente no se vuelve
              dueña por inspiración. Se vuelve dueña cuando se nombra
              el contrato.
            </p>

            <div className="mz-mid-cta reveal">
              <p>Encender ownership real sin sonar a coach es entrenable. En una sesión.</p>
              <Link href="/contacto" data-track="clic_contacto" data-track-label="blog-encender-el-minimo-viable-mid">
                Agendar 15 min →
              </Link>
            </div>

            <div className="mz-call reveal">
              <span className="meta mz-call-label">Los 3 movimientos</span>
              <div className="mz-call-item">
                <h3>1. Contratar el ownership explícitamente, no asumirlo</h3>
                <p>
                  El primer movimiento no es motivar. Es reescribir el
                  contrato. Si nunca dijiste con todas las letras de qué
                  es dueño cada quien, no esperes que adivinen. La
                  diferencia entre un equipo pasivo y uno activo casi
                  siempre empieza aquí: en quién tiene la responsabilidad
                  nombrada y en quién la tiene supuesta. Lo supuesto no
                  se ejecuta. Lo nombrado sí.
                </p>
                <ul>
                  <li>
                    Asigna dueño explícito de cada flujo, no solo de
                    cada tarea. "Tú eres responsable de la calidad de
                    X. No yo. Si X cae, fallaste tú." Esa frase
                    incomoda. Es la frase que hace falta.
                  </li>
                  <li>
                    Diferencia encargado de dueño. El encargado ejecuta
                    lo que le dicen. El dueño define qué hay que hacer.
                    Si quieres ownership, contrata dueños — no
                    encargados disfrazados de dueños con tarjeta de
                    presentación nueva.
                  </li>
                  <li>
                    Pon el ownership por escrito. No en un Notion que
                    nadie abre — en una conversación uno a uno con la
                    frase: "De aquí a fin de mes, tú eres el dueño de
                    Y. Cualquier cosa que pase con Y, te toca primero a
                    ti." Que la persona repita la frase con sus
                    palabras antes de salir de la junta.
                  </li>
                  <li>
                    Lo que no se nombra, no se ejecuta. La mayoría de
                    los equipos pasivos no son apáticos: son equipos
                    donde nadie sabe quién manda en qué. Esa
                    ambigüedad la pagaste tú con tu tiempo.
                  </li>
                </ul>
                <span className="quiet">Sin contrato explícito, todo ownership es voluntariado. Y el voluntariado no escala.</span>
              </div>
              <div className="mz-call-item">
                <h3>2. Hacer visible el costo del modo cheque</h3>
                <p>
                  El segundo movimiento no es regañar. Es nombrar el
                  patrón. La gente en modo cheque no es mala — es
                  eficiente con el contrato que tiene. Tu trabajo es
                  mostrarles que ese contrato te cuesta y que les
                  cuesta a ellos también, aunque no lo vean. La forma
                  de hacerlo no es discurso. Es espejo concreto, con
                  datos del último mes.
                </p>
                <ul>
                  <li>
                    Trae datos a la conversación, no opiniones. "En
                    las últimas seis semanas, las cuatro cosas que se
                    movieron del proyecto X las moví yo. Las dos veces
                    que se cayó, la alarma la prendí yo. Esa no es la
                    división del trabajo que acordamos. ¿Qué está
                    pasando?" Hechos. Sin tono. Sin acusación.
                  </li>
                  <li>
                    Nombra el costo personal, no el corporativo.
                    "Esto me cuesta horas que no debería estar
                    metiendo. Eso significa que lo que sí me toca no
                    sale a tiempo. Eventualmente eso te afecta a ti —
                    porque sin mí desbloqueando, tu trabajo tampoco
                    avanza." Conecta su pasividad con su propio
                    interés.
                  </li>
                  <li>
                    Despersonaliza. No es "tú no haces". Es "este
                    flujo no se está moviendo solo y tenemos que
                    decidir si lo cambiamos o lo aceptamos así".
                    Sistema antes que carácter. El ataque personal
                    cierra la conversación; el sistema la abre.
                  </li>
                  <li>
                    Cierra con pregunta concreta, no con sermón. "¿Qué
                    tendría que pasar para que esto se mueva sin que
                    yo lo empuje?" La pregunta obliga a producir
                    respuesta. El sermón solo produce silencio
                    educado.
                  </li>
                </ul>
                <span className="quiet">El espejo opera donde el discurso no llega.</span>
              </div>
              <div className="mz-call-item">
                <h3>3. Subir el piso o bajar el peso</h3>
                <p>
                  El tercer movimiento es el que la mayoría evita por
                  miedo a perder gente. No hay tercera opción. O suben
                  de nivel y se hacen dueños — con autonomía, decisión
                  y exposición — o reciben menos responsabilidad y,
                  proporcionalmente, menos cheque. Lo que no funciona
                  es quedarte donde están esperando que un día cambien.
                  Esa espera es lo que te tiene atorado.
                </p>
                <ul>
                  <li>
                    Presenta A o B, no debate abierto. "Para fin de Q3
                    puedes ser dueño completo de Y con autonomía para
                    decidir Z. O seguir donde estás con el alcance
                    actual. Las dos están bien. Las dos pagan distinto.
                    La tercera — quedarte donde estás esperando ser
                    tratado como dueño — esa no existe."
                  </li>
                  <li>
                    Si toman A, dales lo que prometiste. Autonomía
                    real. Decisión sobre prioridades, sobre
                    presupuesto, sobre contrataciones, sobre
                    escalamiento. Si no estás dispuesto a soltar el
                    control, no ofrezcas ownership — es deshonesto y la
                    gente lo detecta antes de la segunda semana.
                  </li>
                  <li>
                    Si toman B, está bien. No es fracaso. Es claridad.
                    No todos quieren ownership. Lo importante es que
                    tú dejas de esperarlo de quien explícitamente dijo
                    que no. Bajas su scope, ajustas la compensación si
                    aplica, y dejas de jalar para arriba a alguien que
                    prefiere mantener su posición.
                  </li>
                  <li>
                    Si alguien dice que quiere A pero no ejecuta como A
                    en sesenta días, se vuelve B sin drama. No es
                    castigo. Es honrar lo que la persona mostró. Lo
                    que la persona dice cuenta menos que lo que la
                    persona sostiene.
                  </li>
                </ul>
                <span className="quiet">Los líderes no tienen problemas de motivación. Tienen problemas de contrato.</span>
              </div>
            </div>

            <h2 className="reveal">Lo que nadie dice en voz alta</h2>
            <p className="reveal">
              La apatía no se motiva. Se contrata. Cuando una empresa
              firma a alguien para "ejecutar" y ocho meses después le
              pide ownership, está cambiando el contrato sin negociar.
              Por eso los discursos de propósito no funcionan: estás
              pidiendo gratis algo que el cheque no compró. La persona
              escucha el discurso, sale del salón, y sigue cumpliendo
              exactamente lo que firmó.
            </p>
            <p className="reveal">
              Hay otra trampa. Algunos líderes confunden ownership con
              disponibilidad. Se imaginan a un dueño como alguien que
              responde WhatsApps a las once de la noche. Eso no es
              ownership: es burnout disfrazado. Un dueño real puede
              irse de vacaciones y el sistema sigue. Un dueño falso no
              puede irse — porque sostiene el sistema con su tiempo, no
              con su criterio.
            </p>
            <p className="reveal">
              Y la verdad más dura: a veces el problema no es el
              equipo. Eres tú. Si llevas dos años quejándote de que
              "nadie es dueño" pero nunca contrataste ownership, nunca
              delegaste autoridad real, nunca soltaste decisiones, el
              problema no es la apatía del equipo — es que estás
              operando como dueño único de todo. La pasividad del
              equipo es el espejo de que tú no soltaste nada. La gente
              no compite contigo por tu silla. Eso lo hace que tú
              estés sentado en todas las sillas.
            </p>

            <h2 className="reveal">Enseñanza Manzana</h2>
            <p className="lead reveal">El cheque paga la presencia.</p>
            <p className="lead reveal">El contrato paga el ownership.</p>
            <p className="reveal" style={{ color: 'var(--gray)', marginTop: 24 }}>
              Primero contratas el ownership explícitamente.
              <br />
              Luego haces visible el costo del modo cheque.
              <br />
              Solo entonces subes el piso o bajas el peso.
            </p>
          </div>
        </div>

        <nav className="article-related reveal">
          <span className="meta">También en el blog</span>
          <ul>
            <li><Link href="/blog/cortar-la-infeccion">Cortar la infección: cuando el talento no compensa el daño</Link></li>
            <li><Link href="/blog/soltar-el-lastre">Soltar el lastre: cuando sostener cuesta más que cortar</Link></li>
          </ul>
        </nav>

        <EmailCapture />

        <section className="mz-end">
          <div className="wrap section-grid">
            <div className="meta col-label reveal">Siguiente paso</div>
            <div className="col-body">
              <h2 className="mz-end-title reveal">
                Si mañana te tomas tres días sin Slack, ¿el equipo empuja o se sienta a esperar tu regreso?
              </h2>
              <p className="mz-end-sub reveal">
                Podemos entrenar esta posición en una sesión.
              </p>
              <div className="mz-end-actions">
                <Link
                  href="/contacto"
                  className="mz-end-cta reveal"
                  data-track="clic_contacto"
                  data-track-label="blog-encender-el-minimo-viable"
                >
                  Agendar sesión →
                </Link>
                <Link
                  href="/diagnostico"
                  className="mz-end-cta-quiet reveal"
                  data-track="clic_diagnostico"
                  data-track-label="blog-encender-el-minimo-viable"
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
