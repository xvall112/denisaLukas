import React from "react"
import { Router } from "@reach/router"
import SignIn from "../../components/own/signin"
import Favourite from "../../components/own/account"

import PrivateRoute from "../../components/own/PrivateRoute"

const App = () => {
  return (
    <Router basepath="/app">
      <PrivateRoute path="/favourite" component={Favourite} />
      <SignIn path="/login" />
    </Router>
  )
}
export default App
