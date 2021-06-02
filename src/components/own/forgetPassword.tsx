import React, { useContext } from "react"
import { useFormik } from "formik"
import * as yup from "yup"
//materialUI
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core"

//context
import { UserContext } from "../../providers/user/user.provider"

const validationSchema = yup.object({
  email: yup
    .string()
    .email("špatný tvar emailu")
    .required("Email není vyplňen"),
})

const ForgetPassword = () => {
  const { isOpenResetPassword, handleCloseResetPassword } = useContext(
    UserContext
  )

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      /* resetPasswordStart(values.email); */
      formik.resetForm({})
    },
  })
  return (
    <div>
      <Dialog
        fullWidth
        open={isOpenResetPassword}
        onClose={handleCloseResetPassword}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle id="form-dialog-title">Resetování hesla</DialogTitle>
          <DialogContent>
            <DialogContentText>Zadejte email pro reset hesla</DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseResetPassword} color="primary">
              Zrušit
            </Button>
            <Button type="submit" color="primary">
              Odeslat
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}

export default ForgetPassword
