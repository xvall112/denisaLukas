import React, { useEffect, useContext } from "react"
import IndexView from "../views/IndexView/IndexView"
import Main from "../layouts/Main/Main"
import WithLayout from "../../WithLayout"
import { MenuContext } from "../providers/menu/menu.providers"
import SEO from "../components/own/seo"

const IndexPage = (): JSX.Element => {
  const { setFilterCountry, handleSetLoadList } = useContext(MenuContext)

  useEffect(() => {
    handleSetLoadList(10)
    setFilterCountry("")
  }, [])

  return (
    <>
      <SEO title="Home" description="Hlavní stránka" />
      <WithLayout component={IndexView} layout={Main} />
    </>
  )
}

export default IndexPage
