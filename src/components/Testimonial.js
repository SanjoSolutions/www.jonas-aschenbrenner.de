import Image from "next/image"

export function Testimonial({ children, who, position, image }) {
  return (
    <figure>
      <Image {...image} className="mb-2" />
      <blockquote class="blockquote">
        <p>“{children.props.children}”</p>
      </blockquote>
      <figcaption class="blockquote-footer">
        <cite title={who}>{who}</cite> - {position}
      </figcaption>
    </figure>
  )
}
