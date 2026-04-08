import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diagnóstico — MANZANA',
  description: 'Identifica qué posición estás jugando y qué drill necesitas. Diagnóstico gratuito de entrenamiento ejecutivo bajo presión.',
  alternates: {
    canonical: 'https://manzanatraining.com/diagnostico',
  },
  openGraph: {
    title: 'Diagnóstico — MANZANA',
    description: 'Identifica qué posición estás jugando y qué drill necesitas.',
    type: 'website',
    locale: 'es_MX',
    url: 'https://manzanatraining.com/diagnostico',
    siteName: 'MANZANA',
  },
}

export default function Diagnostico() {
  return (
    <div className="min-h-screen">
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <p className="text-manzana-accent text-sm font-mono mb-4">DIAGNÓSTICO</p>
          <h1 className="text-4xl md:text-5xl font-bold text-manzana-white mb-6">
            ¿Qué situación estás enfrentando?
          </h1>
          <p className="text-xl text-manzana-mid leading-relaxed mb-4">
            Responde el diagnóstico. Te decimos qué posición estás jugando y qué tipo de entrenamiento necesitas.
          </p>
          <p className="text-manzana-mid/60 text-sm mb-12">
            Sin compromiso. Sin venta automática. Solo claridad.
          </p>

          <div className="border border-manzana-accent/20 p-10">
            <p className="text-manzana-white font-semibold text-lg mb-3">
              Haz el diagnóstico ahora
            </p>
            <p className="text-manzana-mid text-sm mb-6">
              Te toma unos minutos. Al terminar sabrás qué posición de presión estás jugando y qué reflejo necesitas entrenar.
            </p>
            <a
              href="https://script.google.com/macros/s/AKfycbwXdtAKpeolb8O_IrbjYYbWyQ3na731aTUx1QhS5o8UH1zm9m4rOiSrGMAykOQkiRiNcg/exec"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-manzana-accent text-manzana-black font-semibold text-sm tracking-wide hover:bg-manzana-white transition-colors"
            >
              INICIAR DIAGNÓSTICO →
            </a>
          </div>

          {/* Qué esperar */}
          <div className="mt-16">
            <p className="text-manzana-accent text-sm font-mono mb-6">QUÉ ESPERAR</p>
            <div className="space-y-4 text-manzana-mid">
              <div className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <p>Identificamos tu posición de presión actual</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <p>Te decimos qué tipo de entrenamiento necesitas</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <p>Si quieres revisarlo juntos, agendamos 15 minutos</p>
              </div>
            </div>
          </div>

          {/* CTA secundario */}
          <div className="mt-16 border border-white/5 p-8 text-center">
            <p className="text-manzana-white font-semibold mb-2">¿Prefieres ver un ejemplo primero?</p>
            <p className="text-manzana-mid text-sm mb-6">Lee un caso real de entrenamiento antes de hacer el diagnóstico.</p>
            <a
              href="/caso"
              className="text-manzana-accent hover:text-manzana-white text-sm font-medium transition-colors"
            >
              Ver caso de entrenamiento →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
