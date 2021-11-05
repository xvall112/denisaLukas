import React from "react"
import { graphql } from "gatsby"

//components
import WithLayout from "../../../WithLayout"
import SEO from "../../components/own/seo"
import LayoutPlaces from "../../layouts/Place/Place"
import Hero from "../components/Hero"
import Tab from "../components/Tab/Tab"

export const query = graphql`
  query($slug: String!, $country: String!) {
    contentfulCountry(slug: { eq: $slug }) {
      name
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 40)
      }
      mapZoom
      countryCenterLocation {
        lat
        lon
      }
    }

    allContentfulPlaces(
      filter: { country: { name: { eq: $country } }, node_locale: { eq: "cs" } }
    ) {
      nodes {
        rating
        id
        slug
        name
        kindPlace
        country {
          name
          flagLink
        }
        images {
          gatsbyImageData(placeholder: BLURRED, width: 400)
          title
        }
        titleImage {
          gatsbyImageData(width: 250, placeholder: BLURRED)
          title
        }
        location {
          lat
          lon
        }
      }
    }

    allContentfulViaFerrata(
      filter: { country: { name: { eq: $country } }, node_locale: { eq: "cs" } }
    ) {
      nodes {
        rating
        id
        slug
        name
        kindPlace
        titleImage {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 40)
          title
        }
        country {
          name
          flagLink
        }
        images {
          gatsbyImageData(placeholder: BLURRED, width: 400)
          title
        }
        location {
          lat
          lon
        }
      }
    }
  }
`

const Countries = props => {
  const { name, heroImage } = props.data.contentfulCountry
  const country = props.data.contentfulCountry
  const countryPlaces = props.data.allContentfulPlaces
  const countryFerrata = props.data.allContentfulViaFerrata
  const Nevim = () => {
    return (
      <div>
        <Hero title={name} heroImage={heroImage} />
        <Tab
          places={countryPlaces}
          ferrata={countryFerrata}
          country={country}
        />
      </div>
    )
  }

  return (
    <div>
      <SEO title={name} />
      <WithLayout component={Nevim} layout={LayoutPlaces} />
    </div>
  )
}

export default Countries
