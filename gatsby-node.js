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
          location {
            lat
            lon
          }
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
        layout: "place",
        slug: place.slug,
        maxLat: place.location.lat + 0.2,
        minLat: place.location.lat - 0.2,
        maxLon: place.location.lon + 0.2,
        minLon: place.location.lon - 0.2,
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
        layout: "place",
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
          id

          location {
            lat
            lon
          }
        }
      }
    }
  `)

  const ferratas = resViaFerrata.data.allContentfulViaFerrata.nodes

  ferratas.forEach((ferrata, index) => {
    const previousFerrataId = index === 0 ? null : ferratas[index - 1].id
    const nextFerrataId =
      index === ferratas.length - 1 ? null : ferratas[index + 1].id
    createPage({
      component: viaFerrataTemplate,
      path: `/${ferrata.slug}`,
      context: {
        layout: "place",
        maxLat: ferrata.location.lat + 0.2,
        minLat: ferrata.location.lat - 0.2,
        maxLon: ferrata.location.lon + 0.2,
        minLon: ferrata.location.lon - 0.2,
        slug: ferrata.slug,
        previousFerrataId,
        nextFerrataId,
      },
    })
  })
}
