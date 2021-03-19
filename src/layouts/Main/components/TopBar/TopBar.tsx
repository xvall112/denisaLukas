import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//components
import DarkModeToggler from "../../../../components/atoms/DarkModeToggler/DarkModeToggler"
import Search from "./Search"

//material UI
import { useMediaQuery, AppBar, Toolbar, Grid, Box } from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
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
      display: "none",
      textAlign: "left",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
  })
)

const TopBar = ({ themeMode, themeToggler }: Props): JSX.Element => {
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
                  justify="flex-start"
                  alignItems="center"
                >
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                  >
                    <InstagramIcon />
                  </IconButton>

                  {isMd && <Search />}
                </Grid>
                <Grid
                  item
                  xs
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Typography className={classes.titleDenisa}>
                    Denisa
                  </Typography>
                  <StaticImage
                    src="../../../../images/logo2x.png"
                    width={50}
                    quality={95}
                    alt="logo Denisa Lukas"
                  />
                  <Typography className={classes.titleLukas}>Lukáš</Typography>
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
