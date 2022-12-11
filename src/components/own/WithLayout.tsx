import React, { useEffect, useContext, useState } from "react"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "@material-ui/core/styles"
import { Paper } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"
import getTheme from "../../theme/index"
import { SnackbarMap, SnackbarUser, Modal } from "./Snackbar"
import Tabs from "../../layouts/Main/components/TopBar/Tabs"
//context
import { UserContext } from "../../providers/user/user.provider"
import { MenuContext } from "../../providers/menu/menu.providers"
import { FavouriteContext } from "../../providers/favourite/favourite.provider"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "firebase/auth"
import "firebase/firestore"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

export const useDarkMode = () => {
  const { themeMode, setMode } = useContext(MenuContext)
  const [mountedComponent, setMountedComponent] = useState(false)

  const setTheme = mode => {
    try {
      window.localStorage.setItem("themeMode", mode)
    } catch {
      /* do nothing */
    }

    setMode(mode)
  }

  const themeToggler = () => {
    themeMode === "light" ? setTheme("dark") : setTheme("light")
  }

  useEffect(() => {
    try {
      const localTheme = window.localStorage.getItem("themeMode")
      localTheme ? setMode(localTheme) : setTheme("light")
    } catch {
      setMode("light")
    }

    setMountedComponent(true)
  }, [])

  return [themeMode, themeToggler, mountedComponent]
}

interface Props {
  children: React.ReactNode
}

export default function WithLayout({ children }: Props): JSX.Element {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  const [themeMode, themeToggler, mountedComponent] = useDarkMode()

  const { fetchFavouriteItems, isUserAuth } = useContext(UserContext)
  const { favouriteItems } = useContext(FavouriteContext)

  useEffect(() => {
    isUserAuth()
    fetchFavouriteItems()
    console.log("componennt mounth")
    return () => {
      console.log("componennt unMounth")
    }
  }, [favouriteItems])

  return (
    <>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/4c273e6d43.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>

      <ThemeProvider theme={getTheme(themeMode)}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Paper elevation={0}>
          <SnackbarMap />
          <SnackbarUser />
          <Modal />

          {children}
        </Paper>
      </ThemeProvider>
    </>
  )
}
