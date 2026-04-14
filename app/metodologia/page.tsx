import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Metodología — MANZANA',
  description:
    'Metodología de entrenamiento ejecutivo: 12 posiciones de liderazgo, 15 drills bajo presión y 28 principios de movimiento. Coaching práctico para toma de decisiones en crisis. Simulaciones que cubren el 68% de las situaciones críticas en empresas.',
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

const drills = [
  {
    block: 'Decisión',
    blockLead: 'Cuando no hay opción "correcta"',
    items: [
      { num: '01', name: 'Decidir con información incompleta', focus: 'Criterio, umbrales, riesgo asumible' },
      { num: '02', name: 'Elegir entre dos malas opciones', focus: 'Jerarquía de pérdidas, trade-offs reales' },
      { num: '03', name: 'Decidir rápido vs decidir bien', focus: 'Velocidad suficiente, no perfección' },
      { num: '04', name: 'Sostener una decisión impopular', focus: 'Autoridad sin autoritarismo' },
    ],
  },
  {
    block: 'Poder y fricción humana',
    blockLead: 'Cuando las personas son el obstáculo',
    items: [
      { num: '05', name: 'Enfrentar resistencia pasiva', focus: 'Lectura de fricción invisible' },
      { num: '06', name: 'Negociar sin poder formal', focus: 'Influencia real, no cargo' },
      { num: '07', name: 'Decir no cuando esperaban un sí', focus: 'Límites claros sin romper relaciones' },
      { num: '08', name: 'Resolver conflicto sin escalarlo', focus: 'Contención, encuadre y salida limpia' },
    ],
  },
  {
    block: 'Liderazgo bajo presión',
    blockLead: 'Cuando tú eres el que no puede fallar',
    items: [
      { num: '09', name: 'Liderar sin estar seguro', focus: 'Claridad suficiente, no certeza falsa' },
      { num: '10', name: 'Tomar responsabilidad por errores ajenos', focus: 'Ownership real, no culpas' },
      { num: '11', name: 'Sostener al equipo en crisis', focus: 'Estabilidad emocional operativa' },
    ],
  },
  {
    block: 'Transformación y cambio real',
    blockLead: 'Cuando lo que hay ya no sirve',
    items: [
      { num: '12', name: 'Cambiar algo que "funciona"', focus: 'Urgencia sin pánico' },
      { num: '13', name: 'Transformar con gente que no cree', focus: 'Acción antes que convicción' },
      { num: '14', name: 'Digitalizar sin romantizar la tecnología', focus: 'Criterio, no stack' },
    ],
  },
  {
    block: 'Supervivencia',
    blockLead: 'Cuando el negocio está en riesgo real',
    items: [
      { num: '15', name: 'Actuar cuando el negocio está en riesgo', focus: 'Foco brutal, eliminación de ruido' },
    ],
  },
]

const principios = [
  { dim: '01', name: 'Control del espacio', desc: 'Dónde y con quién se decide' },
  { dim: '02', name: 'Control del tiempo', desc: 'Ritmo y urgencia' },
  { dim: '03', name: 'Control de energía', desc: 'Carga emocional y desgaste' },
  { dim: '04', name: 'Control de decisión', desc: 'Cierre y definición' },
  { dim: '05', name: 'Control de poder', desc: 'Palancas formales e informales' },
  { dim: '06', name: 'Control narrativo', desc: 'Marco interpretativo' },
  { dim: '07', name: 'Control de salida', desc: 'Capacidad de cortar pérdida' },
]

export default function Metodologia() {
  return (
    <div className="mz-page">
      {/* PAGE HEAD — DARK */}
      <section className="metodo-hero is-dark" data-num="M">
        <div className="wrap section-grid">
          <div className="meta col-label reveal" style={{ paddingTop: 22 }}>Metodología</div>
          <div className="col-body">
            <h1 className="metodo-hero-title display reveal">
              Como defensa personal, pero para liderazgo.
            </h1>
            <p className="metodo-hero-lead reveal">
              En jiu-jitsu, el objetivo no es ser virtuoso: es sobrevivir,
              salir, controlar, cerrar. MANZANA usa exactamente esa lógica
              en el mundo laboral.
            </p>
            <div className="metodo-hero-grid reveal">
              <div className="metodo-hero-block">
                <span className="meta">Posiciones</span>
                <span className="metodo-hero-stat display">12</span>
                <span className="metodo-hero-stat-desc">configuraciones de presión real</span>
              </div>
              <div className="metodo-hero-block">
                <span className="meta">Drills</span>
                <span className="metodo-hero-stat display">15</span>
                <span className="metodo-hero-stat-desc">reflejos entrenables bajo presión</span>
              </div>
              <div className="metodo-hero-block">
                <span className="meta">Principios</span>
                <span className="metodo-hero-stat display">28</span>
                <span className="metodo-hero-stat-desc">reglas simples de movimiento</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 ARQUITECTURA */}
      <section className="mz-section" data-num="01">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">01 — Arquitectura</div>
          <div className="col-body">
            <h2 className="mz-section-title reveal">
              Dos capas. Un sistema.
            </h2>
            <p className="mz-section-lead reveal">
              La primera capa mapea tu situación. La segunda te entrena para resolverla.
              No importa la industria. No importa el cargo. Importa la presión.
            </p>
            <div className="metodo-arch reveal">
              <div className="metodo-arch-item">
                <div className="metodo-arch-letter display">A</div>
                <div className="metodo-arch-content">
                  <h3>Posiciones</h3>
                  <p>
                    12 configuraciones típicas de presión que se repiten en
                    empresas reales. Cada una se entrena en una sesión. Cubren
                    el 68% de los escenarios críticos.
                  </p>
                </div>
              </div>
              <div className="metodo-arch-item">
                <div className="metodo-arch-letter display">B</div>
                <div className="metodo-arch-content">
                  <h3>Drills</h3>
                  <p>
                    15 reflejos entrenables bajo presión. Cada posición se
                    resuelve con 2-4 drills de repetición guiada. No teoría.
                    Simulación con corrección en vivo.
                  </p>
                </div>
              </div>
            </div>
            <p className="metodo-arch-complement reveal">
              Complemento transversal: <strong>28 principios de movimiento</strong> —
              reglas simples que aplican a cualquier posición o drill.
              Como las bases del jiu-jitsu: funcionan siempre.
            </p>
          </div>
        </div>
      </section>

      {/* 02 LAS 12 POSICIONES */}
      <section className="mz-section" data-num="02">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">02 — Las 12 posiciones</div>
          <div className="col-body">
            <h2 className="mz-section-title reveal">
              Escenarios que cubren el 68% de los casos reales.
            </h2>
            <p className="mz-section-lead reveal">
              Cada posición es una configuración de presión que se repite.
              No depende de industria. Se entrena en una sesión.
              Aquí está el catálogo completo.
            </p>
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

      {/* 03 LOS 15 DRILLS — DARK */}
      <section className="mz-section is-dark" data-num="03">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">03 — Los 15 drills</div>
          <div className="col-body">
            <h2 className="mz-section-title reveal">
              Lo que entrenas cuando no hay tiempo para pensar.
            </h2>
            <p className="mz-section-lead reveal">
              Cada drill es un reflejo. Se practica con simulación bajo presión
              real, corrección en vivo y repetición hasta que se instala.
            </p>
            {drills.map((block, bi) => (
              <div className="metodo-drill-group reveal" key={bi}>
                <div className="metodo-drill-group-head">
                  <span className="metodo-drill-group-letter">
                    {String.fromCharCode(65 + bi)}
                  </span>
                  <div>
                    <div className="metodo-drill-group-name">{block.block}</div>
                    <div className="metodo-drill-group-lead">{block.blockLead}</div>
                  </div>
                </div>
                {block.items.map((drill) => (
                  <div className="metodo-drill-row" key={drill.num}>
                    <span className="metodo-drill-num">{drill.num}</span>
                    <div className="metodo-drill-content">
                      <span className="metodo-drill-name">{drill.name}</span>
                      <span className="metodo-drill-focus">{drill.focus}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 FORMATO DE SESIÓN */}
      <section className="mz-section" data-num="04">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">04 — Formato de sesión</div>
          <div className="col-body">
            <h2 className="mz-section-title reveal">
              Estructura fija. Repetible. Sin depender de carisma.
            </h2>
            <p className="mz-section-lead reveal">
              Cada sesión sigue el mismo protocolo. No improvisa.
              No depende de quién facilite. Funciona porque el sistema funciona.
            </p>
            {[
              { num: '01', title: 'Señales', desc: 'Cómo sabes que estás en esa posición. Síntomas visibles, patrones repetidos, lo que la gente dice vs. lo que realmente pasa.' },
              { num: '02', title: 'Errores instintivos', desc: 'Lo que la gente hace mal por default. Reacciones típicas que empeoran el problema.' },
              { num: '03', title: 'Frames', desc: '3-5 reglas simples que te protegen. Principios de movimiento aplicados al escenario. Lenguaje concreto y usable.' },
              { num: '04', title: 'Drills', desc: 'Práctica guiada con simulación y corrección en vivo. Escenario real, tiempo acotado, segundo round.' },
              { num: '05', title: 'Salida', desc: 'Decisión concreta + checklist operativo. Qué haces mañana. Movimiento mínimo esta semana.' },
              { num: '06', title: 'Enseñanza MANZANA', desc: 'La lección en 3 líneas. Sin adornos.' },
            ].map((s) => (
              <div className="mz-block-row reveal" key={s.num}>
                <div className="mz-block-num">{s.num}</div>
                <div className="mz-block-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
            <div className="metodo-entregables reveal">
              <span className="meta" style={{ display: 'block', marginBottom: 24 }}>Entregables por sesión</span>
              <div className="metodo-entregables-grid">
                <div className="metodo-entregable">
                  <strong>Frames + Checklist</strong>
                  <span>Reglas simples y acciones concretas en 1 página</span>
                </div>
                <div className="metodo-entregable">
                  <strong>Mapa de decisión</strong>
                  <span>Ruta de acción post-sesión o plan 7 días</span>
                </div>
                <div className="metodo-entregable">
                  <strong>Regla de operación</strong>
                  <span>Frase o principio instalable para el equipo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 PRINCIPIOS DE MOVIMIENTO */}
      <section className="mz-section is-dark" data-num="05">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">05 — Principios de movimiento</div>
          <div className="col-body">
            <h2 className="mz-section-title reveal">
              28 reglas simples. 7 dimensiones de control.
            </h2>
            <p className="mz-section-lead reveal">
              Como las bases del jiu-jitsu: no dependen de la posición ni del
              oponente. Aplican siempre. Son el sistema operativo detrás
              de cada drill.
            </p>
            <div className="metodo-principios-grid">
              {principios.map((p) => (
                <div className="metodo-principio reveal" key={p.dim}>
                  <span className="metodo-principio-num">{p.dim}</span>
                  <div>
                    <div className="metodo-principio-name">{p.name}</div>
                    <div className="metodo-principio-desc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06 CÓMO CONTRATAR */}
      <section className="mz-section" data-num="06">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">06 — Cómo contratar</div>
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

      {/* CIERRE */}
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
