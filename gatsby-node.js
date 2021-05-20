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
              }
            }
            ... on ContentfulComponentAplicationAreas {
              node_locale
              internalName
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
          }
        }
      }
    }
  `)
  const edges = result.data.allContentfulComposePage.nodes
  edges.forEach(page => {
    createPage({
      path: `/${page.node_locale}/${page.slug}`,
      component: path.resolve(`./src/templates/${page.slug}.tsx`),
      context: {
        page,
      },
    })
    if (page.node_locale === 'uk-UA' && page.slug === 'home') {
      createPage({
        path: `/`,
        component: path.resolve(`./src/templates/${page.slug}.tsx`),
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
          page,
        },
      })
    }
  })
}
