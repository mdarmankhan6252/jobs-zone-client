import useAxiosPublic from "../../hooks/useAxiosPublic";
import DashboardTitle from "./DashboardTitle";
import { useQuery } from '@tanstack/react-query'
import Swal from 'sweetalert2'

const ManageUsers = () => {
   const axiosPublic = useAxiosPublic();

   const { data: blogs = [], isLoading, refetch } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
         const res = await axiosPublic.get('/users')
         return res.data;
      }
   })

   if (isLoading) {
      <p className="text-5xl  font-semibold text-center">Loading...</p>
   }

   const handleDelete = id => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then((result) => {
         if (result.isConfirmed) {
            axiosPublic.delete(`/user/${id}`)
               .then(res => {
                  if (res.data.deletedCount > 0) {
                     Swal.fire({
                        title: "Deleted!",
                        text: "User has been deleted!",
                        icon: "success"
                     });
                     refetch();
                  }
               })
         }
      });
   }

   return (
      <div>
         <DashboardTitle title='Manage Users' />

         <div className="">
            <div className="overflow-x-auto">
               <table className="min-w-full text-xs border ">
                  <colgroup>
                     <col />
                     <col />
                     <col />
                     <col />
                     <col />
                  </colgroup>
                  <thead>
                     <tr className="text-left">
                        <th className="p-3">SL</th>
                        <th className="p-3">Photo</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Role</th>
                        <th className="p-3">Delete</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        blogs.map((user, i) => <tr key={i} className="border">
                           <td className="p-2">
                              <p>{i + 1}</p>
                           </td>
                           <td className="p-2">
                              <img src={user.photo} alt="" className="w-12 rounded-md" referrerPolicy="no-referrer" />
                           </td>
                           <td className="p-2">
                              <p>{user.name}</p>
                           </td>
                           <td className="p-2">
                              <p>{user.email}</p>
                           </td>
                           <td className="p-2">
                              <p className={`${user.role === 'admin' && 'text-purple-600'} ${user.role === 'general' && 'text-blue-600'}`}>{user.role}</p>
                           </td>
                           <td className="p-2">
                              <span onClick={() => handleDelete(user._id)} className="px-3 py-1 font-semibold rounded-md bg-red-500 text-white cursor-pointer">
                                 <span>Delete</span>
                              </span>
                           </td>
                        </tr>)
                     }
                  </tbody>
               </table>
            </div>
         </div>

      </div>
   );
};


export default ManageUsers;