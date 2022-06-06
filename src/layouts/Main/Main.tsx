import React, { useContext } from "react"
import clsx from "clsx"

//materialUI
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery, Hidden, Box, Container } from "@material-ui/core"
import LinearProgress from "@material-ui/core/LinearProgress"

//components
import Topbar from "./components/TopBar/TopBar"
import SideBar from "../SideBar/SideBar"
import Section from "../../components/organisms/Section/Section"
import Footer from "./components/Footer/Footer"
import BottomNavigation from "../components/bottomNavigation"
//context
import { UserContext } from "../../providers/user/user.provider"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100vw",
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
  const { loading } = useContext(UserContext)
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
      <Container maxWidth="xl">
        <Topbar />
      </Container>
      <SideBar variant="temporary" />
      <main>
        {/*  <Divider /> */}
        <Box mb={8} overflow="hidden">
          {children}
        </Box>
      </main>
      <Hidden mdUp>
        <BottomNavigation />
      </Hidden>
      {/* <Footer /> */}
    </div>
  )
}

export default Main
