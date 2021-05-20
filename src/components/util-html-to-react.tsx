import * as React from "react"
import rehypeReact from "rehype-react"

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler

export default renderAst
