import React, { useContext, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PlacesPageLayout from "../../components/own/PlacePageLayout/PlacesPageLayout"
import { MenuContext } from "../../providers/menu/menu.providers"

const query = graphql`
  {
    allContentfulPlaces(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        id
        slug
        name
        rating
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
          gatsbyImageData(placeholder: BLURRED, width: 400, height: 400)
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
      />
    </>
  )
}

export default IndexPlaces
