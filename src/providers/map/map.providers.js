import React, { createContext, useState } from "react"

export const MapContext = createContext({
  map: false,
  snackbar: false,
  changeMap: () => {},
  handleCloseToast: () => {},
  copyLocationToClipboard: location => {},
})

const MapProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState(false)
  const [map, setMap] = useState(false)

  const changeMap = () => {
    setMap(map => !map)
  }

  const copyLocationToClipboard = location => {
    navigator.clipboard.writeText(`${location.lat} ${location.lon}`)
    setSnackbar(true)
  }

  const handleCloseToast = () => {
    setSnackbar(false)
  }

  return (
    <MapContext.Provider
      value={{
        snackbar,
        map,
        changeMap,
        handleCloseToast,
        copyLocationToClipboard,
      }}
    >
      {children}
    </MapContext.Provider>
  )
}
export default MapProvider
