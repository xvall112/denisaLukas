import React, { useEffect, useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
//materialUI
import { makeStyles, Box } from "@material-ui/core"
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
              gatsbyImageData(placeholder: BLURRED, width: 400)
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
              gatsbyImageData(placeholder: BLURRED, width: 400)
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
    <>
      <Section fullWidth className={classes.sectionNoPaddingTop}>
        <>
          <Hero />
          <Box mt={2}>
            <TypeOfSport />
          </Box>
        </>
      </Section>
      {currentUser && (
        <Section fullWidth className={classes.sectionNoPaddingTop}>
          <FavouriteItems />
        </Section>
      )}
      <Section fullWidth className={classes.sectionNoPaddingTop}>
        <Countries />
      </Section>
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
    </>
  )
}

export default IndexPage
