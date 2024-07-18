import Link from "next/link.js"
import { LinkToPage } from "./src/components/LinkToPage.js"

export function useMDXComponents(components) {
  return {
    Link,
    LinkToPage,
    ...components,
  }
}
