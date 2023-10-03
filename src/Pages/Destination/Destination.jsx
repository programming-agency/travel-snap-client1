import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useEffect, useState } from 'react';
import { FiMapPin } from 'react-icons/fi';
import axios from 'axios';
import { SERVER_URL } from '../../config/constant';

export default function Destination() {

    const [countrys, setCountrys] = useState([])
    const [showFullContent, setShowFullContent] = useState(false);


    useEffect(() => {
        const getPosts = async () => {
            try {
                const result = await axios("/api/posts");
                setCountrys(result.data);
                console.log(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getPosts();
    }, []);

    console.log(countrys);

    const toggleContent = () => {
        setShowFullContent(!showFullContent);
    };


    const SouthAmerica = countrys.filter(item => item.country === "South America")
    // console.log(SouthAmerica);
    const Europe = countrys.filter(item => item.country === "Europe")
    // console.log(Europe);
    const NorthAmerica = countrys.filter(item => item.country === "North America")
    // console.log(NorthAmerica);
    const Asia = countrys.filter(item => item.country === "Asia")
    // console.log(Asia);
    const Africa = countrys.filter(item => item.country === "Africa")
    // console.log(Africa);

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
                                    (
                                        <div className="card card-compact w-96 bg-white p-3  shadow-xl">
                                            <div className='flex justify-between'>
                                                <div>
                                                    <h2 className="card-title">{country.userName}</h2>
                                                </div>


                                            </div>

                                            <figure><img className='w-full h-[200px]' src={`${SERVER_URL}/${country.image}`} alt="User Post Images" /></figure>
                                            <div className="card-body">
                                                <h1>{new Date(country?.createdAt).toDateString()}</h1>
                                                <h2 className="card-title">{country.title}</h2>
                                                {country.content.length > 100 && (
                                                    <div>
                                                        <p>{showFullContent ? country.content : country.content.slice(0, 100)}</p>
                                                        <button className='text-red-500' onClick={toggleContent}>
                                                            {showFullContent ? "See Less" : "See More"}
                                                        </button>
                                                    </div>
                                                )}
                                                <div className='flex items-center gap-2'><FiMapPin />{country?.country}</div>
                                            </div>
                                        </div>
                                    )
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel value="2">
                        {/* NorthAmerica */}
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                NorthAmerica.map((country, index) => (
                                    (
                                        (
                                            <div className="card card-compact w-96 bg-white p-3  shadow-xl">
                                                <div className='flex justify-between'>
                                                    <div>
                                                        <h2 className="card-title">{country.userName}</h2>
                                                    </div>


                                                </div>

                                                <figure><img className='w-full h-[200px]' src={`${SERVER_URL}/${country.image}`} alt="User Post Images" /></figure>
                                                <div className="card-body">
                                                    <h1>{new Date(country?.createdAt).toDateString()}</h1>
                                                    <h2 className="card-title">{country.title}</h2>
                                                    {country.content.length > 100 && (
                                                        <div>
                                                            <p>{showFullContent ? country.content : country.content.slice(0, 100)}</p>
                                                            <button className='text-red-500' onClick={toggleContent}>
                                                                {showFullContent ? "See Less" : "See More"}
                                                            </button>
                                                        </div>
                                                    )}
                                                    <div className='flex items-center gap-2'><FiMapPin />{country?.country}</div>
                                                </div>
                                            </div>
                                        )
                                    )
                                ))
                            }
                        </div>

                    </TabPanel>
                    <TabPanel value="3">
                        {/* Europe  */}
                        <div className='grid grid-cols-3 gap-5'>
                            {/* ahhhh */}
                            {
                                Europe.map((country, index) => (

                                    ((
                                        <div className="card card-compact w-96 bg-white p-3  shadow-xl">
                                            <div className='flex justify-between'>
                                                <div>
                                                    <h2 className="card-title">{country.userName}</h2>
                                                </div>
                                            </div>

                                            <figure><img className='w-full h-[200px]' src={`${SERVER_URL}/${country.image}`} alt="User Post Images" /></figure>
                                            <div className="card-body">
                                                <h1>{new Date(country?.createdAt).toDateString()}</h1>
                                                <h2 className="card-title">{country.title}</h2>
                                                {country.content.length > 100 && (
                                                    <div>
                                                        <p>{showFullContent ? country.content : country.content.slice(0, 100)}</p>
                                                        <button className='text-red-500' onClick={toggleContent}>
                                                            {showFullContent ? "See Less" : "See More"}
                                                        </button>
                                                    </div>
                                                )}
                                                <div className='flex items-center gap-2'><FiMapPin />{country?.country}</div>
                                            </div>
                                        </div>
                                    ))
                                ))
                            }
                        </div>

                    </TabPanel>
                    <TabPanel value="4">

                        <div className='grid grid-cols-3 gap-5'>

                            {
                                Africa.map((country, index) => ((
                                    (<div className="card card-compact w-96 bg-white p-3  shadow-xl">
                                        <div className='flex justify-between'>
                                            <div>
                                                <h2 className="card-title">{country.userName}</h2>
                                            </div>
                                        </div>

                                        <figure><img className='w-full h-[200px]' src={`${SERVER_URL}/${country.image}`} alt="User Post Images" /></figure>
                                        <div className="card-body">
                                            <h1>{new Date(country?.createdAt).toDateString()}</h1>
                                            <h2 className="card-title">{country.title}</h2>
                                            {country.content.length > 100 && (
                                                <div>
                                                    <p>{showFullContent ? country.content : country.content.slice(0, 100)}</p>
                                                    <button className='text-red-500' onClick={toggleContent}>
                                                        {showFullContent ? "See Less" : "See More"}
                                                    </button>
                                                </div>
                                            )}
                                            <div className='flex items-center gap-2'><FiMapPin />{country?.country}</div>
                                        </div>
                                    </div>
                                    ))
                                ))
                            }
                        </div>

                    </TabPanel>
                    <TabPanel value="5">


                        <div className='grid grid-cols-3 gap-5'>
                            {/* Asia */}
                            {
                                Asia.map((country, index) => (
                                    (
                                        (
                                            <div className="card card-compact w-96 bg-white p-3  shadow-xl">
                                                <div className='flex justify-between'>
                                                    <div>
                                                        <h2 className="card-title">{country.userName}</h2>
                                                    </div>
                                                </div>

                                                <figure><img className='w-full h-[200px]' src={`${SERVER_URL}/${country.image}`} alt="User Post Images" /></figure>
                                                <div className="card-body">
                                                    <h1>{new Date(country?.createdAt).toDateString()}</h1>
                                                    <h2 className="card-title">{country.title}</h2>
                                                    {country.content.length > 100 && (
                                                        <div>
                                                            <p>{showFullContent ? country.content : country.content.slice(0, 100)}</p>
                                                            <button className='text-red-500' onClick={toggleContent}>
                                                                {showFullContent ? "See Less" : "See More"}
                                                            </button>
                                                        </div>
                                                    )}
                                                    <div className='flex items-center gap-2'><FiMapPin />{country?.country}</div>
                                                </div>
                                            </div>
                                        )
                                    )
                                ))
                            }
                        </div>
                    </TabPanel>
                </TabContext>
            </Box>

        </div>
    )
}