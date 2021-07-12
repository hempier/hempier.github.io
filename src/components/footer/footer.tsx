import * as React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import IconLocation from "../../images/footer/icon-location.svg"
import IconTelephone from "../../images/footer/icon-telephone.svg"
import "./footer.scss"

const  Footer = ({ currentLocale }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          contentfulComponentFooter {
            entrie
            node_locale
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
            #vat
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
        <footer className="footer">
          <div className="container row">
            <div className="col-sm-6 col-xs-12">
              <div className="footer__inner-wrap">
                <Link to={`/${currentLocale}/home`}>
                  <img
                    src={data.contentfulComponentFooter.footerLogo.file.url}
                    className="footer__logo"/>
                </Link>
                <div className="footer__address">
                  <IconLocation className="footer__address-icon" />
                  {data.contentfulComponentFooter.address.childMarkdownRemark.rawMarkdownBody}
                  {/* <div className="footer__vat">{data.contentfulComponentFooter.vat}</div> */}
                </div>
                <div className="footer__phone">
                  <IconTelephone className="footer__phone-icon" />
                  {data.contentfulComponentFooter.phone}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="footer__inner-wrap">
                <h4 className="footer__social-heading">
                  {data.contentfulComponentFooter.socialHeading}
                </h4>
                <div className="footer__social-list">
                  {data.contentfulComponentFooter.socialLinks.map((link, i) => {
                    return (
                      <a href={link.link}
                        key={i.toString()}
                        target="_blank"
                        className="footer__social-link">
                          <img src={link.image.file.url} alt=""/>
                      </a>
                    )
                  })}
                </div>
                <p className="footer__advertisement">
                  {data.contentfulComponentFooter.advertisement.childMarkdownRemark.rawMarkdownBody}
                </p>
                <span className="footer__copyright">
                  {data.contentfulComponentFooter.copyright}
                </span>
              </div>
            </div>
          </div>
        </footer>
      )}
    />
  )
}

export default Footer
