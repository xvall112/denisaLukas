import React, { useContext } from "react"

//components
import { CardBase } from "components/organisms"
import { IconAlternate } from "components/molecules"

//material Ui
import { Box, Grid, Typography, colors, Tooltip } from "@material-ui/core"
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
}
const DescribeSection = ({
  children,
  title,
  time,
  parkingGps,
}: Props): JSX.Element => {
  const { copyLocationToClipboard } = useContext(MapContext)
  const classes = useStyles()
  return (
    <>
      <Grid item xs={12}>
        <CardBase withShadow variant="outlined" align="left">
          <>
            <Grid container direction="row" alignItems="center">
              <Grid item xs={12} md={4}>
                <Typography variant="h5">
                  <Box fontWeight="600" mb={{ xs: 2, md: 0 }}>
                    {title}
                  </Box>
                </Typography>
              </Grid>
              {time && (
                <Grid
                  item
                  md={4}
                  xs={6}
                  container
                  direction="row"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <IconAlternate
                      fontIconClass="far fa-clock"
                      size="small"
                      color={colors.pink}
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
                    xs={6}
                    container
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    onClick={() => copyLocationToClipboard(location)}
                    className={classes.location}
                  >
                    <Grid item>
                      <IconAlternate
                        fontIconClass="fas fa-parking"
                        size="small"
                        color={colors.pink}
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
            <Box mt={2}>{children}</Box>
          </>
        </CardBase>
      </Grid>
    </>
  )
}

export default DescribeSection
