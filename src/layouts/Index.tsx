import React from "react"
import { Box } from "@material-ui/core"
//components
import MainLayout from "./Main/Main"
import PlaceLayout from "./Place/Place"

interface Props {
  children: React.ReactNode
  pageContext: React.ReactNode
  location: React.ReactNode
}

const Index = ({ children, pageContext, location }: Props) => {
  console.log("location:", location)
  if (
    pageContext.layout === "place" ||
    [
      "/search",
      "/Blog",
      "/app/favourite",
      "/app/account",
      "/app/login",
      "/signup",
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
