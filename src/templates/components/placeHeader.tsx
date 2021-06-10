import React, { useContext, useEffect } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

//components
import FlagChip from "../../components/own/flagChip"
import { SectionHeader } from "components/molecules"
//material Ui
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import FavoriteIcon from "@material-ui/icons/Favorite"
import { makeStyles } from "@material-ui/core/styles"
import {
  Grid,
  Chip,
  Typography,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Snackbar,
} from "@material-ui/core"

//context
import { MapContext } from "../../providers/map/map.providers"
import { UserContext } from "../../providers/user/user.provider"

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
  id: string
}

const PlaceHeader = ({
  kindPlace,
  country,
  name,
  adress,
  location,
  id,
}: Props): JSX.Element => {
  const { changeMap, map, copyLocationToClipboard } = useContext(MapContext)

  const {
    currentUser,
    addFavouriteItem,
    favouriteItems,
    removeFavouriteItem,
  } = useContext(UserContext)

  const classes = useStyles()
  console.log(favouriteItems)

  const isFavourite = favouriteItems.includes(id)

  const changeMapPhoto = () => {
    scrollTo("#topBar")
    changeMap()
  }
  return (
    <>
      {/*  komponenta */}
      <Box my={2}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Grid item>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
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
            <IconButton
              onClick={
                !isFavourite
                  ? () => addFavouriteItem(/* currentUser, */ id)
                  : () => removeFavouriteItem(/* currentUser, */ id)
              }
            >
              {isFavourite ? (
                <FavoriteIcon fontSize="large" />
              ) : (
                <FavoriteBorderIcon fontSize="large" />
              )}
            </IconButton>
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
          <Button onClick={() => changeMapPhoto()}>
            {map ? "FOTKY" : "MAPA"}
          </Button>
          <Button onClick={() => copyLocationToClipboard(location)}>
            KOPIROVAT GPS
          </Button>
        </ButtonGroup>
      </Box>
      <Box mb={3}>
        <hr></hr>
      </Box>
    </>
  )
}

export default PlaceHeader
