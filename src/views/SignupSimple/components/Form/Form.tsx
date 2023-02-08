import React, { useContext } from "react"
import { useFormik } from "formik"
import * as yup from "yup"
//context
import { UserContext } from "../../../../providers/user/user.provider"
//materialUI
import { makeStyles } from "@material-ui/core/styles"
import {
  Typography,
  Grid,
  Button,
  TextField,
  CircularProgress,
} from "@material-ui/core"
import Alert from "@material-ui/lab/Alert"
import { LearnMoreLink } from "components/atoms"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
}))

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Jejda máte špatný tvar emailu")
    .required("Email není vyplňen"),
  password: yup
    .string()
    .min(6, "Heslo musí mít nejméně 6 znaků")
    .required("Heslo není vyplňeno"),
  passwordConfirmation: yup
    .string()
    .required("Hesla nesouhlasí")
    .oneOf([yup.ref("password"), null], "Hesla nesouhlasí"),
  name: yup.string().required("Jméno není vyplňeno"),
})

const Form = (): JSX.Element => {
  const classes = useStyles()
  const { signUp, loading, error, SignInByGoogle } = useContext(UserContext)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      passwordConfirmation: "",
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      await signUp(values.email, values.password, values.name)
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
              placeholder="Jméno"
              label="Jméno *"
              variant="outlined"
              size="medium"
              name="name"
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              type="firstName"
            />
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
          <Grid item xs={12}>
            <TextField
              placeholder="Ověření hesla"
              variant="outlined"
              fullWidth
              id="passwordConfirmation"
              name="passwordConfirmation"
              label="Ověření hesla *"
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
          {/* <Grid item xs={12}>
            <i>
              <Typography variant="subtitle2">
                Pole s * jsou vyžadovány.
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
              Registrovat se
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              align="center"
            >
              Už jste registrováni?{" "}
              <LearnMoreLink title="Přihlásit se" href="/app/login" />
            </Typography>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default Form
