import React, { useContext } from "react"

//material Ui
import { IconButton, Snackbar } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import Alert from "@material-ui/lab/Alert"

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
