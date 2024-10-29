import { classNames } from "@/classNames.js"
import Link from "next/link.js"

export function CV({ className }) {
  return (
    <Link
      href="/CV_Jonas_Aschenbrenner.pdf"
      className={classNames("btn", "btn-secondary", "btn-lg", className)}
    >
      CV
    </Link>
  )
}
