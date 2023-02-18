import React from "react"
import clsx from "clsx"

//materialUI
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Hidden, AppBar, Container } from "@material-ui/core"

//components
import Topbar from "./components/TopBar/TopBar"

import BottomNavigation from "../components/bottomNavigation"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
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

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      {/* {loading && <LinearProgress />} */}
      <AppBar position="fixed" color="inherit">
        <Container maxWidth="xl">
          <Topbar />
        </Container>
      </AppBar>

      <main>{children}</main>
      <Hidden lgUp>
        <BottomNavigation map={true} />
      </Hidden>
      {/* <Footer /> */}
    </div>
  )
}

export default Main
