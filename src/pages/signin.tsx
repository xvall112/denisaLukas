/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import SigninSimple from "views/SigninSimple"
import LayoutPlaces from "../layouts/Place/Place"
import WithLayout from "../../WithLayout"

const SignIn = (): JSX.Element => {
  return <WithLayout component={SigninSimple} layout={LayoutPlaces} />
}

export default SignIn
