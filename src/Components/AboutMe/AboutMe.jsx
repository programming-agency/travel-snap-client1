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

                    </div>
                </div>
            </div>
            <Paper className='h-full p-2'>
                <Typography align='center' marginBottom={10} variant='h5'>User Profile</Typography>


                <Box className='flex gap-10 items-center'>
                    <Paper className='space-y-3 p-10'>
                        <img className='rounded-full h-[300px] w-[300px]' src={user.photo} alt="" />
                                               
                        <Typography variant='h5'>{user.userName}</Typography>
                    </Paper>
                    <Box>
                        <Box className="flex-col flex gap-5 p-5" >
                            <Box>
                                <TextField
                                    defaultValue={user.userName}
                                    label=' User Name'
                                    className="w-[322px]" />

                            </Box>

                            <Box>
                                <TextField
                                    defaultValue={user.email}
                                    label='Email'
                                    className="w-[322px]" />
                            </Box>
                            <Box>
                                <TextField
                                    defaultValue="383.KU,Bangladesh"
                                    label='Address'
                                    className="w-[322px]" />
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