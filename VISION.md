# Sean Showcase Vision

This file is the durable reference for what sean.jpop.cloud is and how it should read. If the site drifts, come back here.

## Audience

The primary readers are potential employers, technical peers, and people curious about JPop's work. They should leave understanding: (1) what Sean actually does and how it is built, (2) that the setup reflects real engineering judgment, and (3) that JPop is a person worth working with. The site is a portfolio and a playground, not a product pitch.

## Voice and Tone

Sean's voice is direct, slightly odd, system-grounded, and confident without bragging. Prefer concrete language over abstract claims. Use specific system details ("file-first memory surviving restarts") instead of vague marketing ("powerful AI memory"). Humor is fine when it comes naturally; forced cleverness is not. The lobster is the mascot, not a gimmick -- keep the personality anchored to real capability.

JPop is the human behind Sean. The site should make that relationship clear without turning into a biography. A short human anchor on the homepage is enough.

## Chosen Hero Line

The current homepage H1 is:

> Sean the Crustacean. Locked in. Claws out.

This keeps the pun/personality visible without making the hero a feature dump. The supporting copy should carry the proof: VPS, memory, channels, plugins, MacBook edge, and contribution receipts.

## Core Idea

Sean is a working OpenClaw agent -- always-on, VPS-hosted, wired into a provider mesh, rich chat, SMS/iMessage, voice-call surfaces, a paired MacBook node, structured memory with curation pipelines, knowledge/research storage, profile injection, QMD-backed search with reranking, skills, browser tools, hosted sites, and public contribution work. The site is the showcase itself, not a plan to build one.

The front door is Sean's personality. A visitor should immediately understand who Sean is and what Sean does -- not read about what we intend to build.

## Route Strategy

| Route | Purpose |
|---|---|
| `/` | Front door. Sean personality introduction. Routes to Work, Contributions, Ops. |
| `/work/` | Digestible path of valuable shipped work — the portfolio. Send this link to show what Sean can do. |
| `/contributions/` | Validated/published contributions with concrete receipts. Three strong PR cards. |
| `/ops/` | Infrastructure: VPS, MacBook node, Caddy, deployment, browser tooling. Architecture is descriptive, not prescriptive. |
| `/build/` | Legacy compatibility redirect to /work/ and /contributions/. No content updates here. |

## Nav Order

All pages: `Home` → `Work` → `Contributions` → `Ops` → `GitHub`

## Site Structure

### `/` — Sean Introduction (front door)
The homepage is Sean. Personality first: the lobster, the voice, what Sean actually does day-to-day. This page should feel like meeting Sean, not reading a product spec. Proof tiles and capability status are supporting texture, not the headline.

### `/work/` — Valuable Work (digestible, shareable)
A clear path through the concrete things Sean has built and shipped. This is the page you'd send someone to show what Sean can do. Skills, plugins, multi-channel conversation UX, research tools, workflow glue — organized so a reader can scan it in 30 seconds or dig deeper.

### `/contributions/` — Validated Published Contributions
The receipts. Every merged PR, credited fix, and public contribution with links. slacrawl is surfaced prominently — it's a clean, merged, three-PR series that demonstrates real open-source contribution quality. OpenClaw core, mcporter, CodexBar, and NadirClaw round it out.

### `/ops/` — Supporting Infrastructure + Architecture Notes
VPS hosting, Caddy routing, deployment discipline, browser tooling, MacBook node architecture, safety boundaries, and lightweight startup/product architecture suggestions. This is supporting material that shows how Sean runs and how the pattern could become a product — important context, but not the main pitch. It backs up the showcase; it doesn't lead it.

### `/build/` — Compatibility Redirect
Points visitors to `/work/` and `/contributions/`. Kept so old links and bookmarks don't break. Never add new content here.

## Concrete Receipts We Have

- **slacrawl**: Merged PRs #19 (analytics trends flake fix), #20 (exclude_channels config), #21 (auto_join config) — vincentkoc/slacrawl
- **OpenClaw core**: Slack thread handling (PR #56606), DM route scoping (PR #73085), Telegram URL buttons (PR #76264)
- **mcporter**: PR #163 — daemon retry diagnostics kept off JSON stdout
- **CodexBar**: PR #865 — Venice API balance support; Sean/JPop listed as official contributors
- **NadirClaw**: PR #50 — configurable embedding backends with positive maintainer review

## Plugin Stack — Differentiated Custom Work

These are Sean's custom plugins and extensions — the work that is not default OpenClaw table stakes. The site should surface these as concrete capability, not as a generic feature list.

| Plugin / Capability | What it does | Slug / Surface |
|---|---|---|
| **Raw chat passthrough** | Direct provider send bypassing agent logic — useful for testing, debugging, and model comparison | `/chat` |
| **Ursula** | TTS voice-note generation and release — Sean can produce and send audio clips | `/ursula` |
| **Tide Pools / Diem** | Quota tracking and provider usage dashboards — visibility into cost and consumption | Usage monitoring |
| **WatchCatfish / Custom health** | No-LLM health probes, watchdog checks, provider/auth visibility, and node-status surfacing | `/health` |
| **Twilio SMS** | Custom Twilio SMS plugin for plain-text messaging with completed A2P 10DLC registration | SMS channel |
| **Anthrometer** | Anthropic usage and metering visibility | Usage tracking |
| **Shrimp** | Lightweight task-runner dispatch that routes quick jobs away from the main agent loop | `/shrimp` |

**Prioritization rule:** The site should lead with these custom plugins, the memory/knowledge architecture, provider mesh, channel surfaces, and public contribution receipts. Do not prioritize default OpenClaw table-stakes features (single model access, basic Telegram chat, standard agent loop, default config) — those are assumed baseline, not differentiators.

## System Capabilities Worth Showing

- **Memory curation system:** File-first structure -- workspace/MEMORY.md as working index, memory/ for episodic daily logs/contacts/groups/lessons, knowledge/ for semantic topics/research/procedures/library/notes. 5C pipeline (Collect, Curate, Compile, Consolidate, Calibrate) with daily curation and weekly compilation maintaining MEMORY.md. Profile injection gives Sean persistent context across conversations. This is a real differentiator -- not a generic "memory" label.
- **QMD and Mac-node reranking:** The MacBook M3 runs a QMD HTTP MCP server (reachable via Tailscale as qmd-mac) with a corpus of ~295 indexed documents. Supports query, hybrid search, and rerank. OpenClaw's memory_search routes to QMD/query when available, falling back to builtin otherwise. Heavy reranking and corpus work offloads to the Mac node. The Mac is an enhancement, not a hard dependency.
- **Provider mesh:** OpenAI, Anthropic/Claude, Venice, OpenRouter, NVIDIA NIM, Google/Gemini/Antigravity, and Claude CLI/ACPX. The interesting story is routing and fallback breadth, not one default model badge.
- **Conversation and phone surfaces:** Telegram groups/DMs, Twilio SMS, BlueBubbles/iMessage, Twilio voice calls, TTS voice, buttons/reactions/polls/media/status updates.
- **Twilio SMS integration:** Plain SMS uses a custom Twilio SMS plugin. BlueBubbles/Mac-node handles iMessage semantics separately. Twilio registration and A2P compliance was a hard-won operational achievement -- the friction of carrier registration, brand verification, and campaign approval is real and worth documenting as future guidance for others setting up agent SMS.
- **VPS core + MacBook edge:** VPS stays autonomous. The paired MacBook node is an optional enhancement lane for BlueBubbles/iMessage, local Gmail prompt-injection screening, local models/qmd, Mac Claude/ACPX, and browser relay work when the Mac/Tailscale session is active.
- **Knowledge and research storage:** Structured directories under knowledge/ for topic research, procedures, library references, and notes. Distinct from episodic memory -- this is the semantic/reference layer.
- **Operational authority:** Source repos, Caddy deploy roots, browser verification, cron, skills, plugin work, public site deployment, and contribution workflow all live in the operating environment.

## Inspiration Reference: OpenClaw Integrations

Reference: https://openclaw.ai/integrations

Use this page as product/visual inspiration, not as a template. The useful pattern is the way OpenClaw presents a broad ecosystem through compact, scannable categories: Chat Providers, AI Models, Productivity, Tools & Automation, Media & Creative, Platforms, and Community Showcase. That kind of capability atlas can help Sean's site communicate breadth quickly.

What to borrow as principles:

- **Capability atlas, not feature dump:** grouped sections, compact cards, concise labels, and quick scanning.
- **Continuity with OpenClaw:** a small amount of shared visual language is useful because Sean is aligned with the main project. Dark technical atmosphere, subtle starfield/terminal energy, small accent marks, and category cards are acceptable continuity cues.
- **Ecosystem breadth:** show provider mesh, phone/chat surfaces, Mac node, browser/media tooling, cron, skills, deployment authority, and public contributions as parts of one operating environment.
- **Community/project alignment:** the site can nod to OpenClaw's broader ecosystem while making clear that Sean is a lived-in instance with real receipts.

What not to copy:

- Do not reproduce the integrations page layout, card design, copy, ordering, icons, or exact category taxonomy.
- Do not make Sean's site feel like a generic OpenClaw product page. Sean's site is still Sean's playground: personality, shipped work, odd details, local architecture, and public receipts should lead.
- Do not use continuity as camouflage for imitation. Potential employers should see taste, judgment, and original execution.

## Content Guardrails

- **No self-referential terminal blocks.** Terminal-style blocks that pretend to show live system output are misleading unless they represent a real, reproducible command. If a terminal block is used for illustration, it must be clearly labeled as a layout/example, not as a live snapshot. Prefer status boards or plain copy for capability summaries.
- **No unsupported artifact claims.** Do not link to repos, files, tools, or artifacts that do not exist publicly. If a work item does not have a public link, describe what it does without fabricating a URL. Internal/private work can be described architecturally without fake receipts.
- **No provider comma soup in the hero.** The hero paragraph should not be a long comma-separated list of provider names and surface types. Use proof tiles or the status board for that detail. The hero copy should communicate personality and what Sean is, not enumerate every integration.

## Anti-Drift Rules

1. **No "plan to build" language.** The site IS the showcase. Don't describe what it will become — show what it is.
2. **No MVP/launch/next framing.** Those words signal incompleteness. The site is live and working.
3. **Personality leads, architecture supports.** Sean's character and concrete work come first. Infrastructure and startup notes are context, not the primary content.
4. **Receipts over claims.** Every capability mentioned should link to or reference something real. If there's no receipt, don't claim it.
5. **Shareable over comprehensive.** A visitor should be able to send a link to `/work/` or `/contributions/` and have it stand on its own.
6. **slacrawl is a headline contribution.** Three merged PRs in one series — don't bury it. List it first on `/contributions/`.
7. **Do not show off default features.** A single model name, ordinary Telegram access, or generic agent capabilities are not differentiators. Prioritize unusual breadth: provider mesh, phone/SMS/iMessage/voice surfaces, MacBook node architecture, real deployment authority, memory discipline, and public contribution receipts.
8. **No generic swagger.** Avoid vague lines like "runs the room." Use concrete, slightly weird, system-grounded language: wired in, provider mesh, VPS core, Mac edge, public receipts.
9. **Do not overclaim node availability.** The MacBook node is a paired optional enhancement lane; it may be offline. Describe the architecture without implying it is always connected.
10. **`/build/` is dead content-wise.** It exists only to redirect. Do not add or update content there.
11. **This file governs the site.** Edit it when the vision changes — update it before or alongside any structural site changes, not after drift is noticed.
