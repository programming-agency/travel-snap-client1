import React from 'react';
import NavigationBar from '../Pages/NavigationBar/NavigationBar';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')

    return (
        <div>
            {noHeaderFooter || <NavigationBar />}
            <Outlet />
        </div>
    );
};

export default Main;