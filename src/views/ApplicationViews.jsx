import { Outlet, useRoutes } from "react-router-dom"

export const ApplicationViews = () => {

  const AppRoutes = useRoutes([
    {
      path: "/",
      element: (
        <div className="flex h-screen flex-col">
          <></>
          <div className="grow h-screen">
            <Outlet />
          </div>
        </div>
      ),
      children: [
        { index: true, element: <></> },
        {
          path: "chat",
          children: [
            { path: ":chatId", element: <></> },
          ],
        },
        { path: "all-chats", element: <></> },
        { path: "new-chat", element: <></> },
        { path: "profile", element: <></> },
      ],
    }
  ])
  return (AppRoutes)
}

