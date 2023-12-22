import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home/Home.jsx';
import Register from "../pages/Authentication/Register/Register";
import Login from "../pages/Authentication/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact/ContactUs";
import ErrorElement from "../pages/ErrorPage/ErrorElement";
import NotFound from "../pages/NotFoundPage/NotFound";
import Root from "../layouts/Root.jsx/Root";
import Dashboard from "../layouts/Dashboard.jsx";
import AddTask from "../pages/Dashboard/AddTask.jsx";
import AllTasks from "../pages/Dashboard/AllTasks.jsx";
import Tasks from "../pages/Dashboard/Tasks.jsx";
import EditTask from "../pages/Dashboard/EditTask.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '*',
                element: <NotFound></NotFound>
            },
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <Home />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'login',
                element: <Login />
            },
            // {
            //     path: 'tasks',
            //     element: <Tasks />
            // },
            // {
            //     path: 'tasks/:id',
            //     element: <TaskDetails />,
            //     loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/tasks/${params.id}`)
            // },
            /* {
                path: 'dashboard',
                element: <PrivateRoute><Dashboard /></PrivateRoute>
            }, */
            {
                path: 'contact',
                element: <PrivateRoute><Contact /></PrivateRoute>
            },
        ],
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        errorElement: <NotFound />,
        children: [
            {
                path: '*',
                element: <ErrorElement />
            },
            {
                index: true,
                element: <AllTasks />
            },
            // {
            //     index: true,
            //     element: <Tasks />
            // },
            {
                path: 'dndTasks',
                element: <Tasks />
            },
            {
                path: 'allTasks',
                element: <AllTasks />
            },
            {
                path: 'add-task',
                element: <AddTask />
            },
            {
                path: 'edit-task/:id',
                element: <EditTask />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/tasks/${params.id}`)
            },
        ]
    }
])