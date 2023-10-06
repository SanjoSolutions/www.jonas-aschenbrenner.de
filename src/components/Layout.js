"use client"

import { retrievePathToOtherLanguage } from "@/pages.js"
import { useTranslations } from "@/useTranslations.js"
import { usePathname } from "next/navigation.js"
import Link from "next/link.js"

export function Layout({ children }) {
  const pathname = usePathname()

  const pathToOtherLanguage = retrievePathToOtherLanguage(pathname)

  const translations = useTranslations("layout")

  return (
    <>
      { children }

      { pathToOtherLanguage &&
        <Link href={ retrievePathToOtherLanguage(pathname) }>{ translations.switchLanguage }</Link> }
    </>
  )
}
