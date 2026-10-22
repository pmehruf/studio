// Runs after `vite build`. Writes a real HTML file for every page with its own
// title, description and social tags (so search engines and link previews see them),
// plus sitemap.xml and a 404.html fallback.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { site } from "../src/content/site";
import { services } from "../src/content/services";

const dist = "dist";
const base = (process.env.SITE_URL ?? site.url).replace(/\/$/, "");
const template = readFileSync(join(dist, "index.html"), "utf8");

const pages: { path: string; title: string; description: string }[] = [
  { path: "/", title: "Automation, Software, Process & Design Solutions", description: "Practical solutions for repetitive work, inefficient processes and missing software: business automation, custom applications, SOPs, design and resume services." },
  { path: "/services", title: "Services", description: "Business automation, digital products, custom software development, process improvement and SOPs, poster and illustration design, and resume services." },
  ...services.map((s) => ({ path: `/services/${s.slug}`, title: s.seoTitle, description: s.seoDescription })),
  { path: "/products", title: "Custom Digital Tools: Trackers, Dashboards & Checklists", description: "Custom-built spreadsheet systems, trackers, calculators, dashboards and checklists designed around your task." },
  { path: "/about", title: "About", description: "Background and working approach: program management, quality, workflow automation and AI-powered application development." },
  { path: "/contact", title: "Discuss a Project", description: "Describe what you are trying to solve or improve. No technical language needed." },
];

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function render(p: (typeof pages)[number]) {
  const title = `${p.title} | ${site.name}`;
  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(p.description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(p.description)}$2`);
  if (base) {
    html = html
      .replace('</head>', `    <link rel="canonical" href="${base}${p.path === "/" ? "/" : p.path}" />\n    <meta property="og:url" content="${base}${p.path === "/" ? "/" : p.path}" />\n  </head>`)
      .replace('content="/og-image.png"', `content="${base}/og-image.png"`);
  }
  return html;
}

for (const p of pages) {
  const out = p.path === "/" ? join(dist, "index.html") : join(dist, p.path, "index.html");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, render(p));
}
writeFileSync(join(dist, "404.html"), template);

if (base) {
  const urls = pages.map((p) => `  <url><loc>${base}${p.path === "/" ? "/" : p.path}</loc></url>`).join("\n");
  writeFileSync(join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  writeFileSync(join(dist, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`);
  console.log(`postbuild: ${pages.length} pages + sitemap for ${base}`);
} else {
  console.log(`postbuild: ${pages.length} pages written. No site URL set, so sitemap and canonical links were skipped (set SITE_URL or site.url).`);
}
