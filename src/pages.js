const pages = {
  homepage: {
    en: "/",
    de: "/de",
  },
  "page-builder": {
    en: "/page-builder",
  },
  services: {
    en: "/services",
    de: "/de/dienstleistungen",
  },
  art: {
    en: "/art",
    de: "/de/kunst",
  },
  contact: {
    en: "/contact",
    de: "/de/kontaktieren",
  },
  imprint: {
    en: "/imprint",
    de: "/de/impressum",
  },
  "privacy-policy": {
    en: "/privacy-policy",
    de: "/de/datenschutzerklaerung",
  },
  "benefits-of-developing-with-javascript": {
    en: "/benefits-of-developing-with-javascript",
    de: "/de/vorteile-mit-javascript-zu-entwickeln",
  },
  "how-to-install-rsync-into-git-bash": {
    en: "/how-to-install-rsync-into-git-bash",
  },
  credits: {
    en: "/credits",
    de: "/de/credits",
  },
}

const lookUp = new Map(
  Object.values(pages).flatMap(({ de, en }) => [
    [de, en],
    [en, de],
  ]),
)

export function retrievePathToOtherLanguage(pathname) {
  return lookUp.get(pathname)
}

export function retrievePath(pageId, language) {
  return pages[pageId]?.[language] || null
}
