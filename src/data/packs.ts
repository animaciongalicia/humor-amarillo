// Packs de ejemplo. Precios "desde" por persona, según temporada y menú.
// Origen: PDF Coruña 2026 (salvo el nº 2: 42 € + 55 € de cena y fiesta 2027). Los precios pueden variar en 2027.
export interface PackItem { t: string; d: string }
export interface Pack {
  name: string; from: number; featured?: boolean;
  tagline: string; summary: string; ideal: string;
  includes: string[];       // versión corta (tarjetas de Inicio)
  items: PackItem[];        // versión detallada (página de Packs)
  notes: string[];
}

export const packs: Pack[] = [
  {
    name: 'Solo Humor Amarillo', from: 42,
    tagline: 'La actividad, sin complicaciones',
    summary: 'El circuito Gakushi-Kai de Humor Amarillo para el grupo, con una consumición y disfraz para el homenajeado o la homenajeada. Es el punto de partida de casi todos los demás packs.',
    ideal: 'Para grupos que ya tienen la cena resuelta o quieren un plan de tarde que rompa el hielo.',
    includes: ['Circuito Gakushi-Kai, 11 pruebas', 'Una consumición por persona', 'Disfraz para el homenajeado o la homenajeada'],
    items: [
      { t: 'Circuito Gakushi-Kai', d: '11 pruebas, unas 2–2,15 horas, en la zona de Feáns / A Zapateira.' },
      { t: 'Una consumición por persona', d: 'Incluida en el precio.' },
      { t: 'Disfraz', d: 'Para el homenajeado o la homenajeada.' },
    ],
    notes: ['Desde 6 participantes. Con 11 o más, el circuito es en exclusiva para vuestro grupo; si sois menos, compite con otros equipos.', 'Principalmente sábados. Disponibilidad siempre bajo consulta.'],
  },
  {
    name: 'Humor Amarillo + cena y fiesta', from: 97, featured: true,
    tagline: 'La despedida clásica, resuelta',
    summary: 'La actividad y la noche con el mismo grupo: Humor Amarillo y, después, cena baile y fiesta en nuestro local de cenas baile. Un único interlocutor, un único plan.',
    ideal: 'Para quien quiere cerrar el sábado completo sin organizar nada más.',
    includes: ['Humor Amarillo', 'Cena baile y fiesta en nuestro local'],
    items: [
      { t: 'Humor Amarillo', d: 'Desde 42 € por persona: circuito, consumición y disfraz.' },
      { t: 'Cena baile y fiesta', d: 'Desde 55 € por persona: cena con menú, bebida y postre, animación y sesión de DJ hasta las 3:00.' },
    ],
    notes: ['El precio es la suma de los dos «desde».', 'Con 11 o más personas, el homenajeado o la homenajeada no paga la cena.', 'Precios 2027 orientativos; pueden variar según temporada y menú.'],
  },
  {
    name: 'Pack Karts y fiesta', from: 119,
    tagline: 'Velocidad de día, fiesta de noche',
    summary: 'Carrera de karts, alojamiento en el centro y cena baile con fiesta. Para grupos que quieren competir y no tener que volver a casa esa noche.',
    ideal: 'Para grupos competitivos, sobre todo si vienen de fuera.',
    includes: ['Karts', 'Hotel', 'Cena y fiesta'],
    items: [
      { t: 'Karts', d: 'Mini GP (25–30 min) o Super GP (40–45 min), con carrera y mangas.' },
      { t: 'Hotel', d: 'Alojamiento en el centro de A Coruña.' },
      { t: 'Cena y fiesta', d: 'Cena baile y fiesta en nuestro local de cenas baile.' },
    ],
    notes: ['Con más de 8 personas, exclusividad de pista y licencia incluida.', 'El precio final depende de temporada, menú y número de personas.'],
  },
  {
    name: 'Pack Cena y gymkana', from: 80,
    tagline: 'Plan ligero para cualquier grupo',
    summary: 'Gymkana con guía-monitor por la ciudad o la playa, y cena conjunta después. No exige forma física: el grupo pone las pruebas al novio o a la novia y el resto es reírse.',
    ideal: 'Para grupos mixtos o a quienes no les van los planes de esfuerzo.',
    includes: ['Cena conjunta', 'Gymkana'],
    items: [
      { t: 'Gymkana', d: 'Con guía-monitor, por la ciudad o la playa. Pruebas para todo el grupo y situaciones donde el grupo pone retos al novio o a la novia.' },
      { t: 'Cena conjunta', d: 'Cena en grupo, con menú a elegir según presupuesto.' },
    ],
    notes: ['En la gymkana, novio o novia gratis con 11 o más personas (10 + 1).', 'Si preferís una temática (Cluedo, Isla del Tesoro…), consúltanos.'],
  },
  {
    name: 'Pack Cena y show', from: 109,
    tagline: 'Una noche con espectáculo',
    summary: 'Cena, un show para sorprender al homenajeado y alojamiento para no depender de nadie después. Aquí la actividad es la propia noche.',
    ideal: 'Para quien quiere una despedida más tranquila de día y con protagonismo por la noche.',
    includes: ['Cena', 'Show', 'Alojamiento'],
    items: [
      { t: 'Cena', d: 'Cena en grupo.' },
      { t: 'Show', d: 'Animación a elegir según fecha y disponibilidad: monólogo, drag queen, mago, camarero infiltrado y más.' },
      { t: 'Alojamiento', d: 'Hotel en el centro o, para grupos grandes, casa rural.' },
    ],
    notes: ['Las casas rurales admiten shows y otras animaciones.', 'El show concreto se confirma según fecha y número de personas.'],
  },
  {
    name: 'Pack del Mar', from: 120,
    tagline: 'Mar de día, cena por la noche',
    summary: 'Medio día en barco o una ruta en moto de agua, cena conjunta y alojamiento. El plan de verano para un grupo que quiere salir de la ciudad sin salir de A Coruña.',
    ideal: 'Para despedidas de buen tiempo y grupos que prefieren aire libre.',
    includes: ['Barco medio día o motos de agua', 'Alojamiento', 'Cena conjunta'],
    items: [
      { t: 'Barco medio día o motos de agua', d: 'Salida en barco desde Sada (mínimo 8 personas) o ruta en moto de agua desde A Coruña o Sada. Para las motos de agua no hace falta título; se facilitan neoprenos y chalecos.' },
      { t: 'Cena conjunta', d: 'Cena en grupo.' },
      { t: 'Alojamiento', d: 'Hotel en el centro de A Coruña.' },
    ],
    notes: ['Los precios del barco y las motos de agua varían según ruta y número de personas.', 'Sujeto a meteorología y disponibilidad.'],
  },
  {
    name: 'Pack Aventura', from: 120,
    tagline: 'Adrenalina y descanso',
    summary: 'Karts o rafting por el día, cena conjunta y alojamiento. Una despedida activa de las que se recuerdan en las agujetas del domingo.',
    ideal: 'Para grupos con ganas de moverse y probar algo distinto.',
    includes: ['Karts o rafting', 'Alojamiento', 'Cena conjunta'],
    items: [
      { t: 'Karts o rafting', d: 'Karts en circuito, o descenso con monitor y lancha neumática (en Padrón, unas 2 horas, mínimo 5 personas).' },
      { t: 'Cena conjunta', d: 'Cena en grupo.' },
      { t: 'Alojamiento', d: 'Hotel en el centro o casa rural en los alrededores.' },
    ],
    notes: ['El rafting se hace fuera de A Coruña ciudad, en Padrón.', 'Precio final según temporada, menú y número de personas.'],
  },
  {
    name: 'Pack Disparando', from: 80,
    tagline: 'Equipos, estrategia y cena',
    summary: 'Láser tag o paintball para dividir el grupo en equipos, y cena conjunta para repasar la batalla.',
    ideal: 'Para grupos que disfrutan de competir por equipos y reírse de las derrotas.',
    includes: ['Láser tag o paintball', 'Cena conjunta'],
    items: [
      { t: 'Láser tag o paintball', d: 'Láser: batalla privada de 2 h (mínimo 10 personas o pagar por 10) o abierta con otros grupos 1 h (mínimo 8). Paintball: 200 bolas incluidas, mínimo 6 personas o pagar por 6.' },
      { t: 'Cena conjunta', d: 'Cena en grupo.' },
    ],
    notes: ['Los mínimos de personas varían según la actividad elegida.', 'Precio final según temporada y menú.'],
  },
];
