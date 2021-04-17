import React from "react"
import clsx from "clsx"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

//components
import FlagChip from "../../../components/own/flagChip"
import SliderSlick from "../../../components/own/sliderSlick"

//materialUI
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Grid } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {},
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
  data?: any
  themeMode?: string
  // All other props
  [x: string]: any
}

const Main = ({
  data,
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container direction="row" spacing={2}>
        {data.map((item: any, index: number) => (
          <Grid item xs={12} md={4} lg={4} xl={3} key={index}>
            <Link to={`/places/${item.slug}`} className={classes.link}>
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
                    <FlagChip
                      name={item.country.name}
                      flagLink={item.country.flagLink}
                      width={20}
                    />
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
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Main
