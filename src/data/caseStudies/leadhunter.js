/**
 * LeadHunter Detailed Case Study Data
 * Source of truth: leadhunter_portfolio_dossier.md & verified screenshots
 */

export const leadhunterCaseStudy = {
  id: "leadhunter",
  name: "LeadHunter",
  badge: "B2B SaaS & AI Outreach",
  tagline: "From Local Business Discovery to Multi-Touch Outreach Campaigns",
  accentColor: "hsl(217, 91%, 60%)", // Precision Blue
  heroSummary:
    "LeadHunter is an end-to-end B2B lead generation, website auditing, and outreach automation platform. Designed for freelancers, web developers, and digital agencies, it transforms fragmented manual prospecting into a unified pipeline: discovering businesses via Google Maps, analyzing website health, prioritizing high-intent prospects, and orchestrating multi-channel cold outreach.",
  businessPurpose:
    "Eliminate manual prospecting friction by coupling local business discovery with diagnostic website signals, contact research, and personalized AI pitch generation.",

  verifiedMetadata: {
    category: "Full-Stack SaaS & Business Automation",
    status: "Implemented & Deployed",
    role: "Full-Stack Engineer & Product Builder",
    frontend: ["React.js", "Vite", "TailwindCSS / Custom CSS", "Lucide Icons"],
    backend: ["Node.js / Express.js", "Python FastAPI (Scraping engine)"],
    database: ["PostgreSQL (Relational data & lead storage)", "Redis (Queue broker)"],
    integrations: ["SerpApi (Google Maps Engine)", "Apify (Actor Scraper)", "Google Gemini AI (Pitch engine)", "SMTP / IMAP (Multi-inbox rotation)"],
    deploymentEnv: "Vercel (Frontend Web App) & Cloud Server",
  },

  problem: {
    title: "The Problem: The Fragile, Fragmented Prospecting Grind",
    subtitle: "Why manual lead generation exhausts freelancers and digital agencies before they even write a single line of client code.",
    points: [
      {
        icon: "fas fa-search-location",
        title: "Disjointed Tool Switching",
        description: "Freelancers spend hours toggling between Google Maps listings, browser tabs, LinkedIn, personal email clients, and chaotic spreadsheets, losing context at every step.",
      },
      {
        icon: "fas fa-globe-americas",
        title: "Blind Outreach Without Technical Signals",
        description: "Most lead scrapers dump raw names without context. Freelancers waste time pitching web redesigns to companies with brand-new websites, or miss businesses operating with broken links, no mobile responsiveness, or missing SSL.",
      },
      {
        icon: "fas fa-envelope-open-text",
        title: "Generic, Impersonal Cold Pitches",
        description: "Sending identical copy-paste templates yields near-zero replies. Generating tailored pitches mentioning real business weaknesses manually takes 15–20 minutes per prospect.",
      },
      {
        icon: "fas fa-coins",
        title: "Aggressive Credit Markups on Scraping Platforms",
        description: "Commercial lead databases charge hefty monthly subscriptions with artificial credit limits ($0.20–$0.50 per lead), making scalable prospecting unaffordable for solo developers and small studios.",
      },
    ],
  },

  vision: {
    title: "The Idea & Vision: A BYOK-Driven Prospecting Engine",
    quote: "“I built LeadHunter to bridge the gap between discovery and outreach—allowing creators to scrape at raw provider cost and pitch with genuine technical insight.”",
    description:
      "My goal was to build a purpose-driven tool that answers: 'Which businesses in this city genuinely need my technical skills right now?' Instead of building a closed data monopoly, I architected a Bring-Your-Own-Key (BYOK) model. Users plug in free-tier SerpApi keys (100 free searches/month) and Google Gemini API keys to discover leads and generate contextual audit pitches at zero artificial markup.",
    targetAudience: [
      "Freelance Web Developers seeking local businesses without websites or with legacy technical stacks.",
      "Digital Agencies running targeted multi-channel cold email and WhatsApp campaigns.",
      "Solo Consultants needing structured B2B market research and CRM pipeline tracking.",
    ],
  },

  workflowStages: [
    {
      step: 1,
      title: "Target Definition",
      status: "Implemented",
      description: "User defines geographic location and business niche (e.g., 'Clinics in Bhopal', 'Schools in Indore').",
      icon: "fas fa-map-pin",
    },
    {
      step: 2,
      title: "Bulk Engine Scouting",
      status: "Implemented",
      description: "SerpApi / Apify drivers query Google Maps coordinate grids in real-time, extracting names, addresses, phone numbers, ratings, and websites.",
      icon: "fas fa-satellite-dish",
    },
    {
      step: 3,
      title: "Website Health Audit",
      status: "Implemented",
      description: "Automated scanner checks website existence, HTTP/HTTPS status, domain responsiveness, and flags businesses operating with 'No Website'.",
      icon: "fas fa-stethoscope",
    },
    {
      step: 4,
      title: "Contact & Email Discovery",
      status: "Implemented",
      description: "1-click deep scraper crawls publicly available website pages (/contact, /about, footer) to harvest business email addresses and social links.",
      icon: "fas fa-id-card",
    },
    {
      step: 5,
      title: "Priority Scoring & Categorization",
      status: "Implemented",
      description: "Leads without websites or with diagnostic issues are flagged with HIGH priority badges and added to the 211+ lead database.",
      icon: "fas fa-layer-group",
    },
    {
      step: 6,
      title: "AI Pitch Formulation",
      status: "Implemented",
      description: "Gemini AI synthesizes audit findings into personalized, value-first cold pitch emails tailored specifically to the prospect's weaknesses.",
      icon: "fas fa-brain",
    },
    {
      step: 7,
      title: "Multi-Touch Campaign Dispatch",
      status: "Partially Implemented",
      description: "Automated sequence progression (Day 1: Email -> Day 3: WhatsApp -> Day 5: Manual Social DM) with delivery logging and telemetry analytics.",
      icon: "fas fa-paper-plane",
    },
  ],

  keyFeatures: [
    {
      title: "Real-Time Google Maps Engine",
      category: "Discovery",
      description: "Direct coordinate scraping via SerpApi Google Maps engine that gathers verified local business records with zero artificial credit markup.",
      icon: "fas fa-map-marked-alt",
      status: "Verified",
      screenshotId: "lh-scout",
    },
    {
      title: "Structured 200+ Leads Database",
      category: "Data Management",
      description: "Sortable, searchable table with city filters, priority badges (HIGH, MEDIUM), stage transitions (NEW -> CONTACTED), and quick outreach triggers.",
      icon: "fas fa-database",
      status: "Verified",
      screenshotId: "lh-database",
    },
    {
      title: "Bring-Your-Own-Key (BYOK) Vault",
      category: "Cost Architecture",
      description: "Client-side key vault allowing users to supply their own SerpApi, Apify, and Google Gemini keys with instant connection verification.",
      icon: "fas fa-key",
      status: "Verified",
      screenshotId: "lh-settings",
    },
    {
      title: "Multi-Touch Campaign Sequences",
      category: "Outreach",
      description: "Visual progression tracking prospects through automated Email, WhatsApp dispatch, and scheduled Day 5 manual social DM tasks.",
      icon: "fas fa-stream",
      status: "Verified",
      screenshotId: "lh-campaigns",
    },
    {
      title: "Funnel Analytics & Telemetry",
      category: "Analytics",
      description: "Visual conversion metrics measuring outreach conversion ratios, reply rates, 15-day timeline curves, and visual stage drop-off funnels.",
      icon: "fas fa-chart-pie",
      status: "Verified",
      screenshotId: "lh-analytics",
    },
    {
      title: "Admin Health & Diagnostics",
      category: "Infrastructure",
      description: "Live system health monitoring showing PostgreSQL database connectivity (healthy), Redis queue status, and active background worker telemetry.",
      icon: "fas fa-server",
      status: "Verified",
      screenshotId: "lh-admin",
    },
  ],

  architecture: {
    title: "System Architecture & Data Flow",
    description: "LeadHunter separates user-facing interaction from long-running scraping tasks to maintain a responsive interface under heavy batch workloads.",
    layers: [
      {
        name: "Client Presentation Layer",
        tech: "React 18 + Vite / TailwindCSS / Lucide Icons",
        responsibilities: "Interactive lead tables, real-time search filters, BYOK credential forms, funnel charts, and modal pitch inspectors.",
      },
      {
        name: "Application API Layer",
        tech: "Node.js / Express.js REST Engine",
        responsibilities: "Authentication, user account quotas, search task orchestration, lead state management, and campaign sequence logic.",
      },
      {
        name: "Asynchronous Worker & Scraping Subsystem",
        tech: "Python FastAPI / Redis Queue / Celery Workers",
        responsibilities: "Heavy network scraping, website HTTP audit probes, email regex DOM parsing, and SerpApi/Apify rate-limited batch runs.",
      },
      {
        name: "Persistence & Cache Layer",
        tech: "PostgreSQL Database + Redis",
        responsibilities: "Relational lead storage (businesses, contacts, audit notes, campaign enrollments) and transient job queue status.",
      },
      {
        name: "External Intelligence Providers",
        tech: "Google Gemini 1.5 Flash API + SerpApi",
        responsibilities: "Raw Google Maps coordinate geocoding and context-rich personalized outreach copy generation.",
      },
    ],
  },

  challenges: [
    {
      title: "Long-Running Scraping Requests Causing Gateway Timeouts",
      challenge: "Scraping 50+ Google Maps listings and scanning their destination websites in a single synchronous HTTP request frequently caused HTTP 504 gateway timeouts on serverless hosting.",
      investigation: "Examined network request lifecycles. Individual website health checks can take 2–5 seconds each; compounding 50 domains exceeded the 30-second serverless execution window.",
      approach: "Decoupled search requests into an asynchronous job pattern. The client initiates a job ID, returns immediately, and worker processes push parsed leads into PostgreSQL while the frontend polls job status with smooth progress bars.",
      status: "Architected & Verified",
      learning: "Never perform unbounded I/O across external third-party servers inside a synchronous client-request thread. Background worker queues with persistent state are mandatory.",
    },
    {
      title: "Website Health False Negatives & Dynamic Single Page Apps",
      challenge: "Initial scraper marked websites without traditional <a href='mailto:'> links as having 'No Contact Email', even when emails were listed in footer text or obfuscated with JavaScript.",
      investigation: "Tested scraping across 30 live school and clinic websites. Many modern sites render content via client-side JavaScript or encode emails with HTML entities to deter bots.",
      approach: "Enhanced scanner with raw body regex extraction and common subpage traversal (/contact, /about-us) paired with HTML entity decoding before declaring a contact missing.",
      status: "Verified in Scraper Logic",
      learning: "Web scraping requires defense in depth. Relying solely on structured semantic markup fails against the messy diversity of real-world SMB websites.",
    },
    {
      title: "Preventing Account Spam & Rate Limit Thresholds",
      challenge: "Rapid automated email dispatch risked burning user SMTP domains or hitting Gmail API burst limits (triggering spam classification).",
      investigation: "Researched email deliverability protocols (SPF, DKIM, DMARC) and Gmail sending thresholds. Sending bursts of 50 emails within seconds causes immediate inbox flags.",
      approach: "Introduced configurable drip delays (30–90 seconds randomized interval between dispatches), multi-inbox rotation, and enforced user confirmation before sequence enrollment.",
      status: "Implemented & Tested",
      learning: "High velocity is the enemy of email deliverability. Software designed for business outreach must enforce discipline and realistic pacing over brute-force automation.",
    },
  ],

  decisions: [
    {
      decision: "Bring-Your-Own-Key (BYOK) vs. Centralized Subscription Billing",
      tradeOff: "A centralized token system allows high markups, but shifts massive server and API costs to the developer. BYOK empowers users to scrape at raw provider cost using free-tier keys.",
      verdict: "Adopted BYOK. It drastically reduces operating costs, eliminates liability for user scraping quotas, and makes the platform transparent and cost-effective.",
    },
    {
      decision: "PostgreSQL Relational Tables vs. Flexible Document Storage",
      tradeOff: "MongoDB allows unstructured scraping payloads, but managing relational campaign states (Lead -> Campaign -> Sent Mails -> Replies) requires rigid transactional integrity.",
      verdict: "Chose PostgreSQL. Structured foreign keys and status constraints prevent orphaned records and ensure clean telemetry tracking.",
    },
  ],

  lessons: [
    "Building a SaaS product is 20% scraping logic and 80% pipeline state management, error handling, and clean user experience.",
    "A lead database is only as valuable as the actionability of its data. Showing *why* a business is a high-priority lead (e.g., 'No website found') makes the product 10x more useful than displaying 10,000 raw unvetted records.",
    "Transparent pricing and self-hosted credentials create high trust among technical freelancers and agency operators.",
  ],

  futureImprovements: [
    {
      title: "Playwright Headless Browser Rendering",
      status: "Planned",
      description: "Incorporate headless browser rendering for scraping JavaScript-heavy single-page applications that render contacts dynamically.",
    },
    {
      title: "Direct WhatsApp Web QR Integration Hook",
      status: "Planned",
      description: "Directly bridge LeadHunter qualified leads into the WhatsApp Automation agent pipeline without manual CSV exports.",
    },
    {
      title: "Automated Domain DNS & SSL Diagnostics",
      status: "Planned",
      description: "Expand the website audit to inspect SSL expiration dates and missing SPF/DMARC records as additional selling points for agency pitches.",
    },
  ],
};
