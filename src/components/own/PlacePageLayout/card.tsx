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
  Grow,
} from "@material-ui/core"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import FavoriteIcon from "@material-ui/icons/Favorite"

//context
import { UserContext } from "../../../providers/user/user.provider"
const useStyles = makeStyles(theme => ({
  root: { marginTop: theme.spacing(2) },
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
    marginTop: "-10px",
    padding: theme.spacing(3, 2),
    backgroundColor: theme.palette.background.level2,
  },
  folioTitle: {
    fontWeight: "bold",
    paddingTop: theme.spacing(1),
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
  const { addFavouriteItem, favouriteItems, removeFavouriteItem } = useContext(
    UserContext
  )

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container direction="row" spacing={2}>
        {data.map((item: any, index: number) => {
          const { id } = item
          return (
            <Grid
              item
              xs={12}
              md={four ? 3 : 6}
              lg={four ? 3 : 6}
              xl={3}
              key={index}
            >
              <div className={classes.folioItem} data-aos="fade-up">
                {/*  <GatsbyImage
                  image={item.titleImage.gatsbyImageData}
                  alt={item.titleImage.title}
                  formats={["auto", "webp", "avif"]}
                /> */}
                <Link to={`/${item.slug}`} className={classes.link}>
                  <SliderSlick
                    img={item.images}
                    heightImg={"200px"}
                    widthImg={"100%"}
                  />
                </Link>
                <div
                  className={clsx(
                    "folio__info-wrapper",
                    classes.folioInfoWrapper
                  )}
                >
                  <div>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid
                        item
                        xs={8}
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        spacing={1}
                      >
                        <Grid item>
                          <Grid container alignItems="center">
                            <FlagChip
                              name={item.country.name}
                              flagLink={item.country.flagLink}
                              className={classes.flag}
                              width={40}
                            />
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Chip label={item.kindPlace} />
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Box zIndex={100}>
                          {favouriteItems.includes(id) ? (
                            <Tooltip
                              title="Odebrat z oblíbených"
                              aria-label="Odebrat z oblíbených"
                            >
                              <IconButton
                                aria-label="remove from favourite"
                                onClick={() => removeFavouriteItem(id)}
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
                                aria-label="add to favourite"
                                onClick={() => addFavouriteItem(id)}
                              >
                                <FavoriteBorderIcon fontSize="large" />
                              </IconButton>
                            </Tooltip>
                          )}
                        </Box>
                      </Grid>
                    </Grid>
                    <Link to={`/${item.slug}`} className={classes.link}>
                      <Typography
                        variant="h4"
                        className={classes.folioTitle}
                        color="textPrimary"
                      >
                        {item.name}
                      </Typography>
                    </Link>
                  </div>
                </div>
              </div>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Main
