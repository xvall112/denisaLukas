import * as React from "react"
import NotFoundCover from "../views/NotFoundCover/NotFoundCover"
import Minimal from "../layouts/Place/Place"
import SEO from "../components/own/seo"

const NotFoundPage = () => {
  return (
    <>
      <Minimal>
        <SEO title="404: Not found" />
        <NotFoundCover />
      </Minimal>
    </>
  )
}

export default NotFoundPage
