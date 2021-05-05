import { createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core"
import { light, dark } from "./palette"
import "@fontsource/roboto"

const getTheme = mode =>
  responsiveFontSizes(
    createMuiTheme({
      
      palette: mode === "light" ? light : dark,
      overrides: {
        MuiButton: {
          root: {
            borderRadius: '5px',
          },
        },
        MuiChip:{
          root:{
            borderRadius: '5px',
          }
        }
      },
      layout: {
        contentWidth: 1236,
      },
      typography: {
        fontFamily: "Lato, Roboto, Arial",
      },

      zIndex: {
        appBar: 1200,
        drawer: 1100,
      },
    })
  )

export default getTheme
