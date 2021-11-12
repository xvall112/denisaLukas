import React, { useContext, useEffect } from "react"
import { graphql } from "gatsby"

//components
import LayoutPlaces from "../components/layoutPlaces"
import ContentfulBody from "../components/contentfulBody"
import LayoutDescribePlace from "./components/describePlace"
import SEO from "../../components/own/seo"
//context
import { MenuContext } from "../../providers/menu/menu.providers"

export const query = graphql`
  query($slug: String!, $previousPostId: String, $nextPostId: String) {
    contentfulPlaces(slug: { eq: $slug }) {
      rating
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
        gatsbyImageData(width: 250, placeholder: BLURRED)
        title
      }

      images {
        gatsbyImageData(width: 1000, placeholder: BLURRED)
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
    next: contentfulPlaces(id: { eq: $nextPostId }) {
      slug
      name
      titleImage {
        gatsbyImageData
      }
    }
    previous: contentfulPlaces(id: { eq: $previousPostId }) {
      slug
      name
      titleImage {
        gatsbyImageData
      }
    }
  }
`

const Place = props => {
  const { setTitle } = useContext(MenuContext)
  useEffect(() => {
    setTitle(props.data.contentfulPlaces.name)
    return () => {
      setTitle("")
    }
  }, [])
  const { previous, next } = props.data
  console.log("previous place:", previous)
  return (
    <>
      <SEO title={props.data.contentfulPlaces.name} />
      <LayoutPlaces data={props.data.contentfulPlaces} slug="places">
        <LayoutDescribePlace title="Popis" icon="fas fa-info">
          <ContentfulBody body={props.data.contentfulPlaces.describePlace} />
        </LayoutDescribePlace>
        {props.data.contentfulPlaces.parking && (
          <LayoutDescribePlace
            icon="fas fa-parking"
            title="Parkoviště"
            parkingGps={props.data.contentfulPlaces.parkingGps}
          >
            <ContentfulBody body={props.data.contentfulPlaces.parking} />
          </LayoutDescribePlace>
        )}

        {props.data.contentfulPlaces.moreInfo && (
          <LayoutDescribePlace title="Zajímavosti" icon="fas fa-comment">
            <ContentfulBody body={props.data.contentfulPlaces.moreInfo} />
          </LayoutDescribePlace>
        )}
      </LayoutPlaces>
    </>
  )
}

export default Place
