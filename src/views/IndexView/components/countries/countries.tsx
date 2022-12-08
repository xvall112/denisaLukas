import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Slider from "react-slick"
import { GatsbyImage } from "gatsby-plugin-image"
//components
import Title from "../../../../components/own/titleSection"
//material UI
import { Grid, Box, Typography } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { shadows } from "@material-ui/system"

export const query = graphql`
  {
    allContentfulCountry(
      filter: { node_locale: { eq: "cs" } }
      sort: { fields: name }
    ) {
      nodes {
        name
        slug
        flagLink
        heroImage {
          gatsbyImageData(height: 500)
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
      style={{
        ...style,
        display: "block",
        left: 10,
        zIndex: 10,
      }}
      onClick={onClick}
    />
  )
}

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      "& .slick-slide": {
        padding: "0px 5px",
      },
      "& .slick-dots": {
        "& button:before": { color: "white !important", fontSize: "10px" },
      },
      "& a": {
        color: "white",
      },
    },
    card: {
      boxShadow: theme.shadows[3],
      height: "200px",
      position: "relative",
      overflow: "hidden",
      borderRadius: "5px",
      webkitBorderRadius: "5px",
      [theme.breakpoints.up("lg")]: {
        height: "400px",
      },
      "&:hover": {
        "& img": {
          transform: "scale(1.2)",
          filter: "brightness(1)",
        },
      },
      "& .lazy-load-image-loaded": {
        display: "flex !important",
      },
    },
    img: {
      borderRadius: theme.shape.borderRadius,
      WebkitBorderRadius: theme.shape.borderRadius,
      overflow: "hidden",

      objectFit: "cover",
      "& img": {
        borderRadius: theme.shape.borderRadius,
        WebkitBorderRadius: theme.shape.borderRadius,
        filter: "brightness(0.7)",
        transition: "all .7s ease !important",
      },
    },
    typo: {
      fontWeight: 700,
    },
  })
)

const Countries = () => {
  const data = useStaticQuery(query)
  const classes = useStyles()
  const settings = {
    infinite: false,

    slidesToShow: 6,
    swipeToSlide: true,
    speed: 300,
    rows: 1,
    slidesPerRow: 1,
    slidesToScroll: 6,
    dots: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          arrows: true,
          slidesToShow: 4.5,
          slidesToScroll: 4,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1.5,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  }
  return (
    <Box className={classes.root}>
      <Title title={"Destinace"} link={"countries"} />
      <Grid item xs={12}>
        <Slider {...settings}>
          {data.allContentfulCountry.nodes.map((item, index) => {
            return (
              <Link to={item.slug} className={classes.card} key={index}>
                <GatsbyImage
                  image={item.heroImage.gatsbyImageData}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  alt={item.heroImage.title}
                  className={classes.img}
                />
                <Box
                  position={"absolute"}
                  bottom={0}
                  left={0}
                  right={0}
                  padding={{ sm: 2, lg: 3 }}
                  fontWeight={700}
                  /*     style={{
                    opacity: 0.3,
                    backgroundImage: `url(${item.flagLink})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }} */
                >
                  <Typography
                    variant="h4"
                    align="center"
                    /*  style={{
                      backgroundImage: `url(${item.flagLink})`,
                      backgroundClip: "text",
                      webkitBackgroundClip: "text",
                      color: "transparent",
                      backgroundSize: "contain",
                    }} */
                    className={classes.typo}
                  >
                    {item.name}
                  </Typography>
                </Box>
              </Link>
            )
          })}
        </Slider>
      </Grid>
    </Box>
  )
}

export default Countries
