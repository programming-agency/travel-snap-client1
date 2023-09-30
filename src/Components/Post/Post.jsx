import React from 'react';
import { FiMapPin, FiMessageSquare } from 'react-icons/fi';

const Post = () => {
    return (
        <div>
            <div className="card w-96  bg-white shadow-xl">
                <figure><img className='w-full' src="https://i.ibb.co/XFqXrdg/download.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h1>date</h1>
                    <h2 className="card-title">
                        Post by Name
                    </h2>
                    <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, consectetur. </p>
                    <div className="card-actions justify-between">
                        <div className='flex items-center gap-2' > <FiMapPin />Location</div>
                        <div className="flex items-center gap-2"> <FiMessageSquare />Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;