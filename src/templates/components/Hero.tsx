import React from "react"
import clsx from "clsx"
import { GatsbyImage } from "gatsby-plugin-image"
import { makeStyles } from "@material-ui/core/styles"
import { Image } from "components/atoms"
import { SectionHeader } from "components/molecules"
import { Section } from "components/organisms"
import { any } from "prop-types"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "40vh",
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
      height: "80vh",
    },
  },
  image: {
    minHeight: "100%",

    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  textWhite: {
    color: "white",
  },
  title: {
    fontWeight: "bold",
  },
  section: {
    position: "absolute",
    bottom: "0%",

    paddingTop: 0,
    paddingBottom: 0,
  },
}))

interface Props {
  title: String
  className?: any
  heroImage: any
}
const Hero = ({ heroImage, title, className, ...rest }: Props): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <GatsbyImage
        image={heroImage.gatsbyImageData}
        alt={heroImage.title}
        formats={["auto", "webp", "avif"]}
        style={{ height: "100%", width: "100%" }}
      />
      <Section className={classes.section}>
        <SectionHeader
          title={title}
          align="left"
          data-aos="fade-up"
          disableGutter
          titleProps={{
            className: clsx(classes.title, classes.textWhite),
            variant: "h1",
          }}
          subtitleProps={{
            className: classes.textWhite,
          }}
        />
      </Section>
    </div>
  )
}

export default Hero
