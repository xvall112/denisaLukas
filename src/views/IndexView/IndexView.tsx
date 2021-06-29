import React, { useEffect, useContext } from "react"
//materialUI
import { makeStyles, Box } from "@material-ui/core"
//components
import { Section } from "../../components/organisms"
import Hero from "./components/hero/hero"
import Countries from "./components/countries/countries"
import Places from "./components/places/places"
import TypeOfSport from "./components/typeOfSport/typeOfSport"
import ViaFerrata from "./components/viaFerrata/viaFerrata"
import FavouriteItems from "./components/favouriteItems/favouriteItems"

//context
import { UserContext } from "../../providers/user/user.provider"

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
  const { currentUser } = useContext(UserContext)
  return (
    <>
      <Section fullWidth className={classes.sectionNoPaddingTop}>
        <>
          <Hero />
          <Box mt={2}>
            <TypeOfSport />
          </Box>
        </>
      </Section>

      {currentUser && (
        <Section fullWidth className={classes.sectionNoPaddingTop}>
          <FavouriteItems />
        </Section>
      )}
      <Section fullWidth className={classes.sectionNoPaddingTop}>
        <Countries />
      </Section>
      <Section fullWidth className={classes.sectionNoPaddingTop}>
        <Places />
      </Section>
      <Section fullWidth className={classes.sectionNoPaddingTop}>
        <ViaFerrata />
      </Section>
    </>
  )
}

export default IndexPage
