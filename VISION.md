# Sean Showcase Vision

This file is the durable reference for what sean.jpop.cloud is and how it should read. If the site drifts, come back here.

## Audience

The primary readers are potential employers, technical peers, friends, family,
and people curious about JPop's work. They should leave understanding: (1) what
makes Sean a custom-built operator rather than a stock agent, (2) that the setup
reflects real product, UX, and engineering judgment, and (3) that JPop is a
person worth working with. The site is Sean's room and a public invitation into
the work, not a product pitch or an application.

## Voice and Tone

Sean's voice is direct, slightly odd, system-grounded, and confident without bragging. Prefer concrete language over abstract claims. Use specific system details ("file-first memory surviving restarts") instead of vague marketing ("powerful AI memory"). Humor is fine when it comes naturally; forced cleverness is not. The lobster is the mascot, not a gimmick -- keep the personality anchored to real capability.

JPop is the human behind Sean. The site should make that relationship clear without turning into a biography. A short human anchor on the homepage is enough.

## Chosen Hero Line

The current homepage H1 is:

> Sean the Crustacean. Locked in. Claws out.

This keeps the pun/personality visible without making the hero a feature dump. The supporting copy should carry the proof: ClawPop control plane, VPS public edge, memory, channels, plugins, and contribution receipts.

## Core Idea

Sean is a working OpenClaw agent whose production home is ClawPop, a MacBook
control plane running the Gateway, memory, tools, browser, projects, local-model
lanes, and proof environments. A retained VPS handles the public edge: Caddy,
TLS, hosted sites, and selected network services. OpenClaw supplies the runtime;
Sean's identity comes from the custom systems built around it: Claw Machine,
the capture-curate-learn knowledge pipeline, Nemo/Dory/Anemone privacy modes,
named tools and plugins, meaningful phone/chat surfaces, public launches, and
inspectable contributions. The site is the showcase itself, not a plan.

The front door is Sean's personality. A visitor should immediately understand who Sean is and what Sean does -- not read about what we intend to build.

## Route Strategy

| Route | Purpose |
|---|---|
| `/` | Front door. Sean personality introduction. Routes to Work, SMS, Contributions, Ops. |
| `/work/` | Digestible path of valuable shipped work — the portfolio. Send this link to show what Sean can do. |
| `/sms/` | Native OpenClaw SMS setup guide: update first, use the official Twilio-backed `sms` channel, prepare compliance pages, configure webhooks, and test pairing. |
| `/contributions/` | Validated/published contributions with concrete receipts. Three strong PR cards. |
| `/ops/` | Infrastructure: VPS, MacBook node, Caddy, deployment, browser tooling. Architecture is descriptive, not prescriptive. |
| `/build/` | Legacy compatibility redirect to /work/ and /contributions/. No content updates here. |

## Nav Order

All pages: `Home` → `Work` → `SMS` → `Contributions` → `Ops` → `GitHub`

## Site Structure

### `/` — Sean Introduction (front door)
The homepage is Sean. Personality first: the lobster, the voice, what Sean actually does day-to-day. This page should feel like meeting Sean, not reading a product spec. Proof tiles and capability status are supporting texture, not the headline.

### `/work/` — Valuable Work (digestible, shareable)
A clear path through the concrete things Sean has built and shipped. This is the page you'd send someone to show what Sean can do. Skills, plugins, multi-channel conversation UX, research tools, workflow glue — organized so a reader can scan it in 30 seconds or dig deeper.

### `/sms/` — Native SMS Setup Guide
The guide for people who want to set up SMS themselves. Sean/JPop built a
custom Twilio lane, proposed SMS upstream, helped prove and land the native
channel, retired the custom runtime, and documented the compliance work so the
next operator has a safer path. Tell that arc once on the homepage and once in
the guide; elsewhere, lead with the current native channel and official docs.

### `/contributions/` — Validated Published Contributions
The receipts. Every merged PR, credited fix, proposal worth keeping on the public record, and public contribution with links. slacrawl is surfaced prominently — it's a clean, merged, three-PR series that demonstrates real open-source contribution quality. OpenClaw core, OpenClaw SMS channel work, mcporter, CodexBar, and NadirClaw round it out.

### `/ops/` — Supporting Infrastructure + Architecture Notes
VPS hosting, Caddy routing, deployment discipline, browser tooling, MacBook node architecture, safety boundaries, and lightweight startup/product architecture suggestions. This is supporting material that shows how Sean runs and how the pattern could become a product — important context, but not the main pitch. It backs up the showcase; it doesn't lead it.

### `/build/` — Compatibility Redirect
Points visitors to `/work/` and `/contributions/`. Kept so old links and bookmarks don't break. Never add new content here.

## Concrete Receipts We Have

- **slacrawl**: Merged PRs #19 (analytics trends flake fix), #20 (exclude_channels config), #21 (auto_join config) — vincentkoc/slacrawl
- **OpenClaw core**: Slack thread handling (PR #56606), DM route scoping (PR #73085), Telegram URL buttons (PR #76264)
- **OpenClaw SMS channel work**: Original SMS RFC #85857, guarded Twilio egress PR #88515, merged proof follow-up PR #88601, A2P docs PR #88743, SMS command auth PR #90998, and upstream native channel context PR #88476
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
| **Twilio SMS path** | Earlier custom plugin work that proved the SMS lane; new setups should use OpenClaw's native Twilio-backed `sms` channel with completed A2P 10DLC registration as our operational proof point | SMS channel |
| **Anthrometer** | Anthropic usage and metering visibility | Usage tracking |
| **Shrimp** | Lightweight task-runner dispatch that routes quick jobs away from the main agent loop | `/shrimp` |

**Prioritization rule:** The site should lead with these custom plugins, the memory/knowledge architecture, provider mesh, channel surfaces, and public contribution receipts. Do not prioritize default OpenClaw table-stakes features (single model access, basic Telegram chat, standard agent loop, default config) — those are assumed baseline, not differentiators.

## System Capabilities Worth Showing

- **Memory and durable-knowledge system:** File-first structure --
  workspace/MEMORY.md as a working index, memory/ for episodic daily logs,
  contacts, groups, and lessons, and knowledge/ for topics, research,
  procedures, library material, and reference notes. The live 4C pipeline is
  Collect, Curate, Compile, and Calibrate; Consolidate is not a live stage.
  Valuable experience is captured, curated, learned from, and promoted into
  durable knowledge when it should remain available without being injected
  into every conversation. Search returns provenance. This is the
  differentiator, not the generic word "memory."
- **Claw Machine:** The public profile-injector resolves exact contact and room
  profiles so one shared agent can behave personally across people, families,
  groups, and business surfaces without sharing everybody's context or
  authority. Live production remains on verified v3; v4's cross-channel
  identity resolver is built and tested but rollout is approval-gated.
- **Nemo, Dory, and Anemone:** Nemo is the local-only persistent agent inside
  the Anemone isolation boundary. Dory is the deliberately forgetful mode with
  fresh sessions and no memory search. Public copy must distinguish transport
  and local-retention realities from the stronger claim that cloud model
  providers do not receive Nemo/Dory inference traffic.
- **QMD and Mac-node reranking:** The MacBook M3 runs a QMD HTTP MCP server (reachable via Tailscale as qmd-mac) with a corpus of ~295 indexed documents. Supports query, hybrid search, and rerank. OpenClaw's memory_search routes to QMD/query when available, falling back to builtin otherwise. Heavy reranking and corpus work offloads to the Mac node. The Mac is an enhancement, not a hard dependency.
- **Provider mesh:** OpenAI, Anthropic/Claude, Venice, OpenRouter, NVIDIA NIM, Google/Gemini/Antigravity, and Claude CLI/ACPX. The interesting story is routing and fallback breadth, not one default model badge.
- **Conversation and phone surfaces:** Telegram groups/DMs, Twilio SMS, BlueBubbles/iMessage, Twilio voice calls, TTS voice, buttons/reactions/polls/media/status updates.
- **Twilio SMS contribution and integration:** Sean/JPop built the pre-native
  custom path, published the original RFC and follow-up proof/docs work, then
  migrated production to OpenClaw's native Twilio-backed `sms` channel.
  BlueBubbles/Mac-node handles iMessage semantics separately. Twilio
  registration, A2P compliance, webhook routing, inbound replies, and outbound
  sends are verified operational achievements worth documenting for others.
- **ClawPop core + VPS public edge:** ClawPop is the production control plane for the Gateway, memory, tools, browser, projects, providers, BlueBubbles/iMessage, local screening, local models/search, and coding harnesses. The retained VPS is the public edge for Caddy, TLS, hosted sites, and selected network services.
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
8. **No generic swagger.** Avoid vague lines like "runs the room." Use concrete, slightly weird, system-grounded language: wired in, provider mesh, ClawPop control plane, VPS public edge, public receipts.
9. **Keep architecture current.** ClawPop is the production home; the VPS is the retained public edge. Do not restore the retired VPS-core/Mac-edge framing.
10. **Tell the SMS arc, then help.** The homepage may tell the contribution arc
    once: custom path → upstream proposal/proof → native channel → retired
    plugin → practical setup guide. The guide may repeat it once with receipts.
    Other pages should describe the current native channel without replaying
    the history.
11. **Custom build before commodity breadth.** Channels and providers matter
    only when they explain relationships, privacy boundaries, reach, routing,
    or work that Sean/JPop built. Do not present a generic integration count as
    the reason Sean is special.
12. **No stale live claims.** Disabled email reading/screening, approval-gated
    Claw Machine v4 rollout, unproven authenticated account access, and pending
    transport canaries must be labeled honestly or omitted.
13. **`/build/` is dead content-wise.** It exists only to redirect. Do not add or update content there.
14. **This file governs the site.** Edit it when the vision changes — update it before or alongside any structural site changes, not after drift is noticed.
