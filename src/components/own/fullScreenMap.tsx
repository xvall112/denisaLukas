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
const useStyles = makeStyles(theme => ({
  fabButton: {
    width: "100px",
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
  zoom?: number
  center?: any
}
const FullScreenMap = ({ markers, zoom, center }: Props): JSX.Element => {
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
        <AppBar color="transparent">
          <Toolbar>
            <IconButton
              edge="start"
              color="secondary"
              onClick={setCloseFullScreenMap}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography color="secondary" variant="h6">
              Mapa
            </Typography>
          </Toolbar>
        </AppBar>
        <LeafletMap
          zoom={zoom ? zoom : 2}
          center={center ? center : [0, 0]}
          marker={markers}
        />
      </Dialog>
    </div>
  )
}

export default FullScreenMap
