import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { nav, site, whatsappLink } from "../content/site";
import { services } from "../content/services";
import { useTheme } from "../hooks/useTheme";
import { Icon, WhatsAppIcon } from "./Icon";

export function Layout() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setOpen(false);
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  // Gentle fade-in as sections scroll into view. Skipped for reduced-motion users.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const root = document.documentElement;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }, { rootMargin: "0px 0px -8% 0px" });
    const t = window.setTimeout(() => {
      document.querySelectorAll(".card, .problem-tile, .help, .steps li, .principles li, .lifecycle li, .poster, .section-head, .faq details, .example").forEach((el) => {
        el.classList.add("reveal");
        io.observe(el);
      });
      root.classList.add("js-reveal");
    }, 30);
    return () => { window.clearTimeout(t); io.disconnect(); };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label={`${site.name}, home`}>
            <span className="brand-mark" aria-hidden="true">{site.name.charAt(0)}</span>
            <span className="brand-text"><strong>{site.name}</strong></span>
          </Link>
          <nav id="site-nav" className={`nav ${open ? "is-open" : ""}`} aria-label="Main">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === "/"} className={({ isActive }) => (isActive ? "active" : undefined)}>
                {n.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn btn-primary nav-cta">Discuss</Link>
          </nav>
          <div className="header-actions">
            <button type="button" className="icon-btn" onClick={toggle} aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}>
              <Icon name={theme === "dark" ? "sun" : "moon"} size={20} />
            </button>
            <button type="button" className="icon-btn menu-btn" aria-expanded={open} aria-controls="site-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}>
              <Icon name={open ? "close" : "menu"} size={22} />
            </button>
          </div>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-brand">{site.name}</p>
            <p className="muted">Practical solutions to work that takes more time or effort than it should.</p>
            <p><a href={`mailto:${site.contact.email}`}>{site.contact.email}</a></p>
            <p><a className="wa-link" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label={`Chat on WhatsApp, ${site.contact.whatsappDisplay}`}><WhatsAppIcon size={20} />{site.contact.whatsappDisplay}</a></p>
          </div>
          <div>
            <p className="footer-h">Services</p>
            <ul className="plain">
              {services.map((s) => (
                <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer-h">Explore</p>
            <ul className="plain">
              {nav.map((n) => (<li key={n.to}><Link to={n.to}>{n.label}</Link></li>))}
              {site.contact.linkedin && <li><a href={site.contact.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a></li>}
            </ul>
          </div>
        </div>
        <div className="container footer-base">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Sample designs are concept work, not client work.</span>
        </div>
      </footer>
    </>
  );
}
