import React, { useContext } from "react"
import { Link, navigate } from "gatsby"
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
  Menu,
  MenuItem,
  MenuList,
} from "@material-ui/core"
import {
  createStyles,
  useTheme,
  Theme,
  makeStyles,
} from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import InstagramIcon from "@material-ui/icons/Instagram"
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined"
import SearchIcon from "@material-ui/icons/Search"
import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined"

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0) 4%, #000000)",
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
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
              xs={7}
              md={4}
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item container direction="row" alignItems="center">
                <Grid item>
                  <Link to="/">
                    <StaticImage
                      src="../../../../images/logoWhite.png"
                      width={40}
                      quality={95}
                      alt="logo Faith in Travel"
                    />
                  </Link>
                </Grid>
                <Grid item>
                  <Box ml={1} fontWeight="700" fontSize={20}>
                    FAITH IN TRAVEL
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {isMd && (
              <Grid item md={4}>
                <Algolia />
              </Grid>
            )}
            <Grid
              item
              xs={5}
              md={4}
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              spacing={1}
            >
              <>
                {isMd ? (
                  <>
                    {/*   <Grid item>
                    <Box mr={2}>
                      <DarkModeToggler
                        themeMode={themeMode}
                        onClick={() => themeToggler()}
                      />
                    </Box>
                  </Grid>  */}
                    {/* button Instagram */}
                    <Grid item xs={4} md={2}>
                      <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                      >
                        <InstagramIcon fontSize="large" />
                      </IconButton>
                    </Grid>

                    {/*  button menu */}
                    <Grid item xs={4} md={2}>
                      <IconButton
                        aria-label="open drawer"
                        onClick={() => handleSidebarOpen()}
                      >
                        <MenuIcon fontSize="large" />
                      </IconButton>
                    </Grid>
                  </>
                ) : (
                  <Grid item>
                    <IconButton
                      aria-label="open drawer"
                      onClick={() => window.location.reload()}
                    >
                      <RefreshOutlinedIcon fontSize="large" />
                    </IconButton>
                  </Grid>
                )}
                {/*  button if user login */}

                <Grid item xs={4} md={2}>
                  <IconButton onClick={handleClick}>
                    <PersonOutlineOutlinedIcon fontSize="large" />
                  </IconButton>
                </Grid>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {currentUser ? (
                    <MenuList>
                      <MenuItem onClick={handleClose}>Nastavení</MenuItem>
                      <MenuItem onClick={() => navigate("/account")}>
                        Moje oblíbené
                      </MenuItem>
                      <MenuItem onClick={() => logout()}>Odhlásit se</MenuItem>
                    </MenuList>
                  ) : (
                    <MenuItem onClick={() => navigate("/signin")}>
                      Přihlásit se
                    </MenuItem>
                  )}
                </Menu>
              </>
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
