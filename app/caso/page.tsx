import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Caso MANZANA — Decidir sin información completa',
  description: 'Tienes 20 minutos, los datos no cuadran, y te van a pedir una postura. ¿Qué haces? Caso de entrenamiento gratuito.',
  alternates: {
    canonical: 'https://manzanatraining.com/caso',
  },
  openGraph: {
    title: 'Caso MANZANA — Decidir sin información completa',
    description: 'Tienes 20 minutos, los datos no cuadran, y te van a pedir una postura. ¿Qué haces?',
    type: 'website',
    locale: 'es_MX',
    url: 'https://manzanatraining.com/caso',
    siteName: 'MANZANA',
  },
}

export default function Caso() {
  return (
    <div className="min-h-screen">
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-8">
        <div className="max-w-2xl">
          <p className="text-manzana-accent text-sm font-mono mb-4">CASO DE ENTRENAMIENTO</p>
          <h1 className="text-4xl md:text-5xl font-bold text-manzana-white mb-6">
            Tienes 20 minutos.<br />
            Los datos no cuadran.<br />
            <span className="text-manzana-accent">¿Qué haces?</span>
          </h1>
          <p className="text-xl text-manzana-mid leading-relaxed mb-4">
            El 80% de los líderes reacciona mal cuando tiene que decidir sin información completa. No porque sean malos — porque nadie los entrenó para eso.
          </p>
          <p className="text-manzana-mid/60 text-sm mb-12">
            Este caso es una muestra real de lo que se entrena en MANZANA. Léelo en 3 minutos.
          </p>
        </div>
      </section>

      {/* Escenario */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="max-w-2xl">
          <div className="border border-white/5 bg-manzana-dark p-8">
            <p className="text-manzana-accent text-sm font-mono mb-4">EL ESCENARIO</p>
            <p className="text-manzana-white text-lg leading-relaxed mb-6">
              Tienes un dashboard de ventas. El director general dice que un producto clave está cayendo. Marketing dice que no. Finanzas dice que los números no cuadran.
            </p>
            <div className="space-y-1 text-manzana-mid text-sm mb-6">
              <p>Sabes que hay retrasos en los datos.</p>
              <p>Puede haber duplicados.</p>
              <p>No hay una definición única de &quot;venta&quot; entre áreas.</p>
            </div>
            <p className="text-manzana-white font-semibold">
              En 20 minutos entras a una junta donde te van a preguntar: ¿Está cayendo o no? ¿Qué hacemos?
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-white/5 max-w-2xl" /></div>

      {/* Reacciones */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="max-w-2xl">
          <p className="text-manzana-accent text-sm font-mono mb-8">LAS 3 REACCIONES MÁS COMUNES</p>

          <div className="space-y-8">
            <div className="border-l-2 border-white/10 pl-6">
              <p className="text-manzana-accent text-xs font-mono mb-2">01 — EL QUE PIDE MÁS TIEMPO</p>
              <p className="text-manzana-white font-semibold mb-2">&quot;Necesito limpiar los datos antes de dar una respuesta.&quot;</p>
              <p className="text-manzana-mid text-sm leading-relaxed">
                Suena responsable. Pero en la junta se lee como: no tengo postura. El director general decide solo — o peor, alguien con menos contexto decide por ti.
              </p>
            </div>

            <div className="border-l-2 border-white/10 pl-6">
              <p className="text-manzana-accent text-xs font-mono mb-2">02 — EL QUE DA UNA NO-RESPUESTA</p>
              <p className="text-manzana-white font-semibold mb-2">&quot;Depende de cómo definas &apos;caída&apos;.&quot;</p>
              <p className="text-manzana-mid text-sm leading-relaxed">
                Técnicamente correcto. Políticamente inútil. El negocio necesita una dirección, no una clase de estadística. Sales de la junta sin daño, pero sin relevancia.
              </p>
            </div>

            <div className="border-l-2 border-white/10 pl-6">
              <p className="text-manzana-accent text-xs font-mono mb-2">03 — EL QUE ADIVINA</p>
              <p className="text-manzana-white font-semibold mb-2">&quot;Sí, está cayendo. Hay que meter promoción.&quot;</p>
              <p className="text-manzana-mid text-sm leading-relaxed">
                Rápido, decidido, seguro. Y sin fundamento. Si la &quot;caída&quot; era un error de datos, acabas de lanzar un descuento que no necesitabas. Actuar rápido sin marco no es decisión — es impulso.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-white/5 max-w-2xl" /></div>

      {/* Reencuadre */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="max-w-2xl">
          <p className="text-manzana-accent text-sm font-mono mb-6">EL REENCUADRE</p>

          <div className="border border-manzana-accent/20 p-8 text-center mb-8">
            <p className="text-manzana-white text-xl font-semibold leading-relaxed mb-3">
              La pregunta no es si tienes datos suficientes.<br />
              La pregunta es: <span className="text-manzana-accent">¿cuál es el costo de no tener una postura en 20 minutos?</span>
            </p>
            <p className="text-manzana-mid text-sm">
              No decides cuando sabes. Decides cuando el costo de no decidir ya es mayor.
            </p>
          </div>

          <p className="text-manzana-mid text-base leading-relaxed mb-4">
            Un líder entrenado no busca la respuesta correcta. Construye una postura defendible con lo que tiene, asume el riesgo explícitamente y cierra una decisión que se pueda revertir si los datos cambian.
          </p>
          <p className="text-manzana-mid text-base leading-relaxed">
            Eso no es intuición. Es un reflejo que se entrena.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-white/5 max-w-2xl" /></div>

      {/* Qué se entrena */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="max-w-2xl">
          <p className="text-manzana-accent text-sm font-mono mb-8">QUÉ SE ENTRENA EN ESTA POSICIÓN</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Fijar un umbral', desc: 'Definir cuánta información es "suficiente" para decidir. No perfecta — suficiente.' },
              { title: 'Asumir riesgo explícito', desc: 'Decir en voz alta qué estás asumiendo y qué puede salir mal. Sin esconderlo.' },
              { title: 'Cerrar en reversible', desc: 'Tomar una decisión que se pueda ajustar cuando lleguen mejores datos.' },
              { title: 'Defender la postura', desc: 'Sostener tu respuesta cuando te cuestionen, sin certeza absoluta pero con marco claro.' },
            ].map((item, i) => (
              <div key={i} className="border border-white/5 p-5">
                <h3 className="text-manzana-white font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-manzana-mid text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-manzana-mid/40 text-xs mt-6">
            Esta es una de las 12 posiciones que entrena MANZANA. Cada posición se practica en una sesión con simulaciones reales, no con teoría.
          </p>
        </div>
      </section>

      {/* CTA + PDF */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="max-w-2xl">
          <div className="border border-manzana-accent/20 p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-manzana-white mb-4">
              ¿En qué posición estás tú?
            </h2>
            <p className="text-manzana-mid text-base mb-8">
              Haz el diagnóstico. Te decimos qué posición estás jugando y qué tipo de entrenamiento necesitas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/diagnostico"
                data-track="clic_diagnostico"
                data-track-label="caso"
                className="inline-flex items-center justify-center px-8 py-4 bg-manzana-accent text-manzana-black font-semibold text-sm tracking-wide hover:bg-manzana-white transition-colors"
              >
                HAZ EL DIAGNÓSTICO
              </a>
              <a
                href="/caso-manzana-decidir.html"
                download="MANZANA-Caso-Decidir.html"
                data-track="descargar_caso"
                data-track-label="caso-decidir"
                className="inline-flex items-center justify-center px-8 py-4 border border-manzana-accent/30 text-manzana-accent font-medium text-sm tracking-wide hover:border-manzana-accent hover:text-manzana-white transition-colors"
              >
                DESCARGAR CASO
              </a>
            </div>
            <p className="text-manzana-mid/40 text-xs mt-6">
              Descarga el caso en formato imprimible. Ábrelo en tu navegador e imprime como PDF.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
