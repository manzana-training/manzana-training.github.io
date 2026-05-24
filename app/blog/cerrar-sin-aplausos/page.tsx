import type { Metadata } from 'next'
import Link from 'next/link'
import { EmailCapture } from '../../../components/EmailCapture'

const BASE_URL = 'https://manzanatraining.com.mx'
const SLUG = 'cerrar-sin-aplausos'
const TITLE = 'Cerrar sin aplausos: decidir sin buscar consenso'
const DESCRIPTION =
  'Tomaste la decisión. Nadie la celebra. Hay silencio. Tres movimientos para sostener sin sobreexplicar ni buscar la aprobación que no va a llegar.'
const IMAGE = `${BASE_URL}/blog-cerrar-sin-aplausos.webp`
const DATE = '2026-05-24'

export const metadata: Metadata = {
  title: `${TITLE} — MANZANA`,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      'Tomaste la decisión difícil. La sala se quedó en silencio. Tres movimientos para sostener una decisión impopular sin buscar aprobación que no va a llegar.',
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
            <span>Cierre</span>
            <span>8 min</span>
            <span>May 2026</span>
          </div>
          <h1 className="article-title reveal">{TITLE}</h1>
          <p className="article-lead reveal">
            Junta de directorio. Pusiste sobre la mesa la decisión que llevas
            tres semanas posponiendo. Nadie aplaude. Nadie dice "claro, hay
            que hacerlo". Solo hay miradas que se cruzan, una pregunta
            evasiva y un silencio largo. Cierras la junta sin cierre. Manejas
            a casa pensando si la decisión era la equivocada o si solo nadie
            quería ser el primero en decirlo en voz alta. A veces es lo
            segundo. Casi siempre, de hecho.
          </p>
          <figure className="article-figure reveal">
            <img
              src="/blog-cerrar-sin-aplausos.webp"
              alt="Puerta de madera cerrada bajo un haz de luz dorada en una sala vacía — el momento después del cierre, sin testigos"
              width={1792}
              height={1024}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </figure>

          <div className="mz-prose">
            <h2 className="reveal">La posición</h2>
            <p className="reveal">
              En jiu-jitsu hay un momento exacto donde ya estás encima del
              otro y solo queda cerrar. El oponente no pelea de frente: solo
              espera. No te ataca. No respalda lo que estás haciendo. Solo
              aguanta, en silencio, para ver si dudas. Si bajas el peso un
              milímetro, te pasa por encima. Si sostienes, cierras. No hay
              tercera opción y no hay aplauso intermedio.
            </p>
            <p className="reveal">
              En una empresa, esta posición se activa cuando tomas una
              decisión que la organización no va a celebrar: recortar a
              alguien, matar un producto, cambiar de proveedor, retirar una
              promesa, decir que no a un proyecto que tenía respaldo
              emocional. La gente no la pelea de frente. Tampoco la respalda
              en voz alta. Solo se queda quieta. Y ese silencio te invita a
              renegociar contigo mismo lo que ya cerraste.
            </p>
            <p className="reveal">
              La trampa es que confundes el silencio con duda colectiva.
              Crees que si fuera la decisión correcta, alguien lo diría.
              Asumes que necesitas una señal externa para confirmar que no
              te equivocaste. Esa señal es la trampa: las decisiones más
              caras de tu carrera son exactamente las que nadie quiere
              respaldar en público. Por eso te tocó tomarlas a ti.
            </p>

            <h2 className="reveal">Cómo se presenta</h2>
            <ul className="reveal">
              <li>Lanzas la decisión en una junta y la sala se queda quieta. Nadie objeta. Nadie respalda. Solo silencio cortés que tú llenas con más explicación.</li>
              <li>En los días siguientes te encuentras explicando la decisión otra vez a personas que estuvieron en la junta. No piden la explicación: tú la ofreces.</li>
              <li>Empiezas a oír versiones de "se pudo haber hecho de otra forma" en pasillos, sin que nadie lo plantee en una mesa donde se decide.</li>
              <li>Te despiertas a las tres de la mañana revisando si era la decisión correcta. Sin información nueva. Solo con la incomodidad acumulada del día.</li>
              <li>Tu instinto te empuja a hacer pequeños ajustes "para suavizar". Son retrocesos parciales disfrazados de sensibilidad.</li>
              <li>Buscas un aliado retroactivo: alguien que confirme que sí, que estuvo bien. Cuando no lo encuentras, tu confianza se erosiona.</li>
              <li>Empiezas a posponer la siguiente decisión difícil, porque no quieres pagar otra vez el costo del silencio.</li>
            </ul>
            <span className="quiet reveal">
              El silencio no es el voto. El silencio es la espera. Quien sabe distinguirlos, decide. Quien no, se queda explicando.
            </span>

            <h2 className="reveal">El daño real</h2>
            <p className="reveal">
              El primer daño es interno. Cada explicación de más es una
              abertura. La decisión que se sostiene con argumentos nuevos
              termina cambiando de forma, y el cambio no llega por
              información nueva — llega por desgaste. Después de tres
              conversaciones de pasillo donde "afinaste" el alcance, la
              decisión original ya no existe. Te convenciste a ti mismo de
              que la afinaste, pero lo que hiciste fue diluirla hasta que
              dejó de incomodar. Una decisión que no incomoda a nadie casi
              nunca es la decisión que hacía falta.
            </p>
            <p className="reveal">
              El segundo daño es de autoridad. Si abres la decisión a
              discusión después de tomarla, le enseñas a la organización
              que tus decisiones son negociables si la gente espera en
              silencio el tiempo suficiente. La próxima decisión la
              cuestionarán antes de que termines de comunicarla. No con
              objeción frontal — con la misma quietud calculada. Y vas a
              aprender, sin darte cuenta, a tomar decisiones diseñadas
              para que no haya silencio. Es decir: decisiones tibias.
            </p>
            <p className="reveal">
              El tercer daño es el más caro: bloqueas las decisiones
              futuras. El costo psicológico de cerrar sin aplauso hace que
              pospongas las siguientes. Empiezas a evitar las decisiones
              que sabes que no tendrán respaldo. La caja de decisiones
              diferidas se acumula. Eventualmente, alguien más las toma
              por ti — el mercado, un competidor, un empleado que se va.
              La decisión que no tomas a tiempo te la termina tomando la
              realidad. Y la realidad no negocia.
            </p>
            <p className="lead reveal">
              La decisión que se queda sin sostener no se convierte en otra decisión. Se convierte en ninguna decisión.
            </p>

            <h2 className="reveal">Por qué no se actúa</h2>
            <p className="reveal">
              Porque confundes consenso con calidad. Crees que si fuera la
              decisión correcta, todos lo verían. No funciona así. La
              decisión correcta muchas veces es la que nadie quería tomar
              — por eso te tocó a ti. Si esperas a que el consenso valide
              la decisión, le diste el voto al grupo menos calificado para
              cargar el costo: el que no la tiene que tomar.
            </p>
            <p className="reveal">
              Porque buscas aprobación para diluir el riesgo. Si la cosa
              sale mal, al menos no fue solo tu llamada. Esa búsqueda es
              la trampa: cuando una decisión se diluye en consenso, si
              falla, la responsabilidad no se diluye. Sigue siendo tuya.
              Solo que ahora la decisión es peor — porque pasó por cinco
              filtros que la suavizaron antes de salir.
            </p>
            <p className="reveal">
              Y porque sobreexplicas por culpa, no por claridad. Sientes
              que les debes una explicación más larga, una más empática,
              una con más contexto. La sobreexplicación se lee como duda.
              La duda invita a renegociar. Lo que parecía consideración
              hacia el equipo se convierte en señal de que no estás
              parado firme. Y la gente, sin malicia, empieza a empujar
              para ver si la decisión se mueve.
            </p>

            <div className="mz-mid-cta reveal">
              <p>Cerrar sin aplausos no es ser frío. Es entrenable. En una sesión.</p>
              <Link href="/contacto" data-track="clic_contacto" data-track-label="blog-cerrar-sin-aplausos-mid">
                Agendar 15 min →
              </Link>
            </div>

            <div className="mz-call reveal">
              <span className="meta mz-call-label">Los 3 movimientos</span>
              <div className="mz-call-item">
                <h3>1. Decidir antes de buscar respaldo</h3>
                <p>
                  El primer movimiento es de orden. Decides la decisión,
                  después escuchas. No al revés. Si abres la conversación
                  con "¿qué piensan?", te volviste relator de votos. Si
                  abres con "tomé esta decisión, por estas razones, quiero
                  escuchar lo que tengan que decir sobre la ejecución",
                  marcaste el orden de las cosas. La decisión es tuya. Las
                  observaciones cuentan para ejecución, no para reapertura.
                </p>
                <ul>
                  <li>
                    Sé explícito sobre el tipo de conversación. "Esto es
                    consulta, no votación." "Esto es información, no
                    discusión." "Esto es decisión, vamos a hablar de cómo
                    la ejecutamos." Cada formato necesita su contrato. Sin
                    el contrato, todos asumen votación — porque es lo más
                    cómodo.
                  </li>
                  <li>
                    Distingue input de voto. Una persona puede dar input
                    excelente sin tener voto. Mezclar los dos es lo que
                    infla las decisiones de veinte minutos a ocho semanas.
                    El input ayuda a refinar; el voto define. No le des
                    voto a quien le pediste input.
                  </li>
                  <li>
                    Acepta que cerrar bien rompe alianzas. Si tu decisión
                    depende de que nadie se enoje, ya delegaste el
                    criterio. Hay decisiones que correctamente tomadas
                    enfrían relaciones, al menos por un tiempo. Negar ese
                    costo es lo que produce las decisiones tibias que
                    nadie respeta y todos pueden empujar.
                  </li>
                  <li>
                    Si esperas hasta que todos estén de acuerdo, no estás
                    decidiendo. Estás reportando una decisión que ya se
                    tomó sola por inercia, que casi siempre es la peor
                    decisión disponible.
                  </li>
                </ul>
                <span className="quiet">La búsqueda de aprobación es delegación del criterio al jurado equivocado.</span>
              </div>
              <div className="mz-call-item">
                <h3>2. Sostener con repetición sobria, no con argumentos nuevos</h3>
                <p>
                  Una vez tomada, la decisión se sostiene repitiendo el
                  cierre, no agregando justificación. Cada nuevo argumento
                  que metes a la conversación es una puerta de regreso.
                  Las personas escuchan los nuevos argumentos como "está
                  dudando" — y empiezan a buscar la grieta. La autoridad
                  no se grita ni se argumenta otra vez. Se sostiene.
                </p>
                <ul>
                  <li>
                    Respuesta mínima suficiente. "La decisión está tomada.
                    Las razones son las que ya expliqué. Vamos a
                    ejecutar." Eso, repetido sin tono, sin defensiva, sin
                    cara de pedir perdón. La sobriedad comunica firmeza
                    mejor que cualquier discurso.
                  </li>
                  <li>
                    Devuelve el peso a quien intente reabrir. Si alguien
                    insiste, no es tu trabajo convencerlo. "Entiendo que
                    no estás de acuerdo. La decisión sigue siendo esa.
                    ¿Qué necesitas para ejecutar tu parte?" La pregunta
                    cierra el debate y abre la operación al mismo tiempo.
                  </li>
                  <li>
                    Diferencia entre escuchar y reabrir. Puedes escuchar
                    incomodidad sin renegociar. La gente necesita ser
                    escuchada — no necesita ser obedecida. Decir "te oigo,
                    entiendo que es incómodo, la decisión no cambia" no es
                    frío. Es honesto.
                  </li>
                  <li>
                    No agregues contexto nuevo después del cierre. Si lo
                    haces, le estás diciendo a la organización que la
                    decisión inicial no estaba completa — y por lo tanto
                    se puede completar más. Cada contexto adicional es
                    una invitación a debate adicional.
                  </li>
                </ul>
                <span className="quiet">La autoridad no se grita. Se sostiene.</span>
              </div>
              <div className="mz-call-item">
                <h3>3. Absorber el silencio sin pedir aplauso</h3>
                <p>
                  El tercer movimiento es el más difícil de entrenar
                  porque es el más solitario. La validación de la
                  decisión correcta llega después. A veces meses. A veces
                  años. A veces nunca. Si necesitas aplauso para sostener,
                  tu autoridad depende del aplauso — y el aplauso es
                  prestado. Te lo dan cuando hay buenas noticias y te lo
                  quitan a la primera incomodidad.
                </p>
                <ul>
                  <li>
                    No persigas a la gente para "alinear". Esa persecución
                    se lee como duda. Si alguien quedó incómodo después de
                    la decisión, dale espacio para procesar — no para
                    renegociar. Buscar a cada disidente para convencerlo
                    es lo opuesto de cerrar.
                  </li>
                  <li>
                    Demuestra el cierre con acción, no con discurso. La
                    forma de sostener una decisión no es repetir cuán
                    difícil fue tomarla. Es comportarte como si ya
                    estuviera tomada. Hablar del próximo trimestre con la
                    decisión como dada. Asignar presupuesto desde ese
                    supuesto. La organización lee comportamiento, no
                    comunicados.
                  </li>
                  <li>
                    Acepta el costo emocional sin contrabandear. La
                    incomodidad de cerrar sin aplauso es real. No la
                    disfraces de "tenían razón en algo" para sentirte
                    menos solo. Sentirte solo con la decisión es parte
                    de tomarla. Quien no aguanta esa soledad no cierra:
                    solo retrasa.
                  </li>
                  <li>
                    Si después de seis semanas la decisión sigue
                    sostenida, la conversación cambia sola. La gente
                    pasa de cuestionarla a operarla. No porque la
                    convenciste — porque dejaste de necesitar
                    convencerla. El tiempo de sostener es el argumento
                    que tu sobreexplicación intentaba reemplazar.
                  </li>
                </ul>
                <span className="quiet">El aplauso es comentario. La ejecución es voto.</span>
              </div>
            </div>

            <h2 className="reveal">Lo que nadie dice en voz alta</h2>
            <p className="reveal">
              La búsqueda de consenso es muchas veces cobardía disfrazada
              de inclusión. "Queremos que todos estén alineados" suele ser
              "no quiero quedar como el malo si esto sale mal". Es una
              forma de pedir respaldo emocional antes de cargar el peso.
              Funciona en grupos pequeños y en decisiones bajas. En
              decisiones que importan, lo que el líder necesita es
              criterio — no compañía.
            </p>
            <p className="reveal">
              Las mejores decisiones de tu carrera probablemente fueron
              las que tomaste solo. Las peores fueron las que tomaste por
              comité — no porque el comité fuera malo, sino porque ningún
              solo decisor cargó el peso, y por eso ninguno corrigió a
              tiempo cuando empezó a salirse del carril. La
              responsabilidad distribuida es responsabilidad de nadie.
              Esa es la verdad operacional del consenso forzado.
            </p>
            <p className="reveal">
              Y hay una jerarquía oculta en los silencios. El silencio de
              respaldo no es el mismo que el silencio de objeción que no
              se atreve a salir. Aprender a distinguirlos toma años. Mientras
              no los distingas, asume el peor caso y sostén igual. La
              decisión correcta sostenida bajo silencio de respaldo se
              ejecuta limpio. La decisión correcta sostenida bajo silencio
              de objeción se ejecuta con resistencia — y eso te entrena el
              reflejo que necesitas para la próxima.
            </p>

            <h2 className="reveal">Enseñanza Manzana</h2>
            <p className="lead reveal">La aprobación es un lujo, no un requisito.</p>
            <p className="lead reveal">Cerrar es el trabajo.</p>
            <p className="reveal" style={{ color: 'var(--gray)', marginTop: 24 }}>
              Primero decides, después escuchas.
              <br />
              Luego sostienes con repetición sobria, no con argumentos nuevos.
              <br />
              Solo entonces absorbes el silencio sin pedir aplauso.
            </p>
          </div>
        </div>

        <nav className="article-related reveal">
          <span className="meta">También en el blog</span>
          <ul>
            <li><Link href="/blog/aguantar-el-plan">Aguantar el plan: cuando la presión te pide cambiar de rumbo</Link></li>
            <li><Link href="/blog/decidir-sin-informacion-completa">Decidir sin información completa</Link></li>
          </ul>
        </nav>

        <EmailCapture />

        <section className="mz-end">
          <div className="wrap section-grid">
            <div className="meta col-label reveal">Siguiente paso</div>
            <div className="col-body">
              <h2 className="mz-end-title reveal">
                La última decisión difícil que tomaste — ¿la sostuviste o la fuiste afinando hasta que dejó de incomodar?
              </h2>
              <p className="mz-end-sub reveal">
                Podemos entrenar esta posición en una sesión.
              </p>
              <div className="mz-end-actions">
                <Link
                  href="/contacto"
                  className="mz-end-cta reveal"
                  data-track="clic_contacto"
                  data-track-label="blog-cerrar-sin-aplausos"
                >
                  Agendar sesión →
                </Link>
                <Link
                  href="/diagnostico"
                  className="mz-end-cta-quiet reveal"
                  data-track="clic_diagnostico"
                  data-track-label="blog-cerrar-sin-aplausos"
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
