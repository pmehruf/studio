import { useMeta } from "../hooks/useMeta";
import { services } from "../content/services";
import { FinalCta, SectionHead, ServiceCard } from "../components/Bits";

export default function Services() {
  useMeta("Services", "Business automation, digital products, custom software development, process improvement and SOPs, poster and illustration design, and resume services.");
  return (
    <>
      <section className="page-head">
        <div className="container">
          <SectionHead page eyebrow="Services" title="Find the problem that sounds like yours" lead="Not sure which one fits? Describe what's not working and I'll point you to the right one." />
        </div>
      </section>
      <section className="section tight">
        <div className="container service-grid">
          {services.map((s, i) => <ServiceCard key={s.slug} s={s} i={i} />)}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
