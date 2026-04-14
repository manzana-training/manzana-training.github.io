import type { Metadata } from 'next'
import Script from 'next/script'
import { RevealScript } from '../components/RevealScript'
import './globals.css'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''

const BASE_URL = 'https://manzanatraining.com.mx'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'MANZANA — Entrenamiento ejecutivo bajo presión',
  description:
    'Entrenamiento ejecutivo bajo presión para líderes, founders y gerentes. Simulaciones de liderazgo, coaching ejecutivo práctico y capacitación en toma de decisiones. CDMX.',
  keywords: [
    'entrenamiento ejecutivo',
    'coaching ejecutivo México',
    'liderazgo bajo presión',
    'capacitación liderazgo empresarial',
    'toma de decisiones bajo presión',
    'simulaciones ejecutivas',
    'desarrollo de liderazgo',
    'team building ejecutivo',
    'entrenamiento gerencial',
    'coaching para founders',
    'liderazgo en crisis',
    'habilidades directivas',
    'managers',
    'founders',
    'CDMX',
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'MANZANA — Entrenamiento ejecutivo bajo presión',
    description:
      'Coaching ejecutivo práctico: simulaciones de liderazgo bajo presión para founders, directores y gerentes. Resultados en semanas, no meses. CDMX.',
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
    description: 'Coaching ejecutivo práctico: simulaciones de liderazgo bajo presión. Resultados en semanas.',
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
          <a href="/" className="wordmark wordmark--sm" aria-label="MANZANA">
            <span className="half">MANZ</span>
            <span className="bar" aria-hidden="true" />
            <span className="half">ANA</span>
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
        <RevealScript />
        <footer className="manzana-footer">
          <div className="footer-cap">
            <a href="/" className="wordmark wordmark--xl" aria-label="MANZANA">
              <span className="half">MANZ</span>
              <span className="bar" aria-hidden="true" />
              <span className="half">ANA</span>
            </a>
          </div>
          <nav className="footer-links">
            <a href="/metodologia">Metodología</a>
            <a href="/blog">Blog</a>
            <a href="/caso">Caso</a>
            <a href="/diagnostico">Diagnóstico</a>
            <a href="/contacto">Contacto</a>
          </nav>
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
              name: 'MANZANA Training',
              alternateName: 'MANZANA',
              url: 'https://manzanatraining.com.mx',
              description:
                'Entrenamiento ejecutivo y coaching de liderazgo bajo presión. Simulaciones para founders, directores y gerentes. Capacitación en toma de decisiones, manejo de crisis y desarrollo de habilidades directivas en Ciudad de México.',
              sameAs: ['https://www.linkedin.com/company/111346401'],
              areaServed: {
                '@type': 'City',
                name: 'Ciudad de México',
              },
              knowsAbout: [
                'Coaching ejecutivo',
                'Entrenamiento de liderazgo',
                'Toma de decisiones bajo presión',
                'Simulaciones ejecutivas',
                'Desarrollo directivo',
                'Team building',
                'Capacitación gerencial',
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
