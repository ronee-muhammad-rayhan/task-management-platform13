import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle.jsx";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure.jsx";
import Swal from "sweetalert2";

const EditTask = () => {
    // const item = useLoaderData();
    // console.log(item);
    const { title, description, deadline, priority, _id } = useLoaderData();

    const { register, handleSubmit/* , reset */ } = useForm();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data)

        // now send the task item data to the server
        const taskItem = {
            title: data.title,
            description: data.description,
            deadline: data.deadline,
            priority: data.priority,
            status: 'to-do',
        }
        // 
        const taskRes = await axiosSecure.patch(`/tasks/${_id}`, taskItem);
        console.log(taskRes.data);
        if (taskRes.data.modifiedCount > 0) {
            // show success popup
            // reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.title} is updated.`,
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
                            <span className="label-text">Task Title</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={title}
                            placeholder="Title of the task"
                            {...register('title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Task Description</span>
                        </label>
                        <textarea defaultValue={description} {...register('description')} className="textarea textarea-bordered h-24" placeholder="Description of the task..."></textarea>
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input
                            type="date"
                            defaultValue={deadline}
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
                            <select defaultValue={priority}  {...register("priority", { required: true })} className="select select-bordered w-full">
                                <option disabled value="low">Select the Priority</option>
                                <option value="low">Low</option>
                                <option value="moderate">Moderate</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn">
                        Update Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditTask;