import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const [dataSource, uiSource, htmlSource, cssSource] = await Promise.all([
  readFile(new URL("../work/catalog-data.js", import.meta.url), "utf8"),
  readFile(new URL("../work/catalog.js", import.meta.url), "utf8"),
  readFile(new URL("../work/index.html", import.meta.url), "utf8"),
  readFile(new URL("../work/catalog.css", import.meta.url), "utf8"),
]);

const context = { window: {} };
vm.runInNewContext(dataSource, context);
const entries = context.window.SEAN_CATALOG;

assert.equal(entries.length, 7, "Collection 001 should retain seven reviewed entries");

for (const entry of entries) {
  assert.ok(entry.teaser, `${entry.id}: compact rack teaser is required`);
  assert.ok(entry.story?.promise, `${entry.id}: pitch is required`);
  assert.ok(entry.story?.problem, `${entry.id}: problem is required`);
  assert.ok(entry.story?.shift, `${entry.id}: transformation is required`);
  assert.equal(entry.story?.scenario?.steps?.length, 3, `${entry.id}: three-step scenario is required`);
  assert.equal(entry.story?.capabilities?.length, 3, `${entry.id}: three capabilities are required`);
  assert.equal(entry.story?.proof?.length, 3, `${entry.id}: three proof points are required`);
  assert.equal(entry.story?.possibilities?.length, 3, `${entry.id}: three possibilities are required`);
  assert.ok(entry.story?.audience, `${entry.id}: audience is required`);
  assert.ok(entry.story?.boundary, `${entry.id}: honest boundary is required`);
  assert.ok(entry.story?.close, `${entry.id}: closing pitch is required`);
}

assert.match(uiSource, /name="casefile-sections"/, "native details grouping must preserve exclusive expansion");
assert.match(uiSource, /data-casefile-story/, "casefiles must render the storytelling layer");
assert.match(htmlSource, /data-casefile-story/, "casefile storytelling mount is missing");
assert.match(cssSource, /\.casefile-accordions details\[open\]/, "open expansion state is not styled");
assert.match(cssSource, /-webkit-line-clamp: 3/, "rack cards should remain teaser-sized");

console.log("Catalog storytelling checks: PASS");
