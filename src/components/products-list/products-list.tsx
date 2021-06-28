import * as React from "react"
import { Link } from "gatsby"
import "./products-list.scss"


const ProductsList = ({ component, currentLocale, listingPage }) => {
  const contentPresent = Boolean(component?.content)
  const content = component.content

  if (!contentPresent) {
    return <div>no content</div>
  }

  return (
    <section className="products-list container">
      {Boolean(component?.name) &&
        <span className="products-list__name subtitle-2 col-xs-12">
          {component.name}
        </span>
      }
      {Boolean(component?.title) &&
        <h2 className="products-list__title col-xs-12">
          {component.title}
        </h2>
      }
      <div className="products-list__inner-wrap">
          {content.map((props, id) => (
            <ProductsListItem key={id.toString()} {...props} currentLocale={currentLocale} listingPage={listingPage} />
          ))}
      </div>
    </section>
  )
}

const ProductsListItem = ({ image, title, description, ctaText, ctaLink, currentLocale, listingPage }) => (
  <Link
    to={ctaLink
    ? `/${currentLocale}/${listingPage}/${ctaLink.productSlug}`
    : null}
    className="products-list__item col-xs-12 col-xm-6 col-sm-4">
      <div className="products-list__image-wrap">
        <img src={image.file.url} alt="" className="products-list__image"/>
      </div>
      <h4 className="products-list__heading">{title}</h4>
      <p className="products-list__description">
        {description.childMarkdownRemark.rawMarkdownBody}
      </p>
      <span className="products-list__cta learn-more">
        {ctaText}
      </span>
  </Link>
)

export default ProductsList
