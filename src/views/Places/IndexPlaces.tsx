import React, { useContext } from "react"
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
        kindPlace
        titleImage {
          gatsbyImageData(layout: FULL_WIDTH)
          title
        }
        country {
          name
          flagLink
        }
        images {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            height: 1500
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
  const { filterCountry } = useContext(MenuContext)
  const data = useStaticQuery(query)

  const dataFilter = data.allContentfulPlaces.nodes.filter(
    item => item.country.name === filterCountry
  )

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
