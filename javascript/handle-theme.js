const button = document.getElementById("theme-toggle");

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

/* Tema inicial */
const savedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

setTheme(savedTheme);

/* Toggle */
button.addEventListener("click", () => {
  console.log("Toggle theme");
  const currentTheme = document.documentElement.dataset.theme;
  console.log("Current theme", currentTheme);

  const newTheme = currentTheme === "dark" ? "light" : "dark";

  setTheme(newTheme);
});
