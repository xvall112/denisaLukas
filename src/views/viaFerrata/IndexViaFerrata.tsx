import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PlacesPageLayout from "../../components/own/PlacePageLayout/PlacesPageLayout"

const query = graphql`
  {
    allContentfulViaFerrata(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        slug
        name
        kindPlace
        titleImage {
          gatsbyImageData(layout: FULL_WIDTH)
          title
        }
        country {
          name
          flagLink
        }
        images {
          gatsbyImageData(layout: FULL_WIDTH)
          title
        }
        location {
          lat
          lon
        }
      }
    }
  }
`

const IndexViaFerrata = () => {
  const data = useStaticQuery(query)

  return (
    <>
      <PlacesPageLayout
        data={data.allContentfulViaFerrata.nodes}
        slug="viaFerrata"
      />
    </>
  )
}

export default IndexViaFerrata
