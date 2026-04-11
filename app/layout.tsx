import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''

const BASE_URL = 'https://manzanatraining.com.mx'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'MANZANA — Entrenamiento ejecutivo bajo presión',
  description:
    'Entrenamos líderes y equipos para actuar bajo presión real. Drills, frameworks simples, resultados en semanas. No sales motivado. Sales entrenado.',
  keywords: [
    'liderazgo bajo presión',
    'entrenamiento ejecutivo',
    'decisión bajo presión',
    'liderazgo empresarial',
    'simulaciones ejecutivas',
    'managers',
    'founders',
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'MANZANA — Entrenamiento ejecutivo bajo presión',
    description:
      'Drills para líderes que necesitan actuar ahora, no reflexionar seis meses.',
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
    description: 'Drills para líderes que necesitan actuar ahora.',
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
        <header className="manzana-header">
          <a href="/" className="mz-logo">
            Manzana
          </a>
          <nav>
            <ul>
              <li><a href="/metodologia">Metodología</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/caso">Caso</a></li>
              <li><a href="/diagnostico">Diagnóstico</a></li>
              <li>
                <a href="/contacto" className="mz-accent">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="manzana-footer">
          <div className="footer-inner">
            <div>
              <div className="footer-brand">Manzana</div>
              <div className="footer-tagline">
                Entrenamiento ejecutivo bajo presión
              </div>
            </div>
            <div className="footer-links">
              <a href="/metodologia">Metodología</a>
              <a href="/blog">Blog</a>
              <a href="/caso">Caso</a>
              <a href="/diagnostico">Diagnóstico</a>
              <a href="/contacto">Contacto</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>Actúa. Elimina lo que te impide actuar.</span>
            <span>© 2026 Manzana Training</span>
          </div>
        </footer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MANZANA',
              url: 'https://manzanatraining.com.mx',
              description:
                'Sistema de entrenamiento de reflejos bajo presión para líderes ejecutivos.',
              sameAs: ['https://www.linkedin.com/company/111346401'],
            }),
          }}
        />
      </body>
    </html>
  )
}
