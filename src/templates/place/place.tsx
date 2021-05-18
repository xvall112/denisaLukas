import React from "react"
import { graphql } from "gatsby"

//components
import LayoutPlaces from "../components/layoutPlaces"
import ContentfulBody from "../components/contentfulBody"
import LayoutDescribePlace from "./components/describePlace"

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
    <>
      <LayoutPlaces data={props.data.contentfulPlaces} slug="places">
        <>
          <LayoutDescribePlace title="Popis">
            <ContentfulBody body={props.data.contentfulPlaces.describePlace} />
          </LayoutDescribePlace>
          {props.data.contentfulPlaces.parking && (
            <LayoutDescribePlace
              title="Parkoviště"
              parkingGps={props.data.contentfulPlaces.parkingGps}
            >
              <ContentfulBody body={props.data.contentfulPlaces.parking} />
            </LayoutDescribePlace>
          )}

          {props.data.contentfulPlaces.moreInfo && (
            <LayoutDescribePlace title="Zajímavosti">
              <ContentfulBody body={props.data.contentfulPlaces.moreInfo} />
            </LayoutDescribePlace>
          )}
        </>
      </LayoutPlaces>
    </>
  )
}

export default Place
