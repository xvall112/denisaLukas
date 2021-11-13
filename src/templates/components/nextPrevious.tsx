import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

//components
import { CardBase } from "components/organisms"

//materialUI
import { Grid, Typography, Box } from "@material-ui/core"
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
              <Typography variant="h6">Předchozí</Typography>
              <Link to={`/${previous.slug}`}>
                <CardBase className={classes.card}>
                  <Grid container justify="center" alignItems="center">
                    <ArrowBackIosIcon className="iconPrevious" />
                    <Box m={2} fontSize={16} fontWeight="bold">
                      {previous.name}
                    </Box>
                  </Grid>
                </CardBase>
              </Link>
            </Grid>
          )}

          {next && (
            <Grid item container xs={6} md={4} direction="column" spacing={1}>
              <Typography align="right" variant="h6">
                Další
              </Typography>
              <Link to={`/${next.slug}`}>
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
              </Link>
            </Grid>
          )}
        </Grid>
      </div>
    </>
  )
}

export default nextPrevious
