# Pendiente de completar / confirmar

## Confirmado
- Dominio: `https://www.humoramarillocoruna.com`.
- Titular y dirección: Inversiones Shiso SL, B70319223, Ronda de Montealto, 4, 5A, 15002 A Coruña.
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

## Redirecciones desde la WordPress (cuando la web nueva esté lista)
Exporta y pásame, antes de tocar el DNS:
1. **Search Console** → Rendimiento → Páginas (últimos 16 meses; exporta también Consultas) y el informe Indexación → Páginas.
2. **Analytics** → páginas de destino / páginas vistas (mismo periodo, ordenado por sesiones).
3. **Sitemap de la WP** (`/sitemap.xml` o `/wp-sitemap.xml`) o un rastreo con Screaming Frog (versión gratuita sirve hasta 500 URL).
4. Enlaces externos (Search Console → Enlaces → Páginas más enlazadas) para priorizar lo que no se puede perder.

Con eso hago el mapa `redirects.csv` (origen,destino), luego `npm run redirects` genera `public/_redirects` y `vercel.json`. Regla: cada URL con tráfico o enlaces va a su equivalente más cercano, nunca todo a la portada. Después del cambio: verificar los 301 y enviar `/sitemap-index.xml` en Search Console.

## Home: pendiente de contenido
- **Opiniones de clientes reales** (con permiso): la home no tiene prueba social y es lo que más ayuda a cerrar una reserva. Se añade un bloque en cuanto las tengas.
- **Foto de cena y fiesta** (`cena-fiesta`): ahora hay un hueco visible en la home y en la página de Cena y fiesta.
