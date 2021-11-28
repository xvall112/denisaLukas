/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React, { useContext } from "react"
import { navigate } from "gatsby"
import SigninSimple from "views/SigninSimple"
import MenuLayout from "../../layouts/Menu/MenuLayout"
import WithLayout from "../../../WithLayout"

//context
import { UserContext } from "../../providers/user/user.provider"

const SignIn = (): JSX.Element => {
  const { currentUser } = useContext(UserContext)
  if (currentUser) navigate("/")

  return <WithLayout component={SigninSimple} layout={MenuLayout} />
}

export default SignIn
