import React, { useEffect, useContext } from "react"
import { Helmet } from "react-helmet"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import MenuProvider from "../providers/menu/menu.providers"
import MapProvider from "../providers/map/map.providers"
import UserProvider from "../providers/user/user.provider"
import FavouriteProvider from "../providers/favourite/favourite.provider"
import { UserContext } from "../providers/user/user.provider"

const TopLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/4c273e6d43.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <FavouriteProvider>
        <UserProvider>
          <MapProvider>
            <MenuProvider>
              <>{children}</>
            </MenuProvider>
          </MapProvider>
        </UserProvider>
      </FavouriteProvider>
    </>
  )
}

export default TopLayout
