import * as React from "react"

import { makeStyles, Box } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
}))

//components
import Section from "../../components/organisms/Section/Section"
import Hero from "./components/hero/hero"
import Countries from "./components/countries/countries"
import Places from "./components/places/places"

const IndexPage = () => {
  const classes = useStyles()
  return (
    <div>
      <Hero />

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
