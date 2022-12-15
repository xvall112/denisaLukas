/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React, { useContext } from "react"
import { navigate } from "gatsby"
import SignupSimple from "views/SignupSimple"
import MenuLayout from "../layouts/Menu/MenuLayout"

//context
import { UserContext } from "../providers/user/user.provider"

const SignUp = (): JSX.Element => {
  const { currentUser } = useContext(UserContext)
  if (currentUser) navigate(-1)
  return (
    <>
      <MenuLayout>
        <SignupSimple />
      </MenuLayout>
    </>
  )
}

export default SignUp
