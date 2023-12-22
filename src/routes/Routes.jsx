import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home/Home.jsx';
import Register from "../pages/Authentication/Register/Register";
import Login from "../pages/Authentication/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact/ContactUs";
import ErrorElement from "../pages/ErrorPage/ErrorElement";
import NotFound from "../pages/NotFoundPage/NotFound";
import Root from "../layouts/Root.jsx/Root";

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
            {
                path: 'dashboard',
                element: <PrivateRoute><Contact /></PrivateRoute>
            },
            {
                path: 'contact',
                element: <PrivateRoute><Contact /></PrivateRoute>
            },
        ],
    },
])