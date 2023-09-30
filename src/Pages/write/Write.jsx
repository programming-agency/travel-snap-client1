import { useContext, useEffect, useState } from "react"; 
import axios from "axios";
// import { Context } from "../../context/Context";
import { Box, Button, Paper, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Write() {
    const [formValues, setFormValues] = useState({})
    const [file, setFile] = useState(null);
    // const { user } = useContext(Context);
    const [userDetails, setUserDetails] = useState(null)

    const navigate = useNavigate()

    const handleFile = async (e) => {
        setFile(e.target.files[0]);
        const file = e.target.files[0]
        console.log(file)
        const formData = new FormData()
        formData.append('file', file)
        const res = await axios.post('/api/upload', formData)
        console.log(res)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Create a new post
            console.log(formValues)
            const formData = new FormData();
            formData.append('file', file);
            console.log(userDetails)
            // formData.append('title', formValues.title)
            // formData.append('content', formValues.content)
            const res = await axios.post("/posts", { ...formValues, userName: userDetails.userName });
            if (res) {
                navigate('/')
            }
            console.log(res)

        } catch (err) {
            console.error("Error creating post:", err);
        }
    };

    const hanldeChange = (e) => {
        const newFormValues = formValues;
        newFormValues[e.target.name] = e.target.value;
        setFormValues(formValues)
    }

    // useEffect(() => {
    //     const user = localStorage.getItem('user');
    //     if (!user) return navigate('/login')
    //     setUserDetails(JSON.parse(user))

    // }, [])

    return (
        <div className="pt-20">
            {file && (
                <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
            )}
            <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center' }}>
                <Paper style={{ width: '560px', padding: '24px' }} >

                    <h2 style={{ textAlign: 'center', marginBottom: '16px' }}>Write post</h2>
                    <TextField id="fileInput" type="file" onChange={handleFile} fullWidth variant="outlined" />
                    <TextField onChange={hanldeChange} name="title" style={{ marginTop: '20px' }} label="Title" fullWidth variant="outlined" />
                    <TextField onChange={hanldeChange} name="content" multiline label="Content" rows={10} id="fileInput" style={{ marginTop: '20px' }} fullWidth variant="outlined" />

                    <Box >
                        <Button fullWidth variant="contained" style={{ marginTop: '20px' }} type="submit">
                            Publish
                        </Button>
                    </Box>
                </Paper>

            </form>
        </div>
    );
}
