import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

//components
import Title from "../../../../components/own/titleSection"
//material UI
import { Grid, Box } from "@material-ui/core"
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles"

export const query = graphql`
  {
    allContentfulCountry(
      limit: 8
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
    flag: { borderRadius: "5px" },
  })
)

const Countries = () => {
  const data = useStaticQuery(query)
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Title title={"Státy"} link={"countries"} />
      <Grid container direction="row" alignItems="center" spacing={2}>
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
                  <Grid item xs={6} md={4}>
                    <img
                      src={country.flagLink}
                      width="100%"
                      alt={country.name}
                      className={classes.flag}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      className={classes.name}
                      ml={1}
                      fontWeight="bold"
                      fontSize={{ xs: 14, md: 18 }}
                    >
                      {country.name}
                    </Box>
                  </Grid>
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
