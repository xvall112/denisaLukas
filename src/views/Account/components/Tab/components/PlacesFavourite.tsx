import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
//components
import Card from "../../../../../components/own/PlacePageLayout/card"
import NoFavourite from "./noFavourite"
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
  const favourite = data.allContentfulPlaces.nodes.filter(item =>
    favouriteItems.includes(item.id)
  )
  console.log(favourite)
  return (
    <>
      {favourite.length === 0 ? (
        <NoFavourite
          title="Nemáte žádná oblíbená místa"
          button="Objevuj nová místa"
          slug="/places"
        />
      ) : (
        <Card data={favourite} four slug="places" />
      )}
    </>
  )
}

export default PlacesFavourite
