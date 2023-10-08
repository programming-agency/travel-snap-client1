import React, { useEffect, useState } from 'react';
import { FaCheck, } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Premium = () => {
    const navigate = useNavigate();
    const [userType, setUserType] = useState()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        setUserType(user.userType);
    }, [])

    // console.log(userType);

    return (
        <div className='pt-32 px-44'>

            <div className='flex justify-center shadow-sm  gap-5 px-2'>

                <div className=' px-[33px] w-2/4  rounded-lg shadow text-center bg-[#FFFFFF]'>
                    <h2 className=' pt-[20px] text-2xl font-bold text-black
                 leading-[50px]'> Free</h2>
                    <p className='text-[Inter] text-[32px] text-black font-bold leading-[50px] '>$0.00 <span className='text-[Inter] leading-6  text-[#767676] text-[15px]'>BD TK</span></p>

                    {/* Free card */}
                    <div className='space-y-5 '>
                        <div className='flex mt-10 gap-5 items-center'>
                            <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                            <p className='  text-[15px] capitalize leading-5'>Limited Blogs</p>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <p className=' text-[#FFB400] h-6'> <FaCheck /> </p>
                            <p className='  text-[15px] capitalize leading-5 '> 1 Picture Per Blog</p>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <p className='text-[#FFB400] h-6'> <FaCheck /> </p>

                            <p className='  text-[15px] capitalize leading-5'>More Suggestions for Travels </p>
                        </div>

                        <div className='flex gap-5 items-center'>
                            <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                            <p className='  text-[15px] capitalize leading-5'>seo optimization</p>
                        </div>
                    </div>

                    <button className='font-bold mt-10 mb-5   text-sm text-[#2B2B2B] rounded-[30px] shadow-2xl px-10 py-[10px]'> Free</button>
                </div>
                {/* PREMIUM */}
                <div className='text-center w-2/4 px-[33px] shadow-lg rounded-lg  bg-[#FFFFFF]'>


                    <div>
                        <h2 className='  text-2xl pt-[20px] font-bold text-black leading-[50px]'>Premium</h2>
                        <p className='text-[Inter] text-black text-[32px] font-bold leading-[50px] '>$120.00 <span className='text-[Inter] leading-6  text-[#767676] text-[15px]'>BD TK</span></p>

                        <div className='space-y-5'>
                            <div className='flex mt-10  gap-5 items-center'>
                                <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                                <p className='  text-[15px] capitalize leading-5'>Unlimited Blogs</p>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <p className=' text-[#FFB400] h-6'> <FaCheck /> </p>
                                <p className='  text-[15px] capitalize leading-5 '>10 Picture Per Blog</p>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                                <p className='  text-[15px] capitalize leading-5'>More Suggestions for Travels</p>
                            </div>

                            <div className='flex gap-5 items-center'>
                                <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                                <p className='  text-[15px] capitalize leading-5'>seo optimization</p>
                            </div>
                        </div>
                        {userType === 'PREMIUM' ? (
                            <button
                                className='font-bold mt-10 text-sm text-[#2B2B2B] rounded-[30px] bg-[#FFB400]   shadow-2xl px-10 py-[10px]'
                                disabled
                            >
                                Already  Purchased
                            </button>
                        ) : (
                            <button
                                onClick={() => navigate('/payment')}
                                className='font-bold mt-10 text-sm text-[#2B2B2B] rounded-[30px] bg-[#FFB400] shadow-2xl px-10 py-[10px]'
                            >
                                Buy NOW
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Premium;