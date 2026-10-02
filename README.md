# VIO · Landing de bots y automatizaciones

Sitio estático hecho con **Astro** + **Tailwind CSS v4**. No tiene backend: el formulario usa Formspree o Netlify Forms.

## Requisitos

- Node.js **22.12 o superior** (`node -v` para ver tu versión).

## Correrlo en local

```bash
npm install        # solo la primera vez
npm run dev        # servidor de desarrollo en http://localhost:4321
```

Otros comandos:

| Comando           | Qué hace                                          |
| ----------------- | ------------------------------------------------- |
| `npm run build`   | Genera el sitio final en `dist/`                  |
| `npm run preview` | Sirve `dist/` en local para revisar el build      |

## Dónde editar cada cosa

| Qué querés cambiar                          | Archivo                    |
| ------------------------------------------- | -------------------------- |
| Textos, precios, FAQ, WhatsApp, email, redes | `src/content/site.ts`      |
| Colores y tipografías                        | `src/styles/global.css` (bloque `@theme`) |
| Foto de "Sobre mí"                           | Guardala en `src/assets/` y poné el nombre en `about.photo` de `site.ts` |
| Orden de las secciones                       | `src/pages/index.astro`    |

En `site.ts`, el texto entre `**doble asterisco**` de los títulos se resalta con el color de marca.

Buscá `TODO` en el proyecto para ver lo pendiente.

### Generado automáticamente en el build

- **Código QR de la demo**: se genera desde el link `wa.me` del bot demo (`contact.demoNumber`). No usa servicios externos.
- **Imagen para compartir** (`/og.png`, 1200×630): usa `seo.ogHeadline` y `seo.ogTagline`. Es la que se ve al pegar el link en WhatsApp.
- **Favicon**, **apple-touch-icon**, **robots.txt** y **sitemap** (`/sitemap-index.xml`).

> Importante: completá `url` en `site.ts` con tu dominio real. Lo usan el sitemap, la URL canónica y la imagen de Open Graph. WhatsApp necesita una URL absoluta para mostrar la vista previa.

## Formulario de contacto

Elegí el proveedor en `site.ts` → `form.provider`.

### Opción A: Formspree (cualquier hosting, también Vercel)

1. Creá una cuenta en <https://formspree.io> y un formulario nuevo.
2. Copiá el ID del formulario. Es lo que aparece después de `/f/` en el endpoint, por ejemplo `https://formspree.io/f/xyzabcd` → `xyzabcd`.
3. En `site.ts`, poné `provider: 'formspree'` y `formspreeId: 'xyzabcd'`.
4. Hacé un envío de prueba desde el sitio publicado y confirmá tu email en Formspree. El primer envío pide verificación.

Con JavaScript, el envío se hace sin salir del sitio y redirige a `/gracias/`. Sin JavaScript, Formspree muestra su propia página de confirmación.

### Opción B: Netlify Forms (solo si deployás en Netlify)

1. En `site.ts`, poné `provider: 'netlify'`.
2. Deployá en Netlify. El formulario se detecta solo en el HTML generado, con el nombre `contacto`.
3. En el panel de Netlify, en **Forms**, activá la detección de formularios si está desactivada. Configurá ahí las notificaciones por email: **Forms → Form notifications**.

Después de enviar, el usuario ve `/gracias/`. Las dos opciones incluyen un campo trampa (honeypot) contra spam.

## Deploy

### Vercel

1. Subí el proyecto a un repositorio de GitHub, GitLab o Bitbucket.
2. En <https://vercel.com/new>, importá el repo. Vercel detecta Astro solo, y `vercel.json` ya define build `npm run build` y salida `dist`.
3. Deploy. Después agregá tu dominio en **Settings → Domains** y actualizá `url` en `site.ts`.

Alternativa por consola: `npx vercel` (preview) y `npx vercel --prod` (producción).

### Netlify

1. Subí el proyecto a un repositorio.
2. En <https://app.netlify.com>, elegí **Add new site → Import an existing project**. `netlify.toml` ya define build `npm run build`, publish `dist` y Node 22.
3. Deploy. Agregá el dominio en **Domain management** y actualizá `url` en `site.ts`.

Alternativa sin repo: `npm run build` y arrastrá la carpeta `dist/` a <https://app.netlify.com/drop>. Netlify Forms también funciona así.

## Estructura

```
src/
├─ content/site.ts      # todo el contenido editable
├─ styles/global.css    # paleta, tipografía, estilos base
├─ lib/                 # helpers (links de WhatsApp, imágenes OG/íconos)
├─ layouts/Layout.astro # <head>, SEO y Open Graph
├─ components/          # una sección por archivo
├─ assets/              # imágenes optimizadas en build (tu foto)
└─ pages/               # index, gracias y archivos generados (og.png, favicon, robots)
```

## Notas de calidad

- **JavaScript mínimo**: solo el menú móvil, las animaciones al hacer scroll y el envío del formulario. El acordeón de FAQ usa `<details>` nativo.
- **Animaciones**: se desactivan si el sistema pide reducir movimiento (`prefers-reduced-motion`). Si el JS falla, el contenido igual se ve.
- **Tipografías** autoalojadas (Bricolage Grotesque + Figtree). No se piden a Google en runtime.
