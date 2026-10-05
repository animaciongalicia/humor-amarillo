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
4. **Los 7 PC**: horario, qué incluye y sesión de drag vienen del PDF 2026. Confirmar que aplican a Los 7 PC en 2027.
5. **Contacto**: solo 678 288 284 y animaciongalicia@gmail.com (el PDF trae también 881 255 607 e info@despedidascoruna.es).
6. **Excluido a propósito**: tuppersex, boy-stripper, buggies y quads. Se pueden añadir en `src/data/activities.ts`.

## Falta
- **Fotos** en `src/assets/photos/` (ver README ahí). Ahora hay huecos visibles; `PUBLIC_HIDE_PHOTO_SLOTS=1` los oculta.
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
