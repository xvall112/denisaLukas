import React, { createContext, useState } from "react"

export const MenuContext = createContext({
  openSidebar: false,
  handleSidebarOpen: () => {},
  handleSidebarClose: () => {},
})

const MenuProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const handleSidebarOpen = () => setOpenSidebar(true)
  const handleSidebarClose = () => setOpenSidebar(false)
  return (
    <MenuContext.Provider
      value={{ openSidebar, handleSidebarOpen, handleSidebarClose }}
    >
      {children}
    </MenuContext.Provider>
  )
}
export default MenuProvider
