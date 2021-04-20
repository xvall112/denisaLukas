import * as React from "react"
//materialUI
import { makeStyles, Box } from "@material-ui/core"
//components
import Section from "../../components/organisms/Section/Section"
import Hero from "./components/hero/hero"
import Countries from "./components/countries/countries"
import Places from "./components/places/places"

const useStyles = makeStyles(() => ({
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  return (
    <div>
      <Section fullWidth className={classes.sectionNoPaddingTop}>
        <Hero />
      </Section>
      <Section fullWidth className={classes.sectionNoPaddingTop}>
        <Countries />
      </Section>
      <Section fullWidth className={classes.sectionNoPaddingTop}>
        <Places />
      </Section>
    </div>
  )
}

export default IndexPage
