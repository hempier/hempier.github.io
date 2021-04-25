import * as React from "react"
import "./information-section.scss"

const InformationSection = ({ name, title, description, ctaText }) => (
  <section className="information-section">
    <div className="information-section__inner-wrap container">
        <div className="information-section__subtitle">{name}</div>
        <h2 className="information-section__title">{title}</h2>
        <p className="information-section__description">
            {description.childMarkdownRemark.rawMarkdownBody}
        </p>
        <a className="information-section__cta">{ctaText}</a>
    </div>
  </section>
)

export default InformationSection
