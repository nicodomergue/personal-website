(() => {
  const saved = localStorage.getItem("theme");

  if (saved) {
    document.documentElement.dataset.theme = saved;
  } else {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    document.documentElement.dataset.theme = prefersDark ? "dark" : "light";
  }
})();
