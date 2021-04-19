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
      <Grid container direction="row" spacing={2}>
        {data.allContentfulCountry.nodes.map((item, index) => {
          return (
            <>
              <Grid item xs={12} md={4} lg={3} key={index}>
                <Link to={`/country/${item.slug}`} className={classes.link}>
                  <CardBase variant="outlined">
                    <Grid
                      container
                      direction="column"
                      justify="flex-start"
                      alignItems="center"
                    >
                      <Grid item xs={6} md={4}>
                        <img
                          src={item.flagLink}
                          width="100%"
                          alt={item.name}
                          className={classes.flag}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          className={classes.name}
                          mt={1}
                          fontWeight="bold"
                          fontSize={{ xs: 14, md: 18 }}
                        >
                          {item.name}
                        </Box>
                      </Grid>
                    </Grid>
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
