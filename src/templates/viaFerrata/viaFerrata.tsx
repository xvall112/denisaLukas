import React, { useContext } from "react"
import { graphql } from "gatsby"

//components
import LayoutPlaces from "../components/layoutPlaces"
import { CardPromo } from "components/organisms"
import { CardBase } from "components/organisms"
import { IconAlternate } from "components/molecules"
import DescriptionSection from "./components/describeSection"
import SEO from "../../components/own/seo"

//material Ui
import { makeStyles } from "@material-ui/core/styles"
import { Grid, colors } from "@material-ui/core"

export const query = graphql`
  query($slug: String!) {
    contentfulViaFerrata(slug: { eq: $slug }) {
      id
      adress
      backWayTime
      country {
        flagLink
        name
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
  }
`
const useStyles = makeStyles(theme => ({
  root: {},
}))

const ViaFerrata = props => {
  const classes = useStyles()

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
  } = props.data.contentfulViaFerrata

  return (
    <>
      <SEO title={name} />
      <LayoutPlaces data={props.data.contentfulViaFerrata} slug="viaFerrata">
        <Grid container direction="row" spacing={1}>
          <Grid item xs={4}>
            <CardPromo
              title={level}
              description="obtížnost"
              variant="outlined"
              color={colors.pink}
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
              color={colors.pink}
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
              color={colors.pink}
              align="center"
              fontIconClass="far fa-clock"
              withShadow
            />
          </Grid>
          <DescriptionSection
            location={parkingGps}
            description={parkingToStartDescription.parkingToStartDescription}
            time={parkingToStartTime}
            iconLocation="fas fa-parking"
            title="Přístup"
          />
          <DescriptionSection
            location={location}
            description={describeFerrata.describeFerrata}
            time={ferrataTime}
            iconLocation="fas fa-map-marker-alt"
            title="via Ferrata"
          />
          <DescriptionSection
            location={endLocation}
            description={backWayDescription.backWayDescription}
            time={backWayTime}
            iconLocation="fas fa-mountain"
            title="Sestup"
          />
        </Grid>
      </LayoutPlaces>
    </>
  )
}

export default ViaFerrata
