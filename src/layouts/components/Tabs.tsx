import React from "react"
import {
  makeStyles,
  Theme,
  useTheme,
  withStyles,
} from "@material-ui/core/styles"

import Tabs from "@material-ui/core/Tabs"
import { Tab, useMediaQuery } from "@material-ui/core"
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

export default function ScrollableTabsButtonForce() {
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
        <AntTab label="Item One" icon={<PhoneIcon />} {...a11yProps(0)} />
        <AntTab label="Item Two" icon={<FavoriteIcon />} {...a11yProps(1)} />
        <AntTab label="Item Three" icon={<PersonPinIcon />} {...a11yProps(2)} />
        <AntTab label="Item Four" icon={<HelpIcon />} {...a11yProps(3)} />
        <AntTab label="Item Five" icon={<ShoppingBasket />} {...a11yProps(4)} />
        <AntTab label="Item Six" icon={<ThumbDown />} {...a11yProps(5)} />
        <AntTab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} />
      </AntTabs>
    </div>
  )
}
