import React from "react"
import { graphql } from "gatsby"
import Main from "../../layouts/Main/Main"
import WithLayout from "../../../WithLayout"
//components
import Slider from "../../components/own/sliderSlick"
import FlagChip from "../../components/own/flagChip"
//material Ui
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Chip, Container, Typography } from "@material-ui/core"

export const query = graphql`
  query($slug: String!) {
    contentfulPlaces(slug: { eq: $slug }) {
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
      images {
        gatsbyImageData(layout: FIXED)
        title
      }
      describePlace {
        raw
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  slider: {
    width: "100vw",
    height: "50vh",
  },
}))

const Place = props => {
  const classes = useStyles()
  const {
    country,
    kindPlace,
    name,
    images,
    describePlace,
    location,
  } = props.data.contentfulPlaces
  const Nevim = () => {
    return (
      <div>
        <div className={classes.slider}>
          <Slider img={images} />
        </div>
        <Container maxWidth="xl">
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Chip label={kindPlace} />
            <FlagChip name={country.name} flagLink={country.flagLink} />
          </Grid>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="subtitle1">GPS:</Typography>
          <Typography variant="subtitle1">
            {location.lat}, {location.lon}
          </Typography>
        </Container>
      </div>
    )
  }
  return <WithLayout component={Nevim} layout={Main} />
}

export default Place
