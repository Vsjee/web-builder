import { IExamples, IFAQ, IOnlinePresence, ITutorial } from '../interfaces';

export const onlinePresence: IOnlinePresence[] = [
  {
    title: 'Personaliza tu sitio',
    content:
      'Mediante un sistema de drag and drop ten el control absoluto sobre como se mira tu sitio.',
  },
  {
    title: 'Agrega funciones avanzadas',
    content:
      'Crea tu propio blog, añade una tienda online y acepta reservas online. Siempre puedes incorporar más funciones a medida que crezcas.',
  },
  {
    title: 'Edita la vista móvil',
    content:
      'Revisa la versión optimizada para móviles de tu página web. Cambia al Editor móvil para personalizarla aún más.',
  },
  {
    title: 'Optimiza tu sitio para los motores de búsqueda',
    content:
      'Obtén un completo conjunto de herramientas SEO para aumentar tu tráfico orgánico y maximizar el rendimiento de tu sitio en las búsquedas.',
  },
];

export const examples: IExamples[] = [
  {
    title: 'Blog',
    content:
      'Crea un blog con funciones incorporadas para aumentar el alcance de tu negocio o marca y hacer crecer tu comunidad.',
    image: '/assets/blog-post.svg',
  },
  {
    title: 'Landing page',
    content:
      'Crea hermosas landing pages para el lanzamiento de productos y/o presentar lo que haces.',
    image: '/assets/landing-page.svg',
  },
  {
    title: 'Facil uso',
    content:
      'Crea la pagina de tus sueños con tan solo arrastrar y soltar. es de facil uso y acceso',
    image: '/assets/learning.svg',
  },
  {
    title: 'Herramientas de SEO',
    content:
      'Mejora tu visibilidad en los motores de búsqueda con nuestras potentes herramientas de SEO.',
    image: '/assets/seo.svg',
  },
];

export const tutorial: ITutorial[] = [
  {
    strongText: 'Regístrate en un creador de páginas web gratuito.',
    text: 'Elige qué tipo de sitio web quieres crear.',
  },
  {
    strongText: 'Personaliza una plantilla o obtén un sitio web hecho para ti.',
    text: 'Elige tu punto de partida.',
  },
  {
    strongText: 'Arrastra y suelta la función de diseño que prefieras.',
    text: 'Añade texto, galerías, videos, arte vectorial y mucho más.',
  },
  {
    strongText: 'Cuando la termines puedes publicarla o descargarla.',
    text: 'Ten en cuenta que que quieres hacer.',
  },
  {
    strongText: 'Disfruta de tu pagina web.',
    text: 'Y mira como consigues a mas gente que se interese en ti y/o tu producto.',
  },
];

export const FAQ: IFAQ[] = [
  {
    question: '¿Es fácil crear una página web?',
    answer:
      'Sí. Cube ofrece diferentes maneras de crear tu propia página web de forma gratuita, Si quieres 100% libertad de diseño, comienza desde cero y arrastra y suelta las funciones de diseño que necesitas con el Editor de Wix.',
  },
  {
    question: '¿Puedo crear un sitio web sin saber programación?',
    answer:
      'Sí, claro. Cube es fácil de usar y hace posible crear un sitio web profesional sin tener conocimientos de programación. En el Editor de Cube, puedes arrastrar y soltar cualquier función que desees y personalizarla para que coincida con el aspecto de tu sitio. Por supuesto, si sabes cómo programar, puedes añadir funcionalidad avanzada a tu sitio.',
  },
  {
    question: '¿Cómo hago que mi página sea compatible con dispositivos móviles?',
    answer:
      'Tu página web de Cube viene automáticamente con una versión optimizada para móviles que se ve muy bien en pantallas pequeñas. El Editor móvil de Cube permite personalizar fácilmente tu sitio móvil.',
  },
  {
    question: '¿Debo utilizar un creador de sitios web o contratar a un desarrollador web?',
    answer:
      'El creador de sitios web gratuito de Cube es de uso intuitivo. ¿Buscas un servicio web específico? Explora el Cube Marketplace para encontrar un freelancer certificado o una agencia a un precio que se ajuste a tu presupuesto. (pronto)',
  },
  {
    question:
      '¿Puedo utilizar un creador de sitios web para crear una landing page (página de aterrizaje)?',
    answer:
      'Por supuesto. Puedes crear cualquier tipo de página web con Cube. Explora o importa plantillas de landing pages en HTML para comenzar hoy mismo.',
  },
];
