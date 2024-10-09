import Imprint from "@/components/pages/imprint.mdx"
import en from "../../../../../dictionaries/en.json"

export const metadata = {
  title: "Imprint",
}

export default function (props) {
  return <Imprint {...props} dictionary={en.imprint} />
}
