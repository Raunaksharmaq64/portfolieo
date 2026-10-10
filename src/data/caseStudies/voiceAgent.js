/**
 * Voice Agent Detailed Case Study Data
 * Source of truth: voice_agent_portfolio_dossier.md & verified screenshots
 */

export const voiceAgentCaseStudy = {
  id: "voice-agent",
  name: "AI Voice Agent",
  badge: "Telephony & Conversational AI",
  tagline: "Autonomous Inbound Call Handling, Bolna Voice Orchestration & CRM Intelligence",
  accentColor: "hsl(262, 83%, 62%)", // Telephony Purple
  heroSummary:
    "An enterprise conversational voice platform engineered to automate business phone workflows. Combining telephony routing, the Bolna voice-agent runtime, Document RAG (Retrieval-Augmented Generation), and an operational CRM dashboard, the platform answers inbound callers, qualifies lead intent, logs authoritative execution transcripts, and dispatches autonomous follow-up actions.",
  businessPurpose:
    "Help businesses handle repetitive phone interactions 24/7 without losing context, converting raw telephone conversations into structured CRM records with verified transcripts and actionable next steps.",

  verifiedMetadata: {
    category: "AI Telephony & Voice Automation",
    status: "Implemented & Deployed",
    role: "AI & Telephony Systems Engineer",
    frontend: ["React.js", "TailwindCSS / Custom CSS", "Lucide Icons", "Audio Waveform Players"],
    backend: ["FastAPI / Node.js Backend Orchestration", "Docker Compose", "Nginx Reverse Proxy"],
    database: ["PostgreSQL (Call execution logs, CRM relationships, knowledge chunks)"],
    integrations: [
      "Bolna Voice Engine (Voice-agent orchestration runtime)",
      "Amazon Polly & ElevenLabs (Text-to-Speech synthesis)",
      "Deepgram / Whisper (Speech-to-Text transcription)",
      "Document RAG (Vectorized PDF & Website Ingestion)",
      "Twilio / SIP Trunking (Telephony connectivity)",
    ],
    deploymentEnv: "AWS EC2 Ubuntu (54.91.51.144) via Docker Compose",
  },

  problem: {
    title: "The Problem: The Fragility of Phone-Based Customer Support",
    subtitle: "Why traditional phone support leaves businesses with lost leads, inconsistent answers, and zero CRM accountability.",
    points: [
      {
        icon: "fas fa-phone-slash",
        title: "Unanswered After-Hours Callers",
        description: "Small and medium businesses miss up to 40% of inbound calls after operating hours. Callers who reach voicemail rarely leave messages and immediately contact competitors.",
      },
      {
        icon: "fas fa-comment-slash",
        title: "Repetitive Staff Inquiries",
        description: "Front-desk personnel spend hours answering identical basic queries (business hours, address, doctor OPD timings, consultation pricing) rather than assisting high-value in-person clients.",
      },
      {
        icon: "fas fa-sync-alt",
        title: "No Structured Follow-Up or CRM Sync",
        description: "Phone conversations vanish into thin air. Without automated call logging, lead qualification, and transcript analysis, sales teams miss callbacks and have no visibility into customer intent.",
      },
      {
        icon: "fas fa-robot",
        title: "Chatbots Can't Pick Up the Phone",
        description: "While web chatbots are common, a vast majority of high-intent enterprise customers still prefer calling directly. Voice requires sub-second audio latency, speech recognition, and natural spoken synthesis.",
      },
    ],
  },

  vision: {
    title: "The Idea & Vision: A Reliable Autonomous Voice Receptionist",
    quote: "“A voice agent must do far more than speak: it must respect business context, ground its answers in verified facts, log every execution, and cleanly escalate to human operators.”",
    description:
      "I built the Voice Agent platform to explore production-grade conversational telephony. Rather than relying on a simplistic demo bot, the system acts as an autonomous voice employee that understands caller questions, retrieves verified answers from uploaded PDFs and business websites via RAG, tags lead intent (HOT, WARM, CALLBACK), and writes complete execution records to an operational CRM.",
    targetAudience: [
      "Healthcare Clinics & Hospitals managing high-volume OPD appointment calls and doctor inquiries.",
      "Service Businesses & Consultancies capturing inbound prospects 24/7 without dedicated call centers.",
      "Field Operations & B2B Teams executing automated bulk outbound callback sequences.",
    ],
  },

  workflowStages: [
    {
      step: 1,
      title: "Telephony Call Routing",
      status: "Implemented",
      description: "Inbound call enters via SIP telephony provider and connects directly to the Bolna voice-agent runtime.",
      icon: "fas fa-phone-volume",
    },
    {
      step: 2,
      title: "Real-Time Speech Processing",
      status: "Implemented",
      description: "Deepgram/Whisper speech-to-text pipeline converts caller audio into text streams with sub-second latency.",
      icon: "fas fa-microphone-alt",
    },
    {
      step: 3,
      title: "RAG Knowledge Retrieval",
      status: "Implemented",
      description: "Vector search queries indexed business PDFs and scraped website FAQs to supply verified facts to the language model.",
      icon: "fas fa-book-reader",
    },
    {
      step: 4,
      title: "Conversational Response Generation",
      status: "Implemented",
      description: "Language model reasons within strict boundary instructions, generates spoken replies, and prevents factual hallucinations.",
      icon: "fas fa-comments",
    },
    {
      step: 5,
      title: "Speech Synthesis & Audio Stream",
      status: "Implemented",
      description: "Amazon Polly / ElevenLabs text-to-speech synthesizes natural spoken audio back to the caller over the phone line.",
      icon: "fas fa-volume-up",
    },
    {
      step: 6,
      title: "Execution Log Synchronization",
      status: "Implemented",
      description: "Application synchronizes Bolna execution ID, duration, audio recording URL, and full conversation transcript into PostgreSQL.",
      icon: "fas fa-sync",
    },
    {
      step: 7,
      title: "AI Intent Analysis & CRM Pipeline",
      status: "Implemented",
      description: "Conversation is classified (HOT, WARM, CALLBACK, UNQUALIFIED) and routed to the Follow-up Command Center.",
      icon: "fas fa-user-check",
    },
  ],

  keyFeatures: [
    {
      title: "Authoritative Bolna Call Intelligence & Transcripts",
      category: "Execution Intelligence",
      description: "Synchronized call logs showing Bolna execution IDs, call duration, audio recording links, and verbatim transcript text with temperature tags (HOT, WARM, UNQUALIFIED).",
      icon: "fas fa-list-alt",
      status: "Verified",
      screenshotId: "va-calls",
    },
    {
      title: "Knowledge Base RAG & Website Scraper",
      category: "Knowledge Retrieval",
      description: "Multi-format document ingestion (PDF rate cards, brochures, FAQs) and live website crawler chunking content for grounded semantic retrieval during voice calls.",
      icon: "fas fa-file-invoice",
      status: "Verified",
      screenshotId: "va-rag",
    },
    {
      title: "360° Customer Intelligence & CRM Command Center",
      category: "CRM & Relationships",
      description: "Comprehensive customer intelligence portal displaying caller phone numbers, deal intent, scheduled follow-up dates, and 1-click dialer triggers.",
      icon: "fas fa-users-cog",
      status: "Verified",
      screenshotId: "va-crm",
    },
    {
      title: "Follow-up Command Center & Dispatch Queue",
      category: "Automation Pipeline",
      description: "Autonomous pipeline tracking pending callbacks, booked appointments, human review queues, and E.164 safety limits to prevent repetitive calling loops.",
      icon: "fas fa-clock",
      status: "Verified",
      screenshotId: "va-followups",
    },
    {
      title: "Home Action Center & Voice Receptionist Status",
      category: "Operations Dashboard",
      description: "Live operational telemetry showing AI Receptionist live heartbeat, daily call volumes, hot leads count, and prioritized urgent customer callbacks.",
      icon: "fas fa-tachometer-alt",
      status: "Verified",
      screenshotId: "va-home",
    },
    {
      title: "Bulk Outbound Calling Campaigns",
      category: "Outreach Campaigns",
      description: "Batch calling workspace supporting contact uploads via Excel/CSV with auto-detected phone formatting and scheduled dialing batches.",
      icon: "fas fa-bullhorn",
      status: "Verified",
      screenshotId: "va-campaigns",
    },
  ],

  architecture: {
    title: "System Architecture & Voice Pipeline",
    description: "The platform integrates telephony, voice orchestration, knowledge retrieval, and relational storage in an AWS Docker Compose stack.",
    layers: [
      {
        name: "Telephony Carrier & Audio Layer",
        tech: "SIP Trunking / Twilio / Phone Gateway",
        responsibilities: "Receives public telephone calls, manages SIP handshakes, and streams bi-directional telephony audio buffers.",
      },
      {
        name: "Voice Orchestration Engine",
        tech: "Bolna Agent Runtime + Deepgram STT + Polly/ElevenLabs TTS",
        responsibilities: "Coordinates real-time conversation state, handles conversational interruptions, and dispatches audio synthesis frames.",
      },
      {
        name: "Application Backend & Workflow API",
        tech: "FastAPI / Node.js Engine (Dockerized on AWS EC2)",
        responsibilities: "Execution synchronization, webhook parsing, RAG document chunking, prompt management, and CRM business logic.",
      },
      {
        name: "Retrieval-Augmented Generation (RAG)",
        tech: "Vector Embeddings & Semantic Search Engine",
        responsibilities: "Parses business brochures and website pages into searchable context snippets injected into the LLM system prompt.",
      },
      {
        name: "Relational Persistence & Operations",
        tech: "PostgreSQL Database on AWS EC2",
        responsibilities: "Persists call records, Bolna execution IDs, caller contact histories, transcripts, and scheduled callback queues.",
      },
    ],
  },

  challenges: [
    {
      title: "Shallow Execution-List Payloads & Delayed Artifacts",
      challenge: "The voice provider's initial execution-list API response frequently omitted transcripts and audio recording URLs because post-call carrier processing took an additional 3–8 seconds after hangup.",
      investigation: "Inspected webhook payloads against REST endpoints. The initial completion event was dispatched immediately upon call teardown, prior to audio transcriber finalization.",
      approach: "Implemented a two-tier synchronization strategy: store the stable execution ID with status 'PENDING', then trigger a bounded asynchronous poll (max 3 retries, exponential backoff) to fetch the full execution payload once artifacts are ready.",
      status: "Verified & Resolved",
      learning: "Never assume a completion webhook contains all downstream artifacts. Decouple event acknowledgment from artifact persistence.",
    },
    {
      title: "Webhook Duplication & Idempotent Processing",
      challenge: "Provider retry policies occasionally delivered duplicate webhook events for the same completed call, threatening to create duplicate CRM leads and duplicate callback reminders.",
      investigation: "Traced database insertion logs during network latency spikes. Two concurrent worker threads handled the same call ID simultaneously.",
      approach: "Enforced database unique constraints on Bolna execution IDs and wrapped insertion logic in idempotent upsert transactions (ON CONFLICT DO UPDATE).",
      status: "Architected & Verified",
      learning: "Idempotency is non-negotiable in webhook-driven architectures. Every external event handler must be safely repeatable without side effects.",
    },
    {
      title: "Preserving Production Database State During Docker Rebuilds",
      challenge: "During early AWS EC2 deployments, running docker-compose down -v or uncoordinated rebuilds risked purging persistent PostgreSQL volumes containing real call histories.",
      investigation: "Reviewed deployment runbooks. Default compose scripts tied database data to ephemeral container directories.",
      approach: "Configured explicit named external volumes mapped to host directory paths (/var/lib/postgresql/data) and established strict deployment scripts that rebuild service containers without touching storage volumes.",
      status: "Production Standard Enforced",
      learning: "Treat persistent database state with extreme operational care. Container immutability should never jeopardize business data.",
    },
  ],

  decisions: [
    {
      decision: "Grounded Document RAG vs. Free-Form Prompting",
      tradeOff: "Allowing the model to answer freely produces fluent banter, but risks hallucinating non-existent prices, doctors, or opening hours.",
      verdict: "Enforced strict RAG boundaries. The model is explicitly instructed: 'If information is not present in the verified documents, state uncertainty and offer a human callback.'",
    },
    {
      decision: "Synchronous REST Polling vs. Webhook-First Execution Sync",
      tradeOff: "Continuous polling over-taxes provider rate limits. Relying solely on webhooks fails if the server experiences transient network drops.",
      verdict: "Adopted a hybrid model: listen for webhooks as the primary trigger, with a manual 'Sync Recent Calls' fallback button in the dashboard for operator recovery.",
    },
  ],

  lessons: [
    "Voice AI is fundamentally an audio latency and state synchronization problem. A great voice model is useless if the system takes 4 seconds to respond or drops call records.",
    "Business callers are unforgiving with inaccuracies. Grounding voice responses in indexed documents is essential for commercial viability.",
    "Operational visibility—such as showing whether a call was answered, missed, or flagged as HOT—is what turns a voice experiment into a real business tool.",
  ],

  futureImprovements: [
    {
      title: "Live Warm Call Transfer to Human Staff",
      status: "Planned",
      description: "Implement SIP REFER transfer routines to seamlessly patch human operators into the live call when callers explicitly request human assistance.",
    },
    {
      title: "Multi-Dialect Accent Adaptation (Hindi/Hinglish)",
      status: "Planned",
      description: "Expand speech recognition models with localized colloquial Hinglish vocabularies to improve recognition of regional Indian names and terms.",
    },
    {
      title: "Automated Post-Call WhatsApp Follow-Up Dispatch",
      status: "Planned",
      description: "Automatically dispatch a WhatsApp confirmation message containing appointment details or document links immediately following call completion.",
    },
  ],
};
