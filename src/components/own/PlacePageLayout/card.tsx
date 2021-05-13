import React from "react"
import clsx from "clsx"
import { Link } from "gatsby"

//components
import FlagChip from "../flagChip"
import SliderSlick from "../sliderSlick"

//materialUI
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Grid, Chip } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {},
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
    margin: theme.spacing(1, 0),
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
    backgroundColor: theme.palette.background.default,
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
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container direction="row" spacing={2}>
        {data.map((item: any, index: number) => (
          <Grid item xs={12} md={6} lg={6} xl={3} key={index}>
            <Link to={`/${slug}/${item.slug}`} className={classes.link}>
              <div className={classes.folioItem} data-aos="fade-up">
                {/*  <GatsbyImage
                  image={item.titleImage.gatsbyImageData}
                  alt={item.titleImage.title}
                  formats={["auto", "webp", "avif"]}
                /> */}
                <SliderSlick
                  img={item.images}
                  heightImg={"200px"}
                  widthImg={"100%"}
                />
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
                    <Typography
                      variant="h4"
                      className={classes.folioTitle}
                      color="textPrimary"
                    >
                      {item.name}
                    </Typography>
                  </div>
                </div>
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Main
