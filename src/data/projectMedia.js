/**
 * Central Project Media Manifest
 * Contains verified real screenshot references for the flagship projects.
 * Paths are resolved via base URL helper.
 */

export const getProjectMedia = (baseUrl = '') => ({
  leadhunter: [
    {
      id: 'lh-scout',
      src: `${baseUrl}assets/projects/leadhunter/Screenshot 2026-10-10 225456.png`,
      thumbnail: `${baseUrl}assets/projects/leadhunter/Screenshot 2026-10-10 225456.png`,
      title: 'Lead Scouting & Outreach Workspace',
      category: 'Dashboard & Scouting',
      description: 'Central command interface showing real-time lead engine telemetry, active pipeline metrics (Total Leads Scouted: 76), quick actions for scouting Google Maps, and campaign sequence management.',
      alt: 'LeadHunter dashboard showing real-time lead engine active status, metric cards for total leads scouted, outreach contacted, and navigation tabs.',
      highlight: true
    },
    {
      id: 'lh-database',
      src: `${baseUrl}assets/projects/leadhunter/Screenshot 2026-10-10 225509.png`,
      thumbnail: `${baseUrl}assets/projects/leadhunter/Screenshot 2026-10-10 225509.png`,
      title: 'Verified Leads Database & Priority Filtering',
      category: 'Data Management',
      description: 'Structured prospect table with 211 saved records, showing categorized local businesses, phone numbers, website audit signals ("No website" flags), HIGH priority badges, and outreach trigger actions.',
      alt: 'LeadHunter Leads Database displaying a structured table of scouted educational institutions, phone numbers, website links, and priority flags.',
      highlight: true
    },
    {
      id: 'lh-campaigns',
      src: `${baseUrl}assets/projects/leadhunter/Screenshot 2026-10-10 225619.png`,
      thumbnail: `${baseUrl}assets/projects/leadhunter/Screenshot 2026-10-10 225619.png`,
      title: 'Leads Campaign Sequence Progression',
      category: 'Outreach Automation',
      description: 'Multi-touch automated drip sequence progression tracking prospects through Mail -> WhatsApp -> Social touchpoints, with Day 5 manual social DM tasks and dispatch logs.',
      alt: 'Leads Campaign Sequence Progression table showing enrolled prospects progressing through email, WhatsApp, and social channels.',
      highlight: true
    },
    {
      id: 'lh-analytics',
      src: `${baseUrl}assets/projects/leadhunter/Screenshot 2026-10-10 225642.png`,
      thumbnail: `${baseUrl}assets/projects/leadhunter/Screenshot 2026-10-10 225642.png`,
      title: 'Funnel Analytics & Outreach Telemetry',
      category: 'Telemetry & Analytics',
      description: 'Conversion tracking dashboard measuring outreach conversion ratio, reply interest rate, 15-day timeline comparison between Email and WhatsApp outreach, and visual CRM pipeline drop-off stages.',
      alt: 'Funnel analytics view illustrating conversion rates, outreach timeline curves for email and WhatsApp, and a stage drop-off funnel.',
      highlight: true
    },
    {
      id: 'lh-settings',
      src: `${baseUrl}assets/projects/leadhunter/Screenshot 2026-10-10 225534.png`,
      thumbnail: `${baseUrl}assets/projects/leadhunter/Screenshot 2026-10-10 225534.png`,
      title: 'BYOK API Vault & Search Provider Engine',
      category: 'System Configuration',
      description: 'Configurable provider setup allowing users to connect their own SerpApi Google Maps scraping keys and Apify actor tokens with live validation to scrape local leads at raw provider cost without credit markups.',
      alt: 'System Settings panel displaying BYOK API Vault configuration, SerpApi provider key validation, and search provider selection.',
      highlight: false
    },
    {
      id: 'lh-billing',
      src: `${baseUrl}assets/projects/leadhunter/Screenshot 2026-10-10 225522.png`,
      thumbnail: `${baseUrl}assets/projects/leadhunter/Screenshot 2026-10-10 225522.png`,
      title: 'Subscription & Usage Quota Monitor',
      category: 'Billing & Quotas',
      description: 'Account telemetry panel displaying active tier entitlements (Pro Plan), monthly Google Maps query quotas, and saved pipeline capacity.',
      alt: 'Subscription monitor screen indicating active Pro Plan tier, unlimited Google Maps searches, and saved pipeline metrics.',
      highlight: false
    },
    {
      id: 'lh-admin',
      src: `${baseUrl}assets/projects/leadhunter/Screenshot 2026-10-10 225605.png`,
      thumbnail: `${baseUrl}assets/projects/leadhunter/Screenshot 2026-10-10 225605.png`,
      title: 'System Diagnostics & Admin Panel',
      category: 'System Diagnostics',
      description: 'Infrastructure health dashboard displaying PostgreSQL database connectivity status (healthy), Redis queue broker configuration, background worker task counts, and user management controls.',
      alt: 'Admin panel screen showing PostgreSQL database health indicator, Redis queue broker status, total users, and registered accounts.',
      highlight: false
    },
    {
      id: 'lh-guide',
      src: `${baseUrl}assets/projects/leadhunter/Screenshot 2026-10-10 225546.png`,
      thumbnail: `${baseUrl}assets/projects/leadhunter/Screenshot 2026-10-10 225546.png`,
      title: 'Operations Manual & Provider Setup Guide',
      category: 'Documentation',
      description: 'In-app interactive user manual documenting step-by-step onboarding for free SerpApi and Google Gemini API keys, GDPR compliance guidelines, and filter tuning.',
      alt: 'Operations manual interface explaining zero per-lead fee architecture, step-by-step SerpApi setup, and Gemini AI configuration.',
      highlight: false
    }
  ],

  voiceAgent: [
    {
      id: 'va-home',
      src: `${baseUrl}assets/projects/voice-agent/Screenshot 2026-10-10 223448.png`,
      thumbnail: `${baseUrl}assets/projects/voice-agent/Screenshot 2026-10-10 223448.png`,
      title: 'Home Action Center & Voice Receptionist Live Status',
      category: 'Command Center',
      description: 'Real-time operations center showing autonomous AI receptionist status, daily call volume (2 Calls Handled Today), Hot Leads counter (1 Ready for closing), and prioritized actionable callback requests.',
      alt: 'Global Elite AI Receptionist home dashboard displaying active AI voice employee status, call statistics cards, and priority callback requests.',
      highlight: true
    },
    {
      id: 'va-calls',
      src: `${baseUrl}assets/projects/voice-agent/Screenshot 2026-10-10 223537.png`,
      thumbnail: `${baseUrl}assets/projects/voice-agent/Screenshot 2026-10-10 223537.png`,
      title: 'Authoritative Bolna Call Intelligence & Transcripts',
      category: 'Call Execution Logs',
      description: 'Synchronized execution records from Bolna voice engine with AI-generated conversation summaries, execution IDs, duration tracking, temperature tags (HOT / UNQUALIFIED), and 360° lead details.',
      alt: 'Call Intelligence and logs screen displaying Bolna execution history, call duration, AI intent classification badges, and summary snippets.',
      highlight: true
    },
    {
      id: 'va-crm',
      src: `${baseUrl}assets/projects/voice-agent/Screenshot 2026-10-10 223520.png`,
      thumbnail: `${baseUrl}assets/projects/voice-agent/Screenshot 2026-10-10 223520.png`,
      title: '360° Customer Intelligence & CRM Command Center',
      category: 'Customer Intelligence',
      description: 'Direct browser access to the live AWS deployment (54.91.51.144) showing automated lead qualification, scheduled follow-up call triggers, relationship health, and instant dialer buttons.',
      alt: 'CRM Command Center page showing high purchase intent leads, required appointment confirmation flags, and customer directory with action buttons.',
      highlight: true
    },
    {
      id: 'va-rag',
      src: `${baseUrl}assets/projects/voice-agent/Screenshot 2026-10-10 223620.png`,
      thumbnail: `${baseUrl}assets/projects/voice-agent/Screenshot 2026-10-10 223620.png`,
      title: 'Document Intelligence & Knowledge Base RAG',
      category: 'Knowledge Retrieval',
      description: 'Retrieval-Augmented Generation (RAG) module for ingesting business PDFs, brochures, menus, and website URLs into chunked vector documents, with interactive semantic reasoning test queries.',
      alt: 'Knowledge Base and RAG settings showing document upload zone, website scraper input, and indexed chunks ready for semantic retrieval.',
      highlight: true
    },
    {
      id: 'va-followups',
      src: `${baseUrl}assets/projects/voice-agent/Screenshot 2026-10-10 223608.png`,
      thumbnail: `${baseUrl}assets/projects/voice-agent/Screenshot 2026-10-10 223608.png`,
      title: 'Customer Follow-up Command Center & Dispatch Queue',
      category: 'Workflow Automation',
      description: 'Autonomous follow-up pipeline tracking scheduled callbacks, appointments, and multi-channel actions with Bolna callback dispatch rules and E.164 phone format safety bounds.',
      alt: 'Customer Follow-ups dashboard displaying pipeline stages: Needs Follow-up, Scheduled Calls, Appointments, and Human Review queues.',
      highlight: false
    },
    {
      id: 'va-campaigns',
      src: `${baseUrl}assets/projects/voice-agent/Screenshot 2026-10-10 223555.png`,
      thumbnail: `${baseUrl}assets/projects/voice-agent/Screenshot 2026-10-10 223555.png`,
      title: 'Bulk Outbound Calling Campaigns',
      category: 'Campaign Operations',
      description: 'Outbound campaign creation workspace supporting batch contact uploads via Excel/CSV, auto-detection of phone numbers, and automated AI dialing sequences.',
      alt: 'Bulk Outbound Campaigns view showing campaign configuration cards, contacts reached, and campaign initiation modal triggers.',
      highlight: false
    }
  ],

  whatsappAutomation: [
    {
      id: 'wa-dash',
      src: `${baseUrl}assets/projects/whatsapp-automation/04_dashboard_overview.png`,
      thumbnail: `${baseUrl}assets/projects/whatsapp-automation/04_dashboard_overview.png`,
      title: 'Unified Multi-Channel Automation Dashboard',
      category: 'Operations Dashboard',
      description: 'High-level business automation overview connecting WhatsApp AI Studio, LeadHunter prospecting integration, AI Email Studio (Gmail), and Kanban CRM sales pipeline.',
      alt: 'WhatsApp automation dashboard displaying tiles for Find New Leads, WhatsApp Studio, Email Studio, and CRM pipeline metrics.',
      highlight: true
    },
    {
      id: 'wa-rules',
      src: `${baseUrl}assets/projects/whatsapp-automation/07_chatbot_rules.png`,
      thumbnail: `${baseUrl}assets/projects/whatsapp-automation/07_chatbot_rules.png`,
      title: 'Configurable Keyword Chatbot Rules Engine',
      category: 'Automation Rules',
      description: 'Automated response builder featuring trigger keywords, match types (Contains, Exact, Regex), priority weights, message testing sandbox, and dynamic parameter substitution.',
      alt: 'Chatbot Rules configuration screen showing trigger keyword inputs, match type selectors, priority sliders, and active auto-reply rules.',
      highlight: true
    },
    {
      id: 'wa-qr',
      src: `${baseUrl}assets/projects/whatsapp-automation/15_settings_whatsapp_qr.png`,
      thumbnail: `${baseUrl}assets/projects/whatsapp-automation/15_settings_whatsapp_qr.png`,
      title: 'WhatsApp Web QR Device Connection Workflow',
      category: 'Device Connectivity',
      description: 'Live device pairing interface displaying dynamically refreshed WhatsApp Web QR code for linking business numbers without requiring expensive third-party BSP infrastructure.',
      alt: 'Settings screen displaying WhatsApp Web QR Code link workflow with clear multi-step mobile pairing instructions.',
      highlight: true
    },
    {
      id: 'wa-clinic-hero',
      src: `${baseUrl}assets/projects/whatsapp-automation/Screenshot 2026-10-10 222809.png`,
      thumbnail: `${baseUrl}assets/projects/whatsapp-automation/Screenshot 2026-10-10 222809.png`,
      title: 'Clinic Healthcare WhatsApp OS & Patient Care Engine',
      category: 'Clinical Variant',
      description: 'Specialized healthcare automation deployment turning WhatsApp into a 24/7 clinic front desk for OPD doctor bookings, 1-click lab report dispatches, and emergency symptom triage.',
      alt: 'Clinic WhatsApp Automation presentation highlighting automated OPD booking, emergency triaged notifications, and lab report delivery.',
      highlight: true
    },
    {
      id: 'wa-clinic-features',
      src: `${baseUrl}assets/projects/whatsapp-automation/Screenshot 2026-10-10 222829.png`,
      thumbnail: `${baseUrl}assets/projects/whatsapp-automation/Screenshot 2026-10-10 222829.png`,
      title: 'Clinical AI Features & OPD Scheduling Logic',
      category: 'Clinical Variant',
      description: 'Clinical capabilities matrix: 24/7 AI Clinical Assistant, Dynamic OPD Booking Engine (preventing double booking), 1-Click Medical Document Vault, Automated Post-Op Recovery tracking, and Red-Flag Emergency Triage.',
      alt: 'Clinic automation features grid displaying cards for 24/7 assistant, OPD scheduling, medical document delivery, and attendance verification.',
      highlight: true
    },
    {
      id: 'wa-inbox',
      src: `${baseUrl}assets/projects/whatsapp-automation/05_messages_inbox.png`,
      thumbnail: `${baseUrl}assets/projects/whatsapp-automation/05_messages_inbox.png`,
      title: 'Unified Customer Messages Inbox',
      category: 'Messaging Interface',
      description: 'Real-time multi-conversation chat console showing synchronized customer messages, quick response templates, and manual intervention overrides.',
      alt: 'Messages inbox view displaying customer chat threads, active message bubbles, and composer input.',
      highlight: false
    },
    {
      id: 'wa-kanban',
      src: `${baseUrl}assets/projects/whatsapp-automation/13_crm_deals_kanban.png`,
      thumbnail: `${baseUrl}assets/projects/whatsapp-automation/13_crm_deals_kanban.png`,
      title: 'CRM Deals Kanban Pipeline',
      category: 'CRM & Deals',
      description: 'Visual sales board organizing conversation leads through deal stages: New Lead, Contacted, Proposal Sent, and Converted.',
      alt: 'CRM Deals Kanban board showing draggable deal cards categorized by sales pipeline stages.',
      highlight: false
    },
    {
      id: 'wa-appointments',
      src: `${baseUrl}assets/projects/whatsapp-automation/14_appointments_calendar.png`,
      thumbnail: `${baseUrl}assets/projects/whatsapp-automation/14_appointments_calendar.png`,
      title: 'Appointments Calendar & Scheduling Queue',
      category: 'Calendar & Bookings',
      description: 'Integrated booking schedule visualizing upcoming customer appointments scheduled automatically via conversational messaging.',
      alt: 'Appointments calendar interface displaying booked client slots and scheduling status.',
      highlight: false
    },
    {
      id: 'wa-payment',
      src: `${baseUrl}assets/projects/whatsapp-automation/20_pay_portal.png`,
      thumbnail: `${baseUrl}assets/projects/whatsapp-automation/20_pay_portal.png`,
      title: 'Integrated Payment Portal & Order Flow',
      category: 'E-Commerce & Billing',
      description: 'Product catalog checkout overlay generating secure payment links sent directly into the customer’s WhatsApp conversation.',
      alt: 'Payment portal overlay showing invoice details and checkout payment options.',
      highlight: false
    }
  ]
});
