import React, { useContext, useEffect } from "react"
import { Box } from "@material-ui/core"
//components
import MainLayout from "./Main/Main"
import PlaceLayout from "./Place/Place"
//context
import { MenuContext } from "../providers/menu/menu.providers"
interface Props {
  children: React.ReactNode
  pageContext: React.ReactNode
  location: React.ReactNode
}

const Index = ({ children, pageContext, location }: Props) => {
  const { setTopTabsValue } = useContext(MenuContext)
  useEffect(() => {
    setTopTabsValue(location.pathname)
    return () => {
      setTopTabsValue("/")
    }
  }, [location.pathname])

  if (
    pageContext.layout === "place" ||
    [
      "/search",
      "/Blog",
      "/app/favourite",
      "/app/account",
      "/app/login",
      "/signup",
      "/places",
    ].find(item => item === location.pathname)
  ) {
    return <PlaceLayout>{children}</PlaceLayout>
  }
  return (
    <MainLayout>
      <Box mt={12} mb={12}>
        {children}
      </Box>
    </MainLayout>
  )
}

export default Index
