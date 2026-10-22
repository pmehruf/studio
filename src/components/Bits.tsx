import { Link } from "react-router-dom";
import { Icon } from "./Icon";
import { faqs } from "../content/faq";
import type { Service } from "../content/services";

export function SectionHead({ eyebrow, title, lead, page = false }: { eyebrow?: string; title: string; lead?: string; page?: boolean }) {
  const H = page ? "h1" : "h2";
  return (
    <div className="section-head">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <H>{title}</H>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export function ServiceCard({ s, i }: { s: Service; i: number }) {
  return (
    <article className={`card service-card ${s.featured ? "is-featured" : ""}`}>
      <span className="idx" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
      <div className="card-icon"><Icon name={s.icon} size={26} /></div>
      <h3>{s.title}</h3>
      <p className="card-need">{s.cardNeed}</p>
      <p>{s.cardSolution}</p>
      <p className="card-benefit"><Icon name="check" size={16} /> {s.cardBenefit}</p>
      <div className="card-actions">
        <Link to={`/contact?service=${s.slug}`} className="btn btn-primary">{s.cta}</Link>
        <Link to={`/services/${s.slug}`} className="text-link" aria-label={`Learn more about ${s.title}`}>See full service <Icon name="arrow" size={16} /></Link>
      </div>
    </article>
  );
}

export function Faq({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary>
            <span>{f.q}</span>
            <Icon name="plus" size={18} />
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container final-inner">
        <h2>You don't need to have the perfect solution figured out.</h2>
        <p className="lead">
          Tell me what's taking too much time, what's not working as it should, or what you're trying to build. We can explore a practical way forward.
        </p>
        <Link to="/contact" className="btn btn-accent btn-lg">Tell Me About Your Project</Link>
      </div>
    </section>
  );
}

export function ConceptBadge({ children = "Concept" }: { children?: string }) {
  return <span className="badge badge-concept">{children}</span>;
}
