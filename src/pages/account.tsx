/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import Account from "views/Account"
import Main from "../layouts/Main/Main"
import WithLayout from "../../WithLayout"

const AccountPage = (): JSX.Element => {
  return <WithLayout component={Account} layout={Main} />
}

export default AccountPage
