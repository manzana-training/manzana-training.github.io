import type { Metadata } from 'next'

const BASE_URL = 'https://manzana-training.github.io'
const SLUG = 'cortar-la-infeccion'
const TITLE = 'Cortar la infección: cuando el talento no compensa el daño'
const DESCRIPTION = 'Una persona tóxica contamina más que diez desmotivadas. Tres movimientos para intervenir sin espectáculo y proteger al equipo.'
const IMAGE = `${BASE_URL}/blog-cortar-la-infeccion.png`
const DATE = '2026-03-27'

export const metadata: Metadata = {
  title: `${TITLE} — MANZANA`,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: 'Una persona tóxica contamina más que diez desmotivadas.',
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
            <span className="text-manzana-accent text-xs font-mono">CONTAMINACIÓN</span>
            <span className="text-manzana-mid/40 text-xs">·</span>
            <span className="text-manzana-mid/40 text-xs">6 min</span>
            <span className="text-manzana-mid/40 text-xs">·</span>
            <span className="text-manzana-mid/40 text-xs">Mar 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-manzana-white leading-tight mb-6">
            Cortar la infección: cuando el talento no compensa el daño
          </h1>
          <p className="text-xl text-manzana-mid leading-relaxed">
            Hay alguien en tu equipo que produce resultados, pero envenena todo lo que toca. Chisme, cinismo, sabotaje sutil. Todos lo saben. Nadie actúa. Y cada semana que pasa, el daño se multiplica.
          </p>
        </div>

        {/* Imagen */}
        <div className="mb-12">
          <img
            src="/blog-cortar-la-infeccion.png"
            alt="Esfera de cristal fracturada sobre superficie oscura — contaminación que se propaga"
            className="w-full aspect-video object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="prose prose-invert max-w-none space-y-8">
          <div className="h-px bg-white/5" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">La posición</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              En jiu-jitsu, una infección localizada que no se trata termina afectando todo el cuerpo. No importa qué tan fuerte seas en otros puntos: si dejas que avance, te debilita por dentro.
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              En una empresa pasa igual. Una persona con actitud tóxica —aunque tenga talento— contamina la dinámica, la narrativa y la energía del equipo. Y lo hace en silencio, sin dejar huellas claras.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Cómo se presenta</h2>
            <ul className="space-y-2 text-manzana-light/80">
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Comentarios sarcásticos que disfrazan desprecio de humor.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Conversaciones de pasillo que minan decisiones ya tomadas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Resistencia disfrazada de &quot;preguntas legítimas&quot; que siempre buscan lo mismo: bloquear.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Alianzas informales que generan bandos dentro del equipo.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Gente buena que empieza a callarse o a buscar salida.</span>
              </li>
            </ul>
            <p className="text-manzana-mid/60 text-sm italic">
              Si tu mejor gente se está callando, probablemente ya hay infección.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">El daño real</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              La toxicidad no se queda en una persona. Se propaga por imitación, por miedo y por omisión. El equipo aprende que ese comportamiento se tolera, y eso redefine la cultura real —no la del manifiesto, sino la que opera todos los días.
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              Pierdes talento sano antes que talento tóxico. Siempre. Porque la gente buena tiene opciones y no está dispuesta a absorber el costo de quedarse.
            </p>
            <p className="text-manzana-light/80 leading-relaxed font-medium">
              Aquí no se pierde por el daño directo. Se pierde por todo lo que se pudre alrededor.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Por qué no se actúa</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              Porque la persona produce. Porque &quot;sabe mucho&quot;. Porque confrontarla tiene costo político. Porque es más fácil decir &quot;así es su estilo&quot; que asumir el desgaste de intervenir.
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              Pero tolerar por talento es una deuda que se paga con la salida de quienes sí construyen.
            </p>
          </div>

          <div className="border border-manzana-accent/20 p-8 my-12">
            <p className="text-manzana-accent text-sm font-mono mb-4">LOS 3 MOVIMIENTOS</p>
            <div className="space-y-8">
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">1. Nombrar el patrón, no el carácter</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  No se trata de decir &quot;eres tóxico&quot;. Se trata de señalar el comportamiento específico y su impacto en el sistema.
                </p>
                <ul className="space-y-1 text-manzana-light/80 mt-3">
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>&quot;En las últimas tres juntas, tus comentarios bloquearon la discusión antes de que se cerrara.&quot;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>&quot;Dos personas del equipo me han dicho que prefieren no opinar cuando tú estás presente.&quot;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>&quot;El impacto de esto ya no es un tema de estilo. Es un problema de operación.&quot;</span>
                  </li>
                </ul>
                <p className="text-manzana-mid/60 text-sm mt-3">Despersonalizas el conflicto. Pones el foco en el sistema, no en el ego.</p>
              </div>
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">2. Poner límite con consecuencia explícita</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  Un límite sin consecuencia es una sugerencia. Y las sugerencias no detienen comportamiento tóxico.
                </p>
                <ul className="space-y-1 text-manzana-light/80 mt-3">
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Definir qué comportamiento específico debe cambiar.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Definir en qué plazo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Definir qué pasa si no cambia.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Documentar la conversación.</span>
                  </li>
                </ul>
                <p className="text-manzana-mid/60 text-sm mt-3">No amenazas. Clarificas las reglas del juego.</p>
              </div>
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">3. Decidir sin postergar</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  Si el comportamiento no cambia después del límite, la decisión ya está tomada. Lo único que falta es ejecutarla.
                </p>
                <ul className="space-y-1 text-manzana-light/80 mt-3">
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Cortar limpio: sin humillar, sin dramatizar, sin dejar cabos sueltos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Comunicar al equipo con claridad: qué pasó, por qué, qué sigue.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Cerrar el vacío operativo que deja la salida.</span>
                  </li>
                </ul>
                <p className="text-manzana-mid/60 text-sm mt-3">Cada semana que postergas, el mensaje al equipo es: esto se tolera aquí.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Lo que nadie dice en voz alta</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              Cuando finalmente cortas a la persona tóxica, casi nunca hay luto. Lo que hay es alivio. El equipo respira. La energía cambia. Las conversaciones se abren. Y ahí te das cuenta de cuánto daño silencioso estabas absorbiendo.
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              La pregunta no es si puedes permitirte perder a esa persona. La pregunta es cuánto más puedes permitirte mantenerla.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Enseñanza Manzana</h2>
            <div className="text-manzana-light text-lg leading-relaxed space-y-2">
              <p>El talento no compensa el daño.</p>
              <p>Y la tolerancia sin límite es complicidad silenciosa.</p>
              <p className="text-manzana-mid/60 mt-4">
                Primero nombras el patrón.<br />
                Luego pones límite con consecuencia.<br />
                Solo entonces decides sin postergar.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 border border-manzana-accent/20 p-8 text-center">
          <p className="text-manzana-white font-semibold mb-2">
            ¿Tienes a alguien que produce pero contamina?
          </p>
          <p className="text-manzana-mid text-sm mb-6">
            Podemos entrenar esta posición en una sesión.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-4 bg-manzana-accent text-manzana-black font-semibold text-sm tracking-wide hover:bg-manzana-white transition-colors"
          >
            AGENDAR SESIÓN
          </a>
          <p className="mt-4">
            <a href="/diagnostico" className="text-manzana-accent hover:text-manzana-white text-sm transition-colors">
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
