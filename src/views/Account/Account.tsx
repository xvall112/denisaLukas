import React from "react"
import { navigate } from "gatsby"
import clsx from "clsx"
import { parse } from "query-string"
import { makeStyles } from "@material-ui/core/styles"
import { Box, List, ListItem, Grid, Typography } from "@material-ui/core"
import { SectionAlternate, CardBase } from "components/organisms"
import { Hero } from "./components"
import TabPane from "./components/Tab/Tab"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%",
  },
  section: {
    "& .section-alternate__content": {
      paddingTop: 0,
      marginTop: theme.spacing(-5),
      position: "relative",
      zIndex: 1,
    },
    "& .card-base__content": {
      padding: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(0),
      },
    },
  },
  menu: {
    height: "auto",
  },
  list: {
    display: "inline-flex",
    overflow: "auto",
    flexWrap: "nowrap",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "column",
      marginRight: theme.spacing(-3),
      marginLeft: theme.spacing(-3),
    },
  },
  listItem: {
    marginRight: theme.spacing(2),
    flex: 0,
    [theme.breakpoints.up("md")]: {
      paddingRight: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      borderLeft: "2px solid transparent",
    },
  },
  listItemActive: {
    [theme.breakpoints.up("md")]: {
      borderLeft: `2px solid ${theme.palette.primary.dark}`,
    },
    "& .menu__item": {
      color: theme.palette.text.primary,
    },
  },
}))

const Account = (): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Hero />
      <Box className={classes.section}>
        <TabPane />
      </Box>
    </div>
  )
}

export default Account
