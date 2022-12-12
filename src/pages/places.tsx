import React from "react"
import SEO from "../components/own/seo"
import IndexPlaces from "../views/Places/IndexPlaces"
import LayoutPlaces from "../layouts/Place/Place"

const Places = () => {
  return (
    <>
      <LayoutPlaces>
        <IndexPlaces />
      </LayoutPlaces>
    </>
  )
}

export default Places

export function Head() {
  return <SEO title="Místa" description="Místa která můžete objevovat" />
}
