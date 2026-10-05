// Datos confirmados y pendientes en un solo sitio.
const phoneDigits = '678288284';

export const site = {
  name: 'Humor Amarillo Coruña',
  tagline: 'Despedidas en A Coruña',
  lang: 'es-ES',
  email: 'animaciongalicia@gmail.com',
  phoneDisplay: '678 288 284',
  phoneTel: `+34${phoneDigits}`,
  whatsappNumber: `34${phoneDigits}`,
  los7pcUrl: 'https://los7pc.com',
  price: 42,
  area: 'A Coruña',
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
