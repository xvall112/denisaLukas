import React from "react"
import clsx from "clsx"

//materialUI
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery, Hidden } from "@material-ui/core"

//components
import SideBar from "../SideBar/SideBar"
import Section from "../../components/organisms/Section/Section"
import LabelBottomNavigationMain from "../Main/components/bottomNavigationMain"
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
        {children}
      </main>
      <Hidden mdUp>
        <LabelBottomNavigationMain />
      </Hidden>
    </div>
  )
}

export default MenuLayout
