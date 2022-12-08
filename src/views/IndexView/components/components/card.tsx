import React from "react"
import clsx from "clsx"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
//materialUI
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Grid, Chip, Box } from "@material-ui/core"
import Rating from "@material-ui/lab/Rating"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: "100%",
  },
  flag: {
    borderRadius: theme.spacing(0.5),
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
    height: "100%",

    borderRadius: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {},
    "&:last-child": {
      [theme.breakpoints.up("md")]: {
        marginBottom: 0,
      },
    },
    "& img": {
      borderRadius: theme.spacing(1),
      WebkitBorderRadius: theme.spacing(1),
    },
  },
  image: {
    objectFit: "cover",
    height: 450,
  },
  folioInfoWrapper: {
    marginTop: "-10px",
  },
  folioTitle: {
    fontWeight: "bold",
    paddingTop: theme.spacing(0),
  },
  folioSubtitle: {
    textTransform: "capitalize",
    margin: theme.spacing(1, 0),
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

const Card = ({ item }) => {
  const classes = useStyles()
  return (
    <Box className={classes.folioItem}>
      <Link to={`/${item.slug}`} className={classes.link}>
        <GatsbyImage
          image={item.titleImage.gatsbyImageData}
          alt={item.titleImage.title}
          formats={["auto", "webp", "avif"]}
        />

        <Box
          pt={1}
          className={clsx("folio__info-wrapper", classes.folioInfoWrapper)}
        >
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            spacing={0}
          >
            <Grid item xs={8}>
              <Typography variant="h6" noWrap={true} color="textPrimary">
                {item.name}
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                mt={1}
              >
                <Rating
                  name="half-rating-read"
                  defaultValue={item.rating || 5}
                  precision={0.5}
                  readOnly
                  size="small"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="textSecondary" noWrap={true}>
                {item.adress && item.adress}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={1}
            >
              {item.kindPlace &&
                item.kindPlace.map((item, index) => {
                  return (
                    <Grid item xs="auto">
                      <Chip key={index} label={item} />
                    </Grid>
                  )
                })}

              {item.level && (
                <Grid item xs="auto">
                  <Chip label={item.level} />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Box>
      </Link>
    </Box>
  )
}

export default Card
