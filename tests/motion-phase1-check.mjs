import { readFileSync } from "node:fs";
import { strict as assert } from "node:assert";

const root = new URL("../", import.meta.url);
const html = readFileSync(new URL("index.html", root), "utf8");
const js = readFileSync(new URL("home.js", root), "utf8");
const css = readFileSync(new URL("home.css", root), "utf8");

assert.match(html, /class="no-js"/, "HTML has a no-JS marker");
assert.equal((html.match(/data-signal-step=/g) || []).length, 3, "three signal chapters are present");
for (const scenario of ["jpop", "family", "work", "stranger"]) {
  assert.match(html, new RegExp(`data-identity-scenario="${scenario}"`), `${scenario} simulator control exists`);
  assert.match(html, new RegExp(`<summary>${scenario === "jpop" ? "JPop" : scenario.charAt(0).toUpperCase() + scenario.slice(1)}`), `${scenario} no-JS fallback exists`);
}
assert.match(html, /aria-live="polite"/, "simulator result announces changes");
assert.match(js, /identityScenarios/, "scenario data is explicit in JavaScript");
assert.match(js, /history\.replaceState/, "panel state is deep-linkable");
assert.match(js, /classList\.replace\("no-js", "js"\)/, "JS enhancement marker is applied");
assert.match(css, /prefers-reduced-motion:reduce/, "reduced-motion rules exist");
assert.match(css, /signal-journey/, "signal journey styling exists");

console.log("Sean motion phase 1 checks: PASS");
