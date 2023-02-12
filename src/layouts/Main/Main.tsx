import React, { useContext } from "react"
import clsx from "clsx"

//materialUI
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery, Hidden, AppBar, Container } from "@material-ui/core"

//components
import Topbar from "./components/TopBar/TopBar"

import BottomNavigation from "../components/bottomNavigation"
//context
import { UserContext } from "../../providers/user/user.provider"

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
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      {/* {loading && <LinearProgress />} */}
      <AppBar position="sticky" color="inherit">
        <Container maxWidth="xl">
          <Topbar />
        </Container>
      </AppBar>

      <main>
        {/*  <Divider /> */}

        {children}
      </main>
      <Hidden lgUp>
        <BottomNavigation map={true} />
      </Hidden>
      {/* <Footer /> */}
    </div>
  )
}

export default Main
