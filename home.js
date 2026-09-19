document.documentElement.classList.replace("no-js", "js");

const menu = document.querySelector("[data-home-menu]");
const links = document.querySelector("[data-home-links]");

const closeMenu = (restoreFocus = false) => {
  if (!menu || !links) return;
  menu.setAttribute("aria-expanded", "false");
  menu.textContent = "Menu";
  links.classList.remove("is-open");
  if (restoreFocus) menu.focus();
};

if (menu && links) {
  menu.addEventListener("click", () => {
    const opening = menu.getAttribute("aria-expanded") !== "true";
    menu.setAttribute("aria-expanded", String(opening));
    menu.textContent = opening ? "Close" : "Menu";
    links.classList.toggle("is-open", opening);
  });
  links.addEventListener("click", event => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("click", event => {
    if (!event.target.closest(".home-nav")) closeMenu();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu(true);
  });
}

const tabs = [...document.querySelectorAll("[data-panel]")];
const panels = [...document.querySelectorAll("[data-console-panel]")];
const signalSteps = [...document.querySelectorAll("[data-signal-step]")];

const identityScenarios = {
  jpop: {
    label: "CURRENT ROOM · JPOP",
    context: "Full relationship profile and the shared project history.",
    policy: "Be direct, protect other people’s context, and act within the trust we built.",
    reach: "Personal tools, private work, and the authority JPop explicitly granted.",
    memory: "Curated durable knowledge with provenance—not an unfiltered transcript."
  },
  family: {
    label: "CURRENT ROOM · FAMILY",
    context: "Family context only, with room-specific boundaries around everyone in it.",
    policy: "Be warm, ask before acting, and never leak JPop-only information.",
    reach: "Family support and agreed surfaces—not somebody else’s private authority.",
    memory: "Useful family continuity, curated for the room rather than copied from JPop."
  },
  work: {
    label: "CURRENT ROOM · WORK",
    context: "The project, workplace, and evidence relevant to the request.",
    policy: "Be concise, cite the work, and use only the tools and authority needed.",
    reach: "Research, QA, proof, and work systems; personal continuity stays out.",
    memory: "Project knowledge can last when it earns that status; private life does not come along."
  },
  stranger: {
    label: "CURRENT ROOM · STRANGER",
    context: "The current request and nothing private that has not been offered.",
    policy: "Least privilege first: explain boundaries, prove claims, and ask before acting.",
    reach: "Public information and explicitly granted tools only.",
    memory: "No durable memory by default; a conversation is not an invitation to keep everything."
  }
};

const setSignalStep = panelName => {
  signalSteps.forEach(step => {
    const active = step.dataset.signalStep === panelName;
    step.classList.toggle("is-active", active);
    const link = step.querySelector("a");
    if (link) {
      if (active) link.setAttribute("aria-current", "step");
      else link.removeAttribute("aria-current");
    }
  });
};

const updateIdentityScenario = key => {
  const scenario = identityScenarios[key] || identityScenarios.jpop;
  const root = document.querySelector("[data-identity-simulator]");
  if (!root) return;
  root.querySelector(".simulator-label").textContent = scenario.label;
  Object.entries({ context: scenario.context, policy: scenario.policy, reach: scenario.reach, memory: scenario.memory }).forEach(([field, value]) => {
    const target = root.querySelector(`[data-identity-field="${field}"]`);
    if (target) target.textContent = value;
  });
  root.querySelectorAll("[data-identity-scenario]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.identityScenario === key));
  });
};

document.querySelectorAll("[data-identity-scenario]").forEach(button => {
  button.addEventListener("click", () => updateIdentityScenario(button.dataset.identityScenario));
});

const activatePanel = tab => {
  tabs.forEach(item => {
    const active = item === tab;
    item.setAttribute("aria-selected", String(active));
    item.setAttribute("tabindex", active ? "0" : "-1");
  });
  panels.forEach(panel => { panel.hidden = panel.dataset.consolePanel !== tab.dataset.panel; });
  setSignalStep(tab.dataset.panel);
  if (window.location.hash !== `#panel-${tab.dataset.panel}`) history.replaceState(null, "", `#panel-${tab.dataset.panel}`);
};

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    activatePanel(tab);
  });
  tab.addEventListener("keydown", event => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const delta = event.key === "ArrowRight" ? 1 : -1;
    const next = tabs[(index + delta + tabs.length) % tabs.length];
    activatePanel(next);
    next.focus();
  });
});

document.querySelectorAll("[data-open-panel]").forEach(link => {
  link.addEventListener("click", event => {
    const tab = tabs.find(item => item.dataset.panel === link.dataset.openPanel);
    if (tab) {
      event.preventDefault();
      activatePanel(tab);
      document.querySelector("#console")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

const hashPanel = window.location.hash.match(/^#panel-(identity|knowledge|privacy|toolbench)$/)?.[1];
if (hashPanel) {
  const tab = tabs.find(item => item.dataset.panel === hashPanel);
  if (tab) activatePanel(tab);
}

const says = document.querySelector("[data-sean-says]");
const remarks = [
  "Competence first. Bit second.",
  "Green is not the same thing as done.",
  "Ask where I read that. I'll give you the line number.",
  "Clippy, but with boundaries and shellfish.",
  "The rollback exists. Now we may be brave."
];
let remark = 0;

if (says) {
  says.addEventListener("click", () => {
    remark = (remark + 1) % remarks.length;
    says.firstChild.textContent = `“${remarks[remark]}” `;
  });
}
