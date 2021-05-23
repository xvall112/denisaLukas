import * as React from "react"
import WithLayout from "../../WithLayout"
import NotFoundCover from "../views/NotFoundCover/NotFoundCover"
import Minimal from "../layouts/Place/Place"
import SEO from "../components/own/seo"

const NotFoundPage = () => {
  return (
    <>
      <SEO title="404: Not found" />
      <WithLayout component={NotFoundCover} layout={Minimal} />
    </>
  )
}

export default NotFoundPage
