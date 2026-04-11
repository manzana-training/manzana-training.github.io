import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Metodología — MANZANA',
  description:
    'Sistema de entrenamiento basado en jiu-jitsu: posiciones reales, principios simples, drills de repetición. 12 escenarios que cubren el 68% de las situaciones críticas en empresas.',
}

const posiciones = [
  {
    block: 'Cierre',
    blockDesc: 'Cuando alguien tiene que cerrar aunque duela',
    items: [
      { num: '01', name: 'Cerrar sin aplausos', desc: 'Tomar y sostener una decisión impopular que debe ocurrir.', phrase: 'Alguien tiene que cerrar.' },
      { num: '02', name: 'Aguantar el plan', desc: 'La decisión es correcta, pero el negocio no tiene paciencia.', phrase: 'No cambiar por ansiedad.' },
    ],
  },
  {
    block: 'Aprendizaje en fuego',
    blockDesc: 'Gente con potencial bajo presión real',
    items: [
      { num: '03', name: 'Cubrir al nuevo', desc: 'Proteger y guiar a un manager nuevo mientras aprende en vivo.', phrase: 'Dar margen sin perder control.' },
      { num: '04', name: 'Resetear sin quebrar', desc: 'Corregir una mala decisión sin matar confianza ni carrera.', phrase: 'Un error no define a una persona.' },
      { num: '05', name: 'Soltar el lastre', desc: 'Cuando no hay fit y sostenerlo cuesta más que cortar.', phrase: 'Decidir con humanidad, no con esperanza.' },
    ],
  },
  {
    block: 'Contaminación',
    blockDesc: 'Lo tóxico que se propaga sin hacer ruido',
    items: [
      { num: '06', name: 'Cortar la infección', desc: 'Una persona contamina más que diez desmotivadas.', phrase: 'El talento no compensa el daño.' },
      { num: '07', name: 'Encender el mínimo viable', desc: 'Equipo apático: hacen lo mínimo, cero ownership.', phrase: 'El cheque no es cultura.' },
    ],
  },
  {
    block: 'Fricción',
    blockDesc: 'Cuando el sistema no responde y tú cargas todo',
    items: [
      { num: '08', name: 'Parar la sangría', desc: 'Errores repetidos, hablar no sirve, sin supervisión nada sale.', phrase: 'Menos discurso, más sistema.' },
      { num: '09', name: 'Romper la burocracia precoz', desc: 'Juntitis, lentitud, proceso corporativo en empresa chica.', phrase: 'Moverse como startup, no como dinosaurio.' },
    ],
  },
  {
    block: 'Opacidad',
    blockDesc: 'Cuando la información es poder y el miedo gobierna',
    items: [
      { num: '10', name: 'Romper el monopolio', desc: 'Info secuestrada, paranoia, silencio, managers desconectados.', phrase: 'La opacidad no es control.' },
    ],
  },
  {
    block: 'Supervivencia',
    blockDesc: 'Cuando ya no hay margen, solo ejecución',
    items: [
      { num: '11', name: 'Oxígeno o muerte', desc: 'Meses de vida: caja, rentabilidad, KPIs rojos.', phrase: 'Primero sobrevivir, luego mejorar.' },
      { num: '12', name: 'Decir no al dinero', desc: 'No hay aumentos ni crecimiento: expectativas vs realidad.', phrase: 'Decir la verdad sin perder a la gente clave.' },
    ],
  },
]

export default function Metodologia() {
  return (
    <div className="mz-page">
      <section className="page-head" data-num="04">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">04 — Metodología</div>
          <div className="col-body">
            <h1 className="page-head-title reveal">
              Como defensa personal, pero para liderazgo.
            </h1>
            <p className="page-head-lead reveal">
              En jiu-jitsu, el objetivo no es ser virtuoso: es sobrevivir,
              salir, controlar, cerrar. MANZANA usa exactamente esa lógica en
              el mundo laboral.
            </p>
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Arquitectura</div>
          <div className="col-body">
            <div className="mz-block-row reveal">
              <div className="mz-block-num">A</div>
              <div className="mz-block-content">
                <h3>Posiciones</h3>
                <p>
                  12 configuraciones típicas de presión que se repiten en
                  empresas reales. Cada una se entrena en una sesión.
                </p>
              </div>
            </div>
            <div className="mz-block-row reveal">
              <div className="mz-block-num">B</div>
              <div className="mz-block-content">
                <h3>Drills</h3>
                <p>
                  15 reflejos entrenables bajo presión. Cada escenario se
                  resuelve con 2-4 drills de repetición guiada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Las 12 posiciones</div>
          <div className="col-body">
            <h2 className="mz-section-title reveal">
              Escenarios que cubren el 68% de los casos reales.
            </h2>
            {posiciones.map((block, bi) => (
              <div className="mz-block-group reveal" key={bi}>
                <div className="mz-block-group-head">
                  <div className="mz-block-group-name">{block.block}</div>
                  <div className="mz-block-group-desc">{block.blockDesc}</div>
                </div>
                {block.items.map((pos) => (
                  <div className="mz-block-row" key={pos.num}>
                    <div className="mz-block-num">{pos.num}</div>
                    <div className="mz-block-content">
                      <h3>{pos.name}</h3>
                      <p>{pos.desc}</p>
                      <p className="phrase">&quot;{pos.phrase}&quot;</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Formato de sesión</div>
          <div className="col-body">
            <h2 className="mz-section-title reveal">
              Estructura fija. Repetible. Sin depender de carisma.
            </h2>
            {[
              { num: '01', title: 'Señales', desc: 'Cómo sabes que estás en esa posición.' },
              { num: '02', title: 'Errores instintivos', desc: 'Lo que la gente hace mal por default.' },
              { num: '03', title: 'Frames', desc: '3-5 reglas simples que te protegen.' },
              { num: '04', title: 'Drills', desc: 'Práctica guiada con simulación y corrección.' },
              { num: '05', title: 'Salida', desc: 'Decisión concreta + checklist operativo.' },
            ].map((s) => (
              <div className="mz-block-row reveal" key={s.num}>
                <div className="mz-block-num">{s.num}</div>
                <div className="mz-block-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Cómo contratar</div>
          <div className="col-body">
            <h2 className="mz-section-title reveal">
              Tres formatos. Un mismo sistema.
            </h2>
            <p className="mz-section-lead reveal">
              Elige según tu situación. Sin compromiso largo. Sin procesos
              eternos. Siempre partimos de un diagnóstico para recomendarte el
              formato que hace sentido.
            </p>
            <div className="mz-tiers">
              <div className="mz-tier reveal">
                <div className="mz-tier-tag">Entrada</div>
                <div className="mz-tier-name">Drill MANZANA</div>
                <p className="mz-tier-desc">
                  Una sesión enfocada en una situación crítica. Entrenamiento
                  práctico con simulación y corrección en vivo.
                </p>
                <ul className="mz-tier-bullets">
                  <li>40–50 minutos</li>
                  <li>Online o presencial</li>
                  <li>Hasta 10 participantes</li>
                  <li>1 situación, 1 drill, 1 entregable</li>
                </ul>
                <p className="mz-tier-note">
                  Ideal para probar MANZANA o resolver un problema puntual.
                </p>
              </div>

              <div className="mz-tier reveal">
                <div className="mz-tier-tag">Core</div>
                <div className="mz-tier-name">Bloque MANZANA</div>
                <p className="mz-tier-desc">
                  Tres sesiones enfocadas según diagnóstico. Entrenamiento
                  progresivo sobre un bloque completo de situaciones.
                </p>
                <ul className="mz-tier-bullets">
                  <li>3 sesiones de 40–50 minutos</li>
                  <li>Online o presencial</li>
                  <li>Diagnóstico previo incluido</li>
                  <li>3 situaciones conectadas, 3 entregables</li>
                </ul>
                <p className="mz-tier-note">
                  Ideal para equipos de liderazgo, áreas completas u offsites.
                </p>
              </div>

              <div className="mz-tier reveal">
                <div className="mz-tier-tag">Premium</div>
                <div className="mz-tier-name">Dojo MANZANA</div>
                <p className="mz-tier-desc">
                  Programa integral de un mes. Drills semanales, talleres
                  inmersivos, plan operativo y seguimiento con casos reales de
                  tu empresa.
                </p>
                <ul className="mz-tier-bullets">
                  <li>4 semanas de entrenamiento</li>
                  <li>4 drills + 2 talleres hands-on</li>
                  <li>Diagnóstico estratégico + plan operativo</li>
                  <li>Casos reales de tu organización</li>
                </ul>
                <p className="mz-tier-note">
                  Ideal para founders + core team o intervenciones organizacionales.
                </p>
              </div>
            </div>
            <p className="mz-prose reveal" style={{ marginTop: 56, fontStyle: 'italic', color: 'var(--gray)' }}>
              ¿No sabes cuál elegir? Empezamos con un diagnóstico gratuito de 15
              minutos. Te escucho, identifico tu situación y te recomiendo el
              formato que hace sentido. Sin compromiso.
            </p>
          </div>
        </div>
      </section>

      <section className="mz-end">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Siguiente paso</div>
          <div className="col-body">
            <h2 className="mz-end-title reveal">
              Una sesión. Un problema real. Sin discurso.
            </h2>
            <p className="mz-end-sub reveal">
              Resultados en semanas, no en trimestres.
            </p>
            <div className="mz-end-actions">
              <a
                href="/contacto"
                className="mz-end-cta reveal"
                data-track="clic_contacto"
                data-track-label="metodologia"
              >
                Agendar sesión →
              </a>
              <a
                href="/diagnostico"
                className="mz-end-cta-quiet reveal"
                data-track="clic_diagnostico"
                data-track-label="metodologia"
              >
                Haz el diagnóstico →
              </a>
            </div>
            <a href="/" className="mz-back">
              ← Volver al inicio
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
