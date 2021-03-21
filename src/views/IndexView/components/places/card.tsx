import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
//materiaUI
import { Grid, Box } from "@material-ui/core"
import { string } from "prop-types"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import Tooltip from "@material-ui/core/Tooltip"

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
    "& :hover": {
      color: theme.palette.text.primary,
    },
  },
  name: {
    color: theme.palette.text.primary,
    fontWeight: "bold",
    fontSize: "18px",
  },
  root: {},
  imageFlag: {
    borderRadius: theme.spacing(0.5),
  },
  image: {
    borderRadius: theme.spacing(0.5),
    height: "300px",
  },
}))

interface props {
  item: {
    titleImage: { description: string; gatsbyImageData: any }
    name: string
    country: { flagLink: string; name: string }
    slug: string
  }
}
const Card = ({ item }: props): JSX.Element => {
  const classes = useStyles()
  return (
    <Link to={item.slug} className={classes.link}>
      <div className={classes.root}>
        <GatsbyImage
          image={item.titleImage.gatsbyImageData}
          alt={item.titleImage.description}
          formats={["auto", "webp", "avif"]}
          className={classes.image}
        />
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Box mt={1} className={classes.name}>
            {item.name}
          </Box>
          <Tooltip title={item.country.name} aria-label="add">
            <img
              src={item.country.flagLink}
              width="30"
              alt={item.country.name}
              className={classes.imageFlag}
            />
          </Tooltip>
        </Grid>
      </div>
    </Link>
  )
}

export default Card
