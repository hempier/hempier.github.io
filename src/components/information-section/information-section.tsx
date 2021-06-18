import * as React from "react"
import { Link } from "gatsby"
import "./information-section.scss"

const InformationSection = ({
  name,
  title,
  description,
  ctaText,
  image,
  ctaLink,
  currentLocale,
}) => {
  const informationSectionImage = {
    backgroundImage: `url(${image.file.url})`,
  }

  return (
    <section className="information-section">
      <div className="information-section__inner-wrap container">
        <div
          className="information-section__image col-6"
          style={informationSectionImage}
        />
        <div className="information-section__text">
          <div className="information-section__subtitle subtitle-2">{name}</div>
          <h2 className="information-section__title">{title}</h2>
          <p className="information-section__description">
            {description.childMarkdownRemark.rawMarkdownBody}
          </p>
          {ctaText ? (
            <Link
              to={
                ctaLink
                  ? `/${currentLocale}/${ctaLink.slug}`
                  : null
              }
              className="information-section__cta cta-link"
            >
              {ctaText}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default InformationSection
