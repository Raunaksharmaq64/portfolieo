/**
 * Authoritative Portfolio Knowledge Base
 * Sourced strictly from verified repository documentation, project dossiers,
 * and academic records. Used by "Ask Raunak AI" assistant.
 */

export const candidateProfile = {
  name: "Raunak Sharma",
  headline: "AI Automation & Full-Stack Developer | AI Agents, LLM Integrations & SaaS",
  location: "Bhopal, Madhya Pradesh, India",
  email: "raunaksharma88630mt@gmail.com",
  portfolioUrl: "https://raunaksharmaq64.github.io/portfolieo/",
  githubUrl: "https://github.com/Raunaksharmaq64",
  linkedinUrl: "https://www.linkedin.com/in/raunak-sharma-q64/",
  education: {
    institution: "Lakshmi Narain College of Technology & Science (LNCTS), Bhopal",
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    duration: "2023 – Present",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java)",
      "Relational Database Management (SQL)",
      "Software Engineering"
    ]
  },
  summary: "Early-career Full-Stack & AI Automation Developer focused on building practical AI-powered software, agent workflows, and database-backed SaaS products. Hands-on experience connecting modern user interfaces (React) with asynchronous backend APIs (FastAPI, Express), background task queues (Redis), and operational data stores (PostgreSQL, MongoDB). Architect of real-world business automations including multi-source lead intelligence scrapers, low-latency conversational voice reception pipelines, and clinical appointment scheduling systems.",
  certifications: [
    { title: "Cloud Foundations", issuer: "AWS Academy", topics: "EC2, S3, VPC Networking, Cloud Architecture" },
    { title: "Software Engineering Simulation", issuer: "JPMorgan Chase", topics: "React, Financial Data Feeds, OOP" },
    { title: "Generative AI Career Experience", issuer: "TCS & Tata Group", topics: "LLM Architectures, Prompt Engineering" },
    { title: "Software Engineering Simulation", issuer: "Siemens", topics: "Industrial Automation Pipelines, Program Testing" }
  ],
  skills: {
    aiAndAgents: ["AI Agent Workflows", "LLM APIs (Gemini, Claude, GPT)", "Document RAG (Retrieval-Augmented Generation)", "Bolna Voice Engine", "Prompt Engineering"],
    languages: ["JavaScript (ES6+)", "Python", "Java (Core OOP)", "SQL", "HTML5", "CSS3"],
    backendAndApis: ["Node.js", "Express.js", "FastAPI", "RESTful APIs", "Webhooks", "Web Audio API", "JWT Authentication"],
    databasesAndQueues: ["PostgreSQL", "MongoDB", "Redis (Queue Broker / Cache)", "JDBC Connectors"],
    cloudAndDevOps: ["AWS (EC2, S3)", "Docker Compose", "Git", "GitHub", "Nginx", "Playwright", "Vercel", "Render", "Postman"]
  }
};

export const verifiedFlagshipProducts = [
  {
    id: "leadhunter",
    title: "LeadHunter — B2B Lead Discovery & AI Outreach Engine",
    category: "AI Agent & Lead Automation SaaS",
    status: "Verified SaaS (Deployed)",
    liveUrl: "https://miniproject-leadhunter.vercel.app/",
    caseStudyHash: "#/case-study/leadhunter",
    techStack: ["React", "FastAPI", "PostgreSQL", "Redis", "SerpApi", "Google Gemini"],
    problem: "Outbound B2B lead generation requires hours of manual Google Maps scouting, cross-checking business website reachability, and drafting cold outreach pitches one by one.",
    solution: "An end-to-end platform coupling Google Maps geographic coordinate search with automated technical diagnostics and context-aware LLM pitch generation.",
    keyFeatures: [
      "Geographic Coordinate Search: Queries SerpApi Google Maps endpoints by city and industry niche.",
      "Automated Technical Diagnostics: Checks HTTP/HTTPS reachability, domain DNS resolution, and mobile responsiveness to identify high-intent prospects with missing or outdated websites.",
      "Asynchronous Queues: Employs Redis broker architecture for non-blocking scraping and background batch execution.",
      "Context-Aware Pitch Generation: Calls Google Gemini API with detected business diagnostic weaknesses to generate bespoke cold email drafts.",
      "Lead Management & Export: Persists audited leads into PostgreSQL with CSV/JSON export."
    ],
    engineeringChallenges: "Preventing rate-limiting during high-volume coordinate querying, handling inconsistent or missing website metadata, and designing resilient Redis queue retry strategies."
  },
  {
    id: "voice-agent",
    title: "AI Voice Agent — Autonomous Telephony & CRM Pipeline",
    category: "Real-Time Telephony & AI Automation",
    status: "AWS EC2 Deployment (Production-Ready)",
    caseStudyHash: "#/case-study/voice-agent",
    techStack: ["Bolna Voice Engine", "Python", "FastAPI", "PostgreSQL", "Document RAG", "Docker"],
    problem: "Small businesses and clinics lose high-intent customer leads and emergency appointments due to unanswered calls and delayed manual follow-ups outside business hours.",
    solution: "An autonomous conversational voice reception pipeline delivering sub-second speech latency, grounded factual retrieval from clinical documents, and automated CRM synchronization.",
    keyFeatures: [
      "Sub-Second Conversational Telephony: Integrates Bolna voice agent runtime with real-time speech-to-text, LLM response generation, and text-to-speech audio streaming.",
      "Document RAG (Retrieval-Augmented Generation): Grounds spoken responses in verified PDF knowledge bases (such as doctor OPD schedules) to eliminate conversational hallucinations.",
      "Event-Driven Webhook Pipeline: Collects call audio recordings, synchronizes full conversation transcripts, and extracts caller intent.",
      "Automated Lead Classification: Classifies calls into Hot Lead, Warm Inquiry, Callback Requested, or Cold.",
      "CRM & Follow-up Triggering: Directly writes structured call outcomes into PostgreSQL and queues automated follow-up alerts."
    ],
    engineeringChallenges: "Handling sub-second audio turn-around, managing asynchronous recording synchronization delays from telephony webhooks, and ensuring fail-safe fallback when knowledge base lookups yield zero matches."
  },
  {
    id: "whatsapp-automation",
    title: "WhatsApp Automation Agent — Messaging & Clinical Workflow OS",
    category: "Business Messaging & Clinical OS",
    status: "Multi-Instance SaaS Deployment",
    liveUrl: "https://myraisedin.com/",
    caseStudyHash: "#/case-study/whatsapp-automation",
    techStack: ["Node.js", "Express.js", "WhatsApp Protocol", "PostgreSQL", "Gemini AI"],
    problem: "Healthcare clinics struggle with appointment slot collision, missed patient visits, and chaotic manual WhatsApp messaging.",
    solution: "A unified business messaging platform and dedicated Clinical Healthcare OS managing multi-instance WhatsApp device connectivity, rule-based chatbots, and 24/7 automated doctor appointment booking.",
    keyFeatures: [
      "Multi-Instance WhatsApp Connectivity: Dynamic QR-code device pairing with auto-reconnection and session persistence.",
      "Automated Doctor OPD Scheduling: Manages patient appointment slot allocation, prevents double bookings with validation locks, and issues instant confirmation tickets.",
      "Interactive Kanban CRM: Visual pipeline for contact management, lead categorization, and manual team takeover.",
      "State-Machine Chatbot: Keyword triggers combined with Gemini AI fallback for intent resolution.",
      "Automated Patient Reminders: Scheduled cron notifications reducing clinic no-show rates."
    ],
    engineeringChallenges: "Handling WhatsApp session disconnects gracefully, maintaining state machine integrity across simultaneous incoming booking requests, and containerizing multi-tenant instances on AWS EC2 behind Nginx."
  }
];

export const suggestedQuestionsList = [
  {
    id: "q-strongest",
    question: "What is Raunak's strongest AI project?",
    category: "Projects"
  },
  {
    id: "q-leadhunter",
    question: "Explain how LeadHunter works.",
    category: "Deep-Dive"
  },
  {
    id: "q-techstack",
    question: "What technologies has Raunak used in his AI automation projects?",
    category: "Skills"
  },
  {
    id: "q-voiceagent",
    question: "Tell me about the Voice Agent architecture.",
    category: "Deep-Dive"
  },
  {
    id: "q-whatsapp",
    question: "What is the WhatsApp Automation Agent designed to do?",
    category: "Deep-Dive"
  },
  {
    id: "q-challenges",
    question: "What engineering challenges has Raunak worked on?",
    category: "Architecture"
  },
  {
    id: "q-fullstack",
    question: "Which projects demonstrate full-stack development?",
    category: "Full-Stack"
  },
  {
    id: "q-hire",
    question: "Why could Raunak be a good fit for an AI automation role?",
    category: "Recruiter"
  }
];

/**
 * Intelligent Retrieval Engine: Matches visitor queries against verified facts
 * and returns grounded, professional responses with contextual actions.
 */
export function queryPortfolioKnowledge(userQuery) {
  if (!userQuery || typeof userQuery !== 'string') {
    return {
      text: "Please provide a question about Raunak's projects, technical skills, or engineering background.",
      actions: []
    };
  }

  const q = userQuery.toLowerCase().trim();

  // 1. Strongest Project
  if (q.includes("strongest") || (q.includes("best") && q.includes("project")) || q.includes("flagship")) {
    return {
      text: "Raunak's standout work is centered on three advanced AI & automation systems, with **LeadHunter** and the **AI Voice Agent** demonstrating his highest technical depth:\n\n• **LeadHunter** combines geospatial scouting with automated website diagnostics (HTTP/HTTPS, mobile viewport) and Google Gemini LLM pitch generation, backed by Redis queues.\n• The **AI Voice Agent** runs on AWS EC2 using the Bolna voice engine with sub-second audio turn-around, Document RAG for hallucination-free facts, and automated CRM webhook ingestion.\n• The **WhatsApp Automation Agent** runs a Clinical Healthcare OS automating 24/7 doctor OPD scheduling without slot collisions.",
      actions: [
        { label: "View LeadHunter Case Study", hash: "#/case-study/leadhunter" },
        { label: "Explore Voice Agent", hash: "#/case-study/voice-agent" },
        { label: "Try the Agents Live", hash: "#agent-playground" }
      ]
    };
  }

  // 2. LeadHunter
  if (q.includes("leadhunter") || (q.includes("lead") && (q.includes("hunt") || q.includes("outreach") || q.includes("discovery")))) {
    return {
      text: "**LeadHunter** is an automated B2B lead discovery and outreach preparation platform:\n\n1. **Scouting**: Uses SerpApi to discover business listings across specific geographic coordinates and industry niches.\n2. **Technical Diagnostics**: Automatically tests each business website for reachability, valid SSL/HTTPS, domain resolution, and mobile responsiveness—pinpointing businesses that urgently need modern web solutions.\n3. **Asynchronous Architecture**: Leverages **Redis** for non-blocking scraping queues and **FastAPI** for high-throughput execution.\n4. **Personalized Pitches**: Passes detected website gaps to **Google Gemini API** to generate context-specific cold outreach emails, saving hours of manual sales prospecting.",
      actions: [
        { label: "Explore Full LeadHunter Case Study", hash: "#/case-study/leadhunter" },
        { label: "Try LeadHunter Simulator", hash: "#agent-playground" }
      ]
    };
  }

  // 3. Voice Agent
  if (q.includes("voice") || q.includes("bolna") || q.includes("telephony") || q.includes("call")) {
    return {
      text: "**AI Voice Agent** is an autonomous conversational telephony and CRM intake system deployed on AWS EC2:\n\n• **Sub-Second Speech Flow**: Powered by the **Bolna** voice-agent engine, orchestrating speech-to-text, LLM inference, and text-to-speech audio streaming.\n• **Document RAG (Retrieval-Augmented Generation)**: Ingests clinical OPD schedules and business PDFs to ground spoken replies in verified facts, preventing hallucination during live calls.\n• **Automated CRM Pipeline**: Webhooks process audio recordings and full transcripts, classify caller intent (Hot, Warm, Callback, Cold), and write structured records into PostgreSQL.",
      actions: [
        { label: "View Voice Agent Case Study", hash: "#/case-study/voice-agent" },
        { label: "Simulate a Voice Call Live", hash: "#agent-playground" }
      ]
    };
  }

  // 4. WhatsApp Automation
  if (q.includes("whatsapp") || q.includes("clinic") || q.includes("raisedin") || q.includes("messaging")) {
    return {
      text: "**WhatsApp Automation Agent** is a multi-instance messaging automation platform featuring a dedicated Clinical Healthcare OS:\n\n• **Connectivity**: Supports dynamic QR-code device pairing and persistent multi-tenant sessions.\n• **Clinical Scheduling**: Automates 24/7 doctor OPD appointment booking with slot collision validation, instant ticket confirmation, and reminder broadcasts.\n• **Architecture**: Built with Node.js, Express.js, PostgreSQL, and Gemini AI for intent resolution, containerized on AWS EC2 with Nginx reverse proxy.",
      actions: [
        { label: "View WhatsApp Case Study", hash: "#/case-study/whatsapp-automation" },
        { label: "View Architecture Stack", hash: "#skills" }
      ]
    };
  }

  // 5. Tech Stack & Technologies
  if (q.includes("tech") || q.includes("skill") || q.includes("language") || q.includes("stack") || q.includes("tool")) {
    return {
      text: "Raunak's technical toolset is centered on full-stack web and intelligent backend automation:\n\n• **AI & Agentic**: AI Agent Workflows, LLM APIs (Gemini, Claude, GPT), Document RAG, Bolna Voice Engine, Prompt Engineering.\n• **Languages**: JavaScript (ES6+), Python, Java (Core OOP), SQL, HTML5, CSS3.\n• **Backend & APIs**: Node.js, Express.js, FastAPI, RESTful APIs, Webhooks, Web Audio API, JWT Auth.\n• **Databases & Queues**: PostgreSQL, MongoDB, Redis (Queue Broker / Cache), JDBC Connectors.\n• **Cloud & DevOps**: AWS (EC2, S3), Docker Compose, Git, GitHub, Nginx, Playwright, Vercel, Render.",
      actions: [
        { label: "View Technical Skills Section", hash: "#skills" },
        { label: "Open ATS Resume", url: "resume.html" }
      ]
    };
  }

  // 6. Engineering Challenges
  if (q.includes("challenge") || q.includes("difficult") || q.includes("problem") || q.includes("debug") || q.includes("reliability")) {
    return {
      text: "Across his projects, Raunak has tackled several genuine backend and automation engineering challenges:\n\n1. **Asynchronous Scraping Queues (LeadHunter)**: Implemented Redis queue workers with graceful backoff to prevent API rate-limits and manage timeouts during large-scale geographic lead scouting.\n2. **Conversational Latency & Audio Sync (Voice Agent)**: Solved webhook synchronization delays for multi-turn telephony recordings, pairing transcripts with intent classification in PostgreSQL.\n3. **Concurrency & Slot Collisions (WhatsApp OS)**: Engineered state machine validation locks ensuring zero appointment double-bookings when multiple patients message simultaneously.\n4. **Production Containerization**: Deployed multi-service Docker Compose setups with Nginx reverse proxies on AWS EC2.",
      actions: [
        { label: "Read LeadHunter Case Study", hash: "#/case-study/leadhunter" },
        { label: "Read Voice Agent Case Study", hash: "#/case-study/voice-agent" }
      ]
    };
  }

  // 7. Full-Stack Projects
  if (q.includes("full-stack") || q.includes("fullstack") || q.includes("hostelbuddy") || q.includes("web app")) {
    return {
      text: "Raunak demonstrates full-stack software development across multiple live applications:\n\n• **LeadHunter**: React frontend with responsive controls connected to an asynchronous FastAPI backend, Redis queues, and PostgreSQL database.\n• **HostelBuddy**: A student accommodation discovery platform (Node.js, Express, MongoDB, React) featuring multi-criteria search filtering, amenities tagging, and direct owner enquiry channels.\n• **WhatsApp Automation Admin OS**: Real-time Kanban contact boards and multi-device connection dashboards backed by Node.js and PostgreSQL.",
      actions: [
        { label: "Explore All Creations", hash: "#projects" },
        { label: "View Technical Skills", hash: "#skills" }
      ]
    };
  }

  // 8. Why Hire Raunak / Value for Recruiter
  if (q.includes("hire") || q.includes("fit") || q.includes("role") || q.includes("candidate") || q.includes("intern") || q.includes("why")) {
    return {
      text: "Raunak brings distinct practical advantages for AI Automation and Software Engineering teams:\n\n1. **Builds Beyond Basic UIs**: He connects frontends to operational databases, asynchronous queues (Redis), external APIs, and LLM backends.\n2. **Production-Minded**: Has hands-on experience deploying containerized services on AWS EC2, configuring webhooks, and mitigating latency in real-time voice and messaging workflows.\n3. **Practical AI Application**: Focuses on high-utility business workflows—lead generation, clinical scheduling, and voice reception—rather than toy demos.\n4. **Solid Fundamentals**: Computer Science student at LNCTS Bhopal with verified coursework in Data Structures, Java OOP, and Relational Database Management.",
      actions: [
        { label: "View ATS Resume", url: "resume.html" },
        { label: "Contact Raunak", hash: "#contact" }
      ]
    };
  }

  // 9. Education
  if (q.includes("education") || q.includes("college") || q.includes("university") || q.includes("degree") || q.includes("lncts") || q.includes("bhopal")) {
    return {
      text: "Raunak is pursuing a **Bachelor of Technology (B.Tech) in Computer Science & Engineering** at **Lakshmi Narain College of Technology & Science (LNCTS), Bhopal** (2023 – Present).\n\nRelevant academic coursework includes Data Structures & Algorithms, Object-Oriented Programming (Java), Relational Database Management Systems (SQL), and Software Engineering principles.",
      actions: [
        { label: "View Experience & Academic Background", hash: "#experience" },
        { label: "Download Resume PDF", url: "assets/images/Raunak_Resume.pdf" }
      ]
    };
  }

  // 10. Certifications
  if (q.includes("certif") || q.includes("aws") || q.includes("jpmorgan") || q.includes("tata") || q.includes("siemens")) {
    return {
      text: "Raunak holds verified technical certifications and industry simulation credentials:\n\n• **AWS Academy**: Cloud Foundations (EC2, S3, VPC Networking, Cloud Architecture)\n• **JPMorgan Chase**: Software Engineering Simulation (React, Financial Feeds, OOP)\n• **TCS & Tata Group**: Generative AI Career Experience (LLM Architectures, Prompt Engineering)\n• **Siemens**: Software Engineering Simulation (Industrial Automation Pipelines, Program Testing)",
      actions: [
        { label: "View Certifications Section", hash: "#certifications" },
        { label: "View Verified Resume", url: "resume.html" }
      ]
    };
  }

  // 11. Contact / Resume / Links
  if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("linkedin") || q.includes("github") || q.includes("resume")) {
    return {
      text: "You can connect with Raunak through several direct channels:\n\n• **Email**: raunaksharma88630mt@gmail.com\n• **LinkedIn**: linkedin.com/in/raunak-sharma-q64\n• **GitHub**: github.com/Raunaksharmaq64\n• **ATS-Verified Resume**: Available for instant web view or single-page A4 PDF download.",
      actions: [
        { label: "Open Contact Form", hash: "#contact" },
        { label: "View ATS Resume", url: "resume.html" }
      ]
    };
  }

  // Default fallback (Honest, factual, non-hallucinating)
  return {
    text: `The portfolio documentation currently does not have detailed information directly addressing "${userQuery}".\n\nRaunak's verified expertise covers **AI Agent Workflows (LeadHunter, AI Voice Agent, WhatsApp Automation)**, **Full-Stack Development (React, FastAPI, Node.js, Express)**, and **Database/Queue Architectures (PostgreSQL, MongoDB, Redis)**.\n\nWould you like to explore one of his flagship projects or review his technical resume?`,
    actions: [
      { label: "Explore LeadHunter", hash: "#/case-study/leadhunter" },
      { label: "Explore Voice Agent", hash: "#/case-study/voice-agent" },
      { label: "View Technical Skills", hash: "#skills" },
      { label: "Contact Raunak", hash: "#contact" }
    ]
  };
}
