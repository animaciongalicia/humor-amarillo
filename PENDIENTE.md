# Pendiente de completar / confirmar

## Confirmado
- Dominio: `https://www.humoramarillocoruna.com`.
- Titular y dirección: Inversiones SHISO SL, B70319223, Ronda de Montealto, 4, 5A, 15003 A Coruña.
- Humor Amarillo: circuito en exclusiva desde 11 personas.
- Cenas: con 11 o más, el homenajeado/a no paga. Cena baile y fiesta 2027: desde 55 €/persona.

## Confirmar
1. **Humor Amarillo gratis para el novio/a**: ahora solo lo digo para las cenas. Si también aplica a la actividad, dime desde cuántas personas.
2. **Consumición**: tú dijiste una por persona; el PDF dice "2 bebidas". Dejé una. Mínimo de 6 participantes: viene del PDF.
3. **Pack Humor Amarillo + cena y fiesta, desde 97 €**: calculado (42 + 55). El resto de packs usan los precios del PDF 2026 y la web avisa de que son orientativos para 2027. Cuando tengas los de 2027, se cambian en `src/data/packs.ts`; las actividades en `src/data/activities.ts`.
4. **Local de cenas baile**: horario, qué incluye y sesión de drag vienen del PDF 2026. Confirmar que aplican en 2027. En la web ya no aparece el nombre Los 7 PC ni el enlace a los7pc.com.
5. **Contacto**: solo 678 288 284 y animaciongalicia@gmail.com (el PDF trae también 881 255 607 e info@despedidascoruna.es).
6. **Excluido a propósito**: tuppersex, boy-stripper, buggies y quads. Se pueden añadir en `src/data/activities.ts`.

## Falta
- **Fotos**: ver `src/assets/photos/README.md`. Solo se publican las registradas en `src/data/photos.ts` (16 de 43 subidas).
  - **Derechos**: confirmado por Pablo que tiene permiso para las usadas. Si alguna persona de las fotos (show drag, fiesta) lo pidiera, retirarla en `src/data/photos.ts`. Detalle original: Las de Torre de Hércules (`0viajes-por-galicia`), María Pita, puerto con veleros (`1ventana-atlantico…`) y el segway parecen de bancos de imágenes o de webs de viajes: si no son tuyas ni tienes licencia, hay que cambiarlas. Las del show drag y las de la fiesta (`slide-local…`) salen personas: necesitan su permiso.
  - **No usadas por marcas de terceros**: `gladiadores-43223`, `gladiadores-uni`, `carrera-obstaculos-dfi34`, `tragabolas_caja_rural`.
  - **No usadas por menores o dudas**: `tirachinas-gigante-3`, `sumo-coruña-infantil`, `bolas-gigantes-g6544`, `teambuilding-A-PoS`.
  - **No usadas por calidad o procedencia**: `111-humor-y-amor…` (x2, fotos de bodas de un blog ajeno), `11-bromas…`, `11-despedidas (1)`, `1-slide-local-despedidas-1`, `gincanas-despedidas-galicia` (stock 550 px), `cenas-tematicas-baile-coruña` (360 px).
  - Si el repositorio es público, quizá convenga quitar de GitHub las fotos de terceros que no vayas a usar.
- **Aviso legal**: datos del Registro Mercantil y plazo de conservación. Revisar con gestoría.
- **Formulario**: abre WhatsApp o email, no guarda nada. Para recibirlo en un servidor, conectar un servicio.
- **Hosting**: sin decidir. Los 301 reales dependen de dónde se aloje (Vercel, Netlify o Cloudflare Pages valen).

## Decisiones tomadas (09/10/2026)
- **Parque:** la web no dice que sea nuestro ni que sea de un colaborador; solo "nosotros organizamos la experiencia completa". No volver a introducir ninguna de las dos afirmaciones.
- **Marca registrada:** no se menciona (ya no está registrada).
- **Blog (futuro):** publicar guías de A Coruña como autoridad. Cuando exista `/blog/`, quitar la regla `/blog/` de `redirects.csv` y apuntar las 5 entradas antiguas a sus equivalentes nuevas.
- **Página del grupo Animación Galicia** con las otras webs: más adelante.

## Redirecciones desde la WordPress (hechas con el export del 09/10/2026)
- `redirects.csv` tiene el mapa (13 páginas y 5 entradas publicadas, más los enlaces `?p=` y `?page_id=`); `npm run redirects` genera `vercel.json`.
- Sin regla porque la URL es igual: `/contacto/`. Borradores del export (11 entradas y 2 páginas) no son públicos: sin redirección.
- **Decidido:** `/grupos/cumpleanos/` y `/grupos/excursiones-y-colegios/` van a la portada. No se comercializan cumpleaños infantiles ni colegios: se derivan a Humor Amarillo oficial. Pendiente: publicar un post en el blog que lo explique y enlace al oficial; entonces apuntar esas dos redirecciones al post.
- **Contenido SEO antiguo** (5 entradas de blog de 2024, p. ej. Discoteca Pelícano, Playa de Riazor): ahora redirigen a la página más cercana. Si en Search Console resultan tener tráfico, conviene recrear esa guía en la web nueva.
- Antes de cambiar el dominio: probar los 301 en el despliegue y, ya publicado, vigilar en Search Console los 404.

## Dominio (cambiado el 09/10/2026)
- `www.humoramarillocoruna.com` es el principal; `humoramarillocoruna.com` redirige a www (308). HTTPS correcto. El DNS sigue en el proveedor actual (piensasolutions): correo no afectado.
- Conservar la WordPress 2–4 semanas como copia. Vigilar 404 en Search Console.

## Sitemap y llms.txt
- Enviar a Search Console: `https://www.humoramarillocoruna.com/sitemap.xml` (7 páginas). Los antiguos de WordPress redirigen a él. También siguen disponibles `sitemap-index.xml` y `sitemap-0.xml`.
- `llms.txt` incluye datos clave y las 7 páginas públicas más el aviso legal; los precios se leen de los datos del proyecto, así que se actualiza solo al cambiar `src/data/`. El precio de la cena (55 €) está escrito a mano en `src/pages/llms.txt.ts`.

## Blog (09/10/2026)
- 5 posts publicados en /blog/. El de cumpleaños/infantiles muestra solo ahí el teléfono de Humor Amarillo oficial (660 94 46 56); falta su URL de página si se quiere enlace de salida (`humorOficial.url`).
- Aviso legal: Registro Mercantil no se incluye (decisión del titular). Pendiente solo el plazo de conservación de datos.
- Imágenes: calidad webp 60/68 y hero home 1280 px (dist/_astro 4,3 MB → 3,1 MB).
