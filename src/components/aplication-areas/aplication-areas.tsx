import * as React from "react"

import "./aplication-areas.scss"

const AplicationAreas = ({ items }) => {
  const advantagesTrustedItems = items?.content || []

  return (
    <section className="aplication-areas container">
      <div className="aplication-areas__name subtitle-1 col-xs-12">{items.name}</div>
      <h2 className="aplication-areas__title col-xs-12">{items.title}</h2>
      <div className="aplication-areas__inner-wrap col-xs-12">
        {advantagesTrustedItems.map((props, id) => (
          <AplicationAreasItem key={id.toString()} {...props} />
        ))}
      </div>
    </section>
  )
}

const AplicationAreasItem = ({ image, heading, description }) => (
  <div className="aplication-areas__item">
    <img src={image.file.url} alt="" className="aplication-areas__image" />
    <div className="aplication-areas__content">
      <h4 className="aplication-areas__heading">{heading}</h4>
      {Boolean(description?.childMarkdownRemark) &&
        <p className="aplication-areas__description">
          {description.childMarkdownRemark.rawMarkdownBody}
        </p>
      }
    </div>
  </div>
)

export default AplicationAreas
