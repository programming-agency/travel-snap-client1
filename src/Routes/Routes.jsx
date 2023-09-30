import {
    createBrowserRouter,

} from "react-router-dom";
import Main from '../Layout/Main'
import Home from '../Pages/Home/Home'
import Register from "../Pages/Shared/Register/Register";
import About from "../Pages/About/About";
import Login from "../Pages/Shared/Login/Login";
import Destination from "../Pages/Destination/Destination";
import Contact from "../Pages/Contact/Contact";
import Premium from "../Pages/Premium/Premium";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },

            {
                path: '/destination',
                element: <Destination />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/premium',
                element: <Premium />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },

        ]
    },
]);

export default router;