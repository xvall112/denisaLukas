import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"

//components
import Card from "../../../../components/own/PlacePageLayout/card"
import NoFavourite from "./noFavourite"
import FullScreenMap from "../../../../components/own/fullScreenMap"

//context
import { UserContext } from "../../../../providers/user/user.provider"

const FerrataCountry = ({ ferrata }) => {
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
          <FullScreenMap markers={ferrata.nodes} />
          <Card data={ferrata.nodes} four slug="viaFerrata" />
        </>
      )}
    </>
  )
}

export default FerrataCountry
