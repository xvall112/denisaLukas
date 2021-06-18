import React, { createContext, useState } from "react"

export const MenuContext = createContext({
  openSidebar: false,
  mountedComponent: false,
  themeMode: "dark",
  handleSidebarOpen: () => {},
  handleSidebarClose: () => {},
  setMode: () => {},
  themeToggler: () => {},
})

const MenuProvider = ({ children }) => {
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

  return (
    <MenuContext.Provider
      value={{
        openSidebar,
        mountedComponent,
        themeMode,

        handleSidebarOpen,
        handleSidebarClose,
        setMode,
        themeToggler,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
export default MenuProvider
