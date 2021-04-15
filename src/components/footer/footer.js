import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import "./footer.scss"

export default function Footer() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allContentfulFooter {
            nodes {
              advertisement
              copyright
              footerLogo {
                file {
                  url
                }
              }
              node_locale
              phoneNumber
            }
          }
        }
      `}
      render={data => (
        <footer className="footer container">
          <h1>{}</h1>
        </footer>
      )}
    />
  )
}