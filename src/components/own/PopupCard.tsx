import React from "react"
import clsx from "clsx"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

//components

//materialUI
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Grid } from "@material-ui/core"

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
  folioItem: {
    position: "relative",
    overflow: "hidden",
    margin: theme.spacing(0),
    boxShadow: `0 1.5rem 4rem rgba(22,28,45,.05)`,
    borderRadius: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {},
    "&:last-child": {
      [theme.breakpoints.up("md")]: {
        marginBottom: 0,
      },
    },
  },
  image: {
    objectFit: "cover",
    height: 450,
  },
  folioInfoWrapper: {
    padding: theme.spacing(1, 2),
    backgroundColor: theme.palette.background.default,
  },
  folioTitle: {
    fontWeight: "bold",
  },
  folioSubtitle: {
    textTransform: "capitalize",
    margin: theme.spacing(0),
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      maxWidth: 500,
      margin: "0 auto",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      maxWidth: "100%",
    },
  },
  gridWrapper: {
    display: "flex",
    flexDirection: "row",
  },
}))

interface ViewComponentProps {
  className?: string
  item: any
  themeMode?: string
  // All other props
  [x: string]: any
}

const PopupCard = ({
  item,
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Link to={`/places/${item.slug}`} className={classes.link}>
        <div className={classes.folioItem}>
          <GatsbyImage
            image={item.titleImage.gatsbyImageData}
            alt={item.titleImage.title}
            formats={["auto", "webp", "avif"]}
          />
          <div
            className={clsx("folio__info-wrapper", classes.folioInfoWrapper)}
          >
            <div>
              <Typography
                variant="h5"
                className={classes.folioTitle}
                color="textPrimary"
              >
                {item.name}
              </Typography>

              <Typography
                variant="body1"
                className={classes.folioSubtitle}
                color="textSecondary"
              >
                {item.kindPlace}
              </Typography>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PopupCard
