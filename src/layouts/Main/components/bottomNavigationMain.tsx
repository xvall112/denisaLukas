import React, { useContext } from "react"
import { navigate } from "gatsby"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined"
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined"
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"
import MenuIcon from "@material-ui/icons/Menu"

//context
import { MenuContext } from "../../../providers/menu/menu.providers"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100vw",
      zIndex: 1000,
      position: "fixed",
      bottom: "0px",
      paddingBottom: theme.spacing(3),
      height: "auto",
    },
  })
)

export default function LabelBottomNavigationMain() {
  const classes = useStyles()
  const {
    valueBottomNavigation,
    handleBottomNavigation,
    handleSidebarOpen,
  } = useContext(MenuContext)

  return (
    <BottomNavigation
      value={valueBottomNavigation}
      onChange={handleBottomNavigation}
      className={classes.root}
      showLabels={true}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeOutlinedIcon fontSize="large" />}
        onClick={() => navigate("/")}
      />
      <BottomNavigationAction
        label="Hledat"
        value="place"
        icon={<SearchOutlinedIcon fontSize="large" />}
        onClick={() => navigate("/search")}
      />
      <BottomNavigationAction
        label="Oblíbené"
        value="favorites"
        icon={<FavoriteBorderOutlinedIcon fontSize="large" />}
        onClick={() => navigate("/account") /* window.location.reload() */}
      />
      <BottomNavigationAction
        label="Menu"
        value="account"
        icon={<MenuIcon fontSize="large" />}
        onClick={() => handleSidebarOpen()}
      />
    </BottomNavigation>
  )
}
