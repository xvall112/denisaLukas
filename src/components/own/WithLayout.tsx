import React, { useEffect, useContext, useState } from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import { Paper } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"
import getTheme from "../../theme/index"
import { SnackbarMap, SnackbarUser, Modal } from "./Snackbar"

//context
import { UserContext } from "../../providers/user/user.provider"
import { MenuContext } from "../../providers/menu/menu.providers"
import { FavouriteContext } from "../../providers/favourite/favourite.provider"

export const useDarkMode = () => {
  const { themeMode, setMode } = useContext(MenuContext)

  useEffect(() => {
    try {
      const localTheme = window.localStorage.getItem("themeMode")
      localTheme ? setMode(localTheme) : setMode("dark")
    } catch {
      setMode("dark")
    }
  }, [])

  return [themeMode]
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

  const [themeMode] = useDarkMode()

  const { fetchFavouriteItems, isUserAuth, currentUser } = useContext(
    UserContext
  )
  const { favouriteItems } = useContext(FavouriteContext)

  useEffect(() => {
    isUserAuth()
    fetchFavouriteItems()
    console.log("componennt mounth")
    return () => {
      console.log("componennt unMounth")
    }
  }, [favouriteItems, currentUser])

  return (
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
  )
}
