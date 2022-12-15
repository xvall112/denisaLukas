import React, { useContext } from "react"
//MaterialUI
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Fab,
  Hidden,
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
    zIndex: 1000,
    bottom: 90,
    [theme.breakpoints.up("sm")]: {
      bottom: 40,
    },
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}))
interface Props {
  markers: any
  zoom?: number
  center?: any
  title?: string
}
const FullScreenMap = ({
  markers,
  zoom,
  center,
  title,
}: Props): JSX.Element => {
  const {
    setOpenFullScreenMap,
    setCloseFullScreenMap,
    isFullScreenMapOpen,
  } = useContext(MapContext)
  const classes = useStyles()
  return (
    <div>
      {/*   <Hidden mdDown> */}
      <Fab
        color="primary"
        variant="extended"
        className={classes.fabButton}
        onClick={setOpenFullScreenMap}
      >
        <MapIcon />
        Mapa
      </Fab>
      {/*  </Hidden> */}
      <Dialog
        fullScreen
        open={isFullScreenMapOpen}
        onClose={setCloseFullScreenMap}
      >
        <AppBar color="transparent">
          <Toolbar>
            <IconButton
              edge="start"
              onClick={setCloseFullScreenMap}
              aria-label="close"
              style={{ color: "black" }}
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" style={{ color: "black" }}>
              {title || "Mapa"}
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
