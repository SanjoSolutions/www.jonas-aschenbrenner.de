import { classNames } from "@/classNames.js"
import Link from "next/link.js"

export function Kontaktieren({ className }) {
  return (
    <Link
      href="/kontaktieren"
      className={classNames("btn", "btn-primary", "btn-lg", className)}
    >
      Kontaktieren
    </Link>
  )
}
