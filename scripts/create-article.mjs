import { writeFile } from "@sanjo/write-file"
import * as fs from "node:fs/promises"
import * as path from "node:path"
import { fileURLToPath } from "url"

const title = process.argv[2]

const folderName = title.replaceAll(" ", "-").toLowerCase()
const projectRoot = path.resolve(path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
))
const filePath = `${ projectRoot }/src/app/(en)/(articles)/${ folderName }/page.mdx`

await fs.mkdir(path.dirname(filePath), { recursive: true })

const content = `export const metadata = {
	title: '${ title }'
}

# ${ title }

`

await writeFile(filePath, content)
console.log(`"${ path.relative(projectRoot, filePath)
  .replaceAll("\\", "/") }" has been created.`)
