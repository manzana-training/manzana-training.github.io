import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diagnóstico — MANZANA',
  description: 'Identifica qué posición estás jugando y qué drill necesitas. Diagnóstico gratuito de entrenamiento ejecutivo bajo presión.',
  alternates: {
    canonical: 'https://manzana-training.github.io/diagnostico',
  },
  openGraph: {
    title: 'Diagnóstico — MANZANA',
    description: 'Identifica qué posición estás jugando y qué drill necesitas.',
    type: 'website',
    locale: 'es_MX',
    url: 'https://manzana-training.github.io/diagnostico',
    siteName: 'MANZANA',
  },
}

export default function Diagnostico() {
  return (
    <div className="min-h-screen">
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-8">
        <div className="max-w-2xl">
          <p className="text-manzana-accent text-sm font-mono mb-4">DIAGNÓSTICO</p>
          <h1 className="text-4xl md:text-5xl font-bold text-manzana-white mb-6">
            ¿Qué situación estás enfrentando?
          </h1>
          <p className="text-xl text-manzana-mid leading-relaxed mb-4">
            Responde el diagnóstico. Te decimos qué posición estás jugando y qué tipo de entrenamiento necesitas.
          </p>
          <p className="text-manzana-mid/60 text-sm">
            Sin compromiso. Sin venta automática. Solo claridad.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="border border-white/5 bg-white rounded-sm overflow-hidden">
          <iframe
            src="https://script.google.com/macros/s/AKfycbwXdtAKpeolb8O_IrbjYYbWyQ3na731aTUx1QhS5o8UH1zm9m4rOiSrGMAykOQkiRiNcg/exec"
            width="100%"
            height="800"
            style={{ border: 'none', minHeight: '800px' }}
            title="Diagnóstico MANZANA"
            allowFullScreen
          />
        </div>
      </section>

      {/* CTA post-diagnóstico */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="border border-manzana-accent/20 p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-manzana-white mb-4">
            ¿Ya respondiste?
          </h2>
          <p className="text-manzana-mid text-lg mb-8">
            Si quieres que revisemos tu resultado juntos, agenda una llamada de 15 minutos.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-4 bg-manzana-accent text-manzana-black font-semibold text-sm tracking-wide hover:bg-manzana-white transition-colors"
          >
            AGENDAR SESIÓN
          </a>
        </div>
      </section>
    </div>
  )
}
