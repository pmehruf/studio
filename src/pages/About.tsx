import { Link } from "react-router-dom";
import { useMeta } from "../hooks/useMeta";
import { SectionHead } from "../components/Bits";

export default function About() {
  useMeta("About", "Background and working approach: program management, quality, workflow automation and AI-powered application development.");
  return (
    <>
      <section className="page-head">
        <div className="container narrow">
          <SectionHead page eyebrow="About" title="The background behind the work" />
          <p className="lead">
            I'm a program manager with experience across quality assurance, business operations, process improvement and workflow automation. I also build web applications, including AI-powered tools.
          </p>
        </div>
      </section>
      <section className="section tight">
        <div className="container narrow prose">
          <h2>Why that matters to you</h2>
          <p>Most problems I'm asked to solve start as a process problem, not a technology one. Having worked on both sides, running quality and operations and building the tools that support them, I can understand what is actually going wrong and turn it into something practical.</p>
          <h2>Relevant experience</h2>
          <ul className="tick-list">
            <li>Business workflow analysis and improvement.</li>
            <li>Google Sheets systems, reporting and Apps Script automation.</li>
            <li>Web application development with React, TypeScript and Vite, and database-backed applications.</li>
            <li>AI-powered applications and knowledge-based tools. I built an AI-powered insurance advisory application on my own, end to end: design, development, updates and ongoing maintenance. It has 250+ users and has handled 50,000+ interactions since June 2026, across look-ups, specific-illness checks, AI questions, and the QA dashboard and team tracker.</li>
            <li>Quality assurance and performance frameworks, SOPs, playbooks and checklists.</li>
          </ul>
          <h2>How I operate</h2>
          <p>I work independently: one person, directly responsible for the work. I'll tell you plainly if something is outside what I can do well, or if a simpler solution would serve you better.</p>
          <h2>What I don't do</h2>
          <p>I don't publish client testimonials, logos or results that I can't back up, and I won't promise outcomes like interviews, job offers or specific rankings. Where work is a concept or a sample, it says so.</p>
          <p><Link to="/contact" className="btn btn-primary">Tell Me About Your Project</Link></p>
        </div>
      </section>
    </>
  );
}
