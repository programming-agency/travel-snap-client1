import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationBar() {


    const navOption =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About us</Link></li>
            <li><Link to='/destination'>Destination</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><Link to='/premium'>Premium</Link></li>
            <li><Link to='/login'>Login</Link></li>


        </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl  bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOption}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Travel Snap</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div>
                    </div>
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
            </div>
        </div>
    )
}
