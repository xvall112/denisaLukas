import React, { useContext, useEffect } from "react"
import { graphql } from "gatsby"

//components
import LayoutPlaces from "../components/layoutPlaces"
import { CardPromo } from "components/organisms"
import DescriptionSection from "./components/describeSection"
import SEO from "../../components/own/seo"

//material Ui
import { makeStyles } from "@material-ui/core/styles"
import { Grid, colors, Divider, Box } from "@material-ui/core"

//context
import { MenuContext } from "../../providers/menu/menu.providers"

export const query = graphql`
  query($slug: String!, $previousFerrataId: String, $nextFerrataId: String) {
    contentfulViaFerrata(slug: { eq: $slug }) {
      inSurrounding {
        name
        slug
        country {
          flagLink
          name
        }
        titleImage {
          gatsbyImageData(width: 100, placeholder: BLURRED)
          title
        }
        kindPlace
      }
      rating
      id
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
      images {
        gatsbyImageData(width: 1000, placeholder: BLURRED)
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
        gatsbyImageData
        title
      }
      backWayDescription {
        backWayDescription
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
const useStyles = makeStyles(theme => ({
  root: {},
}))

const ViaFerrata = props => {
  const classes = useStyles()
  const { previous, next } = props.data
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
    inSurrounding,
  } = props.data.contentfulViaFerrata

  const { setTitle } = useContext(MenuContext)

  useEffect(() => {
    setTitle(name)
    return () => {
      setTitle("")
    }
  }, [])
  return (
    <>
      <SEO title={name} description={describeFerrata.describeFerrata} />
      <LayoutPlaces
        data={props.data.contentfulViaFerrata}
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
              title={`${ferrataTime + parkingToStartTime + backWayTime} min`}
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
        <Box my={3}>
          <Divider />
        </Box>
      </LayoutPlaces>
    </>
  )
}

export default ViaFerrata
