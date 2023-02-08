import React from "react"
import { graphql } from "gatsby"
//components
import PlaceLayout from "../components/own/PlacePageLayout/PlacesPageLayout copy"
import SEO from "../components/own/seo"
import Main from "../layouts/Main/Main"

//materialUi

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
          gatsbyImageData(width: 500, height: 500, placeholder: BLURRED)
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
