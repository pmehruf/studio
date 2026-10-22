// Examples shown on the "Digital Tools" page.
// These are things I build to order, not ready-made products for sale.

export interface ToolExample {
  name: string;
  problem: string;
  builds: string;
}

export const toolExamples: ToolExample[] = [
  { name: "Spreadsheet system with dashboard", problem: "Data is scattered across sheets and nobody trusts the totals.", builds: "One structured sheet system with clean inputs, checks and a summary view." },
  { name: "Task and follow-up tracker", problem: "Pending items live in chats and memory, so they slip.", builds: "A tracker with owners, due dates, status and automatic reminders." },
  { name: "Reporting layout", problem: "The same report is rebuilt by hand every week or month.", builds: "A report that fills itself from your data and is ready to share." },
  { name: "Expense or cost calculator", problem: "Costs are worked out on paper or in one-off formulas.", builds: "A calculator with your categories, rules and a clear result." },
  { name: "SOP and QA checklist set", problem: "People follow the same process in different ways.", builds: "Step-by-step documents and checklists your team can use on day one." },
  { name: "Workflow kit", problem: "Tracker, checklist and guide exist separately and do not connect.", builds: "A small bundle that works together around one process." },
];
