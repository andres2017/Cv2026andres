const portfolioData = {
  en: {
    nav: {
      brand: "AVR",
      links: [
        { label: "Services", href: "#services" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "Education", href: "#education" },
        { label: "Download CV", href: "#cv-download" },
        { label: "Contact", href: "#contact" }
      ]
    },
    hero: {
      terminalLines: [
        { prompt: "$ whoami", response: "andres_vargas_robles" },
        { prompt: "$ cat agency.txt", response: "AI Agency · Claude · Skills · Agents · Cybersecurity" },
        { prompt: "$ uptime --experience", response: "9+ years securing critical systems + building AI solutions" },
        { prompt: "$ ./offer --services", response: "Claude training · Custom skills · Company agents · Secure AI" }
      ],
      subtitle: "AI Agency · Claude Specialist · Skills & Agents for Business · Cybersecurity Engineer",
      cta: "View Services",
      scroll: "Scroll to discover"
    },
    services: {
      title: "// Services",
      subtitle: "root@andres:~$ ./list_services.sh",
      intro: "I help companies and professionals adopt AI in a practical, secure and productive way. From Claude training to custom agents that work inside your business.",
      items: [
        {
          icon: "Bot",
          title: "Claude Training for Teams",
          description: "Hands-on training so your team uses Claude productively: prompting, workflows, documents, analysis and daily productivity. Online or in-person.",
          highlights: ["Beginner to advanced", "Real use cases", "Company materials", "Follow-up support"]
        },
        {
          icon: "Sparkles",
          title: "Custom Skills Creation",
          description: "I design and build Claude Skills tailored to your processes: sales, support, legal, HR, operations or technical teams. Ready to use.",
          highlights: ["Process analysis", "Skill design", "Documentation", "Handover & training"]
        },
        {
          icon: "Cpu",
          title: "AI Agents for Your Company",
          description: "Custom agents that automate repetitive tasks, answer internal questions, generate reports or support customer operations — with clear control and security.",
          highlights: ["Discovery workshop", "Agent design", "Integration", "Secure deployment"]
        },
        {
          icon: "Shield",
          title: "Secure AI & Cybersecurity",
          description: "Advice on how to use AI safely inside your organization: data protection, access control, risk assessment and best practices aligned with ISO 27001.",
          highlights: ["Risk assessment", "AI policy", "Secure workflows", "Team awareness"]
        },
        {
          icon: "Rocket",
          title: "AI Adoption Consulting",
          description: "Practical roadmap for small and medium businesses that want to start with AI without wasting money or time. Clear priorities, tools and next steps.",
          highlights: ["Diagnosis", "Prioritized roadmap", "Tool selection", "Quick wins"]
        },
        {
          icon: "GraduationCap",
          title: "1:1 Mentoring & Workshops",
          description: "Personal or group sessions focused on Claude, agents, skills and how to apply AI to your role or business model.",
          highlights: ["Personalized", "Practical exercises", "Recordings optional", "Ongoing support"]
        }
      ],
      cta: "Request a free discovery call"
    },
    about: {
      title: "// About",
      subtitle: "root@andres:~$ cat about.txt",
      bio: "Systems Engineer with 9+ years securing critical infrastructure environments. I combine deep experience in cybersecurity and systems administration with practical expertise in Generative AI, Claude, Skills and Agents. I help companies adopt AI in a secure and useful way — while remaining open to remote roles where I can contribute both security and AI capability.",
      stats: [
        { value: "9+", label: "Years Experience" },
        { value: "6+", label: "Certifications" },
        { value: "AI", label: "Claude · Skills · Agents" },
        { value: "100%", label: "Remote Ready" }
      ],
      details: [
        { icon: "MapPin", label: "Location", value: "Tunja, Boyacá, Colombia" },
        { icon: "Briefcase", label: "Role", value: "Systems Engineer · Critical Infrastructure" },
        { icon: "Shield", label: "Focus", value: "AI Agency + Cybersecurity" },
        { icon: "Globe", label: "Work Mode", value: "Remote · LatAm & Worldwide" }
      ]
    },
    skills: {
      title: "// Skills & Arsenal",
      subtitle: "root@andres:~$ cat skills.json",
      categories: [
        {
          name: "AI & Claude",
          icon: "Sparkles",
          items: [
            { name: "Claude · Prompt Engineering", level: 90 },
            { name: "Custom Skills Design", level: 88 },
            { name: "AI Agents for Business", level: 85 },
            { name: "Generative AI Workflows", level: 87 },
            { name: "AI Training & Enablement", level: 90 }
          ]
        },
        {
          name: "Cybersecurity",
          icon: "Shield",
          items: [
            { name: "Threat Analysis & Incident Response", level: 90 },
            { name: "ISO 27001 / PCI DSS", level: 85 },
            { name: "Network Security", level: 88 },
            { name: "Secure AI Adoption", level: 86 },
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
          company: "Critical Infrastructure Environments",
          period: "2015 – Present",
          duration: "9+ years",
          description: "Responsible for information security and IT infrastructure of critical facilities. Design, implement and maintain secure networks, harden systems and respond to security incidents across multiple sites. Currently expanding into AI enablement and secure AI practices for organizations.",
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
          institution: "Universidad Cooperativa de Colombia",
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
      description: "Download my professional CV. Ideal for companies evaluating collaboration or remote roles.",
      button: "Download CV (PDF)",
      note: "Updated 2026 · English & Spanish available on request"
    },
    contact: {
      title: "// Contact",
      subtitle: "root@andres:~$ ./start_conversation.sh",
      description: "Want Claude training, a custom skill, an agent for your company, or to talk about a remote role? Write me — discovery call is free.",
      form: {
        name: "Name", email: "Email", subject: "Subject", message: "Message",
        send: "Send Message", sending: "Sending...",
        success: "Message sent! I will reply within 24h.",
        namePlaceholder: "Company or your name", emailPlaceholder: "you@company.com",
        subjectPlaceholder: "Claude training / Agent / Job opportunity", messagePlaceholder: "Tell me briefly what you need..."
      },
      social: {
        title: "Connect",
        linkedin: "https://www.linkedin.com/in/andres-vargas-robles-68185b181",
        github: "https://github.com/andres2017",
        email: "mailto:andresvargasrobles@gmail.com"
      }
    },
    footer: {
      copyright: "© 2026 Andrés Vargas Robles · AVR AI Agency. All rights reserved.",
      tagline: "Claude · Skills · Agents · Secure AI for business."
    },
    whatsapp: {
      message: "Hello Andrés, I saw your AI services (Claude / Skills / Agents) and would like to talk about a possible collaboration or training for our team."
    }
  },
  es: {
    nav: {
      brand: "AVR",
      links: [
        { label: "Servicios", href: "#services" },
        { label: "Acerca", href: "#about" },
        { label: "Habilidades", href: "#skills" },
        { label: "Proyectos", href: "#projects" },
        { label: "Experiencia", href: "#experience" },
        { label: "Educación", href: "#education" },
        { label: "Descargar CV", href: "#cv-download" },
        { label: "Contacto", href: "#contact" }
      ]
    },
    hero: {
      terminalLines: [
        { prompt: "$ whoami", response: "andres_vargas_robles" },
        { prompt: "$ cat agencia.txt", response: "Agencia de IA · Claude · Skills · Agentes · Ciberseguridad" },
        { prompt: "$ uptime --experiencia", response: "9+ años asegurando sistemas críticos + construyendo soluciones de IA" },
        { prompt: "$ ./oferta --servicios", response: "Capacitación Claude · Skills a medida · Agentes para empresas · IA segura" }
      ],
      subtitle: "Agencia de IA · Especialista en Claude · Skills y Agentes para Empresas · Ingeniero en Ciberseguridad",
      cta: "Ver Servicios",
      scroll: "Desplázate para descubrir"
    },
    services: {
      title: "// Servicios",
      subtitle: "root@andres:~$ ./listar_servicios.sh",
      intro: "Ayudo a empresas y profesionales a adoptar la IA de forma práctica, segura y productiva. Desde capacitación en Claude hasta agentes personalizados que trabajan dentro de tu negocio.",
      items: [
        {
          icon: "Bot",
          title: "Capacitación en Claude para Equipos",
          description: "Entrenamiento práctico para que tu equipo use Claude de forma productiva: prompting, flujos de trabajo, documentos, análisis y productividad diaria. Online o presencial.",
          highlights: ["De básico a avanzado", "Casos reales", "Material de la empresa", "Acompañamiento"]
        },
        {
          icon: "Sparkles",
          title: "Creación de Skills a Medida",
          description: "Diseño y construyo Skills de Claude adaptados a tus procesos: ventas, soporte, legal, RRHH, operaciones o equipos técnicos. Listos para usar.",
          highlights: ["Análisis de procesos", "Diseño del skill", "Documentación", "Entrega y capacitación"]
        },
        {
          icon: "Cpu",
          title: "Agentes de IA para tu Empresa",
          description: "Agentes personalizados que automatizan tareas repetitivas, responden preguntas internas, generan reportes o apoyan operaciones de cliente — con control y seguridad claros.",
          highlights: ["Taller de descubrimiento", "Diseño del agente", "Integración", "Despliegue seguro"]
        },
        {
          icon: "Shield",
          title: "IA Segura y Ciberseguridad",
          description: "Asesoría para usar IA de forma segura en tu organización: protección de datos, control de acceso, evaluación de riesgos y buenas prácticas alineadas a ISO 27001.",
          highlights: ["Evaluación de riesgos", "Política de IA", "Flujos seguros", "Sensibilización del equipo"]
        },
        {
          icon: "Rocket",
          title: "Consultoría de Adopción de IA",
          description: "Hoja de ruta práctica para pymes y negocios que quieren empezar con IA sin gastar de más ni perder tiempo. Prioridades claras, herramientas y próximos pasos.",
          highlights: ["Diagnóstico", "Roadmap priorizado", "Selección de herramientas", "Quick wins"]
        },
        {
          icon: "GraduationCap",
          title: "Mentoría 1:1 y Talleres",
          description: "Sesiones personales o grupales enfocadas en Claude, agentes, skills y cómo aplicar IA a tu rol o modelo de negocio.",
          highlights: ["Personalizado", "Ejercicios prácticos", "Grabaciones opcionales", "Soporte continuo"]
        }
      ],
      cta: "Solicitar llamada de descubrimiento gratis"
    },
    about: {
      title: "// Sobre Mí",
      subtitle: "root@andres:~$ cat acerca.txt",
      bio: "Ingeniero de Sistemas con más de 9 años asegurando entornos de infraestructura crítica. Combino experiencia profunda en ciberseguridad y administración de sistemas con expertise práctico en IA Generativa, Claude, Skills y Agentes. Ayudo a empresas a adoptar la IA de forma segura y útil — y estoy abierto a roles remotos donde pueda aportar seguridad e inteligencia artificial.",
      stats: [
        { value: "9+", label: "Años Experiencia" },
        { value: "6+", label: "Certificaciones" },
        { value: "IA", label: "Claude · Skills · Agentes" },
        { value: "100%", label: "Listo Remoto" }
      ],
      details: [
        { icon: "MapPin", label: "Ubicación", value: "Tunja, Boyacá, Colombia" },
        { icon: "Briefcase", label: "Cargo", value: "Ingeniero de Sistemas · Infraestructura Crítica" },
        { icon: "Shield", label: "Enfoque", value: "Agencia de IA + Ciberseguridad" },
        { icon: "Globe", label: "Modalidad", value: "Remoto · LatAm y Mundial" }
      ]
    },
    skills: {
      title: "// Habilidades & Arsenal",
      subtitle: "root@andres:~$ cat habilidades.json",
      categories: [
        {
          name: "IA & Claude",
          icon: "Sparkles",
          items: [
            { name: "Claude · Prompt Engineering", level: 90 },
            { name: "Diseño de Skills a medida", level: 88 },
            { name: "Agentes de IA para negocios", level: 85 },
            { name: "Flujos de IA Generativa", level: 87 },
            { name: "Capacitación y enablement de IA", level: 90 }
          ]
        },
        {
          name: "Ciberseguridad",
          icon: "Shield",
          items: [
            { name: "Análisis de Amenazas y Respuesta a Incidentes", level: 90 },
            { name: "ISO 27001 / PCI DSS", level: 85 },
            { name: "Seguridad de Redes", level: 88 },
            { name: "Adopción segura de IA", level: 86 },
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
          company: "Entornos de Infraestructura Crítica",
          period: "2015 – Presente",
          duration: "9+ años",
          description: "Responsable de la seguridad de la información e infraestructura TI de instalaciones de alta criticidad. Diseño, implementación y mantenimiento de redes seguras, hardening de sistemas y respuesta a incidentes. Actualmente expandiendo hacia enablement de IA y prácticas de IA segura para organizaciones.",
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
          institution: "Universidad Cooperativa de Colombia",
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
      description: "Descarga mi CV profesional. Ideal para empresas que evalúan colaboración o roles remotos.",
      button: "Descargar CV (PDF)",
      note: "Actualizado 2026 · Disponible en español e inglés bajo solicitud"
    },
    contact: {
      title: "// Contacto",
      subtitle: "root@andres:~$ ./iniciar_conversacion.sh",
      description: "¿Quieres capacitación en Claude, un skill a medida, un agente para tu empresa o hablar de un rol remoto? Escríbeme — la llamada de descubrimiento es gratis.",
      form: {
        name: "Nombre", email: "Correo", subject: "Asunto", message: "Mensaje",
        send: "Enviar Mensaje", sending: "Enviando...",
        success: "¡Mensaje enviado! Te respondo en menos de 24h.",
        namePlaceholder: "Empresa o tu nombre", emailPlaceholder: "tu@empresa.com",
        subjectPlaceholder: "Capacitación Claude / Agente / Oportunidad laboral", messagePlaceholder: "Cuéntame brevemente qué necesitas..."
      },
      social: {
        title: "Conectar",
        linkedin: "https://www.linkedin.com/in/andres-vargas-robles-68185b181",
        github: "https://github.com/andres2017",
        email: "mailto:andresvargasrobles@gmail.com"
      }
    },
    footer: {
      copyright: "© 2026 Andrés Vargas Robles · AVR Agencia de IA. Todos los derechos reservados.",
      tagline: "Claude · Skills · Agentes · IA segura para negocios."
    },
    whatsapp: {
      message: "Hola Andrés, vi tus servicios de IA (Claude / Skills / Agentes) y me gustaría hablar sobre una posible colaboración o capacitación para nuestro equipo."
    }
  }
};

export default portfolioData;
