# Sean Showcase Vision

This file is the durable reference for what sean.jpop.cloud is and how it should read. If the site drifts, come back here.

## Core Idea

Sean is a working OpenClaw agent — always-on, VPS-hosted, wired into Telegram, memory, skills, browser tools, and public contribution work. The site is the showcase itself, not a plan to build one.

The front door is Sean's personality. A visitor should immediately understand who Sean is and what Sean does — not read about what we intend to build.

## Route Strategy

| Route | Purpose |
|---|---|
| `/` | Front door. Sean personality introduction. Routes to Work, Contributions, Ops. |
| `/work/` | Digestible path of valuable shipped work — the portfolio. Send this link to show what Sean can do. |
| `/contributions/` | Validated/published contributions with concrete receipts. slacrawl is listed first. |
| `/ops/` | Infrastructure: VPS, Caddy, deployment, browser tooling. Architecture is descriptive, not prescriptive. |
| `/build/` | Legacy compatibility redirect to /work/ and /contributions/. No content updates here. |

## Nav Order

All pages: `Home` → `Work` → `Contributions` → `Ops` → `GitHub`

## Site Structure

### `/` — Sean Introduction (front door)
The homepage is Sean. Personality first: the lobster, the voice, what Sean actually does day-to-day. This page should feel like meeting Sean, not reading a product spec. Proof tiles and capability status are supporting texture, not the headline.

### `/work/` — Valuable Work (digestible, shareable)
A clear path through the concrete things Sean has built and shipped. This is the page you'd send someone to show what Sean can do. Skills, plugins, Telegram UX, research tools, workflow glue — organized so a reader can scan it in 30 seconds or dig deeper.

### `/contributions/` — Validated Published Contributions
The receipts. Every merged PR, credited fix, and public contribution with links. slacrawl is surfaced prominently — it's a clean, merged, three-PR series that demonstrates real open-source contribution quality. OpenClaw core, mcporter, CodexBar, and NadirClaw round it out.

### `/ops/` — Supporting Infrastructure + Architecture Notes
VPS hosting, Caddy routing, deployment discipline, browser tooling, safety boundaries, and lightweight startup/product architecture suggestions. This is supporting material that shows how Sean runs and how the pattern could become a product — important context, but not the main pitch. It backs up the showcase; it doesn't lead it.

### `/build/` — Compatibility Redirect
Points visitors to `/work/` and `/contributions/`. Kept so old links and bookmarks don't break. Never add new content here.

## Concrete Receipts We Have

- **slacrawl**: Merged PRs #19 (analytics trends flake fix), #20 (exclude_channels config), #21 (auto_join config) — vincentkoc/slacrawl
- **OpenClaw core**: Slack thread handling (PR #56606), DM route scoping (PR #73085), Telegram URL buttons (PR #76264)
- **mcporter**: PR #163 — daemon retry diagnostics kept off JSON stdout
- **CodexBar**: PR #865 — Venice API balance support; Sean/JPop listed as official contributors
- **NadirClaw**: PR #50 — configurable embedding backends with positive maintainer review

## Anti-Drift Rules

1. **No "plan to build" language.** The site IS the showcase. Don't describe what it will become — show what it is.
2. **No MVP/launch/next framing.** Those words signal incompleteness. The site is live and working.
3. **Personality leads, architecture supports.** Sean's character and concrete work come first. Infrastructure and startup notes are context, not the primary content.
4. **Receipts over claims.** Every capability mentioned should link to or reference something real. If there's no receipt, don't claim it.
5. **Shareable over comprehensive.** A visitor should be able to send a link to `/work/` or `/contributions/` and have it stand on its own.
6. **slacrawl is a headline contribution.** Three merged PRs in one series — don't bury it. List it first on `/contributions/`.
7. **`/build/` is dead content-wise.** It exists only to redirect. Do not add or update content there.
8. **This file governs the site.** Edit it when the vision changes — update it before or alongside any structural site changes, not after drift is noticed.
