import { Link, NavLink } from "react-router-dom";
import { GoDependabot } from "react-icons/go";
import logo from '../../assets/logo.png'
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdManageHistory, MdOutlineManageAccounts, MdOutlinePayments } from "react-icons/md";
import { CiBookmarkCheck, CiSearch } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import useAdmin from "../../hooks/useAdmin";

const DashboardRoute = () => {
   const [isAdmin] = useAdmin();

   return (
      <div className="py-10 px-6 space-y-4 dashboard-nav">
         <Link to='/' className="flex items-center justify-center w-full pb-4">
            <img src={logo} alt="" className="w-52" />
         </Link>

         <NavLink to='/dashboard/statistics' className="flex items-center space-x-2 p-2 border rounded-lg">
            <GoDependabot className="text-2xl" />
            <span className="font-light">Statistics</span>
         </NavLink>

         <NavLink to='/dashboard/addJob' className="flex items-center space-x-2 p-2 border rounded-lg">
            <IoIosAddCircleOutline className="text-2xl" />
            <span className="font-light">Add Job</span>
         </NavLink>

         <NavLink to='/dashboard/manageJobs' className="flex items-center space-x-2 p-2 border rounded-lg">
            <MdManageHistory className="text-2xl" />
            <span className="font-light">Manage Jobs</span>
         </NavLink>

         <NavLink to='/dashboard/addBlogs' className="flex items-center space-x-2 p-2 border rounded-lg">
            <IoIosAddCircleOutline className="text-2xl" />
            <span className="font-light">Add Blogs</span>
         </NavLink>

         <NavLink to='/dashboard/manageBlogs' className="flex items-center space-x-2 p-2 border rounded-lg">
            <MdOutlineManageAccounts className="text-2xl" />
            <span className="font-light">Manage Blogs</span>
         </NavLink>

         <NavLink to='/dashboard/bookings' className="flex items-center space-x-2 p-2 border rounded-lg">
            <CiBookmarkCheck className="text-2xl" />
            <span className="font-light">Bookings</span>
         </NavLink>

         {
            isAdmin &&
            <NavLink to='/dashboard/manageUsers' className="flex items-center space-x-2 p-2 border rounded-lg">
               <LuUsers className="text-2xl" />
               <span className="font-light">Manage Users</span>
            </NavLink>
         }

         <NavLink to='/dashboard/paymentHistory' className="flex items-center space-x-2 p-2 border rounded-lg">
            <MdOutlinePayments className="text-2xl" />
            <span className="font-light">Payment History</span>
         </NavLink>

         <hr />

         <NavLink to='/' className="flex items-center space-x-2 p-2 border rounded-lg">
            <IoHomeOutline className="text-2xl" />
            <span className="font-light">Home</span>
         </NavLink>

         <NavLink to='/jobs' className="flex items-center space-x-2 p-2 border rounded-lg">
            <CiSearch className="text-2xl" />
            <span className="font-light">Jobs</span>
         </NavLink>


      </div>
   );
};

export default DashboardRoute;