import React from "react"
import { navigate } from "gatsby"

//materialUI
import { Button, Typography, Grid } from "@material-ui/core"

const noFavourite = () => {
  return (
    <div>
      <Grid direction="row" spacing={2}>
        <Grid item>
          <Typography>"Nemáte žádná oblíbená místa" </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate(`/places`)}
          >
            Objev místa
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default noFavourite
