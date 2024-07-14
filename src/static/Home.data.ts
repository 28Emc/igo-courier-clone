export const HOME_DATA = {
  section_hero: {
    visible: true,
    title: 'Tu solución confiable para envíos locales urgentes',
    description: 'Confía en nosotros para entregar desde documentos importantes hasta paquetes delicados, siempre a tiempo y con la máxima seguridad. #br# Nuestro compromiso es brindarte un servicio de calidad que cumpla con tus expectativas en cada entrega.',
    imageSrc: '/src/assets/images/inicio-delivery-biker.svg'
  },
  section_tracking: {
    visible: true,
    title: 'Rastrea tu envío',
    description: 'Sigue los pasos mostrados a continuación para poder realizar el seguimiento de tu envío.'
  },
  section_servicios: {
    visible: true,
    title: 'Servicios disponibles',
    description: 'En IGO COURIER, entendemos la importancia de cada paquete que nos confías. Con nuestra dedicación y eficiencia, nos comprometemos a brindarte un servicio de courier confiable y de calidad en cada entrega.',
    services: [
      {
        id: 'programado',
        imageSrc: '',
        title: 'Programado',
        description: 'El servicio PROGRAMADO permite planificar recogida y entrega en fechas específicas. Perfecto para flexibilidad, garantizamos puntualidad y condiciones óptimas.',
        descriptionFull: '¿Prefieres planificar tus envíos con anticipación? Con nuestro servicio PROGRAMADO, puedes elegir la fecha y hora de recogida y entrega que mejor se adapte a tu agenda, asegurando una entrega puntual y conveniente para tus paquetes.',
        for: ['E-Commerce', 'Retail', 'Marketplace'],
        href: '/servicios/programado'
      },
      {
        id: 'sameday',
        imageSrc: '',
        title: 'SameDay',
        description: 'Nuestro servicio SAMEDAY garantiza la recogida y entrega de paquetes el mismo día. Ideal para envíos urgentes, aseguramos rapidez y eficiencia.',
        descriptionFull: '¿Tienes un envío urgente que necesita llegar hoy mismo? Con nuestro servicio SAMEDAY, garantizamos la recogida y entrega el mismo día, proporcionando una solución rápida y confiable para tus envíos más importantes.',
        for: ['E-Commerce', 'Retail', 'Marketplace'],
        href: '/servicios/sameday'
      },
      {
        id: 'expres',
        imageSrc: '',
        title: 'Exprés',
        description: 'El servicio EXPRESS ofrece entregas rápidas y prioritarias para envíos urgentes. Garantizamos rapidez sin comprometer la seguridad.',
        descriptionFull: '¿Buscas la máxima rapidez en tus envíos? Nuestro servicio EXPRES ofrece entregas rápidas y prioritarias, asegurando que tus paquetes lleguen a su destino en el menor tiempo posible, sin comprometer la seguridad ni la eficiencia.',
        for: ['E-Commerce', 'Retail', 'Marketplace', ' Empresas y negocios'],
        href: '/servicios/expres'
      },
      {
        id: 'inhouse',
        imageSrc: '',
        title: 'Inhouse',
        description: 'El servicio INHOUSE proporciona un mensajero dedicado en tus instalaciones. Ideal para altos volúmenes de envío, asegura rapidez y control.',
        descriptionFull: 'Nuestro servicio INHOUSE proporciona a las empresas un mensajero dedicado dentro de sus instalaciones, gestionando todos los envíos con rapidez y eficiencia, ideal para negocios con altos volúmenes de envío que requieren una solución flexible y personalizada.',
        for: ['Empresas y negocios'],
        href: '/servicios/inhouse'
      },
      {
        id: 'mensajería',
        imageSrc: '',
        title: 'Mensajería',
        description: 'El servicio de MENSAJERÍA es perfecto para documentos y pequeños paquetes en la ciudad. Garantizamos rapidez, seguridad y seguimiento.',
        descriptionFull: 'El servicio de MENSAJERÍA de IGO COURIER asegura la entrega rápida y segura de documentos importantes y pequeños paquetes dentro de la ciudad, ofreciendo seguimiento en tiempo real y garantizando la confiabilidad y eficiencia en cada entrega.',
        for: ['Retail', 'Personas naturales', 'Empresas y negocios'],
        href: '/servicios/mensajeria'
      },
      {
        id: 'ecommerce',
        imageSrc: '',
        title: 'E-commerce',
        description: 'Diseñado para tiendas en línea, nuestro servicio E-COMMERCE ofrece envíos rápidos y seguros con integración y seguimiento en tiempo real.',
        descriptionFull: 'Nuestro servicio E-COMMERCE está diseñado para tiendas en línea, proporcionando soluciones de envío rápidas y seguras con integración fácil a plataformas de comercio electrónico y opciones de seguimiento en tiempo real para una experiencia de compra óptima y satisfacción del cliente.',
        for: ['E-Commerce', 'Retail', 'Marketplace', 'Personas naturales'],
        href: '/servicios/ecommerce'
      }
    ]
  },
  section_porque_elegirnos: {
    visible: true,
    title: '¿Por qué elegirnos?',
    statements: [
      {
        id: 'rapidez',
        imageSrc: '/src/assets/images/inicio-rapidez.svg',
        title: 'Rapidez',
        description: 'Entregamos tus envíos en el menor tiempo posible, sin comprometer la seguridad.'
      },
      {
        id: 'confiabilidad',
        imageSrc: '/src/assets/images/inicio-seguro.svg',
        title: 'Confiabilidad',
        description: 'Ponemos tu confianza en primer lugar, garantizando la entrega segura de cada paquete.'
      },
      {
        id: 'servicio-al-cliente-excepcional',
        imageSrc: '/src/assets/images/inicio-servicio-al-cliente.svg',
        title: 'Servicio al cliente excepcional',
        description: 'Nuestro equipo está aquí para ayudarte en cada paso del proceso, desde la cotización hasta la entrega final.'
      }
    ]
  },
  section_stadisticas: {
    visible: true,
    title: '¡Déjanos ser tu socio de confianza en cada entrega!',
    description: 'Desde documentos importantes hasta paquetes delicados, estamos aquí para cumplir con tus necesidades de envío de manera rápida y segura.',
    imageSrc: '/src/assets/images/inicio-delivery-done.svg',
    statistics: [
      {
        id: 'clientes',
        value: 345,
        unit: 'k',
        description: 'Clientes satisfechos'
      },
      {
        id: 'motorizados',
        value: 2,
        unit: 'k',
        description: 'Motorizados a disposición'
      },
      {
        id: 'paquetes',
        value: 500,
        unit: 'k',
        description: 'Paquetes entregados'
      }
    ]
  },
  section_testimonios: {
    visible: true,
    title: 'Testimonios',
    description: 'Lee los testimonios de las personas que confiaron en nosotros',
    testimonios: [
      {
        description: `"IGO COURIER es excelente. Envié documentos urgentes en Lima y todo fue perfecto. Recogieron rápido y entregaron antes de lo esperado. La comunicación fue clara y profesional. #br# #br# Sin duda, los volveré a usar y recomendar."`,
        person: {
          name: 'Ana Pérez',
          location: 'Los Olivos',
          imageSrc: 'https://i.pravatar.cc/300?images=10'
        }
      },
      {
        description: `"Muy satisfecho con IGO COURIER. Usé el servicio EXPRESS para un envío urgente en Lima. Fue rápido y eficiente. La reserva fue sencilla y el personal muy amable. #br# #br# Definitivamente los recomendaré a otros."`,
        person: {
          name: 'María Huamaní',
          location: 'Carabayllo',
          imageSrc: 'https://i.pravatar.cc/300?images=20'
        }
      },
      {
        description: `"IGO COURIER me sorprendió gratamente. Utilicé el servicio PROGRAMADO para enviar regalos en Lima. Programar la entrega fue fácil y puntual. Todo llegó a tiempo y en perfectas condiciones. #br# #br# Los recomendaré y seguiré usándolos."`,
        person: {
          name: 'María García',
          location: 'Breña',
          imageSrc: 'https://i.pravatar.cc/300?images=30'
        }
      },
      {
        description: `"IGO COURIER me salvó. Necesitaba enviar documentos urgentes y el servicio SAMEDAY fue ideal. La entrega fue rápida y la comunicación excelente. Muy profesionales y eficientes. #br# #br# Los usaré nuevamente y los recomendaré sin duda."`,
        person: {
          name: 'Luisa Torres',
          location: 'Barranco',
          imageSrc: 'https://i.pravatar.cc/300?images=40'
        }
      }
    ]
  }
};
