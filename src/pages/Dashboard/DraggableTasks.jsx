import './DraggableTasks.css';
import useTasks from "../../hooks/useTasks";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure.jsx";
import Swal from "sweetalert2";
import { useState } from 'react';

const DraggableTasks = () => {

    const [tasks, , refetch] = useTasks();
    const axiosSecure = useAxiosSecure();
    const [draggingTask, setDraggingTask] = useState({});

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

    /* const handleOnDrop = (e) => {
        e.preventDefault();
        console.log("handleOnDrop");
    } */
    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
        console.log(ev.target);
        // setDraggingTask(ev.target.id);
        // const taskItem = fetch(`${import.meta.env.VITE_API_URL}/tasks/${ev.target.id}`

        setDraggingTask(tasks.find(task => task._id === ev.target.id));
    }

    async function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        console.log(ev.target.id);
        console.log(ev.srcElement);
        console.log(ev.target);
        // console.log(ev.srcElement.id);

        const taskItem = {
            title: draggingTask.title,
            description: draggingTask.description,
            deadline: draggingTask.deadline,
            priority: draggingTask.priority,
            status: ev.target.id,
        }

        await axiosSecure.patch(`/tasks/${draggingTask._id}`, taskItem);
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-red-600 text-center">Draggable Tasks</h2>
            <p className='pt-7'>ToDo tasks:</p>

            <div id="to-do" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)}>
                {
                    todoTasks.map((task) => (
                        <div id={task._id} key={task._id} draggable="true" onDragStart={(event) => drag(event)} className="bg-white space-y-3 p-4 rounded-lg shadow">
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
                            <div className="flex gap-2">
                                <Link to={`/dashboard/edit-task/${task?._id}`}><button className="bg-lime-400 rounded-md px-2 py-1 text-red-600 font-bold">Edit</button></Link>
                                <button onClick={() => handleDeleteTask(task)} className="bg-red-600 rounded-md px-2 py-1 text-white font-bold">Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <p className='pt-7'>Ongoing tasks:</p>
            <div id="ongoing" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)}>
                {
                    ongoingTasks.map((task) => (
                        <div id={task._id} key={task._id} draggable="true" onDragStart={(event) => drag(event)} className="bg-white space-y-3 p-4 rounded-lg shadow">
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
                            <div className="flex gap-2">
                                <Link to={`/dashboard/edit-task/${task?._id}`}><button className="bg-lime-400 rounded-md px-2 py-1 text-red-600 font-bold">Edit</button></Link>
                                <button onClick={() => handleDeleteTask(task)} className="bg-red-600 rounded-md px-2 py-1 text-white font-bold">Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <p className='pt-7'>Completed tasks:</p>
            <div id="completed" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)}>
                {
                    completedTasks.map((task) => (
                        <div id={task._id} key={task._id} draggable="true" onDragStart={(event) => drag(event)} className="bg-white space-y-3 p-4 rounded-lg shadow">
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
                            <div className="flex gap-2">
                                <Link to={`/dashboard/edit-task/${task?._id}`}><button className="bg-lime-400 rounded-md px-2 py-1 text-red-600 font-bold">Edit</button></Link>
                                <button onClick={() => handleDeleteTask(task)} className="bg-red-600 rounded-md px-2 py-1 text-white font-bold">Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* <br /> */}
            {/* <img id="drag1" src="https://www.w3schools.com/html/img_logo.gif" draggable="true" onDragStart={(event) => drag(event)} width="336" height="69" /> */}

            {/* <div draggable id="to-do">
                <div>
                    <h2>ToDo</h2>
                </div>
            </div>
            <div draggable onDrop={(e) => handleOnDrop(e)} id="ongoing">
                <h2>Ongoing</h2>
            </div>
            <div draggable id="completed">
                <h2>Completed</h2>
            </div> */}
        </div>
    );
};

export default DraggableTasks;