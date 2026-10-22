import { useMemo, useState } from "react";
import { useMeta } from "../hooks/useMeta";
import { posters, projects } from "../content/work";
import { services } from "../content/services";
import { PosterArt } from "../components/Art";
import { ProjectCard } from "../components/ProjectCard";
import { FinalCta } from "../components/Bits";

export default function Work() {
  useMeta("Work & Projects", "Selected projects with the challenge, approach, solution and my contribution, plus clearly labelled concept work and sample designs.");
  const [filter, setFilter] = useState<string>("all");

  const available = useMemo(
    () => services.filter((s) => projects.some((p) => p.service === s.slug) || (s.slug === "poster-illustration-design" && posters.length)),
    []
  );
  const shownProjects = projects.filter((p) => filter === "all" || p.service === filter);
  const showPosters = filter === "all" || filter === "poster-illustration-design";

  return (
    <>
      <section className="page-head work-head">
        <div className="container">
          <h1 className="sr-only">Work</h1>
          <div className="chip-row" role="group" aria-label="Filter work by service">
            <button type="button" className="chip" aria-pressed={filter === "all"} onClick={() => setFilter("all")}>All</button>
            {available.map((s) => (
              <button key={s.slug} type="button" className="chip" aria-pressed={filter === s.slug} onClick={() => setFilter(s.slug)}>{s.title}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          {shownProjects.length > 0 && <div className="project-grid">{shownProjects.map((p) => <ProjectCard key={p.id} p={p} />)}</div>}
          {showPosters && (
            <div className="posters-block">
              <h2>Sample designs</h2>
              <p className="muted">Original concepts for fictional events, created to show the kind of poster, social and infographic work available. Not commissioned by any client.</p>
              <div className="poster-grid">
                {posters.map((p) => (
                  <figure key={p.id} className="poster">
                    {p.image ? <img src={p.image} alt={p.alt} loading="lazy" /> : <div role="img" aria-label={p.alt}><PosterArt variant={p.variant} /></div>}
                    <figcaption><strong>{p.title}</strong><span>{p.kind} · Concept</span></figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
