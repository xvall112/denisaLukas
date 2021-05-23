import React from "react"
import WithLayout from "../../WithLayout"
import SEO from "../components/own/seo"
import IndexCyklo from "../views/Cyklo/IndexCyklo"
import LayoutPlaces from "../layouts/Place/Place"
const Places = () => {
  return (
    <>
      <SEO title="Places" />
      <WithLayout component={IndexCyklo} layout={LayoutPlaces} />
    </>
  )
}

export default Places
