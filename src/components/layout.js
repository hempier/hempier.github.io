import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header/header"
import Footer from "./footer/footer"

const Layout = ({ children, allLocales, currentLocale }) => {

  
  return (
    <>
      <Header currentLocale={currentLocale} allLocales={allLocales} />
      <main className="content">{children}</main>
      <Footer currentLocale={currentLocale}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  allLocales: PropTypes.array,
}

export default Layout
