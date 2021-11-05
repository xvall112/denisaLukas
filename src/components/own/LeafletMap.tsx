import React, { useContext, useEffect, useRef } from "react"
import { MenuContext } from "../../providers/menu/menu.providers"

import clsx from "clsx"

import { Map, ZoomControl, TileLayer, Marker, Popup } from "react-leaflet"
import GPX from "leaflet-plugins/layer/vector/GPX"
//materialUI
import { makeStyles } from "@material-ui/core/styles"

//components
import PopupCard from "./PopupCard"

const useStyles = makeStyles(theme => ({
  root: {},
  popup: {
    "& .leaflet-popup-content-wrapper": {
      background: "black",
      height: "215px",
      minWidth: "230px",
      "& .leaflet-popup-content": {
        background: "black",
        "& p": {
          margin: "0px",
        },
      },
    },
  },
}))

interface LeafletMap {
  zoom: number
  center: any
  className?: any
  rest?: any
  marker: any
  slug?: string
  parking?: [number, number]
  endFerrataLocation?: [number, number]
}
const LeafletMap = ({
  marker,
  zoom,
  center,
  slug,
  className,
  parking,
  endFerrataLocation,
  ...rest
}: LeafletMap): JSX.Element => {
  const classes = useStyles()
  const { filterCountryLocation, filterCountryZoom } = useContext(MenuContext)
  const mapRef = useRef()

  useEffect(() => {
    const { current } = mapRef
    const { leafletElement: map } = current

    return () => {}
  }, [])

  if (typeof window !== "undefined") {
    return (
      <Map
        ref={mapRef}
        zoomControl={false}
        zoom={zoom}
        center={center}
        className={clsx("map", classes.root, className)}
        style={{ height: "100%", width: "100%" }}
        {...rest}
      >
        <ZoomControl position="bottomright" />
        <TileLayer
          className="map__tile-layer"
          detectRetina={true}
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {endFerrataLocation && (
          <Marker position={endFerrataLocation}>
            <Popup>Vrchol</Popup>
          </Marker>
        )}
        {parking && (
          <Marker position={parking}>
            <Popup>Parkovište</Popup>
          </Marker>
        )}
        {marker &&
          marker.length &&
          marker.map((item, i) => (
            <Marker position={[item.location.lat, item.location.lon]} key={i}>
              <Popup className={classes.popup}>
                <PopupCard item={item} slug={slug} />
              </Popup>
            </Marker>
          ))}
      </Map>
    )
  }
  return null
}

export default LeafletMap
