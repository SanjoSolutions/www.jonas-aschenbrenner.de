import { isActivePage } from "@/isActivePage.js"

export function navbarActive(navbarItemPagePath, currentPathname) {
  return isActivePage(navbarItemPagePath, currentPathname) ? "active" : ""
}
