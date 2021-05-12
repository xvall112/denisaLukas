import React, { useState, useContext } from "react"
import { graphql } from "gatsby"

//components
import LayoutPlaces from "../components/layoutPlaces"
import ContentfulBody from "../components/contentfulBody"
//material Ui
import { makeStyles } from "@material-ui/core/styles"

export const query = graphql`
  query($slug: String!) {
    contentfulPlaces(slug: { eq: $slug }) {
      adress
      country {
        flagLink
        name
      }
      kindPlace
      location {
        lat
        lon
      }
      name
      images {
        gatsbyImageData(layout: FULL_WIDTH)
        title
      }
      describePlace {
        raw
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  root: {},
}))

const Place = props => {
  return (
    <>
      <LayoutPlaces data={props.data.contentfulPlaces}>
        <ContentfulBody body={props.data.contentfulPlaces.describePlace} />
      </LayoutPlaces>
    </>
  )
}

export default Place
