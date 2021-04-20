import React, { useState } from "react"
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
  themeToggler: Function
  themeMode: string
}

const Main = ({ children, themeToggler, themeMode }: Props): JSX.Element => {
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  const [openSidebar, setOpenSidebar] = useState<boolean>(false)

  const handleSidebarOpen = (): void => {
    setOpenSidebar(true)
  }

  const handleSidebarClose = (): void => {
    setOpenSidebar(false)
  }

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Section fullWidth className={classes.sectionNoPadding}>
        <Topbar
          themeMode={themeMode}
          themeToggler={themeToggler}
          onSidebarOpen={handleSidebarOpen}
        />
      </Section>
      <SideBar
        onClose={handleSidebarClose}
        open={openSidebar}
        variant="temporary"
      />
      <main>
        {/*  <Divider /> */}
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Main
