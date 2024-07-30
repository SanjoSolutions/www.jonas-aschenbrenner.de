import { classNames } from "@/classNames.js"

export function FirstHeader({ className, children }) {
  return (
    <h1 className={classNames("mt-3", "mt-md-5", className)}>{children}</h1>
  )
}
