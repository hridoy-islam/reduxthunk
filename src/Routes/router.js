import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Main from "../Layouts/Main";
import AddPost from "../Pages/Admin/AddPost";
import Admin from "../Pages/Admin/Admin";
import EditPost from "../Pages/Admin/EditPost";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import SinglePost from "../Pages/SinglePost";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/posts/:id",
                element: <SinglePost />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard",
                element: <Admin />,
            },
            {
                path: "addpost",
                element: <AddPost />,
            },
            {
                path: 'editpost/:id',
                element: <EditPost />,
            }
        ]
    }
]);

export default routes;