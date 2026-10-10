import { site } from './site';

export interface Section { h?: string; p?: string[]; list?: string[]; img?: { name: string; alt: string; pos?: string; caption?: string } }
export interface Post {
  slug: string; title: string; h1: string; description: string; date: string; category: string;
  photo: string; alt: string; pos?: string; lead: string; summary: string[];
  sections: Section[]; faq?: { q: string; a: string }[]; draft?: boolean;
}

const oficial = site.humorOficial;
const oficialOk = Boolean(oficial.phoneTel);

export const allPosts: Post[] = [
  {
    slug: 'coruna-destino-despedidas-galicia',
    title: 'A Coruña, destino de despedidas en Galicia',
    h1: 'A Coruña como destino de despedidas en Galicia',
    category: 'Destino',
    description: 'Por qué A Coruña funciona para una despedida en Galicia: actividad, cena y fiesta, hotel en el centro, ciudad para ver y un único contacto para organizarlo todo.',
    date: '2026-10-09',
    photo: '0viajes-por-galicia', alt: 'La Torre de Hércules sobre la costa de A Coruña', pos: '25% 50%',
    lead: 'Organizar una despedida suele acabar en tres chats, cuatro presupuestos y alguien que no contesta. Elegir bien el destino te quita la mitad del problema. Y A Coruña lo pone fácil.',
    summary: [
      'Actividad, cena con fiesta, hotel y segunda actividad en la misma ciudad.',
      'Hoteles en el centro desde 30 € por persona, con vinos y marcha cerca.',
      'En 2026, A Coruña es Capital Nacional de la Vida Nocturna.',
      'Un solo contacto para cuadrarlo todo: fecha y número de personas, y listo.',
    ],
    sections: [
      { h: 'Lo que necesita una despedida (y casi nadie piensa)', p: [
        'Una despedida que sale bien tiene cuatro piezas: algo que hacer por la tarde, una cena, fiesta y un sitio donde dormir. Si una falla, se nota. Si fallan dos, la recuerdas por lo que no tenía que pasar.',
        'El problema no es encontrar cada pieza. Es encajarlas: horarios, desplazamientos, reservas y gente que llega tarde. Por eso el destino importa tanto como el plan.' ] },
      { h: 'Por qué A Coruña encaja', p: [
        'En A Coruña cabe todo el plan en la misma ciudad. No hace falta coger el coche cada dos horas ni pelearse por quién conduce. El centro concentra hoteles, zonas de vinos y de marcha, y la actividad está a un paso, en Feáns / A Zapateira.',
        'Y no lo decimos solo nosotros: en 2026, A Coruña es Capital Nacional de la Vida Nocturna. La ciudad sale de noche… y también de tarde, con el tardeo de vermú y terrazas antes de la cena.' ],
        img: { name: 'coruna-ayuntamiento-maria-pita', alt: 'Plaza de María Pita y el Ayuntamiento de A Coruña', caption: 'Plaza de María Pita, en pleno centro.' } },
      { h: 'Una ciudad que también se ve', p: [
        'Si el grupo llega el viernes o se queda el domingo, hay ciudad para rato. La Torre de Hércules, Patrimonio de la Humanidad, el paseo marítimo, la plaza de María Pita y las playas de Riazor y Orzán, en el mismo centro.',
        'Para muchos grupos, eso convierte la despedida en una escapada de fin de semana. Y la escapada se recuerda más que una noche suelta.' ] },
      { h: 'Qué puedes hacer en una despedida en A Coruña', list: [
        `<strong>De tarde:</strong> <a href="/humor-amarillo-coruna/">Humor Amarillo</a>, un circuito de 11 pruebas en Feáns / A Zapateira, desde ${site.price} € por persona. Unas 2–2,15 horas, con una consumición y disfraz para el homenajeado o la homenajeada.`,
        '<strong>De noche:</strong> <a href="/cena-fiesta-despedidas-coruna/">cena baile y fiesta</a> con menú, animación, espectáculo y DJ hasta las 3:00.',
        '<strong>Para dormir:</strong> <a href="/alojamiento-despedidas-coruna/">hotel en el centro</a> desde 30 € por persona, o casa rural para grupos de 8 a 20.',
        '<strong>Una segunda actividad:</strong> karts, barco, paintball, escape room, catas o spa, desde 22 € por persona. <a href="/otras-actividades-despedidas-coruna/">Ver todas</a>.' ] },
      { h: 'Un solo contacto para organizarlo', p: [
        'Aquí está la diferencia de verdad. Tú dices fecha y número de personas. Nosotros te proponemos el plan. Sin perseguir a cinco proveedores y sin que tu grupo se canse antes de empezar.',
        'Si quieres ver ejemplos, tienes <a href="/packs-despedida-coruna/">8 packs de despedida</a> ya montados. Todos se pueden adaptar.' ] },
    ],
    faq: [
      { q: '¿Cuánto cuesta una despedida en A Coruña?', a: `Depende del plan. Humor Amarillo parte de ${site.price} € por persona; con cena y fiesta, desde 97 € por persona. El hotel en el centro parte de 30 € por persona. Son precios «desde», orientativos.` },
      { q: '¿Cuándo conviene reservar?', a: 'Cuanto antes. La actividad se hace sobre todo en sábado y la disponibilidad es siempre bajo consulta.' },
      { q: '¿Hay plan para grupos pequeños?', a: 'Sí. Humor Amarillo se hace desde 6 participantes. Si sois pocos, podéis competir con otros grupos; con 11 o más, el circuito es en exclusiva.' },
    ],
  },
  {
    slug: 'coruna-ciudad-de-marcha-galicia',
    title: 'A Coruña, ciudad de marcha de moda en Galicia',
    h1: 'A Coruña, la ciudad de marcha de moda en Galicia',
    category: 'Noche',
    description: 'A Coruña, Capital Nacional de la Vida Nocturna 2026: cómo montar una noche de despedida que empieza con tardeo, sigue con cena baile y acaba con DJ.',
    date: '2026-10-09',
    photo: '3-slide-local-despedidas-2', alt: 'Gente con los brazos en alto bailando en una fiesta',
    lead: 'En 2026, A Coruña es Capital Nacional de la Vida Nocturna. Pero la etiqueta no te salva la noche. Lo que la salva es cómo la montas.',
    summary: [
      'A Coruña es Capital Nacional de la Vida Nocturna en 2026.',
      'Tardeo, cena, fiesta: el orden importa más de lo que crees.',
      'Con disfraces, algunos locales no dejan entrar. Con cena baile, la noche está resuelta.',
      'Fiesta y DJ hasta las 3:00, y el hotel en el centro.',
    ],
    sections: [
      { h: 'Una ciudad que sale de noche… y de tarde', p: [
        'A Coruña tiene el título de Capital Nacional de la Vida Nocturna en 2026. No es casualidad: es una ciudad que sale. Y además vive el tardeo, ese rato de vermú, vinos y terrazas antes de que empiece la noche de verdad.',
        'Para una despedida es perfecto. El grupo se calienta en el centro y llega con ganas a la cena y a la fiesta. Sin prisas y sin perder a nadie por el camino.' ] },
      { h: 'La noche de despedida, en orden', p: [
        'Una despedida que funciona tiene ritmo. Primero rompes el hielo, luego cenas, luego aprietas. Si te saltas un paso, lo notas.' ],
        list: [
          '<strong>Tarde:</strong> una actividad que junte al grupo y lo ponga a reír desde el minuto uno. <a href="/humor-amarillo-coruna/">Humor Amarillo</a> está hecho para eso.',
          '<strong>Tardeo:</strong> vinos y terrazas por el centro, cerca del hotel.',
          '<strong>Cena:</strong> todos juntos, con menú, bebida y postre. Cero discusiones sobre dónde vamos.',
          '<strong>Fiesta:</strong> animación, espectáculo, juegos y sesión de DJ hasta las 3:00.' ] },
      { h: 'El error clásico: depender de la puerta', p: [
        'Llegas con diez amigos disfrazados, con el novio vestido de lo que sea, y en la puerta te dicen que así no. Pasa: algunos locales de marcha de A Coruña no dejan entrar con disfraces de despedida.',
        'Con una <a href="/cena-fiesta-despedidas-coruna/">cena baile</a> esa noche ya está resuelta antes de salir de casa. El grupo va disfrazado, tiene mesa, tiene fiesta y no depende de nadie.' ],
        img: { name: '12-slide-local-despedidas-3', alt: 'Amigos con gafas de broma riendo en una fiesta de despedida', caption: 'La fiesta, sin depender de la puerta de nadie.' } },
      { h: 'Dónde dormir para no sufrir', p: [
        'La mejor decisión logística de la noche: hotel en el centro. Hay hoteles desde 30 € por persona con las zonas de vinos y de marcha cerca. Así nadie tiene que coger el coche y la noche termina cuando el grupo quiere, no cuando sale el último bus.',
        'Si sois muchos o queréis algo más tranquilo, también hay casas rurales para grupos de 8 a 20. Mira las opciones de <a href="/alojamiento-despedidas-coruna/">alojamiento</a>.' ] },
      { h: 'Consulta con tiempo', p: [
        'La actividad se hace sobre todo en sábado y la disponibilidad es bajo consulta. Si tienes fecha, pregunta hoy y no dentro de tres semanas. Cuando lo dejas para el final, la fecha que querías ya no está.' ] },
    ],
    faq: [
      { q: '¿Hasta qué hora es la fiesta de la cena baile?', a: 'La sesión de DJ es hasta las 3:00.' },
      { q: '¿Se puede ir disfrazado?', a: 'A la cena baile, sí: está pensada para despedidas. Algunos locales de marcha de la ciudad no dejan entrar con disfraces, por eso conviene tener la noche resuelta.' },
      { q: '¿Cuánto cuesta la cena y fiesta?', a: 'Desde 55 € por persona (precio orientativo 2027). Con 11 o más personas, el homenajeado o la homenajeada no paga la cena.' },
    ],
  },
  {
    slug: 'mejores-despedidas-galicia-coruna',
    title: 'Las mejores despedidas de Galicia se hacen en Coruña',
    h1: 'Las mejores despedidas de Galicia se hacen en A Coruña',
    category: 'Opinión',
    description: 'Por qué defendemos que las mejores despedidas de Galicia se hacen en A Coruña: plan completo, risas de verdad, noche resuelta y un solo contacto.',
    date: '2026-10-09',
    photo: 'gladiadores-barna', alt: 'Dos participantes con trajes de gladiador en la prueba de lucha de Humor Amarillo',
    lead: 'Lo decimos sin vergüenza y sin humo: las mejores despedidas de Galicia se hacen en A Coruña. Y no por la ciudad, que también. Por cómo se organizan.',
    summary: [
      'Una despedida completa se recuerda; una actividad suelta, no.',
      'El ridículo compartido es lo que se cuenta años después.',
      'Con 11 o más, el homenajeado o la homenajeada no paga la cena.',
      'Fecha, personas y un mensaje: el resto lo cuadramos nosotros.',
    ],
    sections: [
      { h: 'Porque no es solo una actividad', p: [
        'Una actividad suelta se olvida en dos semanas. Una despedida completa se recuerda años: <a href="/humor-amarillo-coruna/">Humor Amarillo</a> por la tarde, <a href="/cena-fiesta-despedidas-coruna/">cena y fiesta</a> por la noche y hotel para no volver a casa a las tantas.',
        'La diferencia no está en hacer más cosas. Está en que todo encaje y nadie tenga que estar pendiente del reloj.' ] },
      { h: 'Porque el grupo se ríe de verdad', p: [
        'Las 11 pruebas del circuito están pensadas para que el novio, la novia y los amigos hagan el ridículo juntos. Con Sumo Gusto, El Guantazo, Lucha de Gladiadores, Telaraña, Puente de Cuerdas, Salto al Vacío… Nadie sale igual que entró.',
        'Ese es el momento que se cuenta en la boda. No el brindis. El trompazo en la Pared de Puños.' ],
        img: { name: 'sumos-batalla', alt: 'Participantes con trajes de sumo hinchables', caption: 'Con Sumo Gusto, una de las 11 pruebas.' } },
      { h: 'Porque la noche está resuelta', p: [
        'Cena con menú, bebida y postre. Animación, espectáculo y DJ hasta las 3:00. Y un detalle que en un grupo grande se agradece: con 11 o más, el homenajeado o la homenajeada no paga la cena.',
        'Sin colas en la puerta, sin buscar mesa para quince un sábado y sin dividir al grupo en tres taxis.' ] },
      { h: 'Porque lo organizas en un mensaje', p: [
        'Fecha y número de personas. Con eso te preparamos el plan. Si quieres inspiración, mira los <a href="/packs-despedida-coruna/">packs de ejemplo</a>: desde Humor Amarillo solo hasta despedidas con karts, barco o hotel. Todos se pueden adaptar.' ] },
      { h: 'Tres consejos antes de organizarla', list: [
        '<strong>Elige la fecha pronto.</strong> Con 1 o 2 meses de margen respecto a la boda no pisas los últimos preparativos.',
        '<strong>Piensa en el homenajeado o la homenajeada.</strong> Sabe al menos qué no le gustaría y adapta el plan para que lo disfrute todo el grupo.',
        '<strong>Reparte tareas.</strong> Uno no puede con todo: que alguien cercano al homenajeado haga de cómplice y guarde el secreto.' ] },
      { h: 'Y tú, ¿a qué esperas?', p: [
        'Cuando tengas la fecha, consulta disponibilidad. Cuando empieces a organizarla tú solo, ya sabes cómo acaba: tres chats, cuatro presupuestos y alguien que no contesta.' ] },
    ],
    faq: [
      { q: '¿Cuánto dura Humor Amarillo?', a: 'Unas 2–2,15 horas. Se hace principalmente en sábado.' },
      { q: '¿Qué incluye?', a: `Desde ${site.price} € por persona, con una consumición por persona y disfraz para el homenajeado o la homenajeada.` },
      { q: '¿Competimos con otros grupos?', a: 'Si el grupo es pequeño, puede haber competición con otros grupos. Con 11 o más, el circuito es en exclusiva.' },
    ],
  },
  {
    slug: 'cenas-baile-despedidas-conjuntas-coruna',
    title: 'Cenas baile: despedidas conjuntas en A Coruña',
    h1: 'Cenas baile y despedidas conjuntas: así se celebra con más grupos',
    category: 'Cena y fiesta',
    description: 'Cada sábado, entre 5 y 8 grupos celebran juntos en la cena baile: show drag queen, DJ y mucha fiesta. Así funciona una despedida conjunta en A Coruña.',
    date: '2026-10-09',
    photo: '_MG_9499', alt: 'Drag queen con peluca azul y vestido de lentejuelas actuando en una cena baile', pos: '50% 30%',
    lead: 'Una despedida con tu grupo solo está bien. Con otros cinco, siete u ocho grupos celebrando a la vez, es otra cosa. Te contamos por qué.',
    summary: [
      'Cada sábado, entre 5 y 8 grupos celebran juntos.',
      'Cena con menú, show de drag queen, juegos y DJ.',
      'La pista no se queda vacía: el ambiente ya viene hecho.',
      'Desde 55 € por persona; con 11 o más, el homenajeado no paga la cena.',
    ],
    sections: [
      { h: 'Cómo funciona una despedida conjunta', p: [
        'Cada sábado reunimos en la <a href="/cena-fiesta-despedidas-coruna/">cena baile</a> entre 5 y 8 grupos que celebran de forma conjunta. Cada grupo llega con lo suyo: su novio o su novia, sus camisetas y sus bromas. Y la fiesta, compartida.',
        'Cenas con los tuyos. Pero cuando empieza el show y suena la música, la sala es una sola.' ] },
      { h: 'Qué te encuentras esa noche', list: [
        '<strong>Cena con menú,</strong> bebida y postre, para todo el grupo.',
        '<strong>Show de drag queen</strong> para encender la noche.',
        '<strong>Juegos y animación</strong> entre grupos.',
        '<strong>DJ y música para bailar</strong> hasta las 3:00.' ],
        img: { name: '_MG_7062', alt: 'Drag queen con micrófono señalando al público en la cena baile', pos: '70% 30%', caption: 'El show, en plena cena baile.' } },
      { h: 'Por qué se pasa mejor con más grupos', p: [
        'Porque la pista no se queda vacía. Porque nadie se corta cuando ve a otros cuarenta dándolo todo. Y porque cuando hay ambiente, el ambiente se contagia.',
        'Con un grupo solo, alguien tiene que tirar de la fiesta. Con varios, la fiesta tira de ti. Esa noche no hay que arrancar nada: ya está en marcha.' ] },
      { h: 'Lo que te ahorras', list: [
        'Buscar restaurante que acepte a quince personas disfrazadas.',
        'Que en la puerta de un local no os dejen entrar con el disfraz.',
        'Dividir al grupo entre cena, bar y discoteca.',
        'Que la noche se apague a medianoche porque no hay plan.' ] },
      { h: 'Precio y detalles', p: [
        'La cena baile parte de 55 € por persona (precio orientativo 2027). Con 11 o más personas, el homenajeado o la homenajeada no paga la cena.',
        `Si quieres la despedida completa, combínala con Humor Amarillo por la tarde: el pack parte de 97 € por persona. Lo tienes en los <a href="/packs-despedida-coruna/">packs</a>.` ] },
      { h: 'Reserva con tiempo', p: [
        'La disponibilidad es siempre bajo consulta. Dinos fecha y número de personas y te decimos qué hay. Cuando lo pruebes, no querrás una despedida de otra manera.' ] },
    ],
    faq: [
      { q: '¿Cenamos con nuestro grupo?', a: 'Sí, cenas con tu grupo. La fiesta y el show son compartidos con el resto de grupos.' },
      { q: '¿Cuántos grupos hay cada sábado?', a: 'Entre 5 y 8 grupos celebrando de forma conjunta.' },
      { q: '¿Qué incluye la cena baile?', a: 'Cena con menú, bebida y postre, animación, show, juegos y sesión de DJ hasta las 3:00.' },
    ],
  },
  {
    slug: 'cumpleanos-infantiles-colegios-coruna',
    title: 'Cumpleaños, infantiles y colegios: Humor Amarillo oficial',
    h1: 'Cumpleaños, fiestas infantiles y colegios',
    category: 'Otros grupos',
    description: 'Si buscas Humor Amarillo para cumpleaños, fiestas infantiles o colegios en A Coruña, te explicamos con quién hablar.',
    date: '2026-10-09',
    photo: 'telarana-765', alt: 'Un participante cruza la telaraña de cuerdas',
    lead: 'Nosotros nos dedicamos a despedidas y grupos de adultos. Para cumpleaños, infantiles y colegios, la vía correcta es Humor Amarillo oficial.',
    summary: [
      'Esta web organiza despedidas y grupos de adultos.',
      'Cumpleaños, infantiles, excursiones y colegios: Humor Amarillo oficial, equipo infantil y juvenil.',
    ],
    draft: !oficialOk,
    sections: [
      { h: 'Aquí hacemos despedidas', p: [
        'Esta web organiza despedidas de soltero y soltera, y planes para grupos de adultos: actividad, cena y fiesta, hotel y segunda actividad.',
        'Para cumpleaños, fiestas infantiles, excursiones y colegios no gestionamos reservas. Hay otro equipo que lo hace y lo hace bien.' ] },
      { h: 'Para esos planes', p: [
        `Pregunta directamente a Humor Amarillo oficial, el equipo de infantil y juvenil. Si te sirve, su teléfono es <a href="tel:${oficial.phoneTel}">${oficial.phoneDisplay}</a>.${oficial.url ? ` Y aquí tienes <a href="${oficial.url}" rel="noopener">su página oficial</a>.` : ''}` ] },
      { h: '¿Tu plan es una despedida?', p: [
        'Entonces estás en el sitio correcto. Mira <a href="/humor-amarillo-coruna/">Humor Amarillo para despedidas</a> o los <a href="/packs-despedida-coruna/">packs</a>.' ] },
    ],
  },
];

export const posts = allPosts.filter((p) => !p.draft);
export const fmtDate = (d: string) => new Date(d + 'T12:00:00').toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
export const slugify = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const readMin = (p: Post) => {
  const text = [p.lead, ...p.summary, ...p.sections.flatMap((s) => [...(s.p ?? []), ...(s.list ?? [])]), ...(p.faq ?? []).flatMap((f) => [f.q, f.a])].join(' ').replace(/<[^>]+>/g, '');
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
};
