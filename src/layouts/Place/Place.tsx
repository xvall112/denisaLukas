import React from "react"
import clsx from "clsx"

//materialUI
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Hidden, Box } from "@material-ui/core"

//components
import TopBar2 from "./components/TopBar2"
import BottomNavigation from "../components/bottomNavigation"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    maxWidth: "100vw",
  },
}))

interface Props {
  children: React.ReactNode
}

const Place = ({ children }: Props): JSX.Element => {
  const classes = useStyles()

  const theme = useTheme()
  /*   const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  }) */

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <TopBar2 />

      <main>{children}</main>
      <Hidden mdUp>
        <Box mt={10}>
          <BottomNavigation map={true} />
        </Box>
      </Hidden>
    </div>
  )
}

export default Place
