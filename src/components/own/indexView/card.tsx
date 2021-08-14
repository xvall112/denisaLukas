import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
//components
import FlagChip from "../flagChip"
//materiaUI
import { Grid, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  img: {
    borderRadius: "5px",
    WebkitBorderRadius: "5px",
    overflow: "hidden",
    "& img": {
      borderRadius: "5px",
      WebkitBorderRadius: "5px",
    },
  },
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
  root: {
    borderRadius: theme.spacing(0.5),
    WebkitBorderRadius: theme.spacing(0.5),
    overflow: "hidden",
  },
  imageFlag: {
    borderRadius: theme.spacing(0.5),
  },
}))

interface props {
  item: {
    titleImage: { title: string; gatsbyImageData: any }
    name: string
    country: { flagLink: string; name: string }
    slug: string
  }
}
const Card = ({ item }: props): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Link to={`/${item.slug}`} className={classes.link}>
        <Box className={classes.img}>
          <GatsbyImage
            image={item.titleImage.gatsbyImageData}
            alt={item.titleImage.title}
            formats={["auto", "webp", "avif"]}
            style={{ height: "300px" }}
          />
        </Box>
        <Box mt={1}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Box className={classes.name}>{item.name}</Box>

            <FlagChip
              width={30}
              name={item.country.name}
              flagLink={item.country.flagLink}
              className={classes.imageFlag}
            />
          </Grid>
        </Box>
      </Link>
    </div>
  )
}

export default Card
