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

const FerrataFavourite = () => {
  const data = useStaticQuery(query)
  const { favouriteItems } = useContext(UserContext)
  const favouriteFerrata = data.allContentfulViaFerrata.nodes.filter(item =>
    favouriteItems.includes(item.id)
  )
  return (
    <>
      {favouriteFerrata.length === 0 ? (
        <NoFavourite
          title="Nemáte žádné oblíbené ferraty"
          button="Objevuj nové ferraty"
          slug="/viaFerrata"
        />
      ) : (
        <>
          <FullScreenMap markers={favouriteFerrata} />
          <Card data={favouriteFerrata} four slug="viaFerrata" />
        </>
      )}
    </>
  )
}

export default FerrataFavourite
