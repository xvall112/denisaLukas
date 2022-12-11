import React from "react"
import SEO from "../components/own/seo"
import IndexCountries from "../views/Countries/IndexCountries"
import LayoutPlaces from "../layouts/Place/Place"

const Countries = () => {
  return (
    <>
      <SEO
        title="Countries"
        description="Všechny státy které můžete objevovat"
      />
      <LayoutPlaces>
        <IndexCountries />
      </LayoutPlaces>
    </>
  )
}

export default Countries
