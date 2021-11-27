import React, { useContext } from "react"
import { navigate } from "gatsby"

//material Ui
import { IconButton, Snackbar } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import Alert from "@material-ui/lab/Alert"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Button from "@material-ui/core/Button"
//context
import { MapContext } from "../../providers/map/map.providers"
import { UserContext } from "../../providers/user/user.provider"

export const SnackbarMap = () => {
  const { handleCloseToast, snackbar, snackbarMessage } = useContext(MapContext)

  return (
    <div style={{ zIndex: 100000 }}>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={snackbar}
        autoHideDuration={5000}
        onClose={handleCloseToast}
        message={snackbarMessage}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => handleCloseToast()}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  )
}

export const SnackbarUser = () => {
  const { isUserSnackbarOpen, closeUserSnackbar, snackbarMessage } = useContext(
    UserContext
  )
  return (
    <div>
      <Snackbar
        open={isUserSnackbarOpen}
        autoHideDuration={6000}
        onClose={closeUserSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" onClose={closeUserSnackbar}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  )
}

export const Modal = () => {
  const { isModalOpen, closeModal } = useContext(UserContext)
  return (
    <div>
      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Přidat do oblíbených"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Pokud chcete aplikaci využívat na plno, je potřeba se přihlásit
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              closeModal(), navigate(`/app/login`)
            }}
            color="primary"
            variant="outlined"
            autoFocus
          >
            Přihlásit se
          </Button>
          <Button
            onClick={() => {
              closeModal(), navigate(`/signup`)
            }}
            color="primary"
            variant="contained"
          >
            Registrovat se
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
