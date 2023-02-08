import React from "react"
import clsx from "clsx"
import { navigate } from "gatsby"
//materialUI
import { makeStyles, useTheme } from "@material-ui/core/styles"
import {
  useMediaQuery,
  Hidden,
  Container,
  Grid,
  Button,
} from "@material-ui/core"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
//components
import BottomNavigation from "../components/bottomNavigation"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    maxWidth: "100vw",
    color: theme.palette.text.primary,
  },
  sectionNoPadding: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}))

interface Props {
  children: React.ReactNode
}

const MenuLayout = ({ children }: Props): JSX.Element => {
  const classes = useStyles()
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Hidden mdDown>
        <Container maxWidth="xl">
          <Grid item xs={12}>
            <Button
              color="primary"
              startIcon={<ArrowBackIosIcon />}
              onClick={() => navigate("/")}
              style={{ marginTop: "10px" }}
            >
              Zpět
            </Button>

            {/* <Box mt={2}>
                <Grid container direction="row">
                  <ArrowBackIosIcon color="primary" />
                  <Typography color="primary">Zpět</Typography>
                </Grid>
              </Box> */}
          </Grid>
        </Container>
      </Hidden>
      <main>
        {/*  <Divider /> */}
        {children}
      </main>
      <Hidden lgUp>
        <BottomNavigation />
      </Hidden>
    </div>
  )
}

export default MenuLayout
