import { Outlet, useRoutes } from "react-router-dom"
import NavBar from "../components/nav/NavBar"
import Chat from "../components/chat/Chat"
import AllChats from "../components/chat/AllChats"
import UserChats from "../components/chat/UserChats"
import Profile from "../components/user/Profile"
import NewChatForm from "../components/forms/NewChatForm"

const ApplicationViews = () => {


  const AppRoutes = useRoutes([
    {
      path: "/",
      element: (
        <div className="flex flex-col">
          <NavBar />
          <Outlet />
        </div>
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

export default ApplicationViews
