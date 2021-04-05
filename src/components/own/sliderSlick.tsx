import React from "react"
import Slider from "react-slick"
import { GatsbyImage } from "gatsby-plugin-image"

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

interface props {
  img?: any
}

const SliderSlick = ({ img }: props): JSX.Element => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  }

  return (
    <div>
      <Slider {...settings}>
        {img.map((item, index) => {
          return (
            <div key={index}>
              <GatsbyImage
                image={item.gatsbyImageData}
                alt={item.title}
                style={{ height: "50vh", width: "100vw" }}
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
