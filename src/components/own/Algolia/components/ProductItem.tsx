import React, { createElement } from "react"
import { Link } from "gatsby"
//materialUI
import { Grid, Typography, Chip, Box } from "@material-ui/core"

export default function ProductItem({ hit, components }) {
  return (
    <Link to={`/${hit.slug}`} className="aa-ItemLink">
      <div className="aa-ItemContent">
        <Box py={1}>
          <div className="aa-ItemTitle">
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="flex-start"
            >
              <Grid item container direction="row">
                <Grid item>
                  <Typography variant="button">
                    <components.Highlight hit={hit} attribute="name" />
                  </Typography>
                </Grid>
                {hit.country && (
                  <Grid item>
                    <Chip
                      label={
                        <components.Highlight hit={hit} attribute="country" />
                      }
                      size="small"
                    />
                  </Grid>
                )}
              </Grid>
              <Grid item>
                <components.Highlight hit={hit} attribute="country" />
              </Grid>
            </Grid>
          </div>
        </Box>
      </div>
    </Link>
  )
}
