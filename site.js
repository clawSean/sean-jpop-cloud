const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getUTCFullYear();

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

