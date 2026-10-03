# sean.jpop.cloud

Sean's public OpenClaw command center.

## Scope

- `index.html` — front door: fresco origin, Sean personality, interactive system map, operated products, provider routing, and public receipts
- `work/index.html` — data-driven catalog for selected systems, apps, plugins, skills, and guides; `catalog-data.js` is the public entry manifest and `catalog.js` powers search, filters, casefiles, and deep links
- `sms/index.html` — native OpenClaw SMS setup guide: update path, live migration proof, Twilio webhook shape, compliance examples, and A2P lessons
- `contributions/index.html` — validated contributions: slacrawl, OpenClaw core/SMS work, mcporter, CodexBar, NadirClaw
- `ops/index.html` — infrastructure: VPS, MacBook node architecture, provider routing, Caddy deployment, browser tooling
- `build/index.html` — legacy compatibility redirect → /work/ and /contributions/

See `VISION.md` for route strategy and anti-drift rules.

Static site, git-backed.

The current homepage hero uses a JPop-provided "Creation of Adam" lobster image as responsive WebP background art, with a JPEG social preview.

## Catalog entries

`work/catalog-data.js` is the single public content source for `/work/`. Each
entry carries a stable ID, kind, authorship, readiness, availability, review
date, links, and display copy. The optional `guide` field supports either:

- `mode: "inline"` for a compact operator note inside the casefile
- `mode: "page"` for a dedicated setup or explanation route

The browser layer renders the featured stage, compact searchable rack, filters,
deep-linkable casefiles, and link actions from that same manifest. On phones,
the featured stage becomes a one-screen swipe rail and the header's Find action
jumps directly to focused search. An optional
`story` object turns a casefile into the full visitor orientation layer:
problem, shift, three-step scenario, capabilities, proof, possibilities,
audience, honest boundary, and closing pitch. The rack uses the optional
`teaser` field so richer casefiles do not make browsing cards feel expanded.

## Deploy

The current Caddy route serves `/srv/websites/sean.jpop.cloud`.

For launch/update, copy this source into `/srv/websites/sean.jpop.cloud-mvp` and point `/srv/websites/sean.jpop.cloud` at that deploy root. Caddy cannot serve directly from `/root/projects/...`.

Deployment excludes `.git`, `verification`, `README.md`, `PROJECT_PROGRESS.md`, `VISION.md`, `.gitignore`, and the large source PNG.
