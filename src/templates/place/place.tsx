import React from "react"
import { graphql } from "gatsby"

//components
import LayoutPlaces from "../components/layoutPlaces"
/* import ContentfulBody from "../components/contentfulBody" */
import LayoutDescribePlace from "./components/describePlace"

export const query = graphql`
  query($slug: String!) {
    contentfulPlaces(slug: { eq: $slug }) {
      id
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
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        title
      }

      images {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 30)
        title
      }
      describePlace {
        raw
      }
      moreInfo {
        raw
      }
      parking {
        raw
      }
      parkingGps {
        lat
        lon
      }
    }
  }
`

const Place = props => {
  return (
    <LayoutPlaces data={props.data.contentfulPlaces} slug="places">
      <>
        <LayoutDescribePlace title="Popis" icon="fas fa-info">
          {/*  <ContentfulBody body={props.data.contentfulPlaces.describePlace} /> */}
        </LayoutDescribePlace>
        {props.data.contentfulPlaces.parking && (
          <LayoutDescribePlace
            icon="fas fa-parking"
            title="Parkoviště"
            parkingGps={props.data.contentfulPlaces.parkingGps}
          >
            {/*   <ContentfulBody body={props.data.contentfulPlaces.parking} /> */}
          </LayoutDescribePlace>
        )}

        {props.data.contentfulPlaces.moreInfo && (
          <LayoutDescribePlace title="Zajímavosti" icon="fas fa-comment">
            {/* <ContentfulBody body={props.data.contentfulPlaces.moreInfo} /> */}
          </LayoutDescribePlace>
        )}
      </>
    </LayoutPlaces>
  )
}

export default Place
