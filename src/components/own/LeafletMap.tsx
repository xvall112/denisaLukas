import React, { useContext, useEffect, useRef, useState } from "react"
import { MapContext } from "../../providers/map/map.providers"
import mapboxgl from "mapbox-gl"
import clsx from "clsx"

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
  console.log(marker)
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(0)
  const [lat, setLat] = useState(0)
  const [zoomm, setZoomm] = useState(1)

  useEffect(() => {
    if (map.current) return // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
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
  })

  return (
    <div>
      <div ref={mapContainer} className={classes.mapContainer} />
    </div>
    /*  <MapContainer
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
      </MapContainer> */
  )
}

export default LeafletMap
