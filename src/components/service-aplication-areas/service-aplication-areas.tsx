import * as React from "react"

import "./service-aplication-areas.scss"

const AplicationAreas = ({ items }) => {
  const advantagesTrustedItems = items?.content || []

  return (
    <section className="service-aplication-areas container">
      <div className="service-aplication-areas__inner-wrap">
        {advantagesTrustedItems.map((props, id) => (
          <AplicationAreasItem key={id.toString()} {...props} />
        ))}
      </div>
    </section>
  )
}

const AplicationAreasItem = ({ image, heading, description, documentation, documentationLinkText }) => (
  <div className="service-aplication-areas__item">
    <div className="service-aplication-areas__image-wrap col-xs-12 col-sm-6">
      <img src={image.file.url} alt="" className="service-aplication-areas__image" />
    </div>
    <div className="service-aplication-areas__content col-xs-12 col-sm-6">
      <h4 className="service-aplication-areas__heading">{heading}</h4>
      <p className="service-aplication-areas__description">
        {description.childMarkdownRemark.rawMarkdownBody}
      </p>
      {Boolean(documentation) && (
        <a href={documentation.file.url}
            target="_blank"
            className="service-aplication-areas__tech-documentation link"
        >
          {documentationLinkText}
        </a>
      )}
    </div>
  </div>
)

export default AplicationAreas
