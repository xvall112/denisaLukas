import React from "react"
import SEO from "../components/own/seo"
import IndexViaFerrata from "../views/viaFerrata/IndexViaFerrata"
import LayoutPlaces from "../layouts/Place/Place"

const ViaFerrata = () => {
  return (
    <>
      <SEO
        title="viaFerrata"
        description="Via Ferraty které můžete objevovat"
      />
      <LayoutPlaces>
        <IndexViaFerrata />
      </LayoutPlaces>
    </>
  )
}

export default ViaFerrata

export function Head() {
  return (
    <SEO title="via Ferrata" description="Via Ferraty které můžete objevovat" />
  )
}
