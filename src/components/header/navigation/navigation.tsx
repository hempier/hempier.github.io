import React from "react"
import { Link } from "gatsby"

import "./navigation.scss"

const Navigation = ({navigationItems, currentLocale}) => {
  const isPartiallyActiveNavigation = ({ isPartiallyCurrent }) =>
    isPartiallyCurrent
      ? { className: "header__navigation-link header__navigation-link_active" }
      : null

  return (
    <nav className="header__navigation">
      {navigationItems.map((link, id) => (
          <>
            <Link
              to={`/${currentLocale}/${link.slug}`}
              key={id.toString()}
              className="header__navigation-link"
              getProps={link === "/" ? undefined : isPartiallyActiveNavigation}
            >
              {link.title}
            </Link>
          </>
        ))}
    </nav>
  )
}

export default Navigation
