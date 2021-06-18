import * as React from "react"
import { Link } from "gatsby"
import "./advertisement.scss"

const Advertisement = ({ title, description, ctaText }) => {
  return (
    <section className="promo container">
      <div className="promo__inner-wrap row">
        <h2 className="promo__title">{title}</h2>
        <p className="promo__description">
            {description.childMarkdownRemark.rawMarkdownBody}
        </p>
        {ctaText ? <Link to="" className="promo__cta cta-link cta-link_promo">{ctaText}</Link> : null}
      </div>
    </section>
  )
}

export default Advertisement
