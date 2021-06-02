import React, { createContext, useState } from "react"
import firebase from "gatsby-plugin-firebase"

export const UserContext = createContext({
  signUp: (email, password, name) => {},
  logout: () => {},
  isOpenResetPassword: false,
  handleOpenResetPassword: () => {},
  handleCloseResetPassword: () => {},
})

const UserProvider = ({ children }) => {
  const [isOpenResetPassword, setResetPassword] = useState(false)
  const handleOpenResetPassword = () => {
    setResetPassword(true)
  }
  const handleCloseResetPassword = () => {
    setResetPassword(false)
  }

  const signUp = (email, password, name) => {}
  const logout = () => {
    firebase.auth().signOut()
  }

  return (
    <UserContext.Provider
      value={{
        isOpenResetPassword,
        signUp,
        logout,
        handleOpenResetPassword,
        handleCloseResetPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider
