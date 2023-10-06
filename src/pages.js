export const pages = [
  {
    en: "/",
    de: "/de",
  },
  {
    en: "/imprint",
    de: "/de/impressum",
  },
  {
    en: "/benefits-of-developing-with-javascript",
    de: "/de/vorteile-mit-javascript-zu-entwickeln",
  },
  {
    en: "/how-to-install-rsync-into-git-bash",
  },
]

const lookUp = new Map(pages.flatMap(({ de, en }) => [[de, en], [en, de]]))

export function retrievePathToOtherLanguage(pathname) {
  return lookUp.get(pathname)
}
