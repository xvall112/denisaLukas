import React from "react"
import WithLayout from "../../WithLayout"
import SEO from "../components/own/seo"
import AboutIndex from "../views/About/IndexAbout"
import LayoutPlaces from "../layouts/Place/Place"
const Places = () => {
  return (
    <>
      <SEO title="O nás" description="Stranka o nas" />
      <WithLayout component={AboutIndex} layout={LayoutPlaces} />
    </>
  )
}

export default Places
