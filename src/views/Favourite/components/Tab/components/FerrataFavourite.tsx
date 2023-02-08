import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"

//components
import Card from "../../../../../components/own/PlacePageLayout/card"
import NoFavourite from "./noFavourite"
import FullScreenMap from "../../../../../components/own/fullScreenMap"
//materialUI
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

//context
import { UserContext } from "../../../../../providers/user/user.provider"

const query = graphql`
  {
    allContentfulViaFerrata(filter: { node_locale: { eq: "cs" } }) {
      nodes {
        level
        rating
        id
        slug
        name
        kindPlace
        titleImage {
          gatsbyImageData(width: 250, placeholder: BLURRED)
          title
        }
        country {
          name
          flagLink
        }
        images {
          gatsbyImageData(width: 400, height: 400, placeholder: BLURRED)
          title
        }
        location {
          lat
          lon
        }
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: "100%",
  },
}))

const FerrataFavourite = () => {
  const classes = useStyles()
  const data = useStaticQuery(query)
  const { favouriteItems } = useContext(UserContext)
  const favouriteFerrata = data.allContentfulViaFerrata.nodes.filter(item =>
    favouriteItems.includes(item.id)
  )
  return (
    <>
      {favouriteFerrata.length === 0 ? (
        <NoFavourite
          title="Nemáte žádné oblíbené ferraty"
          button="Objevuj nové ferraty"
          slug="/viaFerrata"
        />
      ) : (
        <>
          <FullScreenMap markers={favouriteFerrata} />
          <div className={classes.root}>
            <Grid container direction="row" spacing={3}>
              {favouriteFerrata.map((item: any, index: number) => {
                return (
                  <Grid item xs={12} sm={6} md={3} lg={3} xl={2} key={index}>
                    <Card item={item} />
                  </Grid>
                )
              })}
            </Grid>
          </div>
        </>
      )}
    </>
  )
}

export default FerrataFavourite
