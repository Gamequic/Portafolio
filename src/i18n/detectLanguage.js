/*
 * detectLanguage.js
 *
 * Determines whether to show English or Spanish using this priority:
 *  1. User's saved manual preference (localStorage)
 *  2. IP geolocation → ipapi.co (free, no API key needed)
 *  3. Browser navigator.language as fallback
 *  4. Default: English
 */

const SPANISH_COUNTRIES = new Set([
  "ES","MX","AR","CO","PE","VE","CL","EC","GT","CU","BO","DO",
  "HN","PY","SV","NI","CR","PA","UY","GQ","PR",
]);

export async function detectLanguage() {
  // 1. Respect previously saved manual choice
  const saved = localStorage.getItem("portfolio-lang");
  if (saved === "en" || saved === "es") return saved;

  // 2. IP-based detection
  try {
    const res  = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(3000) });
    const data = await res.json();
    if (SPANISH_COUNTRIES.has(data.country_code)) return "es";
    return "en";
  } catch {
    // 3. Browser language fallback
    const browser = navigator.language || navigator.userLanguage || "";
    return browser.toLowerCase().startsWith("es") ? "es" : "en";
  }
}
