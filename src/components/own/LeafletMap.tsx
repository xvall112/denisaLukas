import React, { useContext, useEffect, useRef } from "react"
import L from "leaflet"
import clsx from "clsx"

import { Map, ZoomControl, TileLayer, Marker, Popup } from "react-leaflet"

//context
import { MenuContext } from "../../providers/menu/menu.providers"
import { MapContext } from "providers/map/map.providers"

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
  geoJSON?: any
}
const LeafletMap = ({
  marker,
  zoom,
  center,
  slug,
  className,
  parking,
  endFerrataLocation,
  geoJSON,
  ...rest
}: LeafletMap): JSX.Element => {
  const classes = useStyles()
  const { highlightedCard } = useContext(MapContext)
  const mapRef = useRef()

  useEffect(() => {
    const { current = {} } = mapRef
    const { leafletElement: map } = current
    /*  map.locate({
      setView: true,
    }) */

    /* map.on("locationfound", handleOnLocationFound) */

    const GeoJSON = L.geoJSON(geoJSON, {
      style: function (feature) {
        return {
          color: feature.properties.stroke,
        }
      },
      onEachFeature: (feature = {}, layer) => {
        const { properties = {} } = feature
        const { description } = properties
        if (!description) return
        layer.bindTooltip(description)
        layer.bindPopup(description)
      },
    })
    GeoJSON.addTo(map)
  }, [])

  const handleOnLocationFound = event => {
    const { current = {} } = mapRef
    const { leafletElement: map } = current

    const latlng = event.latlng
    const radius = event.accuracy
    const circle = L.circle(latlng, radius)
    circle.addTo(map)
  }

  function markerIcon() {
    return L.icon({
      iconUrl: require("../../images/manifestIcon.png"),
      iconRetinaUrl: require("../../images/manifestIcon.png"),
      iconSize: [25, 40],
      iconAnchor: [10, 40],
      tooltipAnchor: [15, -20],
      shadowUrl: require("images/marker-shadow.png"),
    })
  }
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
        {/* {geoJSON && (
          <GeoJSON
            data={geoJSON}
            style={function (feature) {
              return {
                color: feature.properties.stroke,
              }
            }}
          ></GeoJSON>
        )} */}

        {endFerrataLocation && (
          <Marker position={endFerrataLocation} icon={markerIcon()}>
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
            <Marker
              position={[item.location.lat, item.location.lon]}
              key={i}
              opacity={item.id === highlightedCard ? 1 : 0.7}
              zIndexOffset={item.id === highlightedCard ? 1000 : 0}
            >
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
