import React, { useEffect, useContext } from "react"
import SEO from "../components/own/seo"
import IndexSearch from "../views/Search/IndexSearch"
import LayoutMenu from "../layouts/Menu/MenuLayout"

const Places = () => {
  return (
    <>
      <LayoutMenu>
        <IndexSearch />
      </LayoutMenu>
    </>
  )
}

export default Places

export function Head() {
  return <SEO title="Objevuj" description="Vyhledavani" />
}
