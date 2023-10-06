import Imprint from "@/components/pages/imprint.mdx"
import en from "../../../../dictionaries/en.json"

export default function (props) {
  return <Imprint { ...props } dictionary={ en.imprint } />
}
