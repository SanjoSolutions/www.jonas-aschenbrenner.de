import { classNames } from "@/classNames.js"
import Link from "next/link.js"

export function Kontaktieren({ className }) {
  return (
    <Link
      href="/de/kontaktieren"
      className={ classNames("btn", "btn-primary", className) }
    >Kontaktieren</Link>
  )
}
