import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resistencia pasiva: el enemigo invisible — MANZANA',
  description: 'Nadie te dice que no, pero nada se mueve. Como exponer la friccion invisible que te desgasta cada semana y recuperar traccion.',
  openGraph: {
    title: 'Resistencia pasiva: el enemigo invisible',
    description: 'Nadie te dice que no, pero nada se mueve.',
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
            <span className="text-manzana-accent text-xs font-mono">FRICCION</span>
            <span className="text-manzana-mid/40 text-xs">·</span>
            <span className="text-manzana-mid/40 text-xs">6 min</span>
            <span className="text-manzana-mid/40 text-xs">·</span>
            <span className="text-manzana-mid/40 text-xs">Mar 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-manzana-white leading-tight mb-6">
            Resistencia pasiva: el enemigo invisible
          </h1>
          <p className="text-xl text-manzana-mid leading-relaxed">
            Nadie te dice que no, pero nada se mueve. No hay confrontacion, no hay conflicto abierto, no hay responsables claros. Solo silencio, retrasos y &quot;ahorita lo vemos&quot;.
          </p>
        </div>

        {/* Imagen */}
        <div className="mb-12">
          <img
            src="/blog-resistencia-pasiva.png"
            alt="Figura empujando contra una pared invisible en oficina oscura — resistencia pasiva"
            className="w-full aspect-video object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="prose prose-invert max-w-none space-y-8">
          <div className="h-px bg-white/5" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">La posicion</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              En jiu-jitsu, el rival no ataca — te inmoviliza. Te cansa sin gastar energia. En una empresa pasa igual: te dicen &quot;si, suena bien&quot;, pero las tareas no avanzan, las juntas acaban sin acuerdos y todo depende de que tu empujes.
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              No es incompetencia. Es resistencia sin costo visible. Y eso es lo que la hace tan peligrosa.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Como se presenta</h2>
            <ul className="space-y-2 text-manzana-light/80">
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Te dicen &quot;si&quot;, pero no ejecutan.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Las tareas no avanzan si no persigues.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Las juntas acaban sin acuerdos claros.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Todo depende de ti empujar.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">El dano real</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              Lentitud cronica. Desgaste personal por empujar solo. La mediocridad operativa se normaliza. Y lo peor: el sistema aprende que puede no moverse porque tu siempre compensas.
            </p>
            <p className="text-manzana-light/80 leading-relaxed font-medium">
              Aqui no pierdes por KO. Pierdes por agotamiento.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Por que seguir empujando no funciona</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              Porque la resistencia pasiva no se rompe sola. Y porque seguir empujando refuerza el patron: el sistema aprende que tu compensas lo que el deberia resolver.
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              En jiu-jitsu, si empujas sin angulo, te quedas pegado.
            </p>
          </div>

          <div className="border border-manzana-accent/20 p-8 my-12">
            <p className="text-manzana-accent text-sm font-mono mb-4">LOS 3 MOVIMIENTOS</p>
            <div className="space-y-8">
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">1. Exponer la friccion invisible</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  Nombra el patron, no a la persona: &quot;Esto se ha intentado tres veces y no avanzo.&quot; Nombra el efecto: &quot;Nos esta atrasando X semanas.&quot; Devuelve el peso: &quot;Quien es dueno de que esto avance?&quot;
                </p>
                <p className="text-manzana-mid/60 text-sm mt-2">No acusas. Iluminas.</p>
              </div>
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">2. Forzar decision</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  Cierra opciones: &quot;O hacemos A o dejamos explicito que no se hace.&quot; Pon deadline: &quot;Si el viernes no hay respuesta, asumo B.&quot; Separa consenso de avance: &quot;No necesitamos estar de acuerdo para movernos.&quot;
                </p>
                <p className="text-manzana-mid/60 text-sm mt-2">El sistema empieza a cansarse de no decidir.</p>
              </div>
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">3. Cerrar minimo viable</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  Asigna dueno explicito. Define version minima: &quot;Esto es lo minimo que si vamos a hacer.&quot; Una sola fuente de verdad donde vive lo acordado. Cierra con recap: que si, que no, cuando se revisa.
                </p>
                <p className="text-manzana-mid/60 text-sm mt-2">Si el minimo avanza, rompiste la resistencia. Si ni eso se sostiene, ya no es pasiva: es bloqueo.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Ensenanza Manzana</h2>
            <div className="text-manzana-light text-lg leading-relaxed space-y-2">
              <p>La resistencia pasiva no se vence empujando mas fuerte.</p>
              <p>Se vence quitandole invisibilidad y costo.</p>
              <p className="text-manzana-mid/60 mt-4">
                Primero expones.<br />
                Luego fuerzas decision.<br />
                Solo entonces recuperas movimiento.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 border border-manzana-accent/20 p-8 text-center">
          <p className="text-manzana-white font-semibold mb-2">Tu equipo esta atorado sin decirte que no?</p>
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
