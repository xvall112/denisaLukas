/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import TopLayout from "./TopLayout.tsx"
import { Script } from "gatsby"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "firebase/auth"
import "firebase/firestore"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

export const wrapRootElement = ({ element }) => {
  return (
    <TopLayout>
      {element}
      <Script
        src="https://kit.fontawesome.com/4c273e6d43.js"
        crossOrigin="anonymous"
      ></Script>
    </TopLayout>
  )
}
