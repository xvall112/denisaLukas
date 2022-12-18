const indexName = `FaithInTravel`

const placesQuery = `   {
  allContentfulPlaces(filter: {node_locale: {eq: "cs"}}) {
    nodes {
      id
      name
      adress
      slug
      kindPlace
      titleImage {
        gatsbyImageData
      }
      country {
        name
      }
    }
  }
}
   `

const viaFerrataQuery = `   {
    allContentfulViaFerrata(filter: {node_locale: {eq: "cs"}}) {
      nodes {
        id
        country {
          name
        }
        kindPlace
        adress
        slug
        titleImage {
          gatsbyImageData
        }
        name
      }
    }
  }
     `

const countryQuery = `   {
      allContentfulCountry(filter: {node_locale: {eq: "cs"}}) {
        nodes {
          id
          slug
          flagLink
          name
        }
      }
    }
       `

const blogQuery = `    {
        allContentfulBlog {
          nodes {
            id
            title
            titleImage {
              gatsbyImageData
              title
            }
            slug
            shortDescription
            country {
              name
            }
          }
        }
      }
         `

function blogToAlgoliaRecord({
  id,
  title,
  slug,
  shortDescription,

  country,
}) {
  return {
    objectID: id,
    slug,
    shortDescription,
    title,

    country: country.name,
  }
}

function countryToAlgoliaRecord({ id, slug, flagLink, name }) {
  return {
    objectID: id,
    slug,
    flagLink,
    name,
  }
}

function pageToAlgoliaRecord({ id, kindPlace, name, slug, adress, country }) {
  return {
    objectID: id,
    kindPlace,
    name,
    slug,
    adress,
    country: country.name,
  }
}
const queries = [
  {
    query: blogQuery,
    transformer: ({ data }) =>
      data.allContentfulBlog.nodes.map(blogToAlgoliaRecord),
    indexName,
  },
  {
    query: placesQuery,
    transformer: ({ data }) =>
      data.allContentfulPlaces.nodes.map(pageToAlgoliaRecord),
    indexName,
  },
  {
    query: viaFerrataQuery,
    transformer: ({ data }) =>
      data.allContentfulViaFerrata.nodes.map(pageToAlgoliaRecord),
    indexName,
  },
  {
    query: countryQuery,
    transformer: ({ data }) =>
      data.allContentfulCountry.nodes.map(countryToAlgoliaRecord),
    indexName,
  },
]
module.exports = queries
