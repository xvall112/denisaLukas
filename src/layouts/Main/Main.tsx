import React, { useState, useContext } from "react"
import clsx from "clsx"

//materialUI
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery, Divider } from "@material-ui/core"

//components
import Topbar from "./components/TopBar/TopBar"
import Footer from "./components/Footer/Footer"
import SideBar from "./components/SideBar/SideBar"
import Section from "../../components/organisms/Section/Section"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    maxWidth: "100vw",
    color: theme.palette.text.primary,
  },
  sectionNoPadding: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}))

interface Props {
  children: React.ReactNode
}

const Main = ({ children }: Props): JSX.Element => {
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Section fullWidth className={classes.sectionNoPadding}>
        <Topbar />
      </Section>
      <SideBar variant="temporary" />
      <main>
        {/*  <Divider /> */}
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Main
