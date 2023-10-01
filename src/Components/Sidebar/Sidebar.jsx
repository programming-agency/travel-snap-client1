import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function Sidebar() {

    const [user, setUser] = useState({});

    useEffect(() => {
        const user = localStorage.getItem('user');
        setUser(JSON.parse(user))

    }, [])
    return (
        <div className=' bg-red-200 rounded-lg justify-end p-5'>
            <h1 className='text-2xl text-center text-black my-5'> ABOUT ME</h1>
            <img className='rounded-full mx-auto h-[200px] w-[200px]'
                src={user.photo}
                alt=""
            />
            <h1 className='text-xl text-center text-black py-5'>{user.userName}</h1>
            <Button variant="contained" href="/aboutme">
                My Profile
            </Button>
        </div>
    )
}
