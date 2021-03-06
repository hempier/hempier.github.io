/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulComposePage {
        nodes {
          slug
          title
          node_locale
          navigationIncluded
          content {
            ... on ContentfulComponentHeroSlider {
              node_locale
              internalName
              content {
                node_locale
                name
                title
                description {
                  childMarkdownRemark {
                    rawMarkdownBody
                  }
                }
                ctaText
                ctaLink {
                  slug
                }
                #externalCtaLink
                image {
                  file {
                    url
                  }
                }
              }
            }
            ... on ContentfulComponentInformayionSection {
              node_locale
              internalName
              name
              title
              description {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
              ctaText
              image {
                file {
                  url
                }
              }
              ctaLink {
                slug
              }
            }
            ... on ContentfulComponentProductsSlider {
              node_locale
              internalName
              name
              title
              content {
                node_locale
                internalName
                title
                description {
                  childMarkdownRemark {
                    rawMarkdownBody
                  }
                }
                ctaText
                ctaLink {
                  slug
                  productSlug
                }
                image {
                  file {
                    url
                  }
                }
              }
            }
            ... on ContentfulComponentPartnersAboutUs {
              node_locale
              internalName
              name
              title
              content {
                node_locale
                internalName
                link
                image {
                  title
                  file {
                    url
                  }
                }
              }
            }
            ... on ContentfulComponentPageTopBanner {
              node_locale
              internalName
              heading
              description {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
              image {
                title
                file {
                  url
                }
              }
            }
            ... on ContentfulComponentAwards {
              node_locale
              internalName
              name
              title
              content {
                node_locale
                internalName
                year
                description {
                  childMarkdownRemark {
                    htmlAst
                  }
                }
              }
            }
            ... on ContentfulComponentProjectsSlider {
              node_locale
              internalName
              name
              title
              content {
                node_locale
                internalName
                image {
                  file {
                    url
                  }
                }
                title
                description {
                  childMarkdownRemark {
                    rawMarkdownBody
                  }
                }
                ctaText
                ctaLink {
                  slug
                  projectSlug
                }
              }
            }
            ... on ContentfulComponentPageText {
              internalName
              node_locale
              text {
                childMarkdownRemark {
                  htmlAst
                }
              }
            }
            ... on ContentfulComponentAdvantages {
              node_locale
              internalName
              name
              title
              content {
                node_locale
                internalName
                image {
                  file {
                    url
                  }
                }
                heading
                description {
                  childMarkdownRemark {
                    rawMarkdownBody
                  }
                }
                position
              }
            }
            ... on ContentfulComponentAplicationAreas {
              node_locale
              internalName
              name
  						title
              content {
                node_locale
                internalName
                image {
                  file {
                    url
                  }
                }
                heading
                description {
                  childMarkdownRemark {
                    rawMarkdownBody
                  }
                }
              }
            }
            ... on ContentfulComponentFeedbackForm {
              node_locale
              internalName
              image {
                file {
                  url
                }
              }
              title
              subtitle
              nameFieldLable
              phoneFieldLable
              emailFieldLable
              commentsFieldLable
              ctaText
            }
            ... on ContentfulComponentInformationAdvertisement {
              internalName
              node_locale
              title
              description {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
              ctaText
              ctaLink {
                slug
              }
            }
            ... on ContentfulComponentProductsList {
              internalName
              node_locale
              content {
                internalName
                node_locale
                image {
                  file {
                    url
                  }
                }
                title
                description {
                  childMarkdownRemark {
                    rawMarkdownBody
                  }
                }
                ctaText
                ctaLink {
                  slug
                  productSlug
                }
              }
            }
            ... on ContentfulComponentContactInfo {
              internalName
              node_locale
              title
              firmName
              addressLabel
              addressValue
              phoneLabel
              phoneValue
              emailTitle
              email
            }
            ... on ContentfulComponentProjectsList {
              internalName
              node_locale
              content {
                internalName
                node_locale
                title
                image {
                  file {
                    url
                  }
                }
                shortDescription
                ctaText
                projectLink {
                  slug
                  projectSlug
                }
              }
            }
            ... on ContentfulComponentServicesList {
							internalName
              node_locale
              content {
								internalName
                node_locale
                image {
									file {
										url
                  }
                }
                title
                shortDescription
                ctaText
                ctaLink {
									slug
                  serviceSlug
                }
              }
            }
            ... on ContentfulComponentServicesTrusted {
              internalName
              node_locale
              name
              title
              content {
                node_locale
                image {
                  file {
                    url
                  }
                }
                title
                shortDescription
                ctaText
                ctaLink {
									slug
                  serviceSlug
                }
              }
            }
            ... on ContentfulComponentCarbonDioxidCounter {
              internalName
              node_locale
              name
              title
              heading
              tonsLabel
              kilogramsLabel
              gramsLabel
              miligramsLabel
              carCarbonEmissionTitle
              carCarbonEmissionNumber
              peoplesCarbonEmissionTitle
              peoplesCarbonEmissionNumber
              initialMg
              incrementMg
              initialDate
            }
            ... on ContentfulComponentCostCalculator {
              internalName
              node_locale
              name
              heading
              wallsHeading
              wallWidthLabel
              wallsAreaLabel
              floorsHeading
              floorsWidthLabel
              floorsAreaLabel
              roofHeading
              roofAreaLabel
              foundationHeading
              foundationAreaLabel
              innerSeparatorsHeading
              innerSeparatorsAreaLabal
              totalMaterialLabel
              totalCostLabel
              hempMixCubicMetetrPrice
            }
          }
        }
      }
      allContentfulComposeProductPage {
        nodes {
          slug
          productSlug
          title
          node_locale
          navigationIncluded
          content {
            ... on ContentfulComponentProductDescription {
              internalName
              node_locale
              image {
                file {
                  url
                }
              }
              heading {
                childMarkdownRemark {
                  htmlAst
                } 
              }
              description {
                childMarkdownRemark {
                  htmlAst
                }
              }
              price
              quantity
              ctaText
            }
            ... on ContentfulComponentAdvantages {
              node_locale
              internalName
              name
              title
              content {
                node_locale
                internalName
                image {
                  file {
                    url
                  }
                }
                heading
                description {
                  childMarkdownRemark {
                    rawMarkdownBody
                  }
                }
              }
            }
            ... on ContentfulComponentInformationAdvertisement {
              internalName
              node_locale
              title
              description {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
              ctaText
            }
            ... on ContentfulComponentProductTechnicalInformation {
              internalName
              node_locale
              image {
                file {
                  url
                }
              }
              name
              title
              characteristics {
                techItemLabel
                techItemValue
              }
              documentation {
                file {
                  url
                }
              }
              documentationLinkText
            }
            ... on ContentfulComponentFeedbackForm {
              node_locale
              internalName
              image {
                file {
                  url
                }
              }
              title
              subtitle
              nameFieldLable
              phoneFieldLable
              emailFieldLable
              commentsFieldLable
              ctaText
            }
          }
        }
      }
      allContentfulComposeProjectPage {
        nodes {
          slug
          projectSlug
          title
          node_locale
          navigationIncluded
          content {
            ... on ContentfulComponentPageTopBanner {
              node_locale
              internalName
              heading
              description {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
              image {
                title
                file {
                  url
                }
              }
            }
            ... on ContentfulComponentProjectTechnicalInformation {
              internalName
              node_locale
              image {
                file {
                  url
                }
              }
              title
              characteristics {
                techItemLabel
                techItemValue
              }
            }
            ... on ContentfulComponentProjectGallery {
              internalName
              name
              title
              content {
                image {
                  file {
                    url
                  }
                }
              }
            }
            ... on ContentfulComponentProjectText {
              internalName
              node_locale
              text {
                childMarkdownRemark {
                  htmlAst
                }
              }
            }
            ... on ContentfulComponentFeedbackForm {
              node_locale
              internalName
              image {
                file {
                  url
                }
              }
              title
              subtitle
              nameFieldLable
              phoneFieldLable
              emailFieldLable
              commentsFieldLable
              ctaText
            }
          }
        }
      }
      allContentfulComposeServicePage {
        nodes {
          slug
          serviceSlug
          title
          node_locale
          navigationIncluded
          content {
            ... on ContentfulComponentPageTopBanner {
              node_locale
              internalName
              heading
              description {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
              image {
                title
                file {
                  url
                }
              }
            }
            ... on ContentfulComponentAplicationAreasService {
              internalName
              node_locale
              content {
                internalName
                node_locale
                image {
                  file {
                    url
                  }
                }
                heading
                description {
                  childMarkdownRemark {
                    htmlAst
                  }
                }
                documentation {
                  file {
                    url
                  }
                }
                documentationLinkText
              }
            }
            ... on ContentfulComponentFeedbackForm {
              node_locale
              internalName
              image {
                file {
                  url
                }
              }
              title
              subtitle
              nameFieldLable
              phoneFieldLable
              emailFieldLable
              commentsFieldLable
              ctaText
            }
          }
        }
      }
    }
  `)
  const edges = result.data.allContentfulComposePage.nodes
  const products = result.data.allContentfulComposeProductPage.nodes
  const projects = result.data.allContentfulComposeProjectPage.nodes
  const services = result.data.allContentfulComposeServicePage.nodes

  const allLocales = [
    ...new Set(
      edges.map(e => {
        return e.node_locale
      })
    ),
  ]

  const listingPages = {
    productsListing: "plp",
    projectsListing: "projects-list",
    servicesListing: "services-list",
  }

  // console.log("allLocales:", JSON.stringify(allLocales, null, 4))
  edges.forEach(page => {
    if (page.slug !== "pdp-fifth-element" && page.slug !== "project-description") {
      createPage({
        path: `/${page.node_locale}/${page.slug}`,
        component: path.resolve(`./src/templates/${page.slug}.tsx`),
        context: {
          page,
          allLocales: allLocales.map(loc => ({
            name: loc,
            pathname: `/${loc}/${page.slug}`,
          })),
        },
      })
    }
    if (page.node_locale === "uk-UA" && page.slug === "home") {
      createPage({
        path: `/`,
        component: path.resolve(`./src/templates/${page.slug}.tsx`),
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
          page,
          allLocales: allLocales.map(loc => ({
            name: loc,
            pathname: `/${loc}/${page.slug}`,
          })),
        },
      })
    }
  })
  products.forEach(page => {
    createPage({
      path: `/${page.node_locale}/${listingPages.productsListing}/${page.productSlug}`,
      component: path.resolve(`./src/templates/pdp.tsx`),
      context: {
        page,
        allLocales: allLocales.map(loc => ({
          name: loc,
          pathname: `/${loc}/${listingPages.productsListing}/${page.productSlug}`,
        })),
      },
    })
  })
  projects.forEach(page => {
    createPage({
      path: `/${page.node_locale}/${listingPages.projectsListing}/${page.projectSlug}`,
      component: path.resolve(`./src/templates/project-description.tsx`),
      context: {
        page,
        allLocales: allLocales.map(loc => ({
          name: loc,
          pathname: `/${loc}/${listingPages.projectsListing}/${page.projectSlug}`,
        })),
      },
    })
  })
  services.forEach(page => {
    createPage({
      path: `/${page.node_locale}/${listingPages.servicesListing}/${page.serviceSlug}`,
      component: path.resolve(`./src/templates/service-description.tsx`),
      context: {
        page,
        allLocales: allLocales.map(loc => ({
          name: loc,
          pathname: `/${loc}/${listingPages.servicesListing}/${page.serviceSlug}`,
        })),
      },
    })
  })
}
