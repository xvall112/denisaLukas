import React, { useEffect, useContext } from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import { Paper } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"
import getTheme from "./src/theme/index"
import { MenuContext } from "./src/providers/menu/menu.providers"
import { SnackbarMap, SnackbarUser, Modal } from "./src/components/own/Snackbar"
import AOS from "aos"
import { UserContext } from "./src/providers/user/user.provider"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {},
}))

/* export const useDarkMode = () => {
  const [themeMode, setTheme] = useState("dark")
  const [mountedComponent, setMountedComponent] = useState(false)

  const setMode = mode => {
    window.localStorage.setItem("themeMode", mode)
    setTheme(mode)
  }

  const themeToggler = () => {
    themeMode === "light" ? setMode("dark") : setMode("light")
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("themeMode")
    localTheme ? setTheme(localTheme) : setMode("dark")
    setMountedComponent(true)
    AOS.refresh()
  }, [])

  useEffect(() => {
    AOS.refresh()
  }, [themeMode])

  return [themeMode, themeToggler, mountedComponent]
} */

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
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: "ease-in-out",
    })
  }, [])

  const { themeMode, mountedComponent } = useContext(MenuContext)
  useEffect(() => {
    AOS.refresh()
  }, [mountedComponent])

  const { fetchFavouriteItems, isUserAuth, currentUser } = useContext(
    UserContext
  )
  useEffect(() => {
    isUserAuth()
    fetchFavouriteItems()

    console.log("componennt mounth")
    return () => {
      console.log("componennt unMounth")
    }
  }, [currentUser])
  const classes = useStyles()
  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Paper elevation={0}>
        <Layout className={classes.root}>
          <SnackbarMap />
          <SnackbarUser />
          <Modal />
          <Component themeMode={themeMode} {...rest} />
        </Layout>
      </Paper>
    </ThemeProvider>
  )
}
