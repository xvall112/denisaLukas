import React from "react"
import SEO from "../components/own/seo"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const TopLayout = ({ children }) => {
  return (
    <>
      <SEO title="Faith in Travel" />
      {children}
    </>
  )
}

export default TopLayout
