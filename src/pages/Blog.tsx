import React from "react"
import WithLayout from "../../WithLayout"
import SEO from "../components/own/seo"
import BlogSearch from "../views/BlogSearch/BlogSearch"
import LayoutPlaces from "../layouts/Place/Place"

const Blog = () => {
  return (
    <>
      <SEO title="Blog" description="Články o cestování" />
      <WithLayout component={BlogSearch} layout={LayoutPlaces} />
    </>
  )
}

export default Blog
