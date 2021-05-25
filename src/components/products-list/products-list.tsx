import * as React from "react"
import "./products-list.scss"


const ProductsList = ({ component }) => {
  const contentPresent = Boolean(component?.content)
  const content = component.content

  if (!contentPresent) {
    return <div>no content</div>
  }

  return (
    <section className="products-list container">
      <span className="products-list__name subtitle-2">{component.name}</span>
      <h2 className="products-list__title">{component.title}</h2>
      <div className="products-list__inner-wrap row">
          {content.map((props, id) => (
            <ProductsListItem key={id.toString()} {...props} />
          ))}
      </div>
    </section>
  )
}

const ProductsListItem = ({ image, title, description, ctaText, ctaLink }) => (
  <div className="products-list__item col-4">
    <div className="products-list__image-wrap">
      <img src={image.file.url} alt="" className="products-list__image"/>
    </div>
    <h3 className="products-list__heading">{title}</h3>
    <p className="products-list__description">
      {description.childMarkdownRemark.rawMarkdownBody}
    </p>
    <a href={ctaLink ? ctaLink.slug : null} className="products-list__cta learn-more">
      {ctaText}
    </a>
  </div>
)

export default ProductsList
