import React, { Component } from "react"
import { graphql, navigate, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import clsx from "clsx"
import Slider from "react-slick"

//material UI
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Button, useMediaQuery, Grid, Box, Typography } from "@material-ui/core"
import { FastRewindTwoTone } from "@material-ui/icons"

//components
import HeroCardPlace from "./components/heroCardPlace"

const query = graphql`
  {
    allContentfulLandingPage(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        description
        slug
        title
        image {
          gatsbyImageData(width: 2000)
          title
        }
      }
    }
  }
`
function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: 20 }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: 20, zIndex: 10000 }}
      onClick={onClick}
    />
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    "& .slick-dots": {
      bottom: "15px",
      "& li": { margin: "0px" },
      "& button:before": { color: "white !important", fontSize: "10px" },
    },
    color: "white",
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
}))

const Hero = () => {
  const data = useStaticQuery(query)
  const classes = useStyles()
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: isMd ? true : false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    fade: true,
    cssEase: "linear",
  }
  return (
    <div className={classes.root}>
      <Slider {...settings}>
        {data.allContentfulLandingPage.nodes.map((item, index) => {
          return (
            <div key={index}>
              <div className={classes.img}>
                <div style={{ display: "grid" }} /* className={classes.img} */>
                  <div
                    style={{
                      // By using the same grid area for both, they are stacked on top of each other
                      gridArea: "1/1",
                      position: "relative",
                      height: "80vh",
                      zIndex: 100,
                      // This centers the other elements inside the hero component
                      placeItems: "center",
                      display: "grid",
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.09567577030812324) 50%, rgba(0,0,0,0.1026785714285714) 50%, rgba(0,0,0,0.9066001400560224) 100%)",
                      borderRadius: "5px",
                    }}
                  >
                    <Grid
                      container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      data-aos="fade-up"
                    >
                      <Typography component="span">
                        <Box letterSpacing={16} textAlign="center">
                          EXPLORE
                        </Box>

                        <Box
                          fontSize={isMd ? 130 : 50}
                          fontWeight="fontWeightBold"
                          textAlign="center"
                          letterSpacing={5}
                        >
                          {item.title}
                        </Box>

                        <Box fontSize={20} textAlign="center">
                          {item.description}
                        </Box>
                      </Typography>
                      <Box mt={2} textAlign="center">
                        <Button
                          variant="outlined"
                          color="primary"
                          size="large"
                          onClick={() => navigate(`/${item.slug}`)}
                        >
                          cestovat
                        </Button>
                      </Box>
                    </Grid>

                    <Box position="absolute" bottom="50px" width="100%">
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                      >
                        {/* {item.place &&
                        item.place.map((place, index) => {
                          return (
                            <Grid item xs={10} md={5} lg={2} key={index}>
                              <HeroCardPlace name={place.name} />
                            </Grid>
                          )
                        })} */}
                      </Grid>
                    </Box>
                  </div>
                  <GatsbyImage
                    image={item.image.gatsbyImageData}
                    style={{
                      gridArea: "1/1",
                      height: "80vh",
                      zIndex: 1,
                      // You can set a maximum height for the image, if you wish.
                      // maxHeight: 600,
                    }}
                    alt={item.image.title}
                    formats={["auto", "webp", "avif"]}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Hero
