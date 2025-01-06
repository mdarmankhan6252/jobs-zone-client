import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
   const { user, loading } = useAuth();
   const [isAdmin, isLoading] = useAdmin();

   if (loading, isLoading) {
      return <p className="text-2xl text-purple-600 w-full h-screen flex items-center justify-center">Loading...</p>
   }
   if (isAdmin.role === 'admin' && user) {
      return children
   }

   return  <Navigate to='/'></Navigate>
};

export default AdminRoute;