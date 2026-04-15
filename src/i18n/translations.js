/*
 * translations.js — All UI text in English and Spanish.
 *
 * Usage in any component:
 *   const { lang } = useLanguage();
 *   <h1>{T.hero.headline[lang]}</h1>
 *
 * Convention: every leaf value is { en: "...", es: "..." }
 */

export const T = {

  // ── AnnouncementBar ────────────────────────────────────────────────────────
  announcement: {
    text: { en: "Ready to start your project?", es: "¿Listo para empezar tu proyecto?" },
    cta:  { en: "Talk to our team",             es: "Habla con nuestro equipo"          },
  },

  // ── NavBar ─────────────────────────────────────────────────────────────────
  nav: {
    projects:     { en: "Projects",          es: "Proyectos"          },
    about:        { en: "About",             es: "Sobre mí"           },
    skills:       { en: "Skills",            es: "Habilidades"        },
    contact:      { en: "Contact",           es: "Contacto"           },
    startProject: { en: "Start a Project",   es: "Iniciar Proyecto"   },
  },

  // ── HeroSection ────────────────────────────────────────────────────────────
  hero: {
    available:      { en: "Available for new projects",  es: "Disponible para nuevos proyectos" },
    // Staggered headline — 3 lines, last line has a gradient accent word appended
    headlineLines:  {
      en: ["We create software that brings new"    ],
      es: ["Creamos software que da vida a"     ],
    },
    headlineAccent: { en: "businesses to life.",          es: "nuevos negocios."   },
    specializing:   { en: "",  es: ""  },
    valueProps: {
      en: [
        "The first step to building something real.",
        "We build what you need to start and grow.",
      ],
      es: [
        "El primer paso para construir algo real.",
        "Construimos lo que necesitas para empezar y crecer.",
      ],
    },
    ctaPrimary:   { en: "Start a Project →",  es: "Iniciar Proyecto →"  },
    ctaSecondary: { en: "View My Work",        es: "Ver mis Proyectos"   },
    scroll:       { en: "scroll",              es: "scroll"              },
    stats: {
      projects:     { en: "Projects Delivered",     es: "Proyectos Entregados"       },
      satisfaction: { en: "Client Satisfaction",    es: "Satisfacción del Cliente"   },
      experience:   { en: "Years Experience",       es: "Años de Experiencia"        },
    },
  },

  // ── ProjectsSection ────────────────────────────────────────────────────────
  projects: {
    eyebrow:        { en: "Selected Work",  es: "Trabajo Seleccionado" },
    headline:       { en: "Projects That",  es: "Proyectos que"        },
    headlineAccent: { en: "Deliver",        es: "se Entregan"          },
    subtitle: {
      en: "Real software for real businesses — built to solve actual problems and help operations run smoother.",
      es: "Software real para negocios reales — construido para resolver problemas concretos y hacer las operaciones más eficientes.",
    },
    featured:     { en: "★ Featured",                es: "★ Destacado"              },
    privateBadge: { en: "🔒 Private Client Project",  es: "🔒 Proyecto Privado"      },
    viewProject:  { en: "View Project →",             es: "Ver Proyecto →"           },
    privateNDA:   { en: "🔒 Private — NDA",           es: "🔒 Privado — NDA"         },
    githubCTA:    { en: "View all projects on GitHub →", es: "Ver todos los proyectos en GitHub →" },
    // Anson General (featured project) text
    ansonTagline: {
      en: "Internal operations platform for a US general contractor",
      es: "Plataforma de operaciones interna para una contratista en EE.UU.",
    },
    ansonDesc: {
      en: "A custom internal platform built for Anson General Contracting LLC in El Paso, TX — giving the company full control over their team, access levels, and day-to-day operations from any device. Available on web and desktop, with the flexibility to expand to mobile whenever the business needs it.",
      es: "Plataforma interna personalizada para Anson General Contracting LLC en El Paso, TX — que da a la empresa control total sobre su equipo, permisos y operaciones del día a día desde cualquier dispositivo. Disponible en web y escritorio, con capacidad de expandirse a móvil cuando el negocio lo requiera.",
    },
    ansonHighlights: {
      en: [
        "Works on web, desktop, and ready for mobile — one app for the whole team",
        "Secure login with email verification and automatic session control",
        "4 access levels so each person only sees what they need",
        "Admin panel to manage users, permissions, and team activity in real time",
      ],
      es: [
        "Funciona en web, escritorio y lista para móvil — una sola app para todo el equipo",
        "Acceso seguro con verificación de correo y control automático de sesiones",
        "4 niveles de acceso para que cada persona vea solo lo que le corresponde",
        "Panel de administración para gestionar usuarios, permisos y actividad en tiempo real",
      ],
    },
    // The 3 grid cards — only text fields, tech/colors/URLs stay in component
    cardText: {
      en: [
        {
          name: "Subrogates — IMSS",
          tagline: "Operations platform for IMSS healthcare coordination",
          description: "A platform built for IMSS (Mexico's Social Security Institute) to coordinate and track medical service processes — replacing manual work with a centralized system that keeps teams aligned, sends automated alerts, and gives management a real-time view of operations.",
        },
        // ── TEMPORARILY HIDDEN — add back when ready ──────────────────────
        // {
        //   name: "Líderes del Cambio",
        //   tagline: "NGO digital platform — community leadership programs",
        //   description: "Full website and digital presence for a nonprofit running leadership programs across Mexico. Focused on accessibility, bilingual content, and donation conversion.",
        // },
        // ─────────────────────────────────────────────────────────────────
        {
          name: "ArenasCRM",
          tagline: "CRM built for a service business — not a generic tool",
          description: "A custom business management tool that centralizes everything in one place: client profiles, appointment scheduling, team tasks, and revenue tracking. Built for a service business that needed more than an off-the-shelf solution.",
        },
      ],
      es: [
        {
          name: "Subrogados — IMSS",
          tagline: "Plataforma de coordinación para servicios del IMSS",
          description: "Plataforma para el IMSS que centraliza y da seguimiento a los procesos de servicios médicos — reemplazando el trabajo manual con un sistema que mantiene a los equipos alineados, envía alertas automáticas y da a la dirección una vista en tiempo real de las operaciones.",
        },
        // ── TEMPORALMENTE OCULTO — agregar de vuelta cuando esté listo ────
        // {
        //   name: "Líderes del Cambio",
        //   tagline: "Plataforma digital para ONG — programas de liderazgo",
        //   description: "Sitio web completo y presencia digital para una ONG con programas de liderazgo en México. Enfocado en accesibilidad, contenido bilingüe y conversión de donaciones.",
        // },
        // ─────────────────────────────────────────────────────────────────
        {
          name: "ArenasCRM",
          tagline: "CRM hecho a medida — no una solución genérica",
          description: "Herramienta de gestión que centraliza todo en un solo lugar: clientes, citas, tareas del equipo e ingresos. Desarrollada para un negocio de servicios que necesitaba una solución que se adaptara a su forma de trabajar, no al revés.",
        },
      ],
    },
    // Tech toggle labels — used in project cards and skills section
    showTech:  { en: "View technologies used →", es: "Ver tecnologías usadas →" },
    hideTech:  { en: "Hide technologies ↑",       es: "Ocultar tecnologías ↑"   },
  },

  // ── AboutSection ───────────────────────────────────────────────────────────
  about: {
    eyebrow:        { en: "Why Demian?",       es: "¿Por qué Demian?"          },
    headline:       { en: "I solve problems,", es: "Resuelvo problemas,"       },
    headlineAccent: { en: "not just tasks.",   es: "no solo tareas."           },
    subtitle: {
      en: "Based on the US–Mexico border, I build software that solves real business problems — and I speak both English and Spanish.",
      es: "En la frontera EE.UU.–México, construyo software que resuelve problemas reales de negocio — y hablo tanto inglés como español.",
    },
    railHeadline: { en: "Built to grow your business", es: "Construido para hacer crecer tu negocio" },
    railBody: {
      en: "I combine strong technical knowledge with real business sense. You get software that actually works for your business — not just a technically impressive project.",
      es: "Combino conocimiento técnico sólido con sentido de negocio real. Obtienes software que realmente funciona para tu empresa — no solo un proyecto técnicamente impresionante.",
    },
    statLabels: {
      basedIn:      { en: "Based in",      es: "Ubicado en"     },
      languages:    { en: "Languages",     es: "Idiomas"        },
      availability: { en: "Availability",  es: "Disponibilidad" },
    },
    statValues: {
      location: { en: "El Paso, TX / Ciudad Juárez", es: "El Paso, TX / Ciudad Juárez" },
      langs:    { en: "English & Spanish",            es: "Inglés y Español"            },
      avail:    { en: "Open to new projects",         es: "Disponible para proyectos"   },
    },
    values: {
      en: [
        {
          emoji: "🎯",
          title: "I Put Your Business First",
          body: "I don't just build what you ask — I understand why you need it first. Every decision is guided by one question: will this help your business grow, move faster, or win more clients?",
        },
        {
          emoji: "⚡",
          title: "One Person, Full Responsibility",
          body: "I handle everything from start to finish — design, functionality, and everything in between. No hand-offs, no gaps. One person who owns the whole product and keeps you informed at every step.",
        },
        {
          emoji: "🚀",
          title: "I Deliver, Not Just Plan",
          body: "Ideas are worthless without execution. I move fast, communicate openly, and deliver working software — not endless back-and-forth. You'll have something real before your competitors finish planning.",
        },
        {
          emoji: "🔒",
          title: "Quality You Can Trust",
          body: "I build things that actually work — on every device, for real users. Not just a demo that looks good in a presentation but breaks the moment a real customer tries to use it.",
        },
      ],
      es: [
        {
          emoji: "🎯",
          title: "Tu Negocio Primero",
          body: "No solo construyo lo que pides — entiendo primero por qué lo necesitas. Cada decisión está guiada por una pregunta: ¿esto ayudará a que tu negocio crezca, opere más rápido o gane más clientes?",
        },
        {
          emoji: "⚡",
          title: "Una Persona, Responsabilidad Total",
          body: "Me encargo de todo, de principio a fin — diseño, funcionalidad y todo lo que hay en medio. Sin traspasos, sin brechas. Una sola persona responsable del producto completo que te mantiene informado en cada paso.",
        },
        {
          emoji: "🚀",
          title: "Entrego, No Solo Planeo",
          body: "Las ideas no valen nada sin ejecución. Me muevo rápido, comunico de forma abierta y entrego software funcional — no ida y vuelta interminable. Tendrás algo real antes de que la competencia termine de planear.",
        },
        {
          emoji: "🔒",
          title: "Calidad en la que Puedes Confiar",
          body: "Construyo cosas que realmente funcionan — en cada dispositivo, para usuarios reales. No solo una demo que se ve bien en una presentación pero falla en el momento en que un cliente real intenta usarla.",
        },
      ],
    },
  },

  // ── SkillsSection ──────────────────────────────────────────────────────────
  skills: {
    eyebrow:  { en: "Tools & Technologies",  es: "Herramientas y Tecnologías"      },
    headline: { en: "What I Build With",     es: "Con qué construyo"               },
    subtitle: {
      en: "Proven tools to build reliable software that grows with your business.",
      es: "Herramientas probadas para construir software confiable que crece con tu negocio.",
    },
    showStack: { en: "View full tech stack — for recruiters ↓", es: "Ver stack técnico completo — para reclutadores ↓" },
    hideStack: { en: "Hide tech stack ↑",                        es: "Ocultar stack técnico ↑"                         },
  },

  // ── ContactSection ─────────────────────────────────────────────────────────
  contact: {
    eyebrow:        { en: "Get In Touch",    es: "Contáctame"        },
    headline:       { en: "Let's Build",     es: "Construyamos"      },
    headlineAccent: { en: "Something Great", es: "Algo Grandioso"    },
    subtitle: {
      en: "Whether you have a project ready to start or just want to explore what's possible — reach out. I respond fast.",
      es: "Ya sea que tengas un proyecto listo para iniciar o solo quieras explorar posibilidades — escríbeme. Respondo rápido.",
    },
    salesSection:     { en: "Our Sales Team",                    es: "Nuestro Equipo de Ventas"                },
    salesSectionDesc: { en: "For quotes, questions, and general inquiries.", es: "Para cotizaciones, preguntas y consultas en general." },
    devToggleShow:    { en: "Reach the developer directly →",   es: "Contactar directamente al desarrollador →" },
    devToggleHide:    { en: "Hide developer contacts ↑",        es: "Ocultar contactos del desarrollador ↑"    },
    devSectionDesc:   { en: "For technical questions and direct collaboration.", es: "Para consultas técnicas y colaboración directa." },
    // Contact card labels & descriptions
    cards: {
      salesEmail: {
        label: { en: "Sales Email",       es: "Email de Ventas"         },
        value: { en: "camilacor0504@gmail.com", es: "camilacor0504@gmail.com" },
        desc:  { en: "Quotes and general inquiries", es: "Cotizaciones y consultas generales" },
      },
      salesPhone: {
        label: { en: "Sales Phone",       es: "Teléfono de Ventas"      },
        value: { en: "+52 33 3979 3129",  es: "+52 33 3979 3129"        },
        desc:  { en: "Calls & WhatsApp",  es: "Llamadas y WhatsApp"     },
      },
      whatsapp: {
        label: { en: "WhatsApp",       es: "WhatsApp"           },
        value: { en: "Message me now", es: "Escríbeme ahora"    },
        desc:  { en: "Fastest response — usually within the hour", es: "Respuesta más rápida — generalmente en una hora" },
      },
      phoneUS: {
        label: { en: "Phone",          es: "Teléfono"            },
        desc:  { en: "Calls, SMS & WhatsApp",                    es: "Llamadas, SMS y WhatsApp" },
      },
      phoneMX: {
        label: { en: "Phone — Mexico", es: "Teléfono — México"  },
        desc:  { en: "Cd. Juárez · International calls",         es: "Cd. Juárez · Llamadas internacionales"   },
      },
      email: {
        label: { en: "Email",          es: "Correo"             },
        desc:  { en: "For detailed briefs and proposals",        es: "Para propuestas y detalles del proyecto" },
      },
    },
    instagram: { en: "Instagram", es: "Instagram" },
    form: {
      title:         { en: "Send a Message",       es: "Enviar un Mensaje"           },
      subtitle:      { en: "Describe your project and I'll get back to you within 24 hours.", es: "Describe tu proyecto y te responderé en menos de 24 horas." },
      nameLbl:       { en: "Your Name",            es: "Tu Nombre"                   },
      namePh:        { en: "Jane Smith",           es: "Juan García"                 },
      emailLbl:      { en: "Email Address",        es: "Correo Electrónico"          },
      emailPh:       { en: "jane@company.com",     es: "juan@empresa.com"            },
      msgLbl:        { en: "Project Description",  es: "Descripción del Proyecto"    },
      msgPh: {
        en: "Describe what you want to build, your timeline, and any key requirements...",
        es: "Describe qué quieres construir, tu plazo y cualquier requisito clave...",
      },
      submit:        { en: "Send Message →",       es: "Enviar Mensaje →"            },
      sending:       { en: "Sending...",            es: "Enviando..."                 },
      successTitle:  { en: "Message sent!",         es: "¡Mensaje enviado!"           },
      successBody:   { en: "I'll respond within 24 hours. Looking forward to working together!", es: "Responderé en menos de 24 horas. ¡Espero trabajar contigo!" },
      sendAnother:   { en: "Send another message",  es: "Enviar otro mensaje"         },
      errorMsg:      { en: "Something went wrong. Please try emailing me directly at", es: "Algo salió mal. Por favor escríbeme directamente a" },
      // Validation errors
      nameRequired:    { en: "Name is required",                                   es: "El nombre es requerido"                      },
      emailRequired:   { en: "Email is required",                                  es: "El correo es requerido"                      },
      emailInvalid:    { en: "Please enter a valid email",                          es: "Por favor ingresa un correo válido"           },
      msgRequired:     { en: "Tell me about your project",                          es: "Cuéntame sobre tu proyecto"                  },
      msgTooShort:     { en: "Please add a bit more detail (at least 20 characters)", es: "Por favor agrega más detalle (al menos 20 caracteres)" },
    },
    github:   { en: "GitHub",   es: "GitHub"  },
  },

  // ── Footer ─────────────────────────────────────────────────────────────────
  footer: {
    tagline:  { en: "Software Development · El Paso, TX", es: "Desarrollo de Software · El Paso, TX" },
    projects: { en: "Projects",  es: "Proyectos" },
    about:    { en: "About",     es: "Sobre mí"  },
    contact:  { en: "Contact",   es: "Contacto"  },
    rights:   { en: "All rights reserved.", es: "Todos los derechos reservados." },
  },

  // ── FloatingCTA ────────────────────────────────────────────────────────────
  cta: {
    whatsapp: { en: "Let's create something", es: "Creemos algo juntos" },
    callUS:   { en: "Call US",                es: "Llamar (EE.UU.)"    },
    email:    { en: "Email",                  es: "Correo"             },
  },
};
