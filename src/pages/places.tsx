import React from "react"
import SEO from "../components/own/seo"
import IndexPlaces from "../views/Places/IndexPlaces"
import LayoutPlaces from "../layouts/Place/Place"

const Places = () => {
  return (
    <>
      <SEO title="Places" description="Místa která můžete objevovat" />
      <LayoutPlaces>
        <IndexPlaces />
      </LayoutPlaces>
    </>
  )
}

export default Places
