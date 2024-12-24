import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      children: [
         {
            index: true,
            element: <Home />
         }
      ]
   },
]);