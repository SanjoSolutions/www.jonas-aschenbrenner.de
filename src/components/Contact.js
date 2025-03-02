import { classNames } from "@/classNames.js"
import Link from "next/link.js"

export function Contact({ className }) {
  return (
    <Link
      href="/en/contact"
      className={classNames("btn", "btn-primary", "btn-lg", className)}
    >
      Contact
    </Link>
  )
}
