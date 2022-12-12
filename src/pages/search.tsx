import React, { useEffect, useContext } from "react"
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
