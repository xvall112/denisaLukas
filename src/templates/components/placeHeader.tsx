import React, { useContext, useEffect } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

//components
import FlagChip from "../../components/own/flagChip"
import { SectionHeader } from "components/molecules"
//material Ui
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import FavoriteIcon from "@material-ui/icons/Favorite"
import { makeStyles } from "@material-ui/core/styles"
import Rating from "@material-ui/lab/Rating"
import {
  Grid,
  Chip,
  Typography,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Tooltip,
  Divider,
} from "@material-ui/core"

//context
import { MapContext } from "../../providers/map/map.providers"
import { UserContext } from "../../providers/user/user.provider"

const useStyles = makeStyles(theme => ({
  flag: {
    borderRadius: theme.spacing(0.5),
  },
}))

interface Props {
  kindPlace: string[]
  country: {
    name: string
    flagLink: string
  }
  adress: string
  name: string
  location: { lat: number; lon: number }
  id: string
  rating: number
}

const PlaceHeader = ({
  kindPlace,
  country,
  name,
  adress,
  location,
  id,
  rating,
}: Props): JSX.Element => {
  const { changeMap, map, copyLocationToClipboard } = useContext(MapContext)

  const { addFavouriteItem, favouriteItems, removeFavouriteItem } = useContext(
    UserContext
  )

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
              {kindPlace.map((item, index) => {
                return (
                  <Box mr={1} key={index}>
                    <Chip label={item} />
                  </Box>
                )
              })}
              <FlagChip
                name={country.name}
                flagLink={country.flagLink}
                className={classes.flag}
                width={40}
              />
            </Grid>
          </Grid>

          <Grid item>
            {favouriteItems.includes(id) ? (
              <Tooltip
                title="Odebrat z oblíbených"
                aria-label="Odebrat z oblíbených"
              >
                <IconButton
                  aria-label="remove from favourite"
                  onClick={() => removeFavouriteItem(id)}
                  color="primary"
                >
                  <FavoriteIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip
                title="Přidat do oblíbených"
                aria-label="Přidat do oblíbených"
              >
                <IconButton
                  color="primary"
                  aria-label="add to favourite"
                  onClick={() => addFavouriteItem(id)}
                >
                  <FavoriteBorderIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            )}
          </Grid>
        </Grid>
        <Rating
          name="half-rating-read"
          defaultValue={rating || 5}
          precision={0.5}
          readOnly
          size="small"
        />
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
        <Divider />
      </Box>
    </>
  )
}

export default PlaceHeader
