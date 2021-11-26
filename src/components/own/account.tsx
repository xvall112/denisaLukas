/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React, { useContext } from "react"
import SEO from "./seo"
import Account from "views/Account"
import LayoutPlaces from "../../layouts/Place/Place"
import WithLayout from "../../../WithLayout"
const AccountPage = (): JSX.Element => {
  return (
    <>
      <SEO title="Účet" />
      <WithLayout component={Account} layout={LayoutPlaces} />
    </>
  )
}

export default AccountPage
