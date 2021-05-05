import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import { Link } from "gatsby"
//components
import Card from "./card"
import Title from "../../../../components/own/titleSection"
import { LearnMoreLink } from "components/atoms"

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

const query = graphql`
  {
    allContentfulPlaces(filter: { node_locale: { eq: "cs" } }, limit: 4) {
      nodes {
        slug
        name
        titleImage {
          gatsbyImageData(layout: FULL_WIDTH)
          title
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
  const theme = useTheme()

  const settings = {
    speed: 200,
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
                <Box pr={2}>
                  <Card item={place} />
                </Box>
              </div>
            )
          })}
          <Link to="/places">
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
    </div>
  )
}

export default Places
