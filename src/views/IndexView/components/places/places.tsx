import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//components
import Card from "./card"

//materiaUI
import { Grid, Box } from "@material-ui/core"
const query = graphql`
  {
    allContentfulPlaces(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        slug
        name
        titleImage {
          gatsbyImageData(layout: FULL_WIDTH)
          description
        }
        country {
          name
          flagLink
        }
      }
    }
  }
`

const Places = () => {
  const data = useStaticQuery(query)
  return (
    <div>
      <Box fontSize={32} mb={2}>
        Places
      </Box>
      <Grid container direction="row" spacing={3}>
        {data.allContentfulPlaces.nodes.map((place, index) => {
          return (
            <Grid item xs={6} md={4} key={index}>
              <Card item={place} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Places
