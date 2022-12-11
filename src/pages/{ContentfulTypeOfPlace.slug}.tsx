import React from "react"
import { graphql } from "gatsby"
//components
import SEO from "../components/own/seo"
import Main from "../layouts/Main/Main"
import Places from "../components/own/Places"
//materialUi
import { Container } from "@material-ui/core"

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
            placeholder: BLURRED
            width: 400
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
        <Container maxWidth="xl">
          <Places places={nodes} />
        </Container>
      </Main>
    </>
  )
}

export default TypeOfPlace
