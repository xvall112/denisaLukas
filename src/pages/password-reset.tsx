import React from "react"
import PasswordResetSimple from "views/PasswordResetSimple"
import SignLayout from "../layouts/Sign/Sign"

const PasswordReset = (): JSX.Element => {
  return (
    <>
      <SignLayout>
        <PasswordResetSimple />
      </SignLayout>
    </>
  )
}

export default PasswordReset
