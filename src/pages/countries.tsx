import React from "react"
import SEO from "../components/own/seo"
import IndexCountries from "../views/Countries/IndexCountries"
import LayoutPlaces from "../layouts/Place/Place"

const Countries = () => {
  return (
    <>
      <LayoutPlaces>
        <IndexCountries />
      </LayoutPlaces>
    </>
  )
}

export default Countries

export function Head() {
  return (
    <SEO title="Destinace" description="Všechny státy které můžete objevovat" />
  )
}
