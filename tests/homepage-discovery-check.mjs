import { readFileSync } from "node:fs";
import { strict as assert } from "node:assert";

const root = new URL("../", import.meta.url);
const home = readFileSync(new URL("index.html", root), "utf8");

assert.match(home, /<nav class="home-nav"[\s\S]+href="https:\/\/schwifty\.jpop\.cloud\/">Get Schwifty ↗<\/a>/, "primary navigation exposes the Get Schwifty showcase");
assert.equal((home.match(/https:\/\/schwifty\.jpop\.cloud\//g) || []).length, 1, "homepage keeps one deliberate Schwifty discovery route");

console.log("Homepage discovery checks: PASS");
