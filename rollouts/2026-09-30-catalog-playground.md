# Catalog collection 001 rollout

Scope: promote the reviewed data-driven catalog to `/work/`, update the shared
navigation label from Work to Catalog, and refresh the homepage doorway. No
Caddy, service, dependency, or OpenClaw changes.

## Source gate

1. Branch starts from current `origin/master` production source.
2. `work/catalog-data.js` contains only reviewed public-safe entries and links.
3. JavaScript syntax, `git diff --check`, link readback, and browser proof pass.
4. Browser proof covers desktop, tablet, mobile, reduced motion, filters,
   search, empty state, casefiles, deep links, and no-JavaScript fallback.

## Promotion

1. Publish and merge the catalog branch.
2. Create a timestamped archive of every production path being replaced.
3. Deploy only:
   - `index.html`
   - `sms/index.html`
   - `contributions/index.html`
   - `ops/index.html`
   - `work/index.html`
   - `work/catalog-data.js`
   - `work/catalog.css`
   - `work/catalog.js`
4. Normalize web-root ownership and file modes.

## Production proof

1. Read back exact file hashes from source and production.
2. Verify `/work/` at mobile and desktop widths with no horizontal overflow or
   browser errors.
3. Exercise search, every filter, an inline-note casefile, a dedicated-guide
   casefile, hash deep links, and focus restoration.
4. Verify the homepage doorway and shared Catalog navigation label.
5. Record the commit, rollback archive, deployed paths, and proof result in the
   project status/log and hosted-site index.
