import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

//components
import DarkModeToggler from "../../../../components/atoms/DarkModeToggler/DarkModeToggler"
import Search from "./Search"

//material UI
import {
  useMediaQuery,
  AppBar,
  Toolbar,
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

    titleDenisa: {
      flexGrow: 1,
      display: "none",
      textAlign: "right",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    titleLukas: {
      flexGrow: 1,
      textAlign: "left",
      fontWeight: "bold",
      marginLeft: theme.spacing(1),
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
                  justify="center"
                  alignItems="center"
                >
                  <Grid
                    item
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <StaticImage
                      src="../../../../images/logoWhite.png"
                      width={40}
                      quality={95}
                      alt="logo Denisa Lukas"
                    />
                    <Typography className={classes.titleLukas}>
                      FAITH TRAVEL
                    </Typography>
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
                >
                  <Box mr={2}>
                    <DarkModeToggler
                      themeMode={themeMode}
                      onClick={() => themeToggler()}
                    />
                  </Box>
                  {isMd && (
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="open drawer"
                    >
                      <InstagramIcon />
                    </IconButton>
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
              {!isMd && (
                <Grid container>
                  <Search />
                </Grid>
              )}
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    </header>
  )
}

export default TopBar
