import React, { useContext } from "react"

//material Ui
import { IconButton, Snackbar } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"

//context
import { MapContext } from "../../providers/map/map.providers"

const SnackbarToast = () => {
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

export default SnackbarToast
