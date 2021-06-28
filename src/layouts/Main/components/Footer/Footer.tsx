import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, IconButton, Grid, List, ListItem } from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"
import PinterestIcon from "@material-ui/icons/Pinterest"

import { Image } from "components/atoms"

export const query = graphql`
  {
    allContentfulCountry(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        name
        slug
      }
    }
    allContentfulTypeOfActivities(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        slug
        name
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(12, 0),
    },
    background: theme.palette.background.footer,
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 8),
    },
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  logoContainer: {
    width: 120,
    height: 32,
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  groupTitle: {
    textTransform: "uppercase",
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: "rgba(255,255,255,.6)",
    "&:hover": {
      background: "transparent",
    },
    "&:last-child": {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
  menuListContainer: {
    padding: "0 !important",
  },
  menu: {
    display: "flex",
  },
  menuItem: {
    margin: theme.spacing(2),
    "&:last-child": {
      marginBottom: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    "&:last-child": {
      paddingBottom: 0,
    },
    "& a": {
      textDecoration: "none",
    },
  },
  menuGroupTitle: {
    textTransform: "uppercase",
    color: "white",
  },
  divider: {
    width: "100%",
  },
  navLink: {
    color: "rgba(255,255,255,.6)",
  },
}))

interface Props {
  className?: string
}

const Footer = ({ className, ...rest }: Props): JSX.Element => {
  const classes = useStyles()
  const data = useStaticQuery(query)

  const countries = data.allContentfulCountry.nodes
  const typeOfActivities = data.allContentfulTypeOfActivities.nodes
  const account = [
    { name: "Přihlásit se", slug: "signin" },
    { name: "Registrovat se", slug: "signup" },
  ]

  const MenuGroup = ({ item, name }): JSX.Element => (
    <List disablePadding className={classes.menuItem}>
      <ListItem disableGutters className={classes.menuGroupItem}>
        <Typography variant="body2" className={classes.menuGroupTitle}>
          {name}
        </Typography>
      </ListItem>
      {item.map((page, i) => (
        <ListItem disableGutters key={i} className={classes.menuGroupItem}>
          <Link to={`/${page.slug}`}>
            <Typography
              variant="body2"
              className={clsx(classes.navLink, "submenu-item")}
            >
              {page.name}
            </Typography>
          </Link>
        </ListItem>
      ))}
    </List>
  )

  const LandingPages = (): JSX.Element => {
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={typeOfActivities} name={"Druh"} />
        </div>
        <div>
          <MenuGroup item={countries} name={"Země"} />
        </div>
      </div>
    )
  }

  const AccountPages = (): JSX.Element => {
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={account} name={"Účet"} />
        </div>
      </div>
    )
  }

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={2}>
            <List disablePadding>
              <ListItem disableGutters className={classes.logoContainerItem}>
                <div className={classes.logoContainer}>
                  <Link to="/" title="Faith Travel">
                    <StaticImage
                      src="../../../../images/logoWhite.png"
                      width={40}
                      quality={95}
                      alt="logo Faith in Travel"
                    />
                  </Link>
                </div>
                <Typography variant="body2">Faith In Travel</Typography>
              </ListItem>
              <ListItem disableGutters>
                <IconButton className={classes.socialIcon}>
                  <FacebookIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <InstagramIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <TwitterIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <PinterestIcon className={classes.icon} />
                </IconButton>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={10} className={classes.menuListContainer}>
            <Grid container spacing={0}>
              <Grid item>
                <LandingPages />
              </Grid>

              <Grid item>
                <AccountPages />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
