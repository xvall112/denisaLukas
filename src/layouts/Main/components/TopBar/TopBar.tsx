import React, { useContext, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

//components
import DarkModeToggler from "../../../../components/atoms/DarkModeToggler/DarkModeToggler"
import Search from "./Search"
import { CardBase } from "components/organisms"

//material UI
import {
  useMediaQuery,
  Grid,
  Box,
  IconButton,
  Typography,
} from "@material-ui/core"
import {
  createStyles,
  useTheme,
  Theme,
  makeStyles,
} from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import InstagramIcon from "@material-ui/icons/Instagram"

interface Props {
  themeMode: string
  themeToggler: Function
  onSidebarOpen: Function
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    logoCard: {
      backgroundColor: "black",
      /*  borderRadius: theme.shape.borderRadius, */
      "& .MuiCardContent-root": {
        padding: theme.spacing(1),
      },
      margin: "10px 0px",
    },
  })
)

const TopBar = ({
  themeMode,
  themeToggler,
  onSidebarOpen,
}: Props): JSX.Element => {
  const classes = useStyles()
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })
  return (
    <header>
      <div className={classes.root}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid
            item
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid
              item
              xs={8}
              md
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item container direction="row" alignItems="center">
                <Grid item>
                  <CardBase noBorder noShadow className={classes.logoCard}>
                    <StaticImage
                      src="../../../../images/logoWhite.png"
                      width={40}
                      quality={95}
                      alt="logo Denisa Lukas"
                    />
                  </CardBase>
                </Grid>
                <Grid item>
                  <Box ml={1}>
                    <Typography variant="subtitle2">FAITH IN TRAVEL</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {isMd && <Search />}
            <Grid
              item
              xs
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs>
                <DarkModeToggler
                  themeMode={themeMode}
                  onClick={() => themeToggler()}
                />
              </Grid>
              {isMd && (
                <Grid item xs>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                  >
                    <InstagramIcon />
                  </IconButton>
                </Grid>
              )}
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={() => onSidebarOpen()}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
          {/* {!isMd && (
                <Grid container>
                  <Search />
                </Grid>
              )} */}
        </Grid>
      </div>
    </header>
  )
}

export default TopBar
