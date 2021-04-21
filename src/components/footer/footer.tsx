import * as React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import "./footer.scss"

export default function Footer() {
  return (
    <StaticQuery
      query={graphql`
        query {
          contentfulComponentFooter {
            node_locale
            entrie
            footerLogo {
              file {
                url
              }
            }
            address {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            phone
            socialHeading
            socialLinks {
              link
              image {
                file {
                  url
                }
              }
            }
            advertisement {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            copyright
          }
        }
      `}
      render={data => (
        <footer className="footer container">
          <div className="row">
            <div className="col-6">
              <img
                src={data.contentfulComponentFooter.footerLogo.file.url}
                className="footer__logo"/>
                <div className="footer__address">
                  {data.contentfulComponentFooter.address.childMarkdownRemark.rawMarkdownBody}
                </div>
                <div className="footer__phone">
                  {data.contentfulComponentFooter.phone}
                </div>
            </div>
            <div className="col-6">
              <div className="footer__social-heading">
                {data.contentfulComponentFooter.socialHeading}
              </div>
              <div className="footer__social-list">
                {data.contentfulComponentFooter.socialLinks.map((link, i) => {
                  return (
                    <a href={link.link}
                      target="_blank"
                      className="footer__social-link">
                        <img src={link.image.file.url} alt=""/>
                    </a>
                  )
                })}
              </div>
              <div className="footer__social-heading">
                {data.contentfulComponentFooter.advertisement.childMarkdownRemark.rawMarkdownBody}
              </div>
              <span className="footer__copyright">
                {data.contentfulComponentFooter.copyright}
              </span>
            </div>
          </div>
        </footer>
      )}
    />
  )
}