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
    allContentfulPlaces(filter: { node_locale: { eq: "cs" } }) {
      nodes {
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
          gatsbyImageData(width: 400, placeholder: BLURRED)
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

const PlacesFavourite = () => {
  const classes = useStyles()
  const data = useStaticQuery(query)
  const { favouriteItems } = useContext(UserContext)
  const favouritePlaces = data.allContentfulPlaces.nodes.filter(item =>
    favouriteItems.includes(item.id)
  )

  return (
    <>
      {favouritePlaces.length === 0 ? (
        <NoFavourite title="" button="Objevuj nová místa" slug="/places" />
      ) : (
        <>
          <FullScreenMap markers={favouritePlaces} />

          <div className={classes.root}>
            <Grid container direction="row" spacing={3}>
              {favouritePlaces.map((item: any, index: number) => {
                return (
                  <Grid item xs={12} sm={12} md={4} lg={3} xl={3} key={index}>
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

export default PlacesFavourite
