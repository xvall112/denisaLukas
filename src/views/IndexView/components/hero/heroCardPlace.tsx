import React from "react"

import { Button, Grid, Box, Typography, colors } from "@material-ui/core"
import CardBase from "../../../../components/organisms/CardBase/CardBase"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import IconText from "../../../../components/atoms/IconText/IconText"
import LocationOnIcon from "@material-ui/icons/LocationOn"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      minWidth: "100%",
      backgroundColor: "rgba(255,255,255,0.3)",
      WebkitBackdropFilter: "blur(2px)  brightness(15%) opacity(28%)",
      borderRadius: "25px",
      cursor: "pointer",
    },
  })
)

interface Props {
  name: string
}
const HeroCardPlace = ({ name }: Props): JSX.Element => {
  const classes = useStyles()
  return (
    <Box
      marginBottom={2}
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      border="1px solid #ccc"
      borderRadius="25px"
      width="100%"
    >
      <CardBase variant="outlined" className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center">
          <LocationOnIcon />
          <Box fontWeight="bold" ml={2}>
            {name}
          </Box>
        </Grid>
      </CardBase>
    </Box>
  )
}

export default HeroCardPlace
