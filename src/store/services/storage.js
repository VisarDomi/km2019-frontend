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


const VOTE_KEY = "vote";

export function getVote() {
  return window.localStorage.getItem(VOTE_KEY);
}

export function saveVote(vote) {
  window.localStorage.setItem(VOTE_KEY, vote);
}

export function destroyVote() {
  window.localStorage.removeItem(VOTE_KEY);
}
