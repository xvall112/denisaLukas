const indexName = `FaithInTravel`

const pageQuery = `  {
    allContentfulPlaces {
      nodes {
        id
        kindPlace
        name
        slug
        titleImage {
          gatsbyImageData
        }
      }
    }
  }
   `

function pageToAlgoliaRecord({
  id,
  kindPlace,
  name,
  slug,
  titleImage: { gatsbyImageData },
}) {
  return {
    objectID: id,
    kindPlace,
    name,
    slug,
    titleImage: { ...gatsbyImageData },
  }
}
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) =>
      data.allContentfulPlaces.nodes.map(pageToAlgoliaRecord),
    indexName,
  },
]
module.exports = queries
