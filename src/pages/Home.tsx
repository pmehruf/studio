import { Link } from "react-router-dom";
import { useMeta } from "../hooks/useMeta";
import { services, lifecycle } from "../content/services";
import { HeroArt } from "../components/Art";
import { FinalCta, Faq, SectionHead, ServiceCard } from "../components/Bits";
import { Icon } from "../components/Icon";

const steps = [
  { t: "Describe the problem", d: "Tell me what you need help with, in your own words." },
  { t: "Explore the solution", d: "We discuss requirements and possible approaches." },
  { t: "Agree on the scope", d: "Deliverables, milestones, pricing and timeline are confirmed in writing." },
  { t: "Build and deliver", d: "I work through the agreed plan and hand over the deliverables." },
];

const principles = [
  { t: "Start with the actual problem", d: "Before choosing a tool, I find out what is really going wrong." },
  { t: "Choose the practical solution", d: "No unnecessary complexity. If a spreadsheet does the job, you get a spreadsheet." },
  { t: "Agree deliverables first", d: "You know what you will receive before work begins." },
  { t: "Communicate clearly", d: "Plain language, regular updates, no jargon for its own sake." },
  { t: "Build to be used and maintained", d: "Solutions come with the notes someone else needs to run them." },
  { t: "Keep scope and expectations transparent", d: "If something changes the price or timeline, you hear about it first." },
];

export default function Home() {
  useMeta("Automation, Software, Process & Design Solutions", "Practical solutions for repetitive work, inefficient processes and missing software: business automation, custom applications, SOPs, design and resume services.");
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Automation · Software · Process · Design</p>
            <h1>Your time is valuable. <span className="grad">Your processes should work better.</span></h1>
            <p className="lead">
              From repetitive business tasks and inefficient workflows to custom software, professional design, and career documents. Find practical solutions to the work that's taking more time or effort than it should.
            </p>
            <div className="btn-row">
              <Link to="/contact" className="btn btn-primary btn-lg">Tell Me What You Need</Link>
              <Link to="/services" className="btn btn-secondary btn-lg">Explore Services</Link>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((k) => (
            <span key={k}>Business automation <i>◆</i> Custom software <i>◆</i> AI-powered apps <i>◆</i> SOPs &amp; process <i>◆</i> Digital tools <i>◆</i> Poster design <i>◆</i> Resume audits <i>◆</i> </span>
          ))}
        </div>
      </div>

      <section className="section" aria-labelledby="problems-h">
        <div className="container">
          <SectionHead eyebrow="Does this sound familiar?" title="What is taking more time or effort than it should?" />
          <ul className="problem-grid">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="problem-tile">
                  <Icon name={s.icon} size={24} />
                  <span>{s.situation}</span>
                  <span className="tile-link">See how it could be solved <Icon name="arrow" size={16} /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt" id="solutions" aria-labelledby="solutions-h">
        <div className="container">
          <SectionHead eyebrow="Solutions" title="Six ways to get your time and clarity back" lead="Each service starts from a problem you may recognise, and ends with something you can use." />
          <div className="service-grid">
            {services.map((s, i) => <ServiceCard key={s.slug} s={s} i={i} />)}
          </div>
        </div>
      </section>

      <section className="section software-band" aria-labelledby="sw-h">
        <div className="container">
          <SectionHead eyebrow="App & software development" title="Software, from first conversation to launch and beyond" lead="Small internal tools or substantial products: the scope is set by your problem, not by a size limit." />
          <ol className="lifecycle">
            {lifecycle.map((l, i) => (
              <li key={l.step}><span className="num">{i + 1}</span><strong>{l.step}</strong><span>{l.text}</span></li>
            ))}
          </ol>
          <Link to="/services/app-development" className="btn btn-secondary">See what I can build</Link>
        </div>
      </section>


      <section className="section section-alt" aria-labelledby="how-h">
        <div className="container">
          <SectionHead eyebrow="How it works" title="Four simple steps" lead="So contacting me feels straightforward, and you know what happens next." />
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.t}><span className="num">{i + 1}</span><h3>{s.t}</h3><p>{s.d}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="why-h">
        <div className="container">
          <SectionHead eyebrow="Why this approach works" title="How I work" />
          <ul className="principles">
            {principles.map((p) => (<li key={p.t}><h3>{p.t}</h3><p>{p.d}</p></li>))}
          </ul>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="faq-h">
        <div className="container narrow">
          <SectionHead title="Frequently asked questions" />
          <Faq />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
