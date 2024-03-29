import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Slider from "react-slick"

//components
import Title from "../../../../components/own/titleSection"
//material UI
import { Grid, Box } from "@material-ui/core"
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles"

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
      "& .slick-dots": {
        "& button:before": { color: "white !important", fontSize: "10px" },
      },
    },
    link: {
      textDecoration: "none",
      "& :hover": {
        textDecoration: "underline",
        color: theme.palette.text.primary,
      },
    },
    name: {
      color: theme.palette.text.primary,
    },
    flag: { borderRadius: "5px" },
  })
)

const Countries = () => {
  const data = useStaticQuery(query)
  const classes = useStyles()
  const settings = {
    infinite: false,

    slidesToShow: 4,
    swipeToSlide: true,
    speed: 100,
    rows: 1,
    slidesPerRow: 1,
    dots: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1.5,

          dots: false,
        },
      },
    ],
  }
  return (
    <div className={classes.root}>
      <Title title={"Státy"} link={"countries"} />
      <Grid item xs={12}>
        <Slider {...settings}>
          {data.allContentfulCountry.nodes.map((country, index) => {
            return (
              <Box pr={2} key={index}>
                <Link to={`/${country.slug}`} className={classes.link}>
                  <Grid container direction="column" justify="flex-start">
                    <Grid item xs={12}>
                      <img
                        src={country.flagLink}
                        width="100%"
                        alt={country.name}
                        className={classes.flag}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Box className={classes.name} fontSize={{ xs: 16 }}>
                        {country.name}
                      </Box>
                    </Grid>
                  </Grid>
                </Link>
              </Box>
            )
          })}
        </Slider>
      </Grid>
    </div>
  )
}

export default Countries
