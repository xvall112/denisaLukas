import React, { useContext } from "react"
import { Link, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//components
import Algolia from "../../../../components/own/Algolia/Algolia"
import Tabs from "../../../components/Tabs"
//context
import { MenuContext } from "../../../../providers/menu/menu.providers"
import { UserContext } from "../../../../providers/user/user.provider"
//material UI
import { useMediaQuery, Grid, IconButton } from "@material-ui/core"
import {
  createStyles,
  useTheme,
  Theme,
  makeStyles,
} from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import InstagramIcon from "@material-ui/icons/Instagram"
import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined"

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { zIndex: 1000 },
    logo: {
      backgroundColor: "black",
      borderRadius: "5px",
      padding: "5px 0 0 5px",
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
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
                <Grid item className={classes.logo}>
                  <Link to="/">
                    <StaticImage
                      src="../../../../images/mainLogo.png"
                      height={40}
                      quality={95}
                      alt="logo Faith in Travel"
                    />
                  </Link>
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
              {isMd && (
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
                      aria-label="link to instagram"
                      onClick={() =>
                        navigate("https://www.instagram.com/denisa.lukas/")
                      }
                    >
                      <InstagramIcon fontSize="large" />
                    </IconButton>
                  </Grid>
                </>
              )}
              {/*  button menu */}
              <Grid item xs={5} md={2}>
                <IconButton
                  color="primary"
                  aria-label="open drawer"
                  onClick={() => handleSidebarOpen()}
                >
                  <MenuIcon fontSize="large" />
                </IconButton>
              </Grid>
              <>
                {/*   refresh button
              (
                  <Grid item>
                    <IconButton
                      aria-label="open drawer"
                      onClick={() => window.location.reload()}
                    >
                      <RefreshOutlinedIcon fontSize="large" />
                    </IconButton>
                  </Grid>
                ) */}
                {/*  button if user login */}

                {/* <Grid item xs={4} md={2}>
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
                      <MenuItem onClick={() => navigate("/app/account")}>
                        Nastavení
                      </MenuItem>
                      <MenuItem onClick={() => navigate("/app/favourite")}>
                        Moje oblíbené
                      </MenuItem>
                      <MenuItem onClick={() => logout()}>Odhlásit se</MenuItem>
                    </MenuList>
                  ) : (
                    <MenuItem onClick={() => navigate("/app/login")}>
                      Přihlásit se
                    </MenuItem>
                  )}
                </Menu> */}
              </>
            </Grid>
          </Grid>
          {/* {!isMd && (
                <Grid container>
                  <Search />
                </Grid>
              )} */}
        </Grid>
        <Tabs />
      </div>
    </header>
  )
}

export default TopBar
