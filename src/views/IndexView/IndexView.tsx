import React, { useEffect, useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
//materialUI
import { makeStyles, Box, Container } from "@material-ui/core"
//components
import { Section } from "../../components/organisms"
import Hero from "./components/hero/hero"
import Countries from "./components/countries/countries"
import Places from "./components/places/places"
import TypeOfSport from "./components/typeOfSport/typeOfSport"
import ViaFerrata from "./components/viaFerrata/viaFerrata"
import FavouriteItems from "./components/favouriteItems/favouriteItems"
import PlacesLayout from "../../components/own/indexView/PlacesLayout"
//context
import { UserContext } from "../../providers/user/user.provider"

const query = graphql`
  {
    contentfulIndexPage {
      content {
        id
        slug
        title
        content {
          ... on ContentfulPlaces {
            id
            name
            slug
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
            country {
              flagLink
              name
            }
          }
          ... on ContentfulViaFerrata {
            id
            name
            slug
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
            country {
              flagLink
              name
            }
          }
        }
      }
    }
  }
`

const useStyles = makeStyles(() => ({
  sectionNoPaddingTop: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  sectionAlternate: {
    padding: 0,
  },
}))

const IndexPage = () => {
  const data = useStaticQuery(query)

  const classes = useStyles()
  const { currentUser } = useContext(UserContext)
  return (
    <Box overflow="hidden">
      <Box mt={1} mx={{ xs: 0, md: 3 }}>
        <Hero />
      </Box>
      <Container maxWidth="xl">
        <Section fullWidth className={classes.sectionNoPaddingTop}>
          <Box mt={2}>
            <TypeOfSport />
          </Box>
        </Section>
        <Section fullWidth className={classes.sectionNoPaddingTop}>
          <Countries />
        </Section>
        {currentUser && (
          <Section fullWidth className={classes.sectionNoPaddingTop}>
            <FavouriteItems />
          </Section>
        )}
        <Section fullWidth className={classes.sectionNoPaddingTop}>
          <Places />
        </Section>
        <Section fullWidth className={classes.sectionNoPaddingTop}>
          <ViaFerrata />
        </Section>
        {data.contentfulIndexPage.content.map(item => {
          return (
            <Section
              fullWidth
              className={classes.sectionNoPaddingTop}
              key={item.id}
            >
              <>
                <PlacesLayout
                  data={item.content}
                  slug={item.slug}
                  title={item.title}
                />
              </>
            </Section>
          )
        })}
      </Container>
    </Box>
  )
}

export default IndexPage
