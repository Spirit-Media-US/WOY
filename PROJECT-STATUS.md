# Work On Yourself — Project Status & Knowledge Base
> Last updated: 2026-03-08
> **Claude: Read this file before making any statements about project state or touching any code.**

---

## Stack
- **Framework:** Astro v5 + Tailwind CSS
- **CMS:** Sanity (projectId: `u8tg0g1c`, dataset: `production`)
- **Hosting:** Netlify
- **DNS:** Cloudflare
- **Domain:** workonyourself.com
- **Repo:** `Spirit-Media-US/WOY` (GitHub org)

---

## Pages
| Page | Sanity | Notes |
|---|---|---|
| index.astro | partial | Check current fetch status |
| 404.astro | no | Static |

---

## Known Issues / Remaining Tasks
- No PROJECT-STATUS.md existed before 2026-03-08 — full audit needed to fill in details
- Verify all public/ images migrated to Sanity CDN
- Confirm Sanity webhook → Netlify rebuild is configured

---

## Key Rules
- All video: YouTube only, never in Git or public/
- All images: Sanity CDN via urlFor() or direct cdn.sanity.io URL
- One session = one push = one Netlify build credit
