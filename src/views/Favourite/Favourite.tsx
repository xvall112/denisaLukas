import React, { useContext, useEffect } from "react"
import SEO from "../../components/own/seo"
import LayoutPlaces from "../../layouts/Place/Place"
import WithLayout from "../../../WithLayout"
import { MenuContext } from "../../providers/menu/menu.providers"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import { Hero } from "./components"
import TabPane from "./components/Tab/Tab"

const useStyles = makeStyles(theme => ({
  root: { marginTop: theme.spacing(7) },

  section: {
    "& .section-alternate__content": {
      paddingTop: 0,
      marginTop: theme.spacing(-5),
      position: "relative",
      zIndex: 1,
    },
    "& .card-base__content": {
      padding: theme.spacing(0),
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(0),
      },
    },
  },
}))

const Account = (): JSX.Element => {
  const classes = useStyles()
  const { setTitle } = useContext(MenuContext)
  useEffect(() => {
    setTitle("oblíbené")
    return () => {
      setTitle("")
    }
  }, [])
  return (
    <div className={classes.root}>
      {/*  <Hero /> */}
      <Box className={classes.section}>
        <TabPane />
      </Box>
    </div>
  )
}

const AccountPage = (): JSX.Element => {
  return (
    <>
      <SEO title="oblíbené" />
      <WithLayout component={Account} layout={LayoutPlaces} />
    </>
  )
}

export default AccountPage
