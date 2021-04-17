import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Cards from "./components/card"

//materialUI
import { Grid, Box, Container, useMediaQuery } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"

//components
import LeafletMap from "../../components/own/LeafletMap"
import { SectionHeader } from "components/molecules"
import Filter from "./components/Filter"

const query = graphql`
  {
    allContentfulPlaces(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        slug
        name
        kindPlace
        titleImage {
          gatsbyImageData(layout: FULL_WIDTH)
          title
        }
        country {
          name
          flagLink
        }
        images {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`
const useStyles = makeStyles(theme => ({
  root: {},

  map: {
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

const IndexPlaces = () => {
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  const data = useStaticQuery(query)
  const classes = useStyles()

  return (
    <>
      <Grid container direction={isMd ? "row" : "column-reverse"}>
        <Grid item xs={12} lg={6}>
          <Container maxWidth="xl">
            <Box
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
              mt={{ xs: 3, md: 10 }}
            >
              <SectionHeader
                align="left"
                label={`více než ${data.allContentfulPlaces.nodes.length}`}
                title={<>místa která jsme navštívili</>}
              />
            </Box>
            <Filter />
            <Cards data={data.allContentfulPlaces.nodes} />
          </Container>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className={classes.map}>
            <LeafletMap zoom={2} center={[36, -5]} />
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default IndexPlaces
