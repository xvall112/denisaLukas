import React, { Component } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import clsx from "clsx"

import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

import Slider from "react-slick"
import { FastRewindTwoTone } from "@material-ui/icons"

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
      }
    }
  }
`
function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: 10 }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: 10 }}
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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

                      <Box fontSize={130} fontWeight="fontWeightBold">
                        {item.title}
                      </Box>

                      <Box fontSize={20} textAlign="center">
                        {item.description}
                      </Box>
                    </Typography>
                    <Box mt={2}>
                      <Button variant="contained" color="primary" size="large">
                        cestovat
                      </Button>
                    </Box>
                  </Grid>
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
