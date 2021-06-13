import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
//components
import Card from "../../../../../components/own/PlacePageLayout/card"
//context
import { UserContext } from "../../../../../providers/user/user.provider"

const query = graphql`
  {
    allContentfulPlaces(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        id
        slug
        name
        kindPlace
        titleImage {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
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
            height: 1000
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

const PlacesFavourite = () => {
  const data = useStaticQuery(query)
  const { favouriteItems } = useContext(UserContext)
  const favourite = data.allContentfulPlaces.nodes.filter(item =>
    favouriteItems.includes(item.id)
  )
  return (
    <>
      <Card data={favourite} slug="places" />
    </>
  )
}

export default PlacesFavourite
