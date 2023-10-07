"use client"

import { isActivePage } from "@/isActivePage.js"
import { navbarActive } from "@/navbarActive.js"
import { retrievePath } from "@/pages.js"
import { useLanguage } from "@/useLanguage.js"
import Link from "next/link.js"
import { usePathname } from "next/navigation.js"

export function FooterNavigationItem({ pageId, children }) {
  const language = useLanguage()
  const pathname = usePathname()
  const path = retrievePath(pageId, language)
  if (path) {
    const TagName = isActivePage(path, pathname) ? "div" : Link
    return (
      <TagName
        className={ navbarActive(path, pathname) }
        aria-current={ isActivePage(path) && "page" }
        href={ path }
      >
        { children }
      </TagName>
    )
  } else {
    return null
  }
}
