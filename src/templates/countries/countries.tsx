import React, { useContext, useEffect } from "react"
import { graphql } from "gatsby"

//components
import WithLayout from "../../../WithLayout"
import SEO from "../../components/own/seo"
import LayoutPlaces from "../../layouts/Place/Place"
import Hero from "../components/Hero"
import Tab from "../components/Tab/Tab"

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
        level
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
          gatsbyImageData(placeholder: BLURRED, width: 500)
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
      <div>
        <Hero title={name} heroImage={heroImage} />
        <Tab
          places={countryPlaces}
          ferrata={countryFerrata}
          country={country}
          blog={countryBlog}
        />
      </div>
    )
  }

  return (
    <div>
      <SEO title={name} image={`https:${heroImage.file.url}`} />
      <WithLayout component={Nevim} layout={LayoutPlaces} />
    </div>
  )
}

export default Countries
