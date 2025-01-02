import { Outlet } from "react-router-dom";
import DashboardRoute from "../pages/Dashboard/DashboardRoute";
const Dashboard = () => {
   return (
      <div className="flex space-x-10">
         <div className="w-[400px] bg-gray-50 h-screen border-r">
            <DashboardRoute />
         </div>
         <div className="w-full">
            <Outlet />
         </div>

      </div>
   );
};

export default Dashboard;