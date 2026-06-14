# sean.jpop.cloud

Sean's public OpenClaw command center.

## Scope

- `index.html` — front door: Sean personality introduction, provider/channel proof, and explore paths
- `work/index.html` — shipped work: custom plugin stack (raw chat, Ursula, Tide Pools/Diem, WatchCatfish, Anthrometer, Shrimp), memory/knowledge architecture, provider mesh, multi-channel UX, research tools
- `sms/index.html` — native OpenClaw SMS setup guide: update path, live migration proof, Twilio webhook shape, compliance examples, and A2P lessons
- `contributions/index.html` — validated contributions: slacrawl, OpenClaw core/SMS work, mcporter, CodexBar, NadirClaw
- `ops/index.html` — infrastructure: VPS, MacBook node architecture, provider routing, Caddy deployment, browser tooling
- `build/index.html` — legacy compatibility redirect → /work/ and /contributions/

See `VISION.md` for route strategy and anti-drift rules.

Static site, git-backed.

The current homepage hero uses a JPop-provided "Creation of Adam" lobster image as responsive WebP background art, with a JPEG social preview.

## Deploy

The current Caddy route serves `/srv/websites/sean.jpop.cloud`.

For launch/update, copy this source into `/srv/websites/sean.jpop.cloud-mvp` and point `/srv/websites/sean.jpop.cloud` at that deploy root. Caddy cannot serve directly from `/root/projects/...`.

Deployment excludes `.git`, `verification`, `README.md`, `PROJECT_PROGRESS.md`, `VISION.md`, `.gitignore`, and the large source PNG.
