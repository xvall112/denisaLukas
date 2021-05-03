import * as React from "react"
//materialUI
import { makeStyles, Box } from "@material-ui/core"
//components
import { Section, SectionAlternate } from "../../components/organisms"
import Hero from "./components/hero/hero"
import Countries from "./components/countries/countries"
import Places from "./components/places/places"
import TypeOfSport from "./components/typeOfSport/typeOfSport"

const useStyles = makeStyles(() => ({
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  sectionAlternate: {
    padding: 0,
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
      <Section fullWidth className={classes.sectionNoPaddingTop}>
        <TypeOfSport />
      </Section>
    </div>
  )
}

export default IndexPage
