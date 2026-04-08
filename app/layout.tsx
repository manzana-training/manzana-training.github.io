import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''

const BASE_URL = 'https://manzanatraining.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'MANZANA — Entrenamiento ejecutivo bajo presión',
  description: 'Entrenamos líderes y equipos para actuar bajo presión real. Simulaciones prácticas, frameworks simples, resultados en semanas. No sales motivado. Sales entrenado.',
  keywords: ['liderazgo bajo presión', 'entrenamiento ejecutivo', 'decisión bajo presión', 'liderazgo empresarial', 'simulaciones ejecutivas', 'managers', 'founders'],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'MANZANA — Entrenamiento ejecutivo bajo presión',
    description: 'Simulaciones prácticas para líderes que necesitan actuar ahora, no reflexionar seis meses.',
    type: 'website',
    locale: 'es_MX',
    url: BASE_URL,
    siteName: 'MANZANA',
    images: [
      {
        url: `${BASE_URL}/blog-decidir-sin-info.png`,
        width: 1792,
        height: 1024,
        alt: 'MANZANA — Entrenamiento ejecutivo bajo presión',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MANZANA — Entrenamiento ejecutivo bajo presión',
    description: 'Simulaciones prácticas para líderes que necesitan actuar ahora.',
    images: [`${BASE_URL}/blog-decidir-sin-info.png`],
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
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');

                // Track clicks on elements with data-track attribute
                document.addEventListener('click', function(e) {
                  var el = e.target.closest('[data-track]');
                  if (el && typeof gtag === 'function') {
                    gtag('event', el.getAttribute('data-track'), {
                      event_label: el.getAttribute('data-track-label') || el.textContent.trim().substring(0, 50)
                    });
                  }
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="font-sans antialiased">
        <nav className="fixed top-0 w-full z-50 bg-manzana-black/80 backdrop-blur-sm border-b border-white/5">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-manzana-white font-semibold tracking-tight text-lg">
              MANZANA
            </a>
            <div className="flex items-center gap-8 text-sm">
              <a href="/metodologia" className="text-manzana-mid hover:text-manzana-white transition-colors">
                Metodología
              </a>
              <a href="/blog" className="text-manzana-mid hover:text-manzana-white transition-colors">
                Blog
              </a>
              <a href="/caso" className="text-manzana-mid hover:text-manzana-white transition-colors">
                Caso gratis
              </a>
              <a href="/diagnostico" className="text-manzana-mid hover:text-manzana-white transition-colors">
                Diagnóstico
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
            <p className="text-manzana-mid text-sm">MANZANA — Entrenamiento ejecutivo bajo presión</p>
            <p className="text-manzana-mid/50 text-xs">Actúa. Elimina lo que te impide actuar.</p>
          </div>
        </footer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MANZANA',
              url: 'https://manzanatraining.com',
              description: 'Sistema de entrenamiento de reflejos bajo presión para líderes ejecutivos.',
              sameAs: ['https://www.linkedin.com/company/111346401'],
            }),
          }}
        />
      </body>
    </html>
  )
}
