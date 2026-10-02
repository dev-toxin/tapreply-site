// Spanish (castellano) dictionary. Must mirror the shape of en.ts.
// NOTE: needs proofreading by a native speaker (see docs/DECISIONS.md).
import type { Dict } from './en';

export const es: Dict = {
  htmlLang: 'es',
  ogLocale: 'es_ES',
  siteName: 'TapReply',

  common: {
    skip: 'Saltar al contenido',
    menu: 'Menú',
    langSwitch: 'Cambiar idioma',
    homeLabel: 'TapReply — inicio',
    ctaPilot: 'Quiero ser piloto',
    ctaHow: 'Cómo funciona',
    example: 'Ejemplo',
    earlyAccess: 'Acceso anticipado · programa piloto',
    learnMore: 'Más información',
    draftTitle: 'Borrador — no es asesoramiento legal, en revisión',
    draftText:
      'Este documento es un borrador de trabajo que publicamos por transparencia durante el piloto. Un abogado lo revisará antes del lanzamiento comercial.',
    lastUpdated: 'Última actualización: 2 de octubre de 2026',
    pricesNote: 'Precios de acceso anticipado: pueden cambiar.',
    emailUs: 'Escríbenos',
    onThisPage: 'En esta página',
    forRestaurants: 'Para restaurantes y cafeterías',
    forHotels: 'Para casas de huéspedes y hoteles',
  },

  nav: {
    features: 'Funciones',
    how: 'Cómo funciona',
    pricing: 'Precios',
    pilot: 'Piloto',
    faq: 'Preguntas',
    about: 'Nosotros',
  },

  footer: {
    tagline: 'Respuestas a reseñas con IA para cafeterías, restaurantes, bares y pequeños hoteles, en el idioma de tu cliente.',
    product: 'Producto',
    company: 'Empresa',
    legal: 'Legal',
    privacy: 'Política de privacidad',
    terms: 'Condiciones de uso',
    contact: 'Contacto',
    studio: 'AnKo Software Labs',
    rights: '© 2026 AnKo Software Labs, empresario individual, Georgia',
  },

  shield: {
    name: 'Escudo para turistas',
    venue: 'Old Town Khinkali · Tbilisi',
    venueNote: 'Local ficticio, reseña de ejemplo',
    guest: 'Lukas M.',
    platform: 'Google',
    time: 'hace 2 min',
    approve: 'Aprobar y copiar',
    edit: 'Editar',
    youConfirm: 'No se publica nada hasta que tú lo confirmes.',
    steps: [
      {
        key: 'original',
        label: 'Reseña original',
        lang: 'Alemán · detectado',
        text: 'Sehr leckere Chinkali und ein super freundlicher Kellner! Leider mussten wir fast 40 Minuten auf das Essen warten. Trotzdem kommen wir gern wieder.',
      },
      {
        key: 'translation',
        label: 'Traducción para ti',
        lang: 'Español',
        text: '¡Unos khinkali buenísimos y un camarero simpatiquísimo! Por desgracia, tuvimos que esperar casi 40 minutos a la comida. Aun así, volveremos con gusto.',
      },
      {
        key: 'reply',
        label: 'Respuesta al cliente',
        lang: 'Alemán',
        text: 'Vielen Dank für Ihren Besuch und die lieben Worte über unsere Chinkali! Es tut uns leid, dass Sie so lange warten mussten – wir haben das bereits mit unserem Küchenteam besprochen. Wir freuen uns, Sie bald wieder bei uns zu begrüßen!',
      },
      {
        key: 'replyTranslation',
        label: 'Tu respuesta, traducida para ti',
        lang: 'Español',
        text: '¡Muchas gracias por tu visita y por tus palabras sobre nuestros khinkali! Sentimos que tuvieras que esperar tanto; ya lo hemos hablado con el equipo de cocina. ¡Esperamos verte pronto de nuevo!',
      },
    ],
  },

  platforms: {
    legend: {
      api: 'API oficial (en preparación)',
      email: 'Reenvío de correos de aviso',
      manual: 'Pegar o compartir la reseña',
    },
    cols: {
      platform: 'Plataforma',
      in: 'Cómo llega la reseña a TapReply',
      out: 'Cómo se publica la respuesta',
      note: 'Notas',
    },
    items: [
      {
        name: 'Google',
        methods: ['api', 'email', 'manual'],
        in: 'API oficial de Google Business Profile, en preparación. Mientras tanto: correos de aviso o pegar el texto.',
        out: 'Copia la respuesta aprobada en Google Business Profile. La publicación directa llegará con la API oficial.',
        note: 'Google es la única plataforma con la que planeamos primero una conexión por API.',
      },
      {
        name: 'Yandex Maps',
        methods: ['email', 'manual'],
        in: 'Reenvía los correos de aviso o pega la reseña.',
        out: 'Copia la respuesta aprobada en Yandex Business.',
        note: 'Allí se espera la respuesta en ruso: TapReply la redacta en ruso, con una traducción para ti.',
      },
      {
        name: '2GIS',
        methods: ['email', 'manual'],
        in: 'Reenvía los correos de aviso o pega la reseña.',
        out: 'Copia la respuesta aprobada en tu cuenta de empresa de 2GIS.',
        note: '',
      },
      {
        name: 'Tripadvisor',
        methods: ['email', 'manual'],
        in: 'Reenvía los correos de aviso o pega la reseña.',
        out: 'Copia la respuesta aprobada en el centro de gestión de Tripadvisor.',
        note: '',
      },
      {
        name: 'Booking.com',
        methods: ['email', 'manual'],
        in: 'Reenvía los correos de aviso o pega la reseña.',
        out: 'Copia la respuesta aprobada en la extranet de Booking.com.',
        note: '',
      },
      {
        name: 'TheFork',
        methods: ['email', 'manual'],
        in: 'Reenvía los correos de aviso o pega la reseña.',
        out: 'Copia la respuesta aprobada en TheFork Manager.',
        note: '',
      },
      {
        name: 'Facebook',
        methods: ['manual'],
        in: 'Pega o comparte el texto de la reseña.',
        out: 'Copia la respuesta aprobada debajo de la reseña en tu página.',
        note: '',
      },
      {
        name: 'Cualquier otra web',
        methods: ['manual'],
        in: 'Pega o comparte el texto de cualquier reseña.',
        out: 'Copia la respuesta donde sueles contestar a tus clientes.',
        note: '',
      },
    ],
    noPasswords:
      'TapReply nunca te pide las contraseñas de Google, Yandex, Booking ni de ninguna otra plataforma, y nunca entra en tus cuentas en tu nombre.',
  },

  pages: {
    home: {
      title: 'TapReply — responde a cada reseña en el idioma de tu cliente',
      description:
        'Respuestas a reseñas con IA para cafeterías, restaurantes, bares y pequeños hoteles. Todas las plataformas en un solo lugar, un borrador en el idioma del cliente en segundos y la traducción para ti. Acceso anticipado.',
      hero: {
        h1: 'Responde a cada reseña en el idioma de tu cliente.',
        sub: 'Google, Yandex Maps, 2GIS, Tripadvisor, Booking y más, en un solo lugar. TapReply redacta la respuesta en el idioma del cliente y te lo traduce todo: unos 10 segundos por reseña, desde el móvil.',
        note: 'Sin contraseñas de tus plataformas. Tú apruebas cada respuesta.',
      },
      platforms: {
        kicker: 'Plataformas',
        title: 'Donde escriben tus clientes, explicado con honestidad.',
        sub: 'Conectamos Google a través de su API oficial (en preparación). Todo lo demás funciona con correos de aviso o simplemente pegando el texto, y la respuesta la publicas tú.',
        more: 'Ver detalles de conexión',
      },
      how: {
        kicker: 'Cómo funciona',
        title: 'Tres pasos, un pulgar.',
        steps: [
          {
            title: 'Trae tus reseñas',
            text: 'Reenvía los correos de aviso o pega una reseña. La conexión con Google por API oficial está en preparación.',
          },
          {
            title: 'Recibe un borrador en el idioma del cliente',
            text: 'TapReply detecta el idioma, te traduce la reseña y redacta una respuesta con el tono de tu local.',
          },
          {
            title: 'Revisa y envía',
            text: 'Lee la traducción de tu respuesta, ajústala si hace falta y cópiala en la plataforma. Listo.',
          },
        ],
      },
      shield: {
        kicker: 'Escudo para turistas',
        title: 'Entiende a tu cliente. Y que tu cliente te entienda.',
        sub: 'Cuatro bloques claros para cada reseña: el original, una traducción para ti, la respuesta en el idioma del cliente y la traducción de esa respuesta. Así siempre sabes exactamente qué publicas.',
      },
      why: {
        kicker: 'Por qué TapReply',
        title: 'Pensado para quien está en la sala, no delante de un panel.',
        items: [
          {
            icon: 'globe',
            title: 'El idioma del cliente y el de la plataforma',
            text: 'Responde en el idioma de la reseña o en el que exige la plataforma (Yandex Maps: ruso).',
          },
          {
            icon: 'lock',
            title: 'Sin contraseñas',
            text: 'Nunca pedimos el acceso a tus plataformas de reseñas. Tus cuentas siguen siendo tuyas.',
          },
          {
            icon: 'phone',
            title: 'Primero, el móvil',
            text: 'Funciona en el navegador y se instala en la pantalla de inicio como una app. Sin App Store.',
          },
          {
            icon: 'tone',
            title: 'El tono de tu local',
            text: 'Cercano, formal o desenfadado: configúralo una vez y los borradores sonarán a ti, no a un robot.',
          },
          {
            icon: 'check',
            title: 'Tú siempre confirmas',
            text: 'La IA solo redacta. Nada llega al cliente hasta que tú lo apruebas.',
          },
          {
            icon: 'inbox',
            title: 'Todo en un solo lugar',
            text: 'Reseñas nuevas, sin responder y negativas de todas las plataformas en una sola lista.',
          },
        ],
      },
      security: {
        kicker: 'Seguridad y privacidad',
        title: 'Diseñado para que nunca entregues las llaves.',
        text: 'Tus plataformas siguen bajo tus propios accesos. TapReply nunca te pide las contraseñas, y es a propósito.',
        points: [
          'Sin contraseñas ni accesos a Google, Yandex, Booking u otras plataformas.',
          'Solo se procesan los textos de las reseñas y tus respuestas, nunca datos de pago de los clientes.',
          'Una persona aprueba cada respuesta antes de que salga a ningún sitio.',
          'Borra tus datos cuando quieras con un simple correo.',
        ],
      },
      pricing: {
        kicker: 'Precios',
        title: 'Precios sencillos por local.',
        sub: 'Empieza gratis. Los precios de acceso anticipado son un punto de partida y pueden cambiar.',
        more: 'Ver todos los planes',
      },
      faq: {
        kicker: 'Preguntas',
        title: 'Respuestas breves.',
        more: 'Todas las preguntas',
      },
      compare: {
        kicker: 'Comparación honesta',
        title: 'TapReply frente a las respuestas con IA de Google',
        sub: 'Google Business Profile también puede sugerir respuestas. Es una buena opción si Google es tu única plataforma.',
        cols: ['', 'Sugerencias de Google', 'TapReply'],
        rows: [
          ['Plataformas', 'Solo Google', 'Google, Yandex Maps, 2GIS, Tripadvisor, Booking.com, TheFork, Facebook y más'],
          ['Traducción de la reseña para ti', 'Sí, traducción automática', 'Sí, a tu idioma, junto al original'],
          ['Traducción de tu respuesta de vuelta para ti', 'No como paso aparte', 'Sí: sabes exactamente qué publicas'],
          ['Un solo listado para todas las reseñas', 'No', 'Sí'],
          ['Precio', 'Gratis', 'Plan gratuito + planes de pago por local'],
        ],
        note: 'Según información pública a octubre de 2026; las funciones de Google pueden cambiar.',
      },
      cta: {
        title: 'Buscamos entre 3 y 10 locales piloto.',
        text: 'Cafeterías, restaurantes, bares y pequeños hoteles con clientes de fuera. Los locales piloto ayudan a dar forma al producto y obtienen un precio preferente.',
        secondary: 'Escribir al fundador',
      },
    },

    features: {
      title: 'Funciones — TapReply',
      description:
        'Escudo para turistas con traducción, todas las plataformas en un solo lugar, respuestas en el idioma del cliente, el tono de tu local, app en el móvil sin App Store y sin contraseñas de plataformas.',
      h1: 'Todo lo que necesitas para responder bien a tus clientes, y nada más.',
      lead: 'TapReply es una herramienta tranquila para una sola tarea: responder a reseñas rápido y bien, en cualquier idioma y desde el móvil.',
      sections: [
        {
          id: 'tourist-shield',
          icon: 'shield',
          title: 'Escudo para turistas',
          text: 'Una reseña en alemán, hebreo o coreano ya no es un problema. Ves el original, una traducción a tu idioma, la respuesta en el idioma del cliente y la traducción de tu respuesta: cuatro bloques separados para que siempre sepas qué publicas.',
          points: [
            'Detección automática del idioma',
            'El cliente solo ve la respuesta; las traducciones son solo para ti',
            'Si el cliente escribe en tu idioma, no se duplican bloques',
          ],
        },
        {
          id: 'feed',
          icon: 'inbox',
          title: 'Todas las plataformas en un solo lugar',
          text: 'Reseñas de Google, Yandex Maps, 2GIS, Tripadvisor, Booking.com, TheFork, Facebook y otras en una sola lista con filtros sencillos.',
          points: ['Nuevas, Sin responder, Negativas (1–2★), Requieren atención, Respondidas', 'Avisos de reseñas nuevas y negativas', 'Varios locales en una misma cuenta'],
        },
        {
          id: 'languages',
          icon: 'globe',
          title: 'El idioma del cliente, o el de la plataforma',
          text: 'Por defecto, TapReply responde en el idioma de la reseña. Si una plataforma espera un idioma concreto (por ejemplo, ruso en Yandex Maps), el borrador sigue a la plataforma.',
          points: ['Interfaz: inglés, ruso y español', 'Tu idioma de traducción se configura aparte de la interfaz', 'Idiomas de clientes: los principales idiomas europeos y asiáticos'],
        },
        {
          id: 'tone',
          icon: 'tone',
          title: 'El tono de tu local',
          text: 'Describe tu local una vez —cafetería familiar, bar de vinos, casa de huéspedes— y elige el tono. Los borradores agradecen platos concretos, se disculpan por problemas concretos y nunca suenan a plantilla.',
          points: ['Tono cercano, formal o desenfadado', 'Firma con tu nombre o el del local', 'Cuidado especial con las reseñas negativas: nunca discutir con el cliente'],
        },
        {
          id: 'pwa',
          icon: 'phone',
          title: 'En tu móvil, como una app',
          text: 'TapReply funciona en cualquier navegador moderno y se instala en la pantalla de inicio de tu iPhone o Android. Sin App Store ni actualizaciones que instalar: unos 10 segundos por reseña.',
          points: ['iPhone (Safari) y Android (Chrome)', 'Botones grandes, todo con un pulgar', 'También funciona en el portátil'],
        },
        {
          id: 'security',
          icon: 'lock',
          title: 'Seguro desde el diseño',
          text: 'TapReply no pide las contraseñas de tus plataformas de reseñas y nunca entra en tu nombre. La IA prepara un borrador; una persona siempre lo confirma.',
          points: ['Sin contraseñas de plataformas', 'Aprobación humana de cada respuesta', 'Borrado de datos a petición'],
        },
      ],
      cta: {
        title: 'Pruébalo con tus propias reseñas.',
        text: 'Únete al piloto y configuraremos TapReply para tu local contigo.',
      },
    },

    how: {
      title: 'Cómo funciona — TapReply',
      description:
        'Paso a paso: cómo llegan las reseñas a TapReply, cómo se prepara la respuesta en el idioma del cliente y una tabla honesta de plataformas y formas de conexión.',
      h1: 'De una reseña nueva a una respuesta publicada en unos 10 segundos.',
      lead: 'Esto es exactamente lo que ocurre, incluido lo que ya está automatizado y lo que todavía haces tú.',
      steps: [
        {
          title: 'Un cliente deja una reseña',
          text: 'En Google, Yandex Maps, 2GIS, Tripadvisor, Booking.com o en cualquier otro sitio.',
        },
        {
          title: 'La reseña aparece en TapReply',
          text: 'Reenvía los correos de aviso de la plataforma a tu dirección personal de TapReply, o pega / comparte el texto desde el móvil. La conexión con Google por API oficial está en preparación.',
        },
        {
          title: 'TapReply prepara un borrador',
          text: 'Detección del idioma, una traducción para ti y una respuesta en el idioma del cliente (o el de la plataforma) con el tono de tu local.',
        },
        {
          title: 'Tú revisas y editas',
          text: 'Lee la traducción de la respuesta, cambia una palabra o genera otra versión. Nada se envía automáticamente.',
        },
        {
          title: 'Tú publicas',
          text: 'Copia la respuesta con un toque y pégala en tu cuenta de empresa de la plataforma. Solo usas las sesiones que ya tienes abiertas.',
        },
      ],
      tableTitle: 'Plataformas y formas de conexión',
      tableIntro: 'Preferimos ser precisos antes que impresionar. Este es el estado actual para el piloto.',
      honesty:
        'No hacemos scraping de plataformas ni entramos en tus cuentas. Cuando una plataforma ofrezca una API oficial para respuestas, la usaremos, empezando por Google.',
      cta: {
        title: '¿Quieres probarlo con tus reseñas?',
        text: 'Los locales piloto reciben una puesta en marcha personalizada.',
      },
    },

    pricing: {
      title: 'Precios — TapReply',
      description:
        'Precios de acceso anticipado por local: Free con 5 respuestas con IA al mes, Pilot / Individual en torno a 19–29 $ por local, descuentos para 3–5 locales y Chain bajo consulta.',
      h1: 'Precio por local. Empieza gratis.',
      lead: 'Son precios de acceso anticipado. Los estamos validando con los locales piloto, así que pueden cambiar; los locales piloto siempre serán los primeros en saberlo.',
      plans: [
        {
          name: 'Free',
          price: '0 $',
          period: '',
          desc: 'Para probar TapReply con reseñas reales.',
          features: ['1 local', '5 respuestas con IA al mes', 'Escudo para turistas', 'Todas las plataformas pegando el texto'],
          cta: 'Solicitar acceso',
          highlight: false,
        },
        {
          name: 'Pilot / Individual',
          price: '19–29 $',
          period: 'por local / mes · orientativo',
          desc: 'Para una cafetería, restaurante, bar o casa de huéspedes.',
          features: ['1 local', 'Respuestas con IA para tu volumen habitual de reseñas', 'Escudo para turistas y tono del local', 'Reenvío de correos de aviso', 'Puesta en marcha personalizada durante el piloto'],
          cta: 'Quiero ser piloto',
          highlight: true,
        },
        {
          name: 'Multi',
          price: 'Descuento',
          period: 'por local, 3–5 locales',
          desc: 'Para quien tiene varios locales.',
          features: ['3–5 locales en una cuenta', 'Precio más bajo por local', 'Una sola lista, con filtro por local'],
          cta: 'Hablemos',
          highlight: false,
        },
        {
          name: 'Chain',
          price: 'Bajo consulta',
          period: '',
          desc: 'Para cadenas y grupos hoteleros.',
          features: ['6 o más locales', 'Límites a medida', 'Pago por factura'],
          cta: 'Contactar',
          highlight: false,
        },
      ],
      faqTitle: 'Preguntas sobre el pago',
      faq: [
        {
          q: '¿Cómo pagan los locales piloto?',
          a: 'Mediante factura mensual. Durante el piloto no hay cargos automáticos en tarjeta.',
        },
        {
          q: '¿Cambiará el precio?',
          a: 'Es posible: son precios de acceso anticipado. Si cambian, avisaremos con antelación a los locales piloto, y las condiciones acordadas contigo se mantendrán hasta el final del periodo pactado.',
        },
        {
          q: '¿Qué cuenta como una respuesta con IA?',
          a: 'Un borrador de respuesta generado. Las ediciones de un borrador y las traducciones de tu propio texto no cuentan aparte.',
        },
        {
          q: '¿Puedo darme de baja?',
          a: 'Sí, cuando quieras: basta con decírnoslo por correo. En el piloto no hay permanencia.',
        },
      ],
    },

    pilot: {
      title: 'Programa piloto — TapReply',
      description:
        'Buscamos entre 3 y 10 cafeterías, restaurantes, bares y pequeños hoteles con clientes de fuera para probar TapReply. Puesta en marcha personalizada y precio preferente.',
      h1: 'Sé uno de nuestros primeros 3–10 locales piloto.',
      lead: 'Construimos TapReply junto a quienes lo usan cada día. Los locales piloto acceden antes al producto, reciben ayuda personal y tienen voz en lo que hacemos después.',
      who: {
        title: 'Para quién es',
        items: [
          'Cafeterías, restaurantes, bares, casas de huéspedes y pequeños hoteles',
          'Tus clientes escriben reseñas en varios idiomas',
          'Respondes tú mismo a las reseñas, a menudo desde el móvil',
          'Primeros mercados: locales rusohablantes en Georgia y Kazajistán; después, España y Latinoamérica',
        ],
      },
      get: {
        title: 'Qué recibes',
        items: [
          'Acceso anticipado a TapReply para tu local',
          'Puesta en marcha personalizada: configuramos contigo plataformas y tono',
          'Precio preferente de lanzamiento, acordado de forma individual',
          'Contacto directo con el fundador',
        ],
      },
      ask: {
        title: 'Qué te pedimos a cambio',
        items: [
          'Usar TapReply con tus reseñas reales durante 4–8 semanas',
          'Opiniones breves: un mensaje o una llamada de 20 minutos cada dos semanas',
          'Contarnos con sinceridad lo que no funciona',
        ],
      },
      form: {
        title: 'Solicita una plaza en el piloto',
        intro: 'Rellena el formulario: se abrirá tu aplicación de correo con un mensaje listo. No se envía nada hasta que pulses «Enviar» allí.',
        name: 'Tu nombre',
        venue: 'Nombre del local',
        city: 'Ciudad y país',
        type: 'Tipo de local',
        typeOptions: ['Cafetería', 'Restaurante', 'Bar', 'Casa de huéspedes', 'Pequeño hotel', 'Otro'],
        platforms: '¿Dónde dejan reseñas tus clientes?',
        languages: 'Idiomas de clientes más habituales',
        email: 'Tu correo electrónico',
        message: '¿Algo más? (opcional)',
        submit: 'Preparar correo',
        fallback: '¿Prefieres escribirnos tú?',
        subject: 'Solicitud de piloto TapReply',
        privacy: 'Solo usamos estos datos para responder a tu solicitud.',
      },
    },

    faq: {
      title: 'Preguntas frecuentes — TapReply',
      description:
        'Respuestas sobre TapReply: contraseñas, idiomas, Yandex Maps, si la IA publica sola, datos de las reseñas, iPhone y Android, precios.',
      h1: 'Preguntas frecuentes',
      lead: '¿No encuentras tu pregunta? Escríbenos: respondemos personalmente.',
      items: [
        {
          q: '¿Tengo que darte mi contraseña de Google, Yandex o Booking?',
          a: 'No. TapReply nunca pide contraseñas de plataformas de reseñas ni entra en tu nombre. Las reseñas llegan por correos de aviso, pegando / compartiendo el texto o, en el caso de Google, por la API oficial (en preparación).',
        },
        {
          q: '¿La IA publica las respuestas por su cuenta?',
          a: 'No. La IA solo prepara un borrador. Tú lo lees (con su traducción), lo editas si quieres y lo publicas tú.',
        },
        {
          q: '¿Qué idiomas se admiten?',
          a: 'Clientes: entendemos y respondemos en los principales idiomas europeos y asiáticos. Interfaz: inglés, ruso y español. Tu idioma de traducción se puede configurar aparte.',
        },
        {
          q: '¿Y Yandex Maps?',
          a: 'Las reseñas de Yandex Maps llegan por correos de aviso o pegando el texto. Allí se espera la respuesta en ruso, así que TapReply la redacta en ruso, con una traducción para ti si la necesitas.',
        },
        {
          q: '¿Qué plataformas se admiten?',
          a: 'Google, Yandex Maps, 2GIS, Tripadvisor, Booking.com, TheFork, Facebook y cualquier otra web de la que puedas copiar el texto de la reseña. Tienes los detalles en la tabla de la página «Cómo funciona».',
        },
        {
          q: '¿La respuesta sonará a plantilla?',
          a: 'No. Los borradores mencionan lo que el cliente escribió de verdad y siguen el tono que hayas definido para tu local. Siempre puedes editar el texto.',
        },
        {
          q: '¿Funciona en iPhone y Android?',
          a: 'Sí. TapReply funciona en el navegador y se puede añadir a la pantalla de inicio como una app: Safari en iPhone, Chrome en Android. También funciona en el portátil.',
        },
        {
          q: '¿Tengo que instalar algo desde la App Store?',
          a: 'No. Es una aplicación web (PWA): abre el enlace y añádela a tu pantalla de inicio.',
        },
        {
          q: '¿Qué pasa con los textos de las reseñas y mis respuestas?',
          a: 'Solo se procesan para traducirlos y prepararte las respuestas. No vendemos datos ni los usamos para publicidad. Puedes pedirnos que borremos tus datos en cualquier momento.',
        },
        {
          q: '¿Quién ve las traducciones?',
          a: 'Solo tú. El cliente solo ve la respuesta en su idioma.',
        },
        {
          q: '¿Cuánto cuesta?',
          a: 'Free: 1 local y 5 respuestas con IA al mes. Los planes de pago parten de un precio orientativo de 19–29 $ por local al mes. Son precios de acceso anticipado y pueden cambiar.',
        },
        {
          q: '¿Puedo gestionar varios locales?',
          a: 'Sí. El plan Multi cubre 3–5 locales con descuento por local; para grupos más grandes, Chain, bajo consulta.',
        },
        {
          q: '¿TapReply ya está disponible?',
          a: 'Estamos en acceso anticipado y buscamos entre 3 y 10 locales piloto. Solicita tu plaza en la página Piloto.',
        },
        {
          q: '¿Quién está detrás de TapReply?',
          a: 'AnKo Software Labs, un pequeño estudio de software independiente: un empresario individual registrado en Georgia.',
        },
      ],
    },

    about: {
      title: 'Nosotros — TapReply de AnKo Software Labs',
      description:
        'TapReply lo desarrolla AnKo Software Labs, un pequeño estudio de software independiente en Georgia. Contacto y forma de trabajar.',
      h1: 'Un pequeño estudio que crea una herramienta tranquila para la hostelería.',
      lead: 'TapReply lo hace AnKo Software Labs, un estudio de software independiente gestionado por un empresario individual en Georgia.',
      paragraphs: [
        'Vemos lo mismo en cafeterías y casas de huéspedes de Tiflis a Almaty y Valencia: a los dueños les importan sus clientes, pero responder reseñas en cinco idiomas desde el móvil entre comanda y comanda es difícil. Así que las reseñas se quedan sin respuesta, y los futuros clientes lo notan.',
        'TapReply existe para que una buena respuesta lleve segundos, no minutos, y para que el dueño siempre entienda lo que se publica. Evitamos las promesas de «IA mágica»: la IA redacta, una persona decide.',
        'Estamos en una fase temprana y trabajamos de cerca con un pequeño número de locales piloto. Si te ves reflejado, nos encantará saber de ti.',
      ],
      facts: [
        { label: 'Estudio', value: 'AnKo Software Labs' },
        { label: 'Forma jurídica', value: 'Empresario individual, Georgia' },
        { label: 'Fase', value: 'Acceso anticipado, programa piloto' },
        { label: 'Primeros mercados', value: 'Georgia y Kazajistán; después, España y Latinoamérica' },
      ],
      contactTitle: 'Contacto',
      contactText: 'La forma más rápida de contactarnos es por correo. Respondemos personalmente.',
      studioLink: 'Web del estudio',
    },

    privacy: {
      title: 'Política de privacidad (borrador) — TapReply',
      description: 'Borrador de la política de privacidad de TapReply: qué datos tratamos, para qué, cuánto tiempo los conservamos y cómo borrarlos.',
      h1: 'Política de privacidad',
      sections: [
        {
          h: 'Quiénes somos',
          p: [
            'TapReply lo gestiona AnKo Software Labs, empresario individual registrado en Georgia (número de registro: [TODO]). Contacto: ceo@ankosoftlab.com.',
          ],
        },
        {
          h: 'Qué datos tratamos',
          p: [
            'Datos de la cuenta: tu dirección de correo electrónico y, si nos los facilitas, tu nombre y el nombre y la ciudad de tu local.',
            'Contenido: los textos de las reseñas que traes a TapReply (incluido el nombre público del autor, si aparece en el texto) y las respuestas que preparas y apruebas.',
            'Datos técnicos: los registros mínimos necesarios para que el servicio funcione y sea seguro (por ejemplo, la hora de la solicitud y los códigos de error).',
            'Este sitio web no utiliza cookies de seguimiento ni analítica de terceros.',
          ],
        },
        {
          h: 'Para qué los tratamos',
          p: [
            'Para prestar el servicio: traducir reseñas, preparar borradores de respuesta y mostrártelos.',
            'Para comunicarnos contigo sobre tu cuenta, el programa piloto y la facturación.',
            'Para mantener el servicio seguro y corregir errores.',
            'No vendemos datos personales ni los usamos para publicidad.',
          ],
        },
        {
          h: 'Encargados del tratamiento',
          p: [
            'Trabajamos con proveedores seleccionados con cuidado: infraestructura de alojamiento y base de datos ubicada en la UE, y un proveedor de modelos de IA que procesa los textos de las reseñas únicamente para generar traducciones y borradores de respuesta. La lista de encargados está disponible a petición.',
          ],
        },
        {
          h: 'Cuánto tiempo conservamos los datos',
          p: [
            'Conservamos tus datos mientras tu cuenta esté activa. Cuando cierres tu cuenta o nos pidas borrar tus datos, los eliminaremos en un plazo de 30 días, salvo cuando la ley nos obligue a conservar ciertos registros (por ejemplo, facturas).',
          ],
        },
        {
          h: 'Tus derechos',
          p: [
            'Puedes pedirnos una copia de tus datos, su corrección o su eliminación. Escribe a ceo@ankosoftlab.com desde la dirección de correo vinculada a tu cuenta.',
          ],
        },
        {
          h: 'Cookies',
          p: [
            'Solo usamos cookies estrictamente necesarias para iniciar sesión y que el servicio funcione. Ninguna cookie publicitaria ni de seguimiento.',
          ],
        },
        {
          h: 'Cambios',
          p: ['Publicaremos los cambios de esta política en esta página y avisaremos por correo a los usuarios activos de los cambios importantes.'],
        },
      ],
    },

    terms: {
      title: 'Condiciones de uso (borrador) — TapReply',
      description: 'Borrador de las condiciones de uso de TapReply durante el acceso anticipado y el programa piloto.',
      h1: 'Condiciones de uso',
      sections: [
        {
          h: 'El servicio',
          p: [
            'TapReply lo presta AnKo Software Labs, empresario individual registrado en Georgia (número de registro: [TODO]). TapReply te ayuda a preparar respuestas a reseñas con IA, incluidas las traducciones.',
            'El servicio está en acceso anticipado. Las funciones pueden cambiar y puede haber interrupciones.',
          ],
        },
        {
          h: 'Tu responsabilidad sobre las respuestas',
          p: [
            'La IA solo prepara borradores. Tú revisas, editas y publicas las respuestas y eres responsable de su contenido. Revisa los borradores: la IA puede equivocarse.',
            'Publicas las respuestas en plataformas de terceros según sus propias normas. TapReply no está afiliado a Google, Yandex, 2GIS, Tripadvisor, Booking.com, TheFork, Meta ni a otras plataformas.',
          ],
        },
        {
          h: 'Uso aceptable',
          p: [
            'No uses TapReply para crear reseñas falsas, engañar a los clientes, acosar a nadie ni incumplir las normas de las plataformas o la ley.',
          ],
        },
        {
          h: 'Pago',
          p: [
            'El uso gratuito está limitado según se indica en la página de Precios. Durante el piloto, los planes de pago se facturan mediante factura; no hay cargos automáticos en tarjeta. Los precios son de acceso anticipado y pueden cambiar con previo aviso.',
          ],
        },
        {
          h: 'Responsabilidad',
          p: [
            'Durante el acceso anticipado, el servicio se presta «tal cual». En la medida en que lo permita la ley, nuestra responsabilidad se limita al importe que nos hayas pagado en los tres meses anteriores a la reclamación.',
          ],
        },
        {
          h: 'Finalización',
          p: ['Puedes dejar de usar TapReply cuando quieras y pedirnos que borremos tus datos. Podemos suspender las cuentas que incumplan estas condiciones.'],
        },
        {
          h: 'Contacto',
          p: ['Dudas sobre estas condiciones: ceo@ankosoftlab.com.'],
        },
      ],
    },

    segments: {
      restaurants: {
        title: 'TapReply para restaurantes, cafeterías y bares',
        description:
          'Responde a las reseñas de turistas en Google, Yandex Maps, 2GIS, Tripadvisor y TheFork en su idioma, desde el móvil y entre comanda y comanda.',
        kicker: 'Para restaurantes, cafeterías y bares',
        h1: 'Responde a cada cliente entre dos comandas.',
        lead: 'Los turistas te dejan reseñas en alemán, hebreo o coreano en cinco plataformas distintas. TapReply las reúne en un solo feed y prepara en segundos una respuesta en el idioma del cliente: tú solo la revisas y la envías.',
        pains: [
          {
            title: 'Reseñas en idiomas que no lees',
            text: 'Un cliente extranjero escribe una reseña detallada y no sabes con seguridad qué le gustó ni qué falló.',
          },
          {
            title: 'Demasiadas plataformas',
            text: 'Google, Yandex Maps, 2GIS, Tripadvisor, TheFork: cada una con su app y sus notificaciones.',
          },
          {
            title: 'Sin tiempo durante el servicio',
            text: 'Las respuestas se dejan para «luego» y luego nunca llega. Las reseñas negativas sin respuesta se quedan arriba.',
          },
        ],
        how: [
          {
            title: 'Un solo feed, en plena sala',
            text: 'Las reseñas nuevas y negativas de todas las plataformas en una lista en tu móvil. Google mediante la API oficial está en preparación; las demás, por correos de notificación o pegando el texto.',
          },
          {
            title: 'Escudo para turistas',
            text: 'La reseña traducida para ti, una respuesta en el idioma del cliente y la traducción de esa respuesta: sabes exactamente qué publicas.',
          },
          {
            title: 'Diez segundos, un pulgar',
            text: 'El borrador menciona el plato o el camarero del que habló el cliente. Tú apruebas, copias y pegas: nada sale sin ti.',
          },
        ],
        example: {
          platform: 'Combinación típica de una cafetería céntrica: Google, Tripadvisor, TheFork, Yandex Maps.',
          note: 'En Yandex Maps el borrador se redacta en ruso, como espera la plataforma, con una traducción para ti si la necesitas.',
        },
        ctaTitle: '¿Tienes una cafetería, restaurante o bar con clientes extranjeros?',
        ctaText: 'Únete al piloto: configuraremos contigo las plataformas y el tono de tu local.',
      },
      hotels: {
        title: 'TapReply para casas de huéspedes y hoteles pequeños',
        description:
          'Responde a reseñas largas de Booking.com, Tripadvisor y Google de huéspedes de muchos países, en su idioma y con traducción para ti. Sin contraseñas.',
        kicker: 'Para casas de huéspedes y hoteles pequeños',
        h1: 'Reseñas largas, muchos idiomas: una respuesta tranquila.',
        lead: 'Tus huéspedes vienen de todas partes y escriben con detalle sobre la habitación, el desayuno y el anfitrión. TapReply te ayuda a responder a cada uno de forma personal, en su idioma, sin dedicarle la tarde.',
        pains: [
          {
            title: 'Reseñas largas y detalladas',
            text: 'Los huéspedes escriben párrafos sobre el check-in, la limpieza y el desayuno. Una buena respuesta tiene que ir a lo concreto.',
          },
          {
            title: 'Huéspedes de muchos países',
            text: 'Alemán, francés, hebreo, polaco, chino: la traducción automática por sí sola no te dice si tu respuesta suena bien.',
          },
          {
            title: 'Las reseñas influyen en las reservas',
            text: 'Los futuros huéspedes leen cómo responde el anfitrión, sobre todo a las críticas. El silencio o una plantilla restan confianza.',
          },
        ],
        how: [
          {
            title: 'Booking, Tripadvisor y Google en un solo sitio',
            text: 'Reenvía los correos de notificación o pega la reseña. Google mediante la API oficial está en preparación. Nunca te pedimos la contraseña de la extranet.',
          },
          {
            title: 'Una respuesta personal, punto por punto',
            text: 'El borrador agradece lo que gustó y responde con calma a cada queja, con tu tono y en el idioma del huésped.',
          },
          {
            title: 'Tú tienes el control',
            text: 'Lee la traducción de tu respuesta, ajusta un detalle y pégala tú mismo en la extranet. La IA solo redacta.',
          },
        ],
        example: {
          platform: 'Combinación típica de una casa de huéspedes: Booking.com, Tripadvisor, Google.',
          note: 'Las reseñas de Booking.com y Tripadvisor llegan por correos de notificación o pegando el texto; tú publicas la respuesta en sus paneles.',
        },
        ctaTitle: '¿Recibes huéspedes de muchos países?',
        ctaText: 'Hazte local piloto: puesta en marcha personalizada y precios preferentes de lanzamiento.',
      },
    },

    notFound: {
      title: 'Página no encontrada — TapReply',
      description: 'Esta página no existe.',
      h1: 'Esta página no existe.',
      text: 'Puede que el enlace sea antiguo o esté mal escrito. Te llevamos de vuelta.',
      home: 'Ir a la página de inicio',
    },
  },
};
