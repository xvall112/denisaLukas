import React from "react"
import SEO from "../components/own/seo"
import IndexViaFerrata from "../views/viaFerrata/IndexViaFerrata"
import Main from "../layouts/Main/Main"

const ViaFerrata = () => {
  return (
    <>
      <Main>
        <IndexViaFerrata />
      </Main>
    </>
  )
}

export default ViaFerrata

export function Head() {
  return (
    <SEO title="via Ferrata" description="Via Ferraty které můžete objevovat" />
  )
}
