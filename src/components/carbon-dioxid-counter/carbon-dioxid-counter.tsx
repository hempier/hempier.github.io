import * as React from "react"
import "./carbon-dioxid-counter.scss"

const InformationSection = ({ name, title, description, ctaText, image }) => {
  const informationSectionImage = {
    backgroundImage: `url(${image.file.url})`,
  }

  return (
    <section className="information-section">
      <div className="information-section__inner-wrap container">
        <div className="information-section__image col-6" style={informationSectionImage} />
        <div className="information-section__text">
          <div className="information-section__subtitle subtitle-2">{name}</div>
          <h2 className="information-section__title">{title}</h2>
          <p className="information-section__description">
              {description.childMarkdownRemark.rawMarkdownBody}
          </p>
          {ctaText ? <a href="" className="information-section__cta cta-link">{ctaText}</a> : null}
        </div>
      </div>
    </section>
  )
}

export default InformationSection
