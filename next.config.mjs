import createMDX from "@next/mdx"
import rehypeExternalLinks from "rehype-external-links"
import rehypeHighlight from "rehype-highlight"
import remarkGfm from "remark-gfm"
import remarkHeadingId from "remark-heading-id"

/** @type {import("next").NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, [remarkHeadingId, { defaults: true }]],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        { target: "_blank", rel: ["noopener", "noreferrer"] },
      ],
      rehypeHighlight,
    ],
  },
})

export default withMDX(nextConfig)
