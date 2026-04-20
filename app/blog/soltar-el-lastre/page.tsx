import type { Metadata } from 'next'
import Link from 'next/link'
import { EmailCapture } from '../../../components/EmailCapture'

const BASE_URL = 'https://manzanatraining.com.mx'
const SLUG = 'soltar-el-lastre'
const TITLE = 'Soltar el lastre: cuando sostener cuesta más que cortar'
const DESCRIPTION =
  'No hay fit. Llevas meses dando margen. Tres movimientos para cortar a tiempo, sin destruir, antes de que la duda se lleve al equipo.'
const IMAGE = `${BASE_URL}/blog-soltar-el-lastre.webp`
const DATE = '2026-04-20'

export const metadata: Metadata = {
  title: `${TITLE} — MANZANA`,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      'No hay fit y ya lo sabes. Tres movimientos para cortar con humanidad, sin esperanza prolongada.',
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
            <span>Aprendizaje en fuego</span>
            <span>7 min</span>
            <span>Abr 2026</span>
          </div>
          <h1 className="article-title reveal">{TITLE}</h1>
          <p className="article-lead reveal">
            La contratación no resultó. El proyecto no terminó de aterrizar.
            El rol quedó grande. Lo supiste a los tres meses, lo confirmaste a
            los seis, y al año sigues ahí: dando margen, esperando un clic que
            no va a llegar. Cada semana que sostienes cuesta más que la
            semana que cortas.
          </p>
          <figure className="article-figure reveal">
            <img
              src="/blog-soltar-el-lastre.webp"
              alt="Ancla oxidada sumergida — sostener a alguien que ya no embona"
              width={1536}
              height={1024}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </figure>

          <div className="mz-prose">
            <h2 className="reveal">La posición</h2>
            <p className="reveal">
              En jiu-jitsu hay una posición donde estás encima del oponente
              pero cargando todo su peso. No te ataca. No resiste. Solo está.
              Y mientras más tiempo pasa, más energía gastas tú y menos se
              mueve el combate. El árbitro empieza a mirar el reloj. Tú
              empiezas a cansarte. Y la decisión que tenías que tomar hace
              rato — pasar a una posición nueva o cerrar — se vuelve cada vez
              más cara.
            </p>
            <p className="reveal">
              En una empresa, esta posición se activa cuando contrataste,
              promoviste o integraste a alguien que no da el ancho. No es
              tóxico. No sabotea. No hace daño visible. Simplemente no
              encaja. El rol le queda grande, o el equipo le queda chico, o
              la cultura no le resuena. Y tú, que lo contrataste con
              expectativa, estás sosteniéndolo con esperanza.
            </p>
            <p className="reveal">
              Esperanza de que aprenda. Esperanza de que arranque. Esperanza
              de que el próximo trimestre sí. Esperanza disfrazada de
              paciencia.
            </p>

            <h2 className="reveal">Cómo se presenta</h2>
            <ul className="reveal">
              <li>Cada uno a uno terminas dando el mismo feedback que diste hace tres meses.</li>
              <li>Otros en el equipo empiezan a cargar pedazos del rol sin decirlo.</li>
              <li>Evitas asignarle proyectos críticos porque sabes que no va a responder.</li>
              <li>Cuando piensas en la persona, la palabra que aparece primero es &quot;pobrecito&quot; o &quot;todavía&quot;.</li>
              <li>Tu pareja o tu coach te ha escuchado tres veces la misma conversación sobre esta persona.</li>
              <li>Has empezado a defenderla en reuniones donde nadie la está atacando.</li>
            </ul>
            <span className="quiet reveal">
              Si ya estás argumentando por qué todavía no, probablemente ya es tiempo.
            </span>

            <h2 className="reveal">El daño real</h2>
            <p className="reveal">
              Sostener a alguien que no embona tiene tres costos que casi
              nadie suma cuando hace el cálculo. El primero es el más obvio:
              el resultado que no se está entregando. Los proyectos que se
              atrasan, las decisiones que no se toman, las cosas que alguien
              más tiene que cubrir.
            </p>
            <p className="reveal">
              El segundo es el equipo. La gente que sí da el ancho ve todos
              los días a alguien que no, cobrando lo mismo, con los mismos
              beneficios, sin consecuencias. Al principio lo compensan. Luego
              lo resienten. Luego empiezan a preguntarse por qué deberían
              seguir esforzándose. La contratación débil no castiga al débil
              — castiga al fuerte.
            </p>
            <p className="reveal">
              El tercero es el que nadie ve hasta que es tarde: tu criterio.
              Cada mes que sostienes a alguien que sabías que no iba a
              funcionar, tu capacidad de confiar en tu propia lectura se
              erosiona. La próxima vez que tengas la intuición correcta, vas
              a dudar más. Y la que viene después, más todavía.
            </p>
            <p className="lead reveal">
              Esperanza prolongada no es humanidad. Es el aplazamiento más caro que existe.
            </p>

            <h2 className="reveal">Por qué no se corta</h2>
            <p className="reveal">
              Porque cortar se siente cruel. La persona no hizo nada malo. Se
              esforzó. Tiene familia. Tiene historia contigo. No hubo un
              evento detonante — no robó, no gritó, no falló a un cliente.
              Solo no da el ancho. Y eso, para alguien educado en tratar
              bien a la gente, no se siente como razón suficiente.
            </p>
            <p className="reveal">
              También porque cortar expone tu propia decisión. Tú la
              contrataste. Tú la promoviste. Tú dijiste que sí cuando pudiste
              haber dicho que no. Soltar el lastre es reconocer, en voz alta,
              que te equivocaste. Y eso duele más que sostener en silencio.
            </p>
            <p className="reveal">
              Y hay un tercer motivo más honesto: miedo al reemplazo. Lo que
              tienes hoy, por mediocre que sea, es conocido. Lo que viene
              después es incertidumbre. Contratar toma meses. Arrancar de
              nuevo toma más. Y el vacío entre ahora y el nuevo puede sentirse
              peor que seguir cargando.
            </p>
            <p className="reveal">
              Pero ese cálculo omite lo único que importa: el costo real no
              es el vacío, es seguir pagándole a la esperanza.
            </p>

            <div className="mz-mid-cta reveal">
              <p>Soltar el lastre sin romper al equipo es una posición entrenable. En una sesión.</p>
              <Link href="/contacto" data-track="clic_contacto" data-track-label="blog-soltar-el-lastre-mid">
                Agendar 15 min →
              </Link>
            </div>

            <div className="mz-call reveal">
              <span className="meta mz-call-label">Los 3 movimientos</span>
              <div className="mz-call-item">
                <h3>1. Nombrar la decisión, no la persona</h3>
                <p>
                  El primer paso no es hablar con la persona. Es hablar
                  contigo mismo y con tu jefe o socio. Nombrar en voz alta, sin
                  adornos, lo que ya sabes: esta contratación no funcionó, y
                  sostenerla más tiempo no la va a hacer funcionar. La
                  claridad que no pones en palabras, se queda como duda.
                </p>
                <ul>
                  <li>
                    Escribe en una hoja los hechos concretos: qué se esperaba
                    del rol, qué se está entregando, cuánto tiempo llevas
                    dando el mismo feedback. Sin adjetivos.
                  </li>
                  <li>
                    Separa el desempeño del carácter. &quot;Es buena persona&quot;
                    puede ser cierto y al mismo tiempo irrelevante para la
                    decisión operativa.
                  </li>
                  <li>
                    Valida con un segundo par de ojos que no tenga piel en el
                    juego emocional — tu jefe, un socio, un mentor. No para
                    pedir permiso. Para confirmar que no estás leyendo mal.
                  </li>
                  <li>
                    Fija una fecha límite para ti. &quot;Esta conversación
                    ocurre antes del viernes.&quot; Sin deadline, no hay
                    decisión — hay más esperanza.
                  </li>
                </ul>
                <span className="quiet">La humanidad empieza cuando dejas de mentirte sobre el fit.</span>
              </div>
              <div className="mz-call-item">
                <h3>2. Cortar con marco, no con disculpa</h3>
                <p>
                  La conversación difícil no es una negociación. No es un
                  último feedback. Es el cierre. Si la abres como negociación,
                  terminas dando otro mes de margen y volviendo al mismo punto
                  cuatro semanas después. Entra con la decisión tomada y con
                  un marco que proteja a la persona sin ablandar el cierre.
                </p>
                <ul>
                  <li>
                    Abre con el encuadre: &quot;Esta conversación es para
                    comunicarte una decisión, no para discutirla.&quot; La
                    honestidad inicial hace la conversación menos cruel, no
                    más.
                  </li>
                  <li>
                    Di los hechos sin acusar: &quot;Este rol necesita X, Y, Z.
                    Lo que se está entregando no llega ahí. Lo hemos hablado
                    tres veces. No ha cambiado.&quot;
                  </li>
                  <li>
                    Ofrece salida con dignidad: tiempo razonable de
                    transición, referencia honesta, apoyo para la búsqueda. No
                    como compensación por un error, sino como estándar de
                    cómo se sale de esta empresa.
                  </li>
                  <li>
                    No prometas lo que no vas a cumplir. No inventes proyectos
                    paralelos. No prolongues &quot;hasta que encuentre algo&quot;
                    sin fecha. La salida tiene que tener estructura.
                  </li>
                </ul>
                <span className="quiet">Se corta una vez, con marco claro. No se corta en cuotas.</span>
              </div>
              <div className="mz-call-item">
                <h3>3. Cerrar la narrativa con el equipo que se queda</h3>
                <p>
                  El trabajo no termina cuando la persona se va. Termina
                  cuando el equipo entendió qué pasó y por qué. Si no
                  ordenas la narrativa, la ordenan ellos — y casi siempre mal.
                  Nace el rumor, la incertidumbre, el &quot;¿quién sigue?&quot;.
                  Tu trabajo es fijar la versión antes de que otros la escriban.
                </p>
                <ul>
                  <li>
                    Comunica en equipo el mismo día o al siguiente, sin
                    dramatizar ni minimizar. Lo justo: la persona ya no está,
                    la razón operativa, qué pasa con sus proyectos.
                  </li>
                  <li>
                    Nombra el estándar sin nombrar a nadie: &quot;Este rol
                    necesita X nivel. Cuando algo no llega a ese nivel, lo
                    ajustamos. No es personal, es el estándar.&quot;
                  </li>
                  <li>
                    Deja espacio para preguntas 1 a 1, no en grupo. En grupo
                    se amplifican los miedos. En 1 a 1 se resuelven.
                  </li>
                  <li>
                    No pidas disculpas por la decisión. Reconoce el impacto
                    humano sin renegociar la decisión. Son dos cosas distintas.
                  </li>
                </ul>
                <span className="quiet">La salida de uno define el estándar de los que se quedan.</span>
              </div>
            </div>

            <h2 className="reveal">Lo que nadie dice en voz alta</h2>
            <p className="reveal">
              La mayoría de los líderes que conozco han cortado tarde al
              menos una vez. Casi ninguno se arrepiente de haber cortado.
              Todos se arrepienten de haber tardado. El patrón es idéntico:
              &quot;debí haberlo hecho seis meses antes&quot;.
            </p>
            <p className="reveal">
              Pero el arrepentimiento no enseña si no lo conviertes en regla.
              La regla útil no es &quot;cortar más rápido&quot; — eso suena a
              brutalidad barata. La regla útil es: cuando empieces a usar
              argumentos para sostener a alguien, empieza a contar el
              tiempo. Porque el día que necesitas argumentar, ya sabes. Lo
              único que falta es animarte.
            </p>
            <p className="reveal">
              Soltar el lastre con humanidad no es un oxímoron. Es lo
              contrario: sostener a alguien en un rol donde no va a crecer,
              sabiendo que no va a crecer, es la forma menos humana de
              tratarlo. Le robas el tiempo que podría usar en encontrar un
              rol donde sí.
            </p>

            <h2 className="reveal">Enseñanza Manzana</h2>
            <p className="lead reveal">Decidir con humanidad no es decidir con esperanza.</p>
            <p className="lead reveal">La humanidad está en cortar a tiempo y con marco, no en sostener de más.</p>
            <p className="reveal" style={{ color: 'var(--gray)', marginTop: 24 }}>
              Primero nombras la decisión antes que a la persona.
              <br />
              Luego cortas con marco, no con disculpa.
              <br />
              Solo entonces cierras la narrativa con el equipo que se queda.
            </p>
          </div>
        </div>

        <nav className="article-related reveal">
          <span className="meta">También en el blog</span>
          <ul>
            <li><Link href="/blog/cortar-la-infeccion">Cortar la infección: cuando el talento no compensa el daño</Link></li>
            <li><Link href="/blog/decidir-sin-informacion-completa">Decidir sin información completa</Link></li>
          </ul>
        </nav>

        <EmailCapture />

        <section className="mz-end">
          <div className="wrap section-grid">
            <div className="meta col-label reveal">Siguiente paso</div>
            <div className="col-body">
              <h2 className="mz-end-title reveal">
                ¿Llevas meses sosteniendo a alguien que sabes que no va a dar el ancho?
              </h2>
              <p className="mz-end-sub reveal">
                Podemos entrenar esta posición en una sesión.
              </p>
              <div className="mz-end-actions">
                <Link
                  href="/contacto"
                  className="mz-end-cta reveal"
                  data-track="clic_contacto"
                  data-track-label="blog-soltar-el-lastre"
                >
                  Agendar sesión →
                </Link>
                <Link
                  href="/diagnostico"
                  className="mz-end-cta-quiet reveal"
                  data-track="clic_diagnostico"
                  data-track-label="blog-soltar-el-lastre"
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
