import { createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core"
import { light, dark } from "./palette"
import "@fontsource/roboto"

const getTheme = mode =>
  responsiveFontSizes(
    createMuiTheme({
      
      palette: mode === "light" ? light : dark,
      overrides: {
        MuiDivider:{
          root:{
            background: 'linear-gradient(93deg, rgba(250,229,150,0.500437675070028) 0%, rgba(250,229,150,1) 46%, rgba(250,229,150,0.500437675070028) 100%)'
          }
          
         
        },
       
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
        fontFamily: "Roboto, Arial",
      },

      zIndex: {
        appBar: 1200,
        drawer: 1100,
      },
    })
  )

export default getTheme
