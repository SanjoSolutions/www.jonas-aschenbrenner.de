import Image from "next/image"

export function Testimonial({ children, who, position, image }) {
  return (
    <figure className="mb-0">
      <Image {...image} className="mb-2" />
      <blockquote className="blockquote">
        <p>“{children.props.children}”</p>
      </blockquote>
      <figcaption className="blockquote-footer mb-0">
        <cite title={who}>{who}</cite> - {position}
      </figcaption>
    </figure>
  )
}
