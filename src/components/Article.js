import { FirstHeader } from "./FirstHeader.js"

export function Article({ title, children }) {
  return (
    <>
      <FirstHeader>{title}</FirstHeader>

      {children}
    </>
  )
}
