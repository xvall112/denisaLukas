import React, { useContext } from "react"

//components
import { IconAlternate } from "components/molecules"

//material Ui
import {
  Box,
  Grid,
  Typography,
  colors,
  Tooltip,
  Divider,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

//context
import { MapContext } from "../../../providers/map/map.providers"

const useStyles = makeStyles(theme => ({
  root: {},
  location: {
    cursor: "pointer",
  },
}))
interface Props {
  children: any
  title: string
  time?: number
  parkingGps?: { lat: number; lon: number }
  icon: string
}
const DescribeSection = ({
  children,
  title,
  time,
  parkingGps,
  icon,
}: Props): JSX.Element => {
  const { copyLocationToClipboard } = useContext(MapContext)
  const classes = useStyles()
  return (
    <>
      <Box mb={4}>
        <Grid item xs={12}>
          <>
            <Grid container direction="row" alignItems="center">
              <Grid
                item
                container
                direction="row"
                alignItems="center"
                xs={7}
                md={4}
              >
                <Grid item>
                  <IconAlternate
                    fontIconClass={icon}
                    size="small"
                    color={colors.amber}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5">
                    <Box fontWeight="600" ml={1}>
                      {title}
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
              {time && (
                <Grid
                  item
                  md={4}
                  xs={5}
                  container
                  direction="row"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <IconAlternate
                      fontIconClass="far fa-clock"
                      size="small"
                      color={colors.amber}
                    />
                  </Grid>
                  <Grid item>
                    <Typography>{`${time} min`}</Typography>
                  </Grid>
                </Grid>
              )}
              {parkingGps && (
                <Tooltip title="Zkopírovat GPS" placement="bottom-start">
                  <Grid
                    item
                    md={4}
                    xs={5}
                    container
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    onClick={() => copyLocationToClipboard(parkingGps)}
                    className={classes.location}
                  >
                    <Grid item>
                      <IconAlternate
                        fontIconClass="fas fa-compass"
                        size="small"
                        color={colors.amber}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>
                        {" "}
                        {parkingGps.lat.toFixed(5)}
                        <br></br>
                        {parkingGps.lon.toFixed(5)}
                      </Typography>
                    </Grid>
                  </Grid>
                </Tooltip>
              )}
            </Grid>
            <Box my={2}>{children}</Box>
            <Divider />
          </>
        </Grid>
      </Box>
    </>
  )
}

export default DescribeSection
