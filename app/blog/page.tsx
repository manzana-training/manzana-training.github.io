import type { Metadata } from 'next'
import Link from 'next/link'
import { EmailCapture } from '../../components/EmailCapture'

const BASE_URL = 'https://manzanatraining.com.mx'

export const metadata: Metadata = {
  title: 'Blog — MANZANA',
  description:
    'Artículos sobre liderazgo bajo presión, toma de decisiones en crisis, coaching ejecutivo y desarrollo de habilidades directivas. Sin humo motivacional.',
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: 'Blog — MANZANA',
    description:
      'Artículos sobre liderazgo bajo presión, decisión en crisis, y entrenamiento ejecutivo.',
    type: 'website',
    url: `${BASE_URL}/blog`,
    images: [
      {
        url: `${BASE_URL}/blog-oxigeno-o-muerte.webp`,
        width: 1792,
        height: 1024,
        alt: 'Blog MANZANA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — MANZANA',
    description: 'Artículos sobre liderazgo bajo presión. Sin humo motivacional.',
    images: [`${BASE_URL}/blog-oxigeno-o-muerte.webp`],
  },
}

const posts = [
  {
    slug: 'romper-el-monopolio',
    title: 'Romper el monopolio: cuando la información es poder',
    excerpt:
      'Tres personas saben todo. El resto opera a ciegas. Tres movimientos para redistribuir información sin volverla caos ni perder el control.',
    date: '2026-04-27',
    block: 'Opacidad',
    readTime: '7 min',
  },
  {
    slug: 'soltar-el-lastre',
    title: 'Soltar el lastre: cuando sostener cuesta más que cortar',
    excerpt:
      'No hay fit. Llevas meses dando margen. Tres movimientos para cortar a tiempo, sin destruir, antes de que la duda se lleve al equipo.',
    date: '2026-04-20',
    block: 'Aprendizaje en fuego',
    readTime: '7 min',
  },
  {
    slug: 'aguantar-el-plan',
    title: 'Aguantar el plan: cuando la presión te pide cambiar de rumbo',
    excerpt:
      'La decisión fue correcta. Los resultados no llegan. Todos quieren cambiar de rumbo. Tres movimientos para sostener sin ceder.',
    date: '2026-04-13',
    block: 'Cierre',
    readTime: '6 min',
  },
  {
    slug: 'cambiar-lo-que-funciona',
    title: 'Cambiar lo que funciona: cuando lo estable se vuelve trampa',
    excerpt:
      'No hay crisis visible, pero sabes que no escala. Tres movimientos para crear urgencia, probar sin romper y cerrar el cambio antes de que sea tarde.',
    date: '2026-04-07',
    block: 'Transformación',
    readTime: '6 min',
  },
  {
    slug: 'oxigeno-o-muerte',
    title: 'Oxígeno o muerte: cuando el negocio se está acabando y nadie quiere verlo',
    excerpt:
      'KPIs rojos, caja que no alcanza, runway corto. Tres movimientos para dejar de planear y empezar a sobrevivir.',
    date: '2026-04-01',
    block: 'Supervivencia',
    readTime: '6 min',
  },
  {
    slug: 'cortar-la-infeccion',
    title: 'Cortar la infección: cuando el talento no compensa el daño',
    excerpt:
      'Una persona tóxica contamina más que diez desmotivadas. Tres movimientos para intervenir sin espectáculo y proteger al equipo.',
    date: '2026-03-27',
    block: 'Contaminación',
    readTime: '6 min',
  },
  {
    slug: 'liderar-sin-estar-seguro',
    title: 'Liderar sin estar seguro',
    excerpt:
      'Tú dudas, pero el equipo necesita dirección. Liderazgo no es certeza. Es dar dirección suficiente mientras el sistema aprende.',
    date: '2026-03-24',
    block: 'Liderazgo',
    readTime: '5 min',
  },
  {
    slug: 'resistencia-pasiva-el-enemigo-invisible',
    title: 'Resistencia pasiva: el enemigo invisible',
    excerpt:
      'Nadie te dice que no, pero nada se mueve. Cómo exponer la fricción que no hace ruido pero te desgasta cada semana.',
    date: '2026-03-24',
    block: 'Fricción',
    readTime: '6 min',
  },
  {
    slug: 'decidir-sin-informacion-completa',
    title: 'Decidir sin información completa',
    excerpt:
      'No decides cuando sabes. Decides cuando el costo de no decidir ya es mayor. Tres movimientos para cerrar cuando los datos no alcanzan.',
    date: '2026-03-24',
    block: 'Decisión',
    readTime: '5 min',
  },
]

export default function Blog() {
  return (
    <div className="mz-page">
      <section className="page-head" data-num="06">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">06 — Blog</div>
          <div className="col-body">
            <h1 className="page-head-title reveal">
              Sin humo. Sin teoría. Situaciones reales.
            </h1>
            <p className="page-head-lead reveal">
              Cada artículo parte de una posición de presión real. Si no hay
              situación concreta, no hay artículo.
            </p>
            <EmailCapture
              text="Un artículo al mes. Cada uno una posición real."
              label="blog-index"
            />
          </div>
        </div>
      </section>

      <section className="mz-section">
        <div className="wrap section-grid">
          <div className="meta col-label reveal">Artículos</div>
          <div className="col-body">
            <div className="blog-list">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="blog-item reveal"
                >
                  <h2 className="blog-item-title">{post.title}</h2>
                  <p className="blog-item-block">{post.block}</p>
                  <span className="blog-item-stamp">
                    {new Date(post.date + 'T12:00:00').toLocaleDateString(
                      'es-MX',
                      { day: 'numeric', month: 'short' }
                    )}
                    {' · '}
                    {post.readTime}
                  </span>
                </Link>
              ))}
            </div>
            <Link href="/" className="mz-back">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
