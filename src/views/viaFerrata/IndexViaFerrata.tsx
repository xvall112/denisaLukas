import React, { useContext, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PlacesPageLayout from "../../components/own/PlacePageLayout/PlacesPageLayout copy"
import { MenuContext } from "../../providers/menu/menu.providers"

const query = graphql`
  {
    allContentfulViaFerrata(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        rating
        level
        id
        slug
        adress
        name
        type {
          name
        }
        titleImage {
          gatsbyImageData(width: 250, placeholder: BLURRED)
          title
        }
        country {
          name
          flagLink
        }
        images {
          gatsbyImageData(width: 500, height: 500, placeholder: BLURRED)
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

const IndexViaFerrata = () => {
  const { filterCountry, setTitle } = useContext(MenuContext)
  const data = useStaticQuery(query)
  /*  const dataFilter = data.allContentfulViaFerrata.nodes.filter(
    item => item.country.name === filterCountry
  ) */

  /*  useEffect(() => {
    setTitle("via Ferrata")
    return () => {
      setTitle("")
    }
  }, []) */
  return (
    <>
      <PlacesPageLayout data={data.allContentfulViaFerrata.nodes} />
    </>
  )
}

export default IndexViaFerrata
