import { classNames } from "@/classNames.js"
import Link from "next/link.js"

export function Contact({ className }) {
  return (
    <Link
      href="/contact"
      className={ classNames("btn", "btn-primary", className) }
    >Contact</Link>
  )
}
