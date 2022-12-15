import React from "react"
import PasswordResetSimple from "views/PasswordResetSimple"
import MenuLayout from "../layouts/Menu/MenuLayout"

const PasswordReset = (): JSX.Element => {
  return (
    <>
      <MenuLayout>
        <PasswordResetSimple />
      </MenuLayout>
    </>
  )
}

export default PasswordReset
