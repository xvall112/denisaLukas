import React, { useContext, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
//materialUI
import { makeStyles, Box, Container } from "@material-ui/core"
//components
import { Section } from "../../components/organisms"
import Hero from "./components/hero/hero"
import PlacesPageLayout from "../../components/own/PlacePageLayout/PlacesPageLayout copy"

//context
import { MenuContext } from "../../providers/menu/menu.providers"

const query = graphql`
  {
    places: allContentfulPlaces(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        id
        name
        slug
        rating
        adress
        kindPlace
        titleImage {
          gatsbyImageData(
            placeholder: BLURRED
            width: 500
            height: 500
            outputPixelDensities: [0.25, 0.25, 0.25, 0.25]
          )
          title
        }
        images {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            outputPixelDensities: [0.25, 0.25, 0.25, 0.25]
          )
          title
        }
        location {
          lat
          lon
        }
        country {
          flagLink
          name
        }
      }
    }
    viaFerrata: allContentfulViaFerrata(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        id
        name
        slug
        rating
        kindPlace
        adress
        titleImage {
          gatsbyImageData(
            placeholder: BLURRED
            width: 500
            height: 500
            outputPixelDensities: [0.25, 0.25, 0.25, 0.25]
          )
          title
        }
        images {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            outputPixelDensities: [0.25, 0.25, 0.25, 0.25]
          )
          title
        }
        location {
          lat
          lon
        }
        country {
          flagLink
          name
        }
      }
    }
  }
`

const useStyles = makeStyles(() => ({
  sectionNoPaddingTop: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  sectionAlternate: {
    padding: 0,
  },
}))

const IndexPage = () => {
  const data = useStaticQuery(query)
  const { places, viaFerrata } = data
  const all = [...places.nodes, ...viaFerrata.nodes].slice(0, 40)
  const classes = useStyles()
  const { setTopTabsValue, handleBottomNavigation } = useContext(MenuContext)
  useEffect(() => {
    setTopTabsValue(0)
    handleBottomNavigation("home")
  }, [])
  return (
    <Box overflow="hidden">
      <Container maxWidth="xl">
        <Section fullWidth className={classes.sectionNoPaddingTop}>
          <Box mt={1}>
            <Hero />
          </Box>
        </Section>
      </Container>

      <PlacesPageLayout data={all} />
    </Box>
  )
}

export default IndexPage
