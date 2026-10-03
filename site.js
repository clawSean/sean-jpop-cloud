const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getUTCFullYear();

document.querySelectorAll("[data-site-menu]").forEach((menu) => {
  const summary = menu.querySelector("summary");
  const links = menu.querySelector(".nav-links");
  if (!summary || !links) return;

  const closeMenu = (restoreFocus = false) => {
    if (!menu.open) return;
    menu.open = false;
    if (restoreFocus) summary.focus();
  };

  links.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target)) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu(true);
  });
});

document.querySelectorAll("[data-copy-path]").forEach((node) => {
  node.addEventListener("click", async () => {
    const value = node.getAttribute("data-copy-path");
    try {
      await navigator.clipboard.writeText(value);
      node.textContent = "Copied";
      setTimeout(() => {
        node.textContent = value;
      }, 1200);
    } catch {
      node.textContent = value;
    }
  });
});
