import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useAdmin = () => {
   const { user } = useAuth();
   const axiosPublic = useAxiosPublic();

   const { data: isAdmin, isLoading, refetch } = useQuery({
      queryKey: ['user', user?.email],
      queryFn: async () => {
         const { data } = await axiosPublic.get(`/user/${user?.email}`)
         return data;
      }
   })
   console.log(isAdmin, 'use admin');

   return [isAdmin, isLoading, refetch]
   
};

export default useAdmin;