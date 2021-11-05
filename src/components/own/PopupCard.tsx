import React from "react"
import clsx from "clsx"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

//components

//materialUI
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Chip, Grid, Box } from "@material-ui/core"
import Rating from "@material-ui/lab/Rating"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
  },
  link: {
    textDecoration: "none",
    "& :hover": {
      color: theme.palette.text.primary,
    },
  },

  folioTitle: {
    fontWeight: "bold",
    color: theme.palette.text.primary,
  },
}))

interface ViewComponentProps {
  className?: string
  item: {
    titleImage: { gatsbyImageData: any; title: string }
    slug: string
    name: string
    kindPlace: string
    level: string
    rating: number
  }
  slug: string
  themeMode?: string
  // All other props
  [x: string]: any
}

const PopupCard = ({
  item,
  className,
  slug,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={clsx(className)} {...rest}>
      <Link to={`/${item.slug}`} className={classes.link}>
        <GatsbyImage
          image={item.titleImage.gatsbyImageData}
          alt={item.titleImage.title}
          formats={["auto", "webp", "avif"]}
          style={{ height: "100px", width: "200px", borderRadius: "10px" }}
        />

        <Typography
          variant="h5"
          className={classes.folioTitle}
          color="textPrimary"
        >
          {item.name}
        </Typography>

        <Grid item>
          <Rating
            name="half-rating-read"
            defaultValue={item.rating || 5}
            precision={0.5}
            readOnly
            size="small"
          />
        </Grid>
        <Grid container spacing={1}>
          <Grid item>
            <Chip label={item.kindPlace} />
          </Grid>

          {item.level && (
            <Grid item>
              <Chip label={item.level} />
            </Grid>
          )}
        </Grid>
      </Link>
    </div>
  )
}

export default PopupCard
