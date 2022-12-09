import React, { useContext } from "react"
import { navigate } from "gatsby"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined"
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined"
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"
import MapIcon from "@material-ui/icons/Map"
import MenuIcon from "@material-ui/icons/Menu"
import Fab from "@material-ui/core/Fab"

//context
import { MenuContext } from "../../providers/menu/menu.providers"
import { MapContext } from "../../providers/map/map.providers"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100vw",
      zIndex: 1000,
      position: "fixed",
      bottom: "0px",
      paddingBottom: "10px",
      height: "auto",
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
  const {
    valueBottomNavigation,
    handleBottomNavigation,
    handleSidebarOpen,
  } = useContext(MenuContext)
  const { setOpenFullScreenMap } = useContext(MapContext)

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
        icon={<HomeOutlinedIcon />}
        onClick={() => navigate("/")}
      />
      <BottomNavigationAction
        label="Hledat"
        value="search"
        icon={<SearchOutlinedIcon />}
        onClick={() => navigate("/search")}
      />
      {map && (
        <Fab
          color="primary"
          aria-label="add"
          className={classes.fabButton}
          onClick={setOpenFullScreenMap}
        >
          <MapIcon />
        </Fab>
      )}

      <BottomNavigationAction
        label="Oblíbené"
        value="favorites"
        icon={<FavoriteBorderOutlinedIcon />}
        onClick={
          () => navigate("/app/favourite") /* window.location.reload() */
        }
      />
      <BottomNavigationAction
        label="Menu"
        value="account"
        icon={<MenuIcon />}
        onClick={() => handleSidebarOpen()}
      />
    </BottomNavigation>
  )
}
