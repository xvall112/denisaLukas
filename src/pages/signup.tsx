/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import SignupSimple from "views/SignupSimple"
import LayoutPlaces from "../layouts/Place/Place"
import WithLayout from "../../WithLayout"

const SignUp = (): JSX.Element => {
  return <WithLayout component={SignupSimple} layout={LayoutPlaces} />
}

export default SignUp
