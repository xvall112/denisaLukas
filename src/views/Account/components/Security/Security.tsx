import React, { useContext } from "react"
import { useFormik } from "formik"
import * as yup from "yup"
//materialUI
import { makeStyles, useTheme } from "@material-ui/core/styles"
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  CircularProgress,
} from "@material-ui/core"
import Alert from "@material-ui/lab/Alert"
//context
import { UserContext } from "../../../../providers/user/user.provider"

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

const validationSchema = yup.object({
  password: yup
    .string()
    .min(6, "Heslo musí mít nejméně 6 znaků")
    .required("Heslo není vyplňeno"),
  passwordConfirmation: yup
    .string()
    .required("Hesla nesouhlasí")
    .oneOf([yup.ref("password"), null], "Hesla nesouhlasí"),
})

const Security = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const { updatePassword, error, loading } = useContext(UserContext)

  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      await updatePassword(values.password)
      await formik.resetForm({})
    },
  })

  const classes = useStyles()
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  return (
    <div className={className} {...rest}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={isMd ? 4 : 2}>
          {error && (
            <Grid item xs={12}>
              <Alert variant="filled" severity="error">
                {error.message}
              </Alert>
            </Grid>
          )}
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
          {/*  <Grid item xs={12}>
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
        </Grid> */}
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
              name="password"
              fullWidth
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
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
              name="passwordConfirmation"
              fullWidth
              type="password"
              value={formik.values.passwordConfirmation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.passwordConfirmation &&
                Boolean(formik.errors.passwordConfirmation)
              }
              helperText={
                formik.touched.passwordConfirmation &&
                formik.errors.passwordConfirmation
              }
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
              startIcon={loading ? <CircularProgress size={14} /> : null}
              disabled={!formik.isValid || loading}
            >
              Uložit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default Security
