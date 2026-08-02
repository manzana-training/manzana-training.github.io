import type { Metadata } from 'next'
import Link from 'next/link'
import { EmailCapture } from '../../../components/EmailCapture'

const BASE_URL = 'https://manzanatraining.com.mx'
const SLUG = 'cubrir-al-nuevo'
const TITLE = 'Cubrir al nuevo: el manager que ascendiste está expuesto'
const DESCRIPTION =
  'Lo ascendiste hace cinco semanas y las primeras señales se ven mal. Tres movimientos para darle margen sin soltarlo: mandato con fecha, respaldo en público, evaluación tarde.'
const IMAGE = `${BASE_URL}/blog-cubrir-al-nuevo.webp`
const DATE = '2026-08-02'

export const metadata: Metadata = {
  title: `${TITLE} — MANZANA`,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      'Casi ningún manager nuevo se cae por incapacidad. Se cae porque su equipo aprendió antes que él que no había nadie atrás.',
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
            <span>Aprendizaje en fuego</span>
            <span>7 min</span>
            <span>Ago 2026</span>
          </div>
          <h1 className="article-title reveal">{TITLE}</h1>
          <p className="article-lead reveal">
            Ascendiste a tu mejor operador y lleva cinco semanas dirigiendo
            al equipo del que ayer era parte. La primera junta la sacó a
            medias. Dejó pasar algo que tú habrías cortado el día uno. Y
            ayer alguien de su equipo te escribió directo a ti, sin pasar
            por él. Ya lo estás pensando: me equivoqué. Es demasiado pronto
            para saber eso, y la forma en que lo averigües va a decidir el
            resultado.
          </p>
          <figure className="article-figure reveal">
            <img
              src="/blog-cubrir-al-nuevo.webp"
              alt="Una viga recién colocada en lo alto de una estructura, sostenida por un solo apoyo mientras el resto del andamiaje todavía no cierra"
              width={1792}
              height={1024}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </figure>

          <div className="mz-prose">
            <h2 className="reveal">La posición</h2>
            <p className="reveal">
              Hay un momento, justo después de subir, en el que alguien está
              arriba pero sin base. De afuera se ve como posición ganadora:
              está encima, tiene el lugar. Adentro se siente distinto. Todo
              el peso descansa en un solo apoyo, todavía no sabe cuál de sus
              puntos aguanta, y cualquier empujón medianamente firme lo
              desmonta. Lo peligroso no es el empujón. Es que para corregir
              tiene que ceder terreno, y ceder terreno ahí arriba se ve como
              debilidad.
            </p>
            <p className="reveal">
              En una empresa esa posición tiene nombre y cara: el manager
              recién ascendido. Ayer era compañero de la gente que hoy tiene
              que corregir. Su autoridad no viene de su historia con ellos,
              viene de un anuncio de tres líneas. Y todos, incluido tú, están
              esperando ver si aguanta.
            </p>
            <p className="reveal">
              El error típico aquí no es ascender a la persona equivocada.
              Es evaluarla demasiado pronto. Las primeras semanas de
              cualquiera en un puesto nuevo se ven mal por definición: decide
              lento, sobre-consulta o sobre-actúa, y comete errores que su
              antecesor ya no cometía. Leer eso como veredicto de capacidad
              es leer el peor tramo de la curva como si fuera el nivel.
            </p>

            <h2 className="reveal">Cómo se presenta</h2>
            <ul className="reveal">
              <li>Lleva cinco semanas y lo estás midiendo con la vara del que llevaba tres años en el puesto.</li>
              <li>Alguien de su equipo te busca directo y tú respondes. Cada respuesta le quita un pedazo del puesto.</li>
              <li>Le dijiste &quot;cualquier cosa me dices&quot;. Eso no es cobertura: es una puerta abierta que no va a usar por no verse chico.</li>
              <li>Repite tus frases, no las suyas. Todavía está actuando el puesto, no ocupándolo.</li>
              <li>En sus juntas miras su reacción antes que el problema. Ya no estás resolviendo el asunto, lo estás evaluando a él.</li>
              <li>Los que compitieron por ese lugar no sabotean. Esperan. Es peor.</li>
              <li>Tú sigues decidiendo lo que importa de su área, y lo llamas acompañarlo.</li>
            </ul>
            <span className="quiet reveal">
              Ninguna de esas señales dice si puede. Todas dicen que está solo.
            </span>

            <h2 className="reveal">El daño real</h2>
            <p className="reveal">
              El primer daño es que tu duda se cumple sola. El equipo lee tu
              duda mucho antes de que la digas: en a quién le preguntas
              primero, en a quién le contestas el mensaje. Basta con que
              resuelvas dos veces algo que le correspondía a él para que se
              instale una ruta alterna, y las rutas alternas no se
              desinstalan por decreto. A las seis semanas el puesto existe en
              el organigrama y no existe en la operación.
            </p>
            <p className="reveal">
              El segundo daño llega si decides bajarlo. No pierdes una
              persona, pierdes dos: al manager y a quien iba a aceptar el
              siguiente ascenso. El resto del equipo saca su propia
              conclusión, y no es &quot;no dio el ancho&quot;. Es que aquí
              subir significa quedar expuesto sin respaldo. La próxima vez
              que abras una posición, tus mejores operadores van a preferir
              quedarse donde están. Ahí es cuando dejas de tener banca.
            </p>
            <p className="reveal">
              El tercer daño es el que arruina la decisión misma. Si durante
              esas semanas contestaste por encima de él, resolviste lo suyo y
              dejaste la ruta alterna abierta, cuando por fin lo evalúes vas
              a estar midiendo un experimento que tú contaminaste. No vas a
              saber si no pudo o si nunca lo dejaste. Y con esa duda vas a
              tomar una decisión de carrera sobre una persona.
            </p>
            <p className="lead reveal">
              No estás midiendo si puede. Estás midiendo qué tan solo lo dejaste.
            </p>

            <h2 className="reveal">Por qué no se actúa</h2>
            <p className="reveal">
              Porque cubrir suena a micromanagement, y nadie quiere ser ese
              jefe. Pero son dos cosas distintas y conviene separarlas de una
              vez: supervisar es mirar por encima del hombro y opinar sobre
              cómo lo hace; cubrir es pararte donde le va a llegar el golpe
              para que él pueda trabajar. Lo primero le quita autoridad. Lo
              segundo se la construye.
            </p>
            <p className="reveal">
              Porque &quot;hay que dejarlo volar solo&quot; se siente como
              confianza y muchas veces es comodidad. Ya delegaste el
              problema, ya no es tuyo, y regresar a mirarlo se parece a
              admitir que la delegación no cerró. Entonces te quedas lejos,
              él se queda solo, y ambos le llaman autonomía a lo mismo.
            </p>
            <p className="reveal">
              Y porque evaluarlo pronto da alivio. Mientras la duda esté
              abierta, cargas la incomodidad de no saber si te equivocaste al
              ascenderlo. Cerrar rápido quita esa carga. Vale la pena decirlo
              sin adorno: la decisión que estás juzgando en la semana cinco
              es la tuya, no la de él. Por eso el juicio sale rápido, y por
              eso sale mal.
            </p>

            <div className="mz-mid-cta reveal">
              <p>Cubrir a un manager nuevo es entrenable. En una sesión.</p>
              <Link href="/contacto" data-track="clic_contacto" data-track-label="blog-cubrir-al-nuevo-mid">
                Agendar 15 min →
              </Link>
            </div>

            <div className="mz-call reveal">
              <span className="meta mz-call-label">Los 3 movimientos</span>
              <div className="mz-call-item">
                <h3>1. Escribir el mandato y ponerle fecha de vencimiento</h3>
                <p>
                  Margen no es ausencia. Margen es un espacio con bordes
                  escritos: qué decide él solo, qué decide contigo, qué
                  sigues decidiendo tú, y hasta cuándo dura ese reparto. Sin
                  bordes escritos, &quot;consúltame lo importante&quot;
                  significa consúltame todo, y él va a elegir consultar de
                  más porque equivocarse le cuesta más caro que preguntar.
                </p>
                <ul>
                  <li>
                    Lista corta de decisiones que ya son suyas, y que incluya
                    una que te duela soltar. Si todas las que le diste son
                    cómodas para ti, no le diste el puesto.
                  </li>
                  <li>
                    El límite lleva número: monto, cliente, tipo de caso.
                    &quot;Lo importante&quot; no es un límite, es una
                    adivinanza que él va a resolver preguntándote.
                  </li>
                  <li>
                    Ponle fecha de vencimiento al arreglo. Noventa días y ese
                    reparto se acaba. Una cobertura sin fecha se vuelve el
                    puesto permanente de asistente del jefe.
                  </li>
                  <li>
                    Díselo al equipo, no solo a él. Un mandato que únicamente
                    conoce el nuevo no existe: su gente sigue calculando
                    dónde se deciden las cosas de verdad.
                  </li>
                </ul>
                <span className="quiet">Sin bordes escritos no le diste margen. Le diste incertidumbre.</span>
              </div>
              <div className="mz-call-item">
                <h3>2. Cubrirlo en público, corregirlo en privado</h3>
                <p>
                  La autoridad de un manager nuevo se construye o se destruye
                  en momentos de veinte segundos, casi siempre delante de
                  otros. La regla no admite matices: frente a su equipo lo
                  respaldas, siempre. La corrección va aparte, el mismo día,
                  sin testigos y sin suavizar.
                </p>
                <ul>
                  <li>
                    Cuando alguien te busque saltándoselo, no resuelvas.
                    Regrésalo con una línea: eso lo decide él. Duele una vez
                    y cierra la ruta alterna para siempre.
                  </li>
                  <li>
                    Respalda en público al menos una decisión suya con la que
                    no estés de acuerdo, siempre que el error sea barato. Ese
                    respaldo es el que el equipo recuerda.
                  </li>
                  <li>
                    Autoriza un error por adelantado. Dile en qué terreno
                    puede romper algo sin que le cueste. Quien no tiene
                    permiso de equivocarse no decide: consulta.
                  </li>
                  <li>
                    Nunca lo corrijas en su junta. Lo que se pierde en veinte
                    segundos frente a su gente tarda seis meses en volver, si
                    vuelve.
                  </li>
                </ul>
                <span className="quiet">En público, tú estás abajo sosteniendo. En privado, le dices todo lo que hizo mal.</span>
              </div>
              <div className="mz-call-item">
                <h3>3. Evaluarlo tarde, y con la métrica del puesto nuevo</h3>
                <p>
                  Fija la fecha de evaluación el primer día y no la muevas.
                  Sin fecha lo vas a evaluar todos los días, y evaluar todos
                  los días es exactamente lo contrario de cubrir. Cuando
                  llegue esa fecha, no midas los resultados del trimestre:
                  mide si el puesto se está ocupando.
                </p>
                <ul>
                  <li>
                    Cuenta cuántas decisiones tomó solo y cuántas te escaló.
                    Esa proporción moviéndose es la señal temprana, y llega
                    mucho antes que los números del área.
                  </li>
                  <li>
                    Pregúntate a quién le llevan los problemas primero. Si su
                    gente sigue llegando a ti, no tienes un problema de
                    capacidad: tienes un problema de cobertura, y es tuyo.
                  </li>
                  <li>
                    Popularidad no cuenta. Un equipo que lo quiere y no lo
                    obedece es peor señal que un equipo incómodo que sí lo
                    hace.
                  </li>
                  <li>
                    Si a los noventa días la respuesta es no, córtalo limpio
                    y sin ambigüedad, y hazte cargo en voz alta de que la
                    decisión de ascenderlo fue tuya. Bajarlo mientras dejas
                    la culpa en él es la forma más rápida de que nadie más
                    quiera subir.
                  </li>
                </ul>
                <span className="quiet">Evaluar todos los días no es exigencia. Es no haberlo cubierto nunca.</span>
              </div>
            </div>

            <h2 className="reveal">Lo que nadie dice en voz alta</h2>
            <p className="reveal">
              Casi ningún manager nuevo se cae por incapacidad. Se cae porque
              su equipo aprendió, antes que él, que no había nadie atrás. Una
              vez que eso se sabe, ninguna instrucción suya pesa lo que
              debería, y el desenlace se vuelve cuestión de semanas. Lo que
              se lee como &quot;no tenía liderazgo&quot; casi siempre es
              &quot;nadie se paró detrás de él la primera vez que lo
              probaron&quot;.
            </p>
            <p className="reveal">
              La otra parte incómoda: casi nadie entrega el puesto completo.
              Se entrega el título y se conservan las decisiones que
              importan, con la idea razonable de acompañar mientras agarra
              vuelo. El equipo no mide títulos. Mide dónde se resuelven las
              cosas. Si se siguen resolviendo contigo, lo ascendiste en el
              organigrama y lo dejaste en el mismo lugar donde estaba,
              nada más que ahora con la responsabilidad puesta encima.
            </p>

            <h2 className="reveal">Enseñanza Manzana</h2>
            <p className="lead reveal">Dar margen sin perder control.</p>
            <p className="lead reveal">Cubrir no es mirar de cerca. Es ponerte donde le va a llegar el golpe.</p>
            <p className="reveal" style={{ color: 'var(--gray)', marginTop: 24 }}>
              Primero escribes el mandato — qué decide él, con qué límite, hasta cuándo.
              <br />
              Luego lo cubres en público y lo corriges en privado, el mismo día.
              <br />
              Solo entonces lo evalúas, en la fecha que pusiste el primer día.
            </p>
          </div>
        </div>

        <nav className="article-related reveal">
          <span className="meta">También en el blog</span>
          <ul>
            <li><Link href="/blog/resetear-sin-quebrar">Resetear sin quebrar: cuando tu mejor gente comete un error caro</Link></li>
            <li><Link href="/blog/soltar-el-lastre">Soltar el lastre: cuando sostener cuesta más que cortar</Link></li>
          </ul>
        </nav>

        <EmailCapture />

        <section className="mz-end">
          <div className="wrap section-grid">
            <div className="meta col-label reveal">Siguiente paso</div>
            <div className="col-body">
              <h2 className="mz-end-title reveal">
                ¿Cuántas decisiones del área de tu manager nuevo terminaron esta semana en tu escritorio? Ese número es la evaluación, y es tuya.
              </h2>
              <p className="mz-end-sub reveal">
                Podemos entrenar esta posición en una sesión.
              </p>
              <div className="mz-end-actions">
                <Link
                  href="/contacto"
                  className="mz-end-cta reveal"
                  data-track="clic_contacto"
                  data-track-label="blog-cubrir-al-nuevo"
                >
                  Agendar sesión →
                </Link>
                <Link
                  href="/diagnostico"
                  className="mz-end-cta-quiet reveal"
                  data-track="clic_diagnostico"
                  data-track-label="blog-cubrir-al-nuevo"
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
