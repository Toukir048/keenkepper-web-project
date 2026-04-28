import { createBrowserRouter } from "react-router";
import Home from "../pages/Home.jsx"
import FriendDetails from "../pages/FriendDetails.jsx"
import ErrorPage from "../components/ErrorPage.jsx"
import MainLayout from "../layouts/MainLayout.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "friend/:id",
        element: <FriendDetails />,
      },
    ],
  },
]);

export default router;