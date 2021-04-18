import React from "react"
import { navigate } from "gatsby"

//components
import DarkModeToggler from "../../../components/atoms/DarkModeToggler/DarkModeToggler"

//materialUI
import {
  AppBar,
  Toolbar,
  Grid,
  Box,
  IconButton,
  Typography,
} from "@material-ui/core"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import MenuIcon from "@material-ui/icons/Menu"

interface Props {
  themeMode: string
  themeToggler: Function
}
const TopBar = ({ themeMode, themeToggler }: Props): JSX.Element => {
  return (
    <div id="topBar">
      {" "}
      <AppBar position="fixed" color="transparent">
        <Toolbar>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid
              item
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid
                item
                xs
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={() => navigate(-1)}
                >
                  <ArrowBackIosIcon />
                </IconButton>
              </Grid>

              <Grid
                item
                xs
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
              >
                <Box mr={2}>
                  <DarkModeToggler
                    themeMode={themeMode}
                    onClick={() => themeToggler()}
                  />
                </Box>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopBar
