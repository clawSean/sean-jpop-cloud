import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const [dataSource, uiSource, htmlSource, cssSource, homeSource, smsSource, contributionsSource, opsSource] = await Promise.all([
  readFile(new URL("../work/catalog-data.js", import.meta.url), "utf8"),
  readFile(new URL("../work/catalog.js", import.meta.url), "utf8"),
  readFile(new URL("../work/index.html", import.meta.url), "utf8"),
  readFile(new URL("../work/catalog.css", import.meta.url), "utf8"),
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../sms/index.html", import.meta.url), "utf8"),
  readFile(new URL("../contributions/index.html", import.meta.url), "utf8"),
  readFile(new URL("../ops/index.html", import.meta.url), "utf8"),
]);

const context = { window: {} };
vm.runInNewContext(dataSource, context);
const entries = context.window.SEAN_CATALOG;

assert.equal(entries.length, 10, "Collection 001 should contain ten reviewed entries after the feedback pass");

for (const id of ["telegram-workspace", "action-button-voice-inbox", "active-initiative-docs"]) {
  assert.ok(entries.some(entry => entry.id === id), `${id}: approved catalog entry is missing`);
}

assert.equal(entries.find(entry => entry.id === "telegram-workspace")?.kind, "app", "Telegram must appear under Apps");
assert.equal(entries.find(entry => entry.id === "action-button-voice-inbox")?.kind, "app", "Action Button must appear under Apps");

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
for (const [route, source] of [["home", homeSource], ["catalog", htmlSource], ["sms", smsSource], ["contributions", contributionsSource], ["ops", opsSource]]) {
  assert.doesNotMatch(source, /<a href="https:\/\/github\.com\/clawSean"(?: rel="me")?>GitHub(?: ↗)?<\/a>/, `${route}: external GitHub must not masquerade as primary navigation`);
}
for (const [route, source] of [["catalog", htmlSource], ["sms", smsSource], ["contributions", contributionsSource], ["ops", opsSource]]) {
  assert.match(source, /<details class="nav-menu" data-site-menu>/, `${route}: compact progressive mobile navigation is missing`);
}
assert.match(htmlSource, /Explore all public work on GitHub/, "GitHub must remain available as a clearly external CTA");
assert.doesNotMatch(htmlSource, /Browse every selected signal/, "reader-facing directory copy must not use the awkward selected-signal phrase");
assert.doesNotMatch(htmlSource, /Source when there is source/, "the closer must not explain the internal content model");
assert.match(htmlSource, /Found something useful\?/, "the closer must lead with reader value");
assert.match(htmlSource, /try the live build, inspect the source, or follow the setup guide/, "the closer must offer one compact action path");
assert.doesNotMatch(htmlSource, /Understand it|Try or inspect it|Put it to work|principle-grid/, "the closer must not repeat its action path as numbered steps");
assert.match(cssSource, /\.casefile-accordions details\[open\]/, "open expansion state is not styled");
assert.match(cssSource, /-webkit-line-clamp: 3/, "rack cards should remain teaser-sized");

console.log("Catalog storytelling checks: PASS");
