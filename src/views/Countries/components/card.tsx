import React from "react"
import { Link } from "gatsby"

//material UI
import { Grid, Box } from "@material-ui/core"
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles"

//components
import { SectionHeader } from "components/molecules"
import { CardBase } from "components/organisms"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
    card: { padding: "0px !important" },
    link: {
      textDecoration: "none",
      "& :hover": {
        textDecoration: "underline",
        color: theme.palette.text.primary,
      },
    },
    name: {
      color: theme.palette.text.primary,
      fontSize: "20px",
      position: "relative",
      bottom: "0px",
    },
    flag: { borderRadius: "5px" },
  })
)

const Card = ({ data }) => {
  const classes = useStyles()
  return (
    <>
      <SectionHeader
        align="left"
        label={`více než ${data.allContentfulCountry.nodes.length}`}
        title={<>zemí které jsme navštívili</>}
      />
      <Grid container direction="row" spacing={5}>
        {data.allContentfulCountry.nodes.map((item, index) => {
          return (
            <>
              <Grid item xs={12} md={4} lg={3} key={index}>
                <Link to={`/country/${item.slug}`} className={classes.link}>
                  <CardBase variant="outlined" liftUp className={classes.card}>
                    <>
                      <img
                        src={item.flagLink}
                        width="100%"
                        alt={item.name}
                        className={classes.flag}
                      />
                      <Box mt={2} className={classes.name}>
                        {item.name}
                      </Box>
                    </>
                  </CardBase>
                </Link>
              </Grid>
            </>
          )
        })}
      </Grid>
    </>
  )
}

export default Card
