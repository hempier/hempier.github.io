import * as React from "react"
import renderAst from "../util-html-to-react";

import "./page-text.scss"

const PageText = props => {
  const { text } = props

  return (
    <div className="page-text">
      {renderAst(text.text.childMarkdownRemark.htmlAst)}
    </div>
  )
}

export default PageText
