# FactsLedger

A static, source-backed entity reference site. Astro builds plain HTML; Cloudflare Pages serves it.

- **Content** lives in `src/content/<category>/*.md` — one Markdown file per profile.
- **Every profile is schema-validated at build time.** A missing field, a malformed date or a profile with no
  tier 1/tier 2 source fails the build instead of going live.
- **No client-side framework, no tracking, no cookie banner.** One CSS file, one small inline script on the
  contact page.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built site locally
```

Node 18+ is required (Node 20 or 22 recommended).

---

## 1. Make it yours

Everything identity-related is in **`src/site.config.js`**. Change it there and it propagates to the header,
footer, page titles, structured data, sitemap, legal pages and contact page.

```js
export const SITE = {
  name: 'FactsLedger',
  url: 'https://factsledger.com',   // ← your real domain, before the first deploy
  email: 'contact@factsledger.com',
  correctionsEmail: 'corrections@factsledger.com',
  ...
};
```

Two other places hold the domain and must match:

- `public/robots.txt` — the `Sitemap:` line.
- Nothing else. The rest reads from the config.

Add or rename a category in the `CATEGORIES` array in the same file, create the matching folder under
`src/content/`, and register it in `src/content.config.ts`. Nav, homepage, listing pages and the sitemap pick it
up automatically.

---

## 2. Put it on GitHub

```bash
git init
git add -A
git commit -m "Initial commit: FactsLedger"
git branch -M main
git remote add origin git@github.com:<you>/<repo>.git
git push -u origin main
```

(The repo is already initialised with a first commit if you received it as an archive — start from
`git remote add`.)

---

## 3. Deploy on Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Pick the repository.
3. Build settings:

   | Setting | Value |
   | --- | --- |
   | Framework preset | Astro |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Node version | set env var `NODE_VERSION` = `22` |

4. **Save and Deploy.** Every push to `main` redeploys; pull requests get preview URLs automatically.
5. **Custom domain** → Pages project → *Custom domains* → add yours. Cloudflare issues the certificate.
   Then set `SITE.url` and `robots.txt` to that domain and push again.

`public/_headers` is applied by Cloudflare automatically — it sets a content security policy, `nosniff`, a
referrer policy and long-lived caching for hashed assets.

---

## 4. Wire up the contact form

The form posts to `/api/contact`, handled by `functions/api/contact.js` — a Cloudflare Pages Function that
deploys with the site. No third-party form service.

Until you configure delivery, the form politely tells visitors to email instead. Pick **either** option (or both):

### Option A — store submissions in Cloudflare KV (no external service)

1. **Workers & Pages → KV → Create namespace**, e.g. `factsledger-submissions`.
2. Pages project → **Settings → Functions → KV namespace bindings** → add binding:
   - Variable name: `SUBMISSIONS`
   - KV namespace: the one you just created
3. Redeploy. Messages are written as `msg:<timestamp>:<uuid>` and readable from the KV dashboard.

### Option B — get them by email (via Resend, free tier)

Pages project → **Settings → Environment variables**, add:

| Variable | Example |
| --- | --- |
| `RESEND_API_KEY` | `re_...` (create at resend.com, verify your sending domain) |
| `CONTACT_TO` | `contact@factsledger.com` |
| `CONTACT_FROM` | `forms@factsledger.com` (must be on the verified domain) |

Redeploy. Submissions arrive by email with the sender's address in `reply_to`.

Spam handling is built in: a hidden honeypot field, length and format validation, and a 200 response to bots so
they learn nothing.

---

## 5. Write a profile

```bash
cp src/content/schools/_TEMPLATE.md src/content/schools/woodlands-house-school.md
```

The filename becomes the URL: `src/content/schools/woodlands-house-school.md` → `/schools/woodlands-house-school/`.
Files starting with `_` are ignored, so the templates never publish.

Frontmatter fields the build enforces:

| Field | Required | Notes |
| --- | --- | --- |
| `title` | ✅ | The entity's name, nothing else. No subtitle. |
| `summary` | ✅ | 40–300 chars. Meta description and listing text. |
| `entityType` | ✅ | Drives the schema.org type and the infobox label. |
| `country` | ✅ | |
| `location`, `established` | | Feed the infobox and structured data. |
| `facts[]` | | Infobox rows. `firstParty: true` adds the first-party marker. |
| `timeline[]` | | Rendered as the timeline table. |
| `sources[]` | ✅ | At least one, **and at least one `tier1` or `tier2`**. |
| `openItems[]` | | Claims you could not verify. Published deliberately. |
| `published`, `lastUpdated` | ✅ | ISO dates. |
| `draft: true` | | Keeps it out of the build. |

`tier` accepts `tier1`, `tier2`, `tier3`, `first-party`. **There is deliberately no `tier4`** — directories,
scraped sites and content farms have no valid value, so adding one fails the build.

Each source needs a `usedFor` line naming the specific claim it supports. That field is what makes a citation
list auditable rather than decorative.

### The rule the site is built around

Open and read every source against the claim it supports before publishing. A link that resolves is not evidence
that it says what the draft claims. This has already caught a fabricated citation in a Golden Peak draft — an AI
research pass attributed a curriculum project to a British Council manual that does not contain it.

---

## Project structure

```
src/
  site.config.js          identity, categories — the one file you edit to rebrand
  content.config.ts       the schema every profile is validated against
  content/<category>/     profiles, one Markdown file each (_TEMPLATE.md is ignored)
  layouts/                Base (shell + meta), Page (static pages), Profile (entity pages + JSON-LD)
  components/             Infobox, SourceList
  pages/
    index.astro           homepage
    [category]/           listing + profile routes, generated for every category
    about/                about, methodology, source policy, editorial policy, corrections, author
    legal/                privacy, terms, cookies, disclaimer
    contact.astro
    404.astro
functions/api/contact.js  Cloudflare Pages Function — form handler
public/                   robots.txt, favicon.svg, _headers
```

## What is emitted for SEO

- Per-entity JSON-LD: the schema.org type for the entity, plus `Article` (with author, dates and `citation`
  entries for every source) and `BreadcrumbList`.
- Only evidenced fields go into structured data — no `foundingDate` unless the profile has one.
- Canonical URLs, Open Graph tags, `sitemap-index.xml`, `robots.txt`.
- Directory URLs with trailing slashes, consistently.

## Legal pages

`/legal/privacy/`, `/legal/terms/`, `/legal/cookies/`, `/legal/disclaimer/` are written for this specific site —
a static, no-tracking reference publisher that profiles real entities, including living people. They cover the
things that actually apply here: what Cloudflare processes, why there is no cookie banner, how a profile subject
can object, and how removal requests are handled. Read them before launch and adjust to your jurisdiction and
your own retention practice. They are a solid starting point, not legal advice.
