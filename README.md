# Freelance services website

React + TypeScript + Vite. Six services, problem-first homepage, work/case studies, product catalogue, contact form.

## Run it
```
npm install
npm run dev        # local preview
npm run build      # checks types, builds, writes one HTML page per route + sitemap
npm run preview    # test the built site
```

## Where to edit things (all in `src/content/`)
| File | What it controls |
|---|---|
| `site.ts` | Name, email, WhatsApp number, form endpoint, LinkedIn, public URL |
| `services.ts` | The six services: problems, deliverables, CTAs, SEO text |
| `work.ts` | Projects (case studies) and sample posters |
| `products.ts` | Examples shown on the Digital Tools page |
| `faq.ts` | FAQ answers |

## Before going live
1. **Contact form:** enquiries are emailed to the address in `site.ts` through FormSubmit. Activate it once: submit one test enquiry on the live site, then click the confirmation link FormSubmit emails you. Until you do, enquiries are not delivered.
2. **Public URL:** set `site.url` (or `SITE_URL` at build time) to enable canonical links, social previews and `sitemap.xml`.
3. **Check** the email, WhatsApp number (stored as 919656988473, India) and add `linkedin` if you want it shown.
4. **Ditto Assist / quality dashboard:** confirm you may describe them publicly, and that the wording of your role is right. Remove them from `work.ts` if not.

## Add a project, product or poster
- Project: add an object to `projects` in `work.ts`. Only put real, supportable numbers in `results`. Use `status: "concept"` for anything not client work.
- Tool example: add to `toolExamples` in `products.ts`.
- Real poster: put the image in `public/work/`, set `image` on a poster entry, and remove the "Concept" wording if it is real client work.

## Deploy
- **Netlify:** build command `npm run build`, publish folder `dist`. `public/_redirects` is included.
- **Vercel:** framework Vite, output `dist`. `vercel.json` is included.
- **Other hosts:** upload `dist`. The build writes `404.html` as a fallback.

## Notes
- Page titles/descriptions are written into each page's HTML at build time (good for search), and also update as visitors navigate.
- Theme (light/dark) follows the visitor's system setting and can be toggled.
