import React, { useContext } from "react"

//components
import Card from "../../../../components/own/PlacePageLayout/card"
import NoFavourite from "./noFavourite"
import FullScreenMap from "../../../../components/own/fullScreenMap"

const PlacesCountry = ({ places }) => {
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

export default PlacesCountry
