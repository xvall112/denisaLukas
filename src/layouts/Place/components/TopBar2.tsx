import React, { useContext } from "react"
import { navigate } from "gatsby"

//components
import DarkModeToggler from "../../../components/atoms/DarkModeToggler/DarkModeToggler"

//materialUI
import { Button, Hidden, Typography } from "@material-ui/core"
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore"
import MenuIcon from "@material-ui/icons/Menu"
import { makeStyles } from "@material-ui/core/styles"

//context
import { MenuContext } from "../../../providers/menu/menu.providers"
const useStyles = makeStyles(theme => ({
  backButton: {
    left: "20px",
    top: "10px",
    position: "fixed",
    zIndex: 1000,
    color: "white",
    [theme.breakpoints.up("md")]: {
      backgroundColor: "white",
      color: "black",
    },
  },
  menuButton: {
    top: "10px",
    position: "fixed",
    zIndex: 1000,
    backgroundColor: "white",
    color: "black",
    right: "20px",
  },
}))

interface Props {
  title?: string
}
const TopBar2 = ({ title }: Props): JSX.Element => {
  const classes = useStyles()
  const { handleSidebarOpen } = useContext(MenuContext)
  return (
    <div id="topBar">
      <Button
        variant="outlined"
        color="primary"
        aria-label="open drawer"
        onClick={() => navigate(-1)}
        className={classes.backButton}
      >
        <NavigateBeforeIcon />
      </Button>
      <Typography color="textPrimary">{title}</Typography>
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
      <Hidden mdDown>
        <Button
          variant="contained"
          color="primary"
          aria-label="open drawer"
          className={classes.menuButton}
          onClick={() => handleSidebarOpen()}
        >
          <MenuIcon />
        </Button>
      </Hidden>
      {/* </Grid> 
        </Box> */}
    </div>
  )
}

export default TopBar2
