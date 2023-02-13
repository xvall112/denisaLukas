import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//components
import TypeOfActivities from "./components/typeOfSport/typeOfSport"
import Algolia from "../../components/own/Algolia/Algolia"
import Countries from "./components/countries/countries"
import { Section } from "../../components/organisms"
import PlacesLayout from "./components/PlacesLayout"

//materialUI
import { Container, makeStyles } from "@material-ui/core"

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
            rating
            adress
            kindPlace
            titleImage {
              gatsbyImageData(placeholder: BLURRED, width: 500, height: 500)
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
            rating
            kindPlace
            adress
            titleImage {
              gatsbyImageData(placeholder: BLURRED, width: 500, height: 500)
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
    paddingLeft: 0,
    paddingRight: 0,
  },
  sectionAlternate: {
    padding: 0,
  },
}))

const IndexSearch = () => {
  const classes = useStyles()
  const data = useStaticQuery(query)
  return (
    <>
      <Container maxWidth="xl" style={{ marginTop: "60px" }}>
        {/*  <Section fullWidth className={classes.sectionNoPaddingTop}>
          <Title title={"Hledat"} link={"/search"} />
        </Section> */}
        <Section fullWidth className={classes.sectionNoPaddingTop}>
          <Algolia />
        </Section>
        <Section fullWidth className={classes.sectionNoPaddingTop}>
          <TypeOfActivities />
        </Section>
        <Section fullWidth className={classes.sectionNoPaddingTop}>
          <Countries />
        </Section>

        {data.contentfulIndexPage.content.map(item => {
          return (
            <Section
              fullWidth
              className={classes.sectionNoPaddingTop}
              key={item.id}
            >
              <PlacesLayout
                data={item.content}
                slug={item.slug}
                title={item.title}
              />
            </Section>
          )
        })}
      </Container>
    </>
  )
}

export default IndexSearch
