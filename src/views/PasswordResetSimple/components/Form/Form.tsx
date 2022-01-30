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
const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
}))

const validationSchema = yup.object({
  email: yup
    .string()
    .email("špatný tvar emailu")
    .required("Email není vyplňen"),
})

const Form = (): JSX.Element => {
  const classes = useStyles()
  const { resetPassword, loading, error } = useContext(UserContext)
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      await resetPassword(values.email)
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
                {error}
              </Alert>
            </Grid>
          )}
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
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
              disabled={!formik.isValid || loading}
            >
              {loading ? <CircularProgress /> : " Resetovat heslo "}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              align="center"
            >
              Vzpomněli jste si na heslo?{" "}
              <LearnMoreLink title="Přihlásit se" href="/app/login" />
            </Typography>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default Form
