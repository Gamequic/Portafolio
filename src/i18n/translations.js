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
      en: ["I build software", "that",    "drives real"    ],
      es: ["Construyo software","que",    "impulsa el"     ],
    },
    headlineAccent: { en: "business growth.",             es: "crecimiento real."   },
    specializing:   { en: "Specializing in",              es: "Especializado en"    },
    valueProps: {
      en: [
        "Full-Stack Web Applications",
        "Scalable Backend Systems",
        "Modern CRM & ERP Platforms",
        "High-Converting Landing Pages",
      ],
      es: [
        "Aplicaciones Web Full-Stack",
        "Sistemas Backend Escalables",
        "Plataformas CRM y ERP Modernas",
        "Landing Pages de Alta Conversión",
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
    headlineAccent: { en: "Ship",           es: "se Entregan"          },
    subtitle: {
      en: "Real solutions for real businesses — from healthcare systems to CRM platforms. Some documentation is still in progress and will be available soon on GitHub.",
      es: "Soluciones reales para negocios reales — desde sistemas de salud hasta plataformas CRM. Alguna documentación aún está en proceso y estará disponible en GitHub.",
    },
    featured:     { en: "★ Featured",                es: "★ Destacado"              },
    privateBadge: { en: "🔒 Private Client Project",  es: "🔒 Proyecto Privado"      },
    viewProject:  { en: "View Project →",             es: "Ver Proyecto →"           },
    privateNDA:   { en: "🔒 Private — NDA",           es: "🔒 Privado — NDA"         },
    githubCTA:    { en: "View all projects on GitHub →", es: "Ver todos los proyectos en GitHub →" },
    // Anson General (featured project) text
    ansonTagline: {
      en: "Cross-platform enterprise app — built with Flutter & FastAPI, learned from scratch",
      es: "App empresarial multiplataforma — construida con Flutter y FastAPI, aprendidos desde cero",
    },
    ansonDesc: {
      en: "Stepped outside my usual stack to build a cross-platform enterprise management app for Anson General, a US-based general contractor. Learning Flutter/Dart and Python/FastAPI from scratch, I delivered a secure, multi-platform system with role-based access, JWT + Redis authentication, email verification, and a full admin panel — running on iOS, Android, Web, and Desktop from a single codebase.",
      es: "Salí de mi stack habitual para construir una app empresarial multiplataforma para Anson General. Aprendiendo Flutter/Dart y Python/FastAPI desde cero, entregué un sistema seguro con control de acceso por roles, autenticación JWT + Redis, verificación de correo y panel de administración completo — funcionando en iOS, Android, Web y Escritorio desde un solo código.",
    },
    ansonHighlights: {
      en: [
        "Cross-platform app (iOS, Android, Web, Desktop) — single Flutter codebase",
        "JWT + Redis hybrid auth with instant session revocation across all devices",
        "4-tier RBAC: Root / Admin / Contractor / Salesperson",
        "Full admin panel: user management, role assignment & live session control",
      ],
      es: [
        "App multiplataforma (iOS, Android, Web, Escritorio) — un solo código Flutter",
        "Auth JWT + Redis con revocación instantánea de sesiones en todos los dispositivos",
        "Sistema RBAC de 4 niveles: Root / Admin / Contratista / Vendedor",
        "Panel de admin completo: gestión de usuarios, roles y sesiones activas en tiempo real",
      ],
    },
    // The 3 grid cards — only text fields, tech/colors/URLs stay in component
    cardText: {
      en: [
        {
          name: "Subrogates — IMSS",
          tagline: "Healthcare subrogation management system",
          description: "Internal platform for IMSS (Mexico's Social Security Institute) to manage medical service subrogation workflows, including secure authentication, notifications, and performance dashboards.",
        },
        {
          name: "Líderes del Cambio",
          tagline: "NGO digital platform — community leadership programs",
          description: "Full website and digital presence for a nonprofit running leadership programs across Mexico. Focused on accessibility, bilingual content, and donation conversion.",
        },
        {
          name: "ArenasCRM",
          tagline: "Custom CRM system for service businesses",
          description: "A tailored CRM for a service-based business, featuring client management, appointment scheduling, task tracking, and revenue reporting.",
        },
      ],
      es: [
        {
          name: "Subrogados — IMSS",
          tagline: "Sistema de gestión de subrogación médica",
          description: "Plataforma interna para el IMSS para gestionar flujos de trabajo de subrogación de servicios médicos, incluyendo autenticación segura, notificaciones y dashboards de rendimiento.",
        },
        {
          name: "Líderes del Cambio",
          tagline: "Plataforma digital para ONG — programas de liderazgo",
          description: "Sitio web completo y presencia digital para una ONG con programas de liderazgo en México. Enfocado en accesibilidad, contenido bilingüe y conversión de donaciones.",
        },
        {
          name: "ArenasCRM",
          tagline: "Sistema CRM personalizado para negocios de servicios",
          description: "Solución CRM a medida con gestión de clientes, programación de citas, seguimiento de tareas e informes de ingresos.",
        },
      ],
    },
  },

  // ── AboutSection ───────────────────────────────────────────────────────────
  about: {
    eyebrow:        { en: "Why Demian?",       es: "¿Por qué Demian?"          },
    headline:       { en: "I solve problems,", es: "Resuelvo problemas,"       },
    headlineAccent: { en: "not just tasks.",   es: "no solo tareas."           },
    subtitle: {
      en: "As a computer science-trained full-stack developer based on the US–Mexico border, I bridge the gap between technical execution and business outcomes.",
      es: "Como desarrollador full-stack con formación en ciencias de la computación en la frontera EE.UU.–México, conecto la ejecución técnica con los resultados de negocio.",
    },
    railHeadline: { en: "Built to grow your business", es: "Construido para hacer crecer tu negocio" },
    railBody: {
      en: "Computer science background + client obsession = software that actually moves the needle. I bring both technical depth and real-world business intuition to every project.",
      es: "Formación en ciencias de la computación + obsesión por el cliente = software que realmente mueve la aguja. Aporto profundidad técnica e intuición de negocio real a cada proyecto.",
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
          title: "Business-First Thinking",
          body: "I don't just write code — I understand the business problem first. Every technical decision is driven by the question: will this help your business grow, operate faster, or convert more clients?",
        },
        {
          emoji: "⚡",
          title: "Full-Stack, End-to-End",
          body: "From database architecture to pixel-perfect UI, I handle the entire stack. No hand-offs, no gaps — you get one developer who owns the full product and communicates clearly at every step.",
        },
        {
          emoji: "🚀",
          title: "Shipping is a Feature",
          body: "Ideas are worthless without execution. I move fast, communicate proactively, and ship working software — not endless WIP tickets. Your MVP will be in production before competitors finish planning.",
        },
        {
          emoji: "🔒",
          title: "Quality You Can Trust",
          body: "Clean code, proper authentication, responsive design, and real error handling — not a \"works on my machine\" prototype. I build things that work in production, on every device, for real users.",
        },
      ],
      es: [
        {
          emoji: "🎯",
          title: "Pensamiento Orientado al Negocio",
          body: "No solo escribo código — entiendo primero el problema de negocio. Cada decisión técnica está guiada por la pregunta: ¿esto ayudará a que tu negocio crezca, opere más rápido o convierta más clientes?",
        },
        {
          emoji: "⚡",
          title: "Full-Stack, de Principio a Fin",
          body: "Desde la arquitectura de base de datos hasta la UI perfecta, manejo todo el stack. Sin traspasos, sin brechas — obtienes un desarrollador que es dueño del producto completo y comunica claramente en cada paso.",
        },
        {
          emoji: "🚀",
          title: "Lanzar es una Característica",
          body: "Las ideas no valen nada sin ejecución. Me muevo rápido, comunico proactivamente y entrego software funcional — no tickets interminables. Tu MVP estará en producción antes de que la competencia termine de planear.",
        },
        {
          emoji: "🔒",
          title: "Calidad en la que Puedes Confiar",
          body: "Código limpio, autenticación correcta, diseño responsivo y manejo real de errores — no un prototipo de \"funciona en mi máquina\". Construyo cosas que funcionan en producción, en cada dispositivo, para usuarios reales.",
        },
      ],
    },
  },

  // ── SkillsSection ──────────────────────────────────────────────────────────
  skills: {
    eyebrow:  { en: "Tech Stack",          es: "Stack Tecnológico"              },
    headline: { en: "Tools I Build With",  es: "Herramientas con las que trabajo" },
    subtitle: {
      en: "A modern, battle-tested stack for building fast, scalable, and maintainable products.",
      es: "Un stack moderno y probado en batalla para construir productos rápidos, escalables y mantenibles.",
    },
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
    reachDirectly: { en: "Reach me directly", es: "Contáctame directamente" },
    // Contact card labels & descriptions (values like phone numbers stay in component)
    cards: {
      whatsapp: {
        label: { en: "WhatsApp",       es: "WhatsApp"           },
        value: { en: "Message me now", es: "Escríbeme ahora"    },
        desc:  { en: "Fastest response — usually within the hour", es: "Respuesta más rápida — generalmente en una hora" },
      },
      phoneUS: {
        label: { en: "Phone — US",     es: "Teléfono — EE.UU."  },
        desc:  { en: "El Paso, TX · Calls & SMS welcome",        es: "El Paso, TX · Llamadas y SMS bienvenidos" },
      },
      phoneMX: {
        label: { en: "Phone — Mexico", es: "Teléfono — México"  },
        desc:  { en: "Cd. Juárez · Calls only",                  es: "Cd. Juárez · Solo llamadas" },
      },
      email: {
        label: { en: "Email",          es: "Correo"             },
        desc:  { en: "For detailed briefs and proposals",        es: "Para propuestas y detalles del proyecto" },
      },
    },
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
    tagline:  { en: "Full-Stack Developer · El Paso, TX", es: "Desarrollador Full-Stack · El Paso, TX" },
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
