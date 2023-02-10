import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import { Link } from "gatsby"

//components

//materiaUI
import { Grid, Box, Divider } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"

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
      style={{ ...style, display: "block", left: 10, zIndex: 10 }}
      onClick={onClick}
    />
  )
}

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
  data?: [
    {
      name: String
      titleImage: any
      kindPlace: String
      slug: String
    }
  ]
}

const InSeraundings = ({ data }: Props): JSX.Element => {
  const theme = useTheme()
  const classes = useStyles()
  const sm = theme.breakpoints.values.sm
  const md = theme.breakpoints.values.md
  const lg = theme.breakpoints.values.lg
  const xl = theme.breakpoints.values.xl
  const settings = {
    speed: 100,
    centerMode: false,
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: sm,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: xl,
        settings: {
          slidesToShow: 4.5,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  }
  return (
    <Box width="100%" mt={2}>
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
                        style={{ height: "150px", width: "100%" }}
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
    </Box>
  )
}

export default InSeraundings
