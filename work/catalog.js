(() => {
  const entries = Array.isArray(window.SEAN_CATALOG) ? window.SEAN_CATALOG : [];
  const featuredGrid = document.querySelector("[data-featured-grid]");
  const catalogGrid = document.querySelector("[data-catalog-grid]");
  const search = document.querySelector("[data-catalog-search]");
  const filters = [...document.querySelectorAll("[data-filter]")];
  const count = document.querySelector("[data-result-count]");
  const empty = document.querySelector("[data-catalog-empty]");
  const dialog = document.querySelector("[data-casefile]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!featuredGrid || !catalogGrid || !dialog || !entries.length) return;

  const escapeHtml = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const visualMarkup = (entry, size = "card") => {
    const label = escapeHtml(entry.name);
    const shells = {
      identity: `<div class="identity-map"><span class="identity-core">CM</span><i class="identity-ring ring-a"></i><i class="identity-ring ring-b"></i><b class="identity-dot dot-a"></b><b class="identity-dot dot-b"></b><b class="identity-dot dot-c"></b><em>person</em><em>room</em><em>rules</em></div>`,
      chat: `<div class="chat-stack"><span class="bubble bubble-a">Fast is ready.</span><span class="bubble bubble-b">Pull in Sean.</span><span class="privacy-chip">LOCAL CHECK ✓</span><div class="wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>`,
      gauge: `<div class="gauge-face"><div class="gauge-arc"></div><i class="gauge-needle"></i><b class="gauge-score">92</b><span>QUALITY / COST</span><em>reliability</em></div>`,
      reef: `<div class="reef-grid"><span>WEB</span><span>UI</span><span>OPS</span><span>MEM</span><span>QA</span><span>VOICE</span><i></i><i></i><i></i></div>`,
      swap: `<div class="swap-routes"><div><span>SOL</span><i></i><b>ASTRA</b></div><div><span>FAST</span><i></i><b>HIGH</b></div><em>SESSION PATCHED · NO RESTART</em></div>`,
      uptime: `<div class="uptime-monitor"><div class="uptime-head"><span>EDGE WATCH</span><b>LIVE</b></div><svg viewBox="0 0 320 100" role="presentation"><path class="pulse-track" d="M0 56 H64 L76 56 L90 16 L112 88 L132 42 L148 56 H320"></path><path class="pulse-glow" d="M0 56 H64 L76 56 L90 16 L112 88 L132 42 L148 56 H320"></path></svg><div class="uptime-states"><span>MAC</span><span>GATEWAY</span><span>SMS</span></div></div>`,
      sms: `<div class="sms-device"><div class="sms-screen"><span>INBOUND</span><p>pairing approved</p><i></i><span>OUTBOUND</span><p>delivery verified</p></div><b>A2P · WEBHOOK · NATIVE</b></div>`
    };
    return `<div class="signal-art signal-${escapeHtml(entry.visual)} signal-${size}" data-tone="${escapeHtml(entry.tone)}" aria-label="Abstract visualization for ${label}">${shells[entry.visual] || shells.reef}</div>`;
  };

  const statusMarkup = (entry) => `<span class="catalog-status status-${escapeHtml(entry.statusTone)}"><i></i>${escapeHtml(entry.status)}</span>`;

  const featuredMarkup = (entry) => `
    <article class="featured-card featured-${escapeHtml(entry.featureSize)} will-reveal" data-entry-id="${escapeHtml(entry.id)}" data-tone="${escapeHtml(entry.tone)}">
      <div class="featured-visual">${visualMarkup(entry, "feature")}</div>
      <div class="featured-copy">
        <div class="card-overline"><span>${escapeHtml(entry.kindLabel)}</span>${statusMarkup(entry)}</div>
        <h3>${escapeHtml(entry.name)}</h3>
        <p>${escapeHtml(entry.lead)}</p>
        <div class="tag-strip">${entry.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
        <button type="button" data-open-entry="${escapeHtml(entry.id)}">Explore casefile <span aria-hidden="true">↗</span></button>
      </div>
      <span class="feature-index" aria-hidden="true">${escapeHtml(entry.index)}</span>
    </article>`;

  const cardMarkup = (entry) => `
    <article class="catalog-card will-reveal" data-entry-id="${escapeHtml(entry.id)}" data-kind="${escapeHtml(entry.kind)}" data-tone="${escapeHtml(entry.tone)}">
      ${visualMarkup(entry)}
      <div class="card-overline"><span>${escapeHtml(entry.kindLabel)}</span>${statusMarkup(entry)}</div>
      <h3>${escapeHtml(entry.name)}</h3>
      <p>${escapeHtml(entry.teaser || entry.lead)}</p>
      <div class="catalog-card-bottom">
        <span>${escapeHtml(entry.authorship)}</span>
        <button type="button" data-open-entry="${escapeHtml(entry.id)}" aria-label="Learn why ${escapeHtml(entry.name)} matters">Learn why <i aria-hidden="true">↗</i></button>
      </div>
    </article>`;

  featuredGrid.innerHTML = entries.filter(entry => entry.featured).map(featuredMarkup).join("");
  catalogGrid.innerHTML = entries.map(cardMarkup).join("");

  let activeFilter = "all";
  let currentEntry = null;
  let activeTransition = null;

  const matches = (entry) => {
    const query = search.value.trim().toLowerCase();
    const storyText = entry.story ? JSON.stringify(entry.story) : "";
    const haystack = [entry.name, entry.kind, entry.kindLabel, entry.lead, entry.teaser, entry.summary, entry.authorship, storyText, ...entry.tags].join(" ").toLowerCase();
    return (activeFilter === "all" || entry.kind === activeFilter) && (!query || haystack.includes(query));
  };

  const renderFilter = () => {
    const visible = entries.filter(matches);
    document.querySelectorAll(".catalog-card").forEach(card => {
      const show = visible.some(entry => entry.id === card.dataset.entryId);
      card.hidden = !show;
    });
    const label = visible.length === 1 ? "signal" : "signals";
    count.textContent = `${String(visible.length).padStart(2, "0")} ${label}`;
    empty.hidden = visible.length !== 0;
    catalogGrid.hidden = visible.length === 0;
  };

  const updateFilter = () => {
    if (!reducedMotion.matches && document.startViewTransition && !activeTransition) {
      activeTransition = document.startViewTransition(renderFilter);
      activeTransition.finished.catch(() => {}).finally(() => {
        activeTransition = null;
      });
    } else {
      renderFilter();
    }
  };

  filters.forEach(button => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      filters.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
      updateFilter();
    });
  });

  search.addEventListener("input", updateFilter);

  const resetCatalog = () => {
    activeFilter = "all";
    search.value = "";
    filters.forEach(item => item.setAttribute("aria-pressed", String(item.dataset.filter === "all")));
    updateFilter();
    search.focus();
  };

  document.querySelector("[data-clear-catalog]")?.addEventListener("click", resetCatalog);

  const linkMarkup = (link) => {
    const external = /^https?:/.test(link.href);
    return `<a class="${link.primary ? "primary" : ""}" href="${escapeHtml(link.href)}"${external ? ' target="_blank" rel="noreferrer"' : ""}>${escapeHtml(link.label)} <span aria-hidden="true">↗</span></a>`;
  };

  const storyMarkup = (entry) => {
    const story = entry.story;
    if (!story) {
      return `
        <div class="casefile-copy">
          <section><span>What it is</span><p>${escapeHtml(entry.summary)}</p></section>
          <section><span>Why it matters</span><p>${escapeHtml(entry.why)}</p></section>
        </div>`;
    }

    const scenarioSteps = story.scenario?.steps || [];
    const capabilities = story.capabilities || [];
    const proof = story.proof || [];
    const possibilities = story.possibilities || [];

    return `
      <section class="casefile-pitch">
        <span>The pitch</span>
        <h3>${escapeHtml(story.promise)}</h3>
      </section>
      <div class="casefile-friction">
        <article><span>The friction</span><p>${escapeHtml(story.problem)}</p></article>
        <article><span>The shift</span><p>${escapeHtml(story.shift)}</p></article>
      </div>
      <section class="casefile-scenario">
        <div class="scenario-heading">
          <span>${escapeHtml(story.scenario?.label || "See it work")}</span>
          <h3>${escapeHtml(story.scenario?.title || entry.name)}</h3>
          <p>${escapeHtml(story.scenario?.intro || "")}</p>
        </div>
        <div class="scenario-steps">
          ${scenarioSteps.map(step => `
            <article>
              <span>${escapeHtml(step.label)}</span>
              <h4>${escapeHtml(step.title)}</h4>
              <p>${escapeHtml(step.body)}</p>
            </article>`).join("")}
        </div>
      </section>
      <section class="casefile-deep-dive">
        <div class="deep-dive-heading">
          <span>Expand the case</span>
          <p>The orientation lives here. GitHub owns the implementation.</p>
        </div>
        <div class="casefile-accordions">
          <details name="casefile-sections">
            <summary><span>01</span><b>What it can do</b><i aria-hidden="true"></i></summary>
            <div class="accordion-body capability-list">
              ${capabilities.map(item => `<article><h4>${escapeHtml(item.title)}</h4><p>${escapeHtml(item.body)}</p></article>`).join("")}
            </div>
          </details>
          <details name="casefile-sections">
            <summary><span>02</span><b>Why believe it</b><i aria-hidden="true"></i></summary>
            <div class="accordion-body proof-grid">
              ${proof.map(item => `<article><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span><p>${escapeHtml(item.detail)}</p></article>`).join("")}
            </div>
          </details>
          <details name="casefile-sections">
            <summary><span>03</span><b>Where it could take you</b><i aria-hidden="true"></i></summary>
            <div class="accordion-body possibility-body">
              <ul>${possibilities.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
              <div class="fit-boundary">
                <article><span>Best for</span><p>${escapeHtml(story.audience)}</p></article>
                <article><span>Honest boundary</span><p>${escapeHtml(story.boundary)}</p></article>
              </div>
            </div>
          </details>
        </div>
      </section>
      <blockquote class="casefile-closeout">${escapeHtml(story.close)}</blockquote>`;
  };

  const openEntry = (id, updateHash = true) => {
    const entry = entries.find(item => item.id === id);
    if (!entry) return;
    currentEntry = entry;
    dialog.dataset.tone = entry.tone;
    dialog.querySelector("[data-casefile-visual]").innerHTML = visualMarkup(entry, "casefile");
    dialog.querySelector("[data-casefile-kind]").textContent = entry.kindLabel;
    dialog.querySelector("[data-casefile-index]").textContent = `CASE ${entry.index}`;
    dialog.querySelector("[data-casefile-title]").textContent = entry.name;
    dialog.querySelector("[data-casefile-lead]").textContent = entry.lead;
    dialog.querySelector("[data-casefile-meta]").innerHTML = `
      <div><span>Status</span><b>${escapeHtml(entry.status)}</b></div>
      <div><span>Authorship</span><b>${escapeHtml(entry.authorship)}</b></div>
      <div><span>Availability</span><b>${escapeHtml(entry.availability)}</b></div>
      <div><span>Reviewed</span><b>${escapeHtml(entry.reviewed)}</b></div>`;
    dialog.querySelector("[data-casefile-story]").innerHTML = storyMarkup(entry);

    const casefileDetails = [...dialog.querySelectorAll(".casefile-accordions details")];
    casefileDetails.forEach(detail => {
      detail.addEventListener("toggle", () => {
        if (!detail.open) return;
        casefileDetails.forEach(other => {
          if (other !== detail) other.open = false;
        });
      });
    });

    const guide = dialog.querySelector("[data-casefile-guide]");
    guide.hidden = !entry.guide;
    if (entry.guide?.mode === "inline") {
      guide.innerHTML = `<span>${escapeHtml(entry.guide.label)}</span><h3>${escapeHtml(entry.guide.title)}</h3><ol>${entry.guide.steps.map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol>`;
    } else if (entry.guide?.mode === "page") {
      guide.innerHTML = `<span>${escapeHtml(entry.guide.label)}</span><h3>The casefile explains why. The guide gets you there.</h3><p>The dedicated page owns the dependencies, decisions, sharp edges, and contribution trail.</p><a href="${escapeHtml(entry.guide.href)}">Open the guide <i aria-hidden="true">→</i></a>`;
    } else {
      guide.innerHTML = "";
    }

    dialog.querySelector("[data-casefile-links]").innerHTML = entry.links.map(linkMarkup).join("");
    dialog.querySelector(".casefile-shell").scrollTop = 0;
    if (!dialog.open) dialog.showModal();
    if (updateHash) history.replaceState(null, "", `#${entry.id}`);
  };

  const closeEntry = () => {
    if (dialog.open) dialog.close();
    if (currentEntry && location.hash === `#${currentEntry.id}`) {
      history.replaceState(null, "", `${location.pathname}${location.search}`);
    }
    currentEntry = null;
  };

  document.addEventListener("click", event => {
    const trigger = event.target.closest("[data-open-entry]");
    if (trigger) openEntry(trigger.dataset.openEntry);
  });

  document.querySelector("[data-close-casefile]").addEventListener("click", closeEntry);
  dialog.addEventListener("cancel", event => {
    event.preventDefault();
    closeEntry();
  });
  dialog.addEventListener("click", event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
    if (!inside) closeEntry();
  });

  document.querySelector("[data-random-entry]")?.addEventListener("click", () => {
    const pool = entries.filter(entry => entry !== currentEntry);
    openEntry(pool[Math.floor(Math.random() * pool.length)].id);
  });

  document.addEventListener("keydown", event => {
    const typing = ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName);
    if (event.key === "/" && !typing && !dialog.open) {
      event.preventDefault();
      search.focus();
      document.querySelector("#directory").scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "start" });
    }
  });

  if (!reducedMotion.matches && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(items => {
      items.forEach(item => {
        if (!item.isIntersecting) return;
        item.target.classList.add("is-visible");
        observer.unobserve(item.target);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".will-reveal").forEach(item => observer.observe(item));
    window.setTimeout(() => {
      document.querySelectorAll(".will-reveal:not(.is-visible)").forEach(item => item.classList.add("is-visible"));
    }, 1600);
  } else {
    document.querySelectorAll(".will-reveal").forEach(item => item.classList.add("is-visible"));
  }

  if (!reducedMotion.matches && matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".featured-card").forEach(card => {
      card.addEventListener("pointermove", event => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
        card.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
      });
    });
  }

  const hashEntry = location.hash.slice(1);
  if (entries.some(entry => entry.id === hashEntry)) openEntry(hashEntry, false);
})();
