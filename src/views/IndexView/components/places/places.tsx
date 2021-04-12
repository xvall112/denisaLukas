import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
//components
import Card from "./card"
import Title from "../../../../components/own/titleSection"
import SliderSlick from "../../../../components/own/sliderSlick"

//materiaUI
import { Grid, Box } from "@material-ui/core"
import { mergeClasses } from "@material-ui/styles"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    "& .slick-track": {
      margin: 0,
    },
  },
}))

const query = graphql`
  {
    allContentfulPlaces(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        slug
        name
        titleImage {
          gatsbyImageData(layout: FULL_WIDTH)
          description
        }
        country {
          name
          flagLink
        }
      }
    }
  }
`

const Places = () => {
  const classes = useStyles()
  const data = useStaticQuery(query)

  const settings = {
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
          slidesToShow: 1.5,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  }

  return (
    <div className={classes.root}>
      <Title title={"Místa"} link={"places"} />
      <Grid item xs={12}>
        <Slider {...settings}>
          {data.allContentfulPlaces.nodes.map((place, index) => {
            return (
              <div key={index}>
                <Box mr={2}>
                  <Card item={place} />
                </Box>
              </div>
            )
          })}
        </Slider>
      </Grid>
    </div>
  )
}

export default Places
