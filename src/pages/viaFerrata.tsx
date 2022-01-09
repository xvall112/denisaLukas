import React from "react"
import WithLayout from "../../WithLayout"
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
      <WithLayout component={IndexViaFerrata} layout={LayoutPlaces} />
    </>
  )
}

export default ViaFerrata
