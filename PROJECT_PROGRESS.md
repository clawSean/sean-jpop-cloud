# Sean Site Rebuild - PROJECT_PROGRESS

Status: Showcase site live.

## Goal

Replace the old `sean.jpop.cloud` Molt Report site with a bold, Sean-first OpenClaw command center:

- homepage
- `/build`
- `/ops`

## Decisions

- Keep v1 archived locally, not public.
- Static curated status blocks; live-data automation deferred.
- Company/workplace material anonymized; privacy boundaries enforced.
- Contributions shown directly on build page with public links.

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
