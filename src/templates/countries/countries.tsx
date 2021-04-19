import React from "react"
import { graphql } from "gatsby"

//components
import WithLayout from "../../../WithLayout"
import SEO from "../../components/own/seo"
import Places from "../../layouts/Place/Place"

export const query = graphql`
  query($slug: String!) {
    contentfulCountry(slug: { eq: $slug }) {
      name
    }
  }
`

const Countries = props => {
  const { name } = props.data.contentfulCountry
  const Nevim = () => {
    return <div>{name}</div>
  }

  return (
    <div>
      <SEO title={name} />
      <WithLayout component={Nevim} layout={Places} />
    </div>
  )
}

export default Countries
