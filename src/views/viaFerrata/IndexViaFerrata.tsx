import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PlacesPageLayout from "../../components/own/PlacePageLayout/PlacesPageLayout"
import { MenuContext } from "../../providers/menu/menu.providers"

const query = graphql`
  {
    allContentfulViaFerrata(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        id
        slug
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

const IndexViaFerrata = () => {
  const { filterCountry } = useContext(MenuContext)
  const data = useStaticQuery(query)
  const dataFilter = data.allContentfulViaFerrata.nodes.filter(
    item => item.country.name === filterCountry
  )
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
