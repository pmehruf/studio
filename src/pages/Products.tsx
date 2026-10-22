import { Link } from "react-router-dom";
import { useMeta } from "../hooks/useMeta";
import { toolExamples } from "../content/products";
import { FinalCta, SectionHead } from "../components/Bits";

export default function Products() {
  useMeta("Custom Digital Tools: Trackers, Dashboards & Checklists", "Custom-built spreadsheet systems, trackers, calculators, dashboards and checklists designed around your task.");
  return (
    <>
      <section className="page-head">
        <div className="container">
          <SectionHead page eyebrow="Digital tools" title="Tools built around your task" lead="I don't sell ready-made templates. You describe the problem, and I build the tracker, dashboard, calculator or checklist that fits it." />
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <p className="muted">Examples of what I can build for you:</p>
          <div className="service-grid">
            {toolExamples.map((t, i) => (
              <article key={t.name} className="card tool">
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                <h3>{t.name}</h3>
                <p className="card-need">{t.problem}</p>
                <p>{t.builds}</p>
              </article>
            ))}
          </div>
          <p className="center"><Link to="/contact?service=digital-products" className="btn btn-primary btn-lg">Get a Tool Built for You</Link></p>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
