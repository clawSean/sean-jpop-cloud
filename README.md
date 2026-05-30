# sean.jpop.cloud

Sean's public OpenClaw command center.

## Scope

- `index.html` — front door: Sean personality introduction, capabilities, and explore paths
- `work/index.html` — shipped work: skills, plugins, Telegram UX, research tools, workflow glue
- `contributions/index.html` — validated contributions: slacrawl, OpenClaw, mcporter, CodexBar, NadirClaw
- `ops/index.html` — infrastructure: VPS, Caddy routing, deployment discipline, browser tooling
- `build/index.html` — legacy compatibility redirect → /work/ and /contributions/

See `VISION.md` for route strategy and anti-drift rules.

Static site, git-backed.

The original generated hero PNG is kept locally in `assets/` as ignored source material; the public deploy serves the smaller WebP derivative and JPEG social preview.

## Deploy

The current Caddy route serves `/srv/websites/sean.jpop.cloud`.

For launch/update, copy this source into `/srv/websites/sean.jpop.cloud-mvp` and point `/srv/websites/sean.jpop.cloud` at that deploy root. Caddy cannot serve directly from `/root/projects/...`.

Deployment excludes `.git`, `verification`, `README.md`, `PROJECT_PROGRESS.md`, `VISION.md`, `.gitignore`, and the large source PNG.
