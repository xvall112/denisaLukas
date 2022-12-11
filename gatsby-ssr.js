/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "firebase/auth"
import "firebase/firestore"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import React from "react"
import TopLayout from "./TopLayout.tsx"

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>
}
