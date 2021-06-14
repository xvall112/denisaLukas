/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React, { useContext } from "react"
import { navigate } from "gatsby"
import Account from "views/Account"
import Main from "../layouts/Main/Main"
import WithLayout from "../../WithLayout"
import { UserContext } from "../providers/user/user.provider"

const AccountPage = (): JSX.Element => {
  const { currentUser } = useContext(UserContext)
  if (!currentUser)
    // If we’re not logged in, redirect to the home page.
    navigate(`/signin`)

  return <WithLayout component={Account} layout={Main} />
}

export default AccountPage
