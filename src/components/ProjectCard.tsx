import { Link } from "react-router-dom";
import type { Project } from "../content/work";
import { serviceBySlug } from "../content/services";
import { ConceptBadge } from "./Bits";

export function ProjectCard({ p, compact = false }: { p: Project; compact?: boolean }) {
  const svc = serviceBySlug(p.service);
  return (
    <article className="card project-card" id={p.id}>
      <div className="project-meta">
        <span className="badge">{svc?.title}</span>
        {p.status === "concept" && <ConceptBadge>Concept project</ConceptBadge>}
      </div>
      <h3>{p.title}</h3>
      {p.note && <p className="project-note">{p.note}</p>}
      <dl className="case">
        <div><dt>The challenge</dt><dd>{p.challenge}</dd></div>
        {!compact && <div><dt>The approach</dt><dd>{p.approach}</dd></div>}
        <div><dt>The solution</dt><dd>{p.solution}</dd></div>
        <div><dt>My contribution</dt><dd>{p.role}</dd></div>
        <div>
          <dt>Verified outcome</dt>
          <dd>
            {p.results?.length ? (
              <ul className="results">{p.results.map((r) => <li key={r}>{r}</li>)}</ul>
            ) : (
              <span className="muted">{p.resultsNote ?? "No measured outcome to report: this is a demonstration of approach."}</span>
            )}
          </dd>
        </div>
      </dl>
      {p.tech && <p className="tech">{p.tech.join(" · ")}</p>}
      {p.screenshots?.map((s) => <img key={s.src} src={s.src} alt={s.alt} loading="lazy" className="shot" />)}
      {p.demoUrl && <p><a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="text-link">View demonstration</a></p>}
      {compact && <Link to={`/work#${p.id}`} className="text-link">Full case study →</Link>}
    </article>
  );
}
