const LANGUAGE_KEY = "language";

export function getLanguage() {
  return window.localStorage.getItem(LANGUAGE_KEY);
}

export function saveLanguage(lang) {
  window.localStorage.setItem(LANGUAGE_KEY, lang);
}

export function destroyLanguage() {
  window.localStorage.removeItem(LANGUAGE_KEY);
}
