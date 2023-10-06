import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField } from "@mui/material";


export default function Write() {

    const [error, setError] = useState()
    const [images, setImages] = useState([]);
    const [user, setUser] = useState([])
    // console.log(user);

    const [formValues, setFormValues] = useState({
        title: "",
        content: "",
        country: "",
        userName: "",
        email: "",
    });

    const [file, setFile] = useState([

    ]);

    useEffect(() => {
        const userData = localStorage.getItem('user');
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser)

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

    const handleFile = async (e) => {

        try {

            if (user.userType != "PREMIUM") {
                if (images.length > 0) {
                    alert("You can't upload multiple image.")
                    return
                }
            }

            const formData = new FormData()
            formData.append('file', e.target.files[0])
            const result = await axios.post('/api/upload', formData)
            console.log(result);
            if (result?.data.filePath) {
                const newImages = [...images, result?.data.filePath]
                setImages(newImages)

                const newFiles = [...file, e.target.files[0]]
                setFile(newFiles);

                // alert('Uploaded')
            }
        } catch (error) {
            console.log(error);
            alert('Failed to upload')
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formValues.title || !formValues.content || images.length < 1 || !formValues.country) {
            console.log("Title, content, and images are required.");
            return;
        }

        try {
            const data = { ...formValues, images };
            console.log(data);
            const result = await axios.post('/api/posts/create', data)
            console.log(result);

        } catch (error) {
            console.log(error);
            setError(error.response.data.message)
        }
    };



    return (
        <div className="pt-20">

            <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center' }}>
                <Paper style={{ width: '560px', padding: '24px' }} >

                    <h2 style={{ textAlign: 'center', marginBottom: '16px' }}>Write post</h2>
                    <TextField id="fileInput" type="file" onChange={handleFile} fullWidth variant="outlined" required />
                    <div className="grid grid-cols-3 gap-4 py-5">
                        {file.map((item, index) => (<div className="h-[100px] col-span-1 overflow-hidden rounded-lg ">
                            <img src={URL.createObjectURL(item)} alt="" />
                        </div>))}
                    </div>
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
