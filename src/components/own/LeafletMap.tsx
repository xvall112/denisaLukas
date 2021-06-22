import React, { useContext, useEffect, useRef, useState } from "react"
import { MapContext } from "../../providers/map/map.providers"
import mapboxgl from "mapbox-gl"
import clsx from "clsx"

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet"

//materialUI
import { makeStyles } from "@material-ui/core/styles"

//components
import PopupCard from "./PopupCard"

mapboxgl.accessToken = process.env.MAP_BOX_TOKEN

const useStyles = makeStyles(theme => ({
  root: {},
  mapContainer: { height: "100vh", width: "100%" },
  popup: {
    "& .leaflet-popup-content-wrapper": {
      padding: "0px",
      "& .leaflet-popup-content": {
        margin: "0px",
        "& p": {
          margin: "0px",
        },
      },
    },
  },
}))
/* const LeafletComponent = () => {
  const { filterCountryLocation, filterCountryZoom } = useContext(MapContext)
  const map = useMap()
  map.flyTo(
    [filterCountryLocation[0], filterCountryLocation[1]],
    filterCountryZoom
  )
  return <></>
} */
interface LeafletMap {
  zoom: number
  center: any
  className?: any
  rest?: any
  marker: any
  slug: string
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
  if (
    typeof window !== "undefined" &&
    !!window.document &&
    !!window.document.createElement
  ) {
    return (
      <MapContainer
        zoomControl={false}
        zoom={2}
        center={[0, 0]}
        className={clsx("map", classes.root, className)}
        style={{ height: "100%", width: "100%" }}
        {...rest}
      >
        <TileLayer
          className="map__tile-layer"
          detectRetina={true}
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {endFerrataLocation && endFerrataLocation.length && (
          <Marker position={endFerrataLocation}>
            <Popup>Vrchol</Popup>
          </Marker>
        )}
        {parking && parking.length && (
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
      </MapContainer>
    )
  }
  return null
}

export default LeafletMap
