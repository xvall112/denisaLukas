import React, { useState } from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery, Divider } from "@material-ui/core"
import Topbar from "./components/TopBar/TopBar"
import Footer from "./components/Footer/Footer"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
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

  const open = isMd ? false : openSidebar

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      {/* <Topbar onSidebarOpen={handleSidebarOpen} themeMode={themeMode} themeToggler={themeToggler} /> */}
      <Topbar themeMode={themeMode} themeToggler={themeToggler} />
      {/*  <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
      
      /> */}
      <main>
        {/*  <Divider /> */}
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Main
