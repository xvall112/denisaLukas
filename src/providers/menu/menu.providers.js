import React, { createContext, useState } from "react"

export const MenuContext = createContext({
  openSidebar: false,
  mountedComponent: false,
  themeMode: "dark",
  filterCountry: "",
  filterCountryZoom: 2,
  filterCountryLocation: [0, 0],
  setFilterCountry: (name, lat, lon, zoom) => {},
  handleSidebarOpen: () => {},
  handleSidebarClose: () => {},
  setMode: () => {},
  themeToggler: () => {},
})

const MenuProvider = ({ children }) => {
  const [filterCountry, setFilterCountryState] = useState("")
  const [filterCountryZoom, setFilterCountryZoom] = useState(2)
  const [filterCountryLocation, setFilterCountryLocation] = useState([0, 0])
  const [themeMode, setTheme] = useState("dark")
  const [mountedComponent, setMountedComponent] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(false)

  const handleSidebarOpen = () => setOpenSidebar(true)
  const handleSidebarClose = () => setOpenSidebar(false)

  const setMode = mode => {
    window.localStorage.setItem("themeMode", mode)
    setTheme(mode)
  }

  const themeToggler = () => {
    themeMode === "light" ? setMode("dark") : setMode("light")
  }

  const setFilterCountry = (name, lat, lon, zoom) => {
    if (name === "") {
      setFilterCountryState("")
      setFilterCountryLocation([0, 0])
      setFilterCountryZoom(2)
    } else {
      setFilterCountryState(name)
      setFilterCountryLocation([lat, lon])
      setFilterCountryZoom(zoom)
    }
  }

  return (
    <MenuContext.Provider
      value={{
        openSidebar,
        mountedComponent,
        themeMode,
        filterCountry,
        filterCountryZoom,
        filterCountryLocation,
        handleSidebarOpen,
        handleSidebarClose,
        setMode,
        themeToggler,
        setFilterCountry,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
export default MenuProvider
