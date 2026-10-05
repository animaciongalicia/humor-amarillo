// Fuente: PDF Coruña 2026. Precios "desde", por persona salvo que se indique.
export interface Activity { name: string; price: string; detail: string }
export interface Group { id: string; title: string; intro: string; items: Activity[] }

export const groups: Group[] = [
  {
    id: 'juegos', title: 'Para reír y competir',
    intro: 'Planes de grupo para pasarlo bien sin necesidad de estar en forma.',
    items: [
      { name: 'Gymkanas urbanas', price: 'desde 25 €', detail: 'Con guía-monitor por la ciudad o la playa; el grupo pone pruebas al novio o a la novia. Novio/a gratis con 11 o más personas (10 + 1).' },
      { name: 'Gymkanas temáticas', price: 'desde 25 €', detail: 'Unas 2 horas. Cluedo, Dragon Ball, Isla del Tesoro y Loca (mín. 6 personas); Lost Perdidos (mín. 8).' },
      { name: 'Escape room', price: '22 €', detail: 'Indiana Jones, de 7 a 20 personas, o Cárceles, salas de hasta 6 personas con 60 minutos para salir.' },
      { name: 'Realidad virtual', price: '30 €', detail: 'Juegos de VR para grupo: zombis, misiones y más.' },
      { name: 'Nave Ninja y saltos', price: '30 €', detail: 'Unas 2 horas de pruebas de agilidad, barredora, bubble fútbol, sala de saltos y más. Mín. 5 personas o pagar por 5.' },
      { name: 'Bubble fútbol', price: '30 €', detail: 'Campo indoor, aprox. 1 hora. Mín. 8 personas.' },
    ],
  },
  {
    id: 'aventura', title: 'Velocidad y aventura',
    intro: 'Para grupos que prefieren adrenalina.',
    items: [
      { name: 'Karts', price: 'desde 42 €', detail: 'Mini GP (25–30 min) 42 €; Super GP (40–45 min) 58 €. Con más de 8 personas, exclusividad de pista y licencia incluida.' },
      { name: 'Láser combat', price: 'desde 25 €', detail: 'Batalla privada de 2 h, 30 € (mín. 10 personas o pagar por 10); abierta con otros grupos 1 h, 25 € (mín. 8).' },
      { name: 'Paintball', price: '25 €', detail: '200 bolas incluidas. Grupo mínimo de 6 personas o pagar por 6.' },
      { name: 'Escalada', price: '35 €', detail: 'Campo indoor, unas 2 horas. Mín. 8 personas.' },
      { name: 'Rafting', price: '35–40 €', detail: 'Descenso con monitor y lancha neumática en Padrón, de 10:30 a 16:30 h. Duración 2 h. Mín. 5 personas.' },
      { name: 'Rutas 4x4, a caballo y segways', price: 'desde 30 €', detail: '4x4 desde 30 €, a caballo desde 35 €, segways desde 30 €.' },
    ],
  },
  {
    id: 'mar', title: 'En el mar',
    intro: 'Salidas desde A Coruña o Sada.',
    items: [
      { name: 'Barco desde Sada', price: 'desde 55 €', detail: 'Mín. 8 personas. Medio día 55 €, día entero 90 €, salida nocturna 85 €, barbacoa a bordo 95 €. Incluye gasoil, patrón e IVA.' },
      { name: 'Veleros desde Sada', price: 'desde 450 €', detail: 'Para 11 personas más patrón. Medio día 450 €, día entero 700 €. Precio por barco.' },
      { name: 'Yate o pesca desde A Coruña', price: 'desde 650 €', detail: 'Máx. 10 personas más tripulación. Mediodía desde 650 € en temporada baja y 700 € en alta.' },
      { name: 'Motos de agua', price: 'desde 60 €/moto', detail: 'Desde A Coruña o Sada, motos dobles. Ruta de 30 min, 60 €; ruta de 60 min, 100 €. Neoprenos y chalecos incluidos; no hace falta título.' },
    ],
  },
  {
    id: 'planes-tranquilos', title: 'Comida, bebida y bienestar',
    intro: 'Para quien prefiere un plan más tranquilo o complementar el día.',
    items: [
      { name: 'Museo Estrella Galicia y catas de cerveza', price: 'desde 25 €', detail: 'Visita libre 25 € o guiada 30 €, con degustación de 5 cervezas. Unas 1 h 30 min.' },
      { name: 'Catas de vinos y coctelería', price: 'desde 35 €', detail: 'Cata de 4 vinos de Galicia, 35 €; con quesos, ibéricos y patés, 40 €; coctelería desde 55 €. Mín. 8 personas o pagar por 8.' },
      { name: 'Talleres de cocina', price: 'desde 35 €', detail: 'Showcooking 45 €, clase de sushi o pasta fresca 45 €, tea & coffee party 35 €. Mín. 6 personas o pagar por 6.' },
      { name: 'Ginkana de tapas', price: '50 €', detail: 'Incluye 4 tapas o pinchos y 4 bebidas. Con monitor, al mediodía.' },
      { name: 'Spa: circuito termal', price: '26 €', detail: 'Unas 2 h 30 min. Masaje de regalo para la novia (35 min) en grupos de más de 8 personas.' },
      { name: 'Beauty party', price: 'desde 37 €', detail: 'En salón (desde 50 €, 2 h, 6–12 personas) o a domicilio/hotel, con desplazamiento de 25–30 €. Maquillaje, talleres y más.' },
      { name: 'Paseo en limusina', price: 'desde 250 €', detail: 'Limusina de 8 plazas, mínimo 1 hora. Paseos o traslados para el grupo.' },
    ],
  },
  {
    id: 'animaciones', title: 'Animaciones para la despedida',
    intro: 'Pensadas para sorprender al novio o a la novia. Precio por servicio, más desplazamiento si procede.',
    items: [
      { name: 'Camarero/a infiltrado/a', price: '250 €', detail: 'Un actor se hace pasar por camarero durante 2 horas. Cuanta menos gente lo sepa, mejor.' },
      { name: 'Monólogo', price: 'desde 270 €', detail: 'Un monologuista repasa la vida de los novios y se mete con todos.' },
      { name: 'Drag queen', price: '250 €', detail: 'Show en playback y juegos.' },
      { name: 'Mago', price: '280 €', detail: 'Magia para despedidas mixtas y conjuntas.' },
      { name: 'Guía de tapas y vinos', price: '230 €', detail: 'Una actriz caracterizada acompaña al grupo por tapas y vinos durante 2 horas.' },
      { name: 'Actriz esposada', price: 'desde 250 €', detail: 'Actriz caracterizada que será el suplicio del novio (2–3 h).' },
    ],
  },
];
