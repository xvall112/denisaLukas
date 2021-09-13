import React, { useContext } from "react"
import { navigate } from "gatsby"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//components
import { CardBase } from "components/organisms"
import Algolia from "../../../../components/own/Algolia/Algolia"
//context
import { MenuContext } from "../../../../providers/menu/menu.providers"
import { UserContext } from "../../../../providers/user/user.provider"
//material UI
import {
  useMediaQuery,
  Grid,
  Box,
  IconButton,
  Typography,
  Avatar,
  Menu,
  MenuItem,
} from "@material-ui/core"
import {
  createStyles,
  useTheme,
  Theme,
  makeStyles,
} from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import InstagramIcon from "@material-ui/icons/Instagram"

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
    },
    menu: {
      backgroundColor: "black",
      borderRadius: theme.shape.borderRadius,
    },
    menuIcon: {
      color: "white",
    },
    logoCard: {
      backgroundColor: "black",
      /*  borderRadius: theme.shape.borderRadius, */
      "& .MuiCardContent-root": {
        padding: theme.spacing(1),
      },
      margin: theme.spacing(1, 0),
    },
  })
)

const TopBar = ({}: Props): JSX.Element => {
  const { handleSidebarOpen } = useContext(MenuContext)
  const { currentUser, logout } = useContext(UserContext)
  const classes = useStyles()
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })
  // menu pri prihlaseni uzivatele
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
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
                  <Link to="/">
                    <CardBase noBorder noShadow className={classes.logoCard}>
                      <StaticImage
                        src="../../../../images/logoWhite.png"
                        width={40}
                        quality={95}
                        alt="logo Faith in Travel"
                      />
                    </CardBase>
                  </Link>
                </Grid>
                <Grid item>
                  <Box ml={1}>
                    <Typography variant="subtitle2">FAITH IN TRAVEL</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {isMd && <Algolia />}
            <Grid
              item
              xs
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              spacing={1}
            >
              {isMd && (
                <>
                  {/* <Grid item>
                    <Box mr={2}>
                      <DarkModeToggler
                        themeMode={themeMode}
                        onClick={() => themeToggler()}
                      />
                    </Box>
                  </Grid> */}

                  <Grid item>
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="open drawer"
                    >
                      <InstagramIcon />
                    </IconButton>
                  </Grid>
                </>
              )}
              <Grid item>
                <Box className={classes.menu}>
                  <IconButton
                    aria-label="open drawer"
                    onClick={() => handleSidebarOpen()}
                  >
                    <MenuIcon fontSize="large" className={classes.menuIcon} />
                  </IconButton>
                </Box>
              </Grid>
              {currentUser && (
                <>
                  <Grid item>
                    <Avatar
                      onClick={handleClick}
                      className={classes.avatar}
                      src="/broken-image.jpg"
                    />
                  </Grid>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Nastavení</MenuItem>
                    <MenuItem onClick={handleClose}>Moje oblíbené</MenuItem>
                    <MenuItem onClick={() => logout()}>Odhlásit se</MenuItem>
                  </Menu>
                </>
              )}
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
