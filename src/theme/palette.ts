// eslint-disable-next-line
import { PaletteType } from "@material-ui/core"

export const light = {
  alternate: {
    main: "rgb(247, 249, 250)",
    dark: "#e8eaf6",
  },
  cardShadow: "rgba(23, 70, 161, .11)",
  common: {
    black: "#000",
    white: "#fff",
  },
  type: "light" as PaletteType,
  primary: {
    main: "#000",
    light: "#fff1bc",
    dark: "#ff9100",
    contrastText: "#fff",
  },
  secondary: {
    light: "#fff",
    main: "#fff",
    dark: "#f57c00",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  text: {
    primary: "#2d3748",
    secondary: "#718096",
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: "#fff",
    default: "#fff",
    level2: "#f5f5f5",
    level1: "#fff",
    footer: "#1b1642",
  },
}

export const dark = {
  alternate: {
    main: "#ffffff",
    dark: "#24242b",
  },
  cardShadow: "rgba(0, 0, 0, .11)",
  common: {
    black: "#000",
    white: "#fff",
  },
  type: "dark" as PaletteType,
  primary: {
    main: "#fae596",
    light: "#fff1bc",
    dark: "#ffe06a",
    contrastText: "rgba(0, 0, 0, 0.87)",
    heart: "#fff",
  },
  secondary: {
    light: "#ffb74d",
    main: "#f9b934",
    dark: "#f57c00",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  text: {
    primary: "#EEEEEF",
    secondary: "#AEB0B4",
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#1B1B1B",
    default: "#1B1B1B",
    level2: "#333",
    level1: "#323232",
    footer: "#18181f",
  },
}
