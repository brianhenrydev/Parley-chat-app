import { Outlet, useRoutes } from "react-router-dom"
import NavBar from "../components/nav/NavBar"
import Chat from "../components/chat/Chat"
import NewChatForm from "../components/forms/NewChatForm"
import UserChats from "../pages/UserChats"
import AllChats from "../pages/AllChats"
import Profile from "../pages/Profile"

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
        { index: true, element: <UserChats /> },
        {
          path: "chat",
          children: [
            { path: ":chatId", element: <Chat /> },
          ],
        },
        { path: "all-chats", element: <AllChats /> },
        { path: "new-chat", element: <NewChatForm /> },
        { path: "profile", element: <Profile /> },
      ],
    }
  ])
  return (AppRoutes)
}

