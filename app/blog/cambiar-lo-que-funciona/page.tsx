import type { Metadata } from 'next'
import Link from 'next/link'
import { EmailCapture } from '../../../components/EmailCapture'

const BASE_URL = 'https://manzanatraining.com.mx'
const SLUG = 'cambiar-lo-que-funciona'
const TITLE = 'Cambiar lo que funciona: cuando lo estable se vuelve trampa'
const DESCRIPTION =
  'No hay crisis visible, pero sabes que no escala. Tres movimientos para crear urgencia, probar sin romper y cerrar el cambio antes de que sea tarde.'
const IMAGE = `${BASE_URL}/blog-cambiar-lo-que-funciona.webp`
const DATE = '2026-04-07'

export const metadata: Metadata = {
  title: `${TITLE} — MANZANA`,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      'No hay crisis visible, pero sabes que no escala. Tres movimientos para cerrar el cambio.',
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
            <span>Transformación</span>
            <span>6 min</span>
            <span>Abr 2026</span>
          </div>
          <h1 className="article-title reveal">{TITLE}</h1>
          <p className="article-lead reveal">
            No hay crisis. No hay queja. Los números cierran. Pero tú ya sabes
            que esto no escala. Que lo que hoy funciona mañana te va a atrapar.
            Y que nadie va a entender por qué quieres mover algo que &quot;no
            está roto&quot;.
          </p>
          <figure className="article-figure reveal">
            <img
              src="/blog-cambiar-lo-que-funciona.webp"
              alt="Estructura dorada estática agrietándose desde adentro — cambio organizacional bajo presión"
              width={1792}
              height={1024}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </figure>

          <div className="mz-prose">
            <h2 className="reveal">La posición</h2>
            <p className="reveal">
              En jiu-jitsu hay una trampa que solo le pasa a los que ya saben
              pelear: quedarse en una posición cómoda. Tienes control, no
              estás en peligro, el otro no te ataca. Pero tampoco estás
              avanzando. Te quedas ahí porque se siente seguro. Hasta que el
              otro lee tu patrón, encuentra el hueco y te somete.
            </p>
            <p className="reveal">
              En una empresa, esa posición se llama &quot;funciona&quot;. El
              proceso cierra. El equipo entrega. Los clientes no se quejan.
              Pero el founder sabe — con esa intuición que no aparece en
              dashboards — que algo no va a sostener el siguiente nivel de
              carga. Que el sistema actual tiene un techo. Y que ese techo se
              acerca.
            </p>
            <p className="reveal">
              Lo difícil no es ver el problema. Es justificar la intervención
              cuando todos a tu alrededor creen que no hay problema.
            </p>

            <h2 className="reveal">Cómo se presenta</h2>
            <ul className="reveal">
              <li>Un proceso manual que funciona con 20 clientes pero va a colapsar con 80.</li>
              <li>Un equipo que entrega, pero solo porque una persona carga el peso de tres.</li>
              <li>Una estructura de decisión que depende de que el founder esté en cada junta.</li>
              <li>Un modelo de negocio que genera margen hoy pero que no aguanta competencia real.</li>
              <li>Un sistema de ventas que vive en la cabeza de una sola persona.</li>
            </ul>
            <span className="quiet reveal">
              Si la única razón para no cambiar es &quot;es que sí funciona&quot;, ya tienes un problema.
            </span>

            <h2 className="reveal">El daño real</h2>
            <p className="reveal">
              Lo que funciona hoy sin diseño se rompe mañana sin aviso. No se
              degrada gradualmente. Colapsa. Un día el proceso manual ya no
              alcanza, la persona clave se va, el cliente grande llega y no
              puedes atenderlo. Y entonces sí hay crisis — pero ya sin margen
              para rediseñar nada.
            </p>
            <p className="reveal">
              El daño de no cambiar lo que funciona no se ve en los números de
              hoy. Se ve en las oportunidades que pierdes, en el talento que se
              cansa de operar con parches, en la velocidad que dejas de tener
              cuando más la necesitas.
            </p>
            <p className="lead reveal">
              La estabilidad que no se cuestiona se convierte en fragilidad que
              no se detecta.
            </p>

            <h2 className="reveal">Por qué no se actúa</h2>
            <p className="reveal">
              Porque cambiar lo que funciona no tiene recompensa inmediata.
              Nadie te aplaude por arreglar lo que no estaba roto. El equipo lo
              ve como capricho. Los socios lo ven como riesgo innecesario. Y tú
              mismo dudas: ¿para qué moverle si está bien?
            </p>
            <p className="reveal">
              También porque el costo del cambio es visible y el costo de no
              cambiar es invisible. Mover un proceso tiene fricción hoy. No
              moverlo tiene consecuencias en seis meses. Y el cerebro humano
              siempre elige evitar el dolor presente.
            </p>
            <p className="reveal">El resultado: te quedas quieto. Hasta que ya no puedes.</p>

            <div className="mz-call reveal">
              <span className="meta mz-call-label">Los 3 movimientos</span>
              <div className="mz-call-item">
                <h3>1. Crear urgencia sin inventar crisis</h3>
                <p>
                  No necesitas una emergencia para justificar el cambio.
                  Necesitas hacer visible lo que todos intuyen pero nadie
                  dice. Nombrar el costo de seguir igual. Ponerle números al
                  techo que se acerca.
                </p>
                <ul>
                  <li>
                    Proyecta el sistema actual al doble de carga. ¿Aguanta? ¿A
                    qué costo? Muestra esos números.
                  </li>
                  <li>
                    Identifica la dependencia más frágil: la persona, el
                    proceso o el recurso que, si falla, tumba todo.
                  </li>
                  <li>
                    No digas &quot;hay que cambiar&quot;. Di &quot;esto es lo
                    que pasa si no cambiamos en 90 días&quot;. Deadline
                    explícito.
                  </li>
                  <li>Usa datos, no opiniones. La urgencia que no se mide se ignora.</li>
                </ul>
                <span className="quiet">La urgencia real no se grita. Se demuestra.</span>
              </div>
              <div className="mz-call-item">
                <h3>2. Probar sin romper lo que ya sirve</h3>
                <p>
                  El error más caro es cambiar todo de golpe. El segundo más
                  caro es no cambiar nada. El movimiento correcto es un piloto
                  controlado: probar la versión nueva en un espacio acotado,
                  sin apagar la versión actual.
                </p>
                <ul>
                  <li>Elige un segmento, un equipo o un cliente donde probar el cambio. No todo el sistema.</li>
                  <li>Define qué vas a medir y en cuánto tiempo. Sin métrica y sin plazo, el piloto se vuelve eterno.</li>
                  <li>Protege la operación actual mientras pruebas. El piloto no puede poner en riesgo lo que ya funciona.</li>
                  <li>Documenta resultados, no impresiones. Si funcionó, que sea con evidencia. Si no, que sea con aprendizaje claro.</li>
                </ul>
                <span className="quiet">No pides permiso para probar. Pides permiso para no probar.</span>
              </div>
              <div className="mz-call-item">
                <h3>3. Cerrar el cambio. Sin vuelta atrás.</h3>
                <p>
                  El piloto funcionó. Los números lo confirman. Ahora viene la
                  parte más difícil: matar la versión anterior. Porque si dejas
                  las dos versiones vivas, el equipo siempre va a regresar a lo
                  cómodo. El cambio que no se cierra no es cambio — es
                  experimento abandonado.
                </p>
                <ul>
                  <li>Pon fecha de corte. Después de esta fecha, la versión anterior deja de existir. Sin excepciones.</li>
                  <li>Asigna dueño del nuevo proceso. Alguien que responda por la adopción, no solo por el diseño.</li>
                  <li>Comunica una sola vez, con claridad total: qué cambia, cuándo, y qué se espera de cada quien.</li>
                  <li>Los primeros 30 días después del cierre, vigila. No para controlar — para ajustar lo que el piloto no previó.</li>
                </ul>
                <span className="quiet">Si no puedes matar la versión anterior, no estabas listo para cambiar.</span>
              </div>
            </div>

            <h2 className="reveal">Lo que nadie dice en voz alta</h2>
            <p className="reveal">
              Cambiar lo que funciona es un acto de autoridad. No de
              innovación, no de visión, no de creatividad. Es decir: yo veo
              algo que el sistema todavía no ve, y voy a actuar antes de que
              el sistema lo confirme. Eso requiere criterio. Y requiere
              aguantar la presión de los que no entienden por qué estás
              moviendo algo que &quot;estaba bien&quot;.
            </p>
            <p className="reveal">
              Los founders que más crecen no son los que resuelven crisis. Son
              los que actúan antes de que la crisis se forme. Y eso, casi
              siempre, significa tocar algo que hoy parece funcionar.
            </p>

            <h2 className="reveal">Enseñanza Manzana</h2>
            <p className="lead reveal">Lo que funciona sin diseño no es fortaleza. Es deuda.</p>
            <p className="lead reveal">Y las deudas se cobran cuando menos te conviene.</p>
            <p className="reveal" style={{ color: 'var(--gray)', marginTop: 24 }}>
              Primero creas la urgencia con datos, no con pánico.
              <br />
              Luego pruebas sin romper lo que ya sostiene.
              <br />
              Solo entonces cierras el cambio. Sin retorno.
            </p>
          </div>
        </div>

        <nav className="article-related reveal">
          <span className="meta">También en el blog</span>
          <ul>
            <li><Link href="/blog/aguantar-el-plan">Aguantar el plan: cuando la presión te pide cambiar de rumbo</Link></li>
            <li><Link href="/blog/oxigeno-o-muerte">Oxígeno o muerte: cuando el negocio se está acabando y nadie quiere verlo</Link></li>
          </ul>
        </nav>

        <EmailCapture />

        <section className="mz-end">
          <div className="wrap section-grid">
            <div className="meta col-label reveal">Siguiente paso</div>
            <div className="col-body">
              <h2 className="mz-end-title reveal">
                ¿Sabes que algo tiene que cambiar pero no encuentras cómo justificarlo?
              </h2>
              <p className="mz-end-sub reveal">
                Podemos entrenar esta posición en una sesión.
              </p>
              <div className="mz-end-actions">
                <Link
                  href="/contacto"
                  className="mz-end-cta reveal"
                  data-track="clic_contacto"
                  data-track-label="blog-cambiar-lo-que-funciona"
                >
                  Agendar sesión →
                </Link>
                <Link
                  href="/diagnostico"
                  className="mz-end-cta-quiet reveal"
                  data-track="clic_diagnostico"
                  data-track-label="blog-cambiar-lo-que-funciona"
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
