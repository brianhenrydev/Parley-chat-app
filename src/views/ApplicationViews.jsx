import { Outlet, useRoutes } from "react-router-dom"
import NavBar from "../components/nav/NavBar"
import Chat from "../components/chat/Chat"
import AllChats from "../pages/AllChats"
import UserChats from "../pages/UserChats"
import Profile from "../pages/Profile"
import NewChatForm from "../components/forms/NewChatForm"
import UserProfile from "../pages/UserProfile"

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
        {
          path: "u",
          children: [
            { path: ":username", element: <UserProfile /> }
          ],
        },
      ],
    }
  ])
  return (AppRoutes)
}

export default ApplicationViews
