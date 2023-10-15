import "bootstrap/dist/css/bootstrap.css"
import "@/bootstrap.js"
import { Layout } from "@/components/Layout.js"
import "highlight.js/styles/github.css"
import { TawkMessenger } from "@/components/TawkMessenger.js"
import "../../styles.css"

export const metadata = {
  title:
    "Sanjo Solutions - Software development with focus on JavaScript, HTML and CSS",
  description: "Software development with focus on JavaScript, HTML and CSS.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-100">
      <body className="d-flex flex-column h-100">
        <Layout>{children}</Layout>

        <TawkMessenger
          propertyId="65228de46fcfe87d54b7a225"
          widgetId="1hc7fkh52"
        />
      </body>
    </html>
  )
}
