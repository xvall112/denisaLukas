import React from "react"
//components
import MainLayout from "./Main/Main"
import PlaceLayout from "./Place/Place"

interface Props {
  children: React.ReactNode
  pageContext: React.ReactNode
}

const Index = ({ children, pageContext }: Props) => {
  console.log("pageContext", pageContext)
  if (pageContext.layout === "place") {
    return <PlaceLayout>{children}</PlaceLayout>
  }
  return <MainLayout>{children}</MainLayout>
}

export default Index
