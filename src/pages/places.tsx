import React from "react"
import WithLayout from "../../WithLayout"
import SEO from "../components/own/seo"
import IndexPlaces from "../views/Places/IndexPlaces"
import LayoutPlaces from "../layouts/Place/Place"

const Places = () => {
  return (
    <>
      <SEO title="Places" description="Místa která můžete objevovat" />
      <WithLayout component={IndexPlaces} layout={LayoutPlaces} />
    </>
  )
}

export default Places
