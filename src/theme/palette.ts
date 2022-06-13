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
    main: "#fae596",
    light: "#fff1bc",
    dark: "#ffe06a",
    contrastText: "#000",
  },
  secondary: {
    light: "#ffb74d",
    main: "#f9b934",
    dark: "#f57c00",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  text: {
    primary: "#2d3748",
    secondary: "#718096",
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: "#f5f5f5",
    default: "#141414",
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
    paper: "#000000",
    default: "#000000",
    level2: "#2e2e2e",
    level1: "#2D3748",
    footer: "#18181f",
  },
}
