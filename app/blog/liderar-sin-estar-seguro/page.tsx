import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Liderar sin estar seguro — MANZANA',
  description: 'Liderazgo no es certeza. Es dar direccion suficiente mientras el sistema aprende. Tres movimientos para cuando dudas pero el equipo necesita rumbo.',
  openGraph: {
    title: 'Liderar sin estar seguro',
    description: 'Liderazgo no es certeza. Es direccion suficiente.',
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
            <span className="text-manzana-accent text-xs font-mono">LIDERAZGO</span>
            <span className="text-manzana-mid/40 text-xs">·</span>
            <span className="text-manzana-mid/40 text-xs">5 min</span>
            <span className="text-manzana-mid/40 text-xs">·</span>
            <span className="text-manzana-mid/40 text-xs">Mar 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-manzana-white leading-tight mb-6">
            Liderar sin estar seguro
          </h1>
          <p className="text-xl text-manzana-mid leading-relaxed">
            Tienes que dar direccion, pero no estas seguro. La informacion es incompleta, el contexto cambia y aun asi el equipo te mira esperando rumbo.
          </p>
        </div>

        {/* Imagen */}
        <div className="mb-12">
          <img
            src="/blog-liderar-sin-estar-seguro.png"
            alt="Figura solitaria en un puente sobre la oscuridad con linterna tenue — liderar sin certeza"
            className="w-full aspect-video object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="prose prose-invert max-w-none space-y-8">
          <div className="h-px bg-white/5" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">La posicion</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              En jiu-jitsu, no ves todo el tablero, pero si no mueves, te pasan guardia. En una empresa pasa igual: si no das rumbo, alguien mas lo dara — y probablemente peor.
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              El problema no es que dudes. El problema es que la duda te paralice.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Como se presenta</h2>
            <ul className="space-y-2 text-manzana-light/80">
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Decisiones con datos parciales.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Ambiguedad tecnica o de mercado.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Presion por &quot;definir ya&quot;.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Miedo a equivocarte frente al equipo.</span>
              </li>
            </ul>
            <p className="text-manzana-mid/60 text-sm italic">
              Misma posicion: la duda es tuya, la responsabilidad tambien.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">El dano real</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              Paralisis. Mensajes contradictorios. Perdida de confianza del equipo. Decisiones tomadas por inercia o politica en lugar de por criterio.
            </p>
            <p className="text-manzana-light/80 leading-relaxed font-medium">
              Aqui se pierde por inmovilidad.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">La trampa de la certeza</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              Esperamos estar seguros para actuar. Pero la certeza no llega. Y mientras esperas, el equipo interpreta tu silencio como falta de rumbo, o peor — como falta de capacidad.
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              Liderazgo no es saber. Es dar direccion suficiente mientras el sistema aprende.
            </p>
          </div>

          <div className="border border-manzana-accent/20 p-8 my-12">
            <p className="text-manzana-accent text-sm font-mono mb-4">LOS 3 MOVIMIENTOS</p>
            <div className="space-y-8">
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">1. Anclar</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  Nombra lo que si sabes. Nombra lo que no sabes, sin dramatizar. Define un horizonte corto: &quot;Esto es lo valido por 2 semanas.&quot; Separa la decision de la verdad absoluta.
                </p>
                <p className="text-manzana-mid/60 text-sm mt-2">No prometes certeza. Prometes estabilidad.</p>
              </div>
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">2. Dar direccion suficiente</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  Cierra opciones a A o B. Asigna dueno explicito. Define version minima que avanza. Pon deadline explicito. El equipo deja de debatir y empieza a ejecutar.
                </p>
                <p className="text-manzana-mid/60 text-sm mt-2">Suficiente no es perfecto. Es lo minimo para que el sistema se mueva.</p>
              </div>
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">3. Reabrir controlado</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  Reabrir por criterio, no por miedo. Nombrar el aprendizaje explicito: &quot;Esto nos enseno X.&quot; Ajustar sin pedir perdon de mas. Cerrar con recap.
                </p>
                <p className="text-manzana-mid/60 text-sm mt-2">Corriges sin verte erratico. La correccion planeada es senal de liderazgo, no de debilidad.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Ensenanza Manzana</h2>
            <div className="text-manzana-light text-lg leading-relaxed space-y-2">
              <p>Liderar no es saber.</p>
              <p>Es dar direccion suficiente mientras el sistema aprende.</p>
              <p className="text-manzana-mid/60 mt-4">
                Primero anclas.<br />
                Luego mueves.<br />
                Despues corriges.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 border border-manzana-accent/20 p-8 text-center">
          <p className="text-manzana-white font-semibold mb-2">Estas liderando sin brujula?</p>
          <p className="text-manzana-mid text-sm mb-6">Podemos entrenar esta posicion en una sesion.</p>
          <a href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-manzana-accent text-manzana-black font-semibold text-sm tracking-wide hover:bg-manzana-white transition-colors">
            AGENDAR SESION
          </a>
        </div>

        <div className="mt-12">
          <a href="/blog" className="text-manzana-mid hover:text-manzana-accent text-sm transition-colors">← Volver al blog</a>
        </div>
      </div>
    </article>
  )
}
