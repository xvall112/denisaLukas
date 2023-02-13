import React, { useContext, useEffect } from "react"
import { graphql } from "gatsby"

//components
import SEO from "../../components/own/seo"
import Hero from "../components/Hero"
import Tab from "./Tab/Tab"

//context
import { MenuContext } from "../../providers/menu/menu.providers"

export const query = graphql`
  query($slug: String!, $country: String!) {
    contentfulCountry(slug: { eq: $slug }) {
      name
      heroImage {
        file {
          url
        }
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
        adress
        kindPlace
        country {
          name
          flagLink
        }
        images {
          gatsbyImageData(placeholder: BLURRED, width: 400, height: 400)

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
        level
        rating
        id
        slug
        name
        adress
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
          gatsbyImageData(placeholder: BLURRED, width: 400, height: 400)
          title
        }
        location {
          lat
          lon
        }
      }
    }
    allContentfulBlog(
      filter: { country: { name: { eq: $country } }, node_locale: { eq: "cs" } }
    ) {
      nodes {
        author {
          name
          photo {
            file {
              url
            }
          }
        }
        shortDescription
        date
        slug
        title
        titleImage {
          title
          gatsbyImageData(
            placeholder: BLURRED
            width: 500
            outputPixelDensities: [0.25, 0.25, 0.25, 0.25]
          )
        }
      }
    }
  }
`

const Countries = props => {
  const { name, heroImage } = props.data.contentfulCountry
  const country = props.data.contentfulCountry
  const countryPlaces = props.data.allContentfulPlaces.nodes
  const countryFerrata = props.data.allContentfulViaFerrata.nodes
  const countryBlog = props.data.allContentfulBlog.nodes

  const { setTitle } = useContext(MenuContext)

  useEffect(() => {
    setTitle(name)
    return () => {
      setTitle("")
    }
  }, [])

  const Nevim = () => {
    return (
      <>
        <Hero title={name} heroImage={heroImage} />
        <Tab
          places={countryPlaces}
          ferrata={countryFerrata}
          country={country}
          blog={countryBlog}
        />
      </>
    )
  }

  return (
    <>
      <Nevim />
    </>
  )
}

export default Countries

export function Head(props) {
  const { name, heroImage } = props.data.contentfulCountry
  return <SEO title={name} image={`https:${heroImage.file.url}`} />
}
