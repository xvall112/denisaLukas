import React, { useEffect, useContext, useState } from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import { Paper } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"
import getTheme from "./src/theme/index"
import { makeStyles } from "@material-ui/core/styles"
import { SnackbarMap, SnackbarUser, Modal } from "./src/components/own/Snackbar"

//context
import { UserContext } from "./src/providers/user/user.provider"
import { MenuContext } from "./src/providers/menu/menu.providers"
import { FavouriteContext } from "./src/providers/favourite/favourite.provider"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

const useStyles = makeStyles(theme => ({
  root: {},
}))

interface Props {
  layout: any
  component: any
  // All other props
  [x: string]: any
}

export default function WithLayout({
  component: Component,
  layout: Layout,
  ...rest
}: Props): JSX.Element {
  const { fetchFavouriteItems, isUserAuth } = useContext(UserContext)
  const { favouriteItems } = useContext(FavouriteContext)
  const { themeMode, setMode } = useContext(MenuContext)

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  useEffect(() => {
    const localTheme = window.localStorage.getItem("themeMode")
    localTheme ? setMode(localTheme) : setMode("dark")
  }, [])

  useEffect(() => {
    isUserAuth()
    fetchFavouriteItems()
    console.log("componennt mounth")
    return () => {
      console.log("componennt unMounth")
    }
  }, [favouriteItems])

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Paper elevation={0}>
        <SnackbarMap />
        <SnackbarUser />
        <Modal />

        <Layout>
          <Component themeMode={themeMode} {...rest} />
        </Layout>
      </Paper>
    </ThemeProvider>
  )
}
