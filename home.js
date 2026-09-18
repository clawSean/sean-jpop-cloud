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

const activatePanel = tab => {
  tabs.forEach(item => {
    const active = item === tab;
    item.setAttribute("aria-selected", String(active));
    item.setAttribute("tabindex", active ? "0" : "-1");
  });
  panels.forEach(panel => { panel.hidden = panel.dataset.consolePanel !== tab.dataset.panel; });
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
  link.addEventListener("click", () => {
    const tab = tabs.find(item => item.dataset.panel === link.dataset.openPanel);
    if (tab) activatePanel(tab);
  });
});

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
