import React, { useContext, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

//components
import PlacesLayout from "../../../../components/own/indexView/PlacesLayout"

//context
import { UserContext } from "../../../../providers/user/user.provider"

export const query = graphql`
  query {
    allContentfulPlaces(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        id
        slug
        name
        titleImage {
          gatsbyImageData(
            placeholder: BLURRED
            width: 500
            height: 600
            outputPixelDensities: [0.25, 0.25, 0.25, 0.25]
          )
          title
        }
        country {
          name
          flagLink
        }
      }
    }
    allContentfulViaFerrata(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        id
        slug
        name
        titleImage {
          gatsbyImageData(
            placeholder: BLURRED
            width: 500
            height: 600
            outputPixelDensities: [0.25, 0.25, 0.25, 0.25]
          )
          title
        }
        country {
          name
          flagLink
        }
      }
    }
  }
`

const FavouriteItems = () => {
  const data = useStaticQuery(query)
  const { favouriteItems } = useContext(UserContext)
  let favourite

  const favouritePlaces = data.allContentfulPlaces.nodes.filter(item =>
    favouriteItems.includes(item.id)
  )
  const favouriteFerrata = data.allContentfulViaFerrata.nodes.filter(item =>
    favouriteItems.includes(item.id)
  )
  favourite = [...favouritePlaces, ...favouriteFerrata]

  console.log("favourite:", favourite)
  return (
    <>
      <PlacesLayout
        data={favourite}
        slug="/app/favourite"
        title="Moje Oblíbené"
      />
    </>
  )
}

export default FavouriteItems
