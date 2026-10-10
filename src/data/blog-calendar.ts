// Posts programados: se publican solos el día de su `date` (hora de Madrid).
// Un workflow diario de GitHub (.github/workflows/publicar-posts.yml) redespliega la web ese día.
import type { Post } from './blog';
import { site, pruebas } from './site';

const HA = '/humor-amarillo-coruna/';
const CENA = '/cena-fiesta-despedidas-coruna/';
const PACKS = '/packs-despedida-coruna/';
const HOTEL = '/alojamiento-despedidas-coruna/';
const ACT = '/otras-actividades-despedidas-coruna/';
const CONTACTO = '/contacto/#formulario';

export const calendar: Post[] = [
  {
    slug: 'como-ir-vestido-humor-amarillo',
    title: '¿Cómo ir vestido a Humor Amarillo? Qué llevar a tu despedida',
    h1: '¿Cómo ir vestido a Humor Amarillo? Guía rápida para tu despedida',
    category: 'Humor Amarillo',
    description: 'Qué ropa y calzado llevar a Humor Amarillo en A Coruña, qué dejar en casa y cómo ir disfrazado sin arruinar la despedida.',
    date: '2026-10-24',
    photo: 'IMG-1788', alt: 'Grupo disfrazado a la entrada del circuito de Humor Amarillo',
    lead: 'Es la pregunta que todo el grupo hace en el chat dos días antes. Y la respuesta corta es esta: vas a correr, a caerte y a reírte. Vístete para eso.',
    summary: [
      'Ropa cómoda y deportiva que no te importe manchar.',
      'Calzado deportivo bien atado. Nada de sandalias ni suela lisa.',
      'Deja en casa joyas, relojes y todo lo que se pueda romper.',
      'El disfraz del homenajeado o la homenajeada ya va incluido.',
    ],
    sections: [
      { h: 'La regla de oro: ropa que no te importe', p: [
        `En <a href="${HA}">Humor Amarillo en A Coruña</a> el circuito es al aire libre y las pruebas son físicas: saltas, empujas, tiras de una cuerda y, sí, acabas en el suelo más de una vez. Es justo lo que hace gracia.`,
        'Así que la primera decisión es fácil: ropa cómoda y deportiva. Chándal, mallas, pantalón corto si hace bueno, camiseta transpirable. Nada que te dé pena estropear y nada que te apriete cuando tengas que moverte.' ] },
      { h: 'Calzado: aquí no se improvisa', p: [
        'Zapatillas deportivas, bien atadas y con buena suela. Es lo que más importa de todo lo que lleves puesto.',
        'Sandalias, chanclas, botas de vestir o zapatillas de suela lisa son mala idea. Vas a correr sobre hierba y superficies irregulares: el calzado es tu seguridad.' ] },
      { h: 'Qué dejar en casa (o en el coche)', list: [
        '<strong>Joyas, anillos y relojes.</strong> Se enganchan, se pierden o se rompen.',
        '<strong>Gafas de sol caras.</strong> Si necesitas gafas graduadas, mejor con cinta de sujeción.',
        '<strong>Móvil en el bolsillo durante las pruebas.</strong> Que lo guarde una persona del grupo para las fotos.',
        '<strong>Llaves y cartera sueltas.</strong> Déjalo todo junto en un sitio.' ] },
      { h: 'Una muda de recambio: el truco que nadie usa', p: [
        'La despedida no termina en el circuito. Después viene la cena y la fiesta. Si llevas una muda limpia y una toalla pequeña en el coche o en una mochila, llegarás a la noche como nuevo.',
        `Y si vais a la <a href="${CENA}">cena baile y fiesta</a>, mejor todavía: os cambiáis, os ponéis guapos y empieza la segunda parte.` ],
        img: { name: 'gladiadores-43665', alt: 'Dos participantes luchando sobre plataformas en el circuito', pos: '50% 40%', caption: 'Ropa cómoda y calzado deportivo: lo vas a agradecer.' } },
      { h: '¿Y el disfraz?', p: [
        'El disfraz del homenajeado o la homenajeada está incluido en el precio de Humor Amarillo. No tenéis que buscarlo ni llevarlo.',
        'Si el grupo quiere ir a juego, camisetas iguales o algún complemento divertido funcionan muy bien en las fotos. Eso sí: que no limite el movimiento. Un disfraz que se cae en la primera prueba dura cinco minutos.' ] },
      { h: 'Según la época del año', list: [
        '<strong>Verano:</strong> crema solar, gorra y agua. El circuito es al aire libre.',
        '<strong>Invierno y entretiempo:</strong> capas. Una sudadera que puedas quitarte cuando entres en calor.',
        '<strong>Si llueve:</strong> chubasquero ligero y, sobre todo, la muda de recambio para la noche.' ] },
      { h: 'Checklist para el chat del grupo', p: [
        'Copia y pega esto en el grupo de WhatsApp de la despedida y te ahorras veinte preguntas:' ],
        list: [
          'Ropa deportiva que no te importe manchar.',
          'Zapatillas con buena suela, bien atadas.',
          'Sin joyas, relojes ni objetos de valor.',
          'Muda limpia y toalla para la noche.',
          'Gorra y crema en verano; sudadera en invierno.' ] },
      { h: 'Lo demás, déjalo en nuestras manos', p: [
        `Humor Amarillo cuesta ${site.price} € por persona e incluye una consumición y el disfraz del homenajeado. Si queréis la despedida completa, mira los <a href="${PACKS}">packs con cena y fiesta</a>. Cuando tengas fecha y número de personas, <a href="${CONTACTO}">consulta disponibilidad</a>.` ] },
    ],
    faq: [
      { q: '¿Hay que llevar el disfraz del novio o la novia?', a: 'No. El disfraz del homenajeado o la homenajeada está incluido en Humor Amarillo.' },
      { q: '¿Se puede ir en vaqueros?', a: 'Se puede, pero no es buena idea: limitan el movimiento. Mejor ropa deportiva.' },
      { q: '¿Dónde dejamos las cosas?', a: 'Lo más práctico es llevar lo mínimo y dejar móviles y llaves a cargo de una persona del grupo.' },
    ],
  },
  {
    slug: 'que-se-hace-en-humor-amarillo-pruebas',
    title: '¿Qué se hace en Humor Amarillo? Las pruebas del circuito',
    h1: '¿Qué se hace en Humor Amarillo? Así son las pruebas del circuito en A Coruña',
    category: 'Humor Amarillo',
    description: 'Qué se hace en Humor Amarillo en A Coruña: las 11 pruebas del circuito, cuánto dura, cómo se juega según el tamaño del grupo y qué incluye.',
    date: '2026-11-07',
    photo: 'bolas-gigantes', alt: 'Un participante salta sobre las bolas gigantes del circuito',
    lead: 'Si alguna vez viste el programa de televisión, ya te imaginas la idea. Si no, te lo resumimos: once pruebas, un grupo disfrazado y muchas caídas. Y risas. Sobre todo risas.',
    summary: [
      '11 pruebas al aire libre en Feáns / A Zapateira (A Coruña).',
      'Unas 2–2,15 horas, principalmente en sábado.',
      `${site.price} € por persona, con una consumición y disfraz para el homenajeado.`,
      'Grupo pequeño: competición con otros grupos. Con 11 o más: en exclusiva.',
    ],
    sections: [
      { h: 'Qué es Humor Amarillo', p: [
        `<a href="${HA}">Humor Amarillo Coruña</a> es un circuito de pruebas físicas y divertidas, pensado para grupos de adultos: despedidas de soltero y soltera, amigos y asociaciones. No hace falta estar en forma. Hace falta ganas de hacer el ridículo con los tuyos.`,
        'Se hace en la zona de Feáns / A Zapateira, a pocos minutos del centro de A Coruña, y dura alrededor de dos horas, dos horas y cuarto.' ] },
      { h: 'Las 11 pruebas', p: [
        'Estas son las pruebas del circuito. Algunas se explican solas; otras es mejor descubrirlas allí:' ],
        list: pruebas.map((p) => `<strong>${p}</strong>`) },
      { h: 'Algunas, en detalle', list: [
        '<strong>Con Sumo Gusto:</strong> trajes de sumo hinchables y a empujar. Imposible no reírse.',
        '<strong>Lucha de Gladiadores:</strong> cara a cara, sobre plataformas. Gana quien aguanta arriba.',
        '<strong>Pared de Puños:</strong> hay que atravesar una pared llena de puños de espuma que no te lo ponen fácil.',
        '<strong>Telaraña:</strong> cruzar una red de cuerdas sin quedarte enredado.',
        '<strong>Puente de Cuerdas:</strong> equilibrio, paciencia y alguien gritando desde abajo.',
        '<strong>Tiro de Soga:</strong> el clásico. Equipo contra equipo, a ver quién tira más.' ],
        img: { name: 'pared-obstaculos-punos', alt: 'Un grupo atraviesa la pared con puños de espuma', caption: 'Pared de Puños: más difícil de lo que parece.' } },
      { h: 'Cómo se juega según el tamaño del grupo', p: [
        'Si sois un grupo pequeño, puede haber competición con otros grupos. Le da un punto extra: ya no es solo reírse, es ganar.',
        'Si sois 11 o más, el circuito es en exclusiva para vosotros y se pueden hacer equipos dentro del propio grupo. Por ejemplo, el bando del novio contra el bando de la novia. Funciona siempre.' ] },
      { h: 'Qué incluye', list: [
        `Las 11 pruebas del circuito por ${site.price} € por persona.`,
        'Una consumición por persona.',
        'Disfraz para el homenajeado o la homenajeada.',
        'Desde 6 participantes.' ] },
      { h: 'Cómo sacarle todo el partido', p: [
        'Primero, ve vestido para moverte: te lo contamos en <a href="/blog/como-ir-vestido-humor-amarillo/">cómo ir vestido a Humor Amarillo</a>. Segundo, nombra a alguien que haga fotos y vídeos: el material de ese día dura años.',
        `Y tercero, no cierres la despedida en dos horas. Lo que mejor funciona es seguir con la <a href="${CENA}">cena baile y fiesta</a>: show de drag queen, juegos y DJ hasta las 3:00. El pack con las dos cosas parte de 97 € por persona.` ] },
      { h: 'Reserva', p: [
        `La disponibilidad siempre es bajo consulta y se hace principalmente en sábado. Dinos fecha y número de personas y te decimos qué hay. Toda la información, en la página de <a href="${HA}">Humor Amarillo en A Coruña</a>.` ] },
    ],
    faq: [
      { q: '¿Cuánto dura Humor Amarillo?', a: 'Unas 2–2,15 horas.' },
      { q: '¿Hace falta estar en forma?', a: 'No. Es una actividad para reírse en grupo; cada uno participa a su ritmo.' },
      { q: '¿Cuántas personas hacen falta?', a: 'Desde 6 participantes. Con 11 o más, el circuito es en exclusiva para el grupo.' },
    ],
  },
  {
    slug: 'cuanto-cuesta-despedida-coruna',
    title: '¿Cuánto cuesta una despedida en A Coruña? Precios por persona',
    h1: '¿Cuánto cuesta una despedida en A Coruña? Presupuesto real por persona',
    category: 'Precios',
    description: 'Cuánto cuesta una despedida en A Coruña por persona: actividad, cena y fiesta, hotel y segunda actividad, con precios «desde» y ejemplos de packs.',
    date: '2026-11-21',
    photo: 'coruna-ayuntamiento-maria-pita', alt: 'Plaza de María Pita en A Coruña',
    lead: 'El dinero es lo primero que pregunta el grupo y lo último que alguien quiere calcular. Aquí lo tienes hecho: lo que cuesta cada pieza de una despedida en A Coruña.',
    summary: [
      `Humor Amarillo: desde ${site.price} € por persona.`,
      'Cena baile y fiesta: desde 55 € por persona (orientativo 2027).',
      'Humor Amarillo + cena y fiesta: desde 97 € por persona.',
      'Hotel en el centro desde 30 € y segunda actividad desde 22 €.',
    ],
    sections: [
      { h: 'Antes de nada: precios «desde»', p: [
        'Todos los precios de este artículo son por persona, «desde» y orientativos. El precio final depende de la fecha, la temporada, el menú y el número de personas. Pero te sirven para hacer números de verdad antes de lanzar la encuesta al grupo.' ] },
      { h: 'Pieza a pieza', list: [
        `<strong>Actividad de tarde:</strong> <a href="${HA}">Humor Amarillo en A Coruña</a>, desde ${site.price} € por persona, con una consumición y disfraz para el homenajeado o la homenajeada.`,
        `<strong>Cena y fiesta:</strong> <a href="${CENA}">cena baile</a> desde 55 € por persona, con menú, bebida, postre, show de drag queen y DJ. Con 11 o más, el homenajeado no paga la cena.`,
        `<strong>Alojamiento:</strong> <a href="${HOTEL}">hotel en el centro</a> desde 30 € por persona, o casa rural para grupos de 8 a 20.`,
        `<strong>Segunda actividad:</strong> karts, barco, paintball, escape room, catas o spa, desde 22 € por persona. <a href="${ACT}">Ver todas</a>.` ] },
      { h: 'Tres presupuestos tipo', p: [
        'Para que te hagas una idea, tres formas de montarla:' ],
        list: [
          `<strong>La sencilla:</strong> solo Humor Amarillo. Desde ${site.price} € por persona. Tarde de risas y cada uno a su casa (o a seguir por su cuenta).`,
          '<strong>La completa de un día:</strong> Humor Amarillo + cena baile y fiesta. Desde 97 € por persona. Es la que más se repite, y por algo: tarde, cena, show y fiesta sin mover un dedo.',
          '<strong>El fin de semana:</strong> la completa + hotel en el centro + una segunda actividad el domingo. Súmale desde 30 € de hotel y desde 22 € de actividad por persona.' ] },
      { h: 'Lo que encarece una despedida (y nadie te cuenta)', list: [
        '<strong>Organizar por separado.</strong> Cada proveedor con su señal, sus condiciones y sus horarios.',
        '<strong>Los desplazamientos.</strong> Taxis de ida y vuelta entre actividad, restaurante y discoteca.',
        '<strong>La noche sin plan.</strong> Entradas, copas sueltas y el «¿y ahora dónde vamos?».',
        '<strong>Reservar tarde.</strong> Cuando quedan pocas fechas, quedan menos opciones.' ] },
      { h: 'Cómo ahorrar sin que se note', p: [
        'Primero, que el grupo sea de 11 o más si puede ser: el homenajeado o la homenajeada no paga la cena, y en Humor Amarillo tenéis el circuito en exclusiva.',
        `Segundo, ir a pack. Los <a href="${PACKS}">8 packs de despedida</a> ya están pensados para que todo encaje. Y tercero, dormir en el centro: os ahorráis taxis y la noche termina cuando el grupo quiere.` ],
        img: { name: 'segway-torre-de-hercules', alt: 'Ruta en segway junto a la Torre de Hércules', caption: 'Una segunda actividad convierte la despedida en fin de semana.' } },
      { h: 'Cómo pedir precio exacto', p: [
        `Con dos datos te damos precio: fecha y número de personas. Si además nos dices qué os apetece (solo actividad, con cena, con hotel), te lo ajustamos. <a href="${CONTACTO}">Pide precio aquí</a> o escríbenos por WhatsApp.` ] },
    ],
    faq: [
      { q: '¿Cuánto cuesta Humor Amarillo en A Coruña?', a: `${site.price} € por persona, con una consumición y disfraz para el homenajeado o la homenajeada.` },
      { q: '¿Cuánto cuesta la cena baile con fiesta?', a: 'Desde 55 € por persona (orientativo 2027). Con 11 o más, el homenajeado o la homenajeada no paga la cena.' },
      { q: '¿Hay que pagar señal?', a: 'Las condiciones de reserva están en la página de packs. Pregúntanos al pedir precio.' },
    ],
  },
  {
    slug: 'despedida-de-soltera-coruna',
    title: 'Despedida de soltera en A Coruña: plan completo',
    h1: 'Despedida de soltera en A Coruña: el plan completo, paso a paso',
    category: 'Planes',
    description: 'Cómo organizar una despedida de soltera en A Coruña: actividad de tarde, cena baile con show drag queen, fiesta, hotel en el centro y presupuesto.',
    date: '2026-12-05',
    photo: '_MG_7062', alt: 'Drag queen con micrófono en una cena baile', pos: '70% 30%',
    lead: 'La novia merece algo mejor que una cena y dos copas. Y tú mereces organizarla sin volverte loca. Este es el plan que funciona en A Coruña.',
    summary: [
      'Tarde de risas con Humor Amarillo, disfraz de la novia incluido.',
      'Cena baile con show de drag queen a medianoche.',
      'Fiesta con DJ tipo boda o verbena hasta las 2:30–3:00.',
      'Con 11 o más, la novia no paga la cena.',
    ],
    sections: [
      { h: 'Lo que pide una buena despedida de soltera', p: [
        'Momentos para reír, momentos para la novia y una noche que no se apague a las doce. Y que nadie tenga que estar pendiente del reloj, del taxi o de la puerta del local.',
        'En A Coruña puedes tenerlo todo en el mismo día y con un solo contacto.' ] },
      { h: 'Tarde: Humor Amarillo', p: [
        `Empieza fuerte. En <a href="${HA}">Humor Amarillo Coruña</a> el grupo hace 11 pruebas disfrazado y la novia lleva su disfraz incluido. Trajes de sumo, Pared de Puños, Telaraña… Las fotos de esa tarde son oro.`,
        `Son unas dos horas, ${site.price} € por persona, con una consumición. Si sois 11 o más, el circuito es solo para vosotras. Y si sois menos, podéis competir con otros grupos.` ] },
      { h: 'Noche: cena baile con show', p: [
        `Sobre las 22:00 llegáis a la <a href="${CENA}">cena baile</a> y os sentamos en vuestra mesa. De 22:30 a 24:00 se cena con DJ, y muchas mesas ya están bailando antes del postre.`,
        'A medianoche sale la drag queen: canciones divertidas, presentación de los grupos mesa por mesa (la novia tiene su momento delante de toda la sala) y juegos como chicas contra chicos, algo subidos de tono, o uno de cantar tipo «Tu cara me suena».' ],
        img: { name: '_MG_9499', alt: 'Drag queen con peluca azul actuando en la cena baile', pos: '50% 30%', caption: 'El show de medianoche: la novia no se libra.' } },
      { h: 'Madrugada: fiesta', p: [
        'Desde la 1:00 hasta las 2:30–3:00, fiesta con DJ tipo boda o verbena: música superdivertida y bailonga para todos los gustos. La que tenía que bailar, baila. La que decía que no, también.' ] },
      { h: 'Si queréis fin de semana', list: [
        `<strong>Hotel en el centro</strong> desde 30 € por persona. <a href="${HOTEL}">Ver alojamiento</a>.`,
        `<strong>Domingo tranquilo:</strong> spa, catas o un paseo en barco. <a href="${ACT}">Otras actividades</a>.`,
        '<strong>Un paseo por la ciudad:</strong> Torre de Hércules, paseo marítimo y María Pita para las fotos de grupo.' ] },
      { h: 'Presupuesto orientativo', p: [
        `Humor Amarillo + cena baile y fiesta: desde 97 € por persona. Añade hotel desde 30 € y una segunda actividad desde 22 € si queréis fin de semana. Con 11 o más, la novia no paga la cena. Más detalle en <a href="/blog/cuanto-cuesta-despedida-coruna/">cuánto cuesta una despedida en A Coruña</a>.` ] },
      { h: 'Consejos de organizadora', list: [
        '<strong>Fecha cuanto antes.</strong> La actividad y la cena se hacen sobre todo en sábado.',
        '<strong>Una cómplice cercana a la novia</strong> para guardar el secreto y saber qué no le gustaría.',
        '<strong>Muda de recambio</strong> para pasar de la actividad a la cena.',
        '<strong>Una sola persona</strong> que hable con nosotros: menos ruido, menos errores.' ] },
    ],
    faq: [
      { q: '¿La novia paga?', a: 'En la cena baile, con 11 o más personas, la novia no paga la cena. El disfraz de la novia en Humor Amarillo está incluido.' },
      { q: '¿Cómo es el show?', a: 'Un show de drag queen de alrededor de una hora con canciones, presentación de los grupos mesa por mesa y juegos.' },
      { q: '¿Podemos hacerlo solo con chicas?', a: 'Claro. Cada grupo tiene su mesa; el show y la fiesta se comparten con el resto de grupos.' },
    ],
  },
  {
    slug: 'despedida-de-soltero-coruna',
    title: 'Despedida de soltero en A Coruña: plan completo',
    h1: 'Despedida de soltero en A Coruña: el plan que no falla',
    category: 'Planes',
    description: 'Cómo organizar una despedida de soltero en A Coruña: Humor Amarillo, karts o paintball, cena baile con show, fiesta y hotel en el centro.',
    date: '2026-12-19',
    photo: 'sumos-batalla', alt: 'Participantes con trajes de sumo hinchables',
    lead: 'El novio solo se casa una vez (en teoría). Que la despedida esté a la altura: competición por la tarde, cena con show y fiesta hasta que el cuerpo aguante.',
    summary: [
      'Humor Amarillo con disfraz del novio incluido, o karts y paintball.',
      'Cena baile con DJ y show de drag queen a medianoche.',
      'Fiesta tipo boda o verbena hasta las 2:30–3:00.',
      'Con 11 o más, el novio no paga la cena.',
    ],
    sections: [
      { h: 'Lo que tiene que tener', p: [
        'Un poco de pique entre amigos, un momento en el que el novio lo pase mal (con cariño) y una noche que no termine a medianoche. Todo lo demás es secundario.' ] },
      { h: 'Tarde: competición', p: [
        `La opción estrella es <a href="${HA}">Humor Amarillo en A Coruña</a>: 11 pruebas, el novio disfrazado (el disfraz va incluido) y equipos que se pican. Lucha de Gladiadores, Con Sumo Gusto, Tiro de Soga… Si sois 11 o más, el circuito es en exclusiva.`,
        `¿Más adrenalina? Hay <a href="${ACT}">karts, paintball y muchas más actividades</a>. Y si queréis las dos cosas, montamos el <a href="${PACKS}">pack</a>.` ] },
      { h: 'Noche: cena baile con show', p: [
        `A las 22:00 llegáis a la <a href="${CENA}">cena baile</a> y os sentamos. Se cena con DJ desde las 22:30. Suele haber entre 4 y 12 grupos, todos celebrando lo mismo, así que el ambiente se hace solo.`,
        'A medianoche, show de drag queen: canciones, presentación mesa por mesa (el novio sale a escena, sí) y juegos de chicas contra chicos algo subidos de tono. Después, de 1:00 a 2:30–3:00, fiesta con DJ tipo boda o verbena.' ],
        img: { name: '3-slide-local-despedidas-2', alt: 'Gente con los brazos en alto en la fiesta de la cena baile', caption: 'De 1:00 a 2:30–3:00: fiesta para todos los gustos.' } },
      { h: 'Por qué no ir directamente de discoteca', p: [
        'Porque algunos locales de marcha de A Coruña no dejan entrar con disfraces de despedida. Y porque con un grupo grande, entre colas, mesas y taxis, la noche se rompe. En la cena baile vais disfrazados, tenéis mesa y fiesta en el mismo sitio.' ] },
      { h: 'Dormir y domingo', p: [
        `Hotel en el centro desde 30 € por persona: <a href="${HOTEL}">ver alojamiento</a>. Y si el cuerpo aguanta, el domingo un paseo en barco o un paintball de revancha.` ] },
      { h: 'Presupuesto', p: [
        `Humor Amarillo: ${site.price} € por persona. Humor Amarillo + cena baile y fiesta: desde 97 €. Con 11 o más, el novio no paga la cena. Todo el detalle en <a href="/blog/cuanto-cuesta-despedida-coruna/">cuánto cuesta una despedida en A Coruña</a>.` ] },
      { h: 'Checklist del organizador', list: [
        'Fecha cerrada con el grupo (y con el novio despistado).',
        'Número de personas aproximado.',
        'Elegir actividad: Humor Amarillo, karts, paintball o pack.',
        'Reservar cena baile y hotel.',
        '<a href="/blog/como-ir-vestido-humor-amarillo/">Ropa para la actividad</a> y muda para la noche.' ] },
    ],
    faq: [
      { q: '¿El novio paga?', a: 'Con 11 o más personas, el novio no paga la cena. Su disfraz en Humor Amarillo está incluido.' },
      { q: '¿Se puede combinar Humor Amarillo con karts?', a: 'Sí, lo montamos como pack. Pide precio con fecha y número de personas.' },
      { q: '¿Hasta qué hora es la fiesta?', a: 'De 1:00 a 2:30–3:00, después del show.' },
    ],
  },
  {
    slug: 'cena-con-espectaculo-coruna',
    title: 'Cena con espectáculo en A Coruña para grupos',
    h1: 'Cena con espectáculo en A Coruña: show drag queen, juegos y fiesta',
    category: 'Cena y fiesta',
    description: 'Cena con espectáculo en A Coruña para despedidas, cumpleaños de adultos y grupos: show de drag queen, juegos, DJ y fiesta hasta las 3:00.',
    date: '2027-01-02',
    photo: '12-slide-local-despedidas-3', alt: 'Amigos con gafas de broma riendo en la cena baile',
    lead: 'Hay cenas en las que miras el móvil. Y hay cenas en las que no te da tiempo. Esta es de las segundas.',
    summary: [
      'Cena con menú, bebida y postre, con DJ desde las 22:30.',
      'Show de drag queen de alrededor de una hora a medianoche.',
      'Juegos entre mesas y fiesta tipo boda o verbena hasta las 2:30–3:00.',
      'Desde 55 € por persona (orientativo 2027).',
    ],
    sections: [
      { h: 'Qué es una cena con espectáculo', p: [
        'Es una cena en la que el plan no termina en el café. Cenas con tu grupo, en tu mesa, y la noche sigue en el mismo sitio: música, show, juegos y fiesta. Sin buscar otro local, sin colas y sin perder a nadie.',
        `En A Coruña la tienes en nuestro <a href="${CENA}">local de cenas baile</a>, pensada para despedidas y grupos de adultos.` ] },
      { h: 'Cómo es la noche', list: [
        '<strong>22:00 · Llegada.</strong> Os sentamos, cada grupo en su mesa.',
        '<strong>22:30 a 24:00 · Cena con DJ.</strong> Música desde el primer plato. Muchos grupos ya la lían y bailan.',
        '<strong>24:00 · Show de drag queen.</strong> Canciones divertidas, presentación de los grupos mesa por mesa y juegos.',
        '<strong>1:00 a 2:30–3:00 · Fiesta.</strong> DJ tipo boda o verbena, música bailonga para todos los gustos.' ] },
      { h: 'El espectáculo', p: [
        'La drag queen canta varias canciones divertidas y, entre canción y canción, presenta a los grupos uno a uno. Luego llegan los juegos: chicas contra chicos, algo subidos de tono y muy divertidos, y otro de cantar tipo «Tu cara me suena».',
        'Como suele haber entre 4 y 12 grupos celebrando, el ambiente se contagia. No hace falta que tu grupo «tire» de la fiesta: la fiesta ya viene hecha.' ],
        img: { name: '_MG_9499', alt: 'Drag queen actuando en la cena con espectáculo', pos: '50% 30%' } },
      { h: 'Para quién es', list: [
        '<strong>Despedidas de soltero y soltera.</strong> Es su sitio natural.',
        '<strong>Grupos de amigos</strong> que quieren una noche diferente.',
        '<strong>Celebraciones de adultos</strong> que buscan cena y fiesta en el mismo sitio.' ] },
      { h: 'Precio', p: [
        'Desde 55 € por persona (orientativo 2027), con menú, bebida, postre, show y fiesta. Con 11 o más personas, el homenajeado o la homenajeada no paga la cena. El precio final depende de la temporada y del menú.' ] },
      { h: 'Combínala con una tarde de risas', p: [
        `Lo mejor es llegar a la cena con el grupo ya caliente. Por la tarde, <a href="${HA}">Humor Amarillo en A Coruña</a>: 11 pruebas y disfraz para el homenajeado. El pack con cena y fiesta parte de 97 € por persona. Lo tienes en los <a href="${PACKS}">packs de despedida</a>.` ] },
    ],
    faq: [
      { q: '¿Cuánto dura el espectáculo?', a: 'Alrededor de una hora, a partir de medianoche.' },
      { q: '¿Cenamos solos o con otros grupos?', a: 'Cada grupo cena en su mesa. El show, los juegos y la fiesta se comparten con el resto de grupos.' },
      { q: '¿Hay que ir disfrazado?', a: 'No es obligatorio, pero en despedidas es lo habitual y aquí no hay problema de puerta.' },
    ],
  },
  {
    slug: 'despedida-coruna-si-llueve',
    title: 'Despedida en A Coruña si llueve: planes que funcionan',
    h1: 'Despedida en A Coruña si llueve: cómo salvar el plan',
    category: 'Planes',
    description: 'Qué hacer en una despedida en A Coruña si llueve: actividades a cubierto, cena baile con show, fiesta y cómo adaptar el plan sin perder la reserva.',
    date: '2027-01-16',
    photo: '1ventana-atlantico-viajes-galicia', alt: 'Puerto deportivo de A Coruña con veleros',
    lead: 'Estás en Galicia. La lluvia no es un imprevisto, es un invitado más. La buena noticia: la mejor parte de la despedida pasa bajo techo.',
    summary: [
      'La cena baile, el show y la fiesta son a cubierto.',
      'Hay actividades de interior: escape room, catas, spa.',
      'Con ropa adecuada, una actividad al aire libre con lluvia también tiene su gracia.',
      'Consulta al reservar qué pasa si el tiempo se complica.',
    ],
    sections: [
      { h: 'Lo primero: la noche no depende del tiempo', p: [
        `La <a href="${CENA}">cena baile y fiesta</a> es a cubierto: cena con DJ, show de drag queen a medianoche y fiesta hasta las 2:30–3:00. Llueva lo que llueva, la noche está asegurada.`,
        'Por eso, si te preocupa el tiempo, empieza por reservar la noche. Lo demás se adapta.' ] },
      { h: 'Si la actividad de tarde es al aire libre', p: [
        `<a href="${HA}">Humor Amarillo en A Coruña</a> es un circuito al aire libre. Con un chubasquero ligero, calzado con buena suela y una muda para la noche, un poco de lluvia le añade épica: las fotos bajo la lluvia se recuerdan más que las de un día de sol.`,
        'Si el tiempo se complica de verdad, pregúntanos al reservar cómo se gestiona. Y lee <a href="/blog/como-ir-vestido-humor-amarillo/">cómo ir vestido a Humor Amarillo</a> para ir preparado.' ] },
      { h: 'Alternativas a cubierto', list: [
        '<strong>Escape room:</strong> el grupo encerrado y el novio o la novia de líder. Pura comedia.',
        '<strong>Catas:</strong> plan tranquilo de tarde antes de la cena.',
        '<strong>Spa:</strong> para el día después, o para un grupo que prefiere relax.',
        `<strong>Más opciones</strong> en <a href="${ACT}">otras actividades</a>, desde 22 € por persona.` ],
        img: { name: '14-slide-local-despedidas', alt: 'Dos amigas bailando en la fiesta', caption: 'La noche, a cubierto: aquí no llueve.' } },
      { h: 'Duerme en el centro', p: [
        `Con lluvia, lo último que quieres es esperar taxis a las tres de la mañana. Hotel en el centro desde 30 € por persona: <a href="${HOTEL}">ver alojamiento</a>.` ] },
      { h: 'Plan B en una línea', p: [
        `Si llueve: actividad de interior por la tarde, cena baile y fiesta por la noche, hotel en el centro. Si sale el sol: Humor Amarillo por la tarde y lo mismo por la noche. En los dos casos, lo organizamos con un solo mensaje. <a href="${CONTACTO}">Consulta tu fecha</a>.` ] },
    ],
    faq: [
      { q: '¿La cena baile es a cubierto?', a: 'Sí. Cena, show y fiesta son en el local.' },
      { q: '¿Se hace Humor Amarillo si llueve?', a: 'Es una actividad al aire libre. Consúltanos al reservar cómo se gestiona según el tiempo.' },
      { q: '¿Qué actividades hay a cubierto?', a: 'Por ejemplo escape room, catas o spa. Las tienes en la página de otras actividades.' },
    ],
  },
  {
    slug: 'errores-organizar-despedida',
    title: '7 errores al organizar una despedida (y cómo evitarlos)',
    h1: '7 errores al organizar una despedida (y cómo evitarlos en A Coruña)',
    category: 'Consejos',
    description: 'Los errores más comunes al organizar una despedida de soltero o soltera y cómo evitarlos: fecha, presupuesto, grupo, noche sin plan y logística.',
    date: '2027-01-30',
    photo: 'telarana-765', alt: 'Un participante cruza la telaraña de cuerdas',
    lead: 'Organizar una despedida es como la Telaraña de Humor Amarillo: si te enredas al principio, ya no sales. Estos son los siete errores que más se repiten.',
    summary: [
      'Reservar tarde y quedarte sin fecha.',
      'Organizarlo todo por separado.',
      'Dejar la noche sin plan.',
      'No pensar en el homenajeado ni en el grupo real.',
    ],
    sections: [
      { h: '1. Reservar tarde', p: [
        'La actividad y la cena se hacen sobre todo en sábado y la disponibilidad es bajo consulta. Cuando lo dejas para la última semana, la fecha que querías ya no está. Cierra fecha con 1 o 2 meses de margen respecto a la boda.' ] },
      { h: '2. Organizarlo todo por separado', p: [
        `Actividad por un lado, restaurante por otro, discoteca y hotel por otro. Cuatro proveedores, cuatro horarios y cuatro formas de pagar. Con un <a href="${PACKS}">pack de despedida</a> todo encaja y hablas con una sola persona.` ] },
      { h: '3. Dejar la noche sin plan', p: [
        `El clásico: cena tranquila y luego «ya veremos». Y luego resulta que algunos locales no dejan entrar con disfraces de despedida. La solución: <a href="${CENA}">cena baile con show y fiesta</a> en el mismo sitio, hasta las 2:30–3:00.` ] },
      { h: '4. Olvidar al homenajeado', p: [
        'La despedida es para el novio o la novia, no para el organizador. Busca un cómplice cercano que sepa qué le gustaría y, sobre todo, qué no. Humor y algo de vergüenza, sí. Pasarlo mal de verdad, no.' ],
        img: { name: 'puente-colgante-612', alt: 'Una participante cruza el puente de cuerdas', caption: 'Un poco de reto, mucha risa: el equilibrio justo.' } },
      { h: '5. No contar bien al grupo', p: [
        'El número de personas cambia el plan y el precio. Con 11 o más, el homenajeado no paga la cena y en Humor Amarillo tenéis el circuito en exclusiva. Pide confirmación con tiempo y una señal a cada uno: los «igual voy» no cuentan.' ] },
      { h: '6. Elegir una actividad que no es para todos', p: [
        `Si medio grupo no se apunta, la tarde se hace larga. <a href="${HA}">Humor Amarillo en A Coruña</a> funciona porque nadie necesita estar en forma: cada uno participa a su ritmo y todos se ríen. Si buscáis más adrenalina, mira <a href="${ACT}">karts o paintball</a>.` ] },
      { h: '7. Ir sin ropa ni logística', p: [
        'Llegar a la actividad en vaqueros, a la cena con la ropa de la actividad y volver al hotel en un taxi que no llega. Muda de recambio, hotel en el centro y horarios claros. Te lo contamos en <a href="/blog/como-ir-vestido-humor-amarillo/">cómo ir vestido a Humor Amarillo</a>.' ] },
      { h: 'La versión corta', p: [
        `Fecha pronto, un solo contacto, noche con plan y el homenajeado en el centro. Si quieres, nos dices fecha y número de personas y te proponemos el plan completo. <a href="${CONTACTO}">Empieza aquí</a>.` ] },
    ],
    faq: [
      { q: '¿Con cuánto tiempo hay que reservar?', a: 'Cuanto antes. La actividad se hace sobre todo en sábado y la disponibilidad es bajo consulta.' },
      { q: '¿Qué pasa si cambia el número de personas?', a: 'Avísanos: el precio por persona se recalcula según el número de asistentes.' },
      { q: '¿Hay planes para grupos que no quieren actividad física?', a: 'Sí: catas, spa, escape room o directamente la cena con espectáculo.' },
    ],
  },
];
