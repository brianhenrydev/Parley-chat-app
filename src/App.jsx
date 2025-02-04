import { useRoutes } from "react-router-dom"
import Authorized from "./components/auth/Authorized"
import UserProvider from "./contexts/UserProvider"
import Login from "./components/auth/Login"
import ApplicationViews from "./views/ApplicationViews"
import Register from "./components/auth/Register"
import { ThemeProvider } from "./contexts/ThemeProvider"

const App = () => {
  const routes = useRoutes([
    { path: "/login", element: (<Login />) },
    { path: "/register", element: (<Register />) },
    {
      path: "*", element: (
        <Authorized>
          <ApplicationViews />
        </Authorized>
      )
    }
  ])
  return (
    <UserProvider>
      <ThemeProvider>
        {routes}
      </ThemeProvider>
    </UserProvider>
  )
}
export default App
