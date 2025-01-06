import useAuth from "../../hooks/useAuth";

const Profile = () => {
   const { user } = useAuth();
   return (
      <div className="flex items-center justify-center pt-40 ">
         <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
            <img className="object-cover w-full h-72" referrerPolicy="no-referrer" src={user?.photoURL} alt="user" />

            <div className="py-5 text-center">
               <p className="block text-xl font-bold text-gray-800">{user?.displayName}</p>
               <span className="text-sm bg-purple-600 text-white px-3 py-1 rounded">Admin</span>
            </div>
         </div>
      </div>
   );
};

export default Profile;