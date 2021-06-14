import React, { useEffect, useContext } from "react"
import IndexView from "../views/IndexView/IndexView"
import Main from "../layouts/Main/Main"
import WithLayout from "../../WithLayout"

import SEO from "../components/own/seo"

const IndexPage = (): JSX.Element => {
  return (
    <>
      <SEO title="Home" />
      <WithLayout component={IndexView} layout={Main} />
    </>
  )
}

export default IndexPage
