import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto — MANZANA',
  description: 'Agenda una sesión de entrenamiento ejecutivo bajo presión. Una sesión, un problema real, sin discurso.',
}

export default function Contacto() {
  return (
    <div className="min-h-screen">
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <p className="text-manzana-accent text-sm font-mono mb-4">CONTACTO</p>
          <h1 className="text-4xl md:text-5xl font-bold text-manzana-white mb-6">
            No vengo a decirte qué hacer.
          </h1>
          <p className="text-xl text-manzana-mid leading-relaxed mb-12">
            Vengo a entrenarte para decidir y moverte mejor cuando las cosas se ponen difíciles.
          </p>

          {/* Formulario */}
          <div className="border border-white/5 p-8 mb-6">
            <h3 className="text-manzana-white font-semibold text-lg mb-6">Escríbeme directo</h3>
            <form
              action="https://formspree.io/f/xpwddjbq"
              method="POST"
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-manzana-mid text-sm mb-2">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-manzana-black border border-white/10 text-manzana-white px-4 py-3 text-sm focus:border-manzana-accent focus:outline-none transition-colors placeholder:text-manzana-mid/30"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-manzana-mid text-sm mb-2">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full bg-manzana-black border border-white/10 text-manzana-white px-4 py-3 text-sm focus:border-manzana-accent focus:outline-none transition-colors placeholder:text-manzana-mid/30"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-manzana-mid text-sm mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-manzana-black border border-white/10 text-manzana-white px-4 py-3 text-sm focus:border-manzana-accent focus:outline-none transition-colors placeholder:text-manzana-mid/30"
                  placeholder="tu@empresa.com"
                />
              </div>
              <div>
                <label htmlFor="situation" className="block text-manzana-mid text-sm mb-2">¿Qué situación necesitas resolver?</label>
                <textarea
                  id="situation"
                  name="situation"
                  rows={3}
                  required
                  className="w-full bg-manzana-black border border-white/10 text-manzana-white px-4 py-3 text-sm focus:border-manzana-accent focus:outline-none transition-colors resize-none placeholder:text-manzana-mid/30"
                  placeholder="Una línea basta. Sé directo."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-4 bg-manzana-accent text-manzana-black font-semibold text-sm tracking-wide hover:bg-manzana-white transition-colors"
              >
                ENVIAR
              </button>
            </form>
          </div>

          {/* Opciones de contacto alternativas */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-white/5 p-8 hover:border-manzana-accent/20 transition-colors">
              <h3 className="text-manzana-white font-semibold text-lg mb-2">LinkedIn</h3>
              <p className="text-manzana-mid mb-4">Sin formularios. Sin bots.</p>
              <a
                href="https://www.linkedin.com/company/111346401"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-manzana-accent hover:text-manzana-white transition-colors text-sm font-medium"
              >
                Ir a LinkedIn →
              </a>
            </div>

            <div className="border border-white/5 p-8 hover:border-manzana-accent/20 transition-colors">
              <h3 className="text-manzana-white font-semibold text-lg mb-2">Email</h3>
              <p className="text-manzana-mid mb-4">Propuestas formales.</p>
              <a
                href="mailto:supipagg@gmail.com"
                className="inline-flex items-center gap-2 text-manzana-accent hover:text-manzana-white transition-colors text-sm font-medium"
              >
                supipagg@gmail.com →
              </a>
            </div>
          </div>

          {/* Que esperar */}
          <div className="mt-16">
            <p className="text-manzana-accent text-sm font-mono mb-6">QUÉ ESPERAR</p>
            <div className="space-y-4 text-manzana-mid">
              <div className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <p>Te respondo en menos de 24 horas.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <p>Platicamos 15 minutos para entender tu situación.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <p>Si MANZANA puede ayudarte, te propongo formato y precio.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <p>Si no es para ti, te lo digo directo. Sin venta forzada.</p>
              </div>
            </div>
          </div>

          {/* Filtro */}
          <div className="mt-16 border border-white/5 p-8 bg-manzana-dark">
            <p className="text-manzana-white font-semibold mb-4">MANZANA es para ti si:</p>
            <div className="space-y-2 text-manzana-mid text-sm">
              <p>→ Tienes un problema concreto que resolver en las próximas semanas</p>
              <p>→ Lideras un equipo de menos de 100 personas</p>
              <p>→ Prefieres acción sobre reflexión</p>
              <p>→ No buscas que te digan que estás bien</p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/5">
              <p className="text-manzana-mid/50 text-sm">
                MANZANA no es para ti si buscas coaching emocional, transformación cultural de 12 meses o teoría de liderazgo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
