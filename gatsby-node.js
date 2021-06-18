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
      path: `${node.slug}`,
      context: {
        slug: node.slug,
      },
    })
  })

  //create page for Countries
  const countryTemplate = path.resolve(
    "./src/templates/countries/countries.tsx"
  )
  const resCountry = await graphql(`
    query MyQuery {
      allContentfulCountry {
        nodes {
          slug
        }
      }
    }
  `)
  resCountry.data.allContentfulCountry.nodes.forEach(node => {
    createPage({
      component: countryTemplate,
      path: `/country/${node.slug}`,
      context: {
        slug: node.slug,
      },
    })
  })

  //create page for viaFerrata
  const viaFerrataTemplate = path.resolve(
    "./src/templates/viaFerrata/viaFerrata.tsx"
  )
  const resViaFerrata = await graphql(`
    query MyQuery {
      allContentfulViaFerrata {
        nodes {
          slug
        }
      }
    }
  `)
  resViaFerrata.data.allContentfulViaFerrata.nodes.forEach(node => {
    createPage({
      component: viaFerrataTemplate,
      path: `${node.slug}`,
      context: {
        slug: node.slug,
      },
    })
  })
}
