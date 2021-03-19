import React, { Component } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import clsx from "clsx"
import Slider from "react-slick"

//material UI
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Button, useMediaQuery, Grid, Box, Typography } from "@material-ui/core"
import { FastRewindTwoTone } from "@material-ui/icons"

//components
import HeroCardPlace from "./heroCardPlace"

const query = graphql`
  {
    allContentfulLandingPage(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        description
        slug
        title
        image {
          gatsbyImageData(layout: FULL_WIDTH)
          description
        }
        place {
          name
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
  root: {},
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
    speed: isMd ? 3000 : 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  }
  return (
    <div className={classes.root}>
      <Slider {...settings}>
        {data.allContentfulLandingPage.nodes.map((item, index) => {
          return (
            <div key={index}>
              <div style={{ display: "grid" }}>
                <GatsbyImage
                  image={item.image.gatsbyImageData}
                  style={{
                    gridArea: "1/1",
                    height: "100vh",
                    // You can set a maximum height for the image, if you wish.
                    // maxHeight: 600,
                  }}
                  alt={item.image.description}
                  formats={["auto", "webp", "avif"]}
                />
                <div
                  style={{
                    // By using the same grid area for both, they are stacked on top of each other
                    gridArea: "1/1",
                    position: "relative",
                    // This centers the other elements inside the hero component
                    placeItems: "center",
                    display: "grid",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography component="span">
                      <Box letterSpacing={16} textAlign="center">
                        EXPLORE
                      </Box>

                      <Box
                        fontSize={isMd ? 130 : 70}
                        fontWeight="fontWeightBold"
                      >
                        {item.title}
                      </Box>

                      <Box fontSize={20} textAlign="center">
                        {item.description}
                      </Box>
                    </Typography>
                    <Box mt={2} textAlign="center">
                      <Button variant="contained" color="primary" size="large">
                        cestovat
                      </Button>
                    </Box>
                  </Grid>

                  <Box position="absolute" bottom="20px">
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={2}
                    >
                      {item.place &&
                        item.place.map((place, index) => {
                          return (
                            <Grid item key={index}>
                              <HeroCardPlace name={place.name} />
                            </Grid>
                          )
                        })}
                    </Grid>
                  </Box>
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
