import React from "react"
import { navigate } from "gatsby"

//components
import DarkModeToggler from "../../../components/atoms/DarkModeToggler/DarkModeToggler"

//materialUI
import { Container, Box, IconButton, Grid, Button } from "@material-ui/core"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore"
import MenuIcon from "@material-ui/icons/Menu"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  backButton: {
    top: "10px",
    position: "fixed",
    zIndex: 10000,
    backgroundColor: "white",
    color: "black",
  },
  menuButton: {
    top: "10px",
    position: "fixed",
    zIndex: 10000,
    backgroundColor: "white",
    color: "black",
    right: "10px",
  },
}))

interface Props {
  themeMode: string
  themeToggler: Function
}
const TopBar2 = ({ themeMode, themeToggler }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <div id="topBar">
      <Container maxWidth="xl">
        <Button
          variant="contained"
          color="primary"
          aria-label="open drawer"
          onClick={() => navigate(-1)}
          className={classes.backButton}
        >
          <NavigateBeforeIcon />
        </Button>
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
        <Button
          variant="contained"
          color="primary"
          aria-label="open drawer"
          className={classes.menuButton}
        >
          <MenuIcon />
        </Button>
        {/* </Grid> 
        </Box> */}
      </Container>
    </div>
  )
}

export default TopBar2
