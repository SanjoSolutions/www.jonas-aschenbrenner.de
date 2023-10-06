import Imprint from "@/components/pages/imprint.mdx"
import en from "../../../../dictionaries/en.json"

export default function (props) {
  console.log("dirname", __dirname)
  return <Imprint { ...props } dictionary={ en.imprint } />
}
