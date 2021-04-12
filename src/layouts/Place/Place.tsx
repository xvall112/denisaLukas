import React, { useState } from "react"
import clsx from "clsx"

//materialUI
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery, Divider } from "@material-ui/core"

//components
import TopBar from "./components/TopBar"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    maxWidth: "100vw",
  },
}))

interface Props {
  children: React.ReactNode
  themeToggler: Function
  themeMode: string
}

const Place = ({ children, themeToggler, themeMode }: Props): JSX.Element => {
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
      <TopBar themeMode={themeMode} themeToggler={themeToggler} />
      <main>{children}</main>
    </div>
  )
}

export default Place
