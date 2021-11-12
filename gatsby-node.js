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
          id
          slug
        }
      }
    }
  `)

  const places = res.data.allContentfulPlaces.nodes

  places.forEach((place, index) => {
    const previousPlaceId = index === 0 ? null : places[index - 1].id
    const nextPlaceId =
      index === places.length - 1 ? null : places[index + 1].id
    createPage({
      component: placeTemplate,
      path: `/${place.slug}`,
      context: {
        slug: place.slug,
        previousPlaceId,
        nextPlaceId,
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
          name
        }
      }
    }
  `)
  resCountry.data.allContentfulCountry.nodes.forEach(node => {
    createPage({
      component: countryTemplate,
      path: `/${node.slug}`,
      context: {
        slug: node.slug,
        country: node.name,
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
      path: `/${node.slug}`,
      context: {
        slug: node.slug,
      },
    })
  })
}
