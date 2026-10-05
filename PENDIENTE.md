# Pendiente de completar / confirmar

## Confirmar (datos que he tomado del PDF "Coruña 2026" o deducido)
1. **Dominio**: usado `https://www.humoramarilloencoruna.com` (el enlace que pasaste). El texto decía `humoramarillocoruna.com`: confirma cuál es el bueno. Se cambia en `astro.config.mjs` o con la variable `SITE_URL`.
2. **Humor Amarillo**: tú dijiste "una consumición por persona"; el PDF dice "2 bebidas". Dejé una. También tomé del PDF: mínimo 6 participantes, exclusividad con 12 y gratis el novio/a con 11+1.
3. **Pack "Humor Amarillo + cena y fiesta" desde 92 €**: lo calculé (42 + 50). El resto de precios de packs son los del PDF.
4. **Los 7 PC**: usé del PDF la cena baile (desde 50 €, horario, DJ hasta las 3:00, sesión de drag). El PDF la sitúa en un restaurante concreto, que no nombro. Confirma que es Los 7 PC y que el precio/horario siguen vigentes (el PDF habla de temporada 4 abril–26 septiembre 2026, no la publico).
5. **Datos de contacto**: el PDF trae también 881 255 607 e info@despedidascoruna.es; uso solo 678 288 284 y animaciongalicia@gmail.com. Dirección: usé la que me diste (Ronda de Montealto); el PDF cita C/ Coronel Cerviño 1-6A.
6. **Excluido a propósito**: tuppersex, boy-stripper, buggies y quads (tachados en el PDF). Se pueden añadir en `src/data/activities.ts`.
7. **Precios de 2026**: revisar que sigan vigentes antes de publicar.

## Falta
- **Fotos**: `src/assets/photos/` (ver README). Ahora hay huecos visibles; al final, con las fotos puestas, no hace falta tocar nada. Para ocultar los huecos antes: `PUBLIC_HIDE_PHOTO_SLOTS=1`.
- **Aviso legal** (`src/pages/aviso-legal-privacidad.astro`): datos del Registro Mercantil y plazo de conservación. Revisar con gestoría.
- **Formulario**: abre WhatsApp o email; no guarda nada. Para recibirlo en un servidor hay que conectar un servicio.

## Migración desde WordPress (importante para no perder posicionamiento)
- Antes de cambiar el DNS, listar todas las URL actuales de la WP y preparar redirecciones 301 a las nuevas.
- Mantener el dominio, verificar Search Console y enviar `/sitemap-index.xml`.
