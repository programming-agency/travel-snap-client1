import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useEffect, useState } from 'react';
import { FiMapPin, FiMessageSquare } from 'react-icons/fi';
import axios from 'axios';

export default function Destination() {

    const [countrys, setCountrys] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            try {
                const result = await axios('/api/posts')
                setCountrys(result.data)
                console.log(result.data);
            } catch (error) {

            }
        }

        getPosts()
    }, [])



    const SouthAmerica = countrys.filter(item => item.country === "South America")
    const Europe = countrys.filter(item => item.country === "Europe")
    const NorthAmerica = countrys.filter(item => item.country === "North America")
    const Asia = countrys.filter(item => item.country === "Asia")
    const Africa = countrys.filter(item => item.country === "Africa")


    // console.log(SouthAmerica);

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <div>
            {/* destination banner */}
            <div className="hero h-[440px]" style={{ backgroundImage: 'url("/destintion.png")' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold"> Destination</h1>
                    </div>
                </div>
            </div>

            <Box>
                <TabContext value={value}>
                    <Box className='flex justify-center' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="South America" value="1" />
                            <Tab label="North America" value="2" />
                            <Tab label="Europe" value="3" />
                            <Tab label="Africa" value="4" />
                            <Tab label="Asia" value="5" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        {/* SouthAmerica */}
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                SouthAmerica.map((country, index) => (
                                    <div className="card md:w-96 w-full   bg-white shadow-xl">
                                        <figure>< img className='w-full h-[250px]' src={country.image} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h1>{country.date}</h1>
                                            <h2 className="card-title">
                                                {country.location}
                                            </h2>
                                            <p>  {country.title} </p>
                                            <div className="card-actions justify-between">
                                                <div className='flex items-center gap-2' > <FiMapPin />{country.location}</div>
                                                <div className="flex items-center gap-2"> <FiMessageSquare />{country.views}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel value="2">
                        {/* NorthAmerica */}
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                NorthAmerica.map((country, index) => (
                                    <div className="card md:w-96 w-full   bg-white shadow-xl">
                                        <figure>< img className='w-full h-[250px]' src={country.image} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h1>{country.date}</h1>
                                            <h2 className="card-title">
                                                {country.location}
                                            </h2>
                                            <p>  {country.title} </p>
                                            <div className="card-actions justify-between">
                                                <div className='flex items-center gap-2' > <FiMapPin />{country.location}</div>
                                                <div className="flex items-center gap-2"> <FiMessageSquare />{country.views}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </TabPanel>
                    <TabPanel value="3">
                        {/* Europe  */}
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                Europe.map((country, index) => (
                                    <div className="card md:w-96 w-full   bg-white shadow-xl">
                                        <figure>< img className='w-full h-[250px]' src={country.image} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h1>{country.date}</h1>
                                            <h2 className="card-title">
                                                {country.location}
                                            </h2>
                                            <p>  {country.title} </p>
                                            <div className="card-actions justify-between">
                                                <div className='flex items-center gap-2' > <FiMapPin />{country.location}</div>
                                                <div className="flex items-center gap-2"> <FiMessageSquare />{country.views}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </TabPanel>
                    <TabPanel value="4">

                        <div className='grid grid-cols-3 gap-5'>
                            {/* Africa */}
                            {
                                Africa.map((country, index) => (
                                    <div className="card md:w-96 w-full   bg-white shadow-xl">
                                        <figure>< img className='w-full h-[250px]' src={country.image} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h1>{country.date}</h1>
                                            <h2 className="card-title">
                                                {country.location}
                                            </h2>
                                            <p>  {country.title} </p>
                                            <div className="card-actions justify-between">
                                                <div className='flex items-center gap-2' > <FiMapPin />{country.location}</div>
                                                <div className="flex items-center gap-2"> <FiMessageSquare />{country.views}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </TabPanel>
                    <TabPanel value="5">
                        {/* Asia */}

                        <div className='grid grid-cols-3 gap-5'>
                            {
                                Asia.map((country, index) => (
                                    <div className="card md:w-96 w-full   bg-white shadow-xl">
                                        <figure>< img className='w-full h-[250px]' src={country.image} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h1>{country.date}</h1>
                                            <h2 className="card-title">
                                                {country.location}
                                            </h2>
                                            <p>  {country.title} </p>
                                            <div className="card-actions justify-between">
                                                <div className='flex items-center gap-2' > <FiMapPin />{country.location}</div>
                                                <div className="flex items-center gap-2"> <FiMessageSquare />{country.views}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </TabPanel>
                </TabContext>
            </Box>

        </div>
    )
}