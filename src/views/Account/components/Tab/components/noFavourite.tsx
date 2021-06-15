import React from "react"
import { navigate } from "gatsby"

//materialUI
import { Button, Typography, Grid } from "@material-ui/core"

interface Props {
  title: string
  button: string
  slug: string
}
const noFavourite = ({ title, button, slug }: Props): JSX.Element => {
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item>
          <Button
            size="large"
            variant="outlined"
            color="primary"
            onClick={() => navigate(`${slug}`)}
          >
            {button}
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default noFavourite
