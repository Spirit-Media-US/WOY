# WOY — Work On Yourself

**Website:** [workonyourself.com](https://workonyourself.com)
**Repo:** [github.com/Spirit-Media-US/WOY](https://github.com/Spirit-Media-US/WOY)

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Astro](https://astro.build) v5 | Static site framework |
| [Tailwind CSS](https://tailwindcss.com) v4 | Utility-first styling via `@tailwindcss/vite` |
| [Biome](https://biomejs.dev) | Linter & formatter (replaces ESLint + Prettier) |
| [Lefthook](https://github.com/evilmartians/lefthook) | Git pre-commit hooks for auto-formatting |
| [Bun](https://bun.sh) | JavaScript runtime & package manager |
| TypeScript | Type safety (strict mode) |

## Project Structure

```
WOY/
├── .env                    # Secrets — git-ignored
├── .env.example            # Template for env vars
├── .gitignore
├── astro.config.mjs        # Astro + Tailwind + Sitemap config
├── biome.json              # Linting & formatting rules
├── lefthook.yml            # Pre-commit hook config
├── package.json
├── tsconfig.json
├── public/
│   ├── .htaccess           # Apache: serve index.html over index.php
│   ├── favicon.svg
│   └── robots.txt
├── scripts/
│   └── deploy.sh           # Git-based deploy to Cloudways
└── src/
    ├── components/
    ├── layouts/
    │   └── Layout.astro    # Base layout with SEO meta tags
    ├── pages/
    │   ├── index.astro     # Homepage (coming soon)
    │   └── 404.astro       # Custom 404 page
    └── styles/
        └── global.css      # Tailwind import + brand tokens
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) — `brew install bun`
- [Git](https://git-scm.com) — `brew install git`
- [Node.js](https://nodejs.org) — `brew install node`

### Setup

```bash
git clone git@github.com:Spirit-Media-US/WOY.git
cd WOY
bun install
```

### Development

```bash
bun run dev           # Start dev server at localhost:4321
```

### Build

```bash
bun run build         # Type-check + build to ./dist
bun run preview       # Preview the production build locally
```

### Linting & Formatting

```bash
bun run check         # Run Biome fix on all files
```

Biome also runs automatically on every commit via Lefthook pre-commit hooks.

## Deployment

### Architecture

The site is hosted on **Cloudways** (PHP stack on DigitalOcean). Since there's
no Node.js/Bun on the server, we build locally and push static files.

Two-branch strategy:
- **`main`** — full source code (Astro, components, configs)
- **`deploy`** — only the built static files from `./dist`

Cloudways Git deployment pulls from the `deploy` branch into `public_html`.

```
Local: edit code → commit to main → run bun run deploy
  ↓
deploy.sh: builds site → pushes static files to deploy branch
  ↓
Cloudways: pull deploy branch → files land in public_html → site is live
```

### Deploy to Production

```bash
bun run deploy
```

After pushing, go to **Cloudways → Application → Deployment via Git → Pull**.

### Cloudways Setup Checklist

1. **Create a new application** on the existing Cloudways server (same server as FHB)
2. **Domain Management** → add `workonyourself.com` and `www.workonyourself.com`
3. **SSL Certificate** → Let's Encrypt → include both domain variants
4. **Deployment via Git:**

| Setting | Value |
|---------|-------|
| Git Repository | `git@github.com:Spirit-Media-US/WOY.git` |
| Branch | `deploy` |
| Deployment Path | `public_html` |

5. Copy the **Deploy Key** from Cloudways and add it to GitHub:
   GitHub → Spirit-Media-US/WOY → Settings → Deploy Keys → Add (read-only)
6. Click **Pull** to deploy

### Apache Note

Cloudways PHP apps ship with an `index.php` that shows a default landing page.
After the first deploy, delete it from the server:

```bash
ssh -i ~/.ssh/cloudways_rsa master_USERNAME@SERVER_IP \
  "rm /home/master/applications/APP_CODE/public_html/index.php"
```

The `.htaccess` file ensures Apache serves `index.html` over `index.php` going
forward.

## Brand

**Fonts:** Cormorant Garamond (headings) + Source Sans 3 (body)
**Palette:** Deep slate (`#1e293b`), warm cream (`#faf8f4`), amber accent (`#d4a574`)
**Tone:** Contemplative, warm, premium. Generous whitespace. Pastoral, not corporate.

## DNS

Point `workonyourself.com` to the Cloudways server IP (same as FHB: `161.35.131.217`).
Both A records needed:

| Type | Host | Value |
|------|------|-------|
| A | @ | 161.35.131.217 |
| A | www | 161.35.131.217 |
