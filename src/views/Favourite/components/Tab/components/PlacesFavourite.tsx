import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"

//components
import Card from "../../../../../components/own/PlacePageLayout/card"
import NoFavourite from "./noFavourite"
import FullScreenMap from "../../../../../components/own/fullScreenMap"

//context
import { UserContext } from "../../../../../providers/user/user.provider"

const query = graphql`
  {
    allContentfulPlaces(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        rating
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

const PlacesFavourite = () => {
  const data = useStaticQuery(query)
  const { favouriteItems } = useContext(UserContext)
  const favouritePlaces = data.allContentfulPlaces.nodes.filter(item =>
    favouriteItems.includes(item.id)
  )

  return (
    <>
      {favouritePlaces.length === 0 ? (
        <NoFavourite title="" button="Objevuj nová místa" slug="/places" />
      ) : (
        <>
          <FullScreenMap markers={favouritePlaces} />

          <Card data={favouritePlaces} four slug="places" />
        </>
      )}
    </>
  )
}

export default PlacesFavourite
