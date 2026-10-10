/**
 * WhatsApp Automation Agent Detailed Case Study Data
 * Source of truth: whatsapp_automation_portfolio_dossier.md & verified screenshots
 */

export const whatsappAutomationCaseStudy = {
  id: "whatsapp-automation",
  name: "WhatsApp Automation Agent",
  badge: "Messaging & Clinical Automation",
  tagline: "Automated Business Messaging, Rule-Based Chatbots & Clinical Care Workflows",
  accentColor: "hsl(142, 70%, 45%)", // WhatsApp Green
  heroSummary:
    "A multi-deployment business automation platform engineered to streamline customer communication, automate repetitive inquiries, and execute specialized operational workflows on WhatsApp. Featuring dynamic QR code device pairing, configurable keyword chatbot rules, CRM deal tracking, and a dedicated Clinical Healthcare OS for 24/7 doctor OPD scheduling and patient triage.",
  businessPurpose:
    "Transform manual, unstructured WhatsApp messaging into organized, rule-driven business workflows that operate 24/7 while preserving human oversight for sensitive communications.",

  verifiedMetadata: {
    category: "Business Messaging & Workflow Automation",
    status: "Implemented & Deployed Across Multiple Environments",
    role: "Full-Stack Automation & Systems Engineer",
    frontend: ["React.js", "TailwindCSS / Custom CSS", "Lucide Icons", "Kanban & Calendar Views"],
    backend: ["Node.js / Express.js Server", "WhatsApp Web Protocol Bridge", "REST Webhook Engine"],
    database: ["PostgreSQL / MongoDB (Message logs, contact directories, appointment schedules)"],
    integrations: [
      "WhatsApp Web QR Authentication Bridge",
      "LeadHunter Discovery Integration",
      "Google Gemini AI (Conversational intent & medical assistant)",
      "Gmail / SMTP Outbound Pipelines",
      "Payment Gateway Link Generator",
    ],
    deploymentEnv: "Multiple AWS EC2 Instances (Ports 80 & 3000) & Custom Domain",
  },

  problem: {
    title: "The Problem: The Chaos of Unstructured Business Messaging",
    subtitle: "Why handling business inquiries via personal WhatsApp apps leads to dropped leads, appointment chaos, and staff burnout.",
    points: [
      {
        icon: "fas fa-inbox",
        title: "Overwhelming Repetitive Message Volume",
        description: "Businesses receive hundreds of identical daily inquiries asking for prices, catalogs, addresses, or opening times. Front-desk staff spend hours retyping the same text instead of serving customers.",
      },
      {
        icon: "fas fa-calendar-times",
        title: "Appointment Booking Collisions",
        description: "In clinics and service shops, appointments scheduled via manual chats frequently double-book slots, lack attendance confirmations, and cause high no-show rates without automated reminders.",
      },
      {
        icon: "fas fa-paper-plane",
        title: "No Structured CRM or Pipeline Tracking",
        description: "Valuable customer relationships are trapped in personal phone chat threads. Sales teams have no visibility into conversation stages, deal values, or scheduled follow-ups.",
      },
      {
        icon: "fas fa-ban",
        title: "Risk of Number Bans from Naive Automation",
        description: "Blunt mass-messaging tools blast identical text to hundreds of contacts simultaneously, triggering WhatsApp spam heuristics and leading to immediate phone number bans.",
      },
    ],
  },

  vision: {
    title: "The Idea & Vision: Controlled, Intelligent Business Messaging",
    quote: "“Automation should never feel like reckless spam. It should operate like a diligent virtual receptionist that understands context, respects boundaries, and organizes real business work.”",
    description:
      "I designed this platform to explore how messaging automation can serve real operational needs. Built around a core multi-channel dashboard, the system allows businesses to connect their own WhatsApp numbers via a simple QR scan, define priority-weighted keyword response rules, manage contacts through an interactive CRM Kanban board, and deploy tailored solutions—such as an automated clinical assistant for OPD patient bookings.",
    targetAudience: [
      "Medical Clinics & Doctors automating OPD patient bookings, lab report deliveries, and post-procedure check-ins.",
      "Local Retailers & Service Boutiques handling product catalogs, inquiries, and WhatsApp-driven order checkouts.",
      "B2B Agencies running coordinated outreach campaigns across WhatsApp and Email.",
    ],
  },

  workflowStages: [
    {
      step: 1,
      title: "QR Device Link",
      status: "Implemented",
      description: "Business pairs their WhatsApp number by scanning a dynamically generated QR code in the settings dashboard.",
      icon: "fas fa-qrcode",
    },
    {
      step: 2,
      title: "Incoming Event Ingestion",
      status: "Implemented",
      description: "Incoming messages, media, and customer metadata are ingested and validated by the backend gateway.",
      icon: "fas fa-satellite",
    },
    {
      step: 3,
      title: "Chatbot Rule Matching",
      status: "Implemented",
      description: "Engine evaluates trigger keywords, regex patterns, and priority weights (e.g., 'price', 'book', 'hours') to select responses.",
      icon: "fas fa-filter",
    },
    {
      step: 4,
      title: "Contextual AI & Variable Substitution",
      status: "Implemented",
      description: "Dynamic placeholders ({name}, {date}, {doctor}) and optional Gemini AI reasoning generate a tailored response.",
      icon: "fas fa-magic",
    },
    {
      step: 5,
      title: "Paced Delivery & Anti-Ban Safety",
      status: "Implemented",
      description: "Responses are dispatched through randomized drip pacing to mimic natural typing rhythms and protect sender reputation.",
      icon: "fas fa-shield-alt",
    },
    {
      step: 6,
      title: "Operational Logging & CRM Update",
      status: "Implemented",
      description: "Conversation state is recorded, updating contact history, CRM Kanban stages, and calendar bookings.",
      icon: "fas fa-clipboard-list",
    },
    {
      step: 7,
      title: "Human Escalation Path",
      status: "Implemented",
      description: "Complex questions, complaints, or medical red flags pause the automation and alert staff for manual takeover.",
      icon: "fas fa-user-shield",
    },
  ],

  keyFeatures: [
    {
      title: "Unified Multi-Channel Operations Dashboard",
      category: "Operations",
      description: "Central command view linking WhatsApp AI Studio, LeadHunter lead imports, Gmail cold outreach, and Kanban CRM sales metrics.",
      icon: "fas fa-tachometer-alt",
      status: "Verified",
      screenshotId: "wa-dash",
    },
    {
      title: "Configurable Keyword Chatbot Rules Engine",
      category: "Automation Logic",
      description: "Rule builder supporting keyword triggers, match modes (Contains, Exact, Regex), priority weighting, message test sandbox, and active rule toggles.",
      icon: "fas fa-robot",
      status: "Verified",
      screenshotId: "wa-rules",
    },
    {
      title: "WhatsApp Web QR Device Connection",
      category: "Connectivity",
      description: "Self-service device pairing workflow allowing businesses to link their existing phone numbers via standard WhatsApp Linked Devices.",
      icon: "fas fa-qrcode",
      status: "Verified",
      screenshotId: "wa-qr",
    },
    {
      title: "Clinic Healthcare WhatsApp OS & Patient Care Engine",
      category: "Healthcare Variant",
      description: "Specialized clinical implementation featuring 24/7 AI Clinical Assistant, dynamic OPD booking calculation (preventing double booking), and emergency triage.",
      icon: "fas fa-stethoscope",
      status: "Verified",
      screenshotId: "wa-clinic-hero",
    },
    {
      title: "Clinical AI Features & OPD Scheduling Logic",
      category: "Healthcare Variant",
      description: "1-click medical document vault for prescriptions and lab reports, automated 24h attendance verification, and automated post-op recovery tracking.",
      icon: "fas fa-notes-medical",
      status: "Verified",
      screenshotId: "wa-clinic-features",
    },
    {
      title: "CRM Deals Kanban Pipeline",
      category: "CRM & Sales",
      description: "Visual sales pipeline categorizing customer conversations across deal stages: New Lead, Contacted, Proposal Dispatched, and Converted.",
      icon: "fas fa-columns",
      status: "Verified",
      screenshotId: "wa-kanban",
    },
  ],

  architecture: {
    title: "System Architecture & Multi-Tenant Deployments",
    description: "The platform uses a modular Node.js architecture deployed across multiple specialized AWS EC2 instances.",
    layers: [
      {
        name: "Client Dashboard Layer",
        tech: "React 18 + Vite / TailwindCSS / Custom Styling",
        responsibilities: "Live QR code pairing modal, chatbot rule editor, live messages inbox, appointments calendar, and CRM pipeline views.",
      },
      {
        name: "Messaging Gateway & Webhook Router",
        tech: "Node.js / Express.js Backend",
        responsibilities: "Handles incoming socket events from WhatsApp Web sessions, validates inputs, and manages message rate limits.",
      },
      {
        name: "Automation Rules Engine",
        tech: "Rule Evaluator + Template Interpolator",
        responsibilities: "Matches incoming text against configured trigger keywords, computes priority scores, and resolves dynamic variables.",
      },
      {
        name: "Specialized Clinical Logic Module",
        tech: "Healthcare Scheduling Engine & Triage Rules",
        responsibilities: "Calculates open doctor consultation slots (45m New, 15m Follow-up), detects red-flag emergency symptoms, and routes lab reports.",
      },
      {
        name: "Data Persistence & Multi-Deployment Hosts",
        tech: "PostgreSQL / MongoDB / AWS EC2",
        responsibilities: "Stores conversation logs, scheduled messages, customer profiles, and appointment rosters across cloud instances.",
      },
    ],
  },

  challenges: [
    {
      title: "WhatsApp Web Session Dropping & Reconnection Resilience",
      challenge: "Headless WhatsApp Web socket sessions would occasionally disconnect during server restarts or transient network drops, leaving customers without auto-replies.",
      investigation: "Examined connection state lifecycles and authentication token storage. Default in-memory session handling required a manual QR scan after every restart.",
      approach: "Persisted encrypted authentication session tokens to disk and implemented an auto-reconnect backoff mechanism that re-establishes socket connections silently without requiring fresh QR scans.",
      status: "Resolved & Verified",
      learning: "Never store critical session state in ephemeral memory. Session persistence and graceful reconnection handling are essential for 24/7 automation reliability.",
    },
    {
      title: "Preventing Double-Booked Doctor Slots in Clinic Workflows",
      challenge: "When multiple patients messaged simultaneously to book the same doctor at 11:30 AM, race conditions could cause the system to confirm the same slot to two different patients.",
      investigation: "Analyzed booking transaction concurrency. Checking slot availability and writing the appointment were separate non-atomic operations.",
      approach: "Implemented transactional database locking on calendar slot records. Once a slot is selected, a 5-minute temporary hold is placed until confirmation is received or expires.",
      status: "Implemented & Tested",
      learning: "Scheduling systems require atomic reservations. Concurrency issues will always emerge as soon as more than one user interacts with the system.",
    },
    {
      title: "Managing Multiple Customized Deployment Instances",
      challenge: "Maintaining different customer variants (e.g., Clinic Healthcare vs. E-Commerce Catalog vs. Multi-channel LeadHunter) risked creating diverging, unmaintainable code forks.",
      investigation: "Audited differences between client deployments. The core messaging engine was identical; only business rules, UI modules, and database schemas differed.",
      approach: "Refactored the codebase into a modular core platform with pluggable vertical packages (Clinic module, Catalog module, Outreach module) governed by environment feature flags.",
      status: "Production Standard",
      learning: "Avoid duplicating code across client deployments. Use feature toggles and modular plugin architectures to support diverse business needs from a single solid core.",
    },
  ],

  decisions: [
    {
      decision: "Direct WhatsApp Web QR Bridge vs. Paid BSP API Providers",
      tradeOff: "Official Business APIs (Meta BSPs) charge per-conversation fees and enforce strict 24-hour template windows, making experimentation cost-prohibitive for small clinics. Direct QR linking uses standard business numbers.",
      verdict: "Implemented direct QR device pairing for maximum accessibility, paired with strict anti-ban pacing and opt-in rules to maintain responsible usage.",
    },
    {
      decision: "Rule-Based Engine vs. Pure Autonomous LLM Generation",
      tradeOff: "Pure LLM chatbots can occasionally misunderstand exact clinic policies, consultation fees, or booking slots.",
      verdict: "Used deterministic rule-based matching for structured transactional workflows (timings, bookings, document retrieval) and reserved LLM reasoning for open-ended conversational FAQs.",
    },
  ],

  lessons: [
    "Messaging automation must prioritize user consent and conversational boundaries. The best automation is invisible, helpful, and never intrusive.",
    "Specialized vertical solutions (like the Clinic Healthcare OS) deliver dramatically higher business value than generic chatbot tools because they solve end-to-end problems (booking to report delivery).",
    "Logging every message state (queued, sent, delivered, failed) is critical for diagnosing delivery issues and earning client trust.",
  ],

  futureImprovements: [
    {
      title: "Official Meta Cloud API Dual-Stack Adapter",
      status: "Planned",
      description: "Build an abstraction layer that allows businesses to toggle between direct QR pairing and official Meta Cloud API endpoints depending on scale.",
    },
    {
      title: "Automated Voice Note Transcription (Audio to Text)",
      status: "Planned",
      description: "Incorporate Whisper speech-to-text to automatically transcribe and process voice messages sent by elderly clinic patients.",
    },
    {
      title: "Integrated Razorpay Payment Link Webhooks",
      status: "Planned",
      description: "Automatically reconcile payment webhook events to mark clinic consultation invoices as paid immediately upon transaction completion.",
    },
  ],
};
