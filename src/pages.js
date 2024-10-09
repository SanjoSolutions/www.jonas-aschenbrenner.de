const pages = {
  homepage: {
    en: "/en",
    de: "/",
  },
  "page-builder": {
    en: "/en/page-builder",
  },
  principles: {
    en: "/en/principles",
    de: "/prinzipien",
  },
  services: {
    en: "/en/services",
    de: "/dienstleistungen",
  },
  articles: {
    en: "/en/articles",
    de: "/artikel",
  },
  contact: {
    en: "/en/contact",
    de: "/kontaktieren",
  },
  imprint: {
    en: "/en/imprint",
    de: "/impressum",
  },
  "privacy-policy": {
    en: "/en/privacy-policy",
    de: "/datenschutzerklaerung",
  },
  "benefits-of-developing-with-javascript": {
    en: "/en/benefits-of-developing-with-javascript",
    de: "/vorteile-mit-javascript-zu-entwickeln",
  },
  "how-to-install-rsync-into-git-bash": {
    en: "/en/how-to-install-rsync-into-git-bash",
  },
  credits: {
    en: "/en/credits",
    de: "/credits",
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
