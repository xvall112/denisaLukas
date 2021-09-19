import React from "react"
import { navigate } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"

import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"

import FavoriteIcon from "@material-ui/icons/Favorite"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import HomeIcon from "@material-ui/icons/Home"
import PersonIcon from "@material-ui/icons/Person"

const useStyles = makeStyles({
  root: {
    width: "100vw",
    zIndex: 1000,
    position: "fixed",
    bottom: "0px",
  },
})

export default function LabelBottomNavigation() {
  const classes = useStyles()
  const [value, setValue] = React.useState("recents")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon />}
        onClick={() => navigate("/")}
      />
      <BottomNavigationAction
        label="Místa"
        value="place"
        icon={<LocationOnIcon />}
        onClick={() => navigate("/places")}
      />
      <BottomNavigationAction
        label="Ferrata"
        value="ferrata"
        icon={<LocationOnIcon />}
        onClick={() => navigate("/viaFerrata")}
      />
      <BottomNavigationAction
        label="Oblíbené"
        value="favorites"
        icon={<FavoriteIcon />}
        onClick={() => navigate("/account")}
      />
      <BottomNavigationAction
        label="Účet"
        value="account"
        icon={<PersonIcon />}
        onClick={() => navigate("/account")}
      />
    </BottomNavigation>
  )
}
