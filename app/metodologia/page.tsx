import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Metodologia — MANZANA',
  description: 'Sistema de entrenamiento basado en jiu-jitsu: posiciones reales, principios simples, drills de repeticion. 12 escenarios que cubren el 68% de las situaciones criticas en empresas.',
}

const posiciones = [
  {
    block: 'CIERRE',
    blockDesc: 'Cuando alguien tiene que cerrar aunque duela',
    items: [
      { num: '01', name: 'Cerrar sin aplausos', desc: 'Tomar y sostener una decision impopular que debe ocurrir.', phrase: 'Alguien tiene que cerrar.' },
      { num: '02', name: 'Aguantar el plan', desc: 'La decision es correcta, pero el negocio no tiene paciencia.', phrase: 'No cambiar por ansiedad.' },
    ]
  },
  {
    block: 'APRENDIZAJE EN FUEGO',
    blockDesc: 'Gente con potencial bajo presion real',
    items: [
      { num: '03', name: 'Cubrir al nuevo', desc: 'Proteger y guiar a un manager nuevo mientras aprende en vivo.', phrase: 'Dar margen sin perder control.' },
      { num: '04', name: 'Resetear sin quebrar', desc: 'Corregir una mala decision sin matar confianza ni carrera.', phrase: 'Un error no define a una persona.' },
      { num: '05', name: 'Soltar el lastre', desc: 'Cuando no hay fit y sostenerlo cuesta mas que cortar.', phrase: 'Decidir con humanidad, no con esperanza.' },
    ]
  },
  {
    block: 'CONTAMINACION',
    blockDesc: 'Lo toxico que se propaga sin hacer ruido',
    items: [
      { num: '06', name: 'Cortar la infeccion', desc: 'Una persona contamina mas que diez desmotivadas.', phrase: 'El talento no compensa el dano.' },
      { num: '07', name: 'Encender el minimo viable', desc: 'Equipo apatico: hacen lo minimo, cero ownership.', phrase: 'El cheque no es cultura.' },
    ]
  },
  {
    block: 'FRICCION',
    blockDesc: 'Cuando el sistema no responde y tu cargas todo',
    items: [
      { num: '08', name: 'Parar la sangria', desc: 'Errores repetidos, hablar no sirve, sin supervision nada sale.', phrase: 'Menos discurso, mas sistema.' },
      { num: '09', name: 'Romper la burocracia precoz', desc: 'Juntitis, lentitud, proceso corporativo en empresa chica.', phrase: 'Moverse como startup, no como dinosaurio.' },
    ]
  },
  {
    block: 'OPACIDAD',
    blockDesc: 'Cuando la informacion es poder y el miedo gobierna',
    items: [
      { num: '10', name: 'Romper el monopolio', desc: 'Info secuestrada, paranoia, silencio, managers desconectados.', phrase: 'La opacidad no es control.' },
    ]
  },
  {
    block: 'SUPERVIVENCIA',
    blockDesc: 'Cuando ya no hay margen, solo ejecucion',
    items: [
      { num: '11', name: 'Oxigeno o muerte', desc: 'Meses de vida: caja, rentabilidad, KPIs rojos.', phrase: 'Primero sobrevivir, luego mejorar.' },
      { num: '12', name: 'Decir no al dinero', desc: 'No hay aumentos ni crecimiento: expectativas vs realidad.', phrase: 'Decir la verdad sin perder a la gente clave.' },
    ]
  },
]

export default function Metodologia() {
  return (
    <div className="min-h-screen">
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <p className="text-manzana-accent text-sm font-mono mb-4">METODOLOGIA</p>
        <h1 className="text-4xl md:text-5xl font-bold text-manzana-white mb-6">
          Como defensa personal,<br />pero para liderazgo.
        </h1>
        <p className="text-xl text-manzana-mid max-w-2xl leading-relaxed">
          En jiu-jitsu, el objetivo no es ser virtuoso: es sobrevivir, salir, controlar, cerrar. MANZANA usa exactamente esa logica en el mundo laboral.
        </p>
      </section>

      {/* Arquitectura */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-white/5 p-8">
            <p className="text-manzana-accent text-sm font-mono mb-3">CAPA A</p>
            <h3 className="text-2xl font-bold text-manzana-white mb-3">Posiciones</h3>
            <p className="text-manzana-mid leading-relaxed">
              12 configuraciones tipicas de presion. Esto es lo que el cliente compra: &quot;Estoy en X situacion y me urge salir.&quot;
            </p>
          </div>
          <div className="border border-white/5 p-8">
            <p className="text-manzana-accent text-sm font-mono mb-3">CAPA B</p>
            <h3 className="text-2xl font-bold text-manzana-white mb-3">Drills</h3>
            <p className="text-manzana-mid leading-relaxed">
              15 reflejos entrenables. Esto es como entrenamos por dentro. Un escenario se resuelve con 2-4 drills.
            </p>
          </div>
        </div>
      </section>

      {/* Las 12 posiciones */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-manzana-accent text-sm font-mono mb-4">LAS 12 POSICIONES</p>
        <h2 className="text-3xl font-bold text-manzana-white mb-12">
          Escenarios que cubren el 68% de los casos reales.
        </h2>

        <div className="space-y-16">
          {posiciones.map((block, bi) => (
            <div key={bi}>
              <div className="mb-6">
                <h3 className="text-manzana-accent font-mono text-sm">{block.block}</h3>
                <p className="text-manzana-mid/60 text-sm">{block.blockDesc}</p>
              </div>
              <div className="space-y-3">
                {block.items.map((pos, pi) => (
                  <div key={pi} className="border border-white/5 p-6 hover:border-manzana-accent/20 transition-colors">
                    <div className="flex items-start gap-4">
                      <span className="text-manzana-accent font-mono text-sm mt-1">{pos.num}</span>
                      <div>
                        <h4 className="text-manzana-white font-semibold text-lg">{pos.name}</h4>
                        <p className="text-manzana-mid mt-1">{pos.desc}</p>
                        <p className="text-manzana-mid/50 text-sm mt-2 italic">&quot;{pos.phrase}&quot;</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formato */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-manzana-accent text-sm font-mono mb-4">FORMATO DE SESION</p>
        <h2 className="text-3xl font-bold text-manzana-white mb-8">
          Estructura fija. Repetible. Sin depender de carisma.
        </h2>
        <div className="space-y-4">
          {[
            { step: '01', name: 'Senales', desc: 'Como sabes que estas en esa posicion.' },
            { step: '02', name: 'Errores instintivos', desc: 'Lo que la gente hace mal por default.' },
            { step: '03', name: 'Frames', desc: '3-5 reglas simples que te protegen.' },
            { step: '04', name: 'Drills', desc: 'Practica guiada con simulacion y correccion.' },
            { step: '05', name: 'Salida', desc: 'Decision concreta + checklist operativo.' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-6 border border-white/5 p-5">
              <span className="text-manzana-accent font-mono text-sm">{s.step}</span>
              <div>
                <p className="text-manzana-white font-medium">{s.name}</p>
                <p className="text-manzana-mid text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="border border-manzana-accent/20 p-12 text-center">
          <p className="text-2xl text-manzana-white font-bold mb-3">Una sesion. Un problema real. Sin discurso.</p>
          <p className="text-manzana-mid mb-8">Resultados en semanas, no en trimestres.</p>
          <a
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-4 bg-manzana-accent text-manzana-black font-semibold text-sm tracking-wide hover:bg-manzana-white transition-colors"
          >
            AGENDAR SESION
          </a>
        </div>
      </section>
    </div>
  )
}
