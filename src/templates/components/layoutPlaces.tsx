import React, { useState, useContext } from "react"
import { graphql } from "gatsby"

//components
import WithLayout from "../../../WithLayout"
import Slider from "../../components/own/sliderSlick"
import Places from "../../layouts/Place/Place"
import PlaceHeader from "../components/placeHeader"
import SEO from "../../components/own/seo"
import Location from "../components/Location"
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

//context
import { MapContext } from "../../providers/map/map.providers"

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
      left: "35px",
      bottom: "40px",
      zIndex: 10,
      writingMode: "vertical-rl",
      textOrientation: "mixed",
      transform: "rotate(180deg)",
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
interface Props {
  children: any
  data: {
    name: string
    location: { lat: number; lon: number }
    images: any
    kindPlace: string
    adress: string
    country: { name: string; flagLink: string }
  }
}
const LayoutPlaces = ({ children, data }: Props): JSX.Element => {
  const { map } = useContext(MapContext)
  const classes = useStyles()
  const theme = useTheme()
  const isLg = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  })

  const Nevim = () => {
    return (
      <div className={classes.root}>
        <Typography variant="h1" className={classes.name}>
          <Box
            whiteSpace="nowrap"
            height="80vh"
            component="div"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {data.name}
          </Box>
        </Typography>

        <Grid container>
          <Grid item xs={12} lg={6}>
            <div className={classes.slider}>
              {/* komponenta mapa a slider prepinani button v pleaceHeader */}
              {map ? (
                <LeafletMap
                  zoom={13}
                  center={[data.location.lat, data.location.lon]}
                />
              ) : (
                <Slider
                  img={data.images}
                  heightImg={isLg ? "100vh" : "50vh"}
                  widthImg={"100%"}
                />
              )}
              <Box className={classes.location}>
                {/* komponenta location vpravo dole */}
                <Location location={data.location} />
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box mt={{ xs: 0, lg: 10 }} mb={5} zIndex={100}>
              <Container maxWidth="xl">
                {/* komponenta header */}
                <PlaceHeader
                  kindPlace={data.kindPlace}
                  country={data.country}
                  name={data.name}
                  adress={data.adress}
                  location={data.location}
                />

                {/* komponenta body */}
                {children}
              </Container>
            </Box>
          </Grid>
        </Grid>
      </div>
    )
  }
  return (
    <>
      <SEO title={data.name} />
      <WithLayout component={Nevim} layout={Places} />
    </>
  )
}

export default LayoutPlaces
