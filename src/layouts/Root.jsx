import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Root = () => {
   return (
      <div>
         <Nav />
         <div className="max-w-7xl mx-auto px-3">
            <Outlet />
         </div>

         <Footer />

      </div>
   );
};

export default Root;