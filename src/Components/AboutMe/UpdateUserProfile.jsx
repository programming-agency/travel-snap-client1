import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Paper, TextField } from '@mui/material';

function UpdateUserProfile() {
    const [currentEmail, setCurrentEmail] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const [message, setMessage] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`/api/user/email/${currentEmail}`, {
                email,
                userName,
                pass,
            });

            if (response.status === 200) {
                setMessage('Profile updated successfully.');
            } else if (response.status === 404) {
                setMessage('User not found.');
            } else {
                setMessage('Error updating profile.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred.');
        }
    };

    return (
        <div>
            <div className="hero h-[350px]" style={{ backgroundImage: 'url("/contact.png")' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Update User Profile</h1>
                    </div>
                </div>
            </div>

            <Paper className='py-10'>
                <form className='text-center space-y-5' onSubmit={handleFormSubmit}>
                    <Box>
                        <TextField
                            label='Current Email'
                            type="email"
                            value={currentEmail}
                            onChange={(e) => setCurrentEmail(e.target.value)}
                            required
                        />
                    </Box>
                    <Box>
                        <TextField
                            label='New Email'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Box>
                    <Box>
                        <TextField
                            type="text"
                            label='User Name'
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </Box>
                    <Box>
                        <TextField
                            type="password"
                            label='Password'
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            required
                        />
                    </Box>
                    <Button variant='contained' type="submit">
                        Update Profile
                    </Button>
                    <Box className='text-success'>{message}</Box>
                </form>
            </Paper>
        </div>
    );
}

export default UpdateUserProfile;