import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField } from "@mui/material";

export default function Write() {
    const [formValues, setFormValues] = useState({
        title: "",
        content: "",
        country: "",
        userName: 'Sumaiya jannat',
    });

    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        const newFormValues = { ...formValues }; // Create a copy of formValues
        newFormValues[e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    const handleFile = async (e) => {
        setFile(e.target.files[0]);
        try {
            const formData = new FormData();
            formData.append('file', e.target.files[0]);
            const result = await axios.post('/api/upload', formData);
            console.log(result);
            if (result?.data.filePath) {
                const newFormValues = { ...formValues };
                newFormValues['image'] = result?.data.filePath;
                setFormValues(newFormValues);
            }
        } catch (error) {
            alert('Failed to upload');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formValues.title || !formValues.content || !file || !formValues.country) {
            console.log("Title, content, and file are required.");
            return;
        }

        try {
            const data = { ...formValues };
            console.log(data);
            const result = await axios.post('/api/posts/create', data);
            console.log(result);
            
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    return (
        <div className="pt-20">
            {file && <img className="mx-auto h-[400px] w-[400px]" src={URL.createObjectURL(file)} alt="" />}
            <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center' }}>
                <Paper style={{ width: '560px', padding: '24px' }} >
                    <h2 style={{ textAlign: 'center', marginBottom: '16px' }}>Write post</h2>
                    <TextField id="fileInput" type="file" onChange={handleFile} fullWidth variant="outlined" required />
                    <TextField onChange={handleChange} name="title" style={{ marginTop: '20px' }} label="Title" fullWidth variant="outlined" required />
                    <TextField onChange={handleChange} name="content" multiline label="Content" rows={10} id="fileInput" style={{ marginTop: '20px' }} fullWidth variant="outlined" required />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                        <Select
                            onChange={handleChange}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Country"
                            name="country" // Make sure to set the name attribute
                            value={formValues.country} // Bind the value to formValues.country
                        >
                            <MenuItem value={'USA'}>USA</MenuItem>
                            <MenuItem value={'Canada'}>Canada</MenuItem>
                            <MenuItem value={'UK'}>UK</MenuItem>
                            {/* Add more countries as needed */}
                        </Select>
                    </FormControl>
                    <Box>
                        <Button fullWidth variant="contained" style={{ marginTop: '20px' }} type="submit">
                            Upload
                        </Button>
                    </Box>
                </Paper>
            </form>
        </div>
    );
}