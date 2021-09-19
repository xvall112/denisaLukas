import React, { useContext } from "react"
import clsx from "clsx"

//materialUI
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery, Hidden } from "@material-ui/core"
import LinearProgress from "@material-ui/core/LinearProgress"

//components
import Topbar from "./components/TopBar/TopBar"
import SideBar from "../SideBar/SideBar"
import Section from "../../components/organisms/Section/Section"
import Footer from "./components/Footer/Footer"
import LabelBottomNavigation from "../components/bottomNavigation"
//context
import { UserContext } from "../../providers/user/user.provider"

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
      {loading && <LinearProgress />}
      <Section className={classes.sectionNoPadding}>
        <Topbar />
      </Section>
      <SideBar variant="temporary" />
      <main>
        {/*  <Divider /> */}
        {children}
      </main>
      <Hidden mdUp>
        <LabelBottomNavigation />
      </Hidden>
      <Footer />
    </div>
  )
}

export default Main
