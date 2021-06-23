import React, { useContext } from "react"
//MaterialUI
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Fab,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import MapIcon from "@material-ui/icons/Map"
import CloseIcon from "@material-ui/icons/Close"

//components
import LeafletMap from "./LeafletMap"
//context
import { MapContext } from "../../providers/map/map.providers"
import { UserContext } from "../../providers/user/user.provider"
const useStyles = makeStyles(theme => ({
  fabButton: {
    position: "fixed",
    zIndex: 1,
    bottom: 30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}))
interface Props {
  markers: any
}
const FullScreenMap = ({ markers }: Props): JSX.Element => {
  const {
    setOpenFullScreenMap,
    setCloseFullScreenMap,
    isFullScreenMapOpen,
  } = useContext(MapContext)
  const classes = useStyles()
  return (
    <div>
      <Fab
        color="primary"
        variant="extended"
        className={classes.fabButton}
        onClick={setOpenFullScreenMap}
      >
        <MapIcon />
        Mapa
      </Fab>
      <Dialog
        fullScreen
        open={isFullScreenMapOpen}
        onClose={setCloseFullScreenMap}
      >
        <AppBar>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={setCloseFullScreenMap}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6">Mapa</Typography>
          </Toolbar>
        </AppBar>
        <LeafletMap zoom={2} center={[0, 0]} marker={markers} />
      </Dialog>
    </div>
  )
}

export default FullScreenMap
