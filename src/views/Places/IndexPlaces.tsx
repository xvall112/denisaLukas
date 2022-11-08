import React, { useContext, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PlacesPageLayout from "../../components/own/PlacePageLayout/PlacesPageLayout"
import { MenuContext } from "../../providers/menu/menu.providers"

const query = graphql`
  {
    allContentfulPlaces(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        id
        rating
        slug
        name
        kindPlace
        adress
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

const IndexPlaces = () => {
  const { filterCountry, setTitle } = useContext(MenuContext)
  const data = useStaticQuery(query)

  const dataFilter = data.allContentfulPlaces.nodes.filter(
    item => item.country.name === filterCountry
  )

  useEffect(() => {
    setTitle("místa")
    return () => {
      setTitle("")
    }
  }, [])
  return (
    <>
      <PlacesPageLayout
        data={
          filterCountry === "" ? data.allContentfulPlaces.nodes : dataFilter
        }
        slug="places"
      />
    </>
  )
}

export default IndexPlaces
