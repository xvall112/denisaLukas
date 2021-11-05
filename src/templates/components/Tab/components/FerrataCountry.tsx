import React from "react"

//components
import Card from "../../../../components/own/PlacePageLayout/card"
import NoFavourite from "./noFavourite"
import FullScreenMap from "../../../../components/own/fullScreenMap"

const FerrataCountry = ({ ferrata, country }) => {
  return (
    <>
      {ferrata.length === 0 ? (
        <NoFavourite
          title="Nemáte žádné oblíbené ferraty"
          button="Objevuj nové ferraty"
          slug="/viaFerrata"
        />
      ) : (
        <>
          <FullScreenMap
            markers={ferrata.nodes}
            zoom={country.mapZoom}
            center={country.countryCenterLocation}
          />
          <Card data={ferrata.nodes} four slug="viaFerrata" />
        </>
      )}
    </>
  )
}

export default FerrataCountry
