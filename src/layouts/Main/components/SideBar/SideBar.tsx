import React, { useContext } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import clsx from "clsx"

//components
import DarkModeToggler from "../../../../components/atoms/DarkModeToggler/DarkModeToggler"

//materialUI
import InstagramIcon from "@material-ui/icons/Instagram"
import { makeStyles } from "@material-ui/core/styles"
import { Drawer, Typography, Box, IconButton, Grid } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"

//context
import { MenuContext } from "../../../../providers/menu/menu.providers"

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
    maxWidth: 325,
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
  const classes = useStyles()
  const { handleSidebarClose, openSidebar } = useContext(MenuContext)
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
              <DarkModeToggler />
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
        <Box my={4} ml={2}>
          <Link to="/">
            <Typography variant="h4" color="textPrimary">
              Home
            </Typography>
          </Link>
          {data.allContentfulTypeOfActivities.nodes.map((item, index) => {
            return (
              <div key={index}>
                <Link to={`/${item.slug}`}>
                  <Typography variant="h4" color="textPrimary">
                    {item.name}
                  </Typography>
                </Link>
              </div>
            )
          })}
          <Link to="/about">
            <Typography variant="h4" color="textPrimary">
              O nás
            </Typography>
          </Link>
        </Box>
        <Box ml={2}>
          <IconButton edge="start" color="inherit">
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Box>
      </div>
    </Drawer>
  )
}

export default Sidebar
