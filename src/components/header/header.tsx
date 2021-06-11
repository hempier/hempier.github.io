import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import "./header.scss"

const localeMap = {
  'uk-UA': 'Укр',
  'ru-RU': 'Рус'
}

export default ({ currentLocale, allLocales }) => {
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
                      activeClassName="header__navigation-link_active"
                    >
                      {link.title}
                    </Link>
                  </>
                ))}
              </nav>
              <div className="header__locale">
                {allLocales
                  ? allLocales.map(loc => {
                      return (
                        <a
                          key={loc.name}
                          href={loc.pathname}
                          className="header__locale-items"
                        >
                          {' '+localeMap[loc.name]}
                        </a>
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
