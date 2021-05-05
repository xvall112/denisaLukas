import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import MenuProvider from "../providers/menu/menu.providers"

const TopLayout = ({ children }) => {
  return (
    <>
      <MenuProvider>{children}</MenuProvider>
    </>
  )
}

export default TopLayout
