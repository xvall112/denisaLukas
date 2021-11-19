import React, { useEffect, useContext } from "react"
import WithLayout from "../../WithLayout"
import SEO from "../components/own/seo"
import IndexSearch from "../views/Search/IndexSearch"
import LayoutMenu from "../layouts/Menu/MenuLayout"
import { MenuContext } from "../providers/menu/menu.providers"

const Places = () => {
  const { setFilterCountry, handleSetLoadList } = useContext(MenuContext)

  useEffect(() => {
    handleSetLoadList(10)
    setFilterCountry("")
  }, [])
  return (
    <>
      <SEO title="Search" description="Vyhledavani" />
      <WithLayout component={IndexSearch} layout={LayoutMenu} />
    </>
  )
}

export default Places
