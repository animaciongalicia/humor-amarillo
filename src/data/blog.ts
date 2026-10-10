import { site } from './site';

export interface Section { h?: string; p?: string[]; list?: string[] }
export interface Post {
  slug: string; title: string; h1: string; description: string; date: string;
  photo: string; alt: string; pos?: string; lead: string; sections: Section[]; draft?: boolean;
}

const oficial = site.humorOficial;
const oficialOk = Boolean(oficial.phoneTel);

export const allPosts: Post[] = [
  {
    slug: 'coruna-destino-despedidas-galicia',
    title: 'A Coruña, destino de despedidas en Galicia',
    h1: 'A Coruña como destino de despedidas en Galicia',
    description: 'Por qué A Coruña funciona para una despedida en Galicia: actividad, cena y fiesta, hotel en el centro y un único contacto para organizarlo todo.',
    date: '2026-10-09',
    photo: '0viajes-por-galicia', alt: 'La Torre de Hércules sobre la costa de A Coruña', pos: '25% 50%',
    lead: 'Organizar una despedida suele acabar en tres chats, cuatro presupuestos y alguien que no contesta. Elegir bien el destino te quita la mitad del problema.',
    sections: [
      { h: 'Una ciudad donde cabe todo el plan', p: [
        'Una buena despedida necesita cuatro cosas: algo que hacer por la tarde, una cena, fiesta y un sitio donde dormir. En A Coruña las tienes en la misma ciudad, sin coger el coche cada dos horas ni depender de que alguien conduzca.',
        'Hay hoteles en el centro desde 30 € por persona, con las zonas de vinos y de marcha cerca.',
        'Y no lo decimos solo nosotros: en 2026 A Coruña es Capital Nacional de la Vida Nocturna.' ] },
      { h: 'Qué puedes hacer en una despedida en A Coruña', list: [
        '<strong>De tarde:</strong> <a href="/humor-amarillo-coruna/">Humor Amarillo</a>, un circuito de 11 pruebas en Feáns / A Zapateira, desde 42 € por persona.',
        '<strong>De noche:</strong> <a href="/cena-fiesta-despedidas-coruna/">cena baile y fiesta</a> con animación, espectáculo y DJ.',
        '<strong>Para dormir:</strong> <a href="/alojamiento-despedidas-coruna/">hotel en el centro</a> o casa rural para grupos de 8 a 20.',
        '<strong>Una segunda actividad:</strong> karts, barco, paintball, escape room y <a href="/otras-actividades-despedidas-coruna/">muchas más</a>.' ] },
      { h: 'Un solo contacto para organizarlo', p: [
        'Tú dices fecha y número de personas. Nosotros te proponemos el plan. Sin perseguir a cinco proveedores y sin que tu grupo se canse antes de empezar.',
        'La disponibilidad siempre es bajo consulta y la actividad se hace sobre todo en sábado. Cuando tengas la fecha, <a href="/contacto/#formulario">consúltanos</a> cuanto antes.' ] },
    ],
  },
  {
    slug: 'coruna-ciudad-de-marcha-galicia',
    title: 'A Coruña, ciudad de marcha de moda en Galicia',
    h1: 'A Coruña, la ciudad de marcha de moda en Galicia',
    description: 'A Coruña como ciudad de marcha: cómo montar una noche de despedida que empieza con vinos, sigue con cena baile y acaba con DJ.',
    date: '2026-10-09',
    photo: '14-slide-local-despedidas', alt: 'Grupo celebrando una fiesta en el local de cenas baile',
    lead: 'En 2026 A Coruña es Capital Nacional de la Vida Nocturna. Pero lo importante no es la etiqueta: es cómo montas la noche.',
    sections: [
      { h: 'Una ciudad que sale de noche… y de tarde', p: [
        'A Coruña tiene el título de Capital Nacional de la Vida Nocturna en 2026. Y además se vive el tardeo: vermú, vinos y terrazas antes de que empiece la noche de verdad. Para una despedida es ideal: el grupo se calienta en el centro y llega con ganas a la cena y la fiesta.' ] },
      { h: 'La noche de despedida, en orden', p: [
        'Una despedida que sale bien tiene ritmo. Primero rompes el hielo, luego cenas, luego aprietas.' ],
        list: [
          '<strong>Tarde:</strong> una actividad que junte al grupo y lo ponga a reír desde el minuto uno.',
          '<strong>Cena:</strong> todos juntos, con menú cerrado. Cero discusiones sobre dónde vamos.',
          '<strong>Fiesta:</strong> animación, juegos y sesión de DJ hasta las 3:00.' ] },
      { h: 'Marcha sin depender de la puerta', p: [
        'Con un grupo grande, la noche se complica si dependes de entrar en un local o de no perderos por el camino. Con una <a href="/cena-fiesta-despedidas-coruna/">cena baile</a> la noche ya está resuelta antes de salir de casa.',
        'Y si quieres seguir con vinos y marcha por el centro, los hoteles del centro tienen cerca las zonas de vinos y de marcha.' ] },
      { h: 'Consulta con tiempo', p: [
        'La actividad se hace sobre todo en sábado y la disponibilidad es bajo consulta. Si tienes fecha, <a href="/contacto/#formulario">pregunta disponibilidad</a> hoy y no dentro de tres semanas.' ] },
    ],
  },
  {
    slug: 'mejores-despedidas-galicia-coruna',
    title: 'Las mejores despedidas de Galicia se hacen en Coruña',
    h1: 'Las mejores despedidas de Galicia se hacen en A Coruña',
    description: 'Por qué defendemos que las mejores despedidas de Galicia se hacen en A Coruña: plan completo, un solo contacto y noche resuelta.',
    date: '2026-10-09',
    photo: 'gladiadores-barna', alt: 'Dos participantes con trajes de gladiador en la prueba de lucha de Humor Amarillo',
    lead: 'Lo decimos sin vergüenza y sin humo: las mejores despedidas de Galicia se hacen en A Coruña. Te contamos por qué.',
    sections: [
      { h: 'Porque no es solo una actividad', p: [
        'Una actividad suelta se olvida. Una despedida completa se recuerda: <a href="/humor-amarillo-coruna/">Humor Amarillo</a> por la tarde, <a href="/cena-fiesta-despedidas-coruna/">cena y fiesta</a> por la noche y hotel para no volver a casa a las tantas.' ] },
      { h: 'Porque el grupo se ríe de verdad', p: [
        'Las pruebas están pensadas para que el novio, la novia y los amigos hagan el ridículo juntos. Esa es la despedida que se cuenta años después.' ] },
      { h: 'Porque lo organizas en un mensaje', p: [
        'Fecha y número de personas. Con eso te preparamos el plan. Mira los <a href="/packs-despedida-coruna/">packs de ejemplo</a>: todos se pueden adaptar.',
        'Con 11 o más, el homenajeado o la homenajeada no paga la cena.' ] },
      { h: 'Tres consejos antes de organizarla', list: [
        '<strong>Elige la fecha pronto.</strong> Con 1 o 2 meses de margen respecto a la boda no pisas los últimos preparativos.',
        '<strong>Piensa en el homenajeado o la homenajeada.</strong> Sabe al menos qué no le gustaría y adapta el plan para que lo disfrute todo el grupo.',
        '<strong>Reparte tareas.</strong> Uno no puede con todo: que alguien cercano al homenajeado haga de cómplice y guarde el secreto.' ] },
      { h: 'Y tú, ¿qué esperas?', p: [
        'Cuando tengas la fecha, <a href="/contacto/#formulario">consulta disponibilidad</a>. Cuando empieces a organizarla tú solo, ya sabes cómo acaba.' ] },
    ],
  },
  {
    slug: 'cenas-baile-despedidas-conjuntas-coruna',
    title: 'Cenas baile: despedidas conjuntas en A Coruña',
    h1: 'Cenas baile y despedidas conjuntas: así se celebra con más grupos',
    description: 'Cada sábado, entre 5 y 8 grupos celebran juntos en la cena baile: show drag queen, DJ y mucha fiesta. Así funciona una despedida conjunta en A Coruña.',
    date: '2026-10-09',
    photo: '_MG_9499', alt: 'Drag queen con peluca azul y vestido de lentejuelas actuando en una cena baile', pos: '50% 30%',
    lead: 'Una despedida con tu grupo solo está bien. Con otros cinco, siete u ocho grupos celebrando a la vez, es otra cosa.',
    sections: [
      { h: 'Cómo funciona una despedida conjunta', p: [
        'Cada sábado reunimos en la <a href="/cena-fiesta-despedidas-coruna/">cena baile</a> entre 5 y 8 grupos que celebran de forma conjunta. Cada grupo con lo suyo: su novio o su novia, sus camisetas y sus bromas. Y la fiesta, compartida.' ] },
      { h: 'Qué te encuentras esa noche', list: [
        'Cena con menú.',
        'Show de drag queen.',
        'DJ y música para bailar.',
        'Juegos, animación y mucha fiesta.' ] },
      { h: 'Por qué se pasa mejor con más grupos', p: [
        'Porque la pista no se queda vacía, porque nadie se corta y porque cuando hay ambiente, el ambiente se contagia. Esa noche no hay que arrancar nada: ya está en marcha.',
        'Y si vais 11 o más, el homenajeado o la homenajeada no paga la cena.' ] },
      { h: 'Reserva con tiempo', p: [
        'La disponibilidad es siempre bajo consulta. <a href="/contacto/#formulario">Pregunta por tu fecha</a> y te decimos qué hay. También puedes combinarla con Humor Amarillo en un <a href="/packs-despedida-coruna/">pack</a>.' ] },
    ],
  },
  {
    slug: 'cumpleanos-infantiles-colegios-coruna',
    title: 'Cumpleaños, infantiles y colegios: Humor Amarillo oficial',
    h1: 'Cumpleaños, fiestas infantiles y colegios: te lo cuenta Humor Amarillo oficial',
    description: 'Si buscas Humor Amarillo para cumpleaños, fiestas infantiles o colegios en A Coruña, esta es la vía correcta: contacto directo con Humor Amarillo oficial.',
    date: '2026-10-09',
    photo: 'sumos-batalla', alt: 'Participantes con trajes de sumo hinchables',
    lead: 'Nosotros nos dedicamos a despedidas y grupos de adultos. Para cumpleaños, infantiles y colegios, habla directamente con Humor Amarillo oficial.',
    draft: !oficialOk,
    sections: [
      { h: 'Aquí hacemos despedidas', p: [
        'Esta web organiza despedidas de soltero y soltera, y grupos adultos. Para cumpleaños, fiestas infantiles, excursiones y colegios no gestionamos reservas.' ] },
      { h: 'Para esos planes', p: [
        `Pregunta directamente a Humor Amarillo oficial, el equipo de infantil y juvenil. Si te sirve, su teléfono es <a href="tel:${oficial.phoneTel}">${oficial.phoneDisplay}</a>.${oficial.url ? ` Y aquí tienes <a href="${oficial.url}" rel="noopener">su página oficial</a>.` : ''}` ] },
      { h: '¿Tu plan es una despedida?', p: [
        'Entonces estás en el sitio correcto: <a href="/contacto/#formulario">consulta disponibilidad</a>.' ] },
    ],
  },
];

export const posts = allPosts.filter((p) => !p.draft);
export const fmtDate = (d: string) => new Date(d + 'T12:00:00').toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
