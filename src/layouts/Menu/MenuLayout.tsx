import React from "react"
import clsx from "clsx"

//materialUI
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery, Hidden, Box } from "@material-ui/core"

//components
import SideBar from "../SideBar/SideBar"
import BottomNavigation from "../components/bottomNavigation"

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

const MenuLayout = ({ children }: Props): JSX.Element => {
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
      <SideBar variant="temporary" />
      <main>
        {/*  <Divider /> */}
        <Box mb={10}>{children}</Box>
      </main>
      <Hidden mdUp>
        <BottomNavigation />
      </Hidden>
    </div>
  )
}

export default MenuLayout
