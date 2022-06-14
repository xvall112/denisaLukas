import React from "react"
import Slider from "react-slick"
import { GatsbyImage } from "gatsby-plugin-image"

//materialUI
import { useTheme, makeStyles } from "@material-ui/core/styles"
import { useMediaQuery } from "@material-ui/core"

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
      style={{ ...style, display: "block", left: 20, zIndex: 10 }}
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
  },
  img: {
    borderRadius: theme.shape.borderRadius,
    WebkitBorderRadius: theme.shape.borderRadius,
    overflow: "hidden",
    "& img": {
      borderRadius: theme.shape.borderRadius,
      WebkitBorderRadius: theme.shape.borderRadius,
    },
  },
}))
interface props {
  img?: any
  heightImg?: string
  widthImg?: string
  speed?: number
}

const SliderSlick = ({
  img,
  heightImg,
  widthImg,
  speed,
}: props): JSX.Element => {
  const classes = useStyles()
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })
  const settings = {
    dots: true,
    speed: 300 || speed,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: isMd ? true : false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  }

  return (
    <div className={classes.root}>
      <Slider {...settings}>
        {/*  slider pro obrazky */}
        {img &&
          img.map((item, index) => {
            return (
              <div key={index} className={classes.img}>
                <GatsbyImage
                  image={item.gatsbyImageData}
                  alt={item.title}
                  style={{
                    height: heightImg,
                    width: widthImg,
                  }}
                  formats={["auto", "webp", "avif"]}
                />
              </div>
            )
          })}
      </Slider>
    </div>
  )
}

export default SliderSlick
