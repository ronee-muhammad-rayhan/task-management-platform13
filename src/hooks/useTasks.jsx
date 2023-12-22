import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
// import useAxiosPublic from "./useAxiosPublic";

const useTasks = () => {
    const axiosSecure = useAxiosSecure();

    const { data: tasks = [], isPending: loading, refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosSecure.get('/tasks');
            return res.data;
        }
    })

    return [tasks, loading, refetch]
};

export default useTasks;