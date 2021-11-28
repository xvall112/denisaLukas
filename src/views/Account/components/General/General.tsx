import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  FormControlLabel,
  Switch,
  Box,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  switchTitle: {
    fontWeight: 700,
  },
}))

const General = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  return (
    <Box className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <Typography variant="h6" color="textPrimary">
            Uživatel
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Jméno
          </Typography>
          <TextField
            placeholder="Jméno"
            variant="outlined"
            size="medium"
            name="fullname"
            fullWidth
            type="text"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            E-mail
          </Typography>
          <TextField
            placeholder="E-mail"
            variant="outlined"
            size="medium"
            name="email"
            fullWidth
            type="email"
          />
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Switch color="primary" />}
            label={
              <Typography
                variant="subtitle1"
                color="textPrimary"
                className={classes.switchTitle}
              >
                Odebírat novinky
              </Typography>
            }
            labelPlacement="end"
          />
        </Grid>
        <Grid item container justify="flex-start" xs={12}>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            size="large"
          >
            Uložit
          </Button>
        </Grid>
        {/*  <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Bio
          </Typography>
          <TextField
            placeholder="Your bio"
            variant="outlined"
            name="bio"
            fullWidth
            multiline
            rows={4}
          />
        </Grid> */}
        {/*  <Grid item xs={12}>
          <Divider />
        </Grid> */}
        {/*  <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Country
          </Typography>
          <TextField
            placeholder="Country"
            variant="outlined"
            size="medium"
            name="country"
            fullWidth
            type="text"
          />
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            City
          </Typography>
          <TextField
            placeholder="City"
            variant="outlined"
            size="medium"
            name="city"
            fullWidth
            type="text"
          />
        </Grid> */}
        {/*  <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Full Address
          </Typography>
          <TextField
            placeholder="Your address"
            variant="outlined"
            size="medium"
            name="address"
            fullWidth
            type="text"
          />
        </Grid> */}
      </Grid>
    </Box>
  )
}

export default General
