const portfolioData = {
  en: {
    nav: {
      brand: "AVR",
      links: [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Education", href: "#education" },
        { label: "Upload CV", href: "#cv-upload" },
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
      bio: "Systems Engineer with over nine years of experience at INPEC. My career is focused on information security, systems and network administration. My continuous training in cybersecurity, blockchain, and software development allows me to apply advanced and cutting-edge technical solutions. Currently actively seeking remote work opportunities where I can contribute my technical skills and continue growing in the technology sector.",
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
          company: "INPEC",
          period: "2015 – Present",
          duration: "9+ years",
          description: "Leading information security, systems and network administration for critical government infrastructure. Implementing advanced cybersecurity protocols and managing secure IT environments.",
          highlights: [
            "Information Security Management",
            "Network & Systems Administration",
            "Critical Infrastructure Protection",
            "Security Protocol Implementation"
          ]
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
    cvUpload: {
      title: "// Upload CV",
      subtitle: "root@andres:~$ upload --secure resume.pdf",
      description: "Securely upload your CV in PDF or DOCX format. Your file is encrypted during transfer.",
      dragText: "Drag & drop your CV here",
      orText: "or",
      browseText: "Browse Files",
      supportedFormats: "Supported: PDF, DOC, DOCX (Max 10MB)",
      uploading: "Encrypting and uploading...",
      success: "File uploaded successfully!",
      remove: "Remove",
      uploadAnother: "Upload Another"
    },
    contact: {
      title: "// Contact",
      subtitle: "root@andres:~$ ./send_message.sh",
      description: "Ready to discuss cybersecurity, blockchain, or tech opportunities? Send me a secure message.",
      form: {
        name: "Name", email: "Email", subject: "Subject", message: "Message",
        send: "Send Secure Message", sending: "Encrypting & Sending...",
        success: "Message sent successfully!",
        namePlaceholder: "John Doe", emailPlaceholder: "john@example.com",
        subjectPlaceholder: "Cybersecurity Consultation", messagePlaceholder: "Your message here..."
      },
      social: {
        title: "Connect",
        linkedin: "https://www.linkedin.com/in/andres-vargas-robles-68185b181"
      }
    },
    footer: {
      copyright: "© 2025 Andrés Vargas Robles. All rights reserved.",
      tagline: "Securing the digital frontier, one system at a time.",
      builtWith: "Built with"
    }
  },
  es: {
    nav: {
      brand: "AVR",
      links: [
        { label: "Acerca", href: "#about" },
        { label: "Habilidades", href: "#skills" },
        { label: "Experiencia", href: "#experience" },
        { label: "Educación", href: "#education" },
        { label: "Subir CV", href: "#cv-upload" },
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
      bio: "Ingeniero de Sistemas con más de nueve años de experiencia en INPEC. Mi trayectoria se centra en la seguridad de la información, administración de sistemas y redes. Mi formación continua en ciberseguridad, blockchain y desarrollo de software me permite aplicar soluciones técnicas avanzadas y de vanguardia. Actualmente estoy en búsqueda activa de oportunidades laborales remotas donde pueda aportar mis habilidades técnicas y seguir creciendo en el sector de la tecnología.",
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
          company: "INPEC",
          period: "2015 – Presente",
          duration: "9+ años",
          description: "Liderando seguridad de la información, administración de sistemas y redes para infraestructura gubernamental crítica. Implementando protocolos avanzados de ciberseguridad y gestionando entornos IT seguros.",
          highlights: [
            "Gestión de Seguridad de la Información",
            "Administración de Redes y Sistemas",
            "Protección de Infraestructura Crítica",
            "Implementación de Protocolos de Seguridad"
          ]
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
    cvUpload: {
      title: "// Subir CV",
      subtitle: "root@andres:~$ upload --seguro curriculum.pdf",
      description: "Sube tu CV de forma segura en formato PDF o DOCX. Tu archivo se encripta durante la transferencia.",
      dragText: "Arrastra y suelta tu CV aquí",
      orText: "o",
      browseText: "Explorar Archivos",
      supportedFormats: "Soportado: PDF, DOC, DOCX (Máx 10MB)",
      uploading: "Encriptando y subiendo...",
      success: "¡Archivo subido exitosamente!",
      remove: "Eliminar",
      uploadAnother: "Subir Otro"
    },
    contact: {
      title: "// Contacto",
      subtitle: "root@andres:~$ ./enviar_mensaje.sh",
      description: "¿Listo para hablar de ciberseguridad, blockchain u oportunidades tecnológicas? Envíame un mensaje seguro.",
      form: {
        name: "Nombre", email: "Correo", subject: "Asunto", message: "Mensaje",
        send: "Enviar Mensaje Seguro", sending: "Encriptando y Enviando...",
        success: "¡Mensaje enviado exitosamente!",
        namePlaceholder: "Juan Pérez", emailPlaceholder: "juan@ejemplo.com",
        subjectPlaceholder: "Consulta de Ciberseguridad", messagePlaceholder: "Tu mensaje aquí..."
      },
      social: {
        title: "Conectar",
        linkedin: "https://www.linkedin.com/in/andres-vargas-robles-68185b181"
      }
    },
    footer: {
      copyright: "© 2025 Andrés Vargas Robles. Todos los derechos reservados.",
      tagline: "Asegurando la frontera digital, un sistema a la vez.",
      builtWith: "Construido con"
    }
  }
};

export default portfolioData;
