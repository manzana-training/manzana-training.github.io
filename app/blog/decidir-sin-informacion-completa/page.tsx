import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Decidir sin informacion completa — MANZANA',
  description: 'No decides cuando sabes. Decides cuando el costo de no decidir ya es mayor. Tres movimientos para cerrar cuando los datos no alcanzan.',
  openGraph: {
    title: 'Decidir sin informacion completa',
    description: 'Tres movimientos para cerrar cuando los datos no alcanzan.',
    type: 'article',
  },
}

export default function Post() {
  return (
    <article className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-manzana-accent text-xs font-mono">DECISION</span>
            <span className="text-manzana-mid/40 text-xs">·</span>
            <span className="text-manzana-mid/40 text-xs">5 min</span>
            <span className="text-manzana-mid/40 text-xs">·</span>
            <span className="text-manzana-mid/40 text-xs">Mar 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-manzana-white leading-tight mb-6">
            Decidir sin informacion completa
          </h1>
          <p className="text-xl text-manzana-mid leading-relaxed">
            Tienes que decidir y los datos estan incompletos, llegan tarde o se contradicen. Esperar mas informacion no garantiza nada, pero decidir ahora expone. Bienvenido a la posicion mas comun del liderazgo real.
          </p>
        </div>

        {/* Imagen */}
        <div className="mb-12">
          <img
            src="/blog-decidir-sin-info.png"
            alt="Persona frente a dos caminos en un corredor oscuro — decidir bajo presion"
            className="w-full aspect-video object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="prose prose-invert max-w-none space-y-8">
          <div className="h-px bg-white/5" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">La trampa</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              En jiu-jitsu, no ves todo el cuerpo del rival, pero si no mueves, te barren. En una empresa pasa lo mismo: no decidir tambien es decidir. Y casi siempre es la peor decision.
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              El problema no es la falta de datos. El problema es que esperamos que los datos nos quiten el miedo. Y eso no va a pasar.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Como se presenta</h2>
            <ul className="space-y-2 text-manzana-light/80">
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Metricas parciales o poco confiables.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Opiniones fuertes con datos debiles.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Presion por &quot;esperar tantito mas&quot;.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Decisiones heredadas sin contexto.</span>
              </li>
            </ul>
            <p className="text-manzana-mid/60 text-sm italic">
              Misma posicion: incertidumbre estructural.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">El dano real</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              Paralisis por analisis. Decisiones tomadas por otros (politica). Ventanas de oportunidad perdidas. Falsa sensacion de prudencia.
            </p>
            <p className="text-manzana-light/80 leading-relaxed font-medium">
              Aqui se pierde por inaccion elegante.
            </p>
          </div>

          <div className="border border-manzana-accent/20 p-8 my-12">
            <p className="text-manzana-accent text-sm font-mono mb-4">LOS 3 MOVIMIENTOS</p>
            <div className="space-y-8">
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">1. Fijar umbral</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  Define que informacion es suficiente, no perfecta. Separa lo critico de lo deseable. Cierra la recoleccion de datos en un punto explicito. Nombra lo que estas ignorando conscientemente.
                </p>
                <p className="text-manzana-mid/60 text-sm mt-2">No buscas certeza. Buscas base minima.</p>
              </div>
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">2. Asumir riesgo explicito</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  Nombra el riesgo principal (uno, no cinco). Nombra el costo de equivocarte. Di en voz alta que haras si sale mal. Despersonaliza el error futuro.
                </p>
                <p className="text-manzana-mid/60 text-sm mt-2">El miedo deja de ser abstracto.</p>
              </div>
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">3. Cerrar decision reversible</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  Define horizonte de revision. Cierra version minima ejecutable. Asigna dueno explicito. Cierra con recap: decision, riesgo asumido, cuando se revisa.
                </p>
                <p className="text-manzana-mid/60 text-sm mt-2">La decision queda tomada y contenida.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Ensenanza Manzana</h2>
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
            Esta situacion te suena?
          </p>
          <p className="text-manzana-mid text-sm mb-6">
            Podemos entrenarla en una sesion.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-4 bg-manzana-accent text-manzana-black font-semibold text-sm tracking-wide hover:bg-manzana-white transition-colors"
          >
            AGENDAR SESION
          </a>
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
