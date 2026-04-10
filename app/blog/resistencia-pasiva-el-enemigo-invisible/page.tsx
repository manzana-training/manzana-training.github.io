import type { Metadata } from 'next'

const BASE_URL = 'https://manzanatraining.com.mx'
const SLUG = 'resistencia-pasiva-el-enemigo-invisible'
const TITLE = 'Resistencia pasiva: el enemigo invisible'
const DESCRIPTION = 'Nadie te dice que no, pero nada se mueve. Cómo exponer la fricción invisible que te desgasta cada semana y recuperar tracción.'
const IMAGE = `${BASE_URL}/blog-resistencia-pasiva.png`
const DATE = '2026-03-24'

export const metadata: Metadata = {
  title: `${TITLE} — MANZANA`,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: 'Nadie te dice que no, pero nada se mueve.',
    type: 'article',
    url: `${BASE_URL}/blog/${SLUG}`,
    images: [{ url: IMAGE, width: 1792, height: 1024, alt: TITLE }],
    publishedTime: DATE,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
  datePublished: DATE,
  author: { '@type': 'Organization', name: 'MANZANA', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'MANZANA', url: BASE_URL },
  mainEntityOfPage: `${BASE_URL}/blog/${SLUG}`,
}

export default function Post() {
  return (
    <article className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-manzana-accent text-xs font-mono">FRICCIÓN</span>
            <span className="text-manzana-mid/40 text-xs">·</span>
            <span className="text-manzana-mid/40 text-xs">6 min</span>
            <span className="text-manzana-mid/40 text-xs">·</span>
            <span className="text-manzana-mid/40 text-xs">Mar 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-manzana-white leading-tight mb-6">
            Resistencia pasiva: el enemigo invisible
          </h1>
          <p className="text-xl text-manzana-mid leading-relaxed">
            Nadie te dice que no, pero nada se mueve. No hay confrontación, no hay conflicto abierto, no hay responsables claros. Solo silencio, retrasos y &quot;ahorita lo vemos&quot;.
          </p>
        </div>

        {/* Imagen */}
        <div className="mb-12">
          <img
            src="/blog-resistencia-pasiva.png"
            alt="Figura empujando contra una pared invisible en oficina oscura — resistencia pasiva"
            className="w-full aspect-video object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="prose prose-invert max-w-none space-y-8">
          <div className="h-px bg-white/5" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">La posición</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              En jiu-jitsu, el rival no ataca — te inmoviliza. Te cansa sin gastar energía. En una empresa pasa igual: te dicen &quot;sí, suena bien&quot;, pero las tareas no avanzan, las juntas acaban sin acuerdos y todo depende de que tú empujes.
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              No es incompetencia. Es resistencia sin costo visible. Y eso es lo que la hace tan peligrosa.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Cómo se presenta</h2>
            <ul className="space-y-2 text-manzana-light/80">
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Te dicen &quot;sí&quot;, pero no ejecutan.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Las tareas no avanzan si no persigues.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Las juntas acaban sin acuerdos claros.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Todo depende de ti empujar.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">El daño real</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              Lentitud crónica. Desgaste personal por empujar solo. La mediocridad operativa se normaliza. Y lo peor: el sistema aprende que puede no moverse porque tú siempre compensas.
            </p>
            <p className="text-manzana-light/80 leading-relaxed font-medium">
              Aquí no pierdes por KO. Pierdes por agotamiento.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Por qué seguir empujando no funciona</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              Porque la resistencia pasiva no se rompe sola. Y porque seguir empujando refuerza el patrón: el sistema aprende que tú compensas lo que él debería resolver.
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              En jiu-jitsu, si empujas sin ángulo, te quedas pegado.
            </p>
          </div>

          <div className="border border-manzana-accent/20 p-8 my-12">
            <p className="text-manzana-accent text-sm font-mono mb-4">LOS 3 MOVIMIENTOS</p>
            <div className="space-y-8">
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">1. Exponer la fricción invisible</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  Nombra el patrón, no a la persona: &quot;Esto se ha intentado tres veces y no avanzó.&quot; Nombra el efecto: &quot;Nos está atrasando X semanas.&quot; Devuelve el peso: &quot;¿Quién es dueño de que esto avance?&quot;
                </p>
                <p className="text-manzana-mid/60 text-sm mt-2">No acusas. Iluminas.</p>
              </div>
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">2. Forzar decisión</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  Cierra opciones: &quot;O hacemos A o dejamos explícito que no se hace.&quot; Pon deadline: &quot;Si el viernes no hay respuesta, asumo B.&quot; Separa consenso de avance: &quot;No necesitamos estar de acuerdo para movernos.&quot;
                </p>
                <p className="text-manzana-mid/60 text-sm mt-2">El sistema empieza a cansarse de no decidir.</p>
              </div>
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">3. Cerrar mínimo viable</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  Asigna dueño explícito. Define versión mínima: &quot;Esto es lo mínimo que sí vamos a hacer.&quot; Una sola fuente de verdad donde vive lo acordado. Cierra con recap: qué sí, qué no, cuándo se revisa.
                </p>
                <p className="text-manzana-mid/60 text-sm mt-2">Si el mínimo avanza, rompiste la resistencia. Si ni eso se sostiene, ya no es pasiva: es bloqueo.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Enseñanza Manzana</h2>
            <div className="text-manzana-light text-lg leading-relaxed space-y-2">
              <p>La resistencia pasiva no se vence empujando más fuerte.</p>
              <p>Se vence quitándole invisibilidad y costo.</p>
              <p className="text-manzana-mid/60 mt-4">
                Primero expones.<br />
                Luego fuerzas decisión.<br />
                Solo entonces recuperas movimiento.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 border border-manzana-accent/20 p-8 text-center">
          <p className="text-manzana-white font-semibold mb-2">¿Tu equipo está atorado sin decirte que no?</p>
          <p className="text-manzana-mid text-sm mb-6">Podemos entrenar esta posición en una sesión.</p>
          <a href="/contacto" data-track="clic_contacto" data-track-label="blog-resistencia-pasiva" className="inline-flex items-center justify-center px-8 py-4 bg-manzana-accent text-manzana-black font-semibold text-sm tracking-wide hover:bg-manzana-white transition-colors">
            AGENDAR SESIÓN
          </a>
          <p className="mt-4">
            <a href="/diagnostico" data-track="clic_diagnostico" data-track-label="blog-resistencia-pasiva" className="text-manzana-accent hover:text-manzana-white text-sm transition-colors">
              O haz el diagnóstico primero →
            </a>
          </p>
        </div>

        <div className="mt-12">
          <a href="/blog" className="text-manzana-mid hover:text-manzana-accent text-sm transition-colors">← Volver al blog</a>
        </div>
      </div>
    </article>
  )
}
