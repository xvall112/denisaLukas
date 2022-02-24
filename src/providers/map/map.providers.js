import React, { createContext, useState } from "react"

export const MapContext = createContext({
  map: false,
  snackbar: false,
  snackbarMessage: "",
  isFullScreenMapOpen: false,
  highlightedCard: null,
  changeMap: () => {},
  handleCloseToast: () => {},
  setOpenFullScreenMap: () => {},
  setCloseFullScreenMap: () => {},
  copyLocationToClipboard: location => {},
  setHighlighted: index => {},
})

const MapProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState("")
  const [map, setMap] = useState(false)
  const [isFullScreenMapOpen, setIsFullScreenMapOpen] = useState(false)
  const [highlightedCard, setHighlightedCard] = useState(null)

  const setHighlighted = index => {
    setHighlightedCard(index)
  }

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
        highlightedCard,
        changeMap,
        handleCloseToast,
        copyLocationToClipboard,
        setOpenFullScreenMap,
        setCloseFullScreenMap,
        setHighlighted,
      }}
    >
      {children}
    </MapContext.Provider>
  )
}
export default MapProvider
