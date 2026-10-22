// Central site settings. Edit here; nothing else needs to change.

export const site = {
  name: "Mehruf",
  // Full public URL once deployed, e.g. "https://example.com" (no trailing slash).
  // Needed for canonical links, social previews and the sitemap. Can also be set
  // at build time with the SITE_URL environment variable.
  url: "",
  contact: {
    email: "pmehruf@gmail.com",
    // WhatsApp number in international format, digits only (91 = India).
    whatsapp: "919656988473",
    whatsappDisplay: "+91 96569 88473",
    linkedin: "", // e.g. "https://www.linkedin.com/in/your-name" (left empty on purpose)
    // Enquiry form delivery. FormSubmit emails each enquiry to the address below.
    // First-time setup: submit one test enquiry, then click the confirmation link
    // FormSubmit emails to this address. Enquiries only start arriving after that.
    // To use another service (e.g. Formspree), replace this URL or set VITE_FORM_ENDPOINT.
    formEndpoint: "https://formsubmit.co/ajax/pmehruf@gmail.com",
  },
};

export const formEndpoint: string =
  (import.meta.env?.VITE_FORM_ENDPOINT as string | undefined) || site.contact.formEndpoint;

export const whatsappLink = (text = "Hi, I'd like to discuss a project.") =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;

// "Contact" is covered by the "Discuss a Project" button, so it is not a separate menu item.
export const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Digital Tools" },
  { to: "/about", label: "About" },
];
