import "bootstrap/dist/css/bootstrap.css"
import "@/bootstrap.js"
import { Layout } from "@/components/Layout.js"

export const metadata = {
  title: "Sanjo Solutions - Softwareentwicklung mit Fokus auf JavaScript, HTML and CSS",
  description: "Softwareentwicklung mit Fokus auf JavaScript, HTML und CSS.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="de" className="h-100">
      <body className="d-flex flex-column h-100">
        <Layout>{ children }</Layout>
      </body>
    </html>
  )
}
