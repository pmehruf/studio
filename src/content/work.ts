import type { ServiceSlug } from "./services";

// ---------- PROJECTS ----------
// status: "real"    = actual work, described at summary level
//         "concept" = demonstration/concept, clearly labelled on the site
// Add new projects to the array. Never add results you cannot support.

export interface Project {
  id: string;
  title: string;
  service: ServiceSlug;
  status: "real" | "concept";
  note?: string; // small label shown on the card, e.g. "Internal tool: summary only"
  challenge: string;
  approach: string;
  solution: string;
  role: string;
  tech?: string[];
  results?: string[]; // verified results only
  resultsNote?: string; // shown when no verified numbers are published
  screenshots?: { src: string; alt: string }[];
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "ditto-assist",
    title: "AI-powered insurance advisory app",
    service: "app-development",
    status: "real",
    note: "Internal tool at an insurance company. Shown at summary level; no code, data or internal logic is disclosed.",
    challenge:
      "Insurance advisors needed fast, reliable answers on health-disclosure questions on applications and on insurance concepts that are hard to explain, and slow answers delayed customer conversations.",
    approach:
      "Started from how advisors actually search for answers, then built one place that brings the approved information together.",
    solution:
      "A web application with declaration look-ups, an AI assistant that answers from approved company knowledge, and a quality-reporting dashboard module.",
    role: "I built it alone, end to end: design, development, updates and ongoing maintenance.",
    tech: ["TypeScript", "React", "Node.js", "Neon (serverless Postgres)", "Google Cloud"],
    results: ["250+ unique users across departments", "20,000+ declaration look-ups in five months"],
  },
  {
    id: "quality-reporting",
    title: "Quality reporting dashboard",
    service: "business-automation",
    status: "real",
    note: "Internal tool: summary only.",
    challenge: "Quality data came from several places, so seeing how a team was doing meant gathering it by hand.",
    approach:
      "Defined a single master data source, fed from an internal database into a Google Sheet, and organised it for reporting.",
    solution:
      "A dashboard, built as a module inside the advisory app above, that shows quality data in one place.",
    role: "I designed and built the data setup and the dashboard.",
    tech: ["SQL database", "Google Sheets", "React"],
    resultsNote: "Outcome figures are not published for this project.",
  },
  {
    id: "concept-weekly-report",
    title: "Concept: the weekly report that builds itself",
    service: "business-automation",
    status: "concept",
    note: "Concept project. Not client work.",
    challenge: "A team prepares the same summary every week by exporting, copying and formatting figures.",
    approach: "Map the steps, find what is repeatable, and keep a person only where judgement is needed.",
    solution:
      "A sheet that pulls the source data, builds the summary, flags unusual figures for review and sends the report on schedule.",
    role: "A demonstration of how I would approach it. Nothing here was delivered to a client.",
    tech: ["Google Sheets", "Apps Script"],
  },
  {
    id: "concept-qa-checklist",
    title: "Concept: from \"check it properly\" to a five-point checklist",
    service: "process-improvement-sops",
    status: "concept",
    note: "Concept project. Not client work.",
    challenge: "Reviewers apply vague instructions differently, so the same error is caught by one person and missed by another.",
    approach: "Turn each vague instruction into a specific check with a clear pass/fail rule and an owner.",
    solution: "A one-page QA checklist and a short SOP that new joiners can follow on day one.",
    role: "A demonstration of the approach, using a fictional process.",
  },
];

// ---------- POSTER CONCEPTS ----------
// These are original sample designs for fictional events, drawn in code.
// Replace or add real portfolio pieces: put images in /public/work/ and set `image`.

export interface Poster {
  id: string;
  title: string;
  kind: "Promotional poster" | "Event announcement" | "Social creative" | "Infographic";
  variant: "sale" | "event" | "social" | "info" | "launch" | "workshop";
  alt: string;
  image?: string; // set to a path like "/work/my-poster.webp" for a real piece
}

export const posters: Poster[] = [
  { id: "p1", title: "Seasonal sale", kind: "Promotional poster", variant: "sale", alt: "Concept poster for a fictional seasonal sale with a large percentage mark and bold type" },
  { id: "p2", title: "Open studio evening", kind: "Event announcement", variant: "event", alt: "Concept event poster for a fictional open studio evening showing date, time and location blocks" },
  { id: "p3", title: "Weekly tip card", kind: "Social creative", variant: "social", alt: "Concept square social media card with a short tip and numbered badge" },
  { id: "p4", title: "How a request flows", kind: "Infographic", variant: "info", alt: "Concept infographic showing four connected steps from request to delivery" },
  { id: "p5", title: "Product launch", kind: "Promotional poster", variant: "launch", alt: "Concept launch poster for a fictional product with an abstract shape and a call to action" },
  { id: "p6", title: "Hands-on workshop", kind: "Event announcement", variant: "workshop", alt: "Concept workshop poster listing three topics and a sign-up line" },
];
