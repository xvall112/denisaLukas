import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

//components
import { CardBase } from "components/organisms"

//materialUi
import { Grid, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const query = graphql`
  {
    allContentfulCountry(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        slug
        name
        flagLink
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    "& a": { textDecoration: "none" },
    "& .MuiCardContent-root": {
      padding: "0px",
    },
  },
  img: {
    borderTopLeftRadius: theme.shape.borderRadius,
    webkitBorderTopLeftRadius: theme.shape.borderRadius,
    borderBottomLeftRadius: theme.shape.borderRadius,
    webkitBorderBottomLeftRadius: theme.shape.borderRadius,
    overflow: "hidden",
    height: "50px",
    width: "50px",
    "& img": {
      borderTopLeftRadius: theme.shape.borderRadius,
      webkitBorderTopLeftRadius: theme.shape.borderRadius,
      borderBottomLeftRadius: theme.shape.borderRadius,
      webkitBorderBottomLeftRadius: theme.shape.borderRadius,
    },
  },
  card: {
    backgroundColor: theme.palette.background.level2,
  },
}))

const TypeOfSport = () => {
  const data = useStaticQuery(query)
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container direction="row" spacing={2}>
        {data.allContentfulCountry.nodes.map((item: any, index: number) => {
          return (
            <Grid item xs={6} md={3} lg={2} key={index}>
              <Link to={`/${item.slug}`}>
                <CardBase className={classes.card}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Box className={classes.img}>
                        <img
                          src={item.flagLink}
                          alt={item.name}
                          style={{
                            height: "100%",
                            width: "auto",
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      container
                      justify="center"
                      alignItems="center"
                      xs={8}
                    >
                      <Box fontSize={16}>{item.name}</Box>
                    </Grid>
                  </Grid>
                </CardBase>
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default TypeOfSport
