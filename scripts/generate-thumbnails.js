import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/assets/projects/standard');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const projects = [
  {
    id: "hostelbuddy",
    title: "HostelBuddy",
    subtitle: "Find Your Perfect Stay",
    category: "Full-Stack Web App",
    badgeColor: "#3b82f6",
    tech: "Node.js • Express • MongoDB",
    icon: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" // home icon
  },
  {
    id: "aura-perfume",
    title: "AURA Synthesizer",
    subtitle: "Custom Perfume & Olfactory Engine",
    category: "Full-Stack / Web Audio",
    badgeColor: "#a855f7",
    tech: "Canvas API • Web Audio • Vanilla JS",
    icon: "M12 2a4 4 0 0 0-4 4c0 1.5.8 2.8 2 3.5V14H8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2V9.5c1.2-.7 2-2 2-3.5a4 4 0 0 0-4-4z"
  },
  {
    id: "sonicstream",
    title: "SonicStream",
    subtitle: "Premium Audio Streaming Web App",
    category: "Full-Stack / Media",
    badgeColor: "#22c55e",
    tech: "HTML5 • CSS3 • Web Audio API",
    icon: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
  },
  {
    id: "hotel-web",
    title: "Hotel Booking System",
    subtitle: "Web Reservations & Room Engine",
    category: "Full-Stack Web App",
    badgeColor: "#3b82f6",
    tech: "Node.js • Express • MongoDB",
    icon: "M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"
  },
  {
    id: "hotel-java",
    title: "Hotel Management (Java)",
    subtitle: "Enterprise JDBC Booking Software",
    category: "Java & SQL Systems",
    badgeColor: "#f59e0b",
    tech: "Java • SQL • JDBC Transactions",
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
  },
  {
    id: "java-games",
    title: "Java Projects & Arcade",
    subtitle: "OOP State Machines & Console Games",
    category: "Java Software",
    badgeColor: "#f59e0b",
    tech: "Core Java • OOP Architecture",
    icon: "M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-3c-.83 0-1.5-.67-1.5-1.5S17.67 9 18.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
  },
  {
    id: "jdbc-projects",
    title: "JDBC Connectors Suite",
    subtitle: "PreparedStatements & SQL Layer",
    category: "Database Systems",
    badgeColor: "#f59e0b",
    tech: "Java • JDBC • PostgreSQL • MySQL",
    icon: "M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm0 2.5c4.14 0 8 1.34 8 2s-3.86 2-8 2-8-1.34-8-2 3.86-2 8-2zm0 15c-4.14 0-8-1.34-8-2v-2.12c1.93 1.05 4.81 1.62 8 1.62s6.07-.57 8-1.62V17.5c0 .66-3.86 2-8 2z"
  },
  {
    id: "dsa-visualizer",
    title: "DSA Visualizer",
    subtitle: "Algorithm Animations & Sorting GUI",
    category: "Java GUI / Algorithms",
    badgeColor: "#f59e0b",
    tech: "Java • Swing GUI • Threading",
    icon: "M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"
  },
  {
    id: "fashion-store",
    title: "Number One Fashion",
    subtitle: "Streetwear Catalog & WhatsApp Cart",
    category: "Frontend & E-Commerce",
    badgeColor: "#10b981",
    tech: "HTML5 • CSS3 • JavaScript • WhatsApp API",
    icon: "M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zm10 15H4V8h16v11z"
  },
  {
    id: "food-cafe",
    title: "Flavour Symphony",
    subtitle: "Artisan Dining & Reservation Portal",
    category: "Frontend UI Experience",
    badgeColor: "#10b981",
    tech: "HTML5 • CSS3 • JS • Google Fonts",
    icon: "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"
  },
  {
    id: "velore",
    title: "VELORÉ Luxury Skincare",
    subtitle: "Opulent Cosmetics Catalog & Portal",
    category: "Frontend & E-Commerce",
    badgeColor: "#10b981",
    tech: "HTML5 • Modern CSS3 • JavaScript",
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
  },
  {
    id: "vaishali-asi",
    title: "Ancient Vaishali Ruins",
    subtitle: "Archaeological Audio Guide & Dual-Lang",
    category: "Cultural Heritage Showcase",
    badgeColor: "#10b981",
    tech: "HTML5 • CSS3 • Native Audio API",
    icon: "M12 1L3 5v2h18V5L12 1zm0 3.5L6.5 6h11L12 4.5zM4 9v9h3V9H4zm6 0v9h3V9h-3zm6 0v9h3V9h-3zM2 20v2h20v-2H2z"
  },
  {
    id: "aurelia-house",
    title: "Aurelia House",
    subtitle: "Boutique Hotel Lookbook & Suites",
    category: "Frontend Architecture Showcase",
    badgeColor: "#10b981",
    tech: "HTML5 • CSS3 • JavaScript Lookbook",
    icon: "M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14h2v-2h18v2h2V5c0-1.1-.9-2-2-2zm0 12H3V5h18v10z"
  },
  {
    id: "pratham-malviya",
    title: "Pratham Malviya",
    subtitle: "Cinematic Video Editor Portfolio",
    category: "Creator Portfolio",
    badgeColor: "#10b981",
    tech: "HTML5 • CSS3 • Embedded Video API",
    icon: "M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"
  },
  {
    id: "personal-portfolio",
    title: "Personal Space Portfolio",
    subtitle: "Interactive Terminal & 3D Tilt Space",
    category: "Interactive Web Experience",
    badgeColor: "#fbbf24",
    tech: "React 18 • Vite • Custom Console CLI",
    icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"
  },
  {
    id: "prandium-lux",
    title: "The Prandium Lux",
    subtitle: "Visual-First Gastronomic Showcase",
    category: "Frontend UI Experience",
    badgeColor: "#10b981",
    tech: "HTML5 • Parallax CSS • JavaScript",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
  },
  {
    id: "gym-portfolio",
    title: "Iron Core Fitness",
    subtitle: "High-Energy Athletic Membership Portal",
    category: "Frontend Web Landing",
    badgeColor: "#ef4444",
    tech: "HTML5 • Responsive CSS3 • JavaScript",
    icon: "M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"
  }
];

for (const p of projects) {
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
  <defs>
    <radialGradient id="bg-grad-${p.id}" cx="50%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#141a29"/>
      <stop offset="60%" stop-color="#0a0d14"/>
      <stop offset="100%" stop-color="#040609"/>
    </radialGradient>
    <linearGradient id="gold-line" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#d97706" stop-opacity="0.2"/>
      <stop offset="50%" stop-color="#fbbf24" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.2"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="800" height="450" fill="url(#bg-grad-${p.id})"/>
  <rect width="800" height="450" fill="url(#grid)"/>

  <!-- Top Accent Ribbon -->
  <rect x="0" y="0" width="800" height="4" fill="url(#gold-line)"/>

  <!-- Glowing Watermark Icon -->
  <g transform="translate(620, 220) scale(7)" opacity="0.04" fill="#fbbf24">
    <path d="${p.icon}"/>
  </g>

  <!-- Window Frame Card Effect -->
  <rect x="40" y="40" width="720" height="370" rx="14" fill="rgba(15, 23, 42, 0.45)" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>

  <!-- Header Controls -->
  <circle cx="70" cy="70" r="5" fill="#ef4444" opacity="0.8"/>
  <circle cx="88" cy="70" r="5" fill="#eab308" opacity="0.8"/>
  <circle cx="106" cy="70" r="5" fill="#22c55e" opacity="0.8"/>
  <line x1="130" y1="70" x2="730" y2="70" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

  <!-- Category Badge -->
  <rect x="70" y="105" width="180" height="28" rx="14" fill="rgba(251, 191, 36, 0.1)" stroke="${p.badgeColor}" stroke-opacity="0.4" stroke-width="1"/>
  <text x="85" y="124" fill="${p.badgeColor}" font-family="'Space Grotesk', -apple-system, sans-serif" font-size="12" font-weight="700" letter-spacing="0.5">${p.category}</text>

  <!-- Main Icon & Title Group -->
  <g transform="translate(70, 155)">
    <!-- Icon Container -->
    <rect x="0" y="0" width="56" height="56" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(251, 191, 36, 0.25)" stroke-width="1.5"/>
    <g transform="translate(16, 16) scale(1)" fill="#fbbf24">
      <path d="${p.icon}"/>
    </g>

    <!-- Title and Subtitle -->
    <text x="75" y="30" fill="#f8fafc" font-family="'Space Grotesk', -apple-system, sans-serif" font-size="28" font-weight="700" letter-spacing="-0.5">${p.title}</text>
    <text x="75" y="52" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="15" font-weight="400">${p.subtitle}</text>
  </g>

  <!-- Divider Line -->
  <line x1="70" y1="260" x2="730" y2="260" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

  <!-- Tech Stack Terminal Footprint -->
  <g transform="translate(70, 290)">
    <text x="0" y="15" fill="#fbbf24" font-family="'Fira Code', monospace" font-size="12" font-weight="600">TECH ARCHITECTURE</text>
    <rect x="0" y="30" width="660" height="42" rx="8" fill="rgba(3, 7, 18, 0.7)" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    <text x="20" y="56" fill="#cbd5e1" font-family="'Fira Code', monospace" font-size="14">${p.tech}</text>
  </g>
</svg>
`;

  fs.writeFileSync(path.join(outDir, `${p.id}.svg`), svgContent.trim());
}

console.log(`Successfully generated ${projects.length} SVG thumbnails in ${outDir}`);
