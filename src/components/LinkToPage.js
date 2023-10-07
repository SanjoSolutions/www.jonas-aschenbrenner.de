"use client"

import { usePathForPageId } from "@/usePathForPageId.js"

export function LinkToPage(props) {
  const path = usePathForPageId(props.pageId)
  return <Link { ...props } href={ path }>{ props.children }</Link>
}
