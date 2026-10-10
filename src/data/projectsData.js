/**
 * Authoritative Project Data Registry
 * Contains complete, factual records for all 20 developer projects.
 * Sourced directly from projects.md, repository dossiers, and verified codebases.
 */

export const flagshipProjects = [
  {
    id: "leadhunter",
    name: "LeadHunter",
    title: "LeadHunter — B2B Lead Discovery & Outreach Engine",
    badge: "B2B Outreach & Scraper",
    category: "featured",
    tagline: "Local business discovery, website diagnostics, and multi-touch outreach.",
    cardDescription: "Eliminates fragmented prospecting by coupling Google Maps business discovery with diagnostic website signals, email harvesting, and AI-personalized pitches.",
    summary: "Eliminates fragmented prospecting by coupling Google Maps business discovery with diagnostic website signals, email harvesting, and AI-personalized pitches.",
    description: "A production-grade B2B lead discovery platform designed to eliminate the manual, multi-tool grind of agency client acquisition. Combines automated Google Maps extraction, deep technical website analysis (SSL, DNS, technology fingerprinting, performance), email discovery, and personalized outreach draft generation.",
    problem: "Sales agencies and freelance developers spend 15+ hours per week manually finding local businesses, opening each website to inspect for flaws, guessing owner emails, and writing generic pitches that get marked as spam.",
    intendedUsers: [
      "Digital Marketing & Web Design Agencies",
      "Freelance Web Developers seeking local business clients",
      "Sales Development Representatives (SDRs)",
      "B2B Growth Strategists"
    ],
    techStack: ["React 18", "FastAPI", "PostgreSQL", "Celery / Redis", "SerpApi", "Google Gemini AI"],
    accentColor: "hsl(217, 91%, 60%)",
    thumbnail: "assets/projects/leadhunter/Screenshot 2026-10-10 225456.png",
    heroImage: "assets/projects/leadhunter/Screenshot 2026-10-10 225456.png",
    liveDemoUrl: "https://miniproject-leadhunter.vercel.app/",
    githubLink: "https://github.com/Raunaksharmaq64",
    caseStudyId: "leadhunter",
    status: "Verified Live (Vercel & AWS EC2)",
    workflow: "Business Discovery (SerpApi) → Diagnostic Crawler (SSL/DNS/Tech) → Contact Finding → Scoring Algorithm → Gemini Pitch Drafter → Export",
    challenges: "Handling rate-limited third-party APIs and managing delayed async scraping jobs reliably across workers without dropping state."
  },
  {
    id: "voice-agent",
    name: "AI Voice Agent",
    title: "AI Voice Agent — Autonomous Telephony & CRM Pipeline",
    badge: "Telephony & Conversational AI",
    category: "featured",
    tagline: "Autonomous call reception, Bolna voice orchestration, and CRM records.",
    cardDescription: "Handles inbound caller workflows 24/7 with sub-second speech latency, grounds answers in verified business PDFs via RAG, and syncs execution transcripts to an operational CRM.",
    summary: "Handles inbound caller workflows 24/7 with sub-second speech latency, grounds answers in verified business PDFs via RAG, and syncs execution transcripts to an operational CRM.",
    description: "An enterprise-grade autonomous voice reception and telephony automation platform. Built to replace unreliable manual call handling with sub-second conversational AI, vector-grounded business knowledge retrieval, and automatic post-call CRM lead qualification.",
    problem: "Clinics and customer service teams lose high-value inbound inquiries during peak hours or after business hours, while human receptionists spend 70% of their time answering repetitive inquiries.",
    intendedUsers: [
      "Healthcare Clinics & Dental Practices",
      "Customer Support & Dispatch Desks",
      "Real Estate & Property Management Offices",
      "Inbound Sales Qualification Teams"
    ],
    techStack: ["Bolna Runtime", "Retell AI", "AWS EC2", "Docker Compose", "RAG / Vectors", "PostgreSQL"],
    accentColor: "hsl(262, 83%, 62%)",
    thumbnail: "assets/projects/voice-agent/Screenshot 2026-10-10 223448.png",
    heroImage: "assets/projects/voice-agent/Screenshot 2026-10-10 223448.png",
    liveDemoUrl: "http://16.171.54.58:3000/",
    githubLink: "https://github.com/Raunaksharmaq64",
    caseStudyId: "voice-agent",
    status: "Verified Live (Port 3000 Deployment)",
    workflow: "Inbound Telephony Webhook → Voice Activity Detection → LLM Context Engine (RAG) → Neural TTS Stream → Execution Recording Sync",
    challenges: "Minimizing acoustic latency under 800ms and reconciling delayed external transcripts with persistent call records."
  },
  {
    id: "whatsapp-automation",
    name: "WhatsApp Automation Agent",
    title: "WhatsApp Automation Agent — Business Messaging & Clinical OS",
    badge: "Messaging & Clinical Automation",
    category: "featured",
    tagline: "Customer messaging, rule-based chatbots, and healthcare OPD workflows.",
    cardDescription: "Multi-tenant automation system with direct QR device pairing, configurable keyword auto-replies, and a specialized Clinical OS for 24/7 doctor OPD scheduling.",
    summary: "Multi-tenant automation system with direct QR device pairing, configurable keyword auto-replies, and a specialized Clinical OS for 24/7 doctor OPD scheduling.",
    description: "A dual-architecture WhatsApp business communication platform. Features a multi-client campaign and broadcast engine paired with a specialized healthcare Clinical OS that handles doctor appointment scheduling, patient intake, and automated reminders 24/7.",
    problem: "Small businesses and independent medical clinics lose prospective bookings due to slow response times on WhatsApp, lack of structured conversation records, and missed appointment no-shows.",
    intendedUsers: [
      "Outpatient Clinics & Hospital Reception Desks",
      "D2C Brands managing WhatsApp inquiries",
      "Service Businesses scheduling appointments",
      "Customer Support Operators"
    ],
    techStack: ["Node.js", "Express", "WhatsApp Web QR", "Kanban CRM", "EJS / Tailwind", "AWS EC2"],
    accentColor: "hsl(142, 70%, 45%)",
    thumbnail: "assets/projects/whatsapp-automation/04_dashboard_overview.png",
    heroImage: "assets/projects/whatsapp-automation/04_dashboard_overview.png",
    liveDemoUrl: "https://myraisedin.com",
    githubLink: "https://github.com/Raunaksharmaq64",
    caseStudyId: "whatsapp-automation",
    status: "Verified Live (Custom Domain & AWS)",
    workflow: "Client Device QR Authentication → Inbound Webhook Parsing → Rule Engine Matching → State Machine Booking Flow → Kanban Record Sync",
    challenges: "Maintaining active session state across server restarts and avoiding message delivery deadlocks during concurrent broadcast jobs."
  }
];

export const projectsData = [
  {
    id: "hostelbuddy",
    title: "HostelBuddy — Find Your Perfect Stay",
    category: "fullstack",
    categoryLabel: "Full-Stack Development",
    featured: true,
    thumbnail: "assets/projects/standard/hostelbuddy.svg",
    tagline: "Connecting students and professionals with verified PG/Hostels.",
    cardDescription: "A full-stack discovery platform connecting students and professionals with verified hostels and PG accommodations without middlemen or broker fees.",
    description: "A comprehensive full-stack platform designed to connect students and working professionals with verified hostels and PG accommodations in Bhopal and surrounding educational hubs. Eliminates unfair brokerage fees and guarantees verified listing details.",
    problem: "College students relocating to new cities face deceptive property listings, lack of transparent rent pricing, and exorbitant brokerage fees charged by intermediaries.",
    intendedUsers: [
      "College & University Students",
      "Young Working Professionals",
      "Hostel & PG Property Owners",
      "Campus Accommodation Coordinators"
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "HTML5", "CSS3", "JavaScript (ES6+)"],
    keyFeatures: [
      "Smart multi-criteria search filtering by budget, gender specification, location, and amenities.",
      "Direct owner contact channel routing enquiries straight to verified property hosts.",
      "High-resolution image galleries showcasing room tiers, mess facilities, and safety infrastructure.",
      "Genuine student rating & review system to hold property managers accountable.",
      "Administrative dashboard for property background verification and listing moderation.",
      "Accompanied by a native Android APK build for seamless mobile access."
    ],
    workflow: "Client Search Query → Express API Filtering → MongoDB Aggregation → Property Profile Render → Direct Enquiry Routing",
    challenges: "Designing multi-criteria MongoDB search indexes that handle dynamic budget ranges and multiple amenity flags without query slowdowns.",
    liveLink: "https://hostel-buddy-ww6g.onrender.com/",
    githubLink: "https://github.com/Raunaksharmaq64",
    status: "Live on Render"
  },
  {
    id: "aura-perfume",
    title: "AURA — Perfume Customizer & Olfactory Synthesizer",
    category: "fullstack",
    categoryLabel: "Full-Stack Development",
    featured: true,
    thumbnail: "assets/projects/standard/aura-perfume.svg",
    tagline: "Custom olfactory notes compositions synthesizer & interactive shop.",
    cardDescription: "An interactive luxury fragrance customizer allowing users to design perfume bottles and synthetically mix olfactory accords with real-time Web Audio API resonance.",
    description: "A sensory e-commerce web application exploring generative audio-visual customization for luxury perfumes. Features a real-time canvas bottle customizer and an olfactory resonator that plays synthesized audio harmonics representing fragrance note compositions.",
    problem: "Online fragrance purchasing is traditionally detached and passive, lacking any visual personalization or sensory simulation of how scent notes balance together.",
    intendedUsers: [
      "Boutique Fragrance Brands",
      "Luxury E-Commerce Shoppers",
      "Creative Web Experience Enthusiasts",
      "Aesthetic Lifestyle Connoisseurs"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript (Vanilla)", "Canvas API", "Web Audio API"],
    keyFeatures: [
      "Real-time 2D Canvas Perfume Bottle Customizer: Configures cap materials, metal collar finishes, glass tinting, and bespoke laser typography.",
      "Olfactory Resonator & Synthesizer: Generates acoustic frequencies and dynamic radar-chart graphs corresponding to scent pyramid notes (Mint, Bergamot, Lavender, Rose, Sandalwood, Amber, Oud, Musk).",
      "Curated E-Commerce Catalog: Showcases 'The Collection' with instant cart additions.",
      "Dynamic in-browser shopping bag with checkout summary calculations.",
      "Custom audio synthesizer node controls with envelope filtering."
    ],
    workflow: "Bottle Canvas Customization → AudioContext Frequency Synthesis → Radar Note Vector Render → Cart State Pipeline",
    challenges: "Building smooth Canvas API bottle layer compositing while synchronizing Web Audio oscillators to user interaction sliders without audio clicks or clipping.",
    liveLink: "https://raunaksharmaq64.github.io/perfumes-/",
    githubLink: "https://github.com/Raunaksharmaq64/perfumes-",
    status: "Live on GitHub Pages"
  },
  {
    id: "sonicstream",
    title: "SonicStream — Audio Streaming Web App",
    category: "fullstack",
    categoryLabel: "Full-Stack Development",
    featured: true,
    thumbnail: "assets/projects/standard/sonicstream.svg",
    tagline: "A Spotify-inspired premium audio streaming web application.",
    cardDescription: "A lightweight, in-browser music streaming platform loaded with curated motivational and trending Hindi audio tracks, featuring real-time search and playback controls.",
    description: "A Spotify-inspired, responsive audio streaming web application loaded with popular Hindi and motivational tracks. Built to deliver zero-lag playback, instant search filtering, and clean library management directly within the browser.",
    problem: "Most streaming platforms require heavy client applications, persistent logins, and subscription barriers for casual listening sessions during study or coding.",
    intendedUsers: [
      "Students & Developers needing background focus music",
      "Casual listeners looking for lightweight web streaming",
      "Frontend UI/UX enthusiasts studying media controls"
    ],
    techStack: ["HTML5", "CSS3 (Modern UI Layout)", "JavaScript", "Web Audio API"],
    keyFeatures: [
      "Custom Audio Player Dashboard: Full playback controls including play, pause, skip, previous, shuffle, repeat, and seekable progress bar.",
      "Real-time Instant Search Filter: Matches track titles or artist names as the user types with zero latency.",
      "Structured Multi-View Navigation: Sidebar sections for Explore, Library, and Favorites playlists.",
      "Volume slider with visual mute toggle and smooth gain transitions.",
      "Settings menu enabling instant client playback cache and history resets."
    ],
    workflow: "Audio Asset Preloading → Custom HTML5 Audio API Controller → Dynamic Waveform State → Live Filter Matching",
    challenges: "Accurately synchronizing the custom seekable progress bar with variable audio buffer states and preventing UI stutter during track transitions.",
    liveLink: "https://raunaksharmaq64.github.io/raunak_stream/",
    githubLink: "https://github.com/Raunaksharmaq64/raunak_stream",
    status: "Live on GitHub Pages"
  },
  {
    id: "hotel-web",
    title: "Hotel Booking System (Web)",
    category: "fullstack",
    categoryLabel: "Full-Stack Development",
    featured: true,
    thumbnail: "assets/projects/standard/hotel-web.svg",
    tagline: "Modern, responsive full-stack reservations engine.",
    cardDescription: "A full-stack hotel management and booking system showcasing dynamic reservations, live room availability checks, and customer status tracking.",
    description: "A full-stack reservation system designed to provide boutique hospitality businesses with an independent online booking portal. Handles room availability calendars, booking verification, and responsive customer-facing accommodation selection.",
    problem: "Independent hotels lose substantial revenue to high commission rates charged by online travel aggregators and struggle with double-booking when relying on manual reservation sheets.",
    intendedUsers: [
      "Boutique Hotel Owners & Front Desk Staff",
      "Travelers seeking direct hotel booking rates",
      "Hospitality Management Students"
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "HTML5", "CSS3", "JavaScript"],
    keyFeatures: [
      "Interactive Room Browsing: Detailed room specifications, bed configurations, and amenity badges.",
      "Live Room Availability Checks: Verifies dates against existing booking records to prevent room conflicts.",
      "Dynamic Booking Engine: Immediate reservation creation with status reference codes.",
      "Responsive Guest Interface: Optimized for mobile booking workflows and desktop browsing.",
      "Admin booking ledger for checking guest arrival status."
    ],
    workflow: "Guest Date Selection → Express Validation Middleware → MongoDB Date Collision Query → Reservation Record Creation",
    challenges: "Implementing date range collision logic in MongoDB queries to ensure two guests cannot book the same room for overlapping dates.",
    liveLink: "https://hotel-booking-demo-1.onrender.com",
    githubLink: "https://github.com/Raunaksharmaq64/hotel_booking_demo",
    status: "Live on Render"
  },
  {
    id: "hotel-java",
    title: "Hotel Management System (Java)",
    category: "java",
    categoryLabel: "Java & Database Systems",
    featured: false,
    thumbnail: "assets/projects/standard/hotel-java.svg",
    tagline: "Enterprise database-driven system to manage room bookings.",
    cardDescription: "An enterprise-grade Java application utilizing JDBC and SQL for managing hotel guest records, room occupancy metrics, and staff allocations.",
    description: "An enterprise-ready command-line and database-driven software suite to manage hotel rooms, guests, and administrative tasks. Built in Core Java with strict JDBC transaction controls and normalized SQL tables.",
    problem: "Offline hospitality operations require reliable, fast local transaction recording that does not depend on cloud uptime and guarantees ACID transactional safety for billing.",
    intendedUsers: [
      "Hotel Desk Managers & System Operators",
      "Java Enterprise Software Students",
      "Database Administrators practicing ACID transaction logic"
    ],
    techStack: ["Java (Core)", "SQL", "JDBC Connectors"],
    keyFeatures: [
      "Room Management Database: Tracks check-in timestamps, check-out procedures, room statuses, and occupancy rates.",
      "Guest Information Subsystem: Stores guest identification details, contact records, and historical stay logs.",
      "Staff Allocation Module: Assigns duty rosters, maintenance tickets, and administrative access privileges.",
      "Secure JDBC Layer: Parameterized SQL executions preventing syntax injection and guaranteeing data integrity.",
      "Comprehensive Reporting: Generates billings, occupancy summaries, and revenue statistics."
    ],
    workflow: "CLI Operator Input → Java Business Logic Validation → JDBC Driver Connection → SQL Transaction Execution → Commit / Rollback",
    challenges: "Handling proper SQL connection closure and transaction rollbacks during multi-table checkout operations to avoid database locks and orphaned records.",
    liveLink: "",
    githubLink: "https://github.com/Raunaksharmaq64",
    status: "Verified Repository Codebase"
  },
  {
    id: "java-games",
    title: "Java Projects & Console Games",
    category: "java",
    categoryLabel: "Java & Database Systems",
    featured: false,
    thumbnail: "assets/projects/standard/java-games.svg",
    tagline: "OOP concept challenges written in Core Java.",
    cardDescription: "A suite of interactive terminal games and productivity programs developed to master Object-Oriented Programming (OOP), state machines, and concurrency.",
    description: "A hands-on collection of interactive terminal games and software utilities developed to master core OOP concepts, state machine architectures, input validation, and algorithm optimization in Java.",
    problem: "Mastering complex software design patterns and memory models requires building rigorous state machines and game loops from scratch rather than relying on high-level frameworks.",
    intendedUsers: [
      "Computer Science Students & Peer Developers",
      "OOP & Java Architecture Evaluators",
      "Terminal Game Enthusiasts"
    ],
    techStack: ["Java (Core OOP)", "Collections Framework", "Concurrency"],
    keyFeatures: [
      "Interactive Console Game Suite: Multiple playable terminal games emphasizing clean control loops and state management.",
      "Strict OOP Architecture: Rigorous implementation of inheritance hierarchies, interfaces, encapsulation, and runtime polymorphism.",
      "Defensive Input Processing: Robust exception handling guarding against invalid keystrokes and type mismatches.",
      "Modular Code Structure: Separation of game entities, display renderers, and game state controllers.",
      "Utility Tools: Integrated terminal tools for math simulations and text processing."
    ],
    workflow: "User Terminal Input → Scanner Validation → State Machine Transition → Game Logic Update → Console Frame Render",
    challenges: "Architecting a modular game loop that manages entity state transitions cleanly without spaghetti code or memory leaks in terminal buffers.",
    liveLink: "",
    githubLink: "https://github.com/Raunaksharmaq64/java-games-and-projects",
    status: "Verified GitHub Repository"
  },
  {
    id: "jdbc-projects",
    title: "JDBC Projects & Database Connectors",
    category: "java",
    categoryLabel: "Java & Database Systems",
    featured: false,
    thumbnail: "assets/projects/standard/jdbc-projects.svg",
    tagline: "Advanced Java communication connectors for SQL integrations.",
    cardDescription: "Advanced Java database connectivity modules demonstrating PreparedStatement security, connection lifecycle management, and CRUD transaction safety.",
    description: "An advanced implementation suite demonstrating Java-to-SQL communication interfaces, transaction management, connection pooling concepts, and robust error recovery.",
    problem: "Real-world database applications frequently suffer from SQL injection vulnerabilities, resource leaks from unclosed ResultSets, and broken transactions when handled naively.",
    intendedUsers: [
      "Backend Java Developers",
      "Database Systems Engineers",
      "Software Engineering Recruiters assessing database fundamentals"
    ],
    techStack: ["Java", "SQL", "JDBC", "PostgreSQL", "MySQL"],
    keyFeatures: [
      "Comprehensive CRUD Modules: Standardized Create, Read, Update, and Delete models for relational datasets.",
      "PreparedStatement Security: Parameterized query templates guaranteeing protection against SQL Injection attacks.",
      "Transaction Management: Explicit commit/rollback demarcation for multi-step atomic operations.",
      "Batch Processing: High-performance batch updates optimizing network roundtrips to the database.",
      "Graceful Resource Teardown: Try-with-resources implementation ensuring clean database socket cleanup."
    ],
    workflow: "Java Application Model → PreparedStatement Parameter Binding → JDBC Driver Execution → SQL Result Processing → Connection Pool Release",
    challenges: "Managing multi-table relational foreign key constraints and guaranteeing atomic rollbacks if an error occurs mid-transaction.",
    liveLink: "",
    githubLink: "https://github.com/Raunaksharmaq64/JDBC_PROJECTS",
    status: "Verified GitHub Repository"
  },
  {
    id: "dsa-visualizer",
    title: "DSA Visualizer",
    category: "java",
    categoryLabel: "Java & Database Systems",
    featured: false,
    thumbnail: "assets/projects/standard/dsa-visualizer.svg",
    tagline: "Swing GUI to model data structures and sorting behaviors.",
    cardDescription: "A desktop GUI application built in Java Swing to visually animate sorting algorithms and data structure operations in real time.",
    description: "An interactive desktop visualization tool built using Java Swing to visually animate classic Data Structures and Algorithms. Helps students and developers grasp algorithmic complexity through dynamic step-by-step graphic representation.",
    problem: "Abstract sorting algorithms like MergeSort, QuickSort, and tree operations are difficult to understand purely from mathematical pseudocode without visual step-by-step rendering.",
    intendedUsers: [
      "Computer Science Students preparing for technical interviews",
      "Educators demonstrating algorithm behavior",
      "Visual learners in Data Structures courses"
    ],
    techStack: ["Java (Core)", "Java Swing (GUI)", "Multi-Threading"],
    keyFeatures: [
      "Interactive Sorting Visualizations: Animates Bubble Sort, Selection Sort, Insertion Sort, and QuickSort operations in real time.",
      "Customizable Speed & Controls: Play, pause, step-forward, and variable animation speed sliders.",
      "Dynamic Bar Chart Graphic Engine: Visualizes element swaps with color-coded comparison and pivot markers.",
      "Clean Swing Layout: Desktop frame with dedicated controls and parameter configuration panels.",
      "Multi-Threaded Rendering: Separates computation logic from the Swing Event Dispatch Thread (EDT) for fluid UI responsiveness."
    ],
    workflow: "User Selects Algorithm → Java Worker Thread Computes Steps → Swing EDT Re-paints Canvas with Color Flags → User Observes Execution",
    challenges: "Preventing Swing UI freezing during long-running sorting loops by delegating execution to background worker threads while cleanly marshaling repaint calls back to the EDT.",
    liveLink: "",
    githubLink: "https://github.com/Raunaksharmaq64/Java_files",
    status: "Verified GitHub Repository"
  },
  {
    id: "fashion-store",
    title: "Number One Fashion Point",
    category: "frontend",
    categoryLabel: "Frontend & UI Experience",
    featured: false,
    thumbnail: "assets/projects/standard/fashion-store.svg",
    tagline: "Streetwear hub featuring catalog grids and checkout via WhatsApp.",
    cardDescription: "A streetwear retail e-commerce website with an interactive product catalog, client-side shopping cart, and automatic WhatsApp order dispatch.",
    description: "A commercial storefront website designed for a Bhopal streetwear boutique. Combines an urban apparel catalog with an intuitive shopping cart and automated WhatsApp checkout that forwards order breakdowns directly to the store manager.",
    problem: "Local retail fashion boutiques struggle to maintain expensive payment gateway setups while customers prefer fast, direct communication and ordering via WhatsApp.",
    intendedUsers: [
      "Streetwear & Apparel Shoppers",
      "Local Clothing Boutique Owners",
      "Mobile-First Retail Customers"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript (ES6)", "FontAwesome"],
    keyFeatures: [
      "Interactive Product Catalog: Showcases apparel categories including cargo trousers, denim, jackets, and oversized tees.",
      "Client-Side Shopping Cart: Allows users to add items, change quantities, and preview totals with persistent local state.",
      "Automated WhatsApp Checkout: Generates formatted order strings containing items, sizes, quantities, and totals, opening WhatsApp directly.",
      "Store Location Mapping & Contact: Google Maps integration and store hours information.",
      "Interactive Testimonials & Newsletter Subscription Section."
    ],
    workflow: "Browse Apparel Catalog → Add to In-Browser Cart → Click Checkout → Auto-Format URL Encoded Message → Launch WhatsApp with Order Details",
    challenges: "Constructing URL-encoded multi-line order strings containing special characters and pricing that parse reliably across WhatsApp Web, Android, and iOS clients.",
    liveLink: "https://raunaksharmaq64.github.io/Number-one-fashion-/",
    githubLink: "https://github.com/Raunaksharmaq64/Number-one-fashion-",
    status: "Live on GitHub Pages"
  },
  {
    id: "food-cafe",
    title: "Flavour Symphony — Restaurant & Cafe",
    category: "frontend",
    categoryLabel: "Frontend & UI Experience",
    featured: false,
    thumbnail: "assets/projects/standard/food-cafe.svg",
    tagline: "Gourmet dining restaurant presentation page.",
    cardDescription: "A luxury dining and cafe showcase website highlighting artisan menus, animated hospitality statistics, and table reservation workflows.",
    description: "A luxury restaurant and cafe presentation website showcasing artisan dining experiences, chef specials, and atmosphere galleries. Built with rich typography, animated counters, and table booking reservation workflows.",
    problem: "Upscale dining venues require an evocative digital presence that conveys culinary sophistication and captures table reservations without friction.",
    intendedUsers: [
      "Fine Dining Patrons & Cafe Guests",
      "Restaurant Owners & Hospitality Groups",
      "Event Organizers booking private dining"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Google Fonts"],
    keyFeatures: [
      "Artisan Food Menu: Visually categorized culinary showcase highlighting signature dishes (Royal Thali, Wagyu Burger, Chocolate Symphony).",
      "Interactive Statistics Counters: Animated numerical counters for Years of Excellence, Happy Guests, and Rating metrics.",
      "Table Reservation Form: Intuitive booking form capturing party size, preferred time, and dietary requests.",
      "Live Order Intent Simulation: Toast notification demonstrating real-time guest booking activity.",
      "Atmospheric photography grid with responsive layout."
    ],
    workflow: "Guest Visits Page → Scroll-Triggered Animated Counters → Explores Categorized Menu → Submits Reservation Booking Request",
    challenges: "Orchestrating smooth IntersectionObserver counters that trigger only when scrolled into view without performance degradation on mobile devices.",
    liveLink: "https://raunaksharmaq64.github.io/food-cafe/",
    githubLink: "https://github.com/Raunaksharmaq64/food-cafe",
    status: "Live on GitHub Pages"
  },
  {
    id: "velore",
    title: "VELORÉ — Luxury Skincare & Cosmetics",
    category: "frontend",
    categoryLabel: "Frontend & UI Experience",
    featured: false,
    thumbnail: "assets/projects/standard/velore.svg",
    tagline: "Luxury skincare catalog and member registration portal.",
    cardDescription: "An opulent skincare e-commerce showcase featuring premium botanical product catalogs, slide-out cart drawers, and user auth modals.",
    description: "A luxury skincare and fragrance e-commerce landing page presenting premium items, botanical ingredients, and members-only privileges. Crafted with an obsidian-and-gold visual identity, slide-out cart drawer, and interactive user authentication modals.",
    problem: "Prestige beauty brands require an opulent online identity that establishes ingredient authenticity and brand exclusivity to convert high-ticket sales.",
    intendedUsers: [
      "Luxury Skincare & Cosmetics Buyers",
      "High-End Beauty Brand Marketers",
      "UI/UX Designers studying luxury branding"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript (Vanilla)"],
    keyFeatures: [
      "Prestige Product Catalog: Highlights products like Botanical Renewal Cream and Aqua Hydrating Serum with ingredient notes and prices.",
      "Slide-Out Shopping Cart: Off-canvas drawer allowing instant cart inspection and checkout summary.",
      "Authentication Flow Modals: Interactive popup dialogs for User Sign In, Registration, and Password Reset.",
      "Obsidian & Gold Aesthetics: Curated typography, refined spacing, and subtle hover interactions.",
      "Mobile-optimized touch targets and responsive product grids."
    ],
    workflow: "Browse Botanical Catalog → Toggle Product Quick-View → Add to Slide-Out Cart → Access Member Authentication Modal",
    challenges: "Building an accessible off-canvas drawer and modal system that traps keyboard focus and closes cleanly on Escape or backdrop click.",
    liveLink: "https://raunaksharmaq64.github.io/cosmetic-E-commers/",
    githubLink: "https://github.com/Raunaksharmaq64/cosmetic-E-commers",
    status: "Live on GitHub Pages"
  },
  {
    id: "vaishali-asi",
    title: "Remains of Ancient Vaishali, Kolhua (ASI)",
    category: "frontend",
    categoryLabel: "Frontend & UI Experience",
    featured: false,
    thumbnail: "assets/projects/standard/vaishali-asi.svg",
    tagline: "Informational archaeological ruins ASI clone.",
    cardDescription: "An informational cultural heritage showcase based on the Archaeological Survey of India, featuring bilingual translation and an interactive audio guide.",
    description: "An informational digital heritage showcase modeled after the Archaeological Survey of India (ASI) documenting the ancient historical ruins of Vaishali, Kolhua. Features an interactive audio guide and a bilingual Hindi/English layout switcher.",
    problem: "Cultural heritage sites frequently lack engaging online guides with multimedia narration and bilingual accessibility for tourists and researchers.",
    intendedUsers: [
      "History Students & Academic Researchers",
      "Tourists & Archaeological Enthusiasts",
      "Heritage Preservation Organizations"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "HTML5 Audio API"],
    keyFeatures: [
      "Interactive Audio Guide: Integrated native audio player providing narrated speech guides detailing the site's historical significance.",
      "Bilingual Language Switcher: Toggles the complete layout, text content, and headings between Hindi and English.",
      "Excavation Photo Carousel: Interactive slider showcasing historical artifacts, stupas, and archaeological findings.",
      "Historical Documentation: In-depth records concerning the Ashokan Pillar, ancient brick stupas, and official ASI publications.",
      "Responsive accessibility-first layout honoring government cultural portal aesthetics."
    ],
    workflow: "Language Selection → Dynamic DOM Translation Switch → Audio Guide Stream → Historical Monument Carousel Exploration",
    challenges: "Implementing a clean client-side dictionary switcher that dynamically translates headings, paragraphs, and captions without layout breaks or content flashing.",
    liveLink: "https://raunaksharmaq64.github.io/Archeological-department-webpage-clone/",
    githubLink: "https://github.com/Raunaksharmaq64/Archeological-department-webpage-clone",
    status: "Live on GitHub Pages"
  },
  {
    id: "aurelia-house",
    title: "Aurelia House — Boutique Suites",
    category: "frontend",
    categoryLabel: "Frontend & UI Experience",
    featured: false,
    thumbnail: "assets/projects/standard/aurelia-house.svg",
    tagline: "Boutique hotel suites presentation & lookbook page.",
    cardDescription: "An architectural boutique hotel landing page showcasing interior suites, lookbooks, philosophy sections, and booking actions.",
    description: "A premium boutique hotel landing page detailing luxury suites, architectural craftsmanship, and guest experiences. Incorporates an editorial modular lookbook and smooth-scrolling section narratives.",
    problem: "Independent boutique hotels need an architectural, editorial visual presentation that differentiates them from generic commercial hotel chains.",
    intendedUsers: [
      "Luxury Travelers & Boutique Hotel Guests",
      "Architectural Design Admirers",
      "Hospitality Brand Marketers"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    keyFeatures: [
      "Modular Interior Lookbook: Curated photography layouts highlighting structural highlights and interior design.",
      "Suite Breakdown: Interactive cards detailing suite tiers (Grand Horizon Penthouse, Courtyard Sanctuary, Oasis Studio).",
      "Smooth Narrative Navigation: Explores brand philosophy, wellness programs, and dining amenities.",
      "Responsive Booking Call-to-Action: Elegant reservation triggers with seamless screen responsiveness.",
      "Minimalist typography and balanced whitespace."
    ],
    workflow: "Editorial Hero Section → Modular Lookbook Showcase → Suite Tier Selection → Direct Booking Inquiry",
    challenges: "Balancing high-resolution architectural imagery with fast page loading times and maintaining proportional aspect ratios across all device viewports.",
    liveLink: "https://raunaksharmaq64.github.io/hotels-sample/",
    githubLink: "https://github.com/Raunaksharmaq64/hotels-sample",
    status: "Live on GitHub Pages"
  },
  {
    id: "pratham-malviya",
    title: "Pratham Malviya — Video Editor Portfolio",
    category: "frontend",
    categoryLabel: "Frontend & UI Experience",
    featured: false,
    thumbnail: "assets/projects/standard/pratham-malviya.svg",
    tagline: "Dark design showreel presentation for a video editor.",
    cardDescription: "A sleek, dark-themed personal portfolio showcasing cinematic video editing showreels, client commercial stories, and engagement analytics.",
    description: "A sleek, dark-themed personal portfolio built for a professional video editor and creative director. Features an embedded cinematic showreel, brand client project case studies, and video engagement metric statistics.",
    problem: "Creative video editors need a high-impact, visual-first online portfolio that highlights video pacing, client work, and viral reach without distractions.",
    intendedUsers: [
      "Commercial Video Editors & Motion Designers",
      "Brand Shoot Directors & Content Creators",
      "Prospective Advertising Clients & Marketing Agencies"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    keyFeatures: [
      "High-Performance Showreel Player: Integrated video preview showcasing editing accomplishments with responsive scaling.",
      "Brand Client Stories Catalog: Features past commercial edits for clients like Cafe Roast, Threads & Hues Studio, and Iron & Razor Parlor.",
      "Engagement Statistics Counters: Highlights metrics including view counts, project deliveries, and client retention.",
      "Dark Cinematic Aesthetic: Tailored color palette with high-contrast typography and media focus.",
      "Direct Booking & Collaboration Form: Streamlined contact channel for new client inquiries."
    ],
    workflow: "Cinematic Hero → Video Showreel Player → Commercial Client Stories → Video Analytics Display → Project Inquiries",
    challenges: "Ensuring embedded video players load efficiently without blocking critical rendering paths or overflowing container widths on mobile screens.",
    liveLink: "https://raunaksharmaq64.github.io/pratham-malviya/",
    githubLink: "https://github.com/Raunaksharmaq64/pratham-malviya",
    status: "Live on GitHub Pages"
  },
  {
    id: "personal-portfolio",
    title: "Personal Space Developer Portfolio",
    category: "frontend",
    categoryLabel: "Frontend & UI Experience",
    featured: false,
    thumbnail: "assets/projects/standard/personal-portfolio.svg",
    tagline: "Interactive digital space highlighting skills and creations.",
    cardDescription: "An interactive portfolio environment featuring an executable developer console terminal with mini-games, dynamic themes, and comprehensive project showcasing.",
    description: "The core developer portfolio showcasing all projects, certifications, and skills. Highlights interactive engineering through an executable developer terminal with mini-games, dynamic visitor greeting, resume generation, and 3D tilt cards.",
    problem: "Standard static resume websites fail to demonstrate an engineer's interactive programming capability, attention to detail, and personality.",
    intendedUsers: [
      "Technical Recruiters & Hiring Managers",
      "Engineering Leads evaluating candidate portfolios",
      "Developer Community Members"
    ],
    techStack: ["React 18", "Vite", "JavaScript", "CSS3 Animations"],
    keyFeatures: [
      "Developer Terminal Console CLI: Executable terminal supporting commands like 'matrix', 'game', 'hire', 'weather', 'projects', and 'casestudy'.",
      "Dynamic Visitor Welcome: Personalizes the experience by greeting visitors with local storage memory.",
      "Dark & Light Theme Switcher: Persistent color system honoring high-contrast obsidian and clean daylight aesthetics.",
      "Automated Playwright E2E Tests: Continuous quality assurance validating responsiveness across 16 device viewports.",
      "Interactive Background Canvas & 3D Tilt Card interactions."
    ],
    workflow: "Visitor Arrival → LocalStorage Recognition → Interactive Showcase Exploration → CLI Console Commands → Story-Driven Case Studies",
    challenges: "Building a full terminal emulator with history tracking, autocompletion, and mini-games without external CLI libraries or bloated dependencies.",
    liveLink: "https://raunaksharmaq64.github.io/portfolio/",
    githubLink: "https://github.com/Raunaksharmaq64/my-portfolieo-website",
    status: "Live on GitHub Pages"
  },
  {
    id: "prandium-lux",
    title: "The Prandium Lux — Gastronomy Portfolio",
    category: "frontend",
    categoryLabel: "Frontend & UI Experience",
    featured: false,
    thumbnail: "assets/projects/standard/prandium-lux.svg",
    tagline: "Bespoke hotel and premium fine-dining showcase layout.",
    cardDescription: "A visual-first luxury restaurant showcase with fluid parallax backgrounds, artisan menu breakdowns, and table booking reservation mockups.",
    description: "A visual-first portfolio website tailored for luxury restaurants and hotel dining services. Utilizes fluid parallax backgrounds, elegant typography, and a structured food & beverage menu showcase.",
    problem: "Michelin-caliber and luxury dining venues need a digital atmosphere that matches their physical hospitality standard.",
    intendedUsers: [
      "Gourmet Diners & Wine Enthusiasts",
      "Luxury Hotel Food & Beverage Directors",
      "Culinary Journalists & Event Planners"
    ],
    techStack: ["HTML5", "CSS3 (Parallax)", "JavaScript"],
    keyFeatures: [
      "Fluid Parallax Backgrounds: Smooth visual depth transitions as users scroll through dining areas.",
      "Curated Menu Breakdown: Showcases appetizers, main courses, desserts, and cellar wine selections.",
      "Responsive Table Reservation Form: Clean inquiry mockup for private dining reservations.",
      "Elegant Typographic Hierarchy: Crafted using serif display fonts and subdued golden accents.",
      "Mobile-friendly layout with fluid responsive columns."
    ],
    workflow: "Parallax Hero Header → Philosophy Exploration → Course-by-Course Menu Showcase → Reservation Request",
    challenges: "Implementing smooth parallax scroll layers that do not introduce jitter or layout shifts on low-powered mobile browsers.",
    liveLink: "https://raunaksharmaq64.github.io/The-Prandium-Lux/",
    githubLink: "https://github.com/Raunaksharmaq64/The-Prandium-Lux",
    status: "Live on GitHub Pages"
  },
  {
    id: "gym-portfolio",
    title: "Iron Core Fitness — Athletic Club",
    category: "frontend",
    categoryLabel: "Frontend & UI Experience",
    featured: false,
    thumbnail: "assets/projects/standard/gym-portfolio.svg",
    tagline: "Athletic aesthetics fitness mockup.",
    cardDescription: "A high-energy athletic fitness landing page featuring interactive membership tiers, trainer spotlights, and lead-generation call-to-actions.",
    description: "A high-energy, responsive landing page and membership portal mockup built for modern fitness clubs. Features bold athletic branding, membership tier comparisons, and trainer profiles.",
    problem: "Gyms and fitness studios lose potential memberships due to passive websites that lack clear program breakdowns, trainer credibility, and compelling signup triggers.",
    intendedUsers: [
      "Fitness Enthusiasts & Gym Members",
      "Gym Owners & Fitness Studio Managers",
      "Personal Trainers showcasing workout plans"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    keyFeatures: [
      "Conversion-Focused CTA Architecture: Strategic triggers designed to turn casual visitors into gym trial members.",
      "Interactive Membership Tiers: Clear comparison grid detailing Basic, Pro, and Elite membership benefits.",
      "Personal Trainer Showcase: Highlights trainer certifications, specialties, and client transformation records.",
      "Dynamic Schedule Preview: Class schedule table for HIIT, Strength Training, and Yoga sessions.",
      "High-energy dark athletic visual identity with crimson and neon accents."
    ],
    workflow: "Motivational Hero → Workout Programs Grid → Trainer Spotlight → Membership Tier Selection → Free Trial Signup CTA",
    challenges: "Designing an energetic, bold dark-mode layout that remains readable, accessible, and fast on all mobile devices.",
    liveLink: "https://raunaksharmaq64.github.io/GYM_portfolio-/",
    githubLink: "https://github.com/Raunaksharmaq64/GYM_portfolio-website",
    status: "Live on GitHub Pages"
  }
];

export const allProjectsCatalog = [
  ...flagshipProjects.map((p) => ({
    ...p,
    isFlagship: true,
    categoryLabel: "Flagship Product"
  })),
  ...projectsData.map((p) => ({
    ...p,
    isFlagship: false
  }))
];
