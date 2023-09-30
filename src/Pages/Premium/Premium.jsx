import React from 'react';
import { FaCheck, } from 'react-icons/fa';
import { FiX } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const Premium = () => {
    const navigate = useNavigate();
    return (
        <div className='pt-32 px-44'>

            <div className='flex justify-center shadow-sm  gap-5 px-2'>

                <div className=' px-[33px] w-2/4  rounded-lg shadow text-center bg-[#FFFFFF]'>
                    <h2 className=' pt-[20px] text-2xl font-bold text-black
                 leading-[50px]'> Free</h2>
                    <p className='text-[Inter] text-[32px] text-black font-bold leading-[50px] '>$0.00 <span className='text-[Inter] leading-6  text-[#767676] text-[15px]'>BD TK</span></p>

                    {/* silver card */}
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
                {/* gold */}
                <div className='text-center w-2/4 px-[33px] shadow-lg rounded-lg  bg-[#FFFFFF]'>


                    <div>
                        <h2 className='  text-2xl pt-[20px] font-bold text-black leading-[50px]'>Gold</h2>
                        <p className='text-[Inter] text-black text-[32px] font-bold leading-[50px] '>$120.00 <span className='text-[Inter] leading-6  text-[#767676] text-[15px]'>BD TK</span></p>

                        <div className='space-y-5'>
                            <div className='flex mt-10  gap-5 items-center'>
                                <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                                <p className='  text-[15px] capitalize leading-5'>Unlimited Blogs</p>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <p className=' text-[#FFB400] h-6'> <FaCheck /> </p>
                                <p className='  text-[15px] capitalize leading-5 '>1 Picture Per Blog</p>
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

                        <button onClick={() => navigate('/payment')} className='font-bold mt-10   text-sm text-[#2B2B2B] rounded-[30px] bg-[#FFB400] shadow-2xl  px-10 py-[10px]'> Buy  NOW</button>

                    </div>
                </div>
                {/* diamond
                <div className='px-[33px] text-center shadow-lg rounded-lg pt-[56px] bg-[#FFFFFF]'>
                    <h2 className='  text-2xl font-bold text-black
                 leading-[50px]'>Dimond</h2>
                    <p className='text-[Inter] text-black text-[32px] font-bold leading-[50px] '>$80.00 <span className='text-[Inter] leading-6   text-[#767676] text-[15px]'>/Hour</span></p>
                    
                    <div className='space-y-5'>
                        <div className='flex gap-5 mt-10  items-center'>
                            <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                            <p className='  text-[15px] capitalize leading-5'>UI Design</p>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <p className=' text-[#FFB400] h-6'> <FaCheck /> </p>
                            <p className='  text-[15px] capitalize leading-5 '>web development</p>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                            <p className='  text-[15px] capitalize leading-5'>logo design</p>
                        </div>

                        <div className='flex gap-5 items-center'>
                            <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                            <p className='  text-[15px] capitalize leading-5'>seo optimization</p>
                        </div>

                        <div className='flex gap-5 items-center whitespace-nowrap'>
                            <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                            <p className='  text-[15px] capitalize leading-5'>wordPress integration</p>
                        </div>

                        <div className='flex gap-5 items-center'>
                            <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                            <p className='  text-[15px] capitalize leading-5'>5 Websites</p>
                        </div>

                        <div className='flex gap-5 items-center'>
                            <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                            <p className='  text-[15px] capitalize leading-5'>unlimited user</p>
                        </div>

                        <div className='flex gap-5 items-center'>
                            <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                            <p className='  text-[15px] capitalize leading-5'>20 gB bandwith</p>
                        </div>

                    </div>
                    <button className='font-bold mt-10   text-sm text-[#2B2B2B] rounded-[30px] shadow-sm px-10 py-[10px]'>ORDER NOW</button>
                </div> */}
            </div>
        </div >
    );
};

export default Premium;