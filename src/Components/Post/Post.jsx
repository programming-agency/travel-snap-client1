import React from 'react';
import { FiMapPin, FiMessageSquare } from 'react-icons/fi';
import { SERVER_URL } from '../../config/constant';

const Post = ({post}) => {
    return (
        <div>
            <div className="card md:w-96 w-full   bg-white shadow-xl">
                <figure><img className='w-full' src={`${SERVER_URL}/${post.image}`} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1>{new Date(post?.createdAt).toDateString()}</h1>
                    <h2 className="card-title">
                        Post by {post?.userName}
                    </h2>
                    <p>{post?.content}</p>
                    <div className="card-actions justify-between">
                        <div className='flex items-center gap-2' > <FiMapPin />Location</div>
                        <div className="flex items-center gap-2"> <FiMessageSquare />Comment</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;