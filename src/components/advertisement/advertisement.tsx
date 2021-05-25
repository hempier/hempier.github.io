import * as React from "react"
import "./advertisement.scss"

const Advertisement = ({ title, description, ctaText }) => {
  return (
    <section className="promo container">
      <div className="promo__inner-wrap row">
        <h2 className="promo__title">{title}</h2>
        <p className="promo__description">
            {description.childMarkdownRemark.rawMarkdownBody}
        </p>
        {ctaText ? <a href="" className="promo__cta cta-link cta-link_promo">{ctaText}</a> : null}
      </div>
    </section>
  )
}

export default Advertisement
