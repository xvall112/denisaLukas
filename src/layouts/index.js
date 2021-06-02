import React from "react"
import { Helmet } from "react-helmet"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import MenuProvider from "../providers/menu/menu.providers"
import MapProvider from "../providers/map/map.providers"
import UserProvider from "../providers/user/user.provider"

import Snackbar from "../components/own/Snackbar"

const TopLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/4c273e6d43.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <UserProvider>
        <MapProvider>
          <MenuProvider>
            <>
              <Snackbar />
              {children}
            </>
          </MenuProvider>
        </MapProvider>
      </UserProvider>
    </>
  )
}

export default TopLayout
