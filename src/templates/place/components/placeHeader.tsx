import React from "react"

//components
import FlagChip from "../../../components/own/flagChip"
import { SectionHeader } from "components/molecules"
//material Ui
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import { makeStyles } from "@material-ui/core/styles"
import {
  Grid,
  Chip,
  Typography,
  Box,
  Button,
  ButtonGroup,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  flag: {
    borderRadius: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
  },
}))

interface Props {
  kindPlace: string
  country: {
    name: string
    flagLink: string
  }
  adress: string
  name: string
  location: { lat: number; lon: number }
  map: boolean
  changeMap: () => void
}

const PlaceHeader = ({
  kindPlace,
  country,
  name,
  adress,
  location,
  map,
  changeMap,
}: Props): JSX.Element => {
  const classes = useStyles()

  const copyLocationToClipboard = location => {
    navigator.clipboard.writeText(`${location.lat} ${location.lon}`)
  }

  return (
    <div>
      <Box my={2}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Grid item>
            <Grid container>
              <Chip label={kindPlace} />
              <FlagChip
                name={country.name}
                flagLink={country.flagLink}
                className={classes.flag}
                width={40}
              />
            </Grid>
          </Grid>
          <Grid item>
            <FavoriteBorderIcon fontSize="large" />
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" justifyContent="space-evenly" alignItems="center">
        <SectionHeader
          title={name}
          subtitle={adress}
          align="left"
          titleVariant="h3"
          fadeUp
        />
      </Box>
      <Box mt={-2} mb={2}>
        <Grid container direction="row">
          <Typography variant="subtitle1">GPS: &nbsp; </Typography>
          <Typography variant="subtitle1">
            {location.lat.toFixed(5)}, {location.lon.toFixed(5)}
          </Typography>
        </Grid>
      </Box>
      <Box alignItems="center" display="flex" mb={2}>
        <ButtonGroup
          fullWidth
          color="primary"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => changeMap()}>{map ? "FOTKY" : "MAPA"}</Button>
          <Button onClick={() => copyLocationToClipboard(location)}>
            KOPIROVAT GPS
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  )
}

export default PlaceHeader
