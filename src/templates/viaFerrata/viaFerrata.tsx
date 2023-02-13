import React, { useContext, useEffect } from "react"
import { graphql } from "gatsby"
//components
import SEO from "../../components/own/seo"
import LayoutPlaces from "../components/layoutPlaces"
import { CardPromo } from "components/organisms"
import DescriptionSection from "./components/describeSection"
import InSeraundings from "../components/InSeraundings"
import LayoutDescribePlace from "../place/components/describePlace"
//material Ui
import { Grid, colors, Divider, Box } from "@material-ui/core"
//context
import { MenuContext } from "../../providers/menu/menu.providers"

export const query = graphql`
  query(
    $slug: String!
    $previousFerrataId: String
    $nextFerrataId: String
    $maxLat: Float
    $minLat: Float
    $maxLon: Float
    $minLon: Float
  ) {
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
          gatsbyImageData(placeholder: BLURRED, width: 200)
          title
        }
        kindPlace
        slug
      }
    }
    contentfulViaFerrata(slug: { eq: $slug }) {
      seoDescription
      rating
      id
      type {
        name
      }
      adress
      backWayTime
      country {
        flagLink
        name
        slug
      }
      describeFerrata {
        describeFerrata
      }
      endLocation {
        lat
        lon
      }
      ferrataTime
      heightOfMountain
      titleImage {
        file {
          url
        }
      }
      images {
        gatsbyImageData(width: 800, placeholder: BLURRED)
        title
      }
      kindPlace
      level
      location {
        lat
        lon
      }
      long
      name
      parkingGps {
        lat
        lon
      }
      parkingToStartDescription {
        parkingToStartDescription
      }
      parkingToStartTime
      slug
      titleImage {
        gatsbyImageData(width: 300, placeholder: BLURRED)
        title
      }
      backWayDescription {
        backWayDescription
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

    next: contentfulViaFerrata(id: { eq: $nextFerrataId }) {
      slug
      name
    }
    previous: contentfulViaFerrata(id: { eq: $previousFerrataId }) {
      slug
      name
    }
  }
`

const ViaFerrata = props => {
  const {
    previous,
    next,
    contentfulViaFerrata,
    viaFerrataInSurrounding,
    placeInSurrounding,
  } = props.data
  const {
    level,

    name,
    location,
    long,
    backWayTime,
    parkingToStartTime,
    parkingToStartDescription,
    parkingGps,
    endLocation,
    describeFerrata,
    backWayDescription,
    ferrataTime,
    seoDescription,
    titleImage,
  } = props.data.contentfulViaFerrata

  const { setTitle } = useContext(MenuContext)

  useEffect(() => {
    setTitle(name)
    return () => {
      setTitle("")
    }
  }, [])

  const data = [...placeInSurrounding.nodes, ...viaFerrataInSurrounding.nodes]
  return (
    <>
      <LayoutPlaces
        data={contentfulViaFerrata}
        slug="viaFerrata"
        next={next}
        previous={previous}
      >
        <Grid container direction="row" spacing={1}>
          <Grid item xs={4}>
            <CardPromo
              title={level}
              description="obtížnost"
              variant="outlined"
              color={colors.amber}
              align="center"
              fontIconClass="fas fa-mountain"
              withShadow
            />
          </Grid>
          <Grid item xs={4}>
            <CardPromo
              title={`${long} m`}
              description="délka"
              variant="outlined"
              color={colors.amber}
              align="center"
              fontIconClass="fas fa-level-up-alt"
              withShadow
            />
          </Grid>
          <Grid item xs={4}>
            <CardPromo
              title={`${Math.floor(
                (ferrataTime + parkingToStartTime + backWayTime) / 60
              )} h ${
                (ferrataTime + parkingToStartTime + backWayTime) % 60
              } min`}
              description="celkem"
              variant="outlined"
              color={colors.amber}
              align="center"
              fontIconClass="far fa-clock"
              withShadow
            />
          </Grid>
          <DescriptionSection
            location={location}
            description={describeFerrata.describeFerrata}
            time={ferrataTime}
            iconLocation="fas fa-map-marker-alt"
            title="via Ferrata"
          />
          <DescriptionSection
            location={parkingGps}
            description={parkingToStartDescription.parkingToStartDescription}
            time={parkingToStartTime}
            iconLocation="fas fa-parking"
            title="Přístup"
          />
          <DescriptionSection
            location={endLocation}
            description={backWayDescription.backWayDescription}
            time={backWayTime}
            iconLocation="fas fa-mountain"
            title="Sestup"
          />
        </Grid>
        {data.length !== 0 && (
          <Box mt={1}>
            <LayoutDescribePlace title="V okolí" icon="fas fa-map-pin">
              <InSeraundings data={data} />
            </LayoutDescribePlace>
          </Box>
        )}
        <Box my={3}>
          <Divider />
        </Box>
      </LayoutPlaces>
    </>
  )
}

export default ViaFerrata

export function Head(props) {
  const { name, seoDescription, titleImage } = props.data.contentfulViaFerrata
  return (
    <SEO
      title={name}
      description={seoDescription}
      image={`https:${titleImage.file.url}`}
    />
  )
}
