import React, { useContext } from "react"
import { navigate } from "gatsby"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import FavoriteIcon from "@material-ui/icons/Favorite"
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "@material-ui/icons/Home"
import { fade } from "@material-ui/core"
import PersonIcon from "@material-ui/icons/Person"
import Avatar from "@material-ui/core/Avatar"

//context
import { MenuContext } from "../../providers/menu/menu.providers"
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

      background: fade(theme.palette.background.default, 0.7),
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
  const { currentUser } = useContext(UserContext)

  /* const { setOpenFullScreenMap } = useContext(MapContext)
  const { logout, currentUser } = useContext(UserContext) */
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
        icon={
          currentUser ? (
            <Avatar src={currentUser?.photoURL} />
          ) : (
            <PersonIcon fontSize="large" />
          )
        }
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
