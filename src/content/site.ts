/**
 * ============================================================
 *  CONTENIDO DEL SITIO — editá todo desde acá.
 * ============================================================
 *  Textos, precios, datos de contacto y links viven en este archivo.
 *  Los componentes solo leen estos datos: no hace falta tocarlos.
 *
 *  Buscá "TODO" para encontrar lo que falta completar.
 *  En los textos podés usar **doble asterisco** para resaltar una palabra
 *  (solo en los títulos que lo indican).
 */

export const site = {
  // ---------- Marca y SEO ----------
  brand: 'VIO',
  /** TODO: dominio final, sin barra al final. Se usa para sitemap, canonical y Open Graph. */
  url: 'https://landingbot.vercel.app', // TODO: cambiar si conectás un dominio propio
  lang: 'es-AR',
  seo: {
    title: 'VIO · Bots de WhatsApp y automatizaciones para tu negocio',
    description:
      'Bots de WhatsApp, Telegram e inteligencia artificial para pymes y emprendedores. Respondé 24/7, tomá pedidos y agendá turnos sin perder ventas. Desde Rosario, Argentina.',
    /** Texto que aparece en la imagen para compartir (/og.png). */
    ogHeadline: 'Tu negocio responde por WhatsApp, aunque vos no estés.',
    ogTagline: 'Bots y automatizaciones para pymes y emprendedores',
  },

  // ---------- Contacto ----------
  contact: {
    /** Número en formato internacional, sin "+" ni espacios. */
    whatsapp: '5493382571141',
    whatsappMessage: 'Hola VIO, quiero consultar por un bot para mi negocio.',
    /** TODO: número del bot demo (formato internacional, sin "+" ni espacios). */
    demoNumber: 'PLACEHOLDER_DEMO',
    demoMessage: 'Hola, quiero probar el bot',
    /** TODO: email de contacto. */
    email: 'TODO-tu-email@ejemplo.com',
    location: 'Rosario, Argentina',
  },

  /** TODO: completá los links. Si dejás un link vacío (''), esa red no se muestra. */
  social: [
    { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/TODO' },
    { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/TODO' },
    { name: 'GitHub', icon: 'github', href: 'https://github.com/TODO' },
  ],

  // ---------- Formulario ----------
  form: {
    /**
     * 'netlify'   → usa Netlify Forms (solo funciona si deployás en Netlify).
     * 'formspree' → usa Formspree (funciona en cualquier hosting, incluido Vercel).
     */
    provider: 'formspree' as 'formspree' | 'netlify',
    /** TODO: ID de tu formulario de Formspree (lo que va después de /f/ en la URL). */
    formspreeId: 'TODO_FORMSPREE_ID',
    /** Nombre del formulario en Netlify. */
    netlifyName: 'contacto',
  },

  // ---------- Navegación ----------
  nav: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Rubros', href: '#rubros' },
    { label: 'Cómo trabajo', href: '#proceso' },
    { label: 'Planes', href: '#planes' },
    { label: 'Preguntas', href: '#faq' },
  ],
  headerCta: 'Escribime por WhatsApp',

  // ---------- 2. Hero ----------
  hero: {
    eyebrow: 'Bots y automatizaciones para pymes y emprendedores',
    title: 'Tu negocio atiende y vende por WhatsApp **las 24 horas**',
    subtitle:
      'Un bot que responde al instante, toma pedidos, agenda turnos y te pasa la conversación cuando hace falta. Vos te ocupás del negocio; los mensajes no se quedan esperando.',
    primaryCta: 'Probá el bot demo',
    secondaryCta: 'Pedí tu presupuesto',
    secondaryHref: '#contacto',
    note: 'Sin compromiso · Respuesta en el día',
    /** Conversación de ejemplo que se muestra en el teléfono del hero (es ilustrativa). */
    chat: [
      { from: 'user', text: 'Hola! ¿Tienen turno para el jueves?' },
      { from: 'bot', text: '¡Hola! 👋 Sí, el jueves tengo libre a las 10:00, 15:30 y 18:00. ¿Cuál te queda mejor?' },
      { from: 'user', text: '15:30 porfa' },
      { from: 'bot', text: 'Listo ✅ Te reservé el jueves a las 15:30. Te mando un recordatorio el día anterior.' },
    ],
  },

  // ---------- 3. El problema ----------
  problem: {
    eyebrow: '¿Te suena familiar?',
    title: 'Cada mensaje sin responder es una venta que se va a otro lado',
    items: [
      {
        icon: 'inbox',
        title: 'Mensajes que se acumulan',
        text: 'Entre atender, producir y administrar, el WhatsApp explota y las respuestas llegan tarde.',
      },
      {
        icon: 'repeat',
        title: 'Siempre las mismas preguntas',
        text: 'Precios, horarios, dirección, medios de pago… Contestás lo mismo decenas de veces por día.',
      },
      {
        icon: 'moon',
        title: 'Consultas fuera de horario',
        text: 'Muchos clientes escriben de noche o el fin de semana, y para el lunes ya compraron en otro lado.',
      },
      {
        icon: 'clipboard',
        title: 'Turnos y pedidos a mano',
        text: 'Anotar, confirmar y recordar cada turno o pedido te come horas y deja lugar a errores.',
      },
    ],
  },

  // ---------- 4. Servicios ----------
  services: {
    eyebrow: 'Servicios',
    title: 'Soluciones a medida de tu negocio',
    subtitle: 'Cada proyecto arranca entendiendo cómo trabajás hoy. Después elegimos la herramienta que mejor encaja.',
    items: [
      {
        icon: 'whatsapp',
        title: 'Bots de WhatsApp',
        text: 'Atención automática en el canal que tus clientes ya usan, con la API oficial de Meta: estable, segura y sin riesgo de bloqueos.',
        tag: 'API oficial de Meta',
      },
      {
        icon: 'telegram',
        title: 'Bots de Telegram',
        text: 'Ideales para comunidades, avisos, pedidos internos o atención a clientes que prefieren Telegram.',
        tag: '',
      },
      {
        icon: 'sparkles',
        title: 'Bots con inteligencia artificial',
        text: 'Responden con la información real de tu negocio (catálogo, precios, políticas) y entienden preguntas escritas de mil maneras.',
        tag: 'Entrenado con tu info',
      },
      {
        icon: 'plug',
        title: 'Automatizaciones e integraciones',
        text: 'Conectamos el bot con Google Sheets, Calendar, tu CRM, tu tienda online o tu sistema propio para que los datos se carguen solos.',
        tag: '',
      },
    ],
  },

  // ---------- 5. Qué puede hacer un bot ----------
  features: {
    eyebrow: 'Funcionalidades',
    title: '¿Qué puede hacer un bot por vos?',
    items: [
      { icon: 'chat', title: 'Responder preguntas frecuentes', text: 'Precios, horarios, envíos y todo lo que te preguntan siempre.' },
      { icon: 'cart', title: 'Tomar pedidos', text: 'Arma el pedido con el cliente y te lo deja listo para preparar.' },
      { icon: 'calendar', title: 'Agendar turnos', text: 'Muestra horarios libres y reserva directo en tu agenda.' },
      { icon: 'bell', title: 'Enviar recordatorios', text: 'Avisos de turnos, vencimientos o pedidos para reducir ausencias.' },
      { icon: 'filter', title: 'Calificar consultas', text: 'Hace las preguntas clave y te pasa solo los contactos con interés real.' },
      { icon: 'handoff', title: 'Derivar a una persona', text: 'Cuando la consulta lo requiere, te avisa y seguís vos la charla.' },
      { icon: 'card', title: 'Compartir links de pago', text: 'Envía el link o los datos para pagar en el momento justo.' },
      { icon: 'table', title: 'Registrar datos', text: 'Guarda contactos, pedidos y consultas en una planilla o tu sistema.' },
    ],
  },

  // ---------- 6. Ejemplos por rubro ----------
  industries: {
    eyebrow: 'Ejemplos por rubro',
    title: 'Sirve para cualquier negocio que reciba mensajes',
    subtitle: 'Algunas ideas de lo que se puede automatizar. Si tu rubro no está, escribime: seguro hay algo para hacer.',
    items: [
      { icon: 'health', title: 'Salud y bienestar', text: 'Turnos para consultorios, centros de estética o gimnasios, recordatorios y confirmación de asistencia.' },
      { icon: 'food', title: 'Gastronomía', text: 'Menú del día, pedidos para delivery o take away y reservas de mesa.' },
      { icon: 'home', title: 'Inmobiliarias', text: 'Filtrar consultas por zona y presupuesto, enviar fichas de propiedades y coordinar visitas.' },
      { icon: 'bag', title: 'Comercio online', text: 'Stock, precios, estado del envío y seguimiento de carritos abandonados.' },
      { icon: 'book', title: 'Educación', text: 'Info de cursos, inscripciones, avisos a alumnos y respuestas sobre cuotas.' },
      { icon: 'briefcase', title: 'Servicios profesionales', text: 'Primera consulta, pedido de documentación y agenda de reuniones para estudios y consultoras.' },
    ],
  },

  // ---------- 7. Cómo trabajamos ----------
  process: {
    eyebrow: 'Cómo trabajo',
    title: 'De la idea al bot funcionando, en 4 pasos',
    steps: [
      { title: 'Charla inicial', text: 'Me contás cómo funciona tu negocio y qué te gustaría resolver. Sin costo y sin compromiso.' },
      { title: 'Propuesta', text: 'Te paso una propuesta clara: qué va a hacer el bot, plazos y costos, sin letra chica.' },
      { title: 'Desarrollo y pruebas', text: 'Construyo el bot y lo probamos juntos con casos reales antes de que lo vean tus clientes.' },
      { title: 'Lanzamiento y acompañamiento', text: 'Lo ponemos en marcha y lo sigo de cerca: ajustes, mejoras y soporte cuando lo necesites.' },
    ],
  },

  // ---------- 8. Planes ----------
  pricing: {
    eyebrow: 'Planes',
    title: 'Implementación + abono mensual',
    subtitle:
      'Pagás una vez la implementación y después un abono mensual que incluye mantenimiento, hosting, soporte y ajustes.',
    /** Mensaje de WhatsApp de los botones de cada plan. {plan} se reemplaza por el nombre del plan. */
    ctaMessage: 'Hola VIO, me interesa el plan {plan}.',
    /** TODO: reemplazá los [X] por tus precios. */
    plans: [
      {
        name: 'Esencial',
        description: 'Para empezar a responder automáticamente lo más consultado.',
        setup: 'Desde USD [X]',
        monthly: 'Desde USD [X] / mes',
        features: [
          'Bot de WhatsApp o Telegram',
          'Menú de opciones y preguntas frecuentes',
          'Derivación a una persona',
          'Mantenimiento, hosting y soporte',
        ],
        highlighted: false,
        cta: 'Quiero este plan',
      },
      {
        name: 'Negocio',
        description: 'Para tomar pedidos o turnos y conectar tus herramientas.',
        setup: 'Desde USD [X]',
        monthly: 'Desde USD [X] / mes',
        features: [
          'Todo lo del plan Esencial',
          'Pedidos, turnos y recordatorios',
          'Integración con Google Sheets o Calendar',
          'Ajustes mensuales incluidos',
        ],
        highlighted: true,
        badge: 'Recomendado', // TODO: cambialo o dejalo vacío ('') si preferís no mostrarlo
        cta: 'Quiero este plan',
      },
      {
        name: 'IA a medida',
        description: 'Para conversaciones naturales con la información de tu negocio.',
        setup: 'Desde USD [X]',
        monthly: 'Desde USD [X] / mes',
        features: [
          'Todo lo del plan Negocio',
          'Respuestas con inteligencia artificial',
          'Integración con CRM, tienda o sistema propio',
          'Soporte prioritario',
        ],
        highlighted: false,
        cta: 'Quiero este plan',
      },
    ],
    disclaimer:
      'Los costos de mensajería de Meta (WhatsApp) y de los servicios de inteligencia artificial no están incluidos: dependen del volumen de uso y se pagan aparte. Te los estimo en la propuesta.',
  },

  // ---------- 9. Demo ----------
  demo: {
    eyebrow: 'Demo en vivo',
    title: 'Probalo vos antes de decidir',
    text: 'Escribile al bot demo y mirá cómo responde, toma un pedido o agenda un turno. Es lo mismo que van a vivir tus clientes.',
    cta: 'Abrir el bot en WhatsApp',
    qrHint: 'Desde la compu, escaneá el código con la cámara del celular.',
  },

  // ---------- 10. FAQ ----------
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Lo que más me preguntan',
    items: [
      {
        q: '¿Puedo usar mi número actual?',
        a: 'Sí, en la mayoría de los casos. Para usar la API oficial, el número no puede estar activo al mismo tiempo en la app común de WhatsApp: lo migramos o usamos una línea nueva. Lo vemos juntos en la charla inicial.',
      },
      {
        q: '¿Es la API oficial de WhatsApp?',
        a: 'Sí. Trabajo con la API oficial de WhatsApp Business de Meta, que es la forma autorizada de automatizar mensajes, sin riesgo de que te bloqueen el número.',
      },
      {
        q: '¿Cuánto tarda en estar listo?',
        a: 'Depende de lo que tenga que hacer el bot. Un bot de preguntas frecuentes puede estar en pocos días; uno con integraciones o IA lleva más. En la propuesta te paso un plazo concreto.', // TODO: si querés, poné plazos específicos
      },
      {
        q: '¿Qué pasa si el bot no sabe responder?',
        a: 'Le avisa al cliente que lo deriva con una persona y te notifica para que sigas vos la conversación. Nadie se queda sin respuesta.',
      },
      {
        q: '¿Puedo modificar las respuestas?',
        a: 'Sí. Podés pedirme cambios cuando lo necesites (están incluidos en el abono) y, según el proyecto, también editar textos, precios o preguntas desde una planilla.',
      },
      {
        q: '¿Qué incluye el abono mensual?',
        a: 'Hosting del bot, mantenimiento, monitoreo, soporte y ajustes. No incluye los costos de mensajería de Meta ni de IA, que dependen del uso.',
      },
    ],
  },

  // ---------- 11. Sobre mí ----------
  about: {
    eyebrow: 'Sobre mí',
    title: 'Hola, soy [TU NOMBRE]', // TODO: tu nombre
    paragraphs: [
      // TODO: revisá y personalizá este texto
      'Soy programadora freelance en Rosario, Argentina. Desarrollo bots y automatizaciones para que pymes y emprendedores dejen de perder tiempo en tareas repetitivas y no pierdan ventas por no llegar a responder.',
      'Trabajo de forma cercana: me interesa entender tu negocio, explicarte todo sin tecnicismos y acompañarte también después del lanzamiento.',
    ],
    /**
     * TODO: foto. Guardala en src/assets/ (ej. src/assets/foto.jpg) y poné acá el nombre del archivo.
     * Mientras quede vacío ('') se muestra un recuadro de placeholder.
     */
    photo: '',
    photoAlt: 'Foto de [TU NOMBRE], desarrolladora de bots en Rosario', // TODO
  },

  // ---------- 12. Contacto ----------
  contactSection: {
    eyebrow: 'Contacto',
    title: 'Contame qué necesitás',
    text: 'Escribime por WhatsApp o dejame tus datos y te respondo en el día hábil.',
    whatsappCta: 'Escribime por WhatsApp',
    fields: {
      name: 'Tu nombre',
      business: 'Tu negocio o rubro',
      need: '¿Qué te gustaría automatizar?',
      needPlaceholder: 'Ej.: quiero que el bot responda precios y tome pedidos para delivery.',
    },
    submit: 'Enviar consulta',
    privacy: 'Uso tus datos solo para responderte.',
  },

  thanks: {
    title: '¡Gracias por escribir!',
    text: 'Recibí tu consulta y te respondo a la brevedad. Si es urgente, escribime por WhatsApp.',
    back: 'Volver al inicio',
  },

  // ---------- 13. Footer ----------
  footer: {
    tagline: 'Bots y automatizaciones para que tu negocio atienda y venda las 24 horas.',
  },
};

export type Site = typeof site;
