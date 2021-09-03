import React, { useContext } from "react"
import { graphql, useStaticQuery, Link, navigate } from "gatsby"
import clsx from "clsx"
import { StaticImage } from "gatsby-plugin-image"
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
  Divider,
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
    width: "100vw",

    zIndex: 10000,
    [theme.breakpoints.up("md")]: {
      width: 400,
    },
  },
  root: {
    height: "100%",
    padding: theme.spacing(1),
    "& a": { textDecoration: "none", paddingTop: theme.spacing(2) },
    "& a:hover": {
      textDecoration: "underline",
      color: theme.palette.primary.main,
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
  const data = useStaticQuery(query)
  const {
    themeMode,
    themeToggler,
    handleSidebarClose,
    openSidebar,
  } = useContext(MenuContext)
  const classes = useStyles()
  const { logout, currentUser } = useContext(UserContext)

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
            {/*  <Grid item>
              <DarkModeToggler
                themeMode={themeMode}
                onClick={() => themeToggler()}
              />
            </Grid> */}
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
                color="primary"
                onClick={() => handleSidebarClose()}
              >
                <CloseIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
          <Box py={2}>
            <Divider orientation="horizontal" />
          </Box>
        </Box>

        <Box mx={2} onClick={() => handleSidebarClose()}>
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
          <Box py={2}>
            <Divider />
          </Box>
          <Grid container direction="column" spacing={2}>
            {currentUser ? (
              <>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    onClick={() => navigate(`/account`)}
                  >
                    Moje Oblíbené
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    size="large"
                    onClick={logout}
                  >
                    Odhlásit se
                  </Button>
                </Grid>
              </>
            ) : (
              <>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    size="large"
                    onClick={() => navigate(`/signin`)}
                  >
                    Přihlásit se
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    onClick={() => navigate(`/signup`)}
                  >
                    Registrovat se
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
          <Box py={2}>
            <Divider />
          </Box>

          <IconButton edge="start" color="primary">
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Box>
      </div>
    </Drawer>
  )
}

export default Sidebar
