import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },

  titleCta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}))

const Security = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <div className={classes.titleCta}>
            <Typography variant="h6" color="textPrimary">
              Zmměnit heslo
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Současné heslo
          </Typography>
          <TextField
            placeholder="Současné heslo"
            variant="outlined"
            size="medium"
            name="fullname"
            fullWidth
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Nové heslo
          </Typography>
          <TextField
            placeholder="Nové heslo"
            variant="outlined"
            size="medium"
            name="fullname"
            fullWidth
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Opakovat nové heslo
          </Typography>
          <TextField
            placeholder="Opakovat nové heslo"
            variant="outlined"
            size="medium"
            name="fullname"
            fullWidth
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <Divider />
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
      </Grid>
    </div>
  )
}

export default Security
