// Datos confirmados y pendientes en un solo sitio.
const phoneDigits = '678288284';

export const site = {
  name: 'Humor Amarillo Coruña',
  legalName: 'Inversiones SHISO SL',
  cif: 'B70319223',
  address: { street: 'Ronda de Montealto, 4, 5A', postalCode: '15003', city: 'A Coruña', region: 'Galicia', country: 'ES' },
  tagline: 'Despedidas en A Coruña',
  lang: 'es-ES',
  email: 'animaciongalicia@gmail.com',
  phoneDisplay: '678 288 284',
  phoneTel: `+34${phoneDigits}`,
  whatsappNumber: `34${phoneDigits}`,
  price: 42,
  gaId: 'G-0FG4HS4K7G',
  gscVerification: 'tNAQ0cygBXUyAhI6JzllI4A4hg9Rl2V2K_HkjuWbBfA',
  area: 'A Coruña',
  // Humor Amarillo oficial (cumpleaños, infantiles, colegios): teléfono y página de destino. Mientras estén vacíos, ese post no se publica.
  humorOficial: { phoneDisplay: '', phoneTel: '', url: '' },
  ogImage: '/og-humor-amarillo-coruna.png',
};

export const tel = `tel:${site.phoneTel}`;

export function whatsapp(text = 'Hola, quiero consultar disponibilidad para una despedida en A Coruña.') {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/humor-amarillo-coruna/', label: 'Humor Amarillo' },
  { href: '/packs-despedida-coruna/', label: 'Packs' },
  { href: '/cena-fiesta-despedidas-coruna/', label: 'Cena y fiesta' },
  { href: '/otras-actividades-despedidas-coruna/', label: 'Actividades' },
  { href: '/alojamiento-despedidas-coruna/', label: 'Alojamiento' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contacto/', label: 'Contacto' },
];

export const pruebas = [
  'Con Sumo Gusto',
  'El Guantazo',
  'Lucha de Gladiadores',
  'Pared de Puños',
  'Telaraña',
  'Tiro de Soga',
  'Abraza la Seta',
  'Puente de Cuerdas',
  'Carrera de Dragones',
  'Rollitos de Primavera',
  'Salto al Vacío',
];
