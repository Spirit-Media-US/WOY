# Work On Yourself (WOY)

> **CLAUDE.md belongs in version control — NEVER add it to .gitignore. This file is the shared source of truth for all developers and all Claude Code sessions.**

This site: Work On Yourself | Repo: github.com/Spirit-Media-US/WOY | Domain: workonyourself.com | Sanity ID: u8tg0g1c | R2 bucket: n/a

## Dev Commands

- `npm run dev` — local preview at localhost:4324
- `npm run build` — runs `astro check && astro build`

## Notes

- Uses Biome for linting and Lefthook for git hooks

## Status — as of 2026-03-24

### Completed & Live on Main
- Site live at workonyourself.com
- Pages: Home (index.astro), 404
- Sanity CMS fully wired: all content dynamic via siteSettings — no hardcoded content
- Hardcoded content audit passed (A+ grade — fully Sanity-driven)
- imageUrlBuilder updated to named export (deprecation warning resolved)
- Git hygiene: Lefthook hooks (block-main-push, large-file blocker, secret scanner), full .gitignore

### Still Pending
- Astro 5 + Tailwind v4 upgrade (currently Astro 4.x)
- Additional pages (coaching, about, contact) — scope TBD with Kevin
- GHL coaching form integration (source:woy tag)

## Rules

- All work goes to the **dev** branch — never push directly to main
- Only merge dev to main when Kevin says "push to main"
- Never push without local preview first
