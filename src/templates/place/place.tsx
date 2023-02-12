import React, { useContext, useEffect } from "react"
import { graphql } from "gatsby"
//components
import SEO from "../../components/own/seo"
import LayoutPlaces from "../components/layoutPlaces"
import ContentfulBody from "../components/contentfulBody"
import LayoutDescribePlace from "./components/describePlace"
import InSeraundings from "../components/InSeraundings"
//context
import { MenuContext } from "../../providers/menu/menu.providers"

export const query = graphql`
  query(
    $slug: String!
    $previousPlaceId: String
    $nextPlaceId: String
    $maxLat: Float
    $minLat: Float
    $maxLon: Float
    $minLon: Float
  ) {
    contentfulPlaces(slug: { eq: $slug }) {
      titleImage {
        file {
          url
        }
      }
      seoDescribe

      rating
      id
      adress
      slug
      country {
        flagLink
        name
        slug
      }
      kindPlace
      location {
        lat
        lon
      }
      name
      titleImage {
        gatsbyImageData(width: 300, placeholder: BLURRED)
        title
      }

      images {
        gatsbyImageData(width: 800, placeholder: BLURRED)
        title
      }
      describePlace {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData(width: 800)
            title
          }
          ... on ContentfulPlaces {
            __typename
            contentful_id
            slug
            name
            seoDescribe
            titleImage {
              contentful_id
              gatsbyImageData(height: 200)
              title
            }
            rating
            kindPlace
            country {
              name
              flagLink
            }
          }
          ... on ContentfulViaFerrata {
            __typename
            contentful_id
            slug
            name
            seoDescription
            titleImage {
              contentful_id
              gatsbyImageData(height: 200)
              title
            }
            rating
            kindPlace
            country {
              name
              flagLink
            }
          }
        }
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
      geoJson {
        features {
          geometry {
            coordinates
            type
          }
          properties {
            description
            stroke
            stroke_opacity
            stroke_width
          }
          type
        }
        type
      }
    }
    next: contentfulPlaces(id: { eq: $nextPlaceId }) {
      slug
      name
    }
    previous: contentfulPlaces(id: { eq: $previousPlaceId }) {
      slug
      name
    }
    placeInSurrounding: allContentfulPlaces(
      filter: {
        location: {
          lat: { gt: $minLat, lt: $maxLat }
          lon: { gt: $minLon, lt: $maxLon }
        }
        node_locale: { eq: "cs" }
        slug: { ne: $slug }
      }
    ) {
      nodes {
        name
        titleImage {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED, width: 200)
          title
        }
        kindPlace
        slug
      }
    }
    viaFerrataInSurrounding: allContentfulViaFerrata(
      filter: {
        location: {
          lat: { gt: $minLat, lt: $maxLat }
          lon: { gt: $minLon, lt: $maxLon }
        }
        node_locale: { eq: "cs" }
        slug: { ne: $slug }
      }
    ) {
      nodes {
        name
        titleImage {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED, width: 200)
          title
        }
        kindPlace
        slug
      }
    }
  }
`

const Place = props => {
  const {
    previous,
    next,
    placeInSurrounding,
    contentfulPlaces,
    viaFerrataInSurrounding,
  } = props.data

  const { setTitle } = useContext(MenuContext)

  useEffect(() => {
    setTitle(contentfulPlaces.name)
    return () => {
      setTitle("")
    }
  }, [])
  const data = [...placeInSurrounding.nodes, ...viaFerrataInSurrounding.nodes]

  return (
    <>
      <LayoutPlaces
        data={contentfulPlaces}
        slug="places"
        next={next}
        previous={previous}
      >
        <LayoutDescribePlace title="Popis" icon="fas fa-info">
          <ContentfulBody body={contentfulPlaces.describePlace} />
        </LayoutDescribePlace>
        {contentfulPlaces.parking && (
          <LayoutDescribePlace
            icon="fas fa-parking"
            title="Parkoviště"
            parkingGps={contentfulPlaces.parkingGps}
          >
            <ContentfulBody body={contentfulPlaces.parking} />
          </LayoutDescribePlace>
        )}

        {contentfulPlaces.moreInfo && (
          <LayoutDescribePlace title="Zajímavosti" icon="fas fa-comment">
            <ContentfulBody body={contentfulPlaces.moreInfo} />
          </LayoutDescribePlace>
        )}
        {data.length !== 0 && (
          <LayoutDescribePlace title="V okolí" icon="fas fa-map-pin">
            <InSeraundings data={data} />
          </LayoutDescribePlace>
        )}
      </LayoutPlaces>
    </>
  )
}

export default Place

export function Head(props) {
  const { name, seoDescription, titleImage } = props.data.contentfulPlaces
  return (
    <SEO
      title={name}
      description={seoDescription}
      image={`https:${titleImage.file.url}`}
    />
  )
}
