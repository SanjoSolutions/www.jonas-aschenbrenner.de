"use client"

import Link from "next/link.js"

export function ExternalNavLink({ href, children }) {
  return (
    <Link
      className="nav-link"
      href={ href }
      target="_blank"
    >
      { children }
    </Link>
  )
}
