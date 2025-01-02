import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import Pricing from "../pages/Pricing/Pricing";
import Blogs from "../pages/Blogs/Blogs";
import Jobs from "../pages/Jobs/Jobs";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      children: [
         {
            index: true,
            element: <Home />
         },
         {
            path: '/pricing',
            element: <Pricing></Pricing>
         },
         {
            path: '/blogs',
            element: <Blogs></Blogs>
         },
         {
            path: '/jobs',
            element: <Jobs />
         }
      ]
   },
]);