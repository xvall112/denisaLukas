import React, { useContext, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PlacesPageLayout from "../../components/own/PlacePageLayout/PlacesPageLayout"
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
        kindPlace
        titleImage {
          gatsbyImageData(width: 250, placeholder: BLURRED)
          title
        }
        country {
          name
          flagLink
        }
        images {
          gatsbyImageData(
            placeholder: BLURRED
            width: 400
            outputPixelDensities: [0.25, 0.25, 0.25, 0.25]
          )
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
  const dataFilter = data.allContentfulViaFerrata.nodes.filter(
    item => item.country.name === filterCountry
  )

  useEffect(() => {
    setTitle("via Ferrata")
    return () => {
      setTitle("")
    }
  }, [])
  return (
    <>
      <PlacesPageLayout
        data={
          filterCountry === "" ? data.allContentfulViaFerrata.nodes : dataFilter
        }
        slug="viaFerrata"
      />
    </>
  )
}

export default IndexViaFerrata
