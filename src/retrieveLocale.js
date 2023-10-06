import { headers as retrieveHeaders } from "next/headers.js"

export function retrieveLocale() {
  const headers = retrieveHeaders()
  console.log(headers)
  const pathname = headers.get("x-invoke-path")
  console.log("pathname", pathname)
  return "en"
}
