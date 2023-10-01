import { Box, Button, Paper, Typography, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react';

const AboutMe = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const user = localStorage.getItem('user');
        setUser(JSON.parse(user))

    }, [])

    console.log(user.userName);

    return (

        <Box>
            <div className="hero  h-[350px]" style={{ backgroundImage: 'url("/contact.png")' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold"> About Me </h1>
                        <Typography variant='h5'>{user.userName}</Typography>


                    </div>
                </div>
            </div>
            <Paper className='h-full p-2'>
                <Typography align='center' marginBottom={10} marginTop={10} variant='h5'>User Profile</Typography>


                <Box className='flex gap-10 items-center'>
                    <Paper className='space-y-3 p-10'>
                        <img className='rounded-full h-[300px] w-[300px]' title={user.userName} src={user.photo} alt="" />

                        <Typography variant='h5'>{user.userName}</Typography>
                    </Paper>
                    <Box>
                        <Box className="flex-col flex gap-5 p-5" >
                            <Box>
                                <Box> User Name</Box>
                                <Box className='border w-[322px] py-3 rounded-md px-3 '>{user.userName}</Box>

                            </Box>
                            <Box>
                                <Box> User Email</Box>
                                <Box className='border w-[322px] py-3 rounded-md px-3 '>{user.email}</Box>

                            </Box>
                            <Box>
                                <Box> User Address</Box>
                                <Box className='border w-[322px] py-3 rounded-md px-3 '>Bagerhat khulna</Box>

                            </Box>


                        </Box>
                        <Box className="flex justify-center"><Button size='large' variant='contained'>Update</Button></Box>
                    </Box>
                </Box>


            </Paper>
        </Box>
    );
};

export default AboutMe;