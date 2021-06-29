import React from "react"
import WithLayout from "../../WithLayout"
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
      <WithLayout component={IndexCountries} layout={LayoutPlaces} />
    </>
  )
}

export default Countries
