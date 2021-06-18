import React, { useContext, useEffect } from "react"

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
  Grow,
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
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: "100vh",
      position: "sticky",
      top: "0px",
    },
  },
}))
interface Props {
  children: any
  slug: string
  data: {
    name: string
    location: { lat: number; lon: number }
    parkingGps?: { lat: number; lon: number }
    parkingLocation?: { lat: number; lon: number }
    endLocation?: { lat: number; lon: number }
    images: any
    kindPlace: string
    adress: string
    country: { name: string; flagLink: string }
    id: string
  }
}
const LayoutPlaces = ({ children, data, slug }: Props): JSX.Element => {
  const { map, setFilterCountry } = useContext(MapContext)
  const classes = useStyles()
  const theme = useTheme()
  const isLg = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  })
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })
  useEffect(() => {
    setFilterCountry(
      data.country.name,
      data.location.lat,
      data.location.lon,
      11
    )
    return () => {
      setFilterCountry("")
    }
  }, [])
  const Nevim = () => {
    return (
      <Grow in={true}>
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
            <Grid item xs={12} md={6}>
              <div className={classes.slider}>
                {/* komponenta mapa a slider prepinani button v pleaceHeader */}
                {map ? (
                  <LeafletMap
                    zoom={13}
                    center={[data.location.lat, data.location.lon]}
                    marker={[data]}
                    parking={
                      data.parkingGps
                        ? [data.parkingGps.lat, data.parkingGps.lon]
                        : null
                    }
                    endFerrataLocation={
                      data.endLocation
                        ? [data.endLocation.lat, data.endLocation.lon]
                        : null
                    }
                    slug={slug}
                  />
                ) : (
                  <Slider
                    img={data.images}
                    heightImg={isMd ? "100vh" : "50vh"}
                    widthImg={"100%"}
                  />
                )}
                <Box className={classes.location}>
                  {/* komponenta location vpravo dole */}
                  <Location location={data.location} />
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box mt={{ xs: 0, lg: 10 }} mb={5} zIndex={100}>
                <Container maxWidth="xl">
                  {/* komponenta header */}
                  <PlaceHeader
                    kindPlace={data.kindPlace}
                    country={data.country}
                    name={data.name}
                    adress={data.adress}
                    location={data.location}
                    id={data.id}
                  />

                  {/* komponenta body */}
                  {children}
                </Container>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Grow>
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
