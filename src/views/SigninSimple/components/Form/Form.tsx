import React, { useContext } from "react"
import { useFormik } from "formik"
import * as yup from "yup"

//materialUI
import { makeStyles } from "@material-ui/core/styles"
import {
  Typography,
  Grid,
  Button,
  TextField,
  CircularProgress,
} from "@material-ui/core"
import { LearnMoreLink } from "components/atoms"
import Alert from "@material-ui/lab/Alert"

//context
import { UserContext } from "../../../../providers/user/user.provider"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
}))

const validationSchema = yup.object({
  email: yup
    .string()
    .email("špatný tvar emailu")
    .required("Email není vyplňen"),
  password: yup.string().required("Heslo není vyplňeno"),
})

const Form = (): JSX.Element => {
  const classes = useStyles()
  const { loading, error, signIn, SignInByGoogle } = useContext(UserContext)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      await signIn(values.email, values.password)
      await formik.resetForm({})
    },
  })

  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          {error && (
            <Grid item xs={12}>
              <Alert variant="filled" severity="error">
                {error.message}
              </Alert>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="primary"
              onClick={SignInByGoogle}
              size="large"
              fullWidth
              disabled={loading}
              startIcon={loading ? <CircularProgress size={14} /> : null}
            >
              Pomocí Google
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center">nebo</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="E-mail"
              label="E-mail *"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Heslo"
              label="Heslo *"
              variant="outlined"
              size="medium"
              name="password"
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              type="password"
            />
          </Grid>
          {/*  <Grid item xs={12}>
            <i>
              <Typography variant="subtitle2">
                Pole s * jsou povinné.
              </Typography>
            </i>
          </Grid> */}
          <Grid item xs={12}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
              startIcon={loading ? <CircularProgress size={14} /> : null}
              disabled={!formik.isValid || loading}
            >
              Přihlásit se
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              align="center"
            >
              Zapomněli jste heslo?{" "}
              <LearnMoreLink title="Resetovat heslo" href="/password-reset" />
            </Typography>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default Form
