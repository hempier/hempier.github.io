import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.scss"

const Header = ({ siteTitle, menuLinks }) => (
  <header className="header">
    <Link
      to="/"
      className="header__logo"
    >
      {siteTitle}
    </Link>
    <nav className="header__navigation">
      {menuLinks.map(link => (
        <Link
          to={link.link}
          className="header__navigation-link"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
