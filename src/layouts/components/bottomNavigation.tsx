import React, { useContext } from "react"
import { navigate, Link } from "gatsby"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import FavoriteIcon from "@material-ui/icons/Favorite"
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "@material-ui/icons/Home"
import Avatar from "@material-ui/core/Avatar"
import MapIcon from "@material-ui/icons/Map"
import PersonIcon from "@material-ui/icons/Person"
import Fab from "@material-ui/core/Fab"

//context
import { MenuContext } from "../../providers/menu/menu.providers"
import { MapContext } from "../../providers/map/map.providers"
import { UserContext } from "../../providers/user/user.provider"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100vw",
      zIndex: 1000,
      position: "fixed",
      bottom: "0px",
      paddingBottom: "15px",
      height: "auto",
      borderTop: "1px solid grey",

      background: "rgba( 255, 255, 255, 0.7)",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 20px )",
      webkitBackdropFilter: " blur( 20px )",
      borderRadius: "10px",
    },
    fabButton: {
      position: "absolute",
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: "0 auto",
    },
  })
)

interface Props {
  map?: boolean
}
export default function LabelBottomNavigation({ map }: Props): JSX.Element {
  const classes = useStyles()
  const { valueBottomNavigation, handleBottomNavigation } = useContext(
    MenuContext
  )
  const { setOpenFullScreenMap } = useContext(MapContext)
  const { logout, currentUser } = useContext(UserContext)
  return (
    <BottomNavigation
      value={valueBottomNavigation}
      onChange={handleBottomNavigation}
      className={classes.root}
      showLabels={true}
    >
      <BottomNavigationAction
        /* label="Home" */
        value="home"
        icon={<HomeIcon fontSize="large" />}
        onClick={() => navigate("/")}
      />
      <BottomNavigationAction
        /*  label="Hledat" */
        value="search"
        icon={<SearchIcon fontSize="large" />}
        onClick={() => navigate("/search")}
      />
      {/*    {map && (
        <Fab
          color="primary"
          aria-label="add"
          className={classes.fabButton}
          onClick={setOpenFullScreenMap}
        >
          <MapIcon />
        </Fab>
      )} */}
      <BottomNavigationAction
        /*  label="Hledat" */
        value="favourite"
        icon={<FavoriteIcon fontSize="large" />}
        onClick={() => navigate("/app/favourite")}
      />
      <BottomNavigationAction
        value="profil"
        icon={<PersonIcon fontSize="large" />}
        onClick={() => navigate("/app/account") /* window.location.reload() */}
      />

      {/*  <BottomNavigationAction
        label="Menu"
        value="account"
        icon={<MenuIcon />}
        onClick={() => handleSidebarOpen()}
      /> */}
    </BottomNavigation>
  )
}
