import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { AppBar, Grid, Container, Box, Tab, Tabs } from "@material-ui/core"

//components
import PlacesCountry from "./components/PlacesCountry"
import FerrataCountry from "./components/FerrataCountry"

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container maxWidth="xl">
          <div>{children}</div>
        </Container>
      )}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function TabPane({ places, ferrata }) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }
  console.log("ferrata:", ferrata.nodes.length)
  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="default">
        <Container maxWidth="xl">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Místa" {...a11yProps(0)} />
            {ferrata.nodes.length !== 0 && (
              <Tab label=" via Ferrata" {...a11yProps(1)} />
            )}

            {/* <Tab label="Hiking" {...a11yProps(2)} />
            <Tab label="Cyklo" {...a11yProps(3)} /> */}
          </Tabs>
        </Container>
      </AppBar>

      <TabPanel value={value} index={0}>
        <PlacesCountry places={places} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FerrataCountry ferrata={ferrata} />
      </TabPanel>
      {/*  <TabPanel value={value} index={2}>
        Pracujeme na tom
      </TabPanel>
      <TabPanel value={value} index={3}>
        Pracujeme na tom
      </TabPanel> */}
    </div>
  )
}
