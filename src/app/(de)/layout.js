import "bootstrap/dist/css/bootstrap.css"
import { Layout } from "@/components/Layout.js"

export const metadata = {
  title: "Sanjo Solutions - Softwareentwicklung mit Fokus auf JavaScript, HTML and CSS",
  description: "Softwareentwicklung mit Fokus auf JavaScript, HTML und CSS.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <Layout>{ children }</Layout>
      </body>
    </html>
  )
}
