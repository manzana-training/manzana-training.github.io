import type { Metadata } from 'next'
import Link from 'next/link'
import { EmailCapture } from '../../../components/EmailCapture'

const BASE_URL = 'https://manzanatraining.com.mx'
const SLUG = 'resetear-sin-quebrar'
const TITLE = 'Resetear sin quebrar: cuando tu mejor gente comete un error caro'
const DESCRIPTION =
  'Tu persona clave tomó una mala decisión que costó dinero. Todos miran cómo respondes. Tres movimientos para corregir sin destruir la confianza ni la carrera.'
const IMAGE = `${BASE_URL}/blog-resetear-sin-quebrar.webp`
const DATE = '2026-07-05'

export const metadata: Metadata = {
  title: `${TITLE} — MANZANA`,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      'El error ya costó. Lo que decidas ahora cuesta más: la etiqueta que le pongas a esa persona hoy vale más que el error de ayer. Cómo corregir sin quebrar.',
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
            <span>Jul 2026</span>
          </div>
          <h1 className="article-title reveal">{TITLE}</h1>
          <p className="article-lead reveal">
            Tu directora de operaciones firmó con el proveedor equivocado.
            Lo decidió sola, como siempre — para eso la contrataste. Esta
            vez el error costó seis semanas y un cliente que no va a
            regresar. Te enteras un viernes. El lunes toda la empresa sabe
            dos cosas: qué pasó, y que están a punto de ver qué haces tú
            con la persona que lo hizo. El error ya costó lo que costó. Lo
            que decidas en los próximos días va a costar más.
          </p>
          <figure className="article-figure reveal">
            <img
              src="/blog-resetear-sin-quebrar.webp"
              alt="Vasija de cerámica oscura con una fractura reparada con una veta de oro — reparar la pieza en lugar de desecharla"
              width={1792}
              height={1024}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </figure>

          <div className="mz-prose">
            <h2 className="reveal">La posición</h2>
            <p className="reveal">
              En jiu-jitsu se llama media guardia: perdiste posición, no la
              pelea. El otro pasó tu guardia a medias, tienes una pierna
              atrapada, el peso encima. Es incómodo y es recuperable. El
              que entrena sabe exactamente qué hacer desde ahí. El que no
              entrena hace lo peor que se puede hacer en media guardia:
              entra en pánico y regala la espalda. Convierte una posición
              recuperable en una derrota definitiva. Él solo.
            </p>
            <p className="reveal">
              En una empresa, esta posición se activa cuando alguien que
              normalmente decide bien toma una mala decisión puntual. No
              es la persona tóxica que contamina. No es el que nunca dio
              el ancho. Es tu gente buena en su peor día: el descuento que
              no debió autorizar, la contratación que no validó, el
              compromiso con el cliente que no se podía cumplir. Un error
              real, con costo real, de una persona que vale.
            </p>
            <p className="reveal">
              La trampa tiene nombre: etiquetar. El error está fresco, el
              enojo también, y tu cabeza te ofrece el atajo más barato que
              existe — convertir el evento en identidad. "Ya vimos cómo
              es." "Le queda grande el puesto." La etiqueta se siente como
              claridad. No es claridad. Es pereza con disfraz de criterio.
            </p>

            <h2 className="reveal">Cómo se presenta</h2>
            <ul className="reveal">
              <li>Dejas de asignarle decisiones a esa persona "por ahora". El "por ahora" nunca tiene fecha de fin.</li>
              <li>Cuentas el error en foros donde no aporta nada contarlo. Cada versión sale un poco más cargada que la anterior.</li>
              <li>Revisas su trabajo con una lupa que no usas con nadie más. Lo llamas control de calidad. Es desconfianza con proceso.</li>
              <li>En la siguiente evaluación, el error pesa más que los doce meses de resultados que lo rodean.</li>
              <li>La persona empieza a consultarte cosas que antes decidía sola. Te molesta que consulte. Tú la entrenaste a consultar.</li>
              <li>Alguien comete un error parecido meses después y el castigo es distinto. Todos toman nota de la diferencia.</li>
            </ul>
            <span className="quiet reveal">
              El error duró un día. La etiqueta lleva seis meses cobrando renta.
            </span>

            <h2 className="reveal">El daño real</h2>
            <p className="reveal">
              El primer daño es que pierdes a la persona sin que renuncie.
              Nadie se queda igual después de ser archivado. La gente buena
              que carga una etiqueta deja de hacer exactamente lo que la
              hacía valiosa: deja de decidir. Sigue viniendo, sigue
              cumpliendo, y cada decisión que antes tomaba en minutos ahora
              sube a tu escritorio envuelta en contexto y disculpas. Pagaste
              salario de alguien que decide y te quedaste con alguien que
              tramita. El costo del error era visible y de una sola vez. Este
              es invisible y mensual.
            </p>
            <p className="reveal">
              El segundo daño es sistémico: tu empresa aprende viendo, no
              escuchando. Cuando quiebras a alguien por un error puntual,
              el mensaje que llega a todos no es "aquí hay estándares
              altos". Es "aquí decidir es peligroso". Y la gente responde
              racionalmente al incentivo: decide menos, consulta más,
              documenta todo para cubrirse, espera tu firma para moverse.
              La parálisis que después vas a diagnosticar como "falta de
              ownership" la instalaste tú, un lunes, con una etiqueta.
            </p>
            <p className="reveal">
              El tercer daño es el más caro y el más lento: compraste
              silencio. El que vio cómo trataron el último error caro no
              va a traerte el suyo. Lo va a administrar solo, calladito,
              esperando que se arregle antes de que lo veas. Los errores
              que te esconden no desaparecen: maduran. Te enteras cuando
              ya no cuestan seis semanas sino seis meses. El líder que
              castiga con etiqueta no elimina errores — elimina la
              información temprana sobre los errores.
            </p>
            <p className="lead reveal">
              La etiqueta no te protege del siguiente error. Te garantiza enterarte tarde.
            </p>

            <h2 className="reveal">Por qué se actúa mal</h2>
            <p className="reveal">
              Porque el enojo llega antes que el criterio. El error tiene
              costo, el costo duele, y el dolor pide un responsable con
              nombre y apellido. Castigar se siente como actuar. Pero el
              enojo no distingue lo único que importa distinguir aquí:
              si esto es un evento o un patrón. Esa distinción no se puede
              hacer con el error fresco. Por eso el primer movimiento
              nunca es hacia la persona.
            </p>
            <p className="reveal">
              Porque hay audiencia. Todos vieron el error y todos esperan
              tu respuesta. Una parte de ti quiere que el castigo se vea,
              porque un castigo visible te posiciona como exigente. Eso es
              teatro, y es teatro caro: estás usando la carrera de una
              persona real como utilería de tu reputación.
            </p>
            <p className="reveal">
              Y porque la etiqueta te da la razón. Si la persona "es" el
              problema, tú no tienes que revisar nada: ni el proceso que
              dejó pasar la decisión, ni la información que no tenía, ni
              la presión de tiempo que tú mismo pusiste. El reencuadre de
              "quién" a "cómo" es incómodo porque el "cómo" casi siempre
              te incluye.
            </p>

            <div className="mz-mid-cta reveal">
              <p>Resetear sin quebrar no es ser suave. Es entrenable. En una sesión.</p>
              <Link href="/contacto" data-track="clic_contacto" data-track-label="blog-resetear-sin-quebrar-mid">
                Agendar 15 min →
              </Link>
            </div>

            <div className="mz-call reveal">
              <span className="meta mz-call-label">Los 3 movimientos</span>
              <div className="mz-call-item">
                <h3>1. Separar el error de la persona antes de abrir la boca</h3>
                <p>
                  El primer movimiento es narrativo y ocurre en tu cabeza,
                  antes de cualquier conversación. Cambia la pregunta de
                  "quién hizo esto" a "cómo pasó esto". No es generosidad:
                  es precisión. El "quién" ya lo sabes y no te sirve de
                  nada. El "cómo" es lo único que puedes reparar.
                </p>
                <ul>
                  <li>
                    Verifica el patrón antes de nombrar el patrón. Un error
                    es un evento. Dos errores parecidos son una casualidad
                    que hay que mirar. Tres son un patrón, y los patrones
                    son otra posición — esa sí se corta. Si no puedes
                    listar los otros dos casos con fechas, no hay patrón.
                    Hay un mal día.
                  </li>
                  <li>
                    Pon el error junto al historial completo, no encima.
                    La pregunta operativa es: ¿esta persona, con todo y
                    este error, sigue siendo una buena apuesta? Si la
                    respuesta es sí, todo lo que sigue es reparación, no
                    juicio.
                  </li>
                  <li>
                    Despersonaliza en tu propio lenguaje. "La decisión del
                    proveedor nos costó el cliente" y "Karla nos costó el
                    cliente" describen el mismo hecho y construyen dos
                    empresas distintas. Elige la primera antes de hablar
                    con nadie — incluido tú mismo.
                  </li>
                  <li>
                    Si el enojo sigue mandando, deja pasar el turno. Un
                    día de silencio cuesta menos que una etiqueta dicha
                    en caliente. La corrección aguanta 24 horas. La
                    etiqueta no se despega en años.
                  </li>
                </ul>
                <span className="quiet">El "quién" ya lo sabes. El "cómo" es lo único reparable.</span>
              </div>
              <div className="mz-call-item">
                <h3>2. Corregir en corto: foro privado, verdad completa</h3>
                <p>
                  El segundo movimiento es de espacio. La corrección ocurre
                  una vez, en privado, completa y sin anestesia. No es una
                  conversación suave: es una conversación exacta. El costo
                  del error se dice con número. Lo que estuvo mal se dice
                  sin diminutivos. Y ahí mismo se cierra el canal: el error
                  no se vuelve a discutir en pasillos, juntas ni indirectas.
                </p>
                <ul>
                  <li>
                    Di el costo completo, con cifra. "Esto nos costó al
                    cliente y unas seis semanas de trabajo" es respeto.
                    Suavizar el número es tratar a la persona como si no
                    aguantara la verdad — esa es otra forma de etiqueta.
                  </li>
                  <li>
                    Devuelve el peso: la reparación la diseña quien cometió
                    el error. "¿Qué cambia en tu proceso para que esta
                    decisión no vuelva a salir así?" no es una pregunta
                    retórica. Es la diferencia entre corregir y regañar.
                    El que diseña su propia reparación se queda con la
                    lección. El que solo recibe el regaño se queda con el
                    miedo.
                  </li>
                  <li>
                    En público, respuesta mínima suficiente. Si el equipo
                    pregunta, la versión es corta: "Ya se revisó, ya hay
                    correcciones al proceso, seguimos." Ni linchamiento ni
                    secreto. El secreto alimenta más chisme que el error.
                  </li>
                  <li>
                    No conviertas la corrección en supervisión permanente.
                    Si sales de esa conversación y le pones revisión a
                    todo lo que firma, la conversación fue teatro. La
                    confianza que no regresa a su nivel anterior es una
                    etiqueta con otro nombre.
                  </li>
                </ul>
                <span className="quiet">La corrección exacta es respeto. La corrección suave es lástima con modales.</span>
              </div>
              <div className="mz-call-item">
                <h3>3. Cerrar el reset: recap, dueño y prohibido re-litigar</h3>
                <p>
                  El tercer movimiento es el que casi nadie hace y es el
                  que le da nombre a la posición. El reset necesita un
                  cierre explícito: una versión final de lo que pasó, una
                  reparación con dueño y fecha, y una regla — esto no se
                  vuelve a litigar. Sin ese cierre, el error queda abierto
                  para siempre, disponible para cualquiera que lo quiera
                  usar en la siguiente discusión.
                </p>
                <ul>
                  <li>
                    Fija el recap en una frase: qué pasó, qué costó, qué
                    cambia. Esa es la versión oficial. Cuando el error
                    aparezca en una junta futura como munición — y va a
                    aparecer — la versión oficial es tu herramienta para
                    cortarlo: "Eso ya se cerró. ¿Qué hay del tema de hoy?"
                  </li>
                  <li>
                    Define qué significa "cerrado". Cerrado significa que
                    el error no aparece en la próxima evaluación como
                    novedad, no descuenta las decisiones futuras y no se
                    menciona como contexto de nada. Si va a tener
                    consecuencias, dilas ahora, de frente. Consecuencia
                    diferida es emboscada.
                  </li>
                  <li>
                    Regrésale una decisión visible, pronto. El reset no es
                    real hasta que la organización ve a la persona
                    decidiendo otra vez. La primera decisión post-error es
                    el comunicado de cierre más creíble que existe. Ningún
                    discurso tuyo lo iguala.
                  </li>
                  <li>
                    Y vigílate a ti primero. El re-litigio casi siempre
                    empieza en el líder: un comentario "de broma", una
                    mención "de contexto". Si tú lo usas una vez, le diste
                    permiso a todos.
                  </li>
                </ul>
                <span className="quiet">Un error sin cierre no es una lección. Es un expediente.</span>
              </div>
            </div>

            <h2 className="reveal">Lo que nadie dice en voz alta</h2>
            <p className="reveal">
              En este blog hemos escrito dos veces sobre cortar: la
              persona tóxica que contamina y el lastre que no da el ancho.
              Las dos posiciones son reales y las dos se cortan. Pero hay
              líderes que leyeron "corta a tiempo" y lo convirtieron en
              reflejo único: todo lo que falla se corta. Eso no es
              firmeza. Es no saber distinguir posiciones. El patrón se
              corta. El evento se resetea. Confundirlos en cualquier
              dirección sale caro: sostener un patrón por esperanza te
              desgasta un año; quebrar a una persona buena por un evento
              te cuesta esa persona y la confianza de todos los que vieron.
            </p>
            <p className="reveal">
              Y la parte verdaderamente incómoda: tu cultura no la definen
              tus contrataciones, tus posters ni tu manual de valores. La
              define la primera vez que alguien valioso la riega en grande
              y todos ven qué haces. Ese día tu empresa decide, en
              silencio y para siempre, si contigo se puede decir la verdad.
              Todo lo demás que digas sobre "cultura de confianza" se mide
              contra ese precedente. Un solo quiebre público compra años
              de silencio. Y el silencio, a diferencia del error, no te
              manda factura — te la va acumulando.
            </p>

            <h2 className="reveal">Enseñanza Manzana</h2>
            <p className="lead reveal">Un error no define a una persona.</p>
            <p className="lead reveal">Tu reacción sí te define a ti.</p>
            <p className="reveal" style={{ color: 'var(--gray)', marginTop: 24 }}>
              Primero separas el error de la persona.
              <br />
              Luego corriges en corto, con la verdad completa.
              <br />
              Solo entonces cierras el reset — y nadie lo vuelve a litigar.
            </p>
          </div>
        </div>

        <nav className="article-related reveal">
          <span className="meta">También en el blog</span>
          <ul>
            <li><Link href="/blog/soltar-el-lastre">Soltar el lastre: cuando sostener cuesta más que cortar</Link></li>
            <li><Link href="/blog/cortar-la-infeccion">Cortar la infección: cuando el talento no compensa el daño</Link></li>
          </ul>
        </nav>

        <EmailCapture />

        <section className="mz-end">
          <div className="wrap section-grid">
            <div className="meta col-label reveal">Siguiente paso</div>
            <div className="col-body">
              <h2 className="mz-end-title reveal">
                La última vez que alguien clave cometió un error caro — ¿corregiste el error o archivaste a la persona?
              </h2>
              <p className="mz-end-sub reveal">
                Podemos entrenar esta posición en una sesión.
              </p>
              <div className="mz-end-actions">
                <Link
                  href="/contacto"
                  className="mz-end-cta reveal"
                  data-track="clic_contacto"
                  data-track-label="blog-resetear-sin-quebrar"
                >
                  Agendar sesión →
                </Link>
                <Link
                  href="/diagnostico"
                  className="mz-end-cta-quiet reveal"
                  data-track="clic_diagnostico"
                  data-track-label="blog-resetear-sin-quebrar"
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
