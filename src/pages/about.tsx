import React from "react"
import WithLayout from "../../WithLayout"
import SEO from "../components/own/seo"
import AboutIndex from "../views/About/IndexAbout"
import LayoutPlaces from "../layouts/Place/Place"
const Places = () => {
  return (
    <>
      <SEO title="Places" />
      <WithLayout component={AboutIndex} layout={LayoutPlaces} />
    </>
  )
}

export default Places
