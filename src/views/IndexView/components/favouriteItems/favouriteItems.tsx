import React, { useContext, useEffect } from "react"
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
            layout: FULL_WIDTH
            placeholder: BLURRED
            quality: 50
            height: 1500
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
  const favourite = data.allContentfulPlaces.nodes.filter(item =>
    favouriteItems.includes(item.id)
  )
  console.log(favourite)
  return (
    <>
      <PlacesLayout data={favourite} slug="/account" title="Moje Oblíbené" />
    </>
  )
}

export default FavouriteItems
