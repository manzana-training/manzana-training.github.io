import Link from 'next/link'
import { LazyVideo } from '../components/LazyVideo'

export default function Home() {
  return (
    <div className="mz-page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-fallback" />
        <LazyVideo src="/videos/hero.mp4" className="hero-video" />
        <div className="video-label">Video · drill</div>
        <div className="hero-copy">
          <h1 className="hero-pitch display">
            <span className="beat">Sobrevive,</span>
            <span className="beat">Posiciónate,</span>
            <span className="beat">Cierra.</span>
          </h1>
          <div className="hero-meta">
            <span className="hero-meta-rule" />
            Defensa personal para liderazgo
            <br />
            12 posiciones · 15 drills · 40 min · CDMX
          </div>
          <Link
            href="/diagnostico"
            className="hero-cta"
            data-track="clic_diagnostico"
            data-track-label="hero"
          >
            Haz el diagnóstico — 6 min →
          </Link>
        </div>
      </section>

      {/* 01 TESIS */}
      <section className="tesis" data-num="01">
        <div className="wrap section-grid">
          <div className="meta col-label tesis-label reveal">01 — Tesis</div>
          <h2 className="display tesis-text col-body reveal">
            Decidir es inevitable. Hacerlo <em>bien</em> no.
          </h2>
          <p className="tesis-bridge reveal">
            Por eso entrenamos reflejos, no teoría.
          </p>
        </div>
      </section>

      {/* 02 QUÉ HACEMOS */}
      <section className="que-hacemos" data-num="02">
        <div className="wrap section-grid">
          <div className="meta col-label que-hacemos-label reveal">
            02 — Qué hacemos
          </div>
          <div className="col-body">
            <h2 className="display que-hacemos-pull reveal">
              La cultura no aparece cuando todo va bien. Aparece cuando todo arde.
            </h2>
            <p className="que-hacemos-lead reveal">
              Drills para líderes, founders y equipos que necesitan actuar
              ahora, no reflexionar seis meses.
            </p>
            <div className="que-hacemos-body reveal">
              <p>
                MANZANA no es consultoría. No es coaching. No es un programa de
                liderazgo.
              </p>
              <p>
                Es un sistema de entrenamiento de reflejos bajo presión. Como
                defensa personal, pero para decisiones de negocio.
              </p>
              <p>
                Entrenamos con posiciones reales, principios simples, drills de
                repetición y evaluación por resultado. No por discurso.
              </p>
            </div>
            <div className="que-hacemos-sign reveal">
              <p className="que-hacemos-sign-text">
                No sales motivado. Sales entrenado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FRANJA */}
      <div className="franja">
        <div className="franja-fallback" />
        <LazyVideo src="/videos/franja.mp4" className="franja-video" />
        <div className="franja-label">Entrena</div>
      </div>

      {/* 03 QUÉ OBTIENES — DARK */}
      <section className="beneficios is-dark" data-num="03">
        <div className="wrap section-grid">
          <div className="meta col-label beneficios-label reveal">
            03 — Qué obtienes
          </div>
          <ul className="beneficios-list col-body">
            {[
              { num: '01', title: 'Frames + Checklist', body: '3-5 reglas concretas y acciones operativas en 1 página. Listas para usar el lunes a las 9 a.m.' },
              { num: '02', title: 'Mapa de decisión', body: 'Ruta concreta para los próximos 7 días. Qué decides, qué pospones, qué sueltas.' },
              { num: '03', title: 'Regla de operación', body: 'Una frase instalable que tu equipo puede repetir cuando tú no estés.' },
              { num: '04', title: 'Reflejos entrenados', body: '15 drills que cubren el 68% de las situaciones críticas. No teoría — práctica con corrección en vivo.' },
              { num: '05', title: 'Velocidad real', body: 'Decisiones que se cierran en minutos, no en semanas de juntas y memos.' },
              { num: '06', title: 'Resultados en semanas', body: 'Sin procesos eternos. Sin dependencias. Sin acompañamiento infinito.' },
            ].map((b) => (
              <li className="beneficio reveal" key={b.num}>
                <span className="beneficio-num">{b.num}</span>
                <div className="beneficio-content">
                  <h3 className="beneficio-title">{b.title}</h3>
                  <p className="beneficio-body">{b.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 04 POSICIONES */}
      <section className="posiciones" data-num="04">
        <div className="wrap section-grid">
          <div className="meta col-label posiciones-label reveal">
            04 — 12 posiciones
          </div>
          <div className="col-body">
            <h2 className="display posiciones-title reveal">
              Escenarios reales. No teoría.
            </h2>
            <p className="posiciones-lead reveal">
              Cada posición es una configuración de presión que se repite en
              empresas reales. No dependen de industria. Se entrenan en una
              sesión.
            </p>
            <ul className="posiciones-list">
              {[
                { num: '01', name: 'Cerrar sin aplausos', block: 'Cierre' },
                { num: '02', name: 'Aguantar el plan', block: 'Cierre' },
                { num: '03', name: 'Cubrir al nuevo', block: 'Aprendizaje en fuego' },
                { num: '06', name: 'Cortar la infección', block: 'Contaminación' },
                { num: '08', name: 'Parar la sangría', block: 'Fricción' },
                { num: '11', name: 'Oxígeno o muerte', block: 'Supervivencia' },
              ].map((p) => (
                <li className="posicion reveal" key={p.num}>
                  <span className="posicion-num">{p.num}</span>
                  <span className="display posicion-name">{p.name}</span>
                  <span className="posicion-block">{p.block}</span>
                </li>
              ))}
            </ul>
            <Link href="/metodologia" className="posiciones-link reveal">
              Ver las 12 posiciones →
            </Link>
          </div>
        </div>
      </section>

      {/* 05 PARA QUIÉN */}
      <section className="para-quien" data-num="05">
        <div className="wrap section-grid">
          <div className="meta col-label para-quien-label reveal">05 — Para quién</div>
          <div className="col-body">
            <h2 className="display para-quien-title reveal">
              No entrenamos líderes en general. Entrenamos gente en problemas concretos.
            </h2>
            <ul className="para-quien-list">
              <li className="para-quien-item reveal">
                <span className="para-quien-num">01</span>
                <div className="para-quien-content">
                  <h3 className="para-quien-name">El founder con la empresa en llamas</h3>
                  <p>Caja apretada, equipo dudando, tres decisiones urgentes y ninguna buena. No necesitas un consejo. Necesitas cerrar.</p>
                </div>
              </li>
              <li className="para-quien-item reveal">
                <span className="para-quien-num">02</span>
                <div className="para-quien-content">
                  <h3 className="para-quien-name">El director que heredó un desmadre</h3>
                  <p>Equipo que no se mueve, fricciones que nadie nombra, resultados que no llegan. Necesitas leer el sistema y actuar antes de que te coma.</p>
                </div>
              </li>
              <li className="para-quien-item reveal">
                <span className="para-quien-num">03</span>
                <div className="para-quien-content">
                  <h3 className="para-quien-name">El gerente que lidera sin certeza</h3>
                  <p>Mandas sin saber si la decisión es correcta. Tu equipo te observa. No puedes decir "no sé" pero tampoco puedes inventar seguridad.</p>
                </div>
              </li>
              <li className="para-quien-item reveal">
                <span className="para-quien-num">04</span>
                <div className="para-quien-content">
                  <h3 className="para-quien-name">El líder que ya probó coaching y no sirvió</h3>
                  <p>Te acompañaron, te escucharon, te validaron. Y el problema sigue ahí. MANZANA no te acompaña. Te entrena.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 06 ASÍ SE VE UNA SESIÓN — DARK */}
      <section className="sesion is-dark" data-num="06">
        <div className="wrap section-grid">
          <div className="meta col-label sesion-label reveal">06 — Así se ve una sesión</div>
          <div className="col-body">
            <h2 className="display sesion-title reveal">
              40 minutos. Un problema real. Sin discurso.
            </h2>
            <p className="sesion-lead reveal">
              No es un taller. No es una plática. Es una simulación con presión real
              donde entrenas el reflejo, no la teoría.
            </p>
            <div className="sesion-steps">
              {[
                { num: '01', title: 'Tu situación', desc: 'Traes un problema real o elegimos una posición de nuestro catálogo de 12 escenarios.' },
                { num: '02', title: 'Señales y errores', desc: 'Identificamos las señales de presión y los errores instintivos que la gente comete por default.' },
                { num: '03', title: 'Drill en vivo', desc: 'Simulación con tiempo acotado. Decides bajo presión real. Sin teoría previa, sin red de seguridad.' },
                { num: '04', title: 'Frames', desc: '3-5 reglas simples que te protegen en esa posición. Lenguaje concreto que puedes usar mañana.' },
                { num: '05', title: 'Salida', desc: 'Decisión concreta + checklist operativo. Qué haces mañana. Movimiento mínimo esta semana.' },
              ].map((s) => (
                <div className="sesion-step reveal" key={s.num}>
                  <span className="sesion-step-num">{s.num}</span>
                  <div className="sesion-step-content">
                    <h3 className="sesion-step-title">{s.title}</h3>
                    <p className="sesion-step-desc">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="sesion-entregables reveal">
              <span className="meta" style={{ display: 'block', marginBottom: 24 }}>Sales con</span>
              <div className="sesion-entregables-grid">
                <div className="sesion-entregable">
                  <strong>Frames + Checklist</strong>
                  <span>Reglas y acciones en 1 página</span>
                </div>
                <div className="sesion-entregable">
                  <strong>Mapa de decisión</strong>
                  <span>Ruta de acción post-sesión</span>
                </div>
                <div className="sesion-entregable">
                  <strong>Regla de operación</strong>
                  <span>Principio instalable para tu equipo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 DRILL DE MUESTRA */}
      <section className="caso" data-num="07">
        <div className="wrap section-grid">
          <div className="meta col-label caso-label reveal">07 — Drill de muestra</div>
          <div className="col-body">
            <h2 className="display caso-pull reveal">
              Tienes 20 minutos. Los datos no cuadran. ¿Qué haces?
            </h2>
            <p className="caso-lead reveal">
              Un ejemplo de cómo se entrena una posición en MANZANA. Mismo
              formato que en sesión: escenario, reacciones típicas, reencuadre
              y reflejos. Sin teoría previa.
            </p>
            <Link href="/caso" className="caso-cta display reveal">
              Ver el drill →
            </Link>
          </div>
        </div>
      </section>

      {/* MANIFIESTO BAND — light */}
      <Link href="/manifiesto" className="manifesto-band manifesto-band--link">
        <span className="meta reveal">Manifiesto →</span>
        <div className="triada reveal">
          <span className="word">Sobrevive</span>
          <span className="bar" aria-hidden="true" />
          <span className="word">Posiciónate</span>
          <span className="bar" aria-hidden="true" />
          <span className="word">Cierra</span>
        </div>
      </Link>

      {/* 08 CIERRE — DARK */}
      <section className="cierre is-dark" data-num="08">
        <div className="cierre-fallback" />
        <div className="cierre-inner">
          <h2 className="display cierre-title reveal">Actúa.</h2>
          <p className="cierre-sub reveal">Elimina lo que te impide actuar.</p>
          <div className="cierre-actions">
            <Link
              href="/contacto"
              className="cierre-cta reveal"
              data-track="clic_contacto"
              data-track-label="cta-final"
            >
              Agendar sesión →
            </Link>
            <Link
              href="/diagnostico"
              className="mz-end-cta-quiet reveal"
              data-track="clic_diagnostico"
              data-track-label="cta-final"
            >
              ¿Aún no estás listo? Haz el diagnóstico — 6 min →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
