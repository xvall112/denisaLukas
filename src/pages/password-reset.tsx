import React from "react"
import PasswordResetSimple from "views/PasswordResetSimple"
import SignLayout from "../layouts/Sign/Sign"
import WithLayout from "../../WithLayout"

const PasswordReset = (): JSX.Element => {
  return <WithLayout component={PasswordResetSimple} layout={SignLayout} />
}

export default PasswordReset
