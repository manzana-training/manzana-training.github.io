# Auditoria Completa — sitio-web MANZANA

**Fecha:** 2026-04-14
**Dominio:** manzanatraining.com.mx
**Stack:** Next.js 14 + Tailwind CSS 3 + TypeScript, static export a GitHub Pages

---

## FASE 1 — Mapeo del proyecto

### Arbol del proyecto

```
sitio-web/
├── .env.local                 # Clave OpenAI (no se usa en build)
├── .github/workflows/deploy.yml  # CI/CD: build + deploy a GitHub Pages
├── .gitignore
├── app/
│   ├── globals.css            # 2,070 lineas — todo el sistema visual en un solo archivo
│   ├── layout.tsx             # Layout raiz: header, footer, GA4, schema.org, fonts
│   ├── page.tsx               # Homepage (8 secciones + hero + cierre)
│   ├── robots.ts              # Genera robots.txt
│   ├── sitemap.ts             # Genera sitemap.xml (13 URLs)
│   ├── blog/
│   │   ├── page.tsx           # Indice del blog (7 articulos)
│   │   ├── aguantar-el-plan/page.tsx
│   │   ├── cambiar-lo-que-funciona/page.tsx
│   │   ├── cortar-la-infeccion/page.tsx
│   │   ├── decidir-sin-informacion-completa/page.tsx
│   │   ├── liderar-sin-estar-seguro/page.tsx
│   │   ├── oxigeno-o-muerte/page.tsx
│   │   └── resistencia-pasiva-el-enemigo-invisible/page.tsx
│   ├── caso/page.tsx          # Caso practico gratuito
│   ├── contacto/page.tsx      # Formulario Formspree + LinkedIn + email
│   ├── diagnostico/page.tsx   # CTA hacia Google Apps Script externo
│   └── metodologia/page.tsx   # Metodologia completa: 12 posiciones, 15 drills, 28 principios
├── components/
│   ├── EmailCapture.tsx       # Captura de email en blog (Formspree)
│   ├── LazyVideo.tsx          # Video con IntersectionObserver (lazy load)
│   ├── MobileNav.tsx          # Menu hamburguesa para movil
│   └── RevealScript.tsx       # Animacion reveal al hacer scroll
├── public/
│   ├── CNAME                  # manzanatraining.com.mx
│   ├── googledf170a51ee9fa260.html  # Verificacion Google Search Console
│   ├── caso-manzana-decidir.html    # PDF/caso descargable
│   ├── logo.png               # 14 KB
│   ├── blog-*.png             # 7 imagenes de blog (1.6-3.5 MB cada una)
│   └── videos/
│       ├── hero.mp4           # 7 MB
│       └── franja.mp4         # 5.9 MB
├── out/                       # Build estatico generado
├── next.config.js             # output: 'export', images: unoptimized
├── tailwind.config.js         # Paleta manzana, Inter + JetBrains Mono
├── package.json               # Next 14.2.35, React 18.3.1
└── tsconfig.json              # strict: false
```

### Stack

| Capa | Tecnologia |
|------|-----------|
| Framework | Next.js 14 (App Router) |
| Estilos | Tailwind CSS 3 + CSS custom (2,070 lineas en globals.css) |
| Tipografia | Google Fonts: Fraunces, Inter, IBM Plex Mono, JetBrains Mono |
| Deploy | GitHub Pages via GitHub Actions |
| Formularios | Formspree (contacto + email capture) |
| Diagnostico | Google Apps Script externo |
| Analytics | GA4 (G-24XD7HWXM5) |
| Imagenes | PNG sin optimizar, generadas con gpt-image-1 |
| Videos | MP4 (hero 7MB, franja 5.9MB) |

### Flujo de contenido

Los documentos de `brain/` (identidad, metodologia, negocio) NO alimentan el sitio de forma automatizada. Todo el contenido esta hardcodeado directamente en los archivos `.tsx`. No existe un pipeline documento-a-pagina; cada articulo de blog es un archivo `page.tsx` independiente con contenido inline. El `brain/` sirve como referencia manual para generacion de contenido con Claude.

---

## FASE 2 — Arquitectura y codigo

### Separacion contenido/presentacion/logica

**Problema principal: cero separacion.** Todo el contenido vive directamente en los componentes TSX. No hay archivos `.mdx`, `.json` ni fuente de datos externa. Cada articulo de blog es un componente React completo con HTML, metadata y contenido incrustado.

- Los datos de posiciones, drills y principios estan hardcodeados como arrays dentro de `metodologia/page.tsx`
- Los posts del blog se listan manualmente en `blog/page.tsx` (array `posts`) y cada articulo es un archivo TSX independiente
- El sitemap se mantiene manualmente en `sitemap.ts` — hay que agregar cada URL nueva a mano
- La metadata se duplica en cada pagina (BASE_URL, SLUG, TITLE, DESCRIPTION, IMAGE, DATE)

### Manejo de rutas y URLs

- URLs limpias y semanticas: `/blog/cortar-la-infeccion`, `/metodologia`, `/caso`
- Slugs en espanol, coherentes con los nombres de las posiciones
- **No se usa `next/link`** — toda la navegacion usa tags `<a>` nativos. Esto significa que **cada click de navegacion es una recarga completa de pagina** en lugar de una transicion client-side. En static export esto es funcional pero sacrifica velocidad percibida.

### Componentes

4 componentes en `components/`:

| Componente | Calidad | Notas |
|-----------|---------|-------|
| `LazyVideo.tsx` | Bueno | IntersectionObserver con rootMargin, lazy load correcto |
| `RevealScript.tsx` | Aceptable | Solo se ejecuta una vez al montar; no observa elementos agregados despues |
| `MobileNav.tsx` | Bueno | Manejo de overflow, aria-labels, cierre al click fuera |
| `EmailCapture.tsx` | Bueno | Estados claros, manejo de errores |

### Build pipeline

- `next build` con `output: 'export'` genera HTML estatico en `/out`
- `images.unoptimized: true` — **Next.js Image Optimization esta deshabilitado**. Todas las imagenes se sirven tal cual (PNG sin comprimir)
- El deploy via GitHub Actions es correcto y simple
- Node 18 en CI (valido pero ya no es LTS activo)

### Imagenes

**Problema critico de rendimiento.** Las imagenes de blog son PNG sin comprimir de 1.6-3.5 MB cada una:

| Archivo | Tamano |
|---------|--------|
| blog-decidir-sin-info.png | 3.5 MB |
| blog-liderar-sin-estar-seguro.png | 3.5 MB |
| blog-resistencia-pasiva.png | 2.4 MB |
| blog-aguantar-el-plan.png | 2.4 MB |
| blog-cambiar-lo-que-funciona.png | 2.4 MB |
| blog-cortar-la-infeccion.png | 2.4 MB |
| blog-oxigeno-o-muerte.png | 1.6 MB |

- Formato: PNG 1792x1024 RGB
- No hay versiones WebP ni AVIF
- No se usan atributos `width`/`height` en los `<img>` (riesgo de CLS)
- No hay `loading="lazy"` en las imagenes de articulos (se usa `<img>` nativo sin lazy)
- Los videos (hero.mp4: 7MB, franja.mp4: 5.9MB) estan correctamente lazy-loaded via `LazyVideo.tsx`

### Fonts

- Se cargan 4 familias via Google Fonts en un solo `<link>` en `layout.tsx`
- `display=swap` esta activo (bien)
- `preconnect` a fonts.googleapis.com y fonts.gstatic.com (bien)
- **Problema:** Se cargan 4 familias (Fraunces, IBM Plex Mono, Inter, JetBrains Mono) pero Tailwind config solo referencia Inter y JetBrains Mono. El CSS custom usa Fraunces y IBM Plex Mono. Tailwind define `fontFamily.mono` como JetBrains Mono pero el CSS usa `"IBM Plex Mono"` para labels. **JetBrains Mono parece no usarse en ninguna parte del CSS final** — solo esta en el tailwind config.
- La cadena de Google Fonts es larga (4 familias con variaciones), lo que puede impactar TTFB tipografico

---

## FASE 3 — SEO tecnico

### Estructura de encabezados

**Bien implementado en general:**
- Cada pagina tiene un unico `<h1>`
- Jerarquia H1 > H2 > H3 respetada en articulos y paginas de contenido
- Los articulos de blog usan H2 para secciones y H3 para sub-items

**Problemas detectados:**
- En la homepage, el `<h2>` de la seccion "Tesis" (linea 30-32, `page.tsx`) es enorme visualmente pero semanticamente esta al mismo nivel que los demas H2. No hay problema tecnico, pero hay 6 elementos H2 en la homepage sin jerarquia secundaria clara para crawlers.

### Meta tags

**Bien implementado:**
- `title` y `description` dinamicos en todas las paginas
- Open Graph completo (title, description, type, url, images, locale) en home, blog, blog posts, caso, diagnostico
- Twitter Card (`summary_large_image`) en home y todos los posts
- `metadataBase` configurado correctamente
- `keywords` solo en la homepage (correcto — Google ya no las pondera)

**Problemas:**
- Metodologia y Contacto **no tienen Open Graph images** — al compartir en redes, no tendran imagen
- Metodologia **no tiene URL canonica** (`alternates.canonical` ausente)
- Contacto **no tiene URL canonica** ni OG URL

### URLs canonicas

| Pagina | Canonical |
|--------|-----------|
| Home | Si (en metadata.alternates) |
| Blog index | Si |
| Blog posts | Si (cada uno) |
| Caso | Si |
| Diagnostico | Si |
| Metodologia | **NO** |
| Contacto | **NO** |

### Sitemap y robots.txt

- `robots.txt` correcto: Allow all, apunta al sitemap
- `sitemap.xml` contiene las 13 URLs relevantes
- Las fechas `lastModified` usan `new Date()` para paginas estaticas (genera la fecha del build, no del ultimo cambio real). Esto es aceptable pero no ideal.

### Datos estructurados (Schema.org)

- **Organization** en layout.tsx (global) — correcto: nombre, URL, descripcion, areaServed, knowsAbout, sameAs
- **BlogPosting** en cada articulo — correcto: headline, description, image, datePublished, author, publisher
- **Falta** `Service` schema para la pagina de metodologia/servicios
- **Falta** `FAQPage` schema (seria util para diagnostico o caso)
- **Falta** `BreadcrumbList` para ayudar a Google a entender la estructura del sitio
- **Falta** `LocalBusiness` — relevante dado que opera en CDMX

### Core Web Vitals (potenciales)

| Metrica | Riesgo | Causa |
|---------|--------|-------|
| **LCP** | ALTO | Imagenes de blog de 1.6-3.5 MB sin comprimir. Hero video de 7 MB. Sin preload del LCP element. |
| **CLS** | MEDIO | Imagenes `<img>` sin `width`/`height` explicitos. Google Fonts con `display=swap` puede causar FOUT. Video hero sin dimensiones reservadas (tiene fallback, mitiga parcialmente). |
| **INP** | BAJO | Sitio mayormente estatico. Unica interactividad significativa: formulario contacto, email capture, mobile nav. Todo bien implementado. |

### Links internos

- Cada pagina tiene CTAs hacia `/contacto` y/o `/diagnostico` al final (bien)
- El blog no linka entre articulos (falta interconexion entre posts)
- La homepage linka a `/metodologia`, `/blog`, `/caso` y ambos CTAs finales
- El footer replica la navegacion (bien para crawlers)
- **No hay breadcrumbs** en paginas internas

### Accesibilidad para crawlers

- Todo el contenido esta en HTML estatico (generado en build). Excelente para SEO.
- La animacion `reveal` arranca con `opacity: 0` — los crawlers modernos procesan JS, pero **crawlers basicos/bots de redes sociales podrian ver contenido invisible**. El contenido SI esta en el HTML, solo oculto por CSS.
- No hay contenido detras de JavaScript (excepto EmailCapture que requiere interaccion)

---

## FASE 4 — UX y accesibilidad

### Navegacion

- Header fijo con `mix-blend-mode: difference` — inteligente para funcionar sobre fondos claros y oscuros
- 5 items en nav principal: Metodologia, Blog, Caso, Diagnostico, Contacto
- Mobile nav: hamburguesa con overlay fullscreen, animacion de apertura/cierre
- **Problema:** No hay indicador de pagina activa. El usuario no sabe en que pagina esta mirando la nav.

### Jerarquia visual y CTA

- Flujo homepage bien construido: Hero > Tesis > Que hacemos > Franja > Beneficios > Posiciones > Para quien > Sesion > Caso > Manifiesto > Cierre
- Dos CTAs principales en el cierre: "Agendar sesion" y "Haz el diagnostico"
- Los articulos terminan con CTA dual (contacto + diagnostico) + email capture
- **El diagnostico es externo** (Google Apps Script) — el usuario sale del sitio al hacer click. Esto puede causar bounce.

### Responsive

**Bien implementado:**
- Breakpoints en 768px y 900px
- Grid de 3 columnas colapsa a 1 columna en movil
- Hero ajusta tipografia con `clamp()`
- Footer se apila verticalmente
- Formulario se apila en movil
- Menu hamburguesa funcional

**Problemas:**
- La grid 3-columnas (1fr 10fr 1fr) de la homepage deja el label `col-label` en una columna muy estrecha en tablets (769-1024px). Puede verse apretado.
- Video hero ocupa 100vh sin considerar barras de navegacion del browser en movil (puede causar scroll indeseado)

### Accesibilidad

**Bien:**
- `lang="es"` en `<html>` (correcto)
- `aria-label` en wordmark y boton de menu movil
- `aria-expanded` en boton hamburguesa
- `aria-hidden="true"` en barras decorativas
- Alt text descriptivo en todas las imagenes de blog
- Labels en todos los campos del formulario de contacto

**Problemas:**
- **No hay `focus-visible` en links de navegacion ni en CTAs.** Solo los inputs del formulario y email capture tienen estilos de focus. Un usuario de teclado no puede ver donde esta el foco al navegar links.
- **El video hero no tiene alternativa de texto** ni `aria-label`. Los videos decorativos deberian tener `aria-hidden="true"`.
- **El overlay del menu movil** no atrapa el foco (focus trap). Un usuario de teclado podria navegar fuera del menu abierto.
- **Contraste:** El texto `color: var(--gray)` (`rgba(10,10,10,0.045)` en modo claro y `rgba(255,255,255,0.48)` en modo oscuro) puede tener contraste insuficiente para texto pequeno en labels mono de 11px.

### Velocidad percibida

- Animaciones `reveal` con IntersectionObserver — buena velocidad percibida, contenido aparece al scroll
- Hero tiene animacion escalonada (`mz-rise`) — entrada elegante
- **No hay skeleton screens** ni loading states para la pagina (no necesarios en static export)
- La recarga completa de pagina al navegar (sin `next/link`) genera un flash blanco entre paginas

### Tipografia y espaciado

- Sistema tipografico consistente basado en CSS custom properties
- 4 familias bien diferenciadas por uso: serif (Fraunces) para display, sans (Inter) para cuerpo, mono (IBM Plex Mono) para labels
- Espaciado generoso y consistente (128px-140px entre secciones, 48px padding lateral)
- **El archivo `globals.css` de 2,070 lineas tiene un sistema de diseno completo pero monolitico.** No hay variables o tokens compartidos via Tailwind; todo vive en CSS custom properties dentro de `.mz-page`.

---

## FASE 5 — Identidad y consistencia

### Coherencia voz/identidad

El sitio transmite fielmente la identidad documentada en `brain/`:

- **Sobria:** Sin iconos decorativos, sin fotos stock, sin emojis
- **Filosa:** Copy directo — "No sales motivado. Sales entrenado."
- **Concreta:** Numeros especificos (12 posiciones, 15 drills, 68%)
- **Provocadora:** "La cultura no aparece cuando todo va bien. Aparece cuando todo arde."
- **Directa:** Sin rodeos en CTAs — "Agendar sesion", no "Descubre mas"

El vocabulario respeta estrictamente las reglas de `voz_y_tono.md`: usa "entrenar", "cerrar", "cortar", "drill", "posicion", "reflejo". No aparece ningun termino prohibido (empower, journey, holistic, etc.).

### Diseno vs identidad documentada

Hay una **divergencia deliberada** entre `ux_diseno.md` y el sitio actual:

| Aspecto | brain/ux_diseno.md | Sitio actual |
|---------|-------------------|--------------|
| Fondo | "Siempre navy oscuro. Nunca fondo blanco ni claro." | Homepage usa fondo claro `#F4F2ED` con secciones oscuras alternas |
| Paleta | Navy `#0d1a35` + oro `#E0C58F` + crema | Claros `#F4F2ED`/`#0A0A0A` + serif editorial |
| Tipografia | Inter para todo, JetBrains Mono para labels | Fraunces para display, Inter para cuerpo, IBM Plex Mono para labels |
| Botones | `bg-manzana-accent`, esquinas rectas, MAYUSCULAS | Links tipograficos con underline animado |
| Cards | `border border-white/5`, sin radius, sin sombras | No usa cards — usa listas y grids |

Esta divergencia parece intencional (el README del sitio menciona "v13 port" y el usuario confirmo "v14 completo"). **El documento `ux_diseno.md` esta desactualizado** respecto al diseno actual.

### Tokens de diseno

**Centralizados en CSS custom properties dentro de `.mz-page`:**

```css
--bg: #F4F2ED;
--ink: #0A0A0A;
--ink-soft: #2A2826;
--gray: #A8A39A;
--rule: rgba(10,10,10,0.12);
--serif: "Fraunces", Georgia, serif;
--sans: "Inter", -apple-system, system-ui, sans-serif;
--mono: "IBM Plex Mono", ui-monospace, Menlo, monospace;
--ease: cubic-bezier(0.2, 0, 0, 1);
```

**Problema:** Tailwind config define una paleta `manzana` (black, dark, gray, mid, light, accent) que **no se usa en el CSS del sitio actual**. El sitio usa las custom properties de `.mz-page`. Hay dos sistemas de color coexistiendo sin relacion.

### Consistencia entre secciones

- Sistema visual uniforme en todas las paginas: misma grid, mismos componentes, misma tipografia
- Las paginas internas (caso, blog, diagnostico, contacto, metodologia) usan el mismo layout dossier (sticky label + hairline + body)
- **No hay inconsistencias visuales significativas entre secciones.**

---

## FASE 6 — Riesgos y deuda

### SEO

1. **Imagenes sin comprimir** — 18+ MB en imagenes de blog que impactan LCP directamente
2. **Falta canonical** en /metodologia y /contacto
3. **Falta OG image** en /metodologia y /contacto — compartir en redes sin imagen
4. **Sin breadcrumbs** estructurados (schema ni visal)
5. **Sin interconexion** entre articulos del blog

### UX

1. **Recarga completa entre paginas** (sin `next/link`) — flash blanco al navegar
2. **Diagnostico externo** — el usuario sale del sitio
3. **Sin indicador de pagina activa** en la navegacion
4. **Sin focus-visible** en links y CTAs — barrera de accesibilidad

### Pipeline de contenido

1. **Contenido hardcodeado en TSX** — agregar un articulo requiere:
   - Crear carpeta + page.tsx con todo el HTML
   - Agregar al array `posts` en blog/page.tsx
   - Agregar URL al sitemap.ts
   - Generar imagen y ponerla en public/
   - Son 4 pasos manuales con riesgo de olvidar alguno
2. **Sin MDX ni CMS** — no hay forma de delegar creacion de contenido
3. **El sitemap se mantiene a mano** — facil de desincronizar

### Dependencias

- Next.js 14.2.35 — version estable, sin vulnerabilidades conocidas
- React 18.3.1 — estable
- TypeScript `strict: false` — no detecta errores de tipo que podrian causar bugs silenciosos
- **No hay `package-lock.json` auditado.** Se deberia correr `npm audit` periodicamente.

### Deuda tecnica

1. **globals.css de 2,070 lineas** — monolitico, dificil de mantener. Mezcla estilos de home, blog, metodologia, formularios, responsive todo en un archivo.
2. **Dos sistemas de color** — Tailwind config `manzana.*` vs CSS custom properties `--ink`, `--bg`, etc.
3. **`ux_diseno.md` desactualizado** — documento de referencia no refleja el diseno actual
4. **JetBrains Mono se carga pero no se usa** — peso innecesario en la cadena de Google Fonts

---

## FASE 7 — Recomendaciones priorizadas

### CRITICO — Afecta SEO o UX severamente

**1. Convertir imagenes de blog a WebP y reducir tamano**
- Archivo: `public/blog-*.png` (7 archivos, 18+ MB total)
- Problema: PNGs de 1.6-3.5 MB cada uno destruyen LCP. Un usuario movil con 3G necesita 10+ segundos solo para cargar una imagen.
- Solucion: Convertir a WebP con calidad 80-85%. Resultado esperado: 150-300 KB por imagen. Agregar `width` y `height` a todos los `<img>`. Considerar servir AVIF como primera opcion con fallback WebP.

**2. Agregar `width` y `height` a todas las imagenes**
- Archivos: `app/blog/*/page.tsx` (7 archivos), linea ~67-70 en cada uno
- Problema: `<img>` sin dimensiones explicitas causa CLS (Content Layout Shift). Google penaliza esto en Core Web Vitals.
- Solucion: Agregar `width={1792} height={1024}` a cada `<img>` de articulo. Combinar con `style={{ width: '100%', height: 'auto' }}`.

**3. Agregar URL canonica a /metodologia y /contacto**
- Archivos: `app/metodologia/page.tsx` (linea 3-7), `app/contacto/page.tsx` (linea 3-7)
- Problema: Sin canonical, Google puede indexar versiones duplicadas o con parametros.
- Solucion: Agregar `alternates: { canonical: 'https://manzanatraining.com.mx/metodologia' }` y lo mismo para contacto.

**4. Agregar `focus-visible` a links y CTAs**
- Archivo: `app/globals.css`
- Problema: Usuarios de teclado no pueden ver donde esta el foco al navegar. Viola WCAG 2.1 AA.
- Solucion: Agregar reglas como:
  ```css
  a:focus-visible, button:focus-visible {
    outline: 2px solid var(--ink);
    outline-offset: 4px;
  }
  ```

### IMPORTANTE — Mejora significativa con esfuerzo moderado

**5. Migrar navegacion a `next/link`**
- Archivos: `app/layout.tsx`, `app/page.tsx`, todos los `page.tsx` de paginas internas
- Problema: Cada click recarga la pagina completa. En static export, `next/link` precarga y transiciona sin flash blanco.
- Solucion: Reemplazar todos los `<a href="/">` internos por `<Link href="/">` de `next/link`. Mantener `<a>` para links externos (LinkedIn, Formspree, Google Apps Script).

**6. Agregar Open Graph images a /metodologia y /contacto**
- Archivos: `app/metodologia/page.tsx`, `app/contacto/page.tsx`
- Problema: Al compartir estas paginas en redes sociales, no aparece imagen.
- Solucion: Agregar `openGraph.images` usando una imagen existente o generar una dedicada.

**7. Agregar `loading="lazy"` a imagenes de articulos**
- Archivos: `app/blog/*/page.tsx` (7 archivos)
- Problema: La imagen del articulo se carga inmediatamente aunque esta debajo del fold.
- Solucion: Agregar `loading="lazy"` al `<img>` de cada articulo. Nota: si la imagen esta above-the-fold, NO usar lazy; en ese caso, considerar `<link rel="preload">`.

**8. Agregar links cruzados entre articulos del blog**
- Archivos: cada `app/blog/*/page.tsx`
- Problema: Los articulos son islas. No hay links entre ellos. Google valora la interconexion interna.
- Solucion: Agregar un bloque "Articulos relacionados" al final de cada post con 2-3 links a otros articulos. Usar el campo `block` para relacionar posts de bloques similares.

**9. Eliminar JetBrains Mono de la carga de Google Fonts**
- Archivo: `app/layout.tsx` (linea 76)
- Problema: Se carga JetBrains Mono pero nunca se usa en el CSS. IBM Plex Mono lo reemplazo.
- Solucion: Eliminar `JetBrains+Mono:wght@400;500` del URL de Google Fonts. Actualizar `tailwind.config.js` para referenciar IBM Plex Mono en `fontFamily.mono`.

**10. Agregar `aria-hidden="true"` a videos decorativos**
- Archivo: `components/LazyVideo.tsx`
- Problema: Los videos son puramente decorativos (hero, franja) pero no estan marcados como tales para lectores de pantalla.
- Solucion: Agregar `aria-hidden="true"` al elemento `<video>` en LazyVideo.tsx.

### NICE TO HAVE — Pulido y optimizacion

**11. Dividir globals.css en modulos**
- Archivo: `app/globals.css` (2,070 lineas)
- Problema: Archivo monolitico dificil de mantener.
- Solucion: Separar en archivos por seccion: `base.css`, `header.css`, `home.css`, `article.css`, `responsive.css`. Importar desde globals.css.

**12. Migrar contenido a MDX o JSON**
- Archivos: todos los `page.tsx` de blog
- Problema: Agregar contenido requiere editar TSX. Fragil y no delegable.
- Solucion: Migrar a MDX con frontmatter (titulo, fecha, imagen, bloque) + layout compartido. Esto tambien simplificaria la generacion automatica de sitemap y blog index.

**13. Agregar schema BreadcrumbList**
- Archivo: `app/layout.tsx` o paginas individuales
- Problema: Google no puede inferir la jerarquia del sitio de forma estructurada.
- Solucion: Agregar JSON-LD de BreadcrumbList en paginas internas (Blog > Articulo, etc.).

**14. Agregar indicador de pagina activa en la nav**
- Archivos: `app/layout.tsx`, `components/MobileNav.tsx`, `app/globals.css`
- Problema: El usuario no sabe en que pagina esta.
- Solucion: Comparar `pathname` con el href de cada link y agregar clase `.active` con estilo visual (underline, color diferente).

**15. Sincronizar ux_diseno.md con el diseno actual**
- Archivo: `brain/01_identidad/ux_diseno.md`
- Problema: El documento de referencia describe un diseno anterior (navy oscuro, paleta manzana-*) que ya no aplica.
- Solucion: Actualizar para reflejar el sistema actual: Fraunces, fondo claro/oscuro alterno, custom properties, sin Tailwind palette activa.

**16. Sincronizar Tailwind config con el CSS real**
- Archivo: `tailwind.config.js`
- Problema: La paleta `manzana.*` y `fontFamily` en Tailwind no corresponden a lo que usa el CSS.
- Solucion: Actualizar para reflejar Fraunces, IBM Plex Mono y los colores actuales, o eliminar la paleta custom si no se usa.

**17. Habilitar TypeScript strict mode**
- Archivo: `tsconfig.json` (linea 10)
- Problema: `strict: false` permite bugs silenciosos.
- Solucion: Cambiar a `strict: true` y corregir errores de tipo que aparezcan.

---

## Resumen ejecutivo

El sitio MANZANA esta bien construido como producto minimo: deploy automatico, contenido accesible a crawlers, metadata SEO en la mayoria de las paginas, diseno visual coherente con la identidad de marca, y buena experiencia movil. Los problemas criticos son de rendimiento y se concentran en tres areas:

1. **Imagenes sin optimizar** (18+ MB en PNGs) que destruyen LCP y la experiencia movil.
2. **Falta de `next/link`** que causa recargas completas al navegar entre paginas.
3. **Metadata SEO incompleta** en /metodologia y /contacto (canonical + OG image).

La deuda mas significativa a mediano plazo es el contenido hardcodeado en TSX: cada nuevo articulo requiere 4 pasos manuales, y el sitemap se desincroniza facilmente. Migrar a MDX resolveria esto y habilitaria publicacion mas agil.

La identidad de marca (voz, tono, vocabulario) esta impecablemente implementada en el sitio. El unico punto de atencion es que `brain/01_identidad/ux_diseno.md` esta desactualizado respecto al diseno actual y puede confundir a futuros colaboradores o agentes.
