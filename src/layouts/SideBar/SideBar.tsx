import React, { useContext } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import clsx from "clsx"
import { StaticImage } from "gatsby-plugin-image"
import { useAuthState } from "react-firebase-hooks/auth"
import firebase from "gatsby-plugin-firebase"

//components
import DarkModeToggler from "../../components/atoms/DarkModeToggler/DarkModeToggler"
import { CardBase } from "components/organisms"
//materialUI
import InstagramIcon from "@material-ui/icons/Instagram"
import { makeStyles } from "@material-ui/core/styles"
import {
  Drawer,
  Typography,
  Box,
  IconButton,
  Grid,
  Button,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"

//context
import { MenuContext } from "../../providers/menu/menu.providers"
import { UserContext } from "../../providers/user/user.provider"

const query = graphql`
  {
    allContentfulTypeOfActivities(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        slug
        name
      }
    }
  }
`
const useStyles = makeStyles(theme => ({
  drawer: {
    width: "100%",
    maxWidth: 400,
    zIndex: 10000,
  },
  root: {
    height: "100%",
    padding: theme.spacing(1),
    "& a": { textDecoration: "none", paddingTop: theme.spacing(2) },
    "& a:hover": {
      textDecoration: "underline",
      color: theme.palette.text.primary,
    },
  },
  logoCard: {
    backgroundColor: "black",
    /*  borderRadius: theme.shape.borderRadius, */
    "& .MuiCardContent-root": {
      padding: theme.spacing(1),
    },
  },
  nav: {
    marginBottom: theme.spacing(1),
  },
}))

interface Props {
  className?: string

  variant: "permanent" | "persistent" | "temporary" | undefined
}

const Sidebar = ({
  variant,

  className,
  ...rest
}: Props): JSX.Element => {
  const [user] = useAuthState(firebase.auth())
  const data = useStaticQuery(query)
  const { themeMode, themeToggler } = useContext(MenuContext)
  const classes = useStyles()
  const { handleSidebarClose, openSidebar } = useContext(MenuContext)
  const { logout } = useContext(UserContext)

  return (
    <Drawer
      anchor="right"
      classes={{ paper: classes.drawer }}
      onClose={() => handleSidebarClose()}
      open={openSidebar}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <Box mx={2}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <DarkModeToggler
                themeMode={themeMode}
                onClick={() => themeToggler()}
              />
            </Grid>
            <Grid item>
              <CardBase noBorder noShadow className={classes.logoCard}>
                <StaticImage
                  src="../../images/logoWhite.png"
                  width={40}
                  quality={95}
                  alt="logo Faith in Travel"
                />
              </CardBase>
            </Grid>
            <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => handleSidebarClose()}
              >
                <CloseIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
        <hr></hr>
        <Box my={4} ml={2} onClick={() => handleSidebarClose()}>
          <Link to="/">
            <Typography variant="h3" color="textPrimary">
              Home
            </Typography>
          </Link>
          {data.allContentfulTypeOfActivities.nodes.map((item, index) => {
            return (
              <Box pt={3} key={index}>
                <Link to={`/${item.slug}`}>
                  <Typography variant="h3" color="textPrimary">
                    {item.name}
                  </Typography>
                </Link>
              </Box>
            )
          })}
          <Link to="/about">
            <Box pt={3}>
              <Typography variant="h3" color="textPrimary">
                O nás
              </Typography>
            </Box>
          </Link>

          <hr></hr>
          <Grid container direction="column" spacing={2}>
            {user ? (
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  onClick={logout}
                >
                  Odhlásit se
                </Button>
              </Grid>
            ) : (
              <>
                <Grid item>
                  <Link to="/signup">
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                    >
                      Registrovat se
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/signin">
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      size="large"
                    >
                      Přihlásit se
                    </Button>
                  </Link>
                </Grid>
              </>
            )}
          </Grid>

          <hr></hr>
          <Box ml={2}>
            <IconButton edge="start" color="inherit">
              <InstagramIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </div>
    </Drawer>
  )
}

export default Sidebar
