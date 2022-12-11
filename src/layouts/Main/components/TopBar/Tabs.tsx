import React, { useEffect } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
//materialUI
import {
  makeStyles,
  Theme,
  useTheme,
  withStyles,
} from "@material-ui/core/styles"

import { Tab, useMediaQuery, Tabs, SvgIcon } from "@material-ui/core"
import PhoneIcon from "@material-ui/icons/Phone"
import FavoriteIcon from "@material-ui/icons/Favorite"
import PersonPinIcon from "@material-ui/icons/PersonPin"
import HelpIcon from "@material-ui/icons/Help"
import ShoppingBasket from "@material-ui/icons/ShoppingBasket"
import ThumbDown from "@material-ui/icons/ThumbDown"
import ThumbUp from "@material-ui/icons/ThumbUp"

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

interface StyledTabProps {
  label: string
  icon: any
}

export const query = graphql`
  {
    allContentfulTypeOfPlace(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        id
        slug
        name
      }
    }
  }
`

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}))

const AntTabs = withStyles({
  root: {},
  indicator: {},
})(Tabs)

const AntTab = withStyles(theme => ({
  root: {
    textTransform: "none",
    lineHeight: 1,
    minWidth: "50px",
    [theme.breakpoints.up("md")]: {
      marginRight: "20px",
    },
  },
}))((props: StyledTabProps) => <Tab disableRipple {...props} />)

function LinkTab(props) {
  return (
    <AntTab
      component={Link}
      /*  onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
      }} */
      {...props}
    />
  )
}

export default function ScrollableTabsButtonForce() {
  useEffect(() => {
    console.log("tabs mounted")
    return () => {
      console.log("tabs UNMOUNTED")
    }
  }, [])
  const data = useStaticQuery(query)
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState(0)
  const isLg = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  })
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AntTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={isLg ? "on" : "off"}
        indicatorColor="primary"
        textColor="primary"
        aria-label="scrollable force tabs example"
      >
        <LinkTab
          label="Home"
          to="/"
          /*    icon={
            <SvgIcon>
              <path d="M18.5,7.5v4.1a2.76,2.76,0,0,0-1.11-.23H14.64a2.87,2.87,0,0,0-1.14.24V7.5Z" />
              <rect height="4" width="3" x="14.5" y="3.5" />
              <circle cx="15.5" cy="5.5" r="0.5" />
              <path d="M20.5,14.48v13a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1v-13a3,3,0,0,1,1.87-2.74,3.16,3.16,0,0,1,1.19-.24h2.88a3,3,0,0,1,1.16.23A3,3,0,0,1,20.5,14.48Z" />
            </SvgIcon>
          } */
          {...a11yProps(0)}
        />
        {data.allContentfulTypeOfPlace.nodes.map((tab, index) => {
          return (
            <LinkTab
              label={tab.name}
              to={`/${tab.slug}`}
              /* icon={<FavoriteIcon />} */
              {...a11yProps(index + 1)}
              key={index}
            />
          )
        })}
      </AntTabs>
    </div>
  )
}
