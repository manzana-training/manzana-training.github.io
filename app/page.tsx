export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-manzana-white leading-[1.1] mb-8">
            Entrenamiento ejecutivo<br />
            <span className="text-manzana-accent">bajo presión.</span>
          </h1>
          <p className="text-xl md:text-2xl text-manzana-mid leading-relaxed mb-4">
            Simulaciones prácticas para líderes, founders y equipos que necesitan actuar ahora, no reflexionar seis meses.
          </p>
          <p className="text-lg text-manzana-mid/70 mb-12">
            No sales motivado. Sales entrenado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-manzana-accent text-manzana-black font-semibold text-sm tracking-wide hover:bg-manzana-white transition-colors"
            >
              AGENDAR SESIÓN
            </a>
            <a
              href="/diagnostico"
              className="inline-flex items-center justify-center px-8 py-4 border border-manzana-accent/30 text-manzana-accent font-medium text-sm tracking-wide hover:border-manzana-accent hover:text-manzana-white transition-colors"
            >
              HAZ EL DIAGNÓSTICO
            </a>
            <a
              href="/metodologia"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/10 text-manzana-light font-medium text-sm tracking-wide hover:border-white/30 transition-colors"
            >
              CÓMO FUNCIONA
            </a>
          </div>
        </div>
      </section>

      {/* Linea */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-white/5" />
      </div>

      {/* Que es */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-manzana-accent text-sm font-mono mb-4">QUÉ HACEMOS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-manzana-white mb-8">
            La cultura no aparece cuando todo va bien.<br />
            Aparece cuando todo arde.
          </h2>
          <div className="space-y-6 text-manzana-light/80 text-lg leading-relaxed">
            <p>
              MANZANA no es consultoría. No es coaching. No es un programa de liderazgo de 12 meses.
            </p>
            <p>
              Es un sistema de entrenamiento de reflejos bajo presión. Como defensa personal, pero para decisiones de negocio.
            </p>
            <p>
              Entrenamos con posiciones reales, principios simples, drills de repetición y evaluación por resultado. No por discurso.
            </p>
          </div>
        </div>
      </section>

      {/* Que obtienes */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-manzana-accent text-sm font-mono mb-8">QUÉ OBTIENES</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Claridad para decidir',
              desc: 'Cuando los datos no alcanzan y esperar no es opción.',
            },
            {
              title: 'Menos fricción',
              desc: 'Mecanismos de cierre que el equipo puede usar sin depender de ti.',
            },
            {
              title: 'Criterio compartido',
              desc: 'Lenguaje común para actuar cuando todo importa.',
            },
            {
              title: 'Velocidad real',
              desc: 'Decisiones que se cierran en minutos, no en semanas de juntas.',
            },
            {
              title: 'Reflejos entrenados',
              desc: '15 drills que cubren el 68% de las situaciones críticas.',
            },
            {
              title: 'Resultados en semanas',
              desc: 'Sin procesos eternos. Sin dependencias. Sin acompañamiento infinito.',
            },
          ].map((item, i) => (
            <div key={i} className="border border-white/5 p-6 hover:border-manzana-accent/20 transition-colors">
              <h3 className="text-manzana-white font-semibold mb-2">{item.title}</h3>
              <p className="text-manzana-mid text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Posiciones preview */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-manzana-accent text-sm font-mono mb-4">12 POSICIONES</p>
        <h2 className="text-3xl md:text-4xl font-bold text-manzana-white mb-4">
          Escenarios reales. No teoría.
        </h2>
        <p className="text-manzana-mid text-lg mb-12 max-w-2xl">
          Cada posición es una configuración de presión que se repite en empresas reales. No dependen de industria. Se entrenan en una sesión.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { num: '01', name: 'Cerrar sin aplausos', block: 'CIERRE' },
            { num: '02', name: 'Aguantar el plan', block: 'CIERRE' },
            { num: '03', name: 'Cubrir al nuevo', block: 'APRENDIZAJE EN FUEGO' },
            { num: '06', name: 'Cortar la infección', block: 'CONTAMINACIÓN' },
            { num: '08', name: 'Parar la sangría', block: 'FRICCIÓN' },
            { num: '11', name: 'Oxígeno o muerte', block: 'SUPERVIVENCIA' },
          ].map((pos, i) => (
            <div key={i} className="flex items-center gap-4 border border-white/5 p-5 hover:border-manzana-accent/20 transition-colors group">
              <span className="text-manzana-accent font-mono text-sm">{pos.num}</span>
              <div>
                <p className="text-manzana-white font-medium group-hover:text-manzana-accent transition-colors">{pos.name}</p>
                <p className="text-manzana-mid/60 text-xs font-mono">{pos.block}</p>
              </div>
            </div>
          ))}
        </div>
        <a href="/metodologia" className="inline-flex items-center gap-2 text-manzana-accent text-sm mt-8 hover:text-manzana-white transition-colors">
          Ver las 12 posiciones →
        </a>
      </section>

      {/* CTA final */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="border border-manzana-accent/20 p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-manzana-white mb-4">
            Actúa.
          </h2>
          <p className="text-manzana-mid text-lg mb-8">
            Elimina lo que te impide actuar.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-manzana-accent text-manzana-black font-semibold text-sm tracking-wide hover:bg-manzana-white transition-colors"
            >
              AGENDAR SESIÓN
            </a>
            <a
              href="/diagnostico"
              className="inline-flex items-center justify-center px-8 py-4 border border-manzana-accent/30 text-manzana-accent font-medium text-sm tracking-wide hover:border-manzana-accent hover:text-manzana-white transition-colors"
            >
              HAZ EL DIAGNÓSTICO
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
