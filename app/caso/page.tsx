import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Caso MANZANA — Decidir sin información completa',
  description:
    'Tienes 20 minutos, los datos no cuadran, y te van a pedir una postura. ¿Qué haces? Caso de entrenamiento gratuito.',
  alternates: {
    canonical: 'https://manzanatraining.com.mx/caso',
  },
  openGraph: {
    title: 'Caso MANZANA — Decidir sin información completa',
    description:
      'Tienes 20 minutos, los datos no cuadran, y te van a pedir una postura. ¿Qué haces?',
    type: 'website',
    locale: 'es_MX',
    url: 'https://manzanatraining.com.mx/caso',
    siteName: 'MANZANA',
  },
}

export default function Caso() {
  return (
    <div className="mz-page">
      <section className="page-head" data-num="05">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">05 — Caso</div>
          <div className="col-body">
            <h1 className="page-head-title reveal">
              Tienes 20 minutos. Los datos no cuadran. ¿Qué haces?
            </h1>
            <p className="page-head-lead reveal">
              El 80% de los líderes reacciona mal cuando tiene que decidir sin
              información completa. No porque sean malos — porque nadie los
              entrenó para eso.
            </p>
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">El escenario</div>
          <div className="col-body mz-prose reveal">
            <p>
              Tienes un dashboard de ventas. El director general dice que un
              producto clave está cayendo. Marketing dice que no. Finanzas dice
              que los números no cuadran.
            </p>
            <ul>
              <li>Sabes que hay retrasos en los datos.</li>
              <li>Puede haber duplicados.</li>
              <li>No hay una definición única de &quot;venta&quot; entre áreas.</li>
            </ul>
            <p className="lead">
              En 20 minutos entras a una junta donde te van a preguntar: ¿Está
              cayendo o no? ¿Qué hacemos?
            </p>
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Las 3 reacciones más comunes</div>
          <div className="col-body">
            <div className="mz-call-item reveal">
              <span className="meta">01 — El que pide más tiempo</span>
              <h3 style={{ marginTop: 12 }}>
                &quot;Necesito limpiar los datos antes de dar una respuesta.&quot;
              </h3>
              <p style={{ color: 'var(--ink-soft)', maxWidth: '60ch' }}>
                Suena responsable. Pero en la junta se lee como: no tengo
                postura. El director general decide solo — o peor, alguien con
                menos contexto decide por ti.
              </p>
            </div>
            <div className="mz-call-item reveal" style={{ marginTop: 56 }}>
              <span className="meta">02 — El que da una no-respuesta</span>
              <h3 style={{ marginTop: 12 }}>
                &quot;Depende de cómo definas &lsquo;caída&rsquo;.&quot;
              </h3>
              <p style={{ color: 'var(--ink-soft)', maxWidth: '60ch' }}>
                Técnicamente correcto. Políticamente inútil. El negocio
                necesita una dirección, no una clase de estadística. Sales de
                la junta sin daño, pero sin relevancia.
              </p>
            </div>
            <div className="mz-call-item reveal" style={{ marginTop: 56 }}>
              <span className="meta">03 — El que adivina</span>
              <h3 style={{ marginTop: 12 }}>
                &quot;Sí, está cayendo. Hay que meter promoción.&quot;
              </h3>
              <p style={{ color: 'var(--ink-soft)', maxWidth: '60ch' }}>
                Rápido, decidido, seguro. Y sin fundamento. Si la
                &quot;caída&quot; era un error de datos, acabas de lanzar un
                descuento que no necesitabas. Actuar rápido sin marco no es
                decisión — es impulso.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">El reencuadre</div>
          <div className="col-body">
            <h2 className="mz-section-title reveal" style={{ maxWidth: '24ch' }}>
              La pregunta no es si tienes datos suficientes. Es cuál es el costo
              de no tener una postura en 20 minutos.
            </h2>
            <p className="mz-prose reveal" style={{ marginTop: 32 }}>
              <span className="lead">
                No decides cuando sabes. Decides cuando el costo de no decidir
                ya es mayor.
              </span>
            </p>
            <p className="mz-prose reveal" style={{ marginTop: 24 }}>
              Un líder entrenado no busca la respuesta correcta. Construye una
              postura defendible con lo que tiene, asume el riesgo
              explícitamente y cierra una decisión que se pueda revertir si los
              datos cambian.
            </p>
            <p className="mz-prose reveal" style={{ marginTop: 16 }}>
              Eso no es intuición. Es un reflejo que se entrena.
            </p>
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Qué se entrena en esta posición</div>
          <div className="col-body">
            {[
              { num: '01', title: 'Fijar un umbral', body: 'Definir cuánta información es "suficiente" para decidir. No perfecta — suficiente.' },
              { num: '02', title: 'Asumir riesgo explícito', body: 'Decir en voz alta qué estás asumiendo y qué puede salir mal. Sin esconderlo.' },
              { num: '03', title: 'Cerrar en reversible', body: 'Tomar una decisión que se pueda ajustar cuando lleguen mejores datos.' },
              { num: '04', title: 'Defender la postura', body: 'Sostener tu respuesta cuando te cuestionen, sin certeza absoluta pero con marco claro.' },
            ].map((b) => (
              <div className="mz-block-row reveal" key={b.num}>
                <div className="mz-block-num">{b.num}</div>
                <div className="mz-block-content">
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </div>
              </div>
            ))}
            <p className="mz-prose reveal" style={{ marginTop: 32, fontSize: 14, fontStyle: 'italic', color: 'var(--gray)' }}>
              Esta es una de las 12 posiciones que entrena MANZANA. Cada
              posición se practica en una sesión con drills reales, no con
              teoría.
            </p>
          </div>
        </div>
      </section>

      <section className="mz-end">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Siguiente paso</div>
          <div className="col-body">
            <h2 className="mz-end-title reveal">¿En qué posición estás tú?</h2>
            <p className="mz-end-sub reveal">
              Haz el diagnóstico. Te decimos qué posición estás jugando y qué
              tipo de entrenamiento necesitas.
            </p>
            <div className="mz-end-actions">
              <a
                href="/diagnostico"
                className="mz-end-cta reveal"
                data-track="clic_diagnostico"
                data-track-label="caso"
              >
                Haz el diagnóstico →
              </a>
              <a
                href="/caso-manzana-decidir.html"
                download="MANZANA-Caso-Decidir.html"
                className="mz-end-cta-quiet reveal"
                data-track="descargar_caso"
                data-track-label="caso-decidir"
              >
                Descargar caso →
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
