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
  location: { lat: number; lon: number }
  description: string
  time: number
  title: string
  iconLocation: string
}
const DescribeSection = ({
  title,
  iconLocation,
  location,
  description,
  time,
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
                    color={colors.amber}
                  />
                </Grid>
                <Grid item>
                  <Typography>{`${time} min`}</Typography>
                </Grid>
              </Grid>
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
                      fontIconClass={iconLocation}
                      size="small"
                      color={colors.amber}
                    />
                  </Grid>
                  <Grid item>
                    <Typography>
                      {" "}
                      {location.lat.toFixed(5)}
                      <br></br>
                      {location.lon.toFixed(5)}
                    </Typography>
                  </Grid>
                </Grid>
              </Tooltip>
            </Grid>
            <Box mt={2}>
              <Typography>{description}</Typography>
            </Box>
          </>
        </CardBase>
      </Grid>
    </>
  )
}

export default DescribeSection
