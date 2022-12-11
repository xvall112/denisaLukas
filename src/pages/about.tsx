import React from "react"
import SEO from "../components/own/seo"
import AboutIndex from "../views/About/IndexAbout"
import LayoutPlaces from "../layouts/Place/Place"
const Places = () => {
  return (
    <>
      <SEO title="O nás" description="Stranka o nas" />
      <LayoutPlaces>
        <AboutIndex />
      </LayoutPlaces>
    </>
  )
}

export default Places
