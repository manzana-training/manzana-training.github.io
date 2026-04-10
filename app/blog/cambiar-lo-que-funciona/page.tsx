import type { Metadata } from 'next'

const BASE_URL = 'https://manzanatraining.com.mx'
const SLUG = 'cambiar-lo-que-funciona'
const TITLE = 'Cambiar lo que funciona: cuando lo estable se vuelve trampa'
const DESCRIPTION = 'No hay crisis visible, pero sabes que no escala. Tres movimientos para crear urgencia, probar sin romper y cerrar el cambio antes de que sea tarde.'
const IMAGE = `${BASE_URL}/blog-cambiar-lo-que-funciona.png`
const DATE = '2026-04-07'

export const metadata: Metadata = {
  title: `${TITLE} — MANZANA`,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: 'No hay crisis visible, pero sabes que no escala. Tres movimientos para cerrar el cambio.',
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
    <article className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-manzana-accent text-xs font-mono">TRANSFORMACIÓN</span>
            <span className="text-manzana-mid/40 text-xs">·</span>
            <span className="text-manzana-mid/40 text-xs">6 min</span>
            <span className="text-manzana-mid/40 text-xs">·</span>
            <span className="text-manzana-mid/40 text-xs">Abr 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-manzana-white leading-tight mb-6">
            Cambiar lo que funciona: cuando lo estable se vuelve trampa
          </h1>
          <p className="text-xl text-manzana-mid leading-relaxed">
            No hay crisis. No hay queja. Los números cierran. Pero tú ya sabes que esto no escala. Que lo que hoy funciona mañana te va a atrapar. Y que nadie va a entender por qué quieres mover algo que &quot;no está roto&quot;.
          </p>
        </div>

        {/* Imagen */}
        <div className="mb-12">
          <img
            src="/blog-cambiar-lo-que-funciona.png"
            alt="Estructura dorada estática agrietándose desde adentro — cambio organizacional bajo presión"
            className="w-full aspect-video object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="prose prose-invert max-w-none space-y-8">
          <div className="h-px bg-white/5" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">La posición</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              En jiu-jitsu hay una trampa que solo le pasa a los que ya saben pelear: quedarse en una posición cómoda. Tienes control, no estás en peligro, el otro no te ataca. Pero tampoco estás avanzando. Te quedas ahí porque se siente seguro. Hasta que el otro lee tu patrón, encuentra el hueco y te somete.
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              En una empresa, esa posición se llama &quot;funciona&quot;. El proceso cierra. El equipo entrega. Los clientes no se quejan. Pero el founder sabe — con esa intuición que no aparece en dashboards — que algo no va a sostener el siguiente nivel de carga. Que el sistema actual tiene un techo. Y que ese techo se acerca.
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              Lo difícil no es ver el problema. Es justificar la intervención cuando todos a tu alrededor creen que no hay problema.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Cómo se presenta</h2>
            <ul className="space-y-2 text-manzana-light/80">
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Un proceso manual que funciona con 20 clientes pero va a colapsar con 80.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Un equipo que entrega, pero solo porque una persona carga el peso de tres.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Una estructura de decisión que depende de que el founder esté en cada junta.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Un modelo de negocio que genera margen hoy pero que no aguanta competencia real.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Un sistema de ventas que vive en la cabeza de una sola persona.</span>
              </li>
            </ul>
            <p className="text-manzana-mid/60 text-sm italic">
              Si la única razón para no cambiar es &quot;es que sí funciona&quot;, ya tienes un problema.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">El daño real</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              Lo que funciona hoy sin diseño se rompe mañana sin aviso. No se degrada gradualmente. Colapsa. Un día el proceso manual ya no alcanza, la persona clave se va, el cliente grande llega y no puedes atenderlo. Y entonces sí hay crisis — pero ya sin margen para rediseñar nada.
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              El daño de no cambiar lo que funciona no se ve en los números de hoy. Se ve en las oportunidades que pierdes, en el talento que se cansa de operar con parches, en la velocidad que dejas de tener cuando más la necesitas.
            </p>
            <p className="text-manzana-light/80 leading-relaxed font-medium">
              La estabilidad que no se cuestiona se convierte en fragilidad que no se detecta.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Por qué no se actúa</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              Porque cambiar lo que funciona no tiene recompensa inmediata. Nadie te aplaude por arreglar lo que no estaba roto. El equipo lo ve como capricho. Los socios lo ven como riesgo innecesario. Y tú mismo dudas: ¿para qué moverle si está bien?
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              También porque el costo del cambio es visible y el costo de no cambiar es invisible. Mover un proceso tiene fricción hoy. No moverlo tiene consecuencias en seis meses. Y el cerebro humano siempre elige evitar el dolor presente.
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              El resultado: te quedas quieto. Hasta que ya no puedes.
            </p>
          </div>

          <div className="border border-manzana-accent/20 p-8 my-12">
            <p className="text-manzana-accent text-sm font-mono mb-4">LOS 3 MOVIMIENTOS</p>
            <div className="space-y-8">
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">1. Crear urgencia sin inventar crisis</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  No necesitas una emergencia para justificar el cambio. Necesitas hacer visible lo que todos intuyen pero nadie dice. Nombrar el costo de seguir igual. Ponerle números al techo que se acerca.
                </p>
                <ul className="space-y-1 text-manzana-light/80 mt-3">
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Proyecta el sistema actual al doble de carga. ¿Aguanta? ¿A qué costo? Muestra esos números.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Identifica la dependencia más frágil: la persona, el proceso o el recurso que, si falla, tumba todo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>No digas &quot;hay que cambiar&quot;. Di &quot;esto es lo que pasa si no cambiamos en 90 días&quot;. Deadline explícito.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Usa datos, no opiniones. La urgencia que no se mide se ignora.</span>
                  </li>
                </ul>
                <p className="text-manzana-mid/60 text-sm mt-3">La urgencia real no se grita. Se demuestra.</p>
              </div>
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">2. Probar sin romper lo que ya sirve</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  El error más caro es cambiar todo de golpe. El segundo más caro es no cambiar nada. El movimiento correcto es un piloto controlado: probar la versión nueva en un espacio acotado, sin apagar la versión actual.
                </p>
                <ul className="space-y-1 text-manzana-light/80 mt-3">
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Elige un segmento, un equipo o un cliente donde probar el cambio. No todo el sistema.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Define qué vas a medir y en cuánto tiempo. Sin métrica y sin plazo, el piloto se vuelve eterno.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Protege la operación actual mientras pruebas. El piloto no puede poner en riesgo lo que ya funciona.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Documenta resultados, no impresiones. Si funcionó, que sea con evidencia. Si no, que sea con aprendizaje claro.</span>
                  </li>
                </ul>
                <p className="text-manzana-mid/60 text-sm mt-3">No pides permiso para probar. Pides permiso para no probar.</p>
              </div>
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">3. Cerrar el cambio. Sin vuelta atrás.</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  El piloto funcionó. Los números lo confirman. Ahora viene la parte más difícil: matar la versión anterior. Porque si dejas las dos versiones vivas, el equipo siempre va a regresar a lo cómodo. El cambio que no se cierra no es cambio — es experimento abandonado.
                </p>
                <ul className="space-y-1 text-manzana-light/80 mt-3">
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Pon fecha de corte. Después de esta fecha, la versión anterior deja de existir. Sin excepciones.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Asigna dueño del nuevo proceso. Alguien que responda por la adopción, no solo por el diseño.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Comunica una sola vez, con claridad total: qué cambia, cuándo, y qué se espera de cada quien.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Los primeros 30 días después del cierre, vigila. No para controlar — para ajustar lo que el piloto no previó.</span>
                  </li>
                </ul>
                <p className="text-manzana-mid/60 text-sm mt-3">Si no puedes matar la versión anterior, no estabas listo para cambiar.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Lo que nadie dice en voz alta</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              Cambiar lo que funciona es un acto de autoridad. No de innovación, no de visión, no de creatividad. Es decir: yo veo algo que el sistema todavía no ve, y voy a actuar antes de que el sistema lo confirme. Eso requiere criterio. Y requiere aguantar la presión de los que no entienden por qué estás moviendo algo que &quot;estaba bien&quot;.
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              Los founders que más crecen no son los que resuelven crisis. Son los que actúan antes de que la crisis se forme. Y eso, casi siempre, significa tocar algo que hoy parece funcionar.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Enseñanza Manzana</h2>
            <div className="text-manzana-light text-lg leading-relaxed space-y-2">
              <p>Lo que funciona sin diseño no es fortaleza. Es deuda.</p>
              <p>Y las deudas se cobran cuando menos te conviene.</p>
              <p className="text-manzana-mid/60 mt-4">
                Primero creas la urgencia con datos, no con pánico.<br />
                Luego pruebas sin romper lo que ya sostiene.<br />
                Solo entonces cierras el cambio. Sin retorno.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 border border-manzana-accent/20 p-8 text-center">
          <p className="text-manzana-white font-semibold mb-2">
            ¿Sabes que algo tiene que cambiar pero no encuentras cómo justificarlo?
          </p>
          <p className="text-manzana-mid text-sm mb-6">
            Podemos entrenar esta posición en una sesión.
          </p>
          <a
            href="/contacto"
            data-track="clic_contacto"
            data-track-label="blog-cambiar-lo-que-funciona"
            className="inline-flex items-center justify-center px-8 py-4 bg-manzana-accent text-manzana-black font-semibold text-sm tracking-wide hover:bg-manzana-white transition-colors"
          >
            AGENDAR SESIÓN
          </a>
          <p className="mt-4">
            <a href="/diagnostico" data-track="clic_diagnostico" data-track-label="blog-cambiar-lo-que-funciona" className="text-manzana-accent hover:text-manzana-white text-sm transition-colors">
              O haz el diagnóstico primero →
            </a>
          </p>
        </div>

        {/* Volver */}
        <div className="mt-12">
          <a href="/blog" className="text-manzana-mid hover:text-manzana-accent text-sm transition-colors">
            ← Volver al blog
          </a>
        </div>
      </div>
    </article>
  )
}
