import { useLanguage } from "@/useLanguage.js"
import de from "../dictionaries/de.json"
import en from "../dictionaries/en.json"

const languages = new Map([
  ["de", de],
  ["en", en],
])

export function useTranslations(key) {
  const language = useLanguage()
  if (language) {
    const translations = languages.get(language)
    return translations ? translations[key] || {} : {}
  } else {
    return {}
  }
}
