import { useState } from "react";
import axios from "axios";
import { Box, Button, Paper, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Write() {
    const [formValues, setFormValues] = useState({
        title: "",
        content: "",
    });
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleFile = async (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formValues.title || !formValues.content || !file) {
            console.log("Title, content, and file are required.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("title", formValues.title);
            formData.append("content", formValues.content);

            // Make sure to replace this URL with your server's URL
            const res = await axios.post("http://localhost:3000/api/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (res.status === 200) {
                console.log("File uploaded successfully.");
                // Handle the response as needed
            } else {
                console.error("Failed to upload file:", res.data);
            }
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="pt-20">
            {file && <img className="writeImg" src={URL.createObjectURL(file)} alt="" />}
            <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center' }}>
                <Paper style={{ width: '560px', padding: '24px' }} >

                    <h2 style={{ textAlign: 'center', marginBottom: '16px' }}>Write post</h2>
                    <TextField id="fileInput" type="file" onChange={handleFile} fullWidth variant="outlined" />
                    <TextField onChange={handleChange} name="title" style={{ marginTop: '20px' }} label="Title" fullWidth variant="outlined" />
                    <TextField onChange={handleChange} name="content" multiline label="Content" rows={10} id="fileInput" style={{ marginTop: '20px' }} fullWidth variant="outlined" />

                    <Box >
                        <Button fullWidth variant="contained" style={{ marginTop: '20px' }} type="submit">
                            Upload
                        </Button>
                    </Box>
                </Paper>
            </form>
        </div>
    );
}
