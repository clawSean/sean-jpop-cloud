# Sean Site Rebuild - PROJECT_PROGRESS

Status: Showcase site live, restructured around vision.

## Goal

Sean's public showcase at sean.jpop.cloud — personality first, concrete work and contributions front and center.

## Route Structure

- `/` — Sean personality and introduction (front door)
- `/work/` — shipped skills, plugins, workflows, deliverables
- `/contributions/` — validated open-source contributions (slacrawl headlined)
- `/ops/` — supporting infrastructure and architecture
- `/build/` — compatibility redirect to `/work/`

## Decisions

- Keep v1 archived locally, not public.
- Static curated status blocks; live-data automation deferred.
- Company/workplace material anonymized; privacy boundaries enforced.
- Contributions given their own page with slacrawl as headline.
- Vision documented in VISION.md for anti-drift reference.
- /build/ kept as redirect for link compatibility.

## Source Paths

- New source: `/root/projects/clawSean/sean-jpop-cloud`
- Generated hero source: `assets/sean-command-center-hero.png` (local ignored source asset)
- Served hero asset: `assets/sean-command-center-hero.webp`
- Current live root before launch: `/srv/websites/sean.jpop.cloud -> /projects/clawSean/sean-site`
- Current live root after launch: `/srv/websites/sean.jpop.cloud -> /srv/websites/sean.jpop.cloud-mvp`
- Deploy copy: `/srv/websites/sean.jpop.cloud-mvp`
- V1 archive: `/root/.openclaw/workspace/artifacts/sean-site-archives/sean-site-v1-2026-05-19.tar.gz`

## Checklist

- [x] Verify active model/runtime.
- [x] Load TaskFlow operating guidance.
- [x] Load Sean site brief and MVP content map.
- [x] Generate project-bound hero image.
- [x] Build static MVP pages.
- [x] Run local static validation.
- [x] Screenshot desktop and mobile.
- [x] Deploy by updating live root only after verification.
- [x] Update VPS hosted-sites index.

## Verification

- Local curl checks passed for `/`, `/build/`, `/ops/`, stylesheet, WebP hero, and OG image.
- Chrome headless screenshots captured for desktop 1440x1100 and mobile 390x844.
- Public HTTPS checks passed for `/`, `/build/`, `/ops/`, and `/assets/sean-command-center-hero.webp`.
- First deploy attempt to `/root/projects/...` returned 403 because Caddy cannot serve from `/root`; fixed by publishing a deploy copy under `/srv/websites/sean.jpop.cloud-mvp`.
- Public deploy excludes repo metadata, project progress, verification screenshots, and the large source PNG.

## 2026-05-29 — Showcase rewrite (Claude Foreman review)

Rewrote all three pages to read as a confident showcase instead of a build plan.

**Changes:**
- `index.html`: Removed "current focus" / "launch scope" / "MVP" / "next" planning sections. Replaced with capabilities status board, richer terminal snapshot, and direct explore section. Updated proof tiles (replaced "3 MVP pages" and "v1 archived" with "Telegram" and "Git-backed").
- `build/index.html`: Removed "Receipts to deepen next" / "gets promoted after MVP" language. Contributions section now states concrete work directly. Added terminal block showing build-cycle workflow. Footer updated from "Build page MVP" to "Sean / Build".
- `ops/index.html`: Removed "Next layer" / "Static now / Automated later" planning section. Added browser tooling row, architecture section (single VPS + file-first state), and deployment terminal block. Changed status labels from "Static MVP" to "Deployed". Footer updated from "Ops page MVP" to "Sean / Ops".
- `PROJECT_PROGRESS.md`: Updated status and decisions. Preserved all source paths and verification history.
- No changes to `styles.css`, `site.js`, or assets.

## 2026-05-30 - Contribution Receipt Pass

JPop noted the site still left out prior Webkinz planning context and specifically missed the slacrawl contribution.

Changes:
- Added homepage proof tile for merged/credited upstream wins.
- Added homepage cards for privacy-safe business workflows and upstream contributions.
- Added slacrawl to /build/ shipped-work and contribution receipts.
- Replaced generic contribution rows with concrete public links for OpenClaw, slacrawl, mcporter, CodexBar, and NadirClaw.

## 2026-05-30 - Vision-Aligned Restructure

Restructured site around the hard vision per JPop direction. Documented vision with anti-drift rules in VISION.md.

**Route change: 3 pages → 5 routes**
Old: `/`, `/build/`, `/ops/`
New: `/`, `/work/`, `/contributions/`, `/ops/`, `/build/` (redirect)

**Changes:**
- `VISION.md`: Created/updated with route strategy table, nav order, site section descriptions, concrete receipts, and anti-drift rules.
- `index.html`: Rewritten as Sean personality front door. Kept hero + proof strip + capabilities board + receipts terminal. Explore section now has 3 pathways: Work, Contributions, Ops. Hero CTA buttons updated to /work/ and /contributions/. Removed "What Sean does" grid (redundant with capabilities board). Nav updated.
- `work/index.html`: New page — digestible path of shipped work. 6 cards (Telegram UX, Skill workflows, Plugin work, Research/crawl tooling, Static sites, Memory/knowledge). Build-cycle terminal. CTAs to /contributions/, /ops/, GitHub.
- `contributions/index.html`: New page — slacrawl featured first as 4-card grid (one card per PR + summary card). Full contributions list with links below: OpenClaw, slacrawl, mcporter, CodexBar, NadirClaw.
- `build/index.html`: Replaced with meta-refresh redirect to /work/. Fallback page has manual links to both /work/ and /contributions/. noindex set.
- `ops/index.html`: Nav updated (Home, Work, Contributions, Ops, GitHub). Architecture section renamed to "Setup" with title "How Sean's environment is configured" — clearly descriptive, not prescriptive. Footer links updated to /work/ and /contributions/.
- `styles.css`: Added `.pathways.three` (3-column grid) and added it to the 820px breakpoint collapse rule.
- `README.md`: Updated scope list to reflect all 5 routes. Added VISION.md reference.
- No changes to `site.js` or assets.

## 2026-05-30 - Differentiated Capability Framing

JPop called out that the site should not show off default/table-stakes features like a single GPT model label or ordinary Telegram access. Updated `VISION.md` with an explicit anti-drift rule: do not prioritize default features; lead with differentiated breadth like multiple providers, SMS/iMessage/voice surfaces, deployment authority, memory discipline, and public receipts.

Changes:
- Replaced homepage proof tiles for `GPT-5.5` and plain `Telegram` with `Multi-provider` and `Phone + chat`.
- Expanded homepage capability/status copy to include SMS, iMessage bridge, Twilio voice, and provider routing.
- Renamed `Telegram UX` work card to `Conversation surfaces`.
- Added provider/channel rows to `/ops/` runtime section.
