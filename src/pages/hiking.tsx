import React from "react"
import WithLayout from "../../WithLayout"
import SEO from "../components/own/seo"
import IndexHiking from "../views/Hiking/IndexHiking"
import LayoutPlaces from "../layouts/Place/Place"

const Hiking = () => {
  return (
    <>
      <SEO title="Places" />
      <WithLayout component={IndexHiking} layout={LayoutPlaces} />
    </>
  )
}

export default Hiking
