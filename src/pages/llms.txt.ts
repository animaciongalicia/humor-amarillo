import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { packs } from '../data/packs';

export const GET: APIRoute = ({ site: origin }) => {
  const u = (p: string) => new URL(p, origin).href;
  const combo = packs.find((p) => p.featured)?.from;
  const body = `# ${site.name}

> Organización de despedidas de soltero y soltera en A Coruña: Humor Amarillo (circuito Gakushi-Kai, desde ${site.price} € por persona), cena y fiesta en nuestro local de cenas baile, hotel y otras actividades. Solo adultos. Disponibilidad siempre bajo consulta.

## Datos clave
- Actividad: circuito Gakushi-Kai de Humor Amarillo, 11 pruebas, unas 2–2,15 horas, principalmente sábados, zona Feáns / A Zapateira (A Coruña). Solo adultos.
- Precio: desde ${site.price} € por persona; incluye una consumición por persona y disfraz para el homenajeado o la homenajeada.
- Grupo: desde 6 participantes; con 11 o más, el circuito es en exclusiva para el grupo.
- Cena baile y fiesta: desde 55 € por persona (precio orientativo 2027); con 11 o más personas, el homenajeado o la homenajeada no paga la cena.
- Pack Humor Amarillo + cena y fiesta: desde ${combo} € por persona. Hay 8 packs de ejemplo, personalizables.
- Hotel en el centro de A Coruña desde 30 € por persona; actividades alternativas desde 22 € por persona.
- Los precios son «desde», por persona y pueden variar según temporada, menú y número de personas.
- Contacto: WhatsApp y teléfono ${site.phoneDisplay}, ${site.email}.
- Titular: ${site.legalName}, CIF ${site.cif}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}.

## Páginas
- [Despedidas en A Coruña](${u('/')}): visión general del plan completo.
- [Humor Amarillo Coruña](${u('/humor-amarillo-coruna/')}): precio, duración, pruebas, qué incluye, preguntas frecuentes.
- [Packs de despedida](${u('/packs-despedida-coruna/')}): 8 packs de actividad, cena, hotel y segunda actividad, con condiciones de reserva.
- [Cena y fiesta](${u('/cena-fiesta-despedidas-coruna/')}): local de cenas baile, qué incluye y cómo es la noche.
- [Otras actividades](${u('/otras-actividades-despedidas-coruna/')}): karts, barco, paintball, escape room, catas, spa, gymkanas y animaciones, con precios.
- [Alojamiento](${u('/alojamiento-despedidas-coruna/')}): hoteles y casas rurales para grupos.
- [Contacto](${u('/contacto/')}): formulario, WhatsApp, teléfono y correo.

## Legal
- [Aviso legal y privacidad](${u('/aviso-legal-privacidad/')})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
