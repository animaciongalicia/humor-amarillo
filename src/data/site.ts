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
  // Humor Amarillo oficial (cumpleaños, infantiles, colegios): teléfono y página de destino. Solo se muestran en ese post (discreto). `url` es opcional.
  humorOficial: { phoneDisplay: '660 94 46 56', phoneTel: '+34660944656', url: '' },
  ogImage: '/og-humor-amarillo-coruna.png',
};

export const tel = `tel:${site.phoneTel}`;

export function whatsapp(text = 'Hola, quiero consultar disponibilidad para una despedida en A Coruña.') {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

// Webs del grupo Animación Galicia (página Quiénes somos).
export const groupSites = [
  { name: 'Animación Galicia', url: 'https://www.animaciongalicia.com/', desc: 'Donde empezó todo: animaciones, despedidas y eventos en toda Galicia.' },
  { name: 'Despedidas Galicia', url: 'https://www.despedidasgalicia.es/', desc: 'Despedidas de soltero y soltera en toda la comunidad.' },
  { name: 'Despedidas Coruña', url: 'https://www.despedidascoruna.es/', desc: 'Planes de despedida en A Coruña y alrededores.' },
  { name: 'Despedidas Vigo', url: 'https://www.despedidasvigo.com/', desc: 'Despedidas en Vigo y las Rías Baixas.' },
  { name: 'Despedidas Sanxenxo', url: 'https://www.despedidas-sanxenxo.com/', desc: 'Despedidas con playa, barco y fiesta en Sanxenxo.' },
  { name: 'Ginkanas.es', url: 'https://ginkanas.es/', desc: 'Ginkanas urbanas y experiencias para despedidas, cumpleaños, grupos y empresas.' },
  { name: 'Mil Eventos Galicia', url: 'https://www.mileventosgalicia.com/', desc: 'Eventos de empresa y team building en Galicia.' },
];

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
