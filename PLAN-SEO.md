# Plan SEO a 4 meses — «humor amarillo coruña» y despedidas en A Coruña

Situación a 10/10/2026 (captura de Google del usuario):

1. **humoramarillooficial.com** (web oficial de la actividad) — 1.º orgánico + ficha de Google (4,4 ★, 566 reseñas).
2. **humoramarillocoruna.com/tarifas** — 2.º. Es la URL antigua de WordPress que Google aún tiene guardada; ya redirige (301) a `/humor-amarillo-coruna/`. Google la actualizará solo.
3. Instagram oficial.
4. **humoramarillocoruna.com** (home nueva) — ya aparece con el título nuevo.

PageSpeed móvil de la competencia: 56 de rendimiento, LCP 4,4 s, accesibilidad 82. La nuestra: 98–100 en todo. La velocidad suma, pero poco: no es lo que decide el 1.º puesto.

## Lo realista

«humor amarillo coruña» es casi una búsqueda de marca: Google tiende a poner primero la web oficial de la marca. Superarla es posible pero difícil. Los objetivos sensatos:

- **Mantener el 2.º puesto y ocupar más espacio** en esa misma página: home, `/humor-amarillo-coruna/`, posts del blog y, si se puede, ficha propia.
- **Ganar las búsquedas sin marca**, que son las que venden cenas: «despedidas coruña», «despedida de soltera coruña», «cena con espectáculo coruña», «cena show drag coruña», «cuánto cuesta una despedida en coruña».
- **Responder las «Más preguntas»** que Google ya enseña: ¿Cuánto cuesta? ¿Qué se hace? ¿Cómo ir vestido? ¿Qué hacer en A Coruña? Los posts programados responden a las tres primeras.

## 1. Contenido (hecho y programado)

| Fecha | Post | Busca |
|---|---|---|
| ya | 5 posts actuales | destino, marcha, mejores despedidas, cenas baile, infantiles |
| 24/10/2026 | ¿Cómo ir vestido a Humor Amarillo? | «cómo ir vestido a humor amarillo» |
| 07/11/2026 | ¿Qué se hace en Humor Amarillo? Las pruebas | «qué se hace en humor amarillo» |
| 21/11/2026 | ¿Cuánto cuesta una despedida en A Coruña? | «cuánto cuesta humor amarillo», «precio despedida coruña» |
| 05/12/2026 | Despedida de soltera en A Coruña | «despedida de soltera coruña» |
| 19/12/2026 | Despedida de soltero en A Coruña | «despedida de soltero coruña» |
| 02/01/2027 | Cena con espectáculo en A Coruña | «cena espectáculo coruña», «cena show» |
| 16/01/2027 | Despedida en A Coruña si llueve | «qué hacer en coruña si llueve» + despedida |
| 30/01/2027 | 7 errores al organizar una despedida | consejos (enlaza a todo) |

Cómo se publican: cada post está en `src/data/blog-calendar.ts` con su fecha. La web solo muestra los posts cuya fecha ya ha llegado (hora de Madrid). El workflow `.github/workflows/publicar-posts.yml` se ejecuta cada mañana; el día que toca, hace un commit y Vercel redespliega. Para cambiar fechas o textos, edita ese archivo.

Todos los posts enlazan a `/humor-amarillo-coruna/` y a la home con anclas variadas («Humor Amarillo en A Coruña», «Humor Amarillo Coruña», «circuito de Humor Amarillo»…), y a la cena baile.

## 2. Ficha de Google propia (lo que más pesa en local)

- Crear o reclamar la ficha de **tu negocio real** (organización de despedidas / local de cenas baile), con su nombre real y su dirección o zona de servicio. No usar «Humor Amarillo» en el nombre si no es el nombre del negocio: Google lo penaliza y puede suspender la ficha.
- Categorías: «Organizador de eventos» + la que mejor encaje con el local de cenas.
- Web: `https://www.humoramarillocoruna.com/`. Fotos reales de la cena, el show y los grupos.
- **Reseñas reales**: cada domingo, WhatsApp a los organizadores de los grupos del sábado con el enlace directo de reseña. Si mencionan «despedida», «Coruña», «cena», «Humor Amarillo», mejor. Nunca comprarlas ni inventarlas.
- Publicar en la ficha cada post nuevo del blog (Google Posts).

## 3. Enlaces desde tus 6–8 webs de despedidas

Sí, es la mejor palanca que tienes. Cómo hacerlo bien:

- **Un post distinto y útil en cada web** (nada de copiar el mismo texto), con 1 enlace en el cuerpo del texto hacia `/humor-amarillo-coruna/` o hacia la home.
- **Anclas variadas**: «Humor Amarillo en A Coruña», «despedidas en Coruña con cena y fiesta», «humoramarillocoruna.com», «aquí»… Nunca la misma frase exacta en todas.
- **Escalonado**: 1–2 webs al mes, no las 8 el mismo día.
- Evitar enlaces en el pie de página de todas las páginas: Google los ignora o los penaliza.
- La página de grupo «Animación Galicia» que hablamos: enlazar desde ahí a todas las webs.

## 4. Sobre la competencia

- **No publicar nada negativo sobre ellos** (lesiones, reseñas): sin pruebas públicas es un riesgo legal, y además la web vende esa misma actividad.
- Ganar por lo que ellos no tienen: plan completo (actividad + cena + show + fiesta + hotel), una web rápida y contenido que responde dudas.
- Tu web no habla de seguridad, ni a favor ni en contra: así debe seguir.

## 5. Medir

- Search Console → Rendimiento → consulta «humor amarillo coruña»: posición media, clics e impresiones de cada URL. Revisar cada 15 días, coincidiendo con cada post.
- Analytics: clics en WhatsApp y formularios desde el blog.
