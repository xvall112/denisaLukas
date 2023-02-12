import React, { useEffect, useContext } from "react"
import SEO from "../components/own/seo"
import IndexSearch from "../views/Search/IndexSearch"
import LayoutMenu from "../layouts/Menu/MenuLayout"
import Place from "../layouts/Place/Place"
const Places = () => {
  return (
    <>
      <Place>
        <IndexSearch />
      </Place>
    </>
  )
}

export default Places

export function Head() {
  return <SEO title="Objevuj" description="Vyhledavani" />
}
