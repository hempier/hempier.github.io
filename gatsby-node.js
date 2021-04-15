/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const countryBuild = process.env.GATSBY_COUNTRY_BUILD
  const languagesBuild = process.env.GATSBY_COUNTRY_LANGUAGES
  console.log("Build by Country: ", countryBuild)
  console.log("Languages: ", languagesBuild)

  const env = process.env.NODE_ENV
  const { createPage, createRedirect } = actions
  if (countryBuild === "none") return null
  // Catalogue
  const result = await graphql(`
    query {
      allContentfulComposePage {
        nodes {
          slug
          title
          node_locale
          content2 {
            ... on ContentfulComponentInformayionSection {
              name
              title
              node_locale
              ctaText
            }
          }
        }
      }
    }
  `)
  console.log(JSON.stringify(result, null, 4))
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
          page,
        },
      })
    }
  })
//   createRedirect({
//     fromPath: '/',
//     toPath: '/uk-UA/home',
//     isPermanent: true,
//     redirectInBrowser: true,
//  })

  // const edges =
  //   env !== "production"
  //     ? result.data.allContentfulCountry.edges.filter(({ node }) => {
  //         return languagesBuild.search(node.node_locale) !== -1
  //       })
  //     : result.data.allContentfulCountry.edges.filter(({ node }) => {
  //         return (
  //           node.code === countryBuild &&
  //           languagesBuild.search(node.node_locale) !== -1
  //         )
  //       })
  //   edges.forEach(({ node }) => {
  //     const code = node.code.toLowerCase()
  //     const locale = node.node_locale.toLowerCase()
  //     if (languagesBuild.toLocaleLowerCase().search(locale) === -1) return null
  //     // Catalogue page
  //     const cataloguePath =
  //       env !== "production" ? `/${code}/${locale}/` : `/${locale}/`
  //     console.log("cataloguePath :", cataloguePath)
  //     createPage({
  //       path: cataloguePath,
  //       component: path.resolve(`./src/templates/CatalogPage.tsx`),
  //       context: {
  //         // Data passed to context is available in page queries as GraphQL variables.
  //         slug: cataloguePath,
  //         language: node.node_locale,
  //         shipping: node.code,
  //         pageTitle: node.node_locale === "it" ? "Categorie" : "Categories",
  //         marketId: node.market_id,
  //       },
  //     })
  //   })
}
