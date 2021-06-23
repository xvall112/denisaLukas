import React, { createContext, useState } from "react"

export const MapContext = createContext({
  map: false,
  snackbar: false,
  snackbarMessage: "",
  isFullScreenMapOpen: false,
  changeMap: () => {},
  handleCloseToast: () => {},
  setOpenFullScreenMap: () => {},
  setCloseFullScreenMap: () => {},
  copyLocationToClipboard: location => {},
})

const MapProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState("")
  const [map, setMap] = useState(false)
  const [isFullScreenMapOpen, setIsFullScreenMapOpen] = useState(false)

  const setOpenFullScreenMap = () => {
    setIsFullScreenMapOpen(true)
  }
  const setCloseFullScreenMap = () => {
    setIsFullScreenMapOpen(false)
  }
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

  return (
    <MapContext.Provider
      value={{
        snackbar,
        snackbarMessage,
        map,
        isFullScreenMapOpen,
        changeMap,
        handleCloseToast,
        copyLocationToClipboard,
        setOpenFullScreenMap,
        setCloseFullScreenMap,
      }}
    >
      {children}
    </MapContext.Provider>
  )
}
export default MapProvider
