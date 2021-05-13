import React from "react"
import { graphql } from "gatsby"

//components
import LayoutPlaces from "../components/layoutPlaces"
import ContentfulBody from "../components/contentfulBody"
//material Ui
import { makeStyles } from "@material-ui/core/styles"

export const query = graphql`
  query($slug: String!) {
    contentfulPlaces(slug: { eq: $slug }) {
      adress
      slug
      country {
        flagLink
        name
      }
      kindPlace
      location {
        lat
        lon
      }
      name
      titleImage {
        gatsbyImageData(layout: FULL_WIDTH)
        title
      }
      images {
        gatsbyImageData(layout: FULL_WIDTH)
        title
      }
      describePlace {
        raw
      }
    }
  }
`

const Place = props => {
  return (
    <>
      <LayoutPlaces data={props.data.contentfulPlaces} slug="places">
        <ContentfulBody body={props.data.contentfulPlaces.describePlace} />
      </LayoutPlaces>
    </>
  )
}

export default Place
