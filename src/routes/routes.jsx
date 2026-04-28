import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component : MainLayout,
    errorElement : <ErrorPage/>,
    children : [
      {
        index : true,
        Component: Home
      }
    ]
  },
]);

export default router;