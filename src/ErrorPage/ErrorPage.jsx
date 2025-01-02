import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
   const navigate = useNavigate();
   return (
      <div className="flex items-center justify-center w-full h-screen flex-col space-y-6 text-center">
         <h2 className="text-red-600 text-4xl sm:text-5xl font-serif">404 page is not found!</h2>
         <div className="flex items-center space-x-5">
            <Link className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg inline-block" onClick={() =>navigate(-1)}>Go Back</Link>
            <Link className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg inline-block" to='/'>Go Home</Link>
         </div>
      </div>
   );
};

export default ErrorPage;