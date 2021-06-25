import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"

//components
import Card from "../../../../components/own/PlacePageLayout/card"
import NoFavourite from "./noFavourite"
import FullScreenMap from "../../../../components/own/fullScreenMap"

//context
import { UserContext } from "../../../../providers/user/user.provider"

const PlacesFavourite = ({ places }) => {
  return (
    <>
      {places.length === 0 ? (
        <NoFavourite
          title="Nemáte žádná oblíbená místa"
          button="Objevuj nová místa"
          slug="/places"
        />
      ) : (
        <>
          <FullScreenMap markers={places.nodes} />
          <Card data={places.nodes} four slug="places" />
        </>
      )}
    </>
  )
}

export default PlacesFavourite
