import type { APIRoute } from 'astro';
import { site } from '../data/site';

export const GET: APIRoute = ({ site: origin }) => {
  const u = (p: string) => new URL(p, origin).href;
  const body = `# ${site.name}

> Organización de despedidas de soltero y soltera en A Coruña: Humor Amarillo (circuito Gakushi-Kai, ${site.price} € por persona), cena y fiesta en Los 7 PC, hotel y otras actividades. Solo adultos. Disponibilidad siempre bajo consulta.

## Páginas
- [Despedidas en A Coruña](${u('/')}): visión general del plan completo.
- [Humor Amarillo Coruña](${u('/humor-amarillo-coruna/')}): precio, duración, pruebas, qué incluye.
- [Packs de despedida](${u('/packs-despedida-coruna/')}): combinaciones de actividad, cena, hotel y segunda actividad.
- [Cena y fiesta](${u('/cena-fiesta-despedidas-coruna/')}): Los 7 PC.
- [Otras actividades](${u('/otras-actividades-despedidas-coruna/')}): karts, barco, paintball, escape room, catas y más.
- [Alojamiento](${u('/alojamiento-despedidas-coruna/')}): hoteles y casas rurales.
- [Contacto](${u('/contacto/')}): WhatsApp, teléfono ${site.phoneDisplay}, ${site.email}.
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
