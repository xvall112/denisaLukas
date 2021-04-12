import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
//components
import FlagChip from "../../../../components/own/flagChip"
//materiaUI
import { Grid, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

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
    <Link to={`places/${item.slug}`} className={classes.link}>
      <div className={classes.root}>
        <GatsbyImage
          image={item.titleImage.gatsbyImageData}
          alt={item.titleImage.description}
          formats={["auto", "webp", "avif"]}
          className={classes.image}
        />
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
      </div>
    </Link>
  )
}

export default Card
