import React from "react"
import { navigate } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

//components
import { CardBase } from "components/organisms"

//materialUI
import { Grid, Typography, Box, Button } from "@material-ui/core"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
import { makeStyles, useTheme } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    "& .iconNext, .iconPrevious": { transition: "all 0.2s ease-out" },
    "& a": {
      textDecoration: "none",
      "& :hover": {
        "& .iconNext": {
          marginLeft: 4,
        },
        "& .iconPrevious": {
          marginRight: 4,
        },
      },
    },
    "& .MuiCardContent-root": {
      padding: "0px",
    },
  },

  card: {
    background:
      "linear-gradient(93deg, rgba(250,229,150,0.500437675070028) 0%, rgba(250,229,150,1) 46%, rgba(250,229,150,0.500437675070028) 100%)",
    color: "black",
  },
}))

interface Props {
  next?: {
    slug: string
    name: string
  }
  previous?: {
    slug: string
    name: string
  }
}
const nextPrevious = ({ previous, next }: Props): JSX.Element => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <Grid container direction="row" justify="space-between" spacing={2}>
          {previous && (
            <Grid item container xs={6} md={4} direction="column" spacing={1}>
              <Typography variant="subtitle1">Předchozí</Typography>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                /* startIcon={<ArrowBackIosIcon />} */
                size="large"
                onClick={() => navigate(`/${previous.slug}`)}
              >
                {previous.name}
              </Button>
              {/* <Link to={`/${previous.slug}`}>
                <CardBase className={classes.card}>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs={2}>
                      <ArrowBackIosIcon className="iconPrevious" />
                    </Grid>
                    <Grid item xs={10}>
                      <Box my={2} fontSize={16} fontWeight="bold">
                        {previous.name}
                      </Box>
                    </Grid>
                  </Grid>
                </CardBase>
              </Link> */}
            </Grid>
          )}

          {next && (
            <Grid item container xs={6} md={4} direction="column" spacing={1}>
              <Typography align="right" variant="subtitle1">
                Další
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                /*       endIcon={<ArrowForwardIosIcon />} */
                size="large"
                onClick={() => navigate(`/${next.slug}`)}
              >
                {next.name}
              </Button>
              {/* <Link to={`/${next.slug}`}>
                <CardBase className={classes.card}>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Box m={2} fontSize={16} fontWeight="bold">
                      {next.name}
                    </Box>
                    <ArrowForwardIosIcon className="iconNext" />
                  </Grid>
                </CardBase>
              </Link> */}
            </Grid>
          )}
        </Grid>
      </div>
    </>
  )
}

export default nextPrevious
