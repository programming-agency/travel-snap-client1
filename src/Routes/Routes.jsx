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
import Write from "../Pages/write/Write";
import Payment from "../Pages/Premium/Payment";
import AboutMe from "../Components/AboutMe/AboutMe";
import LandingPages from "../Pages/LandingPages/LandingPages";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/',
                element: <LandingPages />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/aboutme',
                element: <AboutMe />
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
                path: '/write',
                element: <Write />
            },
            {
                path: '/premium',
                element: <Premium />
            },
            {
                path: '/payment',
                element: <Payment />
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