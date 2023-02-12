import React from "react"
import SEO from "../components/own/seo"
import IndexViaFerrata from "../views/viaFerrata/IndexViaFerrata"

const ViaFerrata = () => {
  return (
    <>
      <IndexViaFerrata />
    </>
  )
}

export default ViaFerrata

export function Head() {
  return (
    <SEO title="via Ferrata" description="Via Ferraty které můžete objevovat" />
  )
}
