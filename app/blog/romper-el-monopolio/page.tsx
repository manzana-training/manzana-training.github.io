import type { Metadata } from 'next'
import Link from 'next/link'
import { EmailCapture } from '../../../components/EmailCapture'

const BASE_URL = 'https://manzanatraining.com.mx'
const SLUG = 'romper-el-monopolio'
const TITLE = 'Romper el monopolio: cuando la información es poder'
const DESCRIPTION =
  'Tres personas saben todo. El resto opera a ciegas. Tres movimientos para redistribuir información sin volverla caos ni perder el control.'
const IMAGE = `${BASE_URL}/blog-romper-el-monopolio.webp`
const DATE = '2026-04-27'

export const metadata: Metadata = {
  title: `${TITLE} — MANZANA`,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      'La opacidad no es control. Es deuda acumulada. Tres movimientos para redistribuir información táctica sin convertirlo en caos.',
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
            <span>Opacidad</span>
            <span>7 min</span>
            <span>Abr 2026</span>
          </div>
          <h1 className="article-title reveal">{TITLE}</h1>
          <p className="article-lead reveal">
            Hay tres personas que saben qué pasa con la caja. Dos que entienden
            por qué se tomó esa decisión. Una que tiene la conversación con el
            cliente grande. El resto del equipo opera con fragmentos. No es
            secrecía estratégica. Es información secuestrada por costumbre. Y
            cada semana cuesta más.
          </p>
          <figure className="article-figure reveal">
            <img
              src="/blog-romper-el-monopolio.webp"
              alt="Mapa fragmentado bajo luz tenue — información concentrada en pocas manos"
              width={1792}
              height={1024}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </figure>

          <div className="mz-prose">
            <h2 className="reveal">La posición</h2>
            <p className="reveal">
              En jiu-jitsu hay una posición donde controlas desde la espalda.
              Ves todo, decides todo, mueves al otro a voluntad. Es cómoda,
              segura, dominante. Pero tiene un costo: si el otro no entiende
              por qué se mueve hacia donde se mueve, no aprende. Y el día que
              tú te canses, la posición colapsa porque nadie más sabe
              sostenerla.
            </p>
            <p className="reveal">
              En una empresa, esta posición se activa cuando un grupo pequeño
              — el founder y dos personas, el comité, el círculo cercano —
              concentra la información que mueve las decisiones. No por mala
              fe. Por hábito, por velocidad, por miedo a las fugas, por la
              creencia honesta de que "es mejor que ellos no se preocupen".
            </p>
            <p className="reveal">
              Y la organización se acostumbra a operar a ciegas. Los managers
              ejecutan sin entender la prioridad. El equipo trabaja sin saber
              si lo que hace importa. Y arriba, los pocos que saben cargan
              cada decisión solos, convencidos de que están protegiendo al
              resto.
            </p>

            <h2 className="reveal">Cómo se presenta</h2>
            <ul className="reveal">
              <li>Cuando alguien fuera del círculo pregunta &quot;¿qué pasó con X?&quot;, la respuesta es &quot;ya estamos viendo eso&quot;.</li>
              <li>Las decisiones importantes se anuncian, nunca se discuten. Llegan en formato slack, sin contexto.</li>
              <li>Hay reuniones que existen pero nadie del equipo operativo entra — y nadie sabe muy bien qué se decidió ahí.</li>
              <li>Los managers replican hacia abajo lo que oyeron a medias, y cada equipo termina con una versión distinta de la misma estrategia.</li>
              <li>Cuando alguien clave se va de vacaciones, hay temas que literalmente se pausan dos semanas.</li>
              <li>El founder repite, frustrado, &quot;¿por qué nadie está pensando en esto?&quot; — sin notar que nadie tiene los datos para pensarlo.</li>
            </ul>
            <span className="quiet reveal">
              Si tres personas pueden parar el negocio yéndose de viaje al mismo tiempo, no tienes equipo. Tienes un cuello de botella con organigrama.
            </span>

            <h2 className="reveal">El daño real</h2>
            <p className="reveal">
              El monopolio de información no se siente como problema cuando
              eres parte del círculo. Se siente como eficiencia. Decides
              rápido. No tienes que explicar. No hay debate. La carga
              informativa está bien gestionada — al menos en tu cabeza.
            </p>
            <p className="reveal">
              El primer costo es operativo: cada decisión que requiere
              contexto que no compartiste se atora en tu agenda. La gente no
              avanza sin ti. No porque no sepan trabajar — porque les falta
              el dato que tú no soltaste. Te conviertes en el dueño de un
              cuello de botella que tú mismo construiste.
            </p>
            <p className="reveal">
              El segundo costo es de criterio. Cuando solo unos pocos ven la
              foto completa, las decisiones del resto se construyen sobre
              fragmentos. La gente no se equivoca por ineptitud, se equivoca
              por hambre de contexto. Y cada error que viene de información
              ausente, lo lees como falta de talento.
            </p>
            <p className="reveal">
              El tercero es político y nadie lo nombra: la información
              concentrada genera paranoia. Quien no sabe, sospecha. Quien
              sospecha, protege su parcela. Quien protege parcela, ya no
              colabora. La opacidad arriba se convierte en feudos abajo.
            </p>
            <p className="lead reveal">
              La opacidad no es control. Es deuda acumulada.
            </p>

            <h2 className="reveal">Por qué no se redistribuye</h2>
            <p className="reveal">
              Porque compartir información se siente caro. Implica explicar.
              Implica que alguien va a tener una opinión que no pediste.
              Implica que vas a tener que defender una decisión que ya tomaste.
              Y a corto plazo, la matemática es perversa: callarse es más
              rápido que abrir el dato.
            </p>
            <p className="reveal">
              También porque hay una creencia heredada: &quot;si todos saben
              todo, se distraen&quot;. Tiene algo de cierto en casos extremos.
              Pero en la práctica, se usa para justificar opacidad muy por
              encima del umbral útil. La frase original era &quot;protejo a
              mi equipo del ruido&quot;. La versión real, después de seis meses,
              es &quot;decido solo porque es más cómodo&quot;.
            </p>
            <p className="reveal">
              Y hay un tercer motivo, el más incómodo: el poder se siente
              bien. Tener información que otros no tienen genera asimetría —
              y la asimetría es palanca. Quien la tiene, decide. Quien la
              suelta, baja a la cancha como uno más. No mucha gente quiere
              eso voluntariamente.
            </p>
            <p className="reveal">
              El problema es que el costo de mantenerlo se paga en el equipo,
              no en quien decide. Por eso es tan fácil sostener.
            </p>

            <div className="mz-mid-cta reveal">
              <p>Redistribuir información sin perder el control es entrenable. En una sesión.</p>
              <Link href="/contacto" data-track="clic_contacto" data-track-label="blog-romper-el-monopolio-mid">
                Agendar 15 min →
              </Link>
            </div>

            <div className="mz-call reveal">
              <span className="meta mz-call-label">Los 3 movimientos</span>
              <div className="mz-call-item">
                <h3>1. Mapear qué información secuestra cada decisión</h3>
                <p>
                  El primer movimiento no es soltar información. Es ver, sin
                  adornos, qué información concreta vive solo en pocas
                  cabezas. La opacidad se vuelve manejable cuando deja de ser
                  una sensación y empieza a ser una lista. La mayoría de los
                  founders descubre, al hacerlo, que el monopolio no es
                  estratégico — es accidental.
                </p>
                <ul>
                  <li>
                    Lista las cinco decisiones operativas más importantes del
                    último mes. Para cada una, escribe quién tenía el contexto
                    completo. Si en cuatro de cinco aparece la misma persona,
                    encontraste el cuello.
                  </li>
                  <li>
                    Distingue tres niveles: información sensible (legal, salarios,
                    M&amp;A), información táctica (caja, prioridades, clientes
                    grandes) y información operativa (qué se está haciendo y por
                    qué). El monopolio útil es solo el primero. El resto es deuda.
                  </li>
                  <li>
                    Pregunta a tres managers qué les falta saber para tomar
                    mejores decisiones esta semana. No qué les gustaría saber —
                    qué les falta. La diferencia entre las dos preguntas es la
                    medida exacta del monopolio.
                  </li>
                  <li>
                    No diagnostiques con una encuesta de clima. La opacidad
                    no se mide en sentimiento. Se mide en decisiones que se
                    atoran o se toman mal.
                  </li>
                </ul>
                <span className="quiet">No puedes redistribuir lo que no has nombrado.</span>
              </div>
              <div className="mz-call-item">
                <h3>2. Crear foros donde la información se publique, no se filtre</h3>
                <p>
                  Romper el monopolio no es mandar más correos. Es construir
                  uno o dos foros donde la información táctica se publica con
                  ritmo, contexto y alguien responsable de explicarla. Si la
                  información llega por Slack en fragmentos, no es
                  redistribución — es ruido. Si llega en un foro recurrente,
                  con encuadre y preguntas abiertas, sí lo es.
                </p>
                <ul>
                  <li>
                    Define una sola fuente de verdad operativa. Un documento
                    vivo, una junta semanal de 30 minutos, un dashboard. Uno.
                    No tres. La gente solo confía en lo que es estable y
                    accesible siempre.
                  </li>
                  <li>
                    Ritmo fijo, dueño explícito. La junta semanal de
                    prioridades la dirige una persona, los lunes a la misma
                    hora, con la misma estructura. Si depende del estado de
                    ánimo del founder, va a colapsar en seis semanas.
                  </li>
                  <li>
                    Comparte el por qué, no solo el qué. La diferencia entre
                    un equipo desconectado y uno conectado no es la cantidad
                    de información — es si entienden la lógica detrás de
                    cada decisión. Una frase basta: &quot;esto se decidió así
                    porque la caja no aguanta otra ronda&quot;.
                  </li>
                  <li>
                    Cierra el canal lateral. Si después del foro hay tres
                    chats privados explicando lo que &quot;realmente&quot; se
                    dijo, el foro no funciona. Se decide en el foro o no se
                    decide. Las repeticiones en pasillo son el síntoma del
                    monopolio escondiéndose.
                  </li>
                </ul>
                <span className="quiet">Una junta de 30 minutos bien estructurada redistribuye más información que mil mensajes sueltos.</span>
              </div>
              <div className="mz-call-item">
                <h3>3. Bajar a la cancha sin perder el cuchillo</h3>
                <p>
                  El último movimiento es el que más cuesta porque exige que
                  quien tenía el monopolio acepte volverse uno más en la
                  conversación táctica — sin renunciar a la decisión final.
                  La trampa es sentir que abrir información obliga a
                  consensuar todo. No es eso. Es separar opinión de decisión
                  con limpieza.
                </p>
                <ul>
                  <li>
                    Establece, en voz alta, qué se decide en grupo y qué no.
                    &quot;Esto lo discutimos para que tengan el contexto.
                    La decisión la tomo yo el viernes.&quot; Esa frase, dicha
                    explícitamente, libera al equipo del juego de adivinar
                    cuándo opinan y cuándo solo escuchan.
                  </li>
                  <li>
                    Cuando alguien proponga algo distinto a lo que pensabas,
                    no respondas con argumento. Responde con
                    pregunta: &quot;¿qué información tienes que yo no?&quot;.
                    Si la tiene, ajustas. Si no la tiene, reencuadras. Pero
                    no defiendes — investigas.
                  </li>
                  <li>
                    Acepta que vas a perder velocidad las primeras seis
                    semanas. Compartir contexto cuesta tiempo. Lo recuperas
                    después, cuando las decisiones de los demás dejan de
                    pasar por ti porque ya tienen lo que necesitan para
                    decidir bien.
                  </li>
                  <li>
                    No confundas redistribuir con renunciar. Sigues siendo el
                    decisor. Sigues teniendo último voto. Lo único que cambia
                    es que ahora el resto sabe qué está pasando antes de que
                    pase. Eso no te quita poder — te quita la carga de ser el
                    único punto de contacto.
                  </li>
                </ul>
                <span className="quiet">Compartir información no es bajarse del cargo. Es dejar de ser cuello de botella.</span>
              </div>
            </div>

            <h2 className="reveal">Lo que nadie dice en voz alta</h2>
            <p className="reveal">
              Los founders que más sufren con esta posición suelen ser los
              que más rápido decidieron al inicio. La velocidad de los
              primeros dos años se construyó precisamente con el
              monopolio: pocas personas, mucha información, decisiones de
              segundos. Funcionó. Por eso cuesta soltarlo. La forma que los
              hizo ganar a los veinte se vuelve la que les estanca a los
              ochenta.
            </p>
            <p className="reveal">
              Y hay un patrón curioso: cuando empiezan a redistribuir, casi
              ninguno se queja del tiempo perdido. Se quejan, en cambio, de
              haber descubierto cuánta gente ya tenía la respuesta correcta y
              estaba callada por no tener el dato para decirla en voz alta.
              El monopolio no solo te hace cuello de botella — te hace
              ignorar criterio que ya estaba en tu equipo.
            </p>
            <p className="reveal">
              La transparencia táctica no es un valor — es una decisión
              operativa. No se hace porque sea bonito ni porque sea moderno.
              Se hace porque el negocio escala mejor cuando más gente puede
              decidir bien. Y porque sostener el monopolio cuesta más
              criterio del que ahorra.
            </p>

            <h2 className="reveal">Enseñanza Manzana</h2>
            <p className="lead reveal">La opacidad no es control.</p>
            <p className="lead reveal">Es la forma más cara de cargar el negocio solo.</p>
            <p className="reveal" style={{ color: 'var(--gray)', marginTop: 24 }}>
              Primero mapeas qué información secuestra cada decisión.
              <br />
              Luego construyes un foro donde se publica, no donde se filtra.
              <br />
              Solo entonces bajas a la cancha sin perder el cuchillo.
            </p>
          </div>
        </div>

        <nav className="article-related reveal">
          <span className="meta">También en el blog</span>
          <ul>
            <li><Link href="/blog/resistencia-pasiva-el-enemigo-invisible">Resistencia pasiva: el enemigo invisible</Link></li>
            <li><Link href="/blog/decidir-sin-informacion-completa">Decidir sin información completa</Link></li>
          </ul>
        </nav>

        <EmailCapture />

        <section className="mz-end">
          <div className="wrap section-grid">
            <div className="meta col-label reveal">Siguiente paso</div>
            <div className="col-body">
              <h2 className="mz-end-title reveal">
                ¿Tres personas pueden frenar tu negocio si se van de viaje al mismo tiempo?
              </h2>
              <p className="mz-end-sub reveal">
                Podemos entrenar esta posición en una sesión.
              </p>
              <div className="mz-end-actions">
                <Link
                  href="/contacto"
                  className="mz-end-cta reveal"
                  data-track="clic_contacto"
                  data-track-label="blog-romper-el-monopolio"
                >
                  Agendar sesión →
                </Link>
                <Link
                  href="/diagnostico"
                  className="mz-end-cta-quiet reveal"
                  data-track="clic_diagnostico"
                  data-track-label="blog-romper-el-monopolio"
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
