import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MANZANA — Entrenamiento ejecutivo bajo presion',
  description: 'Entrenamos lideres y equipos para actuar bajo presion real. Simulaciones practicas, frameworks simples, resultados en semanas. No sales motivado. Sales entrenado.',
  keywords: ['liderazgo bajo presion', 'entrenamiento ejecutivo', 'decision bajo presion', 'liderazgo empresarial', 'simulaciones ejecutivas', 'managers', 'founders'],
  openGraph: {
    title: 'MANZANA — Entrenamiento ejecutivo bajo presion',
    description: 'Simulaciones practicas para lideres que necesitan actuar ahora, no reflexionar seis meses.',
    type: 'website',
    locale: 'es_MX',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <nav className="fixed top-0 w-full z-50 bg-manzana-black/80 backdrop-blur-sm border-b border-white/5">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-manzana-white font-semibold tracking-tight text-lg">
              MANZANA
            </a>
            <div className="flex items-center gap-8 text-sm">
              <a href="/metodologia" className="text-manzana-mid hover:text-manzana-white transition-colors">
                Metodologia
              </a>
              <a href="/blog" className="text-manzana-mid hover:text-manzana-white transition-colors">
                Blog
              </a>
              <a href="/contacto" className="text-manzana-accent hover:text-manzana-white transition-colors font-medium">
                Contacto
              </a>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="border-t border-white/5 py-12 mt-24">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-manzana-mid text-sm">MANZANA — Entrenamiento ejecutivo bajo presion</p>
            <p className="text-manzana-mid/50 text-xs">Actua. Elimina lo que te impide actuar.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
