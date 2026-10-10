/**
 * Project Categories Taxonomy & Metadata
 * Defines the organization hierarchy for all 20 developer creations.
 */

export const projectCategories = [
  {
    id: "all",
    label: "All Creations",
    shortLabel: "All",
    icon: "fas fa-layer-group",
    description: "Complete catalog of 20 engineering projects spanning full-stack web, AI agents, Java database systems, and interactive UI."
  },
  {
    id: "featured",
    label: "Featured Products",
    shortLabel: "Flagship",
    icon: "fas fa-star",
    badge: "Flagship Tier",
    description: "High-complexity autonomous systems: LeadHunter, AI Voice Agent, and WhatsApp Business Automation with story-driven case studies."
  },
  {
    id: "fullstack",
    label: "Full-Stack Development",
    shortLabel: "Full-Stack",
    icon: "fas fa-laptop-code",
    badge: "APIs & Databases",
    description: "End-to-end web architectures featuring Node.js, Express, MongoDB, Web Audio API, and dynamic booking flows."
  },
  {
    id: "frontend",
    label: "Frontend & UI Experience",
    shortLabel: "Frontend",
    icon: "fab fa-react",
    badge: "Interactive UI/UX",
    description: "Responsive layouts, e-commerce stores, WhatsApp integrations, audio guides, and bespoke portfolios built with modern web technologies."
  },
  {
    id: "java",
    label: "Java & Database Systems",
    shortLabel: "Java & SQL",
    icon: "fab fa-java",
    badge: "JDBC & Desktop GUI",
    description: "Enterprise ACID transaction systems, PreparedStatements SQL connectors, algorithm visualizers, and Core OOP state machines."
  }
];

export const getCategoryMeta = (categoryId) => {
  return projectCategories.find((c) => c.id === categoryId) || {
    id: categoryId,
    label: categoryId,
    shortLabel: categoryId,
    icon: "fas fa-folder",
    badge: "Project"
  };
};
