import { createBrowserRouter } from "react-router-dom";
import RemoteCompanies from "../components/RemoteCopanies/RemoteCompanies";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/companies",
        element: <RemoteCompanies />,
      },
    ],
  },
]);
