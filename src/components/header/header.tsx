import React, { useState, useRef } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { useOnClickOutside } from '../../hooks/hooks'


import HeaderNavigation from "./navigation/navigation"
import HeaderNavigationMobile from "./navigation-mobile/navigation-mobile"
import Localization from "./localization/localization"
import BurgerNavigation from "./burger/burger"

import "./header.scss"

export default ({ currentLocale, allLocales }) => {
  const [open, setOpen] = useState(false)
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));

  const isCurrentActiveLocalization = ({ isCurrent }) =>
    isCurrent
      ? { className: "header__locale-item header__locale-item_active" }
      : null

  return (
    <StaticQuery
      query={graphql`
        {
          allContentfulComposePage(
            filter: {
              node_locale: { eq: "uk-UA" }
              navigationIncluded: { eq: true }
            }
          ) {
            nodes {
              slug
              title
              node_locale
              position
            }
          }
          contentfulComponentHeaderLogo {
            internalName
            image {
              file {
                url
              }
            }
          }
        }
      `}
      render={({ allContentfulComposePage, contentfulComponentHeaderLogo }) => {
        const navigationItems = allContentfulComposePage.nodes.sort(
          (a, b) => a.position - b.position
        )
        const logo = {
          url: contentfulComponentHeaderLogo.image.file.url,
          alt: contentfulComponentHeaderLogo.internalName,
        }

        const node = useRef(); 
        useOnClickOutside(node, () => setOpen(false));

        return (
          <header className="header">
            <div className="header__inner-wrap container">
              <Link to={`/${currentLocale}/home`} className="header__logo">
                <img
                  src={logo.url}
                  alt={logo.alt}
                />
              </Link>
              <HeaderNavigation
                navigationItems={navigationItems}
                currentLocale={currentLocale}
              />
              <Localization allLocales={allLocales} />
              <div ref={node}>
                <BurgerNavigation open={open} setOpen={setOpen} />
                <HeaderNavigationMobile
                  open={open}
                  navigationItems={navigationItems}
                  currentLocale={currentLocale}
                  logo={logo}
                />
              </div>
            </div>
          </header>
        )
      }}
    />
  )
}
