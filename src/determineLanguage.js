import { languagesSet } from "@/languages.js"

export function determineLanguage(pathname) {
  const parts = pathname.split("/")
  return languagesSet.has(parts[1]) ? parts[1] : "en"
}
