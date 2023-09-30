import { Button } from '@mui/material'
import React from 'react'

export default function Sidebar() {
    return (
        <div className=' bg-red-200 rounded-lg justify-end p-5'>
            <h1 className='text-2xl text-center text-black my-5'> ABOUT ME</h1>
            <img
                src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
                alt=""
            />
            <h1 className='text-xl text-black py-5'>Sumaiya Jannati</h1>
            <p className='text-black mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa sint placeat esse at, harum repellendus consectetur illum nihil culpa quas alias vero ab aliquam. Voluptas similique voluptates veritatis debitis?</p>
            <Button variant="contained" href="/aboutme">
                My Profile
            </Button>
        </div>
    )
}
