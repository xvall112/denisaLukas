import React, { createContext, useState } from "react"

export const MenuContext = createContext({
  openSidebar: false,
  mountedComponent: false,
  themeMode: "dark",
  filterCountry: "",
  filterCountryZoom: 2,
  filterCountryLocation: [0, 0],
  valueBottomNavigation: "home",
  titleTopBar: "",
  loadList: 0,
  setFilterCountry: valueFilter => {},
  handleSidebarOpen: () => {},
  handleSidebarClose: () => {},
  setMode: () => {},
  themeToggler: () => {},
  setFilterLocation: (lat, lon) => {},
  handleBottomNavigation: (event, newValue) => {},
  setTitle: title => {},
  handleSetLoadList: number => {},
})

const MenuProvider = ({ children }) => {
  const [filterCountry, setFilterCountryState] = useState("")
  const [filterCountryZoom, setFilterCountryZoom] = useState(2)
  const [filterCountryLocation, setFilterCountryLocation] = useState([0, 0])
  const [themeMode, setTheme] = useState("dark")
  const [mountedComponent, setMountedComponent] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(false)
  const [valueBottomNavigation, setValueBottomNavigation] = useState("home")
  const [titleTopBar, setTitleTopBar] = useState("")
  const [loadList, setLoadList] = useState(10)

  const setTitle = title => {
    setTitleTopBar(title)
  }

  const handleSetLoadList = number => {
    setLoadList(number)
  }
  //seting actual value bottom navigation
  const handleBottomNavigation = (event, newValue) => {
    setValueBottomNavigation(newValue)
  }
  const handleSidebarOpen = () => setOpenSidebar(true)
  const handleSidebarClose = () => setOpenSidebar(false)

  const setMode = mode => {
    window.localStorage.setItem("themeMode", mode)
    setTheme(mode)
  }

  const themeToggler = () => {
    themeMode === "light" ? setMode("dark") : setMode("light")
  }

  const setFilterLocation = (lat, lon) => {
    setFilterCountryLocation([lat, lon])
  }
  const setFilterCountry = valueFilter => {
    if (valueFilter === "") {
      setFilterCountryState("")
      setFilterCountryLocation([0, 0])
      setFilterCountryZoom(2)
    } else {
      setFilterCountryState(valueFilter.name)
      setFilterCountryLocation([
        valueFilter.countryCenterLocation.lat,
        valueFilter.countryCenterLocation.lon,
      ])
      setFilterCountryZoom(valueFilter.mapZoom)
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
        valueBottomNavigation,
        titleTopBar,
        loadList,
        handleSetLoadList,
        handleSidebarOpen,
        handleSidebarClose,
        setMode,
        themeToggler,
        setFilterCountry,
        setFilterLocation,
        handleBottomNavigation,
        setTitle,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
export default MenuProvider
