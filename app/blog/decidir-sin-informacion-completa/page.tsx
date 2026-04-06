import type { Metadata } from 'next'

const BASE_URL = 'https://manzana-training.github.io'
const SLUG = 'decidir-sin-informacion-completa'
const TITLE = 'Decidir sin información completa'
const DESCRIPTION = 'No decides cuando sabes. Decides cuando el costo de no decidir ya es mayor. Tres movimientos para cerrar cuando los datos no alcanzan.'
const IMAGE = `${BASE_URL}/blog-decidir-sin-info.png`
const DATE = '2026-03-24'

export const metadata: Metadata = {
  title: `${TITLE} — MANZANA`,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: 'Tres movimientos para cerrar cuando los datos no alcanzan.',
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
            <span className="text-manzana-accent text-xs font-mono">DECISIÓN</span>
            <span className="text-manzana-mid/40 text-xs">·</span>
            <span className="text-manzana-mid/40 text-xs">5 min</span>
            <span className="text-manzana-mid/40 text-xs">·</span>
            <span className="text-manzana-mid/40 text-xs">Mar 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-manzana-white leading-tight mb-6">
            Decidir sin información completa
          </h1>
          <p className="text-xl text-manzana-mid leading-relaxed">
            Tienes que decidir y los datos están incompletos, llegan tarde o se contradicen. Esperar más información no garantiza nada, pero decidir ahora expone. Bienvenido a la posición más común del liderazgo real.
          </p>
        </div>

        {/* Imagen */}
        <div className="mb-12">
          <img
            src="/blog-decidir-sin-info.png"
            alt="Persona frente a dos caminos en un corredor oscuro — decidir bajo presión"
            className="w-full aspect-video object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="prose prose-invert max-w-none space-y-8">
          <div className="h-px bg-white/5" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">La trampa</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              En jiu-jitsu, no ves todo el cuerpo del rival, pero si no mueves, te barren. En una empresa pasa lo mismo: no decidir también es decidir. Y casi siempre es la peor decisión.
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              El problema no es la falta de datos. El problema es que esperamos que los datos nos quiten el miedo. Y eso no va a pasar.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Cómo se presenta</h2>
            <ul className="space-y-2 text-manzana-light/80">
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Métricas parciales o poco confiables.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Opiniones fuertes con datos débiles.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Presión por &quot;esperar tantito más&quot;.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Decisiones heredadas sin contexto.</span>
              </li>
            </ul>
            <p className="text-manzana-mid/60 text-sm italic">
              Misma posición: incertidumbre estructural.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">El daño real</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              Parálisis por análisis. Decisiones tomadas por otros (política). Ventanas de oportunidad perdidas. Falsa sensación de prudencia.
            </p>
            <p className="text-manzana-light/80 leading-relaxed font-medium">
              Aquí se pierde por inacción elegante.
            </p>
          </div>

          <div className="border border-manzana-accent/20 p-8 my-12">
            <p className="text-manzana-accent text-sm font-mono mb-4">LOS 3 MOVIMIENTOS</p>
            <div className="space-y-8">
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">1. Fijar umbral</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  Define qué información es suficiente, no perfecta. Separa lo crítico de lo deseable. Cierra la recolección de datos en un punto explícito. Nombra lo que estás ignorando conscientemente.
                </p>
                <p className="text-manzana-mid/60 text-sm mt-2">No buscas certeza. Buscas base mínima.</p>
              </div>
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">2. Asumir riesgo explícito</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  Nombra el riesgo principal (uno, no cinco). Nombra el costo de equivocarte. Di en voz alta qué harás si sale mal. Despersonaliza el error futuro.
                </p>
                <p className="text-manzana-mid/60 text-sm mt-2">El miedo deja de ser abstracto.</p>
              </div>
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">3. Cerrar decisión reversible</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  Define horizonte de revisión. Cierra versión mínima ejecutable. Asigna dueño explícito. Cierra con recap: decisión, riesgo asumido, cuándo se revisa.
                </p>
                <p className="text-manzana-mid/60 text-sm mt-2">La decisión queda tomada y contenida.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Enseñanza Manzana</h2>
            <div className="text-manzana-light text-lg leading-relaxed space-y-2">
              <p>No decides cuando sabes.</p>
              <p>Decides cuando el costo de no decidir ya es mayor.</p>
              <p className="text-manzana-mid/60 mt-4">
                Primero fijas umbral.<br />
                Luego asumes riesgo.<br />
                Solo entonces cierras.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 border border-manzana-accent/20 p-8 text-center">
          <p className="text-manzana-white font-semibold mb-2">
            ¿Esta situación te suena?
          </p>
          <p className="text-manzana-mid text-sm mb-6">
            Podemos entrenarla en una sesión.
          </p>
          <a
            href="/contacto"
            data-track="clic_contacto"
            data-track-label="blog-decidir-sin-info"
            className="inline-flex items-center justify-center px-8 py-4 bg-manzana-accent text-manzana-black font-semibold text-sm tracking-wide hover:bg-manzana-white transition-colors"
          >
            AGENDAR SESIÓN
          </a>
          <p className="mt-4">
            <a href="/diagnostico" data-track="clic_diagnostico" data-track-label="blog-decidir-sin-info" className="text-manzana-accent hover:text-manzana-white text-sm transition-colors">
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
