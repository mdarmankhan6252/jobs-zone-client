import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useAuth();
   if(loading){
      return <p className="text-2xl text-purple-600 w-full h-screen flex items-center justify-center">Loading...</p>
   }
   if (user) {
      return children
   }
   return <Navigate to='/login' />

};

export default PrivateRoute;