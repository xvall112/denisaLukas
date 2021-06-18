import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PlacesPageLayout from "../../components/own/PlacePageLayout/PlacesPageLayout"
import { MapContext } from "../../providers/map/map.providers"

const query = graphql`
  {
    allContentfulViaFerrata(filter: { node_locale: { eq: "cs" } }) {
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

const IndexViaFerrata = () => {
  const { filterCountry } = useContext(MapContext)
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
