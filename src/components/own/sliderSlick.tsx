import React from "react"
import Slider from "react-slick"
import { GatsbyImage } from "gatsby-plugin-image"

//materialUI
import { useTheme, makeStyles } from "@material-ui/core/styles"
import { useMediaQuery } from "@material-ui/core"
import { ClassOutlined } from "@material-ui/icons"

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
      color: "white",
    },
  },
}))
interface props {
  img?: any
  heightImg?: string
  widthImg?: string
}

const SliderSlick = ({ img, heightImg, widthImg }: props): JSX.Element => {
  const classes = useStyles()
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })
  const settings = {
    dots: true,
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
              <div key={index}>
                <GatsbyImage
                  image={item.gatsbyImageData}
                  alt={item.title}
                  style={{ height: heightImg, width: widthImg }}
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
