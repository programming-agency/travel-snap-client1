import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField } from "@mui/material";


export default function Write() {

    const [error, setError] = useState()

    const [formValues, setFormValues] = useState({
        title: "",
        content: "",
        country: "",
        userName: "",
        email: "",
    });

    const [file, setFile] = useState(null);

    useEffect(() => {
        const userData = localStorage.getItem('user');
        const parsedUser = JSON.parse(userData);

        if (parsedUser && parsedUser.userName) {
            setFormValues((prevFormValues) => ({
                ...prevFormValues,
                userName: parsedUser.userName,
                email: parsedUser.email,
            }));
        }
    }, []);

    const handleChange = (e) => {
        const newFormValues = { ...formValues };;
        newFormValues[e.target.name] = e.target.value;
        setFormValues(newFormValues)
    }

    // const handleFile = async (e) => {
    //     setFile(e.target.files[0]);
    //     try {
    //         const formData = new FormData()
    //         formData.append('file', e.target.files[0])
    //         const result = await axios.post('/api/upload', formData)
    //         console.log(result);
    //         if (result?.data.filePath) {
    //             // alert('Uploaded')
    //             const newFormValues = { ...formValues };
    //             newFormValues['image'] = result?.data.filePath;
    //             setFormValues(newFormValues)

    //             // document.getElementById('fileInput').value = '';

    //         }
    //     } catch (error) {
    //         alert('Failed to upload')
    //     }
    // };

    const handleFile = async (e) => {
        const files = e.target.files;

        if (files.length !== 3) {
            alert('Please select exactly three image files.');
            return;
        }

        const formData = new FormData();

        for (let i = 0; i < 3; i++) {
            formData.append(`image${i + 1}`, files[i]);
        }

        try {
            const result = await axios.post('/api/upload', formData);
            console.log(result);
            if (result?.data.filePaths) {
                const newFormValues = { ...formValues };
                newFormValues['image1'] = result?.data.filePaths[0];
                newFormValues['image2'] = result?.data.filePaths[1];
                newFormValues['image3'] = result?.data.filePaths[2];
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
            const result = await axios.post('/api/posts/create', data)
            console.log(result);

        } catch (error) {
            console.error("Error uploading file:", error);
            setError(error.response.data.message)
        }
    };



    return (
        <div className="pt-20">
            {file && <img className="mx-auto h-[400px] w-[400px]" src={URL.createObjectURL(file)} alt="" />}
            <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center' }}>
                <Paper style={{ width: '560px', padding: '24px' }} >

                    <h2 style={{ textAlign: 'center', marginBottom: '16px' }}>Write post</h2>

                    {/* <TextField id="fileInput" type="file" onChange={handleFile} fullWidth variant="outlined" required /> */}

                    <TextField
                        id="fileInput"
                        type="file"
                        inputProps={{ multiple: true }} // Allow multiple file selection
                        onChange={handleFile}
                        fullWidth
                        variant="outlined"
                        required
                    />

                    <TextField onChange={handleChange} name="title" style={{ marginTop: '20px' }} label="Title" fullWidth variant="outlined" required />
                    <TextField onChange={handleChange} name="content" multiline label="Content" rows={10} id="fileInput" style={{ marginTop: '20px', marginBottom: '20px' }} fullWidth variant="outlined" required />

                    <FormControl className="pt-10" fullWidth>
                        <InputLabel
                            id="demo-simple-select-label">Country</InputLabel>
                        <Select
                            onChange={handleChange}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Country"
                            name="country" // Make sure to set the name attribute
                            value={formValues.country}
                        >
                            <MenuItem value={'South America'}>South America</MenuItem>
                            <MenuItem value={"North America"}>North America</MenuItem>
                            <MenuItem value={"Europe"}>Europe</MenuItem>
                            <MenuItem value={"Africa"}>Africa</MenuItem>
                            <MenuItem value={"Asia"}>Asia</MenuItem>
                        </Select>
                    </FormControl>
                    <Box >
                        <Button fullWidth variant="contained" style={{ marginTop: '20px' }} type="submit">
                            Upload
                        </Button>
                        <Box className='text-red-600 text-center'> {error}</Box>
                    </Box>
                </Paper>
            </form>
        </div>
    );
}





