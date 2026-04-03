import type { Metadata } from 'next'

const BASE_URL = 'https://manzana-training.github.io'
const SLUG = 'oxigeno-o-muerte'
const TITLE = 'Oxígeno o muerte: cuando el negocio se está acabando y nadie quiere verlo'
const DESCRIPTION = 'KPIs rojos, caja que no alcanza, runway corto. Tres movimientos para dejar de planear y empezar a sobrevivir. Entrenamiento ejecutivo bajo presión real.'
const IMAGE = `${BASE_URL}/blog-oxigeno-o-muerte.png`
const DATE = '2026-04-01'

export const metadata: Metadata = {
  title: `${TITLE} — MANZANA`,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: 'KPIs rojos, caja que no alcanza, runway corto. Tres movimientos para sobrevivir.',
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
            <span className="text-manzana-accent text-xs font-mono">SUPERVIVENCIA</span>
            <span className="text-manzana-mid/40 text-xs">·</span>
            <span className="text-manzana-mid/40 text-xs">6 min</span>
            <span className="text-manzana-mid/40 text-xs">·</span>
            <span className="text-manzana-mid/40 text-xs">Abr 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-manzana-white leading-tight mb-6">
            Oxígeno o muerte: cuando el negocio se está acabando y nadie quiere verlo
          </h1>
          <p className="text-xl text-manzana-mid leading-relaxed">
            La caja no alcanza. Los KPIs están en rojo. El equipo sigue operando como si nada. Y tú ya sabes que si no cambias algo en las próximas semanas, no va a haber empresa que dirigir.
          </p>
        </div>

        {/* Imagen */}
        <div className="mb-12">
          <img
            src="/blog-oxigeno-o-muerte.png"
            alt="Llama dorada solitaria en la oscuridad — supervivencia empresarial bajo presión"
            className="w-full aspect-video object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="prose prose-invert max-w-none space-y-8">
          <div className="h-px bg-white/5" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">La posición</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              En jiu-jitsu hay un momento donde el combate deja de ser deportivo. Ya no estás buscando puntos ni posición dominante. Estás peleando por respirar. Por no quedarte sin aire. Por sobrevivir los próximos segundos.
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              En un negocio, esa posición se llama runway corto. Meses de vida. Números que no cierran. Costos que no se sostienen. Y un equipo que sigue en piloto automático porque nadie ha dicho la verdad en voz alta.
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              Aquí no aplican las reglas de tiempos normales. Aquí se aplica una sola regla: primero sobrevivir, luego mejorar.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Cómo se presenta</h2>
            <ul className="space-y-2 text-manzana-light/80">
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Caja que se acaba en semanas, no en trimestres.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>KPIs que llevan meses en rojo y nadie está cambiando nada estructural.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Costos fijos que consumen más de lo que el negocio genera.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Juntas donde se habla de &quot;estrategia a mediano plazo&quot; cuando no hay mediano plazo.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-manzana-accent mt-1">—</span>
                <span>Un founder que sigue invirtiendo tiempo en proyectos que no generan ingreso.</span>
              </li>
            </ul>
            <p className="text-manzana-mid/60 text-sm italic">
              Si estás hablando de cultura mientras la caja se vacía, ya perdiste el foco.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">El daño real</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              El problema no es que el negocio esté en riesgo. El problema es que la operación no refleja la urgencia. El equipo sigue en modo normal: reuniones largas, proyectos paralelos, decisiones lentas. Nadie recortó. Nadie priorizó. Nadie dijo: esto es lo único que importa ahora.
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              Cada semana que operas en modo normal con números de emergencia, quemas oxígeno que no tienes. Y cuando finalmente reaccionas, ya no tienes margen para maniobrar.
            </p>
            <p className="text-manzana-light/80 leading-relaxed font-medium">
              Las empresas no mueren por falta de ideas. Mueren por falta de velocidad cuando la velocidad era lo único que las salvaba.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Por qué no se actúa</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              Porque aceptar la emergencia significa aceptar que lo que estabas haciendo no funcionó. Y eso duele. Es más fácil seguir con la inercia, ajustar un número en el Excel, convencerte de que &quot;el próximo mes mejora&quot;.
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              También porque recortar es impopular. Cancelar proyectos tiene costo político. Decirle al equipo que la situación es grave genera miedo. Pero el miedo de decir la verdad es menor que el costo de no haberla dicho a tiempo.
            </p>
          </div>

          <div className="border border-manzana-accent/20 p-8 my-12">
            <p className="text-manzana-accent text-sm font-mono mb-4">LOS 3 MOVIMIENTOS</p>
            <div className="space-y-8">
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">1. Cortar el ruido</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  Lo primero no es resolver. Es dejar de hacer todo lo que no te acerca a sobrevivir. Cada proyecto, reunión, iniciativa o gasto que no genera ingreso directo o reduce costo real se congela o se mata.
                </p>
                <ul className="space-y-1 text-manzana-light/80 mt-3">
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Lista todo lo que consume tiempo y dinero. Pregunta: ¿esto genera caja en las próximas 4 semanas?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Si la respuesta es no, se congela. Sin discusión. Sin &quot;lo revisamos después&quot;.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Cancela las juntas que no tienen decisión como output. Si no se decide nada, no se reúne nadie.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Comunica con claridad: &quot;Estamos en modo supervivencia. Esto es temporal, pero es real.&quot;</span>
                  </li>
                </ul>
                <p className="text-manzana-mid/60 text-sm mt-3">No estás siendo negativo. Estás protegiendo lo que queda.</p>
              </div>
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">2. Foco brutal</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  Después de cortar, queda lo esencial. Ahora eso esencial necesita toda la energía, todo el tiempo y toda la atención del equipo. No 70%. El 100%.
                </p>
                <ul className="space-y-1 text-manzana-light/80 mt-3">
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Define una sola métrica de supervivencia. La que determina si sigues vivo el próximo mes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Asigna a cada persona una tarea que mueva esa métrica. Sin excepción.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Revisión diaria de 15 minutos. No semanal. Diaria. ¿Se movió el número? ¿Qué bloquea?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>El founder opera, no delega la emergencia. Si el barco se hunde, el capitán no está en la oficina haciendo estrategia.</span>
                  </li>
                </ul>
                <p className="text-manzana-mid/60 text-sm mt-3">Foco no es priorizar. Es eliminar todo lo demás.</p>
              </div>
              <div>
                <h3 className="text-manzana-white font-semibold text-lg mb-2">3. Ejecutar para sobrevivir</h3>
                <p className="text-manzana-light/80 leading-relaxed">
                  El plan de supervivencia no se piensa durante semanas. Se ejecuta mañana. Cada día sin ejecución es un día menos de oxígeno. La perfección es un lujo que no puedes pagar ahora.
                </p>
                <ul className="space-y-1 text-manzana-light/80 mt-3">
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Toma las decisiones difíciles que llevas semanas posponiendo: recortes, cancelaciones, renegociaciones.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Comunica a clientes, proveedores y equipo. La ambigüedad en crisis destruye más que la mala noticia.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Mide en días, no en meses. Si algo no funciona en 7 días, cambia. No esperes al cierre del trimestre.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-manzana-accent mt-1">→</span>
                    <span>Protege a la gente clave. Si pierdes al equipo que puede sacarte de esto, no importa cuánto recortes.</span>
                  </li>
                </ul>
                <p className="text-manzana-mid/60 text-sm mt-3">No buscas la decisión perfecta. Buscas la decisión que te da un día más.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Lo que separa a los que sobreviven</h2>
            <p className="text-manzana-light/80 leading-relaxed">
              Las empresas que sobreviven a una crisis de caja no son las que tenían mejor producto o más talento. Son las que reaccionaron más rápido. Las que dejaron de negociar con la realidad y empezaron a operar dentro de ella.
            </p>
            <p className="text-manzana-light/80 leading-relaxed">
              Sobrevivir no es glamoroso. Es recortar lo que duele, enfocarte en lo mínimo y ejecutar sin descanso hasta que los números respiren. Después — solo después — puedes volver a pensar en crecer.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-manzana-white">Enseñanza Manzana</h2>
            <div className="text-manzana-light text-lg leading-relaxed space-y-2">
              <p>La empresa no muere cuando los números están mal.</p>
              <p>Muere cuando nadie actúa como si estuvieran mal.</p>
              <p className="text-manzana-mid/60 mt-4">
                Primero cortas el ruido.<br />
                Luego enfocas todo en una sola métrica.<br />
                Solo entonces ejecutas para sobrevivir.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 border border-manzana-accent/20 p-8 text-center">
          <p className="text-manzana-white font-semibold mb-2">
            ¿Tu negocio está quemando más oxígeno del que genera?
          </p>
          <p className="text-manzana-mid text-sm mb-6">
            Podemos entrenar esta posición en una sesión.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-4 bg-manzana-accent text-manzana-black font-semibold text-sm tracking-wide hover:bg-manzana-white transition-colors"
          >
            AGENDAR SESIÓN
          </a>
        </div>

        {/* Volver */}
        <div className="mt-12">
          <a href="/blog" className="text-manzana-mid hover:text-manzana-accent text-sm transition-colors">
            ← Volver al blog
          </a>
        </div>
      </div>
    </article>
  )
}
