import React from "react"
import WithLayout from "../../WithLayout"
import SEO from "../components/own/seo"
import IndexSearch from "../views/Search/IndexSearch"
import LayoutMenu from "../layouts/Menu/MenuLayout"

const Places = () => {
  return (
    <>
      <SEO title="Search" description="Vyhledavani" />
      <WithLayout component={IndexSearch} layout={LayoutMenu} />
    </>
  )
}

export default Places
