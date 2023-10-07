"use client"

import { retrievePath } from "@/pages.js"
import { useLanguage } from "@/useLanguage.js"

export function usePathForPageId(pageId) {
  const language = useLanguage()
  return retrievePath(pageId, language)
}
