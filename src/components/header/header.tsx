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

  return (
    <StaticQuery
      query={graphql`
        {
          allContentfulComposePage(
            filter: {
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
        const navigationItems = allContentfulComposePage.nodes
          .filter(locale => locale.node_locale === currentLocale)
          .sort(
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
            <div className="header__inner-wrap container row" ref={node}>
              <Link to={`/${currentLocale}/home`} className="header__logo col-lg-3">
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
              <BurgerNavigation open={open} setOpen={setOpen} />
              <div className="header-mobile">
                <HeaderNavigationMobile
                  open={open}
                  navigationItems={navigationItems}
                  allLocales={allLocales}
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
