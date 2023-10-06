import { determineLanguage } from "@/determineLanguage.js"
import { usePathname } from "next/navigation.js"
import en from "../dictionaries/en.json"
import de from "../dictionaries/de.json"

const languages = new Map([
  ["de", de],
  ["en", en],
])

export function useTranslations(key) {
  const pathname = usePathname()
  const language = determineLanguage(pathname)
  if (language) {
    const translations = languages.get(language)
    return translations ? translations[key] || {} : {}
  } else {
    return {}
  }
}
