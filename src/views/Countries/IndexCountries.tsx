import React from "react"
import { useStaticQuery, graphql } from "gatsby"
//components
import Section from "../../components/organisms/Section/Section"
import Card from "./components/card"
const query = graphql`
  {
    allContentfulCountry(
      filter: { node_locale: { eq: "cs" } }
      sort: { fields: name }
    ) {
      nodes {
        name
        slug
        flagLink
      }
    }
  }
`

const IndexCountries = () => {
  const data = useStaticQuery(query)

  return (
    <>
      <Section fullWidth>
        <Card data={data} />
      </Section>
    </>
  )
}

export default IndexCountries
