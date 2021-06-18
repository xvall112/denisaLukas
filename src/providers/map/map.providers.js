import React, { createContext, useState } from "react"

export const MapContext = createContext({
  map: false,
  snackbar: false,
  snackbarMessage: "",
  filterCountry: "",
  filterCountryZoom: 2,
  filterCountryLocation: [0, 0],
  changeMap: () => {},
  handleCloseToast: () => {},
  copyLocationToClipboard: location => {},
  setFilterCountry: (country, lat, lon, zoom) => {},
})

const MapProvider = ({ children }) => {
  const [filterCountry, setFilterCountryState] = useState("")
  const [filterCountryZoom, setFilterCountryZoom] = useState(2)
  const [filterCountryLocation, setFilterCountryLocation] = useState([0, 0])
  const [snackbar, setSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState("")
  const [map, setMap] = useState(false)

  const changeMap = () => {
    setMap(map => !map)
  }

  const copyLocationToClipboard = async location => {
    await navigator.clipboard.writeText(`${location.lat} ${location.lon}`)
    await setSnackbarMessage("Zkopírováno do schránky")
    await setSnackbar(true)
  }

  const handleCloseToast = () => {
    setSnackbar(false)
  }

  const setFilterCountry = (country, lat, lon, zoom) => {
    if (country === "") {
      setFilterCountryState("")
      setFilterCountryLocation([0, 0])
      setFilterCountryZoom(2)
    } else {
      setFilterCountryState(country)
      setFilterCountryLocation([lat, lon])
      setFilterCountryZoom(zoom)
    }
  }
  return (
    <MapContext.Provider
      value={{
        snackbar,
        snackbarMessage,
        map,
        filterCountry,
        filterCountryZoom,
        filterCountryLocation,
        changeMap,
        handleCloseToast,
        copyLocationToClipboard,
        setFilterCountry,
      }}
    >
      {children}
    </MapContext.Provider>
  )
}
export default MapProvider
