import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import "./header.scss"

const localeMap = {
  'uk-UA': 'Укр',
  'ru-RU': 'Рус'
}

export default ({ currentLocale, allLocales }) => {
  const isPartiallyActiveNavigation = ({ isPartiallyCurrent }) =>
    isPartiallyCurrent ? { className: "header__navigation-link header__navigation-link_active" } : null

  const isCurrentActiveLocalization = ({ isCurrent }) =>{
    console.log("localization", isCurrent)
    return isCurrent ? { className: "header__locale-item header__locale-item_active" } : null
  }
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
        return (
          <header className="header">
            <div className="header__inner-wrap container">
              <Link to={`/${currentLocale}/home`} className="header__logo">
                <img
                  src={contentfulComponentHeaderLogo.image.file.url}
                  alt={contentfulComponentHeaderLogo.internalName}
                />
              </Link>
              <nav className="header__navigation">
                {allContentfulComposePage.nodes.sort((a, b) => a.position - b.position).map((link, id) => (
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
              <div className="header__locale">
                {allLocales
                  ? allLocales.map(link => {
                      return (
                        <Link
                          to={link.pathname}
                          key={link.name}
                          className="header__locale-item"
                          getProps={isCurrentActiveLocalization}
                        >
                          {localeMap[link.name]}
                        </Link>
                      )
                    })
                  : null}
              </div>
            </div>
          </header>
        )
      }}
    />
  )
}
