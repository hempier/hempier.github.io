import * as React from "react"
import renderAst from "../util-html-to-react";

import "./product-description.scss"

const ProductDescription = ({
  image,
  title,
  description,
  price,
  quantity,
  ctaText,
}) => {
  return (
    <section className="product-description">
      <div className="product-description__inner-wrap container">
        <div className="product-description__image col-6">
          <img src={image.file.url} alt="" />
        </div>
        <div className="product-description__content">
          <h2 className="product-description__title">{title}</h2>
          <div className="product-description__description">
            {renderAst(description.childMarkdownRemark.htmlAst)}
          </div>
          <div className="product-description__content-inner">
            <div className="product-description__price-wrap">
              <h3 className="product-description__price">{price}</h3>
              <div className="product-description__quantity">{quantity}</div>
            </div>
            {ctaText ? (
              <a href="#feedback-form" className="product-description__cta cta-link">
                {ctaText}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDescription
