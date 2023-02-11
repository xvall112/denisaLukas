import React, { useContext } from "react"
import clsx from "clsx"
import { Link } from "gatsby"

//components
import SliderSlick from "../sliderSlick"
import { IconAlternate } from "components/molecules"
//materialUI
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Grid, Chip, Box, Tooltip } from "@material-ui/core"
import Rating from "@material-ui/lab/Rating"

//context
import { UserContext } from "../../../providers/user/user.provider"
import { MapContext } from "providers/map/map.providers"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: "100%",
  },
  hearIconContainer: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    cursor: "pointer",
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
  },
  image: {
    objectFit: "cover",
    height: 450,
  },
  folioInfoWrapper: {
    marginTop: "0px",
    marginBottom: "10px",
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

interface ViewComponentProps {
  item: any
  themeMode?: string
  // All other props
  [x: string]: any
}

const Card = ({ item }: ViewComponentProps): JSX.Element => {
  const classes = useStyles()
  const { setHighlighted } = useContext(MapContext)
  const { addFavouriteItem, favouriteItems, removeFavouriteItem } = useContext(
    UserContext
  )

  return (
    <div
      className={classes.folioItem}
      data-aos="fade-up"
      onMouseEnter={() => setHighlighted(item.id)}
      onMouseLeave={() => setHighlighted(null)}
    >
      <Grid item xs={2}>
        <Box
          zIndex={1000}
          display="flex"
          justifyContent="flex-end"
          position="absolute"
          top="10px"
          right="10px"
        >
          {favouriteItems.includes(item.id) ? (
            <Tooltip
              title="Odebrat z oblíbených"
              aria-label="Odebrat z oblíbených"
            >
              <div className={classes.hearIconContainer}>
                <IconAlternate
                  onClick={() => removeFavouriteItem(item.id)}
                  fontIconClass="fa fa-heart"
                  size="small"
                  shape="circle"
                />
              </div>
            </Tooltip>
          ) : (
            <Tooltip
              title="Přidat do oblíbených"
              aria-label="Přidat do oblíbených"
            >
              <div className={classes.hearIconContainer}>
                <IconAlternate
                  onClick={() => addFavouriteItem(item.id)}
                  fontIconClass="far fa-heart"
                  size="small"
                  shape="circle"
                />
              </div>
            </Tooltip>
          )}
        </Box>
      </Grid>
      <Link to={`/${item.slug}`} className={classes.link}>
        <SliderSlick img={item.images} heightImg={"100%"} widthImg={"100%"} />

        <div className={clsx("folio__info-wrapper", classes.folioInfoWrapper)}>
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
                {item.adress}
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
              {item.kindPlace.map((item, index) => {
                return (
                  <Grid item xs="auto" key={index}>
                    <Chip label={item} />
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
        </div>
      </Link>
    </div>
  )
}

export default Card
