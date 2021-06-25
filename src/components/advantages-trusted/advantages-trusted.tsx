import * as React from "react"

import "./advantages-trusted.scss"

const AdvantagesTrusted = ({ items }) => {
  const advantagesTrustedItems = items?.content || []

  return (
    <section className="advantages container">
      <div className="advantages__name subtitle-1 col-xs-12">{items.name}</div>
      <h2 className="advantages__title col-xs-12">{items.title}</h2>
      <div className="advantages__inner-wrap">
        {advantagesTrustedItems.map((props, id) => (
          <AdvantagesTrustedItem key={id.toString()} {...props} />
        ))}
      </div>
    </section>
  )
}

const AdvantagesTrustedItem = ({ image, heading, description }) => (
  <div className="advantages__item col-xs-12 col-xm-6 col-sm-4 col-md-3">
    <img src={image.file.url} alt="" className="advantages__image" />
    <h4 className="advantages__heading">{heading}</h4>
    <p className="advantages__description">
      {description?.childMarkdownRemark.rawMarkdownBody || null}
    </p>
  </div>
)

export default AdvantagesTrusted
