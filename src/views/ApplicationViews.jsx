import { Outlet, useRoutes } from "react-router-dom"
import NavBar from "../components/nav/NavBar"

export const ApplicationViews = () => {


  const AppRoutes = useRoutes([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Outlet />
        </>
      ),
      children: [
        { index: true, element: <>Home</> },
        {
          path: "chat",
          children: [
            { path: ":chatId", element: <>Chat</> },
          ],
        },
        { path: "all-chats", element: <>All Chats</> },
        { path: "new-chat", element: <>New Chat</> },
        { path: "profile", element: <>Profile</> },
      ],
    }
  ])
  return (AppRoutes)
}

