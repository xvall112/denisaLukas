import React, { useContext } from "react"
import SEO from "../../components/own/seo"
import MenuLayout from "../../layouts/Menu/MenuLayout"
import { navigate } from "gatsby"
import { parse } from "query-string"
import { makeStyles } from "@material-ui/core/styles"
import {
  Box,
  Grid,
  Typography,
  Container,
  Avatar,
  Button,
} from "@material-ui/core"
import { CardBase } from "components/organisms"
import { Hero, General, Security } from "./components"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"

//context
import { UserContext } from "../../providers/user/user.provider"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%",
  },
  section: {
    "& .section-alternate__content": {
      paddingTop: 0,
      marginTop: theme.spacing(-5),
      position: "relative",
      zIndex: 1,
    },
    "& .card-base__content": {
      padding: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(3),
      },
    },
  },
  menu: {
    height: "auto",
    backgroundColor: theme.palette.background.level2,
    [theme.breakpoints.up("md")]: { position: "sticky", top: 30 },
  },
  list: {
    display: "inline-flex",
    overflow: "auto",
    flexWrap: "nowrap",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "column",
      marginRight: theme.spacing(-3),
      marginLeft: theme.spacing(-3),
    },
  },
  listItem: {
    marginRight: theme.spacing(2),
    flex: 0,
    [theme.breakpoints.up("md")]: {
      paddingRight: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      borderLeft: "2px solid transparent",
    },
  },
  listItemActive: {
    [theme.breakpoints.up("md")]: {
      borderLeft: `2px solid ${theme.palette.primary.dark}`,
    },
    "& .menu__item": {
      color: theme.palette.text.primary,
    },
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    height: "100px",
    width: "100px",
  },
}))

interface TabPanelProps {
  children: JSX.Element
  value: string | string[] | number | null
  index: string | string[] | number | null
}

const TabPanel = ({
  children,
  value,
  index,
  ...other
}: TabPanelProps): JSX.Element => (
  <Box component="div" hidden={value !== index} {...other}>
    {value === index && children}
  </Box>
)

const Account = (): JSX.Element => {
  const classes = useStyles()
  let pageId = parse(window.location.search).pid || "general"
  const { currentUser } = useContext(UserContext)

  return (
    <div className={classes.root}>
      {/* <Hero /> */}
      <Container maxWidth="xl" className={classes.section}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box mt={2}>
              <Button
                color="primary"
                startIcon={<ArrowBackIosIcon />}
                onClick={() => navigate(-1)}
              >
                Zpět
              </Button>
            </Box>
            {/* <Box mt={2}>
                <Grid container direction="row">
                  <ArrowBackIosIcon color="primary" />
                  <Typography color="primary">Zpět</Typography>
                </Grid>
              </Box> */}
          </Grid>
          <Grid item xs={12} md={4}>
            <CardBase withShadow align="left" className={classes.menu}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <Avatar
                    src={currentUser.photoURL}
                    className={classes.avatar}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h4">
                    {currentUser.displayName}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">{currentUser.email}</Typography>
                </Grid>
              </Grid>
            </CardBase>
          </Grid>
          <Grid container item xs={12} md={8}>
            <Grid item xs={12}>
              <Box mb={2}>
                <CardBase withShadow align="left" className={classes.menu}>
                  <General />
                </CardBase>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <CardBase withShadow align="left" className={classes.menu}>
                <Security />
              </CardBase>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

const AccounSettings = (): JSX.Element => {
  return (
    <>
      <SEO title="nastaveni" />
      <MenuLayout>
        <Account />
      </MenuLayout>
    </>
  )
}

export default AccounSettings
