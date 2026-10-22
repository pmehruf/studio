import { Link, useParams } from "react-router-dom";
import { useMeta } from "../hooks/useMeta";
import { lifecycle, serviceBySlug, services } from "../content/services";
import { posters } from "../content/work";
import { Icon } from "../components/Icon";
import { PosterArt } from "../components/Art";
import NotFound from "./NotFound";

export default function ServicePage() {
  const { slug } = useParams();
  const s = serviceBySlug(slug);
  useMeta(s?.seoTitle ?? "Not found", s?.seoDescription ?? "");
  if (!s) return <NotFound />;
  const others = services.filter((x) => x.slug !== s.slug);
  const enquire = `/contact?service=${s.slug}`;

  return (
    <>
      <section className="page-head service-head">
        <div className="container">
          <p className="breadcrumb"><Link to="/services">Services</Link> / {s.title}</p>
          <div className="card-icon"><Icon name={s.icon} size={28} /></div>
          <h1>{s.headline}</h1>
          <p className="lead">{s.intro}</p>
          <Link to={enquire} className="btn btn-primary btn-lg">{s.cta}</Link>
        </div>
      </section>

      <section className="section tight">
        <div className="container two-col">
          <div>
            <h2>Is this a problem you have?</h2>
            <ul className="tick-list problem-list">
              {s.problems.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
          <div>
            <h2>What you would receive</h2>
            <ul className="tick-list">
              {s.deliverables.map((d) => <li key={d}><Icon name="check" size={18} />{d}</li>)}
            </ul>
            <p className="outcome"><strong>Outcome:</strong> {s.outcome}</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>How it can help</h2>
          <div className="help-grid">
            {s.helps.map((h) => (<div key={h.title} className="help"><h3>{h.title}</h3><p>{h.text}</p></div>))}
          </div>
          {s.example && (
            <div className="example">
              <p className="badge badge-concept">{s.example.label}</p>
              <div className="ba">
                <div><p className="ba-h">Before</p><p>{s.example.before}</p></div>
                <div><p className="ba-h">After</p><p>{s.example.after}</p></div>
              </div>
              <p className="muted small">{s.example.note}</p>
            </div>
          )}
        </div>
      </section>

      {s.slug === "app-development" && (
        <section className="section tight">
          <div className="container">
            <h2>End to end, at any size</h2>
            <ol className="lifecycle">
              {lifecycle.map((l, i) => (<li key={l.step}><span className="num">{i + 1}</span><strong>{l.step}</strong><span>{l.text}</span></li>))}
            </ol>
          </div>
        </section>
      )}

      {s.slug === "poster-illustration-design" && (
        <section className="section tight">
          <div className="container">
            <h2>Sample designs</h2>
            <p className="muted">Original concept pieces for fictional events. They show the kind of work available and are not client work.</p>
            <div className="poster-grid">
              {posters.map((p) => (
                <figure key={p.id} className="poster">
                  <PosterArt variant={p.variant} />
                  <figcaption><strong>{p.title}</strong><span>{p.kind} · Concept</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {s.slug === "digital-products" && (
        <section className="section tight">
          <div className="container">
            <h2>Examples of tools I build</h2>
            <Link to="/products" className="btn btn-secondary">See examples</Link>
          </div>
        </section>
      )}


      <section className="final-cta">
        <div className="container final-inner">
          <h2>Ready to talk it through?</h2>
          <p className="lead">Describe what you are trying to solve. You do not need technical language or a finished plan.</p>
          <Link to={enquire} className="btn btn-accent btn-lg">{s.cta}</Link>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <h2>Other ways I can help</h2>
          <ul className="chip-row">
            {others.map((o) => (<li key={o.slug}><Link className="chip" to={`/services/${o.slug}`}>{o.title}</Link></li>))}
          </ul>
        </div>
      </section>
    </>
  );
}
