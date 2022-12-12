import React, { useEffect, useContext } from "react"
import IndexView from "../views/IndexView/IndexView"
import Main from "../layouts/Main/Main"
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
      <Main>
        <IndexView />
      </Main>
    </>
  )
}

export default IndexPage

export function Head() {
  return <SEO title="Lukas Denisa Sofie" description="Lukas Denisa Sofie" />
}
