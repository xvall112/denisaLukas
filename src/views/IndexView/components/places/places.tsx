import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//components
import PlacesLayout from "../../../../components/own/indexView/PlacesLayout"

const query = graphql`
  {
    allContentfulPlaces(filter: { node_locale: { eq: "cs" } }, limit: 4) {
      nodes {
        slug
        name
        titleImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            quality: 50
            height: 1500
          )
          title
        }
        country {
          name
          flagLink
        }
      }
    }
  }
`

const Places = () => {
  const data = useStaticQuery(query)

  return (
    <>
      <PlacesLayout
        data={data.allContentfulPlaces.nodes}
        slug="/places"
        title="Místa"
      />
    </>
  )
}

export default Places
