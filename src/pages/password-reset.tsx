import React from "react"
import PasswordResetSimple from "views/PasswordResetSimple"
import LayoutPlaces from "../layouts/Place/Place"
import WithLayout from "../../WithLayout"

const PasswordReset = (): JSX.Element => {
  return <WithLayout component={PasswordResetSimple} layout={LayoutPlaces} />
}

export default PasswordReset
