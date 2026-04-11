'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll('.manzana-home .reveal')
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="manzana-home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-fallback" />
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="video-label">Video · drill</div>
        <div className="hero-copy">
          <h1 className="hero-pitch display">
            <span className="beat">Sobrevive,</span>
            <span className="beat">Posiciónate,</span>
            <span className="beat">Cierra.</span>
          </h1>
          <div className="hero-meta">
            <span className="hero-meta-rule" />
            Entrenamiento ejecutivo bajo presión
            <br />
            Ciudad de México
          </div>
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
        <video
          className="franja-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/franja.mp4" type="video/mp4" />
        </video>
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
              {
                num: '01',
                title: 'Claridad para decidir',
                body: 'Cuando los datos no alcanzan y esperar no es opción.',
              },
              {
                num: '02',
                title: 'Menos fricción',
                body: 'Mecanismos de cierre que el equipo puede usar sin depender de ti.',
              },
              {
                num: '03',
                title: 'Criterio compartido',
                body: 'Lenguaje común para actuar cuando todo importa.',
              },
              {
                num: '04',
                title: 'Velocidad real',
                body: 'Decisiones que se cierran en minutos, no en semanas de juntas.',
              },
              {
                num: '05',
                title: 'Reflejos entrenados',
                body: '15 drills que cubren el 68% de las situaciones críticas.',
              },
              {
                num: '06',
                title: 'Resultados en semanas',
                body: 'Sin procesos eternos. Sin dependencias. Sin acompañamiento infinito.',
              },
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
                {
                  num: '03',
                  name: 'Cubrir al nuevo',
                  block: 'Aprendizaje en fuego',
                },
                {
                  num: '06',
                  name: 'Cortar la infección',
                  block: 'Contaminación',
                },
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
            <a href="/metodologia" className="posiciones-link reveal">
              Ver las 12 posiciones →
            </a>
          </div>
        </div>
      </section>

      {/* 05 CASO */}
      <section className="caso" data-num="05">
        <div className="wrap section-grid">
          <div className="meta col-label caso-label reveal">05 — Caso</div>
          <div className="col-body">
            <h2 className="display caso-pull reveal">
              Tienes 20 minutos. Los datos no cuadran. ¿Qué haces?
            </h2>
            <p className="caso-lead reveal">
              Lee un caso real de entrenamiento MANZANA. El 80% de los líderes
              reacciona mal en esta situación. Descubre si tú también.
            </p>
            <a href="/caso" className="caso-cta display reveal">
              Leer caso gratis →
            </a>
          </div>
        </div>
      </section>

      {/* 06 CIERRE — DARK */}
      <section className="cierre is-dark" data-num="06">
        <div className="cierre-fallback" />
        <div className="cierre-inner">
          <h2 className="display cierre-title reveal">Actúa.</h2>
          <p className="cierre-sub reveal">Elimina lo que te impide actuar.</p>
          <div className="cierre-actions">
            <a
              href="/contacto"
              className="cierre-cta reveal"
              data-track="clic_contacto"
              data-track-label="cta-final"
            >
              Agendar sesión →
            </a>
            <a
              href="/diagnostico"
              className="cierre-cta reveal"
              data-track="clic_diagnostico"
              data-track-label="cta-final"
            >
              Haz el diagnóstico →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
