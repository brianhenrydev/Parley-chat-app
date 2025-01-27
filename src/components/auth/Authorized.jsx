
import { Navigate, useLocation } from "react-router-dom"

export const Authorized = ({ children }) => {
  let location = useLocation()
  return localStorage.getItem("chat_user") ?
    children
    :
    <Navigate to={"/login"} state={{ from: location }} replace />
}
