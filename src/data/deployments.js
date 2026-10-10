/**
 * Central Deployment Registry
 * Contains documented deployments, verified status, and required notices.
 */

export const DEPLOYMENT_DISCLAIMER =
  "Deployment notice: These links and IP addresses reflect previously documented deployments and may no longer be active. An IP address may stop working if an AWS EC2 instance expires, is stopped, is replaced, or its public IP changes, or if the application has been moved to another server or domain. Some deployments may also be temporarily unavailable. If a link does not work, the application may have been redeployed or its infrastructure may have changed.";

export const deploymentsData = {
  leadhunter: [
    {
      label: "LeadHunter Web Application (Vercel)",
      url: "https://miniproject-leadhunter.vercel.app/",
      type: "Vercel SaaS Production",
      status: "Verified reachable",
      lastChecked: "October 2026",
      httpCode: 200,
      note: "Primary client-facing web application with BYOK API vault, Leads Database, and Funnel Analytics.",
    },
  ],
  voiceAgent: [
    {
      label: "Global Elite AI Voice Receptionist (AWS EC2)",
      url: "http://54.91.51.144/",
      type: "AWS EC2 Ubuntu / Docker Compose",
      status: "Verified reachable",
      lastChecked: "October 2026",
      httpCode: 200,
      note: "Direct AWS deployment running AI Voice Receptionist SaaS with Bolna execution engine, Call Logs, RAG Knowledge Base, and CRM Command Center.",
    },
  ],
  whatsappAutomation: [
    {
      label: "Combined Suite: WA + LeadHunter + Gmail (MyRaisedIn)",
      url: "https://myraisedin.com",
      type: "Custom Domain / Cloud Server",
      status: "Verified reachable",
      lastChecked: "October 2026",
      httpCode: 200,
      note: "Full business automation suite combining WhatsApp studio, LeadHunter prospecting, and automated Gmail pipelines.",
    },
    {
      label: "Clinic Healthcare WhatsApp Automation",
      url: "http://16.171.54.58:3000/",
      type: "AWS EC2 Instance (Port 3000)",
      status: "Verified reachable",
      lastChecked: "October 2026",
      httpCode: 200,
      note: "Specialized clinical healthcare deployment handling automated OPD doctor appointments, patient triage, and report dispatches.",
    },
    {
      label: "WhatsApp Automation Core Engine (Catalog & Pay)",
      url: "http://16.192.214.0:3000/",
      type: "AWS EC2 Instance (Port 3000)",
      status: "Verified reachable",
      lastChecked: "October 2026",
      httpCode: 200,
      note: "Multi-tenant business messaging environment featuring product catalog sync and integrated payment checkout.",
    },
    {
      label: "WhatsApp Business Instance (Server 54.167)",
      url: "http://54.167.19.142/",
      type: "AWS EC2 (Port 80)",
      status: "Verified reachable",
      lastChecked: "October 2026",
      httpCode: 200,
      note: "Standalone WhatsApp automation production deployment for business client message routing.",
    },
    {
      label: "WhatsApp Automation Dedicated Host (Server 13.63)",
      url: "http://13.63.126.39:3000/",
      type: "AWS EC2 Instance (Port 3000)",
      status: "Verified reachable",
      lastChecked: "October 2026",
      httpCode: 200,
      note: "Dedicated client deployment environment running business messaging and automated keyword rules.",
    },
  ],
};
