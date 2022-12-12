import React from "react"
import { graphql } from "gatsby"
//components
import PlaceLayout from "../components/own/PlacePageLayout/PlacesPageLayout copy"
import SEO from "../components/own/seo"
import Main from "../layouts/Main/Main"
import Places from "../components/own/Places"
//materialUi
import { Container, Box } from "@material-ui/core"

export const query = graphql`
  query($slug: String!) {
    allContentfulPlaces(
      filter: {
        node_locale: { eq: "cs" }
        type: { elemMatch: { slug: { eq: $slug } } }
      }
    ) {
      nodes {
        id
        slug
        name
        rating
        kindPlace
        adress
        titleImage {
          gatsbyImageData(width: 250, placeholder: BLURRED)
          title
        }
        country {
          name
          flagLink
        }
        images {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            outputPixelDensities: [0.25, 0.25, 0.25, 0.25]
          )
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

const TypeOfPlace = props => {
  const { nodes } = props.data.allContentfulPlaces
  return (
    <>
      <Main>
        <PlaceLayout data={nodes} />
      </Main>
    </>
  )
}

export default TypeOfPlace
