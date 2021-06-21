import React, { useContext, useEffect, useRef, useState } from "react"
import { MapContext } from "../../providers/map/map.providers"
import mapboxgl from "mapbox-gl"
import clsx from "clsx"
import ReactMapGL, {
  Marker,
  FullscreenControl,
  NavigationControl,
  Popup,
} from "react-map-gl"
import Pins from "./pins"
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
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(0)
  const [lat, setLat] = useState(0)
  const [zoomm, setZoomm] = useState(1)

  const [viewport, setViewport] = React.useState({
    longitude: 0,
    latitude: 0,
    zoom: 2,
  })

  /* useEffect(() => {
    if (map.current) return // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoomm,
    })
    map.current.addControl(new mapboxgl.NavigationControl(), "bottom-right")
    map.current.addControl(new mapboxgl.FullscreenControl())
    const markerr = (lat, lon) =>
      new mapboxgl.Marker({
        color: "#FFFFFF",
      })
        .setLngLat([lon, lat])
        .addTo(map.current)
    {
      marker &&
        marker.length &&
        marker.map((item, i) => markerr(item.location.lat, item.location.lon))
    }
  }) */
  const fullscreenControlStyle = {
    bottom: 150,
    right: 10,
  }
  const navControlStyle = {
    right: 10,
    bottom: 40,
  }
  const [popupInfo, setPopupInfo] = useState(null)
  console.log(popupInfo)
  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.MAP_BOX_TOKEN}
    >
      <FullscreenControl style={fullscreenControlStyle} />
      <NavigationControl style={navControlStyle} />
      <Pins data={marker} onClick={setPopupInfo} />
    </ReactMapGL>
    /*  
    REACT LEAFLET
    <MapContainer
        zoomControl={false}
        zoom={zoom}
        center={center}
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
      </MapContainer> */
  )
}

export default LeafletMap
