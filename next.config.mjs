import createMDX from "@next/mdx"
import remarkGfm from "remark-gfm"

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",

  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
  },
})

export default withMDX(nextConfig)
