import { classNames } from "@/classNames.js"
import Link from "next/link.js"

export function Lebenslauf({ className }) {
  return (
    <Link
      href="/Lebenslauf_Jonas_Aschenbrenner.pdf"
      className={classNames("btn", "btn-secondary", "btn-lg", className)}
    >
      Lebenslauf
    </Link>
  )
}
