import React from "react"
import clsx from "clsx"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

//components

//materialUI
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Chip, Box } from "@material-ui/core"

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
        <div>
          <GatsbyImage
            image={item.titleImage.gatsbyImageData}
            alt={item.titleImage.title}
            formats={["auto", "webp", "avif"]}
            style={{ height: "100px", width: "200px", borderRadius: "10px" }}
          />
          <div>
            <div>
              <Typography
                variant="h5"
                className={classes.folioTitle}
                color="textPrimary"
              >
                {item.name}
              </Typography>
              <Box mt={1}>
                <Chip label={item.kindPlace} />
              </Box>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PopupCard
