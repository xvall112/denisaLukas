import React from "react"
import SEO from "../components/own/seo"
import BlogSearch from "../views/BlogSearch/BlogSearch"
import LayoutPlaces from "../layouts/Place/Place"

const Blog = () => {
  return (
    <>
      <LayoutPlaces>
        <BlogSearch />
      </LayoutPlaces>
    </>
  )
}

export default Blog

export function Head() {
  return <SEO title="Blog" description="Články o cestování" />
}
