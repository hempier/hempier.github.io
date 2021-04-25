import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby";
import "./header.scss"


export default () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulComposePage (filter: { node_locale: { eq: "uk-UA" } }) {
          nodes {
            slug
            title
            node_locale
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
    render={({ allContentfulComposePage}) => (
      <header className="header container">
        <nav className="header__navigation">
          {allContentfulComposePage.nodes.map((link, id) => (
            <>
              <Link
                to={`/${link.node_locale}/${link.slug}`}
                key={id}
                className="header__navigation-link"
              >
                {link.title}
              </Link>
            </>
          ))}
        </nav>
      </header>
    )}
  />
);

// function filterHomeLogoLink(pageSlug: {slug}) {
//   pageSlug.slug === 'home'

// }