import { getCookieValue, setCookieWithDefaults } from "./cookies";

export function getPreferredColorScheme() {
  const cookieValue = getCookieValue("preferredColorScheme");
  if (cookieValue === "light" || cookieValue === "dark") {
    return cookieValue;
  }
  return detectSystemColorScheme();
}

export function setPreferredColorScheme(newScheme: "light" | "dark") {

  changeDocumentColorScheme(newScheme);
  setCookieWithDefaults({
    name: "preferredColorScheme",
    value: newScheme,
  })
}

function changeDocumentColorScheme(scheme: "light" | "dark") {
  if (scheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

function detectSystemColorScheme() {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return isDark ? "dark" : "light";
}
