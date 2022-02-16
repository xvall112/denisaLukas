import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import {
  AppBar,
  Grid,
  Container,
  Box,
  Tab,
  Tabs,
  Chip,
} from "@material-ui/core"

//components
import PlacesCountry from "./components/PlacesCountry"
import FerrataCountry from "./components/FerrataCountry"
import Result from "../../../views/BlogSearch/components/Result/Result"

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
  appBar: {
    position: "sticky",
    top: "55px",
  },
}))

export default function TabPane({ places, ferrata, country, blog }) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar color="default" className={classes.appBar}>
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
            <Tab
              label={
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>Místa</Grid>
                  <Grid item>
                    <Chip size="small" label={places.length} />
                  </Grid>
                </Grid>
              }
              {...a11yProps(0)}
            />

            <Tab
              label={
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>via Ferrata</Grid>
                  <Grid item>
                    <Chip size="small" label={ferrata.length} />
                  </Grid>
                </Grid>
              }
              {...a11yProps(1)}
            />
            <Tab
              label={
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>Hiking</Grid>
                  <Grid item>
                    <Chip size="small" label={ferrata.length} />
                  </Grid>
                </Grid>
              }
              {...a11yProps(2)}
            />
            <Tab
              label={
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>Blog</Grid>
                  <Grid item>
                    <Chip size="small" label={blog.length} />
                  </Grid>
                </Grid>
              }
              {...a11yProps(3)}
            />

            {/* <Tab label="Hiking" {...a11yProps(2)} />
            <Tab label="Cyklo" {...a11yProps(3)} /> */}
          </Tabs>
        </Container>
      </AppBar>
      <TabPanel value={value} index={0}>
        <PlacesCountry places={places} country={country} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PlacesCountry places={ferrata} country={country} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PlacesCountry places={ferrata} country={country} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Result data={blog} />
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
