const portfolioData = {
  en: {
    nav: {
      brand: "AVR",
      links: [
        { label: "Services", href: "#services" },
        { label: "Ventures", href: "#ventures" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" }
      ]
    },
    hero: {
      terminalLines: [
        { prompt: "$ whoami", response: "andres_vargas_robles" },
        { prompt: "$ cat mission.txt", response: "Dream · Build · Ship · Scale" },
        { prompt: "$ ls ventures/", response: "fiestita/  slimdownpdf/  anvora/  punto-tricolor/  agro/" },
        { prompt: "$ ./offer", response: "Claude · Skills · Agents · n8n · Custom software" }
      ],
      subtitle: "Entrepreneur & dreamer from Colombia · Trained in Claude at Ruta N Medellín · I build products and help companies adopt AI with real hunger to move forward",
      cta: "View services",
      ctaSecondary: "My ventures",
      scroll: "Scroll to discover"
    },
    services: {
      title: "// Services",
      subtitle: "root@avr:~$ ./sell_value.sh",
      intro: "I help businesses and professionals work smarter with AI and automation. From Claude training (Ruta N Medellín) to custom agents, n8n workflows and software built for your process — not generic templates.",
      items: [
        { icon: "Bot", title: "Claude training for teams", description: "Practical sessions so your team uses Claude every day: prompting, documents, analysis and real workflows. Online or on-site. Based on my Ruta N Medellín training.", highlights: ["Beginner to advanced", "Your real use cases", "Follow-up support"] },
        { icon: "Sparkles", title: "Custom Claude Skills", description: "Skills tailored to sales, support, operations, legal or tech teams. Designed, documented and handed over ready to use.", highlights: ["Process mapping", "Skill design", "Docs + training"] },
        { icon: "Cpu", title: "AI agents for your company", description: "Agents that answer, report, qualify leads or support operations — with clear control and security.", highlights: ["Discovery", "Design", "Secure delivery"] },
        { icon: "Workflow", title: "n8n automations", description: "Connect tools, cut repetitive work and move data automatically: WhatsApp, CRMs, sheets, email, APIs.", highlights: ["Process audit", "n8n flows", "Maintenance"] },
        { icon: "Rocket", title: "Custom projects", description: "Web apps, landing pages, bots and product MVPs built around your idea. From concept to launch.", highlights: ["Scoped delivery", "Fast iterations", "Handover"] },
        { icon: "Shield", title: "Secure AI adoption", description: "Use AI without putting data at risk: policies, access, safe workflows and team awareness.", highlights: ["Risk review", "Safe setups", "Team guidance"] }
      ],
      cta: "Request a free discovery call"
    },
    ventures: {
      title: "// Ventures",
      subtitle: "root@avr:~$ ls -la emprendimientos/",
      intro: "I don't just talk about ideas — I ship them. Dreamer by nature, operator by choice. Every product is a step toward building something bigger.",
      items: [
        { name: "Fiestita", tag: "Live product", description: "Digital invitations platform for birthdays, weddings, quinceañeras and events. Music, photos, countdown, map and WhatsApp RSVP. One-time payment, ready instantly.", link: "https://invitacionesdigitalesfiestita.com", linkLabel: "invitacionesdigitalesfiestita.com" },
        { name: "SlimdownPDF", tag: "Live product", description: "Convert PDF, Word, Excel, PowerPoint, images and audio to clean Markdown in seconds. Native parsing and smart caching cut the tokens you spend with Claude, ChatGPT and other AI models.", link: "https://slimdownpdf.uk", linkLabel: "slimdownpdf.uk" },
        { name: "Anvora", tag: "In progress", description: "Developer factory we are building: a space to train, ship and scale software talent and products with AI-native methods.", link: null, linkLabel: null },
        { name: "Punto Tricolor", tag: "APK in development", description: "App for Colombian businesses and fans: WhatsApp AI sales bots, local map and engagement around Mundial 2026. APK in active development.", link: "https://puntotricolor.co", linkLabel: "puntotricolor.co" },
        { name: "EcoStay", tag: "Web3", description: "Glamping platform with blockchain airdrop: bookings + smart contracts + token rewards.", link: "https://github.com/andres2017/airdrop_front", linkLabel: "GitHub" },
        { name: "AgroDirecto & AgroRiego", tag: "AgriTech", description: "Marketplace and intelligent irrigation ideas focused on Colombian producers.", link: "https://github.com/andres2017/AgroDirecto", linkLabel: "GitHub" }
      ]
    },
    about: {
      title: "// About",
      subtitle: "root@avr:~$ cat soñador.txt",
      bio: "I am Andrés Vargas Robles — systems engineer, entrepreneur and dreamer from Tunja, Colombia. I build companies and digital products because I believe execution beats excuses. This month I completed Claude training at Ruta N Medellín (skills, agents and practical AI workflows) and I apply that knowledge to help businesses and to grow my own ventures: Fiestita, SlimdownPDF, Anvora, Punto Tricolor and more. I automate with n8n, ship software for real clients and keep learning every day. I am hungry to move forward — for my projects, for the people I work with, and for the future I am building with my own hands.",
      stats: [
        { value: "6+", label: "Ventures" },
        { value: "AI", label: "Claude · Ruta N" },
        { value: "n8n", label: "Automations" },
        { value: "100%", label: "Drive to grow" }
      ],
      details: [
        { icon: "MapPin", label: "Base", value: "Tunja, Boyacá, Colombia" },
        { icon: "Briefcase", label: "Focus", value: "AI · Products · Automation" },
        { icon: "Rocket", label: "Identity", value: "Entrepreneur · Dreamer · Builder" },
        { icon: "Globe", label: "Mode", value: "Remote · LatAm & worldwide" }
      ]
    },
    skills: {
      title: "// Skills",
      subtitle: "root@avr:~$ cat arsenal.json",
      categories: [
        { name: "AI & Claude", icon: "Sparkles", items: [
          { name: "Claude · Prompt engineering", level: 92 },
          { name: "Custom Skills", level: 90 },
          { name: "AI Agents", level: 88 },
          { name: "Team training (Ruta N)", level: 90 }
        ]},
        { name: "Automation", icon: "Workflow", items: [
          { name: "n8n workflows", level: 88 },
          { name: "WhatsApp / API integrations", level: 85 },
          { name: "CRM & sheets automation", level: 84 },
          { name: "Process design", level: 86 }
        ]},
        { name: "Product & Web", icon: "Code", items: [
          { name: "Web apps & landings", level: 82 },
          { name: "Python", level: 85 },
          { name: "JavaScript / React", level: 80 },
          { name: "MVPs to production", level: 84 }
        ]},
        { name: "Security & Infra", icon: "Shield", items: [
          { name: "Secure AI adoption", level: 86 },
          { name: "Networks & systems", level: 88 },
          { name: "Risk awareness", level: 84 }
        ]},
        { name: "Blockchain", icon: "Link", items: [
          { name: "Smart contracts", level: 78 },
          { name: "dApps", level: 75 },
          { name: "Web3 product ideas", level: 80 }
        ]}
      ]
    },
    projects: {
      title: "// Projects",
      subtitle: "root@avr:~$ ls projects/",
      items: [
        { name: "SlimdownPDF", description: "SaaS to convert PDF, Office, images and audio to clean Markdown — fewer tokens for Claude, ChatGPT and other LLMs.", tech: ["SaaS", "Markdown", "AI tooling"], link: "https://slimdownpdf.uk", repo: "Live product" },
        { name: "Fiestita", description: "Full digital invitations product: designs, music, RSVP via WhatsApp, countdown and maps.", tech: ["Product", "Web", "WhatsApp"], link: "https://invitacionesdigitalesfiestita.com", repo: "Live product" },
        { name: "Punto Tricolor", description: "APK + platform for businesses (WhatsApp AI bots) and fans around Mundial 2026.", tech: ["APK", "AI", "WhatsApp"], link: "https://puntotricolor.co", repo: "In development" },
        { name: "EcoStay", description: "Glamping + blockchain airdrop. Frontend, backend and smart contracts.", tech: ["TypeScript", "React", "Web3"], link: "https://github.com/andres2017/airdrop_front", repo: "airdrop_front" },
        { name: "PetHealthRegistry", description: "On-chain pet health records and recovery helpers.", tech: ["Smart Contracts", "Web3"], link: "https://github.com/andres2017/PetHealthRegistry", repo: "PetHealthRegistry" }
      ]
    },
    education: {
      title: "// Education",
      subtitle: "root@avr:~$ cat formacion.log",
      tabs: { education: "Education", certifications: "Certifications" },
      items: [
        { title: "Claude AI · Skills & Agents", institution: "Ruta N Medellín", period: "Aug 2026", skills: ["Claude", "Skills", "Agents", "Prompting"] },
        { title: "Advanced Blockchain Bootcamp", institution: "CYMETRIA TALENTO TECH", period: "2024", skills: ["Smart Contracts", "dApps", "Web3"] },
        { title: "Cybersecurity Technician", institution: "INCIBE", period: "2023", skills: ["Systems", "Forensics", "Vulnerabilities"] },
        { title: "Webmaster / Full-Stack (800h)", institution: "UPB · MinTIC MisiónTIC", period: "2021–2022", skills: ["Python", "Java", "Web"] },
        { title: "Systems Engineering", institution: "UNAD", period: "2015–2019", skills: ["Systems design", "Infrastructure"] }
      ],
      certifications: [
        { title: "Claude AI · Skills & Agents", issuer: "Ruta N Medellín", date: "2026", category: "AI" },
        { title: "Fortinet NSE 1, 2 & 3", issuer: "Fortinet", date: "2023", category: "Security" },
        { title: "Cybersecurity Technician", issuer: "INCIBE", date: "2023", category: "Security" },
        { title: "CCNA", issuer: "Cisco", date: "2019", category: "Networks" },
        { title: "Blockchain Advanced", issuer: "CYMETRIA", date: "2024", category: "Web3" },
        { title: "ISO 27001 / PCI DSS Diploma", issuer: "Univ. Cooperativa", date: "2021", category: "Security" }
      ]
    },
    cvDownload: {
      title: "// Download CV",
      subtitle: "root@avr:~$ wget cv.pdf",
      description: "Professional CV — AI services, Claude (Ruta N), automation and product building.",
      button: "Download CV (PDF)",
      note: "Updated Aug 2026"
    },
    contact: {
      title: "// Contact",
      subtitle: "root@avr:~$ ./hablemos.sh",
      description: "Need Claude training, a skill, an agent, an n8n automation or a custom project? I reply fast — discovery call is free. Let's build something real.",
      form: {
        name: "Name", email: "Email", subject: "Subject", message: "Message",
        send: "Send message", sending: "Sending...",
        success: "Message sent! I will reply soon.",
        namePlaceholder: "Your name or company",
        emailPlaceholder: "you@company.com",
        subjectPlaceholder: "Agents / n8n / Custom project",
        messagePlaceholder: "Tell me what you need..."
      },
      social: {
        title: "Connect",
        linkedin: "https://www.linkedin.com/in/andres-vargas-robles-68185b181",
        github: "https://github.com/andres2017",
        email: "mailto:andresvargasrobles@gmail.com"
      }
    },
    footer: {
      copyright: "© 2026 Andrés Vargas Robles · AVR. All rights reserved.",
      tagline: "Dream · Build · Ship — entrepreneur with fire to move forward."
    },
    whatsapp: {
      message: "Hola Andrés, vi tu portfolio (Claude / Ruta N / Skills / Agentes / n8n) y quiero hablar de un proyecto."
    }
  },
  es: {
    nav: {
      brand: "AVR",
      links: [
        { label: "Servicios", href: "#services" },
        { label: "Emprendimientos", href: "#ventures" },
        { label: "Proyectos", href: "#projects" },
        { label: "Habilidades", href: "#skills" },
        { label: "Sobre mí", href: "#about" },
        { label: "Contacto", href: "#contact" }
      ]
    },
    hero: {
      terminalLines: [
        { prompt: "$ whoami", response: "andres_vargas_robles" },
        { prompt: "$ cat mision.txt", response: "Soñar · Crear · Lanzar · Escalar" },
        { prompt: "$ ls emprendimientos/", response: "fiestita/  slimdownpdf/  anvora/  punto-tricolor/  agro/" },
        { prompt: "$ ./oferta", response: "Claude · Skills · Agentes · n8n · Software a medida" }
      ],
      subtitle: "Emprendedor y soñador de Colombia · Capacitado en Claude en Ruta N Medellín · Construyo productos y ayudo a empresas a adoptar IA, con ganas reales de salir adelante",
      cta: "Ver servicios",
      ctaSecondary: "Mis emprendimientos",
      scroll: "Desplázate para descubrir"
    },
    services: {
      title: "// Servicios",
      subtitle: "root@avr:~$ ./vender_valor.sh",
      intro: "Ayudo a empresas y profesionales a trabajar mejor con IA y automatización. Desde capacitación en Claude (Ruta N Medellín) hasta agentes, flujos n8n y software hecho para tu proceso — no plantillas genéricas.",
      items: [
        { icon: "Bot", title: "Capacitación en Claude", description: "Sesiones prácticas para que tu equipo use Claude a diario: prompting, documentos, análisis y flujos reales. Online o presencial. Basado en mi formación en Ruta N Medellín.", highlights: ["De básico a avanzado", "Casos de tu negocio", "Acompañamiento"] },
        { icon: "Sparkles", title: "Skills de Claude a medida", description: "Skills para ventas, soporte, operaciones, legal o equipos técnicos. Diseñados, documentados y listos para usar.", highlights: ["Mapeo de procesos", "Diseño del skill", "Docs + entrenamiento"] },
        { icon: "Cpu", title: "Agentes de IA", description: "Agentes que responden, reportan, califican leads o apoyan operaciones — con control y seguridad claros.", highlights: ["Descubrimiento", "Diseño", "Entrega segura"] },
        { icon: "Workflow", title: "Automatizaciones con n8n", description: "Conecta herramientas y elimina trabajo repetitivo: WhatsApp, CRM, hojas de cálculo, correo y APIs.", highlights: ["Auditoría del proceso", "Flujos n8n", "Mantenimiento"] },
        { icon: "Rocket", title: "Proyectos a tu medida", description: "Apps web, landings, bots y MVPs de producto alrededor de tu idea. De concepto a lanzamiento.", highlights: ["Alcance claro", "Iteraciones rápidas", "Entrega"] },
        { icon: "Shield", title: "Adopción segura de IA", description: "Usa IA sin poner en riesgo los datos: políticas, accesos, flujos seguros y sensibilización del equipo.", highlights: ["Revisión de riesgos", "Setups seguros", "Guía al equipo"] }
      ],
      cta: "Solicitar llamada de descubrimiento gratis"
    },
    ventures: {
      title: "// Emprendimientos",
      subtitle: "root@avr:~$ ls -la empresas/",
      intro: "No solo hablo de ideas: las lanzo. Soñador de naturaleza, ejecutor por decisión. Cada producto es un paso hacia algo más grande.",
      items: [
        { name: "Fiestita", tag: "Producto en vivo", description: "Plataforma de invitaciones digitales para cumpleaños, bodas, quince años y eventos. Música, fotos, cuenta regresiva, mapa y confirmación por WhatsApp. Pago único, lista al instante.", link: "https://invitacionesdigitalesfiestita.com", linkLabel: "invitacionesdigitalesfiestita.com" },
        { name: "SlimdownPDF", tag: "Producto en vivo", description: "Convierte PDF, Word, Excel, PowerPoint, imágenes y audio a Markdown limpio en segundos. Parsing nativo y caché inteligente para gastar menos tokens con Claude, ChatGPT y otros modelos de IA.", link: "https://slimdownpdf.uk", linkLabel: "slimdownpdf.uk" },
        { name: "Anvora", tag: "En construcción", description: "Fábrica de desarrolladores que estamos creando: espacio para formar, entregar y escalar talento y productos de software con métodos AI-native.", link: null, linkLabel: null },
        { name: "Punto Tricolor", tag: "APK en desarrollo", description: "App para negocios e hinchas: bots de IA en WhatsApp, mapa local y engagement alrededor del Mundial 2026. APK en desarrollo activo.", link: "https://puntotricolor.co", linkLabel: "puntotricolor.co" },
        { name: "EcoStay", tag: "Web3", description: "Plataforma de glamping con airdrop blockchain: reservas + contratos inteligentes + recompensas.", link: "https://github.com/andres2017/airdrop_front", linkLabel: "GitHub" },
        { name: "AgroDirecto & AgroRiego", tag: "AgriTech", description: "Marketplace y riego inteligente orientados a productores colombianos.", link: "https://github.com/andres2017/AgroDirecto", linkLabel: "GitHub" }
      ]
    },
    about: {
      title: "// Sobre mí",
      subtitle: "root@avr:~$ cat soñador.txt",
      bio: "Soy Andrés Vargas Robles — ingeniero de sistemas, emprendedor y soñador de Tunja, Colombia. Creo empresas y productos digitales porque creo que ejecutar vale más que las excusas. Este mes completé la capacitación en Claude en Ruta N Medellín (skills, agentes y flujos prácticos de IA) y aplico ese conocimiento para ayudar a negocios y para hacer crecer mis propios proyectos: Fiestita, SlimdownPDF, Anvora, Punto Tricolor y más. Automatizo con n8n, entrego software a clientes reales y sigo aprendiendo cada día. Tengo ganas de salir adelante: por mis proyectos, por la gente con la que trabajo y por el futuro que estoy construyendo con mis propias manos.",
      stats: [
        { value: "6+", label: "Emprendimientos" },
        { value: "IA", label: "Claude · Ruta N" },
        { value: "n8n", label: "Automatizaciones" },
        { value: "100%", label: "Ganas de crecer" }
      ],
      details: [
        { icon: "MapPin", label: "Base", value: "Tunja, Boyacá, Colombia" },
        { icon: "Briefcase", label: "Enfoque", value: "IA · Productos · Automatización" },
        { icon: "Rocket", label: "Identidad", value: "Emprendedor · Soñador · Builder" },
        { icon: "Globe", label: "Modalidad", value: "Remoto · LatAm y mundial" }
      ]
    },
    skills: {
      title: "// Habilidades",
      subtitle: "root@avr:~$ cat arsenal.json",
      categories: [
        { name: "IA & Claude", icon: "Sparkles", items: [
          { name: "Claude · Prompt engineering", level: 92 },
          { name: "Skills a medida", level: 90 },
          { name: "Agentes de IA", level: 88 },
          { name: "Capacitación (Ruta N)", level: 90 }
        ]},
        { name: "Automatización", icon: "Workflow", items: [
          { name: "Flujos n8n", level: 88 },
          { name: "Integraciones WhatsApp / API", level: 85 },
          { name: "CRM y hojas de cálculo", level: 84 },
          { name: "Diseño de procesos", level: 86 }
        ]},
        { name: "Producto & Web", icon: "Code", items: [
          { name: "Apps web y landings", level: 82 },
          { name: "Python", level: 85 },
          { name: "JavaScript / React", level: 80 },
          { name: "MVP a producción", level: 84 }
        ]},
        { name: "Seguridad e Infra", icon: "Shield", items: [
          { name: "Adopción segura de IA", level: 86 },
          { name: "Redes y sistemas", level: 88 },
          { name: "Conciencia de riesgos", level: 84 }
        ]},
        { name: "Blockchain", icon: "Link", items: [
          { name: "Smart contracts", level: 78 },
          { name: "dApps", level: 75 },
          { name: "Ideas de producto Web3", level: 80 }
        ]}
      ]
    },
    projects: {
      title: "// Proyectos",
      subtitle: "root@avr:~$ ls proyectos/",
      items: [
        { name: "SlimdownPDF", description: "SaaS para convertir PDF, Office, imágenes y audio a Markdown limpio — menos tokens para Claude, ChatGPT y otros LLMs.", tech: ["SaaS", "Markdown", "Herramienta IA"], link: "https://slimdownpdf.uk", repo: "Producto en vivo" },
        { name: "Fiestita", description: "Producto completo de invitaciones digitales: diseños, música, RSVP por WhatsApp, cuenta regresiva y mapas.", tech: ["Producto", "Web", "WhatsApp"], link: "https://invitacionesdigitalesfiestita.com", repo: "Producto en vivo" },
        { name: "Punto Tricolor", description: "APK + plataforma para negocios (bots IA en WhatsApp) e hinchas alrededor del Mundial 2026.", tech: ["APK", "IA", "WhatsApp"], link: "https://puntotricolor.co", repo: "En desarrollo" },
        { name: "EcoStay", description: "Glamping + airdrop blockchain. Frontend, backend y contratos inteligentes.", tech: ["TypeScript", "React", "Web3"], link: "https://github.com/andres2017/airdrop_front", repo: "airdrop_front" },
        { name: "PetHealthRegistry", description: "Registros de salud de mascotas on-chain y ayudas de recuperación.", tech: ["Smart Contracts", "Web3"], link: "https://github.com/andres2017/PetHealthRegistry", repo: "PetHealthRegistry" }
      ]
    },
    education: {
      title: "// Formación",
      subtitle: "root@avr:~$ cat formacion.log",
      tabs: { education: "Educación", certifications: "Certificaciones" },
      items: [
        { title: "Claude AI · Skills y Agentes", institution: "Ruta N Medellín", period: "Ago 2026", skills: ["Claude", "Skills", "Agentes", "Prompting"] },
        { title: "Bootcamp Blockchain Avanzado", institution: "CYMETRIA TALENTO TECH", period: "2024", skills: ["Smart Contracts", "dApps", "Web3"] },
        { title: "Técnico en Ciberseguridad", institution: "INCIBE", period: "2023", skills: ["Sistemas", "Forense", "Vulnerabilidades"] },
        { title: "Webmaster / Full-Stack (800h)", institution: "UPB · MinTIC MisiónTIC", period: "2021–2022", skills: ["Python", "Java", "Web"] },
        { title: "Ingeniería de Sistemas", institution: "UNAD", period: "2015–2019", skills: ["Diseño de sistemas", "Infraestructura"] }
      ],
      certifications: [
        { title: "Claude AI · Skills y Agentes", issuer: "Ruta N Medellín", date: "2026", category: "IA" },
        { title: "Fortinet NSE 1, 2 & 3", issuer: "Fortinet", date: "2023", category: "Seguridad" },
        { title: "Técnico en Ciberseguridad", issuer: "INCIBE", date: "2023", category: "Seguridad" },
        { title: "CCNA", issuer: "Cisco", date: "2019", category: "Redes" },
        { title: "Blockchain Avanzado", issuer: "CYMETRIA", date: "2024", category: "Web3" },
        { title: "Diplomado ISO 27001 / PCI DSS", issuer: "Univ. Cooperativa", date: "2021", category: "Seguridad" }
      ]
    },
    cvDownload: {
      title: "// Descargar CV",
      subtitle: "root@avr:~$ wget cv.pdf",
      description: "CV profesional — servicios de IA, Claude (Ruta N), automatización y construcción de productos.",
      button: "Descargar CV (PDF)",
      note: "Actualizado ago 2026"
    },
    contact: {
      title: "// Contacto",
      subtitle: "root@avr:~$ ./hablemos.sh",
      description: "¿Necesitas capacitación en Claude, un skill, un agente, una automatización n8n o un proyecto a medida? Respondo rápido — la llamada de descubrimiento es gratis. Construyamos algo real.",
      form: {
        name: "Nombre", email: "Correo", subject: "Asunto", message: "Mensaje",
        send: "Enviar mensaje", sending: "Enviando...",
        success: "¡Mensaje enviado! Te respondo pronto.",
        namePlaceholder: "Tu nombre o empresa",
        emailPlaceholder: "tu@empresa.com",
        subjectPlaceholder: "Agentes / n8n / Proyecto a medida",
        messagePlaceholder: "Cuéntame qué necesitas..."
      },
      social: {
        title: "Conectar",
        linkedin: "https://www.linkedin.com/in/andres-vargas-robles-68185b181",
        github: "https://github.com/andres2017",
        email: "mailto:andresvargasrobles@gmail.com"
      }
    },
    footer: {
      copyright: "© 2026 Andrés Vargas Robles · AVR. Todos los derechos reservados.",
      tagline: "Soñar · Crear · Lanzar — emprendedor con ganas de salir adelante."
    },
    whatsapp: {
      message: "Hola Andrés, vi tu portfolio (Claude / Ruta N / Skills / Agentes / n8n) y quiero hablar de un proyecto."
    }
  }
};

export default portfolioData;
