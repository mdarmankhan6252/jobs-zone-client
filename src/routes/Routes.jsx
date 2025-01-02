import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import Pricing from "../pages/Pricing/Pricing";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import About from "../pages/About/About";
import Jobs from "../pages/Jobs/Jobs";
import Blogs from "../pages/Blogs/Blogs";
import ErrorPage from "../ErrorPage/ErrorPage";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
         {
            index: true,
            element: <Home />
         },
         {
            path: '/about',
            element: <About></About>
         },
         {
            path: '/pricing',
            element: <Pricing></Pricing>
         },
         {
            path: '/login',
            element: <Login />
         },
         {
            path: '/register',
            element: <Register />
         },
         {
            path: '/jobs',
            element: <Jobs />
         },
         {
            path: '/blogs',
            element: <Blogs />
         },
         {
            path: '/profile',
            element: <Profile />
         }
      ]
   },
]);