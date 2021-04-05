/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //create page for Places
  const placeTemplate = path.resolve("./src/templates/place/place.tsx")
  const res = await graphql(`
    query MyQuery {
      allContentfulPlaces {
        nodes {
          slug
        }
      }
    }
  `)
  res.data.allContentfulPlaces.nodes.forEach(node => {
    createPage({
      component: placeTemplate,
      path: `/places/${node.slug}`,
      context: {
        slug: node.slug,
      },
    })
  })
}
