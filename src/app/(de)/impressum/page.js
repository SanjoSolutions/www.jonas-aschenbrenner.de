import Imprint from "@/components/pages/imprint.mdx"
import de from "../../../../dictionaries/de.json"

export const metadata = {
  title: "Impressum",
}

export default function (...props) {
  return <Imprint {...props} dictionary={de.imprint} />
}
