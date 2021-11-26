import React, { useContext } from "react"
import { navigate } from "gatsby"
//context
import { UserContext } from "../../providers/user/user.provider"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { currentUser } = useContext(UserContext)
  if (!currentUser && location.pathname !== `/app/login`) {
    navigate("/app/login")
    return null
  }
  return <Component {...rest} />
}
export default PrivateRoute
