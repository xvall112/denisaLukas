import React from "react"
import { Helmet } from "react-helmet"
import WithLayout from "./src/components/own/WithLayout"

import MenuProvider from "./src/providers/menu/menu.providers"
import MapProvider from "./src/providers/map/map.providers"
import UserProvider from "./src/providers/user/user.provider"
import FavouriteProvider from "./src/providers/favourite/favourite.provider"

const TopLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/4c273e6d43.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>

      <FavouriteProvider>
        <UserProvider>
          <MapProvider>
            <MenuProvider>
              <WithLayout>{children}</WithLayout>
            </MenuProvider>
          </MapProvider>
        </UserProvider>
      </FavouriteProvider>
    </>
  )
}

export default TopLayout
