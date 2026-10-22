export type ServiceSlug =
  | "business-automation"
  | "digital-products"
  | "app-development"
  | "process-improvement-sops"
  | "poster-illustration-design"
  | "resume-audit-creation";

export interface Service {
  slug: ServiceSlug;
  title: string;
  icon: "automation" | "products" | "software" | "process" | "design" | "resume";
  // Home-page card (written for the person with the problem)
  cardNeed: string;
  cardSolution: string;
  cardBenefit: string;
  // "What's taking more time" tile on the home page
  situation: string;
  // Service page
  headline: string;
  intro: string;
  problems: string[];
  helps: { title: string; text: string }[];
  deliverables: string[];
  outcome: string;
  cta: string;
  example?: { label: string; before: string; after: string; note: string };
  seoTitle: string;
  seoDescription: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    slug: "business-automation",
    title: "Business Automation",
    icon: "automation",
    situation: "Repetitive tasks are eating hours every week.",
    cardNeed: "Copying data between sheets, rebuilding the same report every Monday, chasing people for updates.",
    cardSolution:
      "Spreadsheet, script and API automation that does the routine work for you and flags only what needs a person.",
    cardBenefit: "Less repetitive work and fewer avoidable manual errors.",
    headline: "Stop spending valuable time on repetitive work.",
    intro:
      "If a task follows the same steps every time, a computer can usually do it. I look at how the work actually happens, then automate the repeatable parts and leave people in charge of the decisions.",
    problems: [
      "Information is copied by hand between spreadsheets and other systems.",
      "The same reports are prepared manually every week.",
      "Records have to be reconciled and checked across several sources.",
      "Pending tasks are followed up manually, one reminder at a time.",
      "Repetitive documents are created from scratch each time.",
      "Routine work depends on someone remembering every step.",
    ],
    helps: [
      { title: "Google Sheets and Apps Script", text: "Sheets that clean, calculate, sort and update themselves, with scripts for the parts formulas cannot reach." },
      { title: "Reports and dashboards", text: "Reports that build and refresh automatically, so the numbers are ready when people need them." },
      { title: "Data processing and reconciliation", text: "Matching and checking records across sources, with mismatches listed for a person to review." },
      { title: "Forms, databases and APIs", text: "Connect form responses, databases and the tools you already use so data moves without retyping." },
      { title: "Reminders and notifications", text: "Automatic nudges and alerts so follow-ups happen on time without anyone keeping a mental list." },
      { title: "Document generation and AI assistance", text: "Generate letters, summaries and reports from your data, with AI assistance where it genuinely helps." },
    ],
    deliverables: [
      "A working automation, tested on your real process",
      "A short plain-language guide: what it does, how to use it, what to do if it stops",
      "Handover session or walkthrough, agreed in the scope",
      "Optional: a support arrangement for changes later",
    ],
    outcome: "Less repetitive work, more consistent execution, and fewer avoidable manual errors.",
    cta: "Find Out What You Could Automate",
    example: {
      label: "Illustrative example (not a client result)",
      before: "Every Monday: export three sheets, copy figures into a summary, format it, email it. About an hour, and a typo now and then.",
      after: "The summary builds itself from the source sheets and is emailed on schedule. A person only reviews anything flagged as unusual.",
      note: "Time saved depends on the process. I will not quote numbers until I have seen yours.",
    },
    seoTitle: "Business Automation & Google Sheets Automation",
    seoDescription:
      "Automate repetitive business tasks: Google Sheets and Apps Script automation, reports, data reconciliation, reminders and API integrations.",
  },
  {
    slug: "digital-products",
    title: "Custom Digital Tools",
    icon: "products",
    situation: "The same reports and trackers keep getting recreated.",
    cardNeed: "You need a tracker, calculator or report layout, but nothing off the shelf fits how you work.",
    cardSolution:
      "A digital tool built around your task: a spreadsheet system, tracker, calculator or checklist set up exactly the way you work.",
    cardBenefit: "Start with a structure that fits, not a generic template.",
    headline: "Get a tool built for your task, not a generic template to bend into shape.",
    intro:
      "Tell me what you keep doing by hand or keep rebuilding. I design and build the spreadsheet, tracker, calculator or checklist set around your situation, so you can start using it straight away.",
    problems: [
      "You rebuild the same tracker or report layout every time.",
      "Generic templates never quite match how you work.",
      "You are not sure how to structure a dashboard or checklist.",
      "Your team uses a different format for the same task.",
      "You want something usable soon, without a full software project.",
    ],
    helps: [
      { title: "Spreadsheet systems and dashboards", text: "Structured sheets with the formulas, input layout and summary view already in place." },
      { title: "Project and task trackers", text: "A clear view of what is planned, in progress and done." },
      { title: "Business reporting layouts", text: "Reusable report layouts for your regular updates." },
      { title: "Expense and financial calculators", text: "Calculators for budgets, costs and basic planning, built around your numbers." },
      { title: "SOP and QA checklist documents", text: "Fill-in documents for procedures, audits and reviews." },
      { title: "Workflow kits", text: "A tracker, checklist and short guide that work together." },
    ],
    deliverables: [
      "The finished tool, set up for your task",
      "A short plain-language guide to using it",
      "A handover walkthrough, if agreed",
      "Changes after delivery, as agreed in the scope",
    ],
    outcome: "A tool that fits the way you work, so you spend your time on the work instead of the setup.",
    cta: "Get a Tool Built for You",
    seoTitle: "Custom Spreadsheet Tools, Trackers & Dashboards",
    seoDescription:
      "Custom-built spreadsheet systems, trackers, calculators, dashboards and checklists designed around your task.",
  },
  {
    slug: "app-development",
    title: "App & Software Development",
    icon: "software",
    featured: true,
    situation: "Existing software does not fit how you actually work.",
    cardNeed: "Off-the-shelf tools do not match your workflow, your systems are disconnected, or you have an idea that needs its own application.",
    cardSolution:
      "Custom software built around your users and workflows, from first conversation to launch and ongoing support. Small internal tools or substantial products.",
    cardBenefit: "A working application that fits the problem, not a workaround.",
    headline: "Software should fit the problem you need to solve.",
    intro:
      "When existing tools fall short, the answer is software designed around your actual users and processes. I take projects end to end: understanding the requirements, designing the solution, building, testing, deploying and maintaining it. Project size is not a limit.",
    problems: [
      "Existing software cannot do what you specifically need.",
      "Disconnected systems create friction and duplicate work.",
      "A manual workflow has become too hard to manage in spreadsheets.",
      "You have a product idea that needs a dedicated application.",
      "An existing application needs new features, fixes or a modern rebuild.",
      "You need a customer or employee portal with the right access for each person.",
    ],
    helps: [
      { title: "Custom web applications", text: "Applications built around your workflow and your users." },
      { title: "AI-powered applications and assistants", text: "Knowledge assistants, document-processing tools and AI features grounded in your own information." },
      { title: "SaaS products and MVPs", text: "From first working version to a product people can sign up for." },
      { title: "Internal business systems and portals", text: "Employee and customer portals, workflow management and approval tools." },
      { title: "Dashboards and database-backed systems", text: "Reporting platforms and data systems with proper storage behind them." },
      { title: "Integrations and existing applications", text: "API integrations, enhancements, modernisation and ongoing maintenance for software you already have." },
    ],
    deliverables: [
      "A written scope: features, milestones, timeline and price agreed before work starts",
      "The working application, tested and deployed",
      "Source code and technical notes you own, as agreed in the scope",
      "A handover walkthrough",
      "Optional maintenance and further development",
    ],
    outcome: "A functional digital solution built around real user needs, business workflows and requirements.",
    cta: "Discuss Your Application Idea",
    seoTitle: "Custom Application, AI & SaaS Development",
    seoDescription:
      "End-to-end custom web application development: AI-powered apps, SaaS products, internal systems, dashboards, integrations and maintenance.",
  },
  {
    slug: "process-improvement-sops",
    title: "Process Improvement & SOPs",
    icon: "process",
    situation: "Processes are inconsistent or exist only in people's heads.",
    cardNeed: "Different people do the same task differently, new hires take too long to get up to speed, the same mistakes keep returning.",
    cardSolution:
      "Process mapping, clear SOPs, checklists and quality frameworks your team will actually use.",
    cardBenefit: "Clearer workflows and easier onboarding.",
    headline: "Make important work easier to repeat, teach and maintain.",
    intro:
      "Good documentation is not the goal; better work is. I start by finding out how work really happens, then turn it into clear procedures, checklists and quality measures that people follow because they are useful.",
    problems: [
      "Processes exist only in employees' heads.",
      "Different people perform the same task differently.",
      "New employees take too long to become productive.",
      "The same mistakes keep recurring.",
      "Teams rely on scattered documents and inconsistent instructions.",
      "Managers lack visibility into how work is being performed.",
      "Important knowledge is lost when employees leave.",
    ],
    helps: [
      { title: "Process assessment and workflow mapping", text: "See the real steps, hand-offs and delays before changing anything." },
      { title: "SOPs and operational playbooks", text: "Step-by-step procedures written for the person doing the work." },
      { title: "Onboarding guides", text: "Shorter path from a new joiner's first day to doing the job well." },
      { title: "QA frameworks and audit checklists", text: "A consistent way to check quality and spot patterns in errors." },
      { title: "Error analysis and root causes", text: "Find why mistakes happen, then document the fix." },
      { title: "Performance tracking and knowledge bases", text: "Simple measures and one organised place for what people need to know." },
    ],
    deliverables: [
      "Workflow map of the process as it works today and as it should work",
      "SOPs, playbooks or checklists in the format your team uses",
      "A quality or performance tracking approach, where relevant",
      "Recommendations, in order of priority",
      "Help rolling the documents out to the team, if agreed",
    ],
    outcome: "Clearer workflows, more consistent execution, easier onboarding and documented operational knowledge.",
    cta: "Improve Your Workflows",
    example: {
      label: "Illustrative example (not a client result)",
      before: "\"Check the application properly before sending.\" Everyone interprets \"properly\" differently.",
      after: "A five-item checklist: what to check, where to find it, what counts as a pass, and who to ask when it fails.",
      note: "The aim is instructions that remove guesswork, not longer documents.",
    },
    seoTitle: "Process Improvement & SOP Development",
    seoDescription:
      "Workflow improvement, SOP development, operational playbooks, onboarding guides and QA frameworks that teams actually use.",
  },
  {
    slug: "poster-illustration-design",
    title: "Poster & Illustration Design",
    icon: "design",
    situation: "Your visuals do not explain or promote your message well.",
    cardNeed: "A promotion, launch or event that needs to be noticed, or information that is hard to explain in words.",
    cardSolution:
      "Posters, social creatives, infographics and illustrations that make the message clear at a glance.",
    cardBenefit: "More polished, consistent and understandable communication.",
    headline: "Make your message easier to notice and understand.",
    intro:
      "A good visual does one job quickly: it tells people what this is and what to do next. Browse the sample designs below to see the kind of work on offer.",
    problems: [
      "A promotion or launch needs to stand out.",
      "Event details are hard to read at a glance.",
      "Social posts look inconsistent from one to the next.",
      "A complex idea needs an infographic to make sense.",
      "Presentations rely on text where a graphic would work better.",
    ],
    helps: [
      { title: "Promotional posters and event announcements", text: "Print and digital layouts with a clear order of reading." },
      { title: "Social media creatives and campaign variations", text: "A consistent set across formats and posts." },
      { title: "Infographics and presentation graphics", text: "Complex information made easy to follow." },
      { title: "Digital illustrations and branded assets", text: "Custom visuals that match your style." },
    ],
    deliverables: [
      "Design in the sizes you need (print and/or digital)",
      "Editable and export-ready files, as agreed",
      "A defined number of revision rounds, set in the scope",
    ],
    outcome: "More polished, consistent and understandable visual communication.",
    cta: "Discuss a Design Project",
    seoTitle: "Poster, Social Media & Illustration Design",
    seoDescription:
      "Promotional posters, social media creatives, infographics and digital illustration for businesses and events.",
  },
  {
    slug: "resume-audit-creation",
    title: "Resume Audit & Creation",
    icon: "resume",
    situation: "A resume is not presenting experience effectively.",
    cardNeed: "Your resume lists duties but not achievements, is hard to scan, or does not explain the value you bring.",
    cardSolution:
      "A review of what is working and what is not, or a complete rewrite tailored to the roles you want.",
    cardBenefit: "A clearer, more relevant presentation of your experience.",
    headline: "Your experience deserves to be presented clearly.",
    intro:
      "I help you show what you have actually done and why it matters, in a format that is easy to scan. I cannot promise interviews, offers or specific ATS results; what I can do is make your experience clearer and more relevant.",
    problems: [
      "Your resume lists responsibilities but fails to show achievements.",
      "Important experience is buried under irrelevant details.",
      "The document is difficult to scan.",
      "It is not tailored to the role you are applying for.",
      "The professional summary is too generic.",
      "You struggle to explain the value you bring.",
    ],
    helps: [
      { title: "Resume audit and review", text: "A written review of what to keep, cut and improve." },
      { title: "Resume rewriting and tailoring", text: "Rewritten content, tailored to a specific job description when needed." },
      { title: "Achievement and impact statements", text: "Duties turned into specific, supportable accomplishments." },
      { title: "ATS-oriented structure", text: "Clean formatting and content structure that reads well to people and software." },
      { title: "Summary, LinkedIn and cover letter", text: "A sharper professional summary, profile optimisation and cover letter support." },
    ],
    deliverables: [
      "Audit: a written review with prioritised changes, or",
      "Creation: a rewritten resume as an editable document and PDF",
      "Tailored versions for specific roles, where agreed",
      "Optional LinkedIn and cover letter support",
    ],
    outcome: "A clearer, more relevant presentation of the candidate's experience and strengths.",
    cta: "Get Your Resume Reviewed",
    example: {
      label: "Illustrative example with a fictional role",
      before: "Responsible for handling customer queries and updating records.",
      after: "Resolved [number] customer queries a [week/month] and kept records [accuracy/completeness measure] by [what you did]. (Brackets are filled with your real figures.)",
      note: "I only use figures you can back up. I will not invent achievements.",
    },
    seoTitle: "Resume Audit, Rewriting & LinkedIn Review",
    seoDescription:
      "Resume audit and rewriting: clearer achievements, job-specific tailoring, ATS-oriented structure and LinkedIn profile support.",
  },
];

export const serviceBySlug = (slug?: string) => services.find((s) => s.slug === slug);

export const lifecycle = [
  { step: "Understand", text: "Requirements, users and constraints" },
  { step: "Design", text: "Screens, data and how it fits together" },
  { step: "Build", text: "Working software in stages you can review" },
  { step: "Test", text: "Checking it against real scenarios" },
  { step: "Deploy", text: "Live, with the setup documented" },
  { step: "Maintain", text: "Fixes and improvements, as agreed" },
];
