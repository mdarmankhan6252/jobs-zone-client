import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Root = () => {
   return (
      <div>
         <Nav />
         <div className="">
            <Outlet />
         </div>

         <Footer />

      </div>
   );
};

export default Root;