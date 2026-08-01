const portfolioData = {
  en: {
    nav: {
      brand: "AVR",
      links: [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Education", href: "#education" },
        { label: "Download CV", href: "#cv-download" },
        { label: "Contact", href: "#contact" }
      ]
    },
    hero: {
      terminalLines: [
        { prompt: "$ whoami", response: "andres_vargas_robles" },
        { prompt: "$ cat role.txt", response: "Systems Engineer | Cybersecurity Specialist" },
        { prompt: "$ uptime --experience", response: "9+ years securing critical infrastructure" },
        { prompt: "$ ls skills/", response: "cybersecurity/  blockchain/  ai/  web3/  networking/" }
      ],
      subtitle: "Systems Engineer · Cybersecurity Specialist · Blockchain Analyst · Generative AI Engineer",
      cta: "Explore My Work",
      scroll: "Scroll to discover"
    },
    about: {
      title: "// About Me",
      subtitle: "root@andres:~$ cat about.txt",
      bio: "Systems Engineer with over nine years of experience at INPEC protecting critical government infrastructure. Focused on information security, systems and network administration. Continuous training in cybersecurity, blockchain and software development lets me deliver modern technical solutions. Actively seeking remote opportunities where I can contribute and keep growing in tech.",
      stats: [
        { value: "9+", label: "Years Experience" },
        { value: "6+", label: "Certifications" },
        { value: "800+", label: "Hours Training" },
        { value: "100%", label: "Remote Ready" }
      ],
      details: [
        { icon: "MapPin", label: "Location", value: "Tunja, Boyacá, Colombia" },
        { icon: "Briefcase", label: "Role", value: "Systems Engineer @ INPEC" },
        { icon: "Shield", label: "Focus", value: "Cybersecurity & Blockchain" },
        { icon: "Globe", label: "Work Mode", value: "Remote Worldwide" }
      ]
    },
    skills: {
      title: "// Skills & Arsenal",
      subtitle: "root@andres:~$ cat skills.json",
      categories: [
        {
          name: "Cybersecurity",
          icon: "Shield",
          items: [
            { name: "Threat Analysis & Incident Response", level: 90 },
            { name: "ISO 27001 / PCI DSS", level: 85 },
            { name: "Network Security", level: 88 },
            { name: "Digital Forensics", level: 80 },
            { name: "Vulnerability Management", level: 85 },
            { name: "Risk Management", level: 82 }
          ]
        },
        {
          name: "Development",
          icon: "Code",
          items: [
            { name: "Python", level: 85 },
            { name: "Java", level: 80 },
            { name: "Web Development", level: 78 },
            { name: "Software Architecture", level: 75 }
          ]
        },
        {
          name: "Blockchain & Web3",
          icon: "Link",
          items: [
            { name: "Smart Contracts", level: 80 },
            { name: "dApps Development", level: 75 },
            { name: "Web3 Architecture", level: 78 },
            { name: "Distributed Systems", level: 76 }
          ]
        },
        {
          name: "Networking",
          icon: "Server",
          items: [
            { name: "CCNA Routing & Switching", level: 85 },
            { name: "Network Administration", level: 88 },
            { name: "System Administration", level: 90 },
            { name: "Infrastructure Management", level: 85 }
          ]
        }
      ]
    },
    experience: {
      title: "// Experience",
      subtitle: "root@andres:~$ cat experience.log",
      items: [
        {
          role: "Systems Engineer",
          company: "INPEC (National Penitentiary and Prison Institute)",
          period: "2015 – Present",
          duration: "9+ years",
          description: "Responsible for information security and IT infrastructure of critical government facilities. Design, implement and maintain secure networks, harden systems and respond to security incidents across multiple sites.",
          highlights: [
            "Information Security Management (ISO 27001 aligned)",
            "Network & Systems Administration for critical infrastructure",
            "Incident response and vulnerability management",
            "Security protocol design and continuous hardening",
            "Support and training for technical teams"
          ]
        }
      ]
    },
    projects: {
      title: "// Projects",
      subtitle: "root@andres:~$ ls -la projects/",
      items: [
        {
          name: "EcoStay",
          description: "Glamping platform with blockchain airdrop. Frontend + backend + smart contracts for bookings and token rewards.",
          tech: ["TypeScript", "React", "Blockchain", "Smart Contracts"],
          link: "https://github.com/andres2017/airdrop_front",
          repo: "airdrop_front / airdrop_back"
        },
        {
          name: "AgroDirecto & AgroRiego",
          description: "Agricultural solutions: direct marketplace and intelligent irrigation system focused on Colombian producers.",
          tech: ["Python", "IoT", "Web"],
          link: "https://github.com/andres2017/AgroDirecto",
          repo: "AgroDirecto / AgroRiego-Inteligente"
        },
        {
          name: "PetHealthRegistry",
          description: "Smart contract and dApp to track pet health records and help recover lost animals on-chain.",
          tech: ["JavaScript", "Smart Contracts", "Web3"],
          link: "https://github.com/andres2017/PetHealthRegistry",
          repo: "PetHealthRegistry"
        },
        {
          name: "Blockchain MetaMask Demo",
          description: "Simple React + Vite app that connects to MetaMask and shows account balance clearly.",
          tech: ["React", "Vite", "MetaMask", "Web3"],
          link: "https://github.com/andres2017/Blockchain_test_MetaMask",
          repo: "Blockchain_test_MetaMask"
        }
      ]
    },
    education: {
      title: "// Education & Certifications",
      subtitle: "root@andres:~$ ls -la education/",
      tabs: { education: "Education", certifications: "Certifications" },
      items: [
        {
          title: "Advanced Blockchain Bootcamp",
          institution: "CYMETRIA TALENTO TECH",
          period: "Jun 2024 – Nov 2024",
          skills: ["Smart Contracts", "dApps", "Web3", "Distributed Architecture"]
        },
        {
          title: "Cybersecurity Technician",
          institution: "INCIBE – National Cybersecurity Institute",
          period: "Apr 2023 – Jul 2023",
          skills: ["Systems Administration", "Digital Forensics", "Industrial Cybersecurity", "Vulnerability Management"]
        },
        {
          title: "Web/Multimedia Management & Webmaster (800h)",
          institution: "Universidad Pontificia Bolivariana (MinTIC – MisiónTIC 2022)",
          period: "May 2021 – Dec 2022",
          skills: ["Python (200h)", "Java (200h)", "Full-Stack Development", "Web Applications"]
        },
        {
          title: "Information Security Management Systems Diploma",
          institution: "Universidad Cooperativa de Colombia (INPEC Alliance)",
          period: "Jul 2021 – Dec 2021",
          skills: ["ISO 27001 Implementation", "PCI DSS Compliance", "Risk Management"]
        },
        {
          title: "Systems Engineering",
          institution: "Universidad Nacional Abierta y a Distancia – UNAD",
          period: "Feb 2015 – Oct 2019",
          skills: ["Information Systems Design", "IT Infrastructure", "ISO 27001 & PCI DSS"]
        }
      ],
      certifications: [
        { title: "Fortinet NSE 1, 2 & 3", issuer: "Fortinet", date: "Aug 2023", category: "Cybersecurity" },
        { title: "Cybersecurity Technician", issuer: "INCIBE", date: "Jul 2023", category: "Cybersecurity" },
        { title: "CCNA Routing & Switching", issuer: "Cisco", date: "2019", category: "Networking" },
        { title: "ISO 27001 & PCI DSS Diploma", issuer: "Univ. Cooperativa de Colombia", date: "Dec 2021", category: "Security Mgmt" },
        { title: "Advanced Blockchain Certification", issuer: "CYMETRIA TALENTO TECH", date: "Nov 2024", category: "Blockchain" },
        { title: "Programming & Webmaster (800h)", issuer: "UPB / MinTIC", date: "Dec 2022", category: "Development" }
      ]
    },
    cvDownload: {
      title: "// Download CV",
      subtitle: "root@andres:~$ wget resume.pdf",
      description: "Download my updated CV in PDF format. Ready for recruiters and opportunities.",
      button: "Download CV (PDF)",
      note: "Updated 2026 · English & Spanish available on request"
    },
    contact: {
      title: "// Contact",
      subtitle: "root@andres:~$ ./send_message.sh",
      description: "Ready to discuss cybersecurity, blockchain or remote opportunities? Send a message or contact me directly on WhatsApp / LinkedIn.",
      form: {
        name: "Name", email: "Email", subject: "Subject", message: "Message",
        send: "Send Message", sending: "Sending...",
        success: "Message sent successfully! I will reply soon.",
        namePlaceholder: "John Doe", emailPlaceholder: "john@example.com",
        subjectPlaceholder: "Cybersecurity opportunity", messagePlaceholder: "Your message here..."
      },
      social: {
        title: "Connect",
        linkedin: "https://www.linkedin.com/in/andres-vargas-robles-68185b181",
        github: "https://github.com/andres2017",
        email: "mailto:andresvargasrobles@gmail.com"
      }
    },
    footer: {
      copyright: "© 2026 Andrés Vargas Robles. All rights reserved.",
      tagline: "Securing the digital frontier, one system at a time."
    },
    whatsapp: {
      message: "Hello Andrés, we reviewed your profile and would like to contact you regarding a work opportunity with our team."
    }
  },
  es: {
    nav: {
      brand: "AVR",
      links: [
        { label: "Acerca", href: "#about" },
        { label: "Habilidades", href: "#skills" },
        { label: "Experiencia", href: "#experience" },
        { label: "Proyectos", href: "#projects" },
        { label: "Educación", href: "#education" },
        { label: "Descargar CV", href: "#cv-download" },
        { label: "Contacto", href: "#contact" }
      ]
    },
    hero: {
      terminalLines: [
        { prompt: "$ whoami", response: "andres_vargas_robles" },
        { prompt: "$ cat rol.txt", response: "Ingeniero de Sistemas | Especialista en Ciberseguridad" },
        { prompt: "$ uptime --experiencia", response: "9+ años asegurando infraestructura crítica" },
        { prompt: "$ ls habilidades/", response: "ciberseguridad/  blockchain/  ia/  web3/  redes/" }
      ],
      subtitle: "Ingeniero de Sistemas · Especialista en Ciberseguridad · Analista Blockchain · Ingeniero de IA Generativa",
      cta: "Explorar Mi Trabajo",
      scroll: "Desplázate para descubrir"
    },
    about: {
      title: "// Sobre Mí",
      subtitle: "root@andres:~$ cat acerca.txt",
      bio: "Ingeniero de Sistemas con más de nueve años de experiencia en el INPEC protegiendo infraestructura gubernamental crítica. Enfocado en seguridad de la información, administración de sistemas y redes. Formación continua en ciberseguridad, blockchain y desarrollo de software. Busco oportunidades remotas donde pueda aportar y seguir creciendo en tecnología.",
      stats: [
        { value: "9+", label: "Años Experiencia" },
        { value: "6+", label: "Certificaciones" },
        { value: "800+", label: "Horas Formación" },
        { value: "100%", label: "Listo Remoto" }
      ],
      details: [
        { icon: "MapPin", label: "Ubicación", value: "Tunja, Boyacá, Colombia" },
        { icon: "Briefcase", label: "Cargo", value: "Ingeniero de Sistemas @ INPEC" },
        { icon: "Shield", label: "Enfoque", value: "Ciberseguridad & Blockchain" },
        { icon: "Globe", label: "Modalidad", value: "Remoto Mundial" }
      ]
    },
    skills: {
      title: "// Habilidades & Arsenal",
      subtitle: "root@andres:~$ cat habilidades.json",
      categories: [
        {
          name: "Ciberseguridad",
          icon: "Shield",
          items: [
            { name: "Análisis de Amenazas y Respuesta a Incidentes", level: 90 },
            { name: "ISO 27001 / PCI DSS", level: 85 },
            { name: "Seguridad de Redes", level: 88 },
            { name: "Análisis Forense Digital", level: 80 },
            { name: "Gestión de Vulnerabilidades", level: 85 },
            { name: "Gestión de Riesgos", level: 82 }
          ]
        },
        {
          name: "Desarrollo",
          icon: "Code",
          items: [
            { name: "Python", level: 85 },
            { name: "Java", level: 80 },
            { name: "Desarrollo Web", level: 78 },
            { name: "Arquitectura de Software", level: 75 }
          ]
        },
        {
          name: "Blockchain & Web3",
          icon: "Link",
          items: [
            { name: "Contratos Inteligentes", level: 80 },
            { name: "Desarrollo de dApps", level: 75 },
            { name: "Arquitectura Web3", level: 78 },
            { name: "Sistemas Distribuidos", level: 76 }
          ]
        },
        {
          name: "Redes",
          icon: "Server",
          items: [
            { name: "CCNA Routing & Switching", level: 85 },
            { name: "Administración de Redes", level: 88 },
            { name: "Administración de Sistemas", level: 90 },
            { name: "Gestión de Infraestructura", level: 85 }
          ]
        }
      ]
    },
    experience: {
      title: "// Experiencia",
      subtitle: "root@andres:~$ cat experiencia.log",
      items: [
        {
          role: "Ingeniero de Sistemas",
          company: "INPEC (Instituto Nacional Penitenciario y Carcelario)",
          period: "2015 – Presente",
          duration: "9+ años",
          description: "Responsable de la seguridad de la información e infraestructura TI de instalaciones gubernamentales críticas. Diseño, implementación y mantenimiento de redes seguras, hardening de sistemas y respuesta a incidentes de seguridad en múltiples sedes.",
          highlights: [
            "Gestión de Seguridad de la Información (alineado a ISO 27001)",
            "Administración de redes y sistemas de infraestructura crítica",
            "Respuesta a incidentes y gestión de vulnerabilidades",
            "Diseño de protocolos de seguridad y hardening continuo",
            "Soporte y capacitación a equipos técnicos"
          ]
        }
      ]
    },
    projects: {
      title: "// Proyectos",
      subtitle: "root@andres:~$ ls -la proyectos/",
      items: [
        {
          name: "EcoStay",
          description: "Plataforma de glamping con airdrop blockchain. Frontend + backend + contratos inteligentes para reservas y recompensas en tokens.",
          tech: ["TypeScript", "React", "Blockchain", "Smart Contracts"],
          link: "https://github.com/andres2017/airdrop_front",
          repo: "airdrop_front / airdrop_back"
        },
        {
          name: "AgroDirecto & AgroRiego",
          description: "Soluciones agro: marketplace directo y riego inteligente orientado a productores colombianos.",
          tech: ["Python", "IoT", "Web"],
          link: "https://github.com/andres2017/AgroDirecto",
          repo: "AgroDirecto / AgroRiego-Inteligente"
        },
        {
          name: "PetHealthRegistry",
          description: "Contrato inteligente y dApp para llevar registro de salud de mascotas y ayudar a recuperar animales perdidos on-chain.",
          tech: ["JavaScript", "Smart Contracts", "Web3"],
          link: "https://github.com/andres2017/PetHealthRegistry",
          repo: "PetHealthRegistry"
        },
        {
          name: "Blockchain MetaMask Demo",
          description: "App sencilla React + Vite que se conecta a MetaMask y muestra el balance de la cuenta de forma clara.",
          tech: ["React", "Vite", "MetaMask", "Web3"],
          link: "https://github.com/andres2017/Blockchain_test_MetaMask",
          repo: "Blockchain_test_MetaMask"
        }
      ]
    },
    education: {
      title: "// Educación & Certificaciones",
      subtitle: "root@andres:~$ ls -la educacion/",
      tabs: { education: "Educación", certifications: "Certificaciones" },
      items: [
        {
          title: "Bootcamp de Blockchain Avanzado",
          institution: "CYMETRIA TALENTO TECH",
          period: "Jun 2024 – Nov 2024",
          skills: ["Contratos Inteligentes", "dApps", "Web3", "Arquitectura Distribuida"]
        },
        {
          title: "Técnico en Ciberseguridad",
          institution: "INCIBE – Instituto Nacional de Ciberseguridad",
          period: "Abr 2023 – Jul 2023",
          skills: ["Administración de Sistemas", "Forense Digital", "Ciberseguridad Industrial", "Gestión de Vulnerabilidades"]
        },
        {
          title: "Gestión Web/Multimedia y Webmaster (800h)",
          institution: "Universidad Pontificia Bolivariana (MinTIC – MisiónTIC 2022)",
          period: "May 2021 – Dic 2022",
          skills: ["Python (200h)", "Java (200h)", "Desarrollo Full-Stack", "Aplicaciones Web"]
        },
        {
          title: "Diplomado en Gestión de Seguridad de la Información",
          institution: "Universidad Cooperativa de Colombia (Alianza INPEC)",
          period: "Jul 2021 – Dic 2021",
          skills: ["Implementación ISO 27001", "Cumplimiento PCI DSS", "Gestión de Riesgos"]
        },
        {
          title: "Ingeniería de Sistemas",
          institution: "Universidad Nacional Abierta y a Distancia – UNAD",
          period: "Feb 2015 – Oct 2019",
          skills: ["Diseño de Sistemas de Información", "Infraestructura TI", "ISO 27001 & PCI DSS"]
        }
      ],
      certifications: [
        { title: "Fortinet NSE 1, 2 & 3", issuer: "Fortinet", date: "Ago 2023", category: "Ciberseguridad" },
        { title: "Técnico en Ciberseguridad", issuer: "INCIBE", date: "Jul 2023", category: "Ciberseguridad" },
        { title: "CCNA Routing & Switching", issuer: "Cisco", date: "2019", category: "Redes" },
        { title: "Diplomado ISO 27001 & PCI DSS", issuer: "Univ. Cooperativa de Colombia", date: "Dic 2021", category: "Gestión Seguridad" },
        { title: "Certificación Blockchain Avanzado", issuer: "CYMETRIA TALENTO TECH", date: "Nov 2024", category: "Blockchain" },
        { title: "Programación y Webmaster (800h)", issuer: "UPB / MinTIC", date: "Dic 2022", category: "Desarrollo" }
      ]
    },
    cvDownload: {
      title: "// Descargar CV",
      subtitle: "root@andres:~$ wget curriculum.pdf",
      description: "Descarga mi CV actualizado en formato PDF. Listo para reclutadores y oportunidades.",
      button: "Descargar CV (PDF)",
      note: "Actualizado 2026 · Disponible en español e inglés bajo solicitud"
    },
    contact: {
      title: "// Contacto",
      subtitle: "root@andres:~$ ./enviar_mensaje.sh",
      description: "¿Listo para hablar de ciberseguridad, blockchain u oportunidades remotas? Envía un mensaje o contáctame directo por WhatsApp / LinkedIn.",
      form: {
        name: "Nombre", email: "Correo", subject: "Asunto", message: "Mensaje",
        send: "Enviar Mensaje", sending: "Enviando...",
        success: "¡Mensaje enviado! Te responderé pronto.",
        namePlaceholder: "Juan Pérez", emailPlaceholder: "juan@ejemplo.com",
        subjectPlaceholder: "Oportunidad de ciberseguridad", messagePlaceholder: "Tu mensaje aquí..."
      },
      social: {
        title: "Conectar",
        linkedin: "https://www.linkedin.com/in/andres-vargas-robles-68185b181",
        github: "https://github.com/andres2017",
        email: "mailto:andresvargasrobles@gmail.com"
      }
    },
    footer: {
      copyright: "© 2026 Andrés Vargas Robles. Todos los derechos reservados.",
      tagline: "Asegurando la frontera digital, un sistema a la vez."
    },
    whatsapp: {
      message: "Hola Andrés, revisamos tu perfil y nos gustaría contactarte respecto a una oportunidad laboral con nuestro equipo."
    }
  }
};

export default portfolioData;
