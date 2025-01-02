import DashboardTitle from "./DashboardTitle";
import { GiProfit } from "react-icons/gi";
import { FaBlogger, FaBook, FaUsers } from "react-icons/fa";

const Statistics = () => {
   return (
      <div>
         <DashboardTitle title='Statistics' />
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-100 text-white p-8 rounded-lg justify-center">
               <GiProfit className="text-5xl" />
               <div>
                  <h3 className="text-4xl font-semibold">1000</h3>
                  <p>Revenue</p>
               </div>
            </div>
            <div className="flex items-center space-x-3 bg-gradient-to-r from-pink-600 to-pink-100 text-white p-8 rounded-lg justify-center">
               <FaUsers className="text-5xl" />
               <div>
                  <h3 className="text-4xl font-semibold">50</h3>
                  <p>Users</p>
               </div>
            </div>
            <div className="flex items-center space-x-3 bg-gradient-to-r from-cyan-600 to-pink-100 text-white p-8 rounded-lg justify-center">
               <FaBook className="text-5xl" />
               <div>
                  <h3 className="text-4xl font-semibold">600</h3>
                  <p>Total Jobs</p>
               </div>
            </div>
            <div className="flex items-center space-x-3 bg-gradient-to-r from-amber-600 to-pink-100 text-white p-8 rounded-lg justify-center">
               <FaBlogger className="text-5xl" />
               <div>
                  <h3 className="text-4xl font-semibold">255</h3>
                  <p>Total Blogs</p>
               </div>
            </div>

         </div>

      </div>
   );
};

export default Statistics;