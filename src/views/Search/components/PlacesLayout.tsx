import React from "react"
import Slider from "react-slick"

//components
import Card from "./card"
import Title from "../../../components/own/titleSection"

//materiaUI
import { Grid } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    "& .slick-track": {
      margin: 0,
    },
    "& .slick-slide": {
      padding: "0px 5px",
    },
  },
  nextPlace: {
    border: "1px solid",
    borderColor: theme.palette.text.primary,
    height: "350px",
    borderRadius: theme.shape.borderRadius,
    textDecoration: "none",
    width: "95%",
  },
}))

interface Props {
  data: any
  slug: string
  title: string
}
const PlacesLayout = ({ data, slug, title }: Props): JSX.Element => {
  const classes = useStyles()
  const theme = useTheme()
  const sm = theme.breakpoints.values.sm
  const md = theme.breakpoints.values.md
  const lg = theme.breakpoints.values.lg
  const xl = theme.breakpoints.values.xl
  const settings = {
    speed: 200,
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: false,

    responsive: [
      {
        breakpoint: sm,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: md,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: lg,
        settings: {
          slidesToShow: 4.2,
        },
      },
      {
        breakpoint: xl,
        settings: {
          slidesToShow: 4.2,
        },
      },
    ],
  }

  return (
    <div className={classes.root}>
      <Title title={title} link={`/${slug}`} />
      {data.length === 0 ? (
        <p>Nemáte žadné oblíbené položky</p>
      ) : (
        <Grid item xs={12}>
          <Slider {...settings}>
            {data.map((place, index) => {
              return <Card item={place} key={index} />
            })}
            {/*   <Link to={slug}>
              <Grid
                container
                justify="center"
                alignItems="center"
                className={classes.nextPlace}
              >
                <Typography variant="subtitle1" color="textPrimary">
                  Prozkoumat vše
                </Typography>
              </Grid>
            </Link> */}
          </Slider>
        </Grid>
      )}
    </div>
  )
}

export default PlacesLayout
