import "../../custom.scss"
import "@/bootstrap.js"
import { Layout } from "@/components/Layout.js"
import "highlight.js/styles/github.css"
import { TawkMessenger } from "@/components/TawkMessenger.js"
import "../../styles.css"

export const metadata = {
  title: "Sanjo Solutions - IT-Beratung und Softwareentwicklung",
  description: "",
}

export default function RootLayout({ children }) {
  return (
    <html lang="de" className="h-100">
      <body className="d-flex flex-column h-100">
        <Layout>{children}</Layout>

        <TawkMessenger
          propertyId="65228de46fcfe87d54b7a225"
          widgetId="1hc7g8rc8"
        />
      </body>
    </html>
  )
}
