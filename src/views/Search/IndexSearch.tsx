import React, { useContext } from "react"

//components
import TypeOfActivities from "../IndexView/components/typeOfSport/typeOfSport"
import Algolia from "../../components/own/Algolia/Algolia"
import Countries from "./components/countries"

//materialUI
import { Container, Typography, Grid, Box } from "@material-ui/core"

const IndexSearch = () => {
  return (
    <Box mt={3}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3">Hledat</Typography>
          </Grid>
          <Grid item xs={12}>
            <Algolia />
          </Grid>
          <Grid item xs={12}>
            <TypeOfActivities />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Státy</Typography>
            <Box mt={1}>
              <Countries />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default IndexSearch
