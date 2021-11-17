import React, { useContext } from "react"
import { navigate } from "gatsby"

//components
import DarkModeToggler from "../../../components/atoms/DarkModeToggler/DarkModeToggler"

//materialUI
import {
  Button,
  Hidden,
  Typography,
  Grid,
  AppBar,
  Toolbar,
  useScrollTrigger,
} from "@material-ui/core"
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore"
import MenuIcon from "@material-ui/icons/Menu"
import { makeStyles } from "@material-ui/core/styles"

//context
import { MenuContext } from "../../../providers/menu/menu.providers"

const useStyles = makeStyles(theme => ({
  appBar: {
    "& .MuiPaper-elevation4": {
      boxShadow: "none !important",
    },
    "& .MuiAppBar-colorTransparent": {
      background: "rgba( 0, 0, 0, 0.3 )",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 9px )",
    },
  },

  appBar2: {
    "& .MuiPaper-elevation4": {
      boxShadow: "none !important",
    },
    "& .MuiAppBar-colorTransparent": {
      background: "rgba( 0, 0, 0, 0.0 )",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 0px )",
    },
  },

  backButton: {
    /*  left: "20px",
    top: "10px",
    position: "fixed", 
    zIndex: 1000,*/
    color: theme.palette.primary.main,
  },

  menuButton: {
    /*  top: "10px",
    position: "fixed",
    right: "20px", 
    zIndex: 1000,*/

    color: theme.palette.primary.main,
  },
}))

const TopBar2 = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })
  const classes = useStyles()
  const { handleSidebarOpen, titleTopBar } = useContext(MenuContext)
  return (
    <div id="topBar" className={trigger ? classes.appBar : classes.appBar2}>
      <AppBar position="fixed" color="transparent">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                aria-label="open drawer"
                onClick={() => navigate(-1)}
                className={classes.backButton}
              >
                <NavigateBeforeIcon />
              </Button>
            </Grid>
            {trigger && (
              <Grid item>
                <Typography color="primary" variant="h6">
                  {titleTopBar}
                </Typography>
              </Grid>
            )}
            {/* <Box position="absolute" right="10px" top="10px" zIndex={1000}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >  <Box mr={2}>
              <DarkModeToggler
                themeMode={themeMode}
                onClick={() => themeToggler()}
              />
            </Box>  */}
            <Grid item xs={2} md="auto">
              <Hidden mdDown>
                <Button
                  variant="outlined"
                  color="primary"
                  aria-label="open drawer"
                  className={classes.menuButton}
                  onClick={() => handleSidebarOpen()}
                >
                  <MenuIcon />
                </Button>
              </Hidden>
            </Grid>
          </Grid>
          {/* </Grid> 
        </Box> */}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopBar2
