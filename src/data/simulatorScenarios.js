/**
 * Data and scenarios for "Try the Agents Live" (Interactive Agent Playground).
 * All scenarios run safely in-browser with deterministic sample data.
 * Zero external web scraping or live telephony calls are initiated.
 */

export const leadHunterPresets = [
  { business: "Dentist", city: "Bhopal", label: "Dentist • Bhopal" },
  { business: "Roofer", city: "Austin", label: "Roofer • Austin" },
  { business: "HVAC Contractor", city: "Chicago", label: "HVAC • Chicago" },
  { business: "Artisan Cafe", city: "Mumbai", label: "Cafe • Mumbai" }
];

export function generateLeadHunterSimulation(businessType, cityName) {
  const biz = (businessType || "Dentist").trim();
  const city = (cityName || "Bhopal").trim();

  const sampleName = `${city} ${biz} Care & Associates`;
  const domainMock = `www.${biz.toLowerCase().replace(/[^a-z0-9]/g, '')}-${city.toLowerCase().replace(/[^a-z0-9]/g, '')}-sample.com`;

  const auditFindings = [
    {
      test: "HTTP / HTTPS SSL Reachability",
      status: "warning",
      detail: "SSL Certificate active, but HTTP does not automatically redirect to HTTPS."
    },
    {
      test: "Mobile Viewport & Responsiveness",
      status: "critical",
      detail: "Layout breaks on 375px mobile screens; horizontal overflow detected."
    },
    {
      test: "Online Booking / Inquiry Form",
      status: "critical",
      detail: "No interactive intake form detected; relies on static unclickable phone text."
    },
    {
      test: "Page Asset Optimization",
      status: "warning",
      detail: "Hero banner image uncompressed (2.4MB); mobile load time estimated > 4.2s."
    }
  ];

  const pitchText = `Subject: Quick question regarding ${sampleName}'s mobile intake\n\nHi ${sampleName} Team,\n\nI was researching leading ${biz.toLowerCase()} providers in ${city} and noticed your profile on Google Maps. While your local reviews are strong, I ran a quick technical audit on your website (${domainMock}) and noticed two things that may be costing you inbound patient inquiries:\n\n1. The page currently overflows horizontally on mobile devices, making your contact details hard to locate on smartphones.\n2. There is no automated intake or booking form, requiring visitors to manually dial during clinic hours.\n\nWe recently automated this workflow for similar ${biz.toLowerCase()} practices, integrating a direct booking widget that lifted mobile conversions by 35% without staff overhead.\n\nWould you be open to a 5-minute video walkthrough showing how to fix this for ${sampleName}?\n\nBest regards,\n[Your Name] • Growth & Automation Specialist`;

  return {
    sampleLead: {
      name: sampleName,
      category: biz,
      city: city,
      website: domainMock,
      phone: "+91 98XX-XXXXXX (Fictional)",
      rating: "4.6 ★ (38 Reviews)",
      priority: "HIGH PRIORITY",
      priorityReason: "High local review volume paired with severely degraded mobile web experience."
    },
    diagnostics: auditFindings,
    pitch: pitchText
  };
}

export const voiceAgentScenarios = [
  {
    id: "clinic-appointment",
    title: "Scenario A: Clinic OPD Appointment (Document RAG)",
    description: "Inbound caller seeking a specialist appointment with Dr. Verma.",
    customerIntent: "Hot Lead — Appointment Booking",
    intentBadge: "HOT LEAD",
    leadClass: "hot",
    transcript: [
      {
        speaker: "AI Voice Receptionist",
        role: "agent",
        text: "Good morning! Thank you for calling City Healthcare OPD Clinic. How may I assist you today?"
      },
      {
        speaker: "Inbound Caller",
        role: "customer",
        text: "Hi, I have a persistent knee ache and wanted to know if Dr. Verma is available tomorrow afternoon for a consultation?"
      },
      {
        speaker: "AI Voice Receptionist (RAG Lookup)",
        role: "agent",
        text: "Let me check Dr. Verma's verified clinic schedule... Yes, Dr. Verma is available tomorrow between 3:00 PM and 6:00 PM. Would you prefer a 3:30 PM or 4:15 PM consultation slot?"
      },
      {
        speaker: "Inbound Caller",
        role: "customer",
        text: "3:30 PM works great for me. Please book that."
      },
      {
        speaker: "AI Voice Receptionist",
        role: "agent",
        text: "Perfect! I have provisionally reserved 3:30 PM tomorrow for you. I am dispatching an SMS confirmation with clinic directions right now. Have a wonderful day!"
      }
    ],
    callSummary: "Caller requested orthopedic consultation with Dr. Verma for tomorrow afternoon. Grounded knowledge retrieval matched slot at 3:30 PM. Provisional booking locked; automated SMS confirmation webhook queued.",
    followUp: "PostgreSQL CRM updated with status 'HOT_APPOINTMENT_CONFIRMED'. Webhook triggered automated reminder dispatch 2 hours prior to scheduled visit."
  },
  {
    id: "service-inquiry",
    title: "Scenario B: Service Callback Request",
    description: "Caller requesting urgent pricing quote and callback from a senior technician.",
    customerIntent: "Callback Requested — High Urgency",
    intentBadge: "CALLBACK",
    leadClass: "callback",
    transcript: [
      {
        speaker: "AI Voice Receptionist",
        role: "agent",
        text: "Hello! You have reached Apex Enterprise Solutions. How can I help you today?"
      },
      {
        speaker: "Inbound Caller",
        role: "customer",
        text: "Hello, our office HVAC unit stopped cooling this morning. We need an emergency technician visit and a quote today."
      },
      {
        speaker: "AI Voice Receptionist (RAG Lookup)",
        role: "agent",
        text: "I understand the urgency. Commercial emergency dispatches are active today. May I confirm your office address and best callback number for our senior dispatch supervisor?"
      },
      {
        speaker: "Inbound Caller",
        role: "customer",
        text: "We are at 402 Tech Park, Sector 4. Please call me on this number within the next 20 minutes."
      },
      {
        speaker: "AI Voice Receptionist",
        role: "agent",
        text: "Recorded immediately. I have flagged your ticket with High Priority Emergency status and assigned it to our dispatch lead. Expect a call shortly."
      }
    ],
    callSummary: "Commercial emergency HVAC cooling issue reported at 402 Tech Park. Caller requested urgent callback within 20 minutes.",
    followUp: "High-priority alert pushed via webhook to PostgreSQL and dispatched to supervisor Slack channel with full audio transcript attached."
  }
];
