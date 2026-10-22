import { FormEvent, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useMeta } from "../hooks/useMeta";
import { WhatsAppIcon } from "../components/Icon";
import { formEndpoint, site, whatsappLink } from "../content/site";
import { services } from "../content/services";
import { SectionHead } from "../components/Bits";

type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const timelines = ["As soon as possible", "Within a month", "In one to three months", "No fixed date", "Not sure yet"];
const NOT_SURE = "not-sure";

export default function Contact() {
  useMeta("Discuss a Project", "Describe what you are trying to solve or improve. No technical language needed.");
  const [params] = useSearchParams();
  const preset = services.find((s) => s.slug === params.get("service"))?.slug ?? "";
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [mailto, setMailto] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) return; // honeypot: bots fill this in
    const v = (k: string) => String(fd.get(k) ?? "").trim();
    const errs: Errors = {};
    if (!v("name")) errs.name = "Please enter your name.";
    if (!v("email")) errs.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v("email"))) errs.email = "That email address doesn't look right.";
    if (v("message").length < 10) errs.message = "Please describe what you are trying to solve (a sentence or two is enough).";
    setErrors(errs);
    if (Object.keys(errs).length) {
      requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']")?.focus());
      return;
    }

    const svcLabel = v("service") === NOT_SURE ? "Not sure which service fits" : services.find((s) => s.slug === v("service"))?.title ?? "";
    const payload = { name: v("name"), email: v("email"), message: v("message"), service: svcLabel, budget: v("budget"), timeline: v("timeline"), _subject: `New project enquiry from ${v("name")}`, _replyto: v("email"), _template: "table", _captcha: "false" };

    if (!formEndpoint) {
      const body = `${payload.message}\n\n— ${payload.name} (${payload.email})\nService: ${svcLabel || "-"}\nBudget: ${payload.budget || "-"}\nTimeline: ${payload.timeline || "-"}`;
      setMailto(`mailto:${site.contact.email}?subject=${encodeURIComponent("Project enquiry")}&body=${encodeURIComponent(body)}`);
      setStatus("unconfigured");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section className="page-head">
        <div className="container narrow">
          <div className="card notice notice-ok" role="status">
            <h1>Thank you. Your message has been sent.</h1>
            <p>I'll read it and reply to the email address you gave. You can also reach me on <a className="wa-link" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><WhatsAppIcon size={18} /></a>.</p>
          </div>
        </div>
      </section>
    );
  }

  const busy = status === "submitting";
  const err = (k: keyof Errors) => (errors[k] ? `${k}-err` : undefined);

  return (
    <>
      <section className="page-head">
        <div className="container narrow">
          <SectionHead page eyebrow="Discuss a project" title="Tell me about your project" lead="You don't need technical terms or a finished idea. Just tell me what's taking too much time, what's not working, or what you want to build." />
        </div>
      </section>
      <section className="section tight">
        <div className="container narrow">
          <p className="chat-alt">Prefer to chat? <a className="wa-btn" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label={`Chat on WhatsApp, ${site.contact.whatsappDisplay}`}><WhatsAppIcon size={20} />{site.contact.whatsappDisplay}</a></p>
          <form ref={formRef} onSubmit={onSubmit} noValidate className="form card" aria-busy={busy}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" autoComplete="name" required aria-invalid={!!errors.name} aria-describedby={err("name")} />
              {errors.name && <p id="name-err" className="field-err">{errors.name}</p>}
            </div>
            <div className="field">
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email} aria-describedby={err("email")} />
              {errors.email && <p id="email-err" className="field-err">{errors.email}</p>}
            </div>
            <div className="field">
              <label htmlFor="message">What are you trying to solve or improve?</label>
              <textarea id="message" name="message" rows={6} required aria-invalid={!!errors.message} aria-describedby={err("message")} placeholder="For example: we copy figures between three spreadsheets every week and it takes hours." />
              {errors.message && <p id="message-err" className="field-err">{errors.message}</p>}
            </div>
            <div className="field">
              <label htmlFor="service">Service <span className="opt">(optional)</span></label>
              <select id="service" name="service" defaultValue={preset}>
                <option value="">Choose if you know</option>
                <option value={NOT_SURE}>I'm not sure which service fits my needs.</option>
                {services.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
              </select>
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="budget">Project budget <span className="opt">(optional)</span></label>
                <input id="budget" name="budget" placeholder="A rough figure, or “not sure yet”" />
              </div>
              <div className="field">
                <label htmlFor="timeline">Timeline <span className="opt">(optional)</span></label>
                <select id="timeline" name="timeline" defaultValue="">
                  <option value="">Choose if you know</option>
                  {timelines.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
            </div>
            <div className="hp" aria-hidden="true">
              <label>Leave this empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
            </div>

            {status === "error" && (
              <div className="notice notice-err" role="alert">
                Sorry, your message could not be sent. Please try again, or reach me on <a className="wa-link" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><WhatsAppIcon size={18} /></a> or at <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
              </div>
            )}
            {status === "unconfigured" && (
              <div className="notice notice-err" role="alert">
                <p><strong>This form isn't connected to an inbox yet, so your message has not been sent.</strong></p>
                <p><a className="btn btn-secondary" href={mailto}>Send it by email instead</a></p>
              </div>
            )}
            <button type="submit" className="btn btn-primary btn-lg" disabled={busy}>{busy ? "Sending…" : "Tell Me About Your Project"}</button>
          </form>
        </div>
      </section>
    </>
  );
}
