import React, { useState } from "react"
import { graphql } from "gatsby"
import WithLayout from "../../../WithLayout"

//components
import Slider from "../../components/own/sliderSlick"
import ContentfulBody from "../components/contentfulBody"
import Places from "../../layouts/Place/Place"
import PlaceHeader from "./components/placeHeader"
import SEO from "../../components/own/seo"
import Location from "./components/Location"
import LeafletMap from "../../components/own/LeafletMap"
//material Ui
import { makeStyles, useTheme } from "@material-ui/core/styles"
import {
  Container,
  Box,
  Grid,
  useMediaQuery,
  Typography,
} from "@material-ui/core"

export const query = graphql`
  query($slug: String!) {
    contentfulPlaces(slug: { eq: $slug }) {
      adress
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
        gatsbyImageData(layout: FULL_WIDTH)
        title
      }
      describePlace {
        raw
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  root: {},
  location: {
    display: "none",
    color: "white",
    [theme.breakpoints.up("lg")]: {
      display: "inline",
      position: "fixed",
      left: "40vw",
      bottom: "50px",
      zIndex: 10,
      fontWeight: "bold",
    },
  },
  name: {
    display: "none",
    color: "white",
    [theme.breakpoints.up("lg")]: {
      display: "inline",
      position: "fixed",
      left: "-140px",
      bottom: "230px",
      zIndex: 10,
      transform: "rotate(-90deg)",
      fontWeight: "bold",
    },
  },
  slider: {
    width: "100vw",
    height: "50vh",
    [theme.breakpoints.up("lg")]: {
      width: "100%",
      height: "100vh",
      position: "sticky",
      top: "0px",
    },
  },
}))

const Place = props => {
  const [map, setMap] = useState(false)
  const classes = useStyles()
  const theme = useTheme()
  const isLg = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  })
  const {
    country,
    kindPlace,
    name,
    images,
    describePlace,
    location,
    adress,
  } = props.data.contentfulPlaces

  const changeMap = () => {
    setMap(map => !map)
  }

  const Nevim = () => {
    return (
      <div className={classes.root}>
        <Typography variant="h1" className={classes.name}>
          {name}
        </Typography>

        <Grid container>
          <Grid item xs={12} lg={6}>
            <div className={classes.slider}>
              {/* komponenta mapa a slider prepinani button v pleaceHeader */}
              {map ? (
                <LeafletMap zoom={13} center={[location.lat, location.lon]} />
              ) : (
                <Slider
                  img={images}
                  heightImg={isLg ? "100vh" : "50vh"}
                  widthImg={"100%"}
                />
              )}
              <Box className={classes.location}>
                {/* komponenta location vpravo dole */}
                <Location location={location} />
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box mt={{ xs: 0, lg: 10 }} mb={5} zIndex={100}>
              <Container maxWidth="xl">
                {/* komponenta header */}
                <PlaceHeader
                  kindPlace={kindPlace}
                  country={country}
                  name={name}
                  adress={adress}
                  location={location}
                  map={map}
                  changeMap={changeMap}
                />
                <Box mb={3}>
                  <hr></hr>
                </Box>
                {/* komponenta body */}
                <ContentfulBody body={describePlace} />
              </Container>
            </Box>
          </Grid>
        </Grid>
      </div>
    )
  }
  return (
    <>
      <SEO title={name} />
      <WithLayout component={Nevim} layout={Places} />
    </>
  )
}

export default Place
