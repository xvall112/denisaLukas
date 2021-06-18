import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MapContext } from "../../../providers/map/map.providers"
//materialUI
import { makeStyles } from "@material-ui/core/styles"
import {
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
  Grid,
} from "@material-ui/core"

const query = graphql`
  {
    allContentfulCountry(
      sort: { fields: name, order: ASC }
      filter: { node_locale: { eq: "cs" } }
    ) {
      nodes {
        name
        countryCenterLocation {
          lat
          lon
        }
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 100000,
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const Filter = () => {
  const data = useStaticQuery(query)
  const { filterCountry, setFilterCountry } = useContext(MapContext)
  const classes = useStyles()

  const filter = event => {
    if (event.target.value !== "") {
      const country = data.allContentfulCountry.nodes.find(
        item => item.name === event.target.value
      )
      setFilterCountry(
        country.name,
        country.countryCenterLocation.lat,
        country.countryCenterLocation.lon,
        7
      )
    } else {
      setFilterCountry("")
    }
  }
  return (
    <div className={classes.root}>
      <Grid container direction="row" spacing={1}>
        <Grid item>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Země</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={filterCountry}
              onChange={filter}
              label="country"
            >
              <MenuItem value="">
                <em>Vše</em>
              </MenuItem>
              {data.allContentfulCountry.nodes.map((item, index) => {
                return (
                  <MenuItem value={item.name} key={index}>
                    {item.name}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid>
        {/*   <Grid item>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Místo
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={filterCountry}
              onChange={handleChange}
              label="country"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {data.allContentfulCountry.nodes.map((item, index) => {
                return (
                  <MenuItem value={item.name} key={index}>
                    {item.name}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid> */}
      </Grid>
    </div>
  )
}

export default Filter
