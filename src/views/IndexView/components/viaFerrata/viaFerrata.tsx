import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//components
import PlacesLayout from "../../../../components/own/indexView/PlacesLayout"

const query = graphql`
  {
    allContentfulViaFerrata(filter: { node_locale: { eq: "cs" } }, limit: 4) {
      nodes {
        slug
        name
        titleImage {
          gatsbyImageData(
            placeholder: BLURRED
            width: 500
            height: 500
            outputPixelDensities: [0.25, 0.25, 0.25, 0.25]
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
