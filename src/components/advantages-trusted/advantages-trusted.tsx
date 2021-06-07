import * as React from "react"

import "./advantages-trusted.scss"

const AdvantagesTrusted = ({ items }) => {
  const advantagesTrustedItems = items?.content || []

  return (
    <section className="advantages container">
      <div className="advantages__name subtitle-1">{items.name}</div>
      <h2 className="advantages__title">{items.title}</h2>
      <div className="advantages__inner-wrap row">
        {advantagesTrustedItems.map((props, id) => (
          <AdvantagesTrustedItem key={id.toString()} {...props} />
        ))}
      </div>
    </section>
  )
}

const AdvantagesTrustedItem = ({ image, heading, description }) => (
  <div className="advantages__item col-3">
    <img src={image.file.url} alt="" className="advantages__image" />
    <h4 className="advantages__heading">{heading}</h4>
    <p className="advantages__description">
      {description?.childMarkdownRemark.rawMarkdownBody || null}
    </p>
  </div>
)

export default AdvantagesTrusted
