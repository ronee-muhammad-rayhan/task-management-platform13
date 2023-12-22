import useTasks from "../../hooks/useTasks";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure.jsx";
import Swal from "sweetalert2";


const AllTasks = () => {

    const [tasks, , refetch] = useTasks();
    const axiosSecure = useAxiosSecure();

    const todoTasks = tasks.filter(task => task?.status === 'to-do');
    const ongoingTasks = tasks.filter(task => task?.status === 'ongoing');
    const completedTasks = tasks.filter(task => task?.status === 'completed');

    const handleDeleteTask = (task) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/tasks/${task._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${task.title} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });
    }

    return (
        <div>
            {/* <template> */}
            {/* ToDo Tasks */}
            <div className="p-5 bg-gray-100">
                <h1 className="text-xl mb-2">Your ToDo Tasks</h1>

                <div className="overflow-auto rounded-lg shadow hidden md:block">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">Title</th>
                                <th className="p-3 text-sm font-semibold tracking-wide text-left">Details</th>
                                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Status</th>
                                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Date</th>
                                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Priority</th>
                                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {
                                todoTasks?.map((task, i) => {
                                    return (
                                        <tr key={i} className="bg-white">
                                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <a href="#" className="font-bold text-blue-500 hover:underline">{task?.title}</a>
                                            </td>
                                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                {task?.description}
                                            </td>
                                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <span
                                                    className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{task?.status}</span>
                                            </td>
                                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{task?.deadline}</td>
                                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{task?.priority}</td>
                                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <div className="flex gap-2">
                                                    <Link to={`/dashboard/edit-task/${task?._id}`}><button className="bg-lime-400 rounded-md px-2 py-1 text-red-600 font-bold">Edit</button></Link>
                                                    <button onClick={() => handleDeleteTask(task)} className="bg-red-600 rounded-md px-2 py-1 text-white font-bold">Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    {
                        todoTasks?.map((task, idx) => {
                            return (
                                <div key={idx} className="bg-white space-y-3 p-4 rounded-lg shadow">
                                    <div className="flex items-center space-x-2 text-sm">
                                        <div>
                                            <a href="#" className="text-blue-500 font-bold hover:underline">{task?.title}</a>
                                        </div>
                                        <div className="text-gray-500">{task?.deadline}</div>
                                        <div>
                                            <span
                                                className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{task?.status}</span>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-700">
                                        {task?.description}
                                    </div>
                                    <div className="text-sm font-medium text-black">
                                        {task?.priority}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* Ongoing Tasks */}
            <div className="p-5 bg-gray-100">
                <h1 className="text-xl mb-2">Your Ongoing Tasks</h1>

                <div className="overflow-auto rounded-lg shadow hidden md:block">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">Title</th>
                                <th className="p-3 text-sm font-semibold tracking-wide text-left">Details</th>
                                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Status</th>
                                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Date</th>
                                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Priority</th>
                                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {
                                ongoingTasks?.map((task, i) => {
                                    return (
                                        <tr key={i} className="bg-white">
                                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <a href="#" className="font-bold text-blue-500 hover:underline">{task?.title}</a>
                                            </td>
                                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                {task?.description}
                                            </td>
                                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <span
                                                    className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{task?.status}</span>
                                            </td>
                                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{task?.deadline}</td>
                                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{task?.priority}</td>
                                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <div className="flex gap-2">
                                                    <Link to={`/dashboard/edit-task/${task?._id}`}><button className="bg-lime-400 rounded-md px-2 py-1 text-red-600 font-bold">Edit</button></Link>
                                                    <button onClick={() => handleDeleteTask(task)} className="bg-red-600 rounded-md px-2 py-1 text-white font-bold">Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    {
                        ongoingTasks?.map((task, idx) => {
                            return (
                                <div key={idx} className="bg-white space-y-3 p-4 rounded-lg shadow">
                                    <div className="flex items-center space-x-2 text-sm">
                                        <div>
                                            <a href="#" className="text-blue-500 font-bold hover:underline">{task?.title}</a>
                                        </div>
                                        <div className="text-gray-500">{task?.deadline}</div>
                                        <div>
                                            <span
                                                className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{task?.status}</span>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-700">
                                        {task?.description}
                                    </div>
                                    <div className="text-sm font-medium text-black">
                                        {task?.priority}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* Completed Tasks */}
            <div className="p-5 bg-gray-100">
                <h1 className="text-xl mb-2">Your Completed Tasks</h1>

                <div className="overflow-auto rounded-lg shadow hidden md:block">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">Title</th>
                                <th className="p-3 text-sm font-semibold tracking-wide text-left">Details</th>
                                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Status</th>
                                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Date</th>
                                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Priority</th>
                                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {
                                completedTasks?.map((task, i) => {
                                    return (
                                        <tr key={i} className="bg-white">
                                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <a href="#" className="font-bold text-blue-500 hover:underline">{task?.title}</a>
                                            </td>
                                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                {task?.description}
                                            </td>
                                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <span
                                                    className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{task?.status}</span>
                                            </td>
                                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{task?.deadline}</td>
                                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{task?.priority}</td>
                                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <div className="flex gap-2">
                                                    <Link to={`/dashboard/edit-task/${task?._id}`}><button className="bg-lime-400 rounded-md px-2 py-1 text-red-600 font-bold">Edit</button></Link>
                                                    <button onClick={() => handleDeleteTask(task)} className="bg-red-600 rounded-md px-2 py-1 text-white font-bold">Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    {
                        completedTasks?.map((task, idx) => {
                            return (
                                <div key={idx} className="bg-white space-y-3 p-4 rounded-lg shadow">
                                    <div className="flex items-center space-x-2 text-sm">
                                        <div>
                                            <a href="#" className="text-blue-500 font-bold hover:underline">{task?.title}</a>
                                        </div>
                                        <div className="text-gray-500">{task?.deadline}</div>
                                        <div>
                                            <span
                                                className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{task?.status}</span>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-700">
                                        {task?.description}
                                    </div>
                                    <div className="text-sm font-medium text-black">
                                        {task?.priority}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* </template> */}
        </div>
    );
};

export default AllTasks;