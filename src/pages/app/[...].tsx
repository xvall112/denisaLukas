import React from "react"
import { Router } from "@reach/router"
import SignIn from "../../components/own/signin"
import Favourite from "../../views/Favourite/Favourite"
import Account from "../../views/Account/Account"

import PrivateRoute from "../../components/own/PrivateRoute"

const App = () => {
  return (
    <Router basepath="/app">
      <PrivateRoute path="/favourite" component={Favourite} />
      <PrivateRoute path="/account" component={Account} />
      <SignIn path="/login" />
    </Router>
  )
}
export default App
