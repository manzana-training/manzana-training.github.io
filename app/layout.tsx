import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { RevealScript } from '../components/RevealScript'
import { MobileNav } from '../components/MobileNav'
import './globals.css'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''

const BASE_URL = 'https://manzanatraining.com.mx'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'MANZANA — Defensa personal para decidir bajo presión',
  description:
    'Defensa personal para liderazgo: 12 posiciones, 15 drills, sin teoría. Entrenamiento de reflejos para founders, directores y gerentes que tienen que decidir cuando todo arde. Sesiones de 40 min. CDMX.',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'MANZANA — Defensa personal para decidir bajo presión',
    description:
      'No es coaching. No es consultoría. Es entrenamiento. 12 posiciones, 15 drills, resultados en semanas. CDMX.',
    type: 'website',
    locale: 'es_MX',
    url: BASE_URL,
    siteName: 'MANZANA',
    images: [
      {
        url: `${BASE_URL}/blog-decidir-sin-info.webp`,
        width: 1792,
        height: 1024,
        alt: 'MANZANA — Entrenamiento ejecutivo bajo presión',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MANZANA — Defensa personal para decidir bajo presión',
    description: 'No es coaching. No es consultoría. Es entrenamiento. 12 posiciones, 15 drills, resultados en semanas.',
    images: [`${BASE_URL}/blog-decidir-sin-info.webp`],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,300..700,0..100,0..1;1,9..144,300..700,0..100,0..1&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
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

                (function() {
                  var fired = {};
                  function sendScroll(depth) {
                    if (fired[depth] || typeof gtag !== 'function') return;
                    fired[depth] = true;
                    gtag('event', 'scroll_' + depth, {
                      event_label: window.location.pathname
                    });
                  }
                  function onScroll() {
                    var doc = document.documentElement;
                    var scrolled = (window.scrollY || window.pageYOffset) + window.innerHeight;
                    var total = doc.scrollHeight;
                    if (total <= window.innerHeight) return;
                    var pct = scrolled / total;
                    if (pct >= 0.5) sendScroll(50);
                    if (pct >= 0.9) sendScroll(90);
                  }
                  var ticking = false;
                  window.addEventListener('scroll', function() {
                    if (!ticking) {
                      window.requestAnimationFrame(function() {
                        onScroll();
                        ticking = false;
                      });
                      ticking = true;
                    }
                  }, { passive: true });
                })();
              `}
            </Script>
          </>
        )}
      </head>
      <body className="font-sans antialiased">
        <header className="manzana-header">
          <Link href="/" className="wordmark wordmark--sm" aria-label="MANZANA">
            <span className="half">MANZ</span>
            <span className="bar" aria-hidden="true" />
            <span className="half">ANA</span>
          </Link>
          <nav className="desktop-nav">
            <ul>
              <li><Link href="/metodologia">Metodología</Link></li>
              <li><Link href="/manifiesto">Manifiesto</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/caso">Ejemplo</Link></li>
              <li><Link href="/diagnostico">Diagnóstico</Link></li>
              <li>
                <Link href="/contacto" className="mz-accent">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
          <MobileNav />
        </header>
        <main>{children}</main>
        <RevealScript />
        <footer className="manzana-footer">
          <div className="footer-cap">
            <Link href="/" className="wordmark wordmark--xl" aria-label="MANZANA">
              <span className="half">MANZ</span>
              <span className="bar" aria-hidden="true" />
              <span className="half">ANA</span>
            </Link>
          </div>
          <nav className="footer-links">
            <Link href="/metodologia">Metodología</Link>
            <Link href="/manifiesto">Manifiesto</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/caso">Ejemplo</Link>
            <Link href="/diagnostico">Diagnóstico</Link>
            <Link href="/contacto">Contacto</Link>
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
