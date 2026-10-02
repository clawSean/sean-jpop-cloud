# Catalog density rollout

Scope: make the existing `/work/` rack scale to 30-plus entries without hiding
inventory or weakening the visual-first mobile experience. No catalog entries,
shared site files, Caddy, services, dependencies, or OpenClaw configuration
change in this release.

## Approved interaction contract

1. Keep three desktop columns, two tablet columns, and one mobile column.
2. Render every reviewed entry immediately; do not add pagination or load-more.
3. Tighten visual rack cards on desktop and tablet while preserving large mobile
   artwork, three-line mobile pitches, and comfortable touch spacing.
4. Keep Visual as the default and offer remembered Compact density as an
   explicit visitor choice.
5. Keep search and kind filters sticky without colliding with the fixed site
   header.
6. Compress Collection Rules into a slim closer; preserve featured projects and
   the existing casefile storytelling model.

## Source gate

1. Branch starts from merged production source `98b3f90`.
2. `git diff --check`, JavaScript syntax, storytelling, density, and homepage
   motion contracts pass.
3. Browser proof covers `390`, `768`, `1280`, and `1440px`, both rack views,
   preference persistence, filtering, search, casefile open/close, hash cleanup,
   focus restoration, and sticky-header clearance.
4. Thirty-card simulation has zero horizontal overflow on mobile and desktop.
5. Browser console and page-error logs are empty.

## Promotion

1. Publish and merge the reviewed branch.
2. Archive the current production versions of the four `/work/` assets.
3. Deploy only:
   - `work/index.html`
   - `work/catalog.css`
   - `work/catalog.js`
   - `work/catalog-data.js`
4. Normalize deployed files to `caddy:caddy` and mode `0644`.
5. Retire the temporary density preview recoverably after production proof.

## Production proof

1. Match source and production SHA-256 hashes for all four deployed files.
2. Repeat the four-width geometry matrix with no horizontal overflow.
3. Verify all seven entries render immediately in Visual mode for a fresh
   visitor; exercise Compact mode and reload persistence.
4. Exercise filtering, search, one casefile, Escape close, hash cleanup, and
   focus restoration.
5. Confirm zero browser errors and update project/site records with commit, PR,
   rollback, and proof receipts.
