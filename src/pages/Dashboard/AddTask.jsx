import SectionTitle from "../../../components/SectionTitle/SectionTitle.jsx";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure.jsx";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddTask = () => {

    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data)

        const taskItem = {
            email: user?.email,
            title: data.title,
            description: data.description,
            deadline: data.deadline,
            priority: data.priority,
            status: data.status,
            // status: 'to-do',
        }
        // 
        const taskRes = await axiosSecure.post(`/tasks`, taskItem);
        console.log(taskRes.data);
        if (taskRes.data.insertedId) {
            // show success popup
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.title} is inserted to the task list.`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div>
            <SectionTitle heading={`Insert a Task`} subHeading={`opening a new window`}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Task Title*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Title of the task"
                            {...register('title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Task Description</span>
                        </label>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Description of the task..."></textarea>
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Deadline*</span>
                        </label>
                        <input
                            type="date"
                            placeholder="Deadline of the task"
                            {...register('deadline', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* priority */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Priority*</span>
                            </label>
                            <select {...register("priority", { required: true })} className="select select-bordered w-full">
                                <option disabled value="low">Select the Priority</option>
                                <option value="low">Low</option>
                                <option value="moderate">Moderate</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        {/* status */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Status*</span>
                            </label>
                            <select {...register("status", { required: true })} className="select select-bordered w-full">
                                <option disabled value="to-do">Select the Status</option>
                                <option value="to-do">to-do</option>
                                {/* <option value="ToDo">to-do</option> */}
                                <option value="ongoing">ongoing</option>
                                <option value="completed">completed</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn">
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;