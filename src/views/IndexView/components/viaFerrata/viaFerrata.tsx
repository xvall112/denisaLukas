import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//components
import PlacesLayout from "../components/PlacesLayout"

const query = graphql`
  {
    allContentfulViaFerrata(filter: { node_locale: { eq: "cs" } }, limit: 4) {
      nodes {
        slug
        name
        rating
        kindPlace
        adress
        titleImage {
          gatsbyImageData(
            placeholder: BLURRED
            width: 500
            height: 500
            outputPixelDensities: [0.5, 0.5, 0.5, 0.5]
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

const ViaFerrata = () => {
  const data = useStaticQuery(query)

  return (
    <>
      <PlacesLayout
        data={data.allContentfulViaFerrata.nodes}
        slug="/viaFerrata"
        title="via Ferrata"
      />
    </>
  )
}

export default ViaFerrata
