import { Outlet, useRoutes } from "react-router-dom"
import NavBar from "../components/nav/NavBar"
import Chat from "../components/chat/Chat"
import AllChats from "../components/chat/AllChats"

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
        { index: true, element: <>my chats</> },
        {
          path: "chat",
          children: [
            { path: ":chatId", element: <Chat /> },
          ],
        },
        { path: "all-chats", element: <AllChats /> },
        { path: "new-chat", element: <>New Chat</> },
        { path: "profile", element: <>Profile</> },
      ],
    }
  ])
  return (AppRoutes)
}

