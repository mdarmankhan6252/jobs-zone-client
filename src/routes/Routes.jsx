import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import Pricing from "../pages/Pricing/Pricing";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import About from "../pages/About/About";
import Jobs from "../pages/Jobs/Jobs";
import BlogDetails from "../pages/Blogs/BlogDetails/BlogDetails";
import Blogs from "../pages/Blogs/Blogs";
import ErrorPage from "../ErrorPage/ErrorPage";
import Dashboard from "../layouts/Dashboard";
import Statistics from "../pages/Dashboard/Statistics";
import ManageJobs from "../pages/Dashboard/ManageJobs";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import AddJob from "../pages/Dashboard/AddJob";
import AddBlog from "../pages/Dashboard/AddBlog";
import ManageBlogs from "../pages/Dashboard/ManageBlogs";
import Bookings from "../pages/Dashboard/Bookings";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import ContactUs from "../pages/ContactUs/ContactUs";
import Profile from "../pages/profile/Profile";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

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
            path: '/blog-details',
            element: <BlogDetails></BlogDetails>
         },
         {
            path: '/profile',
            element: <Profile />
         },
         {
            path: '/contact-us',
            element: <ContactUs />
         }

      ]
   },
   {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard /></PrivateRoute>,
      children: [
         {
            index: true,
            element: <Statistics />
         },
         {
            path: 'statistics',
            element: <AdminRoute><Statistics /></AdminRoute>
         },
         {
            path: 'addJob',
            element: <AddJob />
         },
         {
            path: 'manageJobs',
            element: <ManageJobs />
         },
         {
            path: 'addBlogs',
            element: <AddBlog />

         },
         {
            path: 'manageBlogs',
            element: <AdminRoute><ManageBlogs /></AdminRoute>
         },
         {
            path: 'bookings',
            element: <Bookings />
         },
         {
            path: 'manageUsers',
            element: <AdminRoute><ManageUsers /></AdminRoute>
         },
         {
            path: 'paymentHistory',
            element: <PaymentHistory />
         }

      ]
   }

]);