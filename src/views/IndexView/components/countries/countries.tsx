import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import { Grid, Box, useMediaQuery } from "@material-ui/core"

import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles"

export const query = graphql`
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
const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
    link: {
      textDecoration: "none",
      "& :hover": {
        textDecoration: "underline",
        color: theme.palette.text.primary,
      },
    },
    name: {
      color: theme.palette.text.primary,
    },
  })
)

const Countries = () => {
  const data = useStaticQuery(query)
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <h1>Countries</h1>
      <Grid container direction="row" spacing={2}>
        {data.allContentfulCountry.nodes.map((country, index) => {
          return (
            <Grid item xs={6} md={3} key={index}>
              <Link to={country.slug} className={classes.link}>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <img
                    src={country.flagLink}
                    height="80"
                    width="110"
                    alt={country.name}
                  />
                  <Box className={classes.name} ml={1} fontWeight="bold">
                    {country.name}
                  </Box>
                </Grid>
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Countries
