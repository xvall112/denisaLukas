import React, { useContext } from "react"
import { MenuContext } from "../../../providers/menu/menu.providers"

//materialUI
import { Grid, Box, Container, useMediaQuery, Hidden } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"

//components
import LeafletMap from "../LeafletMap"
import { SectionHeader } from "components/molecules"
import Filter from "./Filter"
import Cards from "./card"
import FullScreenMap from "../fullScreenMap"
const useStyles = makeStyles(theme => ({
  root: {},

  map: {
    width: "100vw",
    height: "50vh",
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: "100vh",
      position: "fixed",
      top: "0px",
    },
  },
}))
interface Props {
  data: any
  slug: string
}
const IndexPlaces = ({ data, slug }: Props): JSX.Element => {
  const { filterCountryLocation, filterCountryZoom } = useContext(MenuContext)
  const theme = useTheme()
  const isLg = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  })
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })
  const classes = useStyles()
  return (
    <>
      <Grid container direction={isMd ? "row" : "column-reverse"}>
        <Grid item xs={12} md={6}>
          <Container maxWidth="xl">
            <Box
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
              mt={{ xs: 8, md: 10 }}
            >
              <SectionHeader
                align="left"
                label={`více než ${data.length}`}
                title={<>míst které můžete objevovat</>}
              />
            </Box>
            <Filter />
            {/*  content */}
            <Box mb={{ xs: 13, md: 0 }}>
              <Cards data={data} slug={slug} />
            </Box>
          </Container>
        </Grid>
        <FullScreenMap
          markers={data}
          zoom={filterCountryZoom}
          center={filterCountryLocation}
        />
        <Hidden mdDown>
          <Grid item xs={12} md={6}>
            <div className={classes.map}>
              <LeafletMap
                zoom={filterCountryZoom}
                center={filterCountryLocation}
                marker={data}
                slug={slug}
              />
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </>
  )
}

export default IndexPlaces
