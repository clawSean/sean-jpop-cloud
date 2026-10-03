import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [uiSource, htmlSource, cssSource] = await Promise.all([
  readFile(new URL("../work/catalog.js", import.meta.url), "utf8"),
  readFile(new URL("../work/index.html", import.meta.url), "utf8"),
  readFile(new URL("../work/catalog.css", import.meta.url), "utf8"),
]);

assert.match(htmlSource, /data-catalog-grid data-view="visual"/, "visual rack must remain the default");
assert.match(htmlSource, /data-catalog-view="visual"/, "visual view control is missing");
assert.match(htmlSource, /data-catalog-view="compact"/, "compact view control is missing");
assert.match(htmlSource, /catalog\.css\?v=20261002c/, "mobile density CSS must use the release cache key");
assert.doesNotMatch(uiSource, /entries\.slice\s*\(/, "the complete catalog must not be truncated");
assert.doesNotMatch(htmlSource, /load more/i, "the complete catalog must not hide behind load-more controls");
assert.match(uiSource, /sean-catalog-view/, "the visitor's rack preference must be remembered");
assert.match(uiSource, /--catalog-toolbar-top/, "sticky controls must track the fixed header height");
assert.match(cssSource, /grid-template-columns:\s*repeat\(3, minmax\(0, 1fr\)\)/, "desktop rack must retain three columns");
assert.match(cssSource, /grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\)/, "tablet rack must retain two columns");
assert.match(cssSource, /\.catalog-rack\s*\{\s*grid-template-columns:\s*1fr;/s, "mobile rack must retain one column");
assert.match(cssSource, /\.catalog-card\s*\{\s*min-height:\s*356px;/s, "mobile visual cards must retain meaningful height");
assert.match(cssSource, /\.catalog-card \.signal-art\s*\{\s*height:\s*146px;/s, "mobile visual artwork must stay prominent");
assert.match(cssSource, /@media \(max-width: 620px\)[\s\S]*?\.catalog-toolbar\s*\{[\s\S]*?position:\s*relative;/, "mobile catalog controls must scroll away instead of covering the rack");
assert.match(cssSource, /top:\s*var\(--catalog-toolbar-top/, "sticky controls must use the measured header offset");

console.log("Catalog density checks: PASS");
