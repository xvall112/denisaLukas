import React from "react"

//materialUI

import { Box, Grid } from "@material-ui/core"
import ExploreIcon from "@material-ui/icons/Explore"
import { number } from "prop-types"

interface Props {
  location: {
    lat: number
    lon: number
  }
}

const Location = ({ location }: Props): JSX.Element => {
  return (
    <Grid container direction="row" justify="flex-start" alignItems="center">
      <Grid item>
        <Box mr={1}>
          <ExploreIcon fontSize="large" />
        </Box>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item>{location.lat.toFixed(5)}</Grid>
          <Grid item>{location.lon.toFixed(5)}</Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Location
