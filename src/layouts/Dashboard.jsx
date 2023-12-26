import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome, FaPlusCircle, FaEnvelope, FaSignOutAlt, FaInfoCircle, FaTasks, FaCode } from 'react-icons/fa';
// import { FcAbout } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import profileImage from "./../assets/images/profile-picture-5.jpg";


const Dashboard = () => {
    const { user, logOut } = useAuth();

    return (
        <div className="flex relative">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-green-900 text-white font-light py-7 hidden md:block">
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
                                <NavLink to="/dashboard/draggableTasks">
                                    <FaTasks />
                                    AllTasks</NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/dashboard/draggableTasks">
                                    <FaHome></FaHome>
                                    DraggableTasks</NavLink>
                            </li> */}
                            {/* <li>
                                <NavLink to="/dashboard/allTasks">
                                    <FaHome></FaHome>
                                    AllTasks</NavLink>
                            </li> */}
                            <li>
                                <NavLink to={`/dashboard/add-task`}>
                                    <FaPlusCircle />
                                    Add Task</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/dashboard/source-codes`}>
                                    <FaCode />
                                    SourceCodes
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/dashboard/dndTasks">
                                    <FaHome></FaHome>
                                    dndTasks</NavLink>
                            </li> */}
                            <li>
                                <NavLink onClick={logOut} to={`/`}>
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
            <div className="flex-1 md:p-8">
                <Outlet></Outlet>
            </div>

            <Navbar fluid={true} rounded={true} className="top-3 right-3 fixed mt-6 block md:hidden">
                <Navbar.Toggle className="top-3 right-3 fixed block md:hidden bg-green-500 text-red-600" />
                <Navbar.Collapse>
                    <Navbar.Link href="/" active={true}>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/dashboard/draggableTasks">Dashboard</Navbar.Link>
                    <Navbar.Link href="/dashboard/add-task">Add Task</Navbar.Link>
                    {/* <Navbar.Link href="/blogs">Blogs</Navbar.Link> */}
                    {/* <Navbar.Link href="/about">About Us</Navbar.Link> */}
                    <Navbar.Link href="/contact">Contact Us</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            {/* floating nav */}
            <Link to={`/dashboard/add-task`}>
                <div className=" bottom-6 right-3 rounded-full bg-red-600 h-10 w-10 text-center items-center flex justify-center text-3xl text-lime-300 font-bold fixed">
                    +
                </div>
            </Link>
        </div>
    );
};

export default Dashboard;