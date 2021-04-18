import React, { Component } from "react"
import { graphql, useStaticQuery } from "gatsby"
import clsx from "clsx"
import { TileLayer, Marker, Tooltip, Popup } from "react-leaflet"
import { MapContainer, ZoomControl } from "react-leaflet"
import L from "leaflet"
//materialUI
import { makeStyles } from "@material-ui/core/styles"

//components
import PopupCard from "./PopupCard"

const query = graphql`
  {
    allContentfulPlaces(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        slug
        name
        kindPlace
        titleImage {
          gatsbyImageData(layout: FULL_WIDTH)
          title
        }
        country {
          name
          flagLink
        }
        location {
          lat
          lon
        }
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  root: {},
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

interface LeafletMap {
  zoom: number
  center: [number, number]
  className?: any
  rest?: any
}
const LeafletMap = ({
  zoom,
  center,
  className,
  ...rest
}: LeafletMap): JSX.Element => {
  const data = useStaticQuery(query)

  const classes = useStyles()

  /* const markerIconHouse = new L.icon({
    iconUrl: require('assets/images/leaflet-assets/house2.png'),
    iconSize: [25, 40],
    iconAnchor: [10, 40],
    tooltipAnchor: [15, -20],
    shadowUrl: require('assets/images/leaflet-assets/marker-shadow.png'),
  });
  const markerIconShopping = new L.icon({
    iconUrl: require('assets/images/leaflet-assets/shopping.png'),
    iconSize: [25, 40],
    iconAnchor: [10, 40],
    tooltipAnchor: [15, -20],
    shadowUrl: require('assets/images/leaflet-assets/marker-shadow.png'),
  });
  const markerIconHospital = new L.icon({
    iconUrl: require('assets/images/leaflet-assets/hospital.png'),
    iconSize: [25, 40],
    iconAnchor: [10, 40],
    tooltipAnchor: [15, -20],
    shadowUrl: require('assets/images/leaflet-assets/marker-shadow.png'),
  });
  const markerIconBus = new L.icon({
    iconUrl: require('assets/images/leaflet-assets/bus.png'),
    iconSize: [25, 40],
    iconAnchor: [10, 40],
    tooltipAnchor: [15, -20],
    shadowUrl: require('assets/images/leaflet-assets/marker-shadow.png'),
  });
  const markerIconCar = new L.icon({
    iconUrl: require('assets/images/leaflet-assets/car.png'),
    iconSize: [25, 40],
    iconAnchor: [10, 40],
    tooltipAnchor: [15, -20],
    shadowUrl: require('assets/images/leaflet-assets/marker-shadow.png'),
  }); */
  if (typeof window !== "undefined") {
    return (
      <MapContainer
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
        {data.allContentfulPlaces.nodes &&
          data.allContentfulPlaces.nodes.length &&
          data.allContentfulPlaces.nodes.map((item, i) => (
            <Marker
              /* icon={
              item.icon === 'hospital'
                ? markerIconHospital
                : item.icon === 'house'
                ? markerIconHouse
                : item.icon === 'shopping'
                ? markerIconShopping
                : item.icon === 'car'
                ? markerIconCar
                : markerIconBus
            } */
              /* className="map__marker"  */
              position={[item.location.lat, item.location.lon]}
              key={i}
            >
              <Popup className={classes.popup}>
                <PopupCard item={item} />
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    )
  }
  return null
}

export default LeafletMap
