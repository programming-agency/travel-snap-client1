import { Box, Button, Paper, Typography, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MyPost from './MyPost';

const AboutMe = () => {

    const [user, setUser] = useState({});


    useEffect(() => {
        // Fetch user profile data from your API endpoint
        axios.get('/api/user/email/hasheubur@gmail.com') // Replace with your API endpoint
            .then((response) => {
                // Set the user data in the state when the data is fetched successfully
                setUser(response.data);
            })
            .catch((error) => {
                // Handle any errors that may occur during the fetch
                console.error('Error fetching user data:', error);
            });
    }, []);

    console.log(user.userName);

    return (

        <Box>
            <Box>
                <div className="hero  h-[350px]" style={{ backgroundImage: 'url("/contact.png")' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold"> About Me </h1>
                            <Typography className='text-center' variant='h5'>{user.userName}</Typography>


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
                            </Box>
                            <Box className="flex justify-center"><Button href='/UpdateUserProfile' size='large' variant='contained'>Update Profile</Button></Box>
                        </Box>
                    </Box>


                </Paper>
            </Box>

            {/*  my post section */}

            <Box className='pt-10 px-10 '>
                <h1 className='text-center text-4xl my-5'> My post</h1>

                <MyPost />
            </Box>
        </Box>
    );
};

export default AboutMe;