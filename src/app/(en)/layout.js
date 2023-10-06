import "bootstrap/dist/css/bootstrap.css"
import { Layout } from "@/components/Layout.js"

export const metadata = {
  title: "Sanjo Solutions - Software development with focus on JavaScript, HTML and CSS",
  description: "Software development with focus on JavaScript, HTML and CSS.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{ children }</Layout>
      </body>
    </html>
  )
}
