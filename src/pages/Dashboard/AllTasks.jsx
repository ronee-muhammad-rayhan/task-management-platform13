import useTasks from "../../hooks/useTasks";

const AllTasks = () => {

    const [tasks] = useTasks();

    return (
        <div>
            {/* <template> */}
            <div className="p-5 h-screen bg-gray-100">
                <h1 className="text-xl mb-2">Your Tasks</h1>

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
                                tasks?.map((task, i) => {
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
                                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Delete</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    {
                        tasks?.map((task, idx) => {
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