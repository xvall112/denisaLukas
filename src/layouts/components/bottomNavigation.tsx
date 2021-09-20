import React, { useContext } from "react"
import { navigate } from "gatsby"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import FavoriteIcon from "@material-ui/icons/Favorite"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import HomeIcon from "@material-ui/icons/Home"
import PersonIcon from "@material-ui/icons/Person"
import TrendingUpIcon from "@material-ui/icons/TrendingUp"
import MenuIcon from "@material-ui/icons/Menu"

//context
import { MenuContext } from "../../providers/menu/menu.providers"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "100vw",
      zIndex: 1000,
      position: "fixed",
      bottom: "0px",
      paddingBottom: theme.spacing(3),
      height: "auto",
    },
  })
)

export default function LabelBottomNavigation() {
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
        icon={<HomeIcon fontSize="large" />}
        onClick={() => navigate("/")}
      />
      <BottomNavigationAction
        label="Místa"
        value="place"
        icon={<LocationOnIcon fontSize="large" />}
        onClick={() => navigate("/places")}
      />
      <BottomNavigationAction
        label="Ferrata"
        value="ferrata"
        icon={<TrendingUpIcon fontSize="large" />}
        onClick={() => navigate("/viaFerrata")}
      />
      <BottomNavigationAction
        label="Oblíbené"
        value="favorites"
        icon={<FavoriteIcon fontSize="large" />}
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
