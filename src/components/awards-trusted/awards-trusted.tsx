import * as React from "react"
// import { renderHtmlToReact } from "../util-html-to-react"

import "./awards-trusted.scss"

const AwardsTrusted = ({ items }) => {
  const awardsTrustedItems = items?.content || []
  return (
    <section className="awards container">
      <div className="awards__name subtitle-1">{items.name}</div>
      <h1 className="awards__title">{items.title}</h1>
      {awardsTrustedItems.map((props, id) => (
        <AwardsTrustedItem key={id.toString()} {...props} />
      ))}
    </section>
  )
}

const AwardsTrustedItem = ({ year, description }) => (
  <div className="awards__item">
    <h3 className="awards__heading">{year}</h3>
    <p className="awards__description">
      {/* {description.childMarkdownRemark.htmlAst} */}
    </p>
  </div>
)

export default AwardsTrusted
