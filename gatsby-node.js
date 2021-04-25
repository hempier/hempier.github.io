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
