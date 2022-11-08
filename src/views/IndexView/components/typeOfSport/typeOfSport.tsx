import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery, Link } from "gatsby"

//components
import { CardBase } from "components/organisms"

//materialUi
import { Grid, Box, Typography } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"

const query = graphql`
  {
    allContentfulTypeOfActivities(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        name
        slug
        icon {
          gatsbyImageData(
            placeholder: BLURRED
            width: 200
            outputPixelDensities: [0.5, 0.5, 0.5, 0.5]
          )
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
  text: {
    fontWeight: 700,
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
    height: "20vh",

    "& :hover img": {
      transition: "transform 0.5s,-webkit-transform 0.5s ",
      transform: "scale(1.2)",
    },
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
              <Grid item xs={12} md={4} lg={4} key={index}>
                <Link to={`/${item.slug}`}>
                  <CardBase noShadow liftUp className={classes.card}>
                    <Grid container>
                      <Grid item xs={4}>
                        <Box className={classes.img}>
                          <GatsbyImage
                            image={item.icon.gatsbyImageData}
                            alt={item.icon.title}
                            formats={["auto", "webp", "avif"]}
                            style={{
                              height: "20vh",
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
                        <Typography variant="h5" className={classes.text}>
                          {item.name}
                        </Typography>
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
