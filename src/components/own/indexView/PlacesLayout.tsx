import React from "react"

import Slider from "react-slick"
import { Link } from "gatsby"
//components
import Card from "./card"
import Title from "../titleSection"

//materiaUI
import { Grid, Box, Typography } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    "& .slick-track": {
      margin: 0,
    },
  },
  nextPlace: {
    border: "1px solid",
    borderColor: theme.palette.text.primary,
    height: "350px",
    borderRadius: theme.spacing(1),
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

  const settings = {
    speed: 100,
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  }

  return (
    <div className={classes.root}>
      <Title title={title} link={slug} />

      {data.length === 0 ? (
        <p>Nemáte žadné oblíbené položky</p>
      ) : (
        <Grid item xs={12}>
          <Slider {...settings}>
            {data.map((place, index) => {
              return (
                <div key={index}>
                  <Box pr={2}>
                    <Card item={place} />
                  </Box>
                </div>
              )
            })}
            <Link to={slug}>
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
            </Link>
          </Slider>
        </Grid>
      )}
    </div>
  )
}

export default PlacesLayout
