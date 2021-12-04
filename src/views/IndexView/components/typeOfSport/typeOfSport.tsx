import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery, Link } from "gatsby"

//components
import { CardBase } from "components/organisms"

//materialUi
import { Grid, Box } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"

const query = graphql`
  {
    allContentfulTypeOfActivities(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        name
        slug
        icon {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          title
        }
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

    "& img": {
      borderTopLeftRadius: theme.shape.borderRadius,
      webkitBorderTopLeftRadius: theme.shape.borderRadius,
      borderBottomLeftRadius: theme.shape.borderRadius,
      webkitBorderBottomLeftRadius: theme.shape.borderRadius,
    },
  },
  card: {
    backgroundColor: theme.palette.background.level2,
    height: "12vh",
  },
}))

const TypeOfSport = () => {
  const data = useStaticQuery(query)
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container direction="row" spacing={2}>
        {data.allContentfulTypeOfActivities.nodes.map(
          (item: any, index: number) => {
            return (
              <Grid item xs={6} md={3} lg={2} key={index}>
                <Link to={`/${item.slug}`}>
                  <CardBase className={classes.card}>
                    <Grid container>
                      <Grid item xs={5}>
                        <Box className={classes.img}>
                          <GatsbyImage
                            image={item.icon.gatsbyImageData}
                            alt={item.icon.title}
                            formats={["auto", "webp", "avif"]}
                            style={{
                              height: "12vh",
                              width: "100%",
                            }}
                          />
                        </Box>
                      </Grid>
                      <Grid
                        item
                        container
                        justify="center"
                        alignItems="center"
                        xs={7}
                      >
                        <Box fontSize={16}>{item.name}</Box>
                      </Grid>
                    </Grid>
                  </CardBase>
                </Link>
              </Grid>
            )
          }
        )}
      </Grid>
    </div>
  )
}

export default TypeOfSport
