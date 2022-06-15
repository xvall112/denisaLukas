import React, { useContext } from "react"
import clsx from "clsx"
import { Link } from "gatsby"

//components
import FlagChip from "../flagChip"
import SliderSlick from "../sliderSlick"

//materialUI
import { makeStyles } from "@material-ui/core/styles"
import {
  Typography,
  Grid,
  Chip,
  Box,
  IconButton,
  Tooltip,
} from "@material-ui/core"
import Rating from "@material-ui/lab/Rating"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import FavoriteIcon from "@material-ui/icons/Favorite"

//context
import { UserContext } from "../../../providers/user/user.provider"
import { MapContext } from "providers/map/map.providers"

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

interface ViewComponentProps {
  four?: boolean
  className?: string
  slug: string
  data: any
  themeMode?: string
  // All other props
  [x: string]: any
}

const Main = ({
  data,
  className,
  slug,
  four,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles()
  const { setHighlighted } = useContext(MapContext)
  const { addFavouriteItem, favouriteItems, removeFavouriteItem } = useContext(
    UserContext
  )

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container direction="row" spacing={3}>
        {data.map((item: any, index: number) => {
          const { id } = item
          return (
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={four ? 3 : 6}
              xl={3}
              key={index}
            >
              <div
                className={classes.folioItem}
                data-aos="fade-up"
                onMouseEnter={() => setHighlighted(id)}
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
                    {favouriteItems.includes(id) ? (
                      <Tooltip
                        title="Odebrat z oblíbených"
                        aria-label="Odebrat z oblíbených"
                      >
                        <IconButton
                          color="primary"
                          aria-label="remove from favourite"
                          onClick={() => removeFavouriteItem(id)}
                          style={{ padding: 0 }}
                        >
                          <FavoriteIcon fontSize="large" />
                        </IconButton>
                      </Tooltip>
                    ) : (
                      <Tooltip
                        title="Přidat do oblíbených"
                        aria-label="Přidat do oblíbených"
                      >
                        <IconButton
                          color="primary"
                          aria-label="add to favourite"
                          onClick={() => addFavouriteItem(id)}
                          style={{ padding: 0 }}
                        >
                          <FavoriteBorderIcon fontSize="large" />
                        </IconButton>
                      </Tooltip>
                    )}
                  </Box>
                </Grid>
                <Link to={`/${item.slug}`} className={classes.link}>
                  <SliderSlick
                    img={item.images}
                    heightImg={"300px"}
                    widthImg={"100%"}
                  />

                  <div
                    className={clsx(
                      "folio__info-wrapper",
                      classes.folioInfoWrapper
                    )}
                  >
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="flex-start"
                      spacing={0}
                    >
                      <Grid item xs={8}>
                        <Typography
                          variant="h6"
                          noWrap={true}
                          color="textPrimary"
                        >
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
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          noWrap={true}
                        >
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
                  </div>
                </Link>
              </div>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Main
