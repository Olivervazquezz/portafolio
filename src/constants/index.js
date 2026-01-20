export const translations = {
  es: {
    navbar: {
      projects: "Proyectos",
      contact: "Contacto",
      resume: "Descargar CV",
      languageName: "English",
    },
    hero: {
      badge: "Software Engineer in Progress", // Más profesional que "Entusiasta"
      greeting: "Hola, soy",
      // CAMBIO CLAVE AQUÍ: Enfoque en construcción y calidad
      description: "Estudiante de Ingeniería enfocado en el desarrollo de software robusto. Creo soluciones full-stack escalables, integrando bases de datos eficientes y mejores prácticas de seguridad.",
      btnProject: "Ver Proyectos",
      btnContact: "Contactarme",
    },
    skills: {
      title: "Arsenal Técnico",
      subtitle: "Stack tecnológico enfocado en desarrollo ágil y código seguro.",
      categories: {
        backend: "Backend y Bases de Datos",
        frontend: "Frontend y Diseño UI", // Quitamos "Móvil" si no es foco, o lo dejamos
        security: "Herramientas y Calidad", // "Seguridad" pasa a ser una herramienta más
      }
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Una selección de desarrollos donde he aplicado arquitectura de software, optimización de datos y código limpio.",
      cta: "Ver todo en GitHub",
      btnCode: "Código",
      btnDemo: "Demo",
      btnLinkedin: "Ver Detalles",
      items: [
        {
          title: "TurnoMed",
          description: "Sistema de gestión clínica integral. Desarrollado con Python y SQL para optimizar flujos de atención, implementando protección de datos sensibles.",
        },
        {
          title: "VitaNova",
          description: "Plataforma web de monitoreo ambiental. Arquitectura escalable que permite la visualización y análisis de datos en tiempo real.",
        },
        {
          title: "PawHome",
          description: "Solución inteligente para gestión de eventos. Integra lógica de backend compleja con bases de datos para el registro de actividades.",
        }
      ]
    },
    experience: {
      title: "Liderazgo y Comunidad",
      subtitle: "Impacto más allá del código: impulsando la comunidad tecnológica estudiantil.",
      role: "Director de Marketing",
      organization: "Sociedad de Alumnos de ITC (SEITC)",
      period: "Presente", 
      description: "Lidero la estrategia de comunicación y difusión de eventos tecnológicos, logrando aumentar la participación estudiantil en hackathons y talleres. Coordino un equipo creativo para fortalecer la marca de la comunidad de Ingeniería en el campus.",
    },
    contact: {
      title: "Hablemos",
      // CAMBIO CLAVE: Ya no pide "seguridad", pide "ingeniero"
      subtitle: "¿Tienes un proyecto en mente o buscas un ingeniero de software para tu equipo? ¡Estoy listo para aportar!",
      email: "Correo Electrónico",
      phone: "Teléfono / WhatsApp",
      location: "Ubicación",
      locationText: "Monterrey, Nuevo León, México",
      cta: "Enviar Mensaje"
    },
    footer: "Construido con React y Tailwind."
  },
  en: {
    navbar: {
      projects: "Projects",
      contact: "Contact",
      resume: "Download Resume",
      languageName: "Español",
    },
    hero: {
      badge: "Software Engineer in Progress",
      greeting: "Hi, I'm",
      // CAMBIO CLAVE EN INGLÉS
      description: "Engineering student focused on building robust software. I create scalable full-stack solutions, integrating efficient databases and security best practices.",
      btnProject: "View Projects",
      btnContact: "Contact Me",
    },
    skills: {
      title: "Technical Arsenal",
      subtitle: "Tech stack focused on agile development and secure code.",
      categories: {
        backend: "Backend & Database",
        frontend: "Frontend & UI Design",
        security: "Tools & Quality",
      }
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A selection of developments where I applied software architecture, data optimization, and clean code.",
      cta: "View all on GitHub",
      btnCode: "Code",
      btnDemo: "Demo",
      btnLinkedin: "View Details",
      items: [
        {
          title: "TurnoMed",
          description: "Comprehensive clinical management system. Built with Python and SQL to optimize workflows, implementing sensitive data protection.",
        },
        {
          title: "VitaNova",
          description: "Web platform for environmental monitoring. Scalable architecture allowing real-time data visualization and analysis.",
        },
        {
          title: "PawHome",
          description: "Smart event management solution. Integrates complex backend logic with databases for activity logging.",
        }
      ]
    },
    experience: {
      title: "Leadership & Community",
      subtitle: "Impact beyond code: driving the student tech community forward.",
      role: "Marketing Director",
      organization: "CS Student Society (SEITC)",
      period: "Present",
      description: "Leading communication strategies and event promotion, successfully increasing student participation in hackathons and workshops. Coordinating a creative team to strengthen the Engineering community brand on campus.",
    },
    contact: {
      title: "Let's Talk",
      subtitle: "Have a project in mind or looking for a software engineer for your team? I'm ready to contribute!",
      email: "Email Address",
      phone: "Phone / WhatsApp",
      location: "Location",
      locationText: "Monterrey, Nuevo Leon, Mexico",
      cta: "Send Message"
    },
    footer: "Built with React & Tailwind."
  }
};