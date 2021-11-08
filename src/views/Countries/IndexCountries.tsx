import React, { useContext, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MenuContext } from "../../providers/menu/menu.providers"
//materialUI
import { Container, Box } from "@material-ui/core"
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
  const { setTitle } = useContext(MenuContext)
  useEffect(() => {
    setTitle("státy")
    return () => {
      setTitle("")
    }
  }, [])
  return (
    <Box mt={7}>
      <Container maxWidth="xl">
        <Card data={data} />
      </Container>
    </Box>
  )
}

export default IndexCountries
