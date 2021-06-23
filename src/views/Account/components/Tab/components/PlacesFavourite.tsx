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

const PlacesFavourite = () => {
  const data = useStaticQuery(query)
  const { favouriteItems } = useContext(UserContext)
  const favouritePlaces = data.allContentfulPlaces.nodes.filter(item =>
    favouriteItems.includes(item.id)
  )

  return (
    <>
      {favouritePlaces.length === 0 ? (
        <NoFavourite
          title="Nemáte žádná oblíbená místa"
          button="Objevuj nová místa"
          slug="/places"
        />
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
