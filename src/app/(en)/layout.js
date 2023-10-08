import "bootstrap/dist/css/bootstrap.css"
import "@/bootstrap.js"
import { Layout } from "@/components/Layout.js"
import "highlight.js/styles/github.css"

export const metadata = {
  title: "Sanjo Solutions - Software development with focus on JavaScript, HTML and CSS",
  description: "Software development with focus on JavaScript, HTML and CSS.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-100">
      <body className="d-flex flex-column h-100">
        <Layout>{ children }</Layout>
      </body>
    </html>
  )
}
