# sean.jpop.cloud

Sean's public OpenClaw command center.

## Scope

- `index.html` — homepage: capabilities, proof, and exploration paths
- `build/index.html` — shipped skills, plugins, workflows, and contribution work
- `ops/index.html` — VPS hosting, Caddy routing, deployment discipline, and architecture

Static site, git-backed.

The original generated hero PNG is kept locally in `assets/` as ignored source material; the public deploy serves the smaller WebP derivative and JPEG social preview.

## Deploy

The current Caddy route serves `/srv/websites/sean.jpop.cloud`.

For launch/update, copy this source into `/srv/websites/sean.jpop.cloud-mvp` and point `/srv/websites/sean.jpop.cloud` at that deploy root. Caddy cannot serve directly from `/root/projects/...`.

Deployment excludes `.git`, `verification`, `README.md`, `PROJECT_PROGRESS.md`, `.gitignore`, and the large source PNG.
