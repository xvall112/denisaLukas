import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import { Link } from "gatsby"

//materiaUI
import { Grid, Box, Divider, Typography } from "@material-ui/core"
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
    height: "300px",
    borderRadius: theme.spacing(1),
    textDecoration: "none",
    width: "95%",
  },
  img: {
    borderRadius: "5px",
    WebkitBorderRadius: "5px",
    overflow: "hidden",
    "& img": {
      borderRadius: "5px",
      WebkitBorderRadius: "5px",
    },
  },
  link: {
    textDecoration: "none",
    "& :hover": {
      color: theme.palette.text.primary,
    },
  },
  name: {
    color: theme.palette.text.primary,
    fontWeight: "bold",
    fontSize: "18px",
  },
  rootImg: {
    borderRadius: theme.spacing(0.5),
    WebkitBorderRadius: theme.spacing(0.5),
    overflow: "hidden",
  },
}))

interface Props {
  data?: any
}

const InSeraundings = ({ data }: Props): JSX.Element => {
  console.log(data)
  const classes = useStyles()
  const theme = useTheme()

  const settings = {
    speed: 100,
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  }
  return (
    <>
      <Grid item xs={12}>
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <Box pr={2}>
                  <div className={classes.root}>
                    <Link to={`/${item.slug}`} className={classes.link}>
                      <Box className={classes.img}>
                        <GatsbyImage
                          image={item.titleImage.gatsbyImageData}
                          alt={item.titleImage.title}
                          formats={["auto", "webp", "avif"]}
                          style={{ height: "150px" }}
                        />
                      </Box>
                      <Box mt={0}>
                        <Box
                          textAlign="center"
                          color="text.primary"
                          fontWeight="bold"
                          fontSize={16}
                        >
                          {item.name}
                        </Box>
                      </Box>
                    </Link>
                  </div>
                </Box>
              </div>
            )
          })}
        </Slider>
      </Grid>
      <Box my={2}>
        <Divider />
      </Box>
    </>
  )
}

export default InSeraundings
