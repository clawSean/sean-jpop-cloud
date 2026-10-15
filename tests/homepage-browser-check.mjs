import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { existsSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { homedir, tmpdir } from "node:os";
import { join } from "node:path";
import { strict as assert } from "node:assert";

const chrome = process.env.CHROME_PATH || [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  join(homedir(), "Applications/Google Chrome.app/Contents/MacOS/Google Chrome"),
  "/usr/bin/google-chrome",
  "/usr/bin/chromium"
].find(existsSync);
if (!chrome) throw new Error("Chrome/Chromium not found. Set CHROME_PATH to run browser checks.");

const origin = process.env.SITE_ORIGIN || "http://127.0.0.1:4174";
const proofDir = mkdtempSync(join(tmpdir(), "sean-homepage-browser-"));
const keepProof = process.env.KEEP_BROWSER_PROOF === "1";
const freePort = await new Promise((resolve, reject) => {
  const server = createServer();
  server.once("error", reject);
  server.listen(0, "127.0.0.1", () => {
    const { port } = server.address();
    server.close(() => resolve(port));
  });
});

const browser = spawn(chrome, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--disable-dev-shm-usage",
  `--remote-debugging-port=${freePort}`,
  `--user-data-dir=${join(proofDir, "profile")}`,
  "about:blank"
], { stdio: "ignore" });

const waitForJson = async (url) => {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return await response.json();
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error(`Chrome DevTools did not become ready at ${url}`);
};

let socket;
try {
  await waitForJson(`http://127.0.0.1:${freePort}/json/version`);
  const page = await fetch(`http://127.0.0.1:${freePort}/json/new?about:blank`, { method: "PUT" }).then((response) => response.json());
  socket = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", reject, { once: true });
  });

  let commandId = 0;
  const pending = new Map();
  const eventWaiters = new Map();
  const exceptions = [];
  const loadFailures = [];
  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id) {
      const waiter = pending.get(message.id);
      if (!waiter) return;
      pending.delete(message.id);
      if (message.error) waiter.reject(new Error(`${waiter.method}: ${message.error.message}`));
      else waiter.resolve(message.result);
      return;
    }
    if (message.method === "Runtime.exceptionThrown") exceptions.push(message.params.exceptionDetails.text);
    if (message.method === "Network.loadingFailed") loadFailures.push(message.params.errorText);
    const waiters = eventWaiters.get(message.method);
    if (!waiters?.length) return;
    eventWaiters.delete(message.method);
    waiters.forEach((resolve) => resolve(message.params));
  });

  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const id = ++commandId;
    pending.set(id, { method, resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
  const waitForEvent = (method) => new Promise((resolve) => {
    const waiters = eventWaiters.get(method) || [];
    waiters.push(resolve);
    eventWaiters.set(method, waiters);
  });
  const evaluate = async (expression) => {
    const result = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
    if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
    return result.result.value;
  };
  const navigate = async () => {
    const loaded = waitForEvent("Page.loadEventFired");
    await send("Page.navigate", { url: `${origin}/` });
    await loaded;
    await evaluate(`(async () => {
      await document.fonts.ready;
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      return true;
    })()`);
  };

  await send("Page.enable");
  await send("Runtime.enable");
  await send("Network.enable");

  for (const [width, height, name] of [[320, 700, "narrow-mobile"], [390, 844, "mobile"], [768, 1024, "tablet"], [1440, 1000, "desktop"]]) {
    await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: width <= 480, screenWidth: width, screenHeight: height });
    await navigate();
    const metrics = await evaluate(`(() => {
      const link = [...document.querySelectorAll('.home-links a')].find((node) => node.href === 'https://schwifty.jpop.cloud/');
      const rect = link?.getBoundingClientRect();
      return {
        width: window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        bodyScrollWidth: document.body.scrollWidth,
        href: link?.href,
        text: link?.textContent.trim(),
        visible: !!rect && rect.width > 0 && rect.height > 0
      };
    })()`);
    assert.equal(metrics.width, width, `${name} viewport is exact`);
    assert.ok(metrics.scrollWidth <= width, `${name} has no document overflow (${metrics.scrollWidth}/${width})`);
    assert.ok(metrics.bodyScrollWidth <= width, `${name} body has no overflow (${metrics.bodyScrollWidth}/${width})`);
    assert.equal(metrics.href, "https://schwifty.jpop.cloud/", `${name} keeps the canonical showcase URL`);
    assert.equal(metrics.text, "Get Schwifty ↗", `${name} keeps the discovery label`);

    if (width <= 860) {
      const opened = await evaluate(`(() => {
        document.querySelector('[data-home-menu]').click();
        const link = [...document.querySelectorAll('.home-links a')].find((node) => node.href === 'https://schwifty.jpop.cloud/');
        const rect = link.getBoundingClientRect();
        return {
          expanded: document.querySelector('[data-home-menu]').getAttribute('aria-expanded'),
          open: document.querySelector('[data-home-links]').classList.contains('is-open'),
          visible: rect.width > 0 && rect.height >= 44
        };
      })()`);
      assert.deepEqual(opened, { expanded: "true", open: true, visible: true }, `${name} exposes Schwifty through the accessible menu`);
    } else {
      assert.equal(metrics.visible, true, `${name} shows Schwifty in the primary navigation`);
    }

    if (keepProof && (width === 390 || width === 1440)) {
      const shot = await send("Page.captureScreenshot", { format: "png", fromSurface: true });
      writeFileSync(join(proofDir, `sean-homepage-${name}.png`), Buffer.from(shot.data, "base64"));
    }
  }

  assert.deepEqual(exceptions, [], `browser exceptions: ${JSON.stringify(exceptions)}`);
  assert.deepEqual(loadFailures, [], `failed resources: ${JSON.stringify(loadFailures)}`);
  console.log(`Sean homepage browser checks: PASS (320, 390, 768, 1440)${keepProof ? ` · ${proofDir}` : ""}`);
} finally {
  socket?.close();
  if (browser.exitCode === null) {
    browser.kill("SIGTERM");
    await Promise.race([
      new Promise((resolve) => browser.once("exit", resolve)),
      new Promise((resolve) => setTimeout(resolve, 1500))
    ]);
  }
  if (browser.exitCode === null) browser.kill("SIGKILL");
  if (!keepProof) rmSync(proofDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
}
