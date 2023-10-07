"use client"

import { determineLanguage } from "@/determineLanguage.js"
import { usePathname } from "next/navigation.js"

export function useLanguage() {
  const pathname = usePathname()
  const language = determineLanguage(pathname)
  return language
}
