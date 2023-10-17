import "./Gallery.css"
import Image from "next/image.js"

export function Gallery({ art }) {
  return (
    <div className="art-piece row">
      {art.map((path, index) => (
        <div key={index} className="col-12 col-md-3 mb-3">
          <a href={path} className="art-piece">
            <Image src={path} width={304} height={304} className="w-100" />
          </a>
        </div>
      ))}
    </div>
  )
}
