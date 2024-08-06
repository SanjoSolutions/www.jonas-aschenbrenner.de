import { classNames } from "@/classNames.js"

export function FirstHeader({ className, children }) {
  return (
    <h1 className={classNames("mt-3", "mt-md-4", className)}>{children}</h1>
  )
}
