import * as React from "react"
import renderAst from "../util-html-to-react";

import "./awards-trusted.scss"

const AwardsTrusted = ({ items }) => {
  const awardsTrustedItems = items?.content || []
  return (
    <section className="awards container">
      <div className="awards__name subtitle-1">{items.name}</div>
      <h2 className="awards__title">{items.title}</h2>
      <div className="awards__inner-wrap row">
        {awardsTrustedItems.map((props, id) => (
          <AwardsTrustedItem key={id.toString()} {...props} />
        ))}
      </div>
    </section>
  )
}

const AwardsTrustedItem = ({ year, description }) => (
  <div className="awards__item col-3">
    <h3 className="awards__heading">{year}</h3>
    <p className="awards__description">
      {renderAst(description.childMarkdownRemark.htmlAst)}
    </p>
  </div>
)

export default AwardsTrusted
