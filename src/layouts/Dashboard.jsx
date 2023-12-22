import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaPlusCircle, FaEnvelope, FaSignOutAlt, FaInfoCircle } from 'react-icons/fa';
// import { FcAbout } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import { Avatar, Dropdown } from "flowbite-react";
import profileImage from "./../assets/images/profile-picture-5.jpg";


const Dashboard = () => {
    const { user, logOut } = useAuth();

    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-green-900 text-white font-light py-7">
                <div className="ml-7 w-11">
                    {
                        user && <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={
                                user.photoURL ?
                                    <Avatar
                                        alt="User settings"
                                        img={user?.photoURL}
                                        rounded={true}
                                    />
                                    :
                                    <Avatar
                                        alt="User settings"
                                        img={profileImage}
                                        rounded={true}
                                    />
                            }
                        >
                            <Dropdown.Header>
                                {user.displayName && <span className="block text-sm">{user?.displayName}</span>}
                                {user.email && <span className="block truncate text-sm font-medium">{user?.email}</span>}
                            </Dropdown.Header>
                            <Dropdown.Item href='/dashboard'>Dashboard</Dropdown.Item>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={logOut/* handleLogOut */}>Logout</Dropdown.Item>
                        </Dropdown>
                    }
                </div>
                {/* min-h-full */}
                <ul className="menu p-4">
                    {
                        <>
                            <li>
                                <NavLink to="/dashboard/tasksHome">
                                    <FaHome></FaHome>
                                    Dashboard Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/dashboard/add-task`}>
                                    <FaPlusCircle />
                                    Add Task</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/logout`}>
                                    <FaSignOutAlt />
                                    LogOut</NavLink>
                            </li>
                        </>
                    }

                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            {/* <FcAbout /> */}
                            < FaInfoCircle />
                            About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact Us</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;