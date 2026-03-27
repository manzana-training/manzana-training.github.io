import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — MANZANA',
  description: 'Artículos sobre liderazgo bajo presión, decisión en crisis, y entrenamiento ejecutivo. Sin humo motivacional.',
}

const posts = [
  {
    slug: 'decidir-sin-informacion-completa',
    title: 'Decidir sin información completa',
    excerpt: 'No decides cuando sabes. Decides cuando el costo de no decidir ya es mayor. Tres movimientos para cerrar cuando los datos no alcanzan.',
    date: '2026-03-24',
    block: 'DECISIÓN',
    readTime: '5 min',
  },
  {
    slug: 'resistencia-pasiva-el-enemigo-invisible',
    title: 'Resistencia pasiva: el enemigo invisible',
    excerpt: 'Nadie te dice que no, pero nada se mueve. Cómo exponer la fricción que no hace ruido pero te desgasta cada semana.',
    date: '2026-03-24',
    block: 'FRICCIÓN',
    readTime: '6 min',
  },
  {
    slug: 'liderar-sin-estar-seguro',
    title: 'Liderar sin estar seguro',
    excerpt: 'Tú dudas, pero el equipo necesita dirección. Liderazgo no es certeza. Es dar dirección suficiente mientras el sistema aprende.',
    date: '2026-03-24',
    block: 'LIDERAZGO',
    readTime: '5 min',
  },
  {
    slug: 'cortar-la-infeccion',
    title: 'Cortar la infección: cuando el talento no compensa el daño',
    excerpt: 'Una persona tóxica contamina más que diez desmotivadas. Tres movimientos para intervenir sin espectáculo y proteger al equipo.',
    date: '2026-03-27',
    block: 'CONTAMINACIÓN',
    readTime: '6 min',
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen">
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <p className="text-manzana-accent text-sm font-mono mb-4">BLOG</p>
        <h1 className="text-4xl md:text-5xl font-bold text-manzana-white mb-6">
          Sin humo. Sin teoría.<br />Situaciones reales.
        </h1>
        <p className="text-xl text-manzana-mid max-w-2xl">
          Cada artículo parte de una posición de presión real. Si no hay situación concreta, no hay artículo.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="space-y-6">
          {posts.map((post, i) => (
            <a
              key={i}
              href={`/blog/${post.slug}`}
              className="block border border-white/5 p-8 hover:border-manzana-accent/20 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-manzana-accent text-xs font-mono">{post.block}</span>
                <span className="text-manzana-mid/40 text-xs">·</span>
                <span className="text-manzana-mid/40 text-xs">{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-manzana-white group-hover:text-manzana-accent transition-colors mb-3">
                {post.title}
              </h2>
              <p className="text-manzana-mid leading-relaxed">
                {post.excerpt}
              </p>
              <p className="text-manzana-accent text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                Leer →
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
